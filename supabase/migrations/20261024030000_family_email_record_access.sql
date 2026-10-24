-- Let signed-in family accounts request read-only access by email.
-- The record owner must approve the request before any record is returned.
BEGIN;

CREATE OR REPLACE FUNCTION public.request_demo_family_access(p_email TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
    v_requester UUID := auth.uid();
    v_owner UUID;
    v_requester_email_confirmed_at TIMESTAMPTZ;
BEGIN
    IF v_requester IS NULL THEN RAISE EXCEPTION 'Sign in required'; END IF;
    IF p_email IS NULL
       OR length(btrim(p_email)) > 254
       OR p_email !~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$' THEN
        RAISE EXCEPTION 'Invalid email address';
    END IF;

    SELECT email_confirmed_at
      INTO v_requester_email_confirmed_at
      FROM auth.users
     WHERE id = v_requester;
    IF v_requester_email_confirmed_at IS NULL THEN
        RAISE EXCEPTION 'Confirm your email before requesting family access';
    END IF;

    -- Only resolve verified accounts that have explicitly enabled record requests.
    SELECT u.id
      INTO v_owner
      FROM auth.users u
      JOIN public.demo_record_shares s ON s.owner_id = u.id AND s.active
     WHERE lower(u.email) = lower(btrim(p_email))
       AND u.email_confirmed_at IS NOT NULL
     LIMIT 1;

    -- Keep the response identical for unknown, own, or non-share-enabled addresses.
    -- This prevents this endpoint from being used as an account/email lookup service.
    IF v_owner IS NULL OR v_owner = v_requester THEN
        RETURN jsonb_build_object('status', 'submitted');
    END IF;

    IF (
        SELECT COUNT(*)
          FROM public.demo_record_access_requests
         WHERE recipient_id = v_requester
           AND status = 'pending'
           AND created_at > NOW() - INTERVAL '1 hour'
    ) >= 10 THEN
        RETURN jsonb_build_object('status', 'limited');
    END IF;

    INSERT INTO public.demo_record_access_requests AS existing (owner_id, recipient_id)
    VALUES (v_owner, v_requester)
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
          updated_at = NOW();

    RETURN jsonb_build_object('status', 'submitted');
END;
$$;

-- Approved family accounts see the owner's current records, including later additions.
-- Approval remains explicit and revocation updates the same access-request row.
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
        ), '[]'::jsonb),
        'analyses', COALESCE((
          SELECT jsonb_agg(a ORDER BY a->>'created_at' DESC)
            FROM jsonb_array_elements(COALESCE(ws.data->'analyses', '[]'::jsonb)) a
           WHERE a->>'id' IN (
             SELECT rec->>'analysis_id'
               FROM jsonb_array_elements(COALESCE(ws.data->'records', '[]'::jsonb)) rec
              WHERE COALESCE(rec->>'analysis_id', '') <> ''
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
       AND rec->>'id' = p_record_id
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
       AND rec->>'storage' = 'supabase'
       AND rec->>'file_available' = 'true'
       AND rec->>'storage_path' = p_object_name
       AND split_part(p_object_name, '/', 1) = r.owner_id::TEXT
  );
$$;

REVOKE ALL ON FUNCTION public.request_demo_family_access(TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.request_demo_family_access(TEXT) TO authenticated;
REVOKE ALL ON FUNCTION public.get_shared_demo_records() FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.get_shared_demo_record(TEXT) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.demo_record_object_is_shared(TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_shared_demo_records() TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_shared_demo_record(TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION public.demo_record_object_is_shared(TEXT) TO authenticated;

COMMIT;
