-- Approved NexHealth prototype sharing follows the owner's current workspace.
-- New and updated records are visible to the same approved accounts until revoked.
BEGIN;

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
           WHERE COALESCE(rec->>'id', '') <> ''
        ), '[]'::jsonb),
        'analyses', COALESCE((
          SELECT jsonb_agg(a ORDER BY a->>'created_at' DESC)
            FROM jsonb_array_elements(COALESCE(ws.data->'analyses', '[]'::jsonb)) a
           WHERE a->>'id' IN (
             SELECT rec->>'analysis_id'
               FROM jsonb_array_elements(COALESCE(ws.data->'records', '[]'::jsonb)) rec
              WHERE COALESCE(rec->>'id', '') <> ''
                AND COALESCE(rec->>'analysis_id', '') <> ''
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

REVOKE ALL ON FUNCTION public.get_shared_demo_records() FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.get_shared_demo_record(TEXT) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.demo_record_object_is_shared(TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_shared_demo_records() TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_shared_demo_record(TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION public.demo_record_object_is_shared(TEXT) TO authenticated;

COMMIT;
