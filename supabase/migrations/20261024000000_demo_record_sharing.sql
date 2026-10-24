-- NexHealth prototype sharing. This is not an ABHA integration.
-- Codes only create access requests; record access requires the owner's approval.
BEGIN;

CREATE TABLE IF NOT EXISTS public.demo_record_shares (
    owner_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    code_hash TEXT NOT NULL UNIQUE CHECK (code_hash ~ '^[0-9a-f]{64}$'),
    active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.demo_record_access_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    recipient_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'revoked')),
    record_ids TEXT[] NOT NULL DEFAULT '{}',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    reviewed_at TIMESTAMPTZ,
    UNIQUE (owner_id, recipient_id),
    CHECK (owner_id <> recipient_id)
);

ALTER TABLE public.demo_record_shares ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.demo_record_access_requests ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.demo_record_shares FROM anon, authenticated;
REVOKE ALL ON public.demo_record_access_requests FROM anon, authenticated;

CREATE OR REPLACE FUNCTION public.create_demo_record_share(p_code_hash TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
    v_owner UUID := auth.uid();
BEGIN
    IF v_owner IS NULL THEN RAISE EXCEPTION 'Sign in required'; END IF;
    IF p_code_hash !~ '^[0-9a-f]{64}$' THEN RAISE EXCEPTION 'Invalid sharing code'; END IF;
    INSERT INTO public.demo_record_shares (owner_id, code_hash, active, updated_at)
    VALUES (v_owner, p_code_hash, TRUE, NOW())
    ON CONFLICT (owner_id) DO UPDATE
      SET code_hash = EXCLUDED.code_hash, active = TRUE, updated_at = NOW();
    UPDATE public.demo_record_access_requests
       SET status = 'revoked', record_ids = '{}', updated_at = NOW(), reviewed_at = NOW()
     WHERE owner_id = v_owner AND status = 'pending';
    RETURN jsonb_build_object('active', TRUE);
END;
$$;

CREATE OR REPLACE FUNCTION public.revoke_demo_record_share()
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE v_owner UUID := auth.uid();
BEGIN
    IF v_owner IS NULL THEN RAISE EXCEPTION 'Sign in required'; END IF;
    UPDATE public.demo_record_shares SET active = FALSE, updated_at = NOW() WHERE owner_id = v_owner;
    UPDATE public.demo_record_access_requests
       SET status = 'revoked', record_ids = '{}', updated_at = NOW(), reviewed_at = NOW()
     WHERE owner_id = v_owner AND status IN ('pending', 'approved');
    RETURN jsonb_build_object('revoked', TRUE);
END;
$$;

CREATE OR REPLACE FUNCTION public.request_demo_record_access(p_code_hash TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE v_recipient UUID := auth.uid(); v_owner UUID; v_status TEXT;
BEGIN
    IF v_recipient IS NULL THEN RAISE EXCEPTION 'Sign in required'; END IF;
    IF p_code_hash !~ '^[0-9a-f]{64}$' THEN RETURN jsonb_build_object('status', 'invalid'); END IF;
    SELECT owner_id INTO v_owner FROM public.demo_record_shares
     WHERE code_hash = p_code_hash AND active = TRUE;
    IF v_owner IS NULL THEN RETURN jsonb_build_object('status', 'invalid'); END IF;
    IF v_owner = v_recipient THEN RETURN jsonb_build_object('status', 'own_code'); END IF;
    INSERT INTO public.demo_record_access_requests AS existing (owner_id, recipient_id)
    VALUES (v_owner, v_recipient)
    ON CONFLICT (owner_id, recipient_id) DO UPDATE
      SET status = CASE
            WHEN existing.status IN ('rejected', 'revoked') THEN 'pending'
            ELSE existing.status
          END,
          record_ids = CASE
            WHEN existing.status IN ('rejected', 'revoked') THEN '{}'
            ELSE existing.record_ids
          END,
          created_at = CASE
            WHEN existing.status IN ('rejected', 'revoked') THEN NOW()
            ELSE existing.created_at
          END,
          updated_at = NOW()
    RETURNING status INTO v_status;
    RETURN jsonb_build_object('status', v_status);
END;
$$;

CREATE OR REPLACE FUNCTION public.list_demo_record_access()
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE v_owner UUID := auth.uid();
BEGIN
    IF v_owner IS NULL THEN RAISE EXCEPTION 'Sign in required'; END IF;
    RETURN jsonb_build_object(
      'share_active', EXISTS (SELECT 1 FROM public.demo_record_shares WHERE owner_id = v_owner AND active),
      'requests', COALESCE((
        SELECT jsonb_agg(jsonb_build_object(
          'id', r.id, 'status', r.status, 'recipient_email', u.email,
          'created_at', r.created_at
        ) ORDER BY r.created_at DESC)
        FROM public.demo_record_access_requests r
        JOIN auth.users u ON u.id = r.recipient_id
        WHERE r.owner_id = v_owner AND r.status IN ('pending', 'approved')
      ), '[]'::jsonb)
    );
END;
$$;

CREATE OR REPLACE FUNCTION public.review_demo_record_access(p_request_id UUID, p_approve BOOLEAN)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE v_owner UUID := auth.uid(); v_ids TEXT[];
BEGIN
    IF v_owner IS NULL THEN RAISE EXCEPTION 'Sign in required'; END IF;
    IF p_approve THEN
      SELECT COALESCE(array_agg(rec->>'id'), '{}') INTO v_ids
        FROM public.workspace_state ws,
             LATERAL jsonb_array_elements(COALESCE(ws.data->'records', '[]'::jsonb)) rec
       WHERE ws.user_id = v_owner AND COALESCE(rec->>'id', '') <> '';
      UPDATE public.demo_record_access_requests
         SET status = 'approved', record_ids = COALESCE(v_ids, '{}'), updated_at = NOW(), reviewed_at = NOW()
       WHERE id = p_request_id AND owner_id = v_owner AND status = 'pending';
    ELSE
      UPDATE public.demo_record_access_requests
         SET status = 'rejected', record_ids = '{}', updated_at = NOW(), reviewed_at = NOW()
       WHERE id = p_request_id AND owner_id = v_owner AND status = 'pending';
    END IF;
    IF NOT FOUND THEN RAISE EXCEPTION 'Request not found or already reviewed'; END IF;
    RETURN jsonb_build_object('updated', TRUE);
END;
$$;

CREATE OR REPLACE FUNCTION public.revoke_demo_record_access(p_request_id UUID)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE v_owner UUID := auth.uid();
BEGIN
    IF v_owner IS NULL THEN RAISE EXCEPTION 'Sign in required'; END IF;
    UPDATE public.demo_record_access_requests
       SET status = 'revoked', record_ids = '{}', updated_at = NOW(), reviewed_at = NOW()
     WHERE id = p_request_id AND owner_id = v_owner AND status = 'approved';
    IF NOT FOUND THEN RAISE EXCEPTION 'Approved access not found'; END IF;
    RETURN jsonb_build_object('revoked', TRUE);
END;
$$;

CREATE OR REPLACE FUNCTION public.get_shared_demo_records()
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE v_recipient UUID := auth.uid();
BEGIN
    IF v_recipient IS NULL THEN RAISE EXCEPTION 'Sign in required'; END IF;
    RETURN COALESCE((
      SELECT jsonb_agg(jsonb_build_object(
        'owner_email', owner.email,
        'records', COALESCE((
          SELECT jsonb_agg(rec ORDER BY rec->>'created_at' DESC)
            FROM jsonb_array_elements(COALESCE(ws.data->'records', '[]'::jsonb)) rec
           WHERE rec->>'id' = ANY(r.record_ids)
        ), '[]'::jsonb),
        'analyses', COALESCE((
          SELECT jsonb_agg(a ORDER BY a->>'created_at' DESC)
            FROM jsonb_array_elements(COALESCE(ws.data->'analyses', '[]'::jsonb)) a
           WHERE a->>'id' IN (
             SELECT rec->>'analysis_id'
               FROM jsonb_array_elements(COALESCE(ws.data->'records', '[]'::jsonb)) rec
              WHERE rec->>'id' = ANY(r.record_ids) AND COALESCE(rec->>'analysis_id', '') <> ''
           )
        ), '[]'::jsonb)
      ))
      FROM public.demo_record_access_requests r
      JOIN public.workspace_state ws ON ws.user_id = r.owner_id
      JOIN auth.users owner ON owner.id = r.owner_id
      WHERE r.recipient_id = v_recipient AND r.status = 'approved'
    ), '[]'::jsonb);
END;
$$;

CREATE OR REPLACE FUNCTION public.get_shared_demo_record(p_record_id TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE v_recipient UUID := auth.uid(); v_result JSONB;
BEGIN
    IF v_recipient IS NULL THEN RAISE EXCEPTION 'Sign in required'; END IF;
    SELECT jsonb_build_object(
      'id', rec->>'id', 'file_name', rec->>'file_name', 'mime_type', rec->>'mime_type',
      'storage', rec->>'storage', 'storage_path', rec->>'storage_path',
      'file_available', rec->'file_available'
    ) INTO v_result
      FROM public.demo_record_access_requests r
      JOIN public.workspace_state ws ON ws.user_id = r.owner_id
      CROSS JOIN LATERAL jsonb_array_elements(COALESCE(ws.data->'records', '[]'::jsonb)) rec
     WHERE r.recipient_id = v_recipient AND r.status = 'approved'
       AND rec->>'id' = p_record_id AND rec->>'id' = ANY(r.record_ids)
     LIMIT 1;
    RETURN v_result;
END;
$$;

CREATE OR REPLACE FUNCTION public.demo_record_object_is_shared(p_object_name TEXT)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $$
  SELECT EXISTS (
    SELECT 1
      FROM public.demo_record_access_requests r
      JOIN public.workspace_state ws ON ws.user_id = r.owner_id
      CROSS JOIN LATERAL jsonb_array_elements(COALESCE(ws.data->'records', '[]'::jsonb)) rec
     WHERE r.recipient_id = auth.uid() AND r.status = 'approved'
       AND rec->>'id' = ANY(r.record_ids)
       AND rec->>'storage' = 'supabase'
       AND rec->>'file_available' = 'true'
       AND rec->>'storage_path' = p_object_name
       AND split_part(p_object_name, '/', 1) = r.owner_id::TEXT
  );
$$;

REVOKE ALL ON FUNCTION public.create_demo_record_share(TEXT) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.revoke_demo_record_share() FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.request_demo_record_access(TEXT) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.list_demo_record_access() FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.review_demo_record_access(UUID, BOOLEAN) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.revoke_demo_record_access(UUID) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.get_shared_demo_records() FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.get_shared_demo_record(TEXT) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.demo_record_object_is_shared(TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.create_demo_record_share(TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION public.revoke_demo_record_share() TO authenticated;
GRANT EXECUTE ON FUNCTION public.request_demo_record_access(TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION public.list_demo_record_access() TO authenticated;
GRANT EXECUTE ON FUNCTION public.review_demo_record_access(UUID, BOOLEAN) TO authenticated;
GRANT EXECUTE ON FUNCTION public.revoke_demo_record_access(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_shared_demo_records() TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_shared_demo_record(TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION public.demo_record_object_is_shared(TEXT) TO authenticated;

DROP POLICY IF EXISTS medical_documents_storage_shared_read ON storage.objects;
CREATE POLICY medical_documents_storage_shared_read
ON storage.objects FOR SELECT TO authenticated
USING (
    bucket_id = 'medical-documents'
    AND public.demo_record_object_is_shared(name)
);

COMMIT;
