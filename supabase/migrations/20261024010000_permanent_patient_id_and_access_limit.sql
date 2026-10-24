-- Permanent NexHealth prototype patient IDs and an owner-controlled sharing cap.
-- These IDs are not ABHA numbers and do not grant record access by themselves.
BEGIN;

CREATE TABLE IF NOT EXISTS public.demo_patient_identities (
    owner_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    patient_id TEXT NOT NULL UNIQUE CHECK (patient_id ~ '^[1-9][0-9]{13}$'),
    max_access_accounts INTEGER NOT NULL DEFAULT 3 CHECK (max_access_accounts BETWEEN 1 AND 10),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.demo_patient_identities ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.demo_patient_identities FROM anon, authenticated;

DO $$
DECLARE
    existing_share RECORD;
    candidate_id TEXT;
BEGIN
    FOR existing_share IN
        SELECT owner_id FROM public.demo_record_shares
    LOOP
        IF NOT EXISTS (
            SELECT 1 FROM public.demo_patient_identities WHERE owner_id = existing_share.owner_id
        ) THEN
            LOOP
                candidate_id := (10000000000000 + floor(random() * 90000000000000)::BIGINT)::TEXT;
                EXIT WHEN NOT EXISTS (
                    SELECT 1 FROM public.demo_patient_identities WHERE patient_id = candidate_id
                );
            END LOOP;
            INSERT INTO public.demo_patient_identities (owner_id, patient_id)
            VALUES (existing_share.owner_id, candidate_id)
            ON CONFLICT (owner_id) DO NOTHING;
        END IF;
    END LOOP;
END;
$$;

CREATE OR REPLACE FUNCTION public.get_or_create_demo_patient_identity(p_candidate_id TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
    v_owner UUID := auth.uid();
    v_patient_id TEXT;
BEGIN
    IF v_owner IS NULL THEN RAISE EXCEPTION 'Sign in required'; END IF;
    IF p_candidate_id !~ '^[1-9][0-9]{13}$' THEN RAISE EXCEPTION 'Invalid patient ID'; END IF;

    INSERT INTO public.demo_patient_identities (owner_id, patient_id)
    VALUES (v_owner, p_candidate_id)
    ON CONFLICT DO NOTHING;

    SELECT patient_id INTO v_patient_id
      FROM public.demo_patient_identities
     WHERE owner_id = v_owner;

    IF v_patient_id IS NULL THEN
        RETURN jsonb_build_object('status', 'collision');
    END IF;
    RETURN jsonb_build_object('status', 'ready', 'patient_id', v_patient_id);
END;
$$;

CREATE OR REPLACE FUNCTION public.enable_demo_record_sharing(p_code_hash TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE v_owner UUID := auth.uid();
BEGIN
    IF v_owner IS NULL THEN RAISE EXCEPTION 'Sign in required'; END IF;
    IF p_code_hash !~ '^[0-9a-f]{64}$' THEN RAISE EXCEPTION 'Invalid sharing token'; END IF;
    INSERT INTO public.demo_record_shares (owner_id, code_hash, active, updated_at)
    VALUES (v_owner, p_code_hash, TRUE, NOW())
    ON CONFLICT (owner_id) DO UPDATE
      SET active = TRUE, updated_at = NOW();
    RETURN jsonb_build_object('active', TRUE);
END;
$$;

CREATE OR REPLACE FUNCTION public.request_demo_patient_access(
    p_patient_id TEXT,
    p_legacy_code_hash TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE v_recipient UUID := auth.uid(); v_owner UUID; v_status TEXT;
BEGIN
    IF v_recipient IS NULL THEN RAISE EXCEPTION 'Sign in required'; END IF;
    IF p_patient_id !~ '^[0-9]{14}$' OR p_legacy_code_hash !~ '^[0-9a-f]{64}$' THEN
        RETURN jsonb_build_object('status', 'invalid');
    END IF;

    SELECT s.owner_id INTO v_owner
      FROM public.demo_record_shares s
      LEFT JOIN public.demo_patient_identities i ON i.owner_id = s.owner_id
     WHERE s.active = TRUE
       AND (i.patient_id = p_patient_id OR s.code_hash = p_legacy_code_hash)
     LIMIT 1;

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
      'share_active', EXISTS (
        SELECT 1 FROM public.demo_record_shares WHERE owner_id = v_owner AND active
      ),
      'patient_id', (
        SELECT patient_id FROM public.demo_patient_identities WHERE owner_id = v_owner
      ),
      'max_access_accounts', COALESCE((
        SELECT max_access_accounts FROM public.demo_patient_identities WHERE owner_id = v_owner
      ), 3),
      'approved_accounts', (
        SELECT COUNT(*)::INTEGER FROM public.demo_record_access_requests
         WHERE owner_id = v_owner AND status = 'approved'
      ),
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
DECLARE
    v_owner UUID := auth.uid();
    v_ids TEXT[];
    v_limit INTEGER;
    v_approved INTEGER;
BEGIN
    IF v_owner IS NULL THEN RAISE EXCEPTION 'Sign in required'; END IF;
    IF p_approve THEN
      SELECT max_access_accounts INTO v_limit
        FROM public.demo_patient_identities
       WHERE owner_id = v_owner
       FOR UPDATE;
      v_limit := COALESCE(v_limit, 3);
      SELECT COUNT(*)::INTEGER INTO v_approved
        FROM public.demo_record_access_requests
       WHERE owner_id = v_owner AND status = 'approved';
      IF v_approved >= v_limit THEN
        RETURN jsonb_build_object('status', 'limit_reached', 'limit', v_limit);
      END IF;

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

CREATE OR REPLACE FUNCTION public.set_demo_record_access_limit(p_limit INTEGER)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
    v_owner UUID := auth.uid();
    v_approved INTEGER;
BEGIN
    IF v_owner IS NULL THEN RAISE EXCEPTION 'Sign in required'; END IF;
    IF p_limit IS NULL OR p_limit < 1 OR p_limit > 10 THEN RAISE EXCEPTION 'Limit must be between 1 and 10'; END IF;
    PERFORM 1 FROM public.demo_patient_identities WHERE owner_id = v_owner FOR UPDATE;
    IF NOT FOUND THEN RAISE EXCEPTION 'Create a patient ID first'; END IF;
    SELECT COUNT(*)::INTEGER INTO v_approved
      FROM public.demo_record_access_requests
     WHERE owner_id = v_owner AND status = 'approved';
    IF p_limit < v_approved THEN
      RETURN jsonb_build_object('status', 'limit_below_current', 'approved_accounts', v_approved);
    END IF;
    UPDATE public.demo_patient_identities
       SET max_access_accounts = p_limit, updated_at = NOW()
     WHERE owner_id = v_owner;
    RETURN jsonb_build_object('max_access_accounts', p_limit);
END;
$$;

REVOKE ALL ON FUNCTION public.get_or_create_demo_patient_identity(TEXT) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.enable_demo_record_sharing(TEXT) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.request_demo_patient_access(TEXT, TEXT) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.list_demo_record_access() FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.review_demo_record_access(UUID, BOOLEAN) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.set_demo_record_access_limit(INTEGER) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_or_create_demo_patient_identity(TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION public.enable_demo_record_sharing(TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION public.request_demo_patient_access(TEXT, TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION public.list_demo_record_access() TO authenticated;
GRANT EXECUTE ON FUNCTION public.review_demo_record_access(UUID, BOOLEAN) TO authenticated;
GRANT EXECUTE ON FUNCTION public.set_demo_record_access_limit(INTEGER) TO authenticated;

COMMIT;
