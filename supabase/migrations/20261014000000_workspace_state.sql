-- Persist NexHealth workspace state for each authenticated Supabase user.
-- Safe to apply more than once.
BEGIN;

CREATE TABLE IF NOT EXISTS public.workspace_state (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    data JSONB NOT NULL DEFAULT '{}'::JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.workspace_state ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS workspace_state_select_own ON public.workspace_state;
CREATE POLICY workspace_state_select_own ON public.workspace_state
FOR SELECT TO authenticated USING (user_id = (SELECT auth.uid()));

DROP POLICY IF EXISTS workspace_state_insert_own ON public.workspace_state;
CREATE POLICY workspace_state_insert_own ON public.workspace_state
FOR INSERT TO authenticated WITH CHECK (user_id = (SELECT auth.uid()));

DROP POLICY IF EXISTS workspace_state_update_own ON public.workspace_state;
CREATE POLICY workspace_state_update_own ON public.workspace_state
FOR UPDATE TO authenticated
USING (user_id = (SELECT auth.uid()))
WITH CHECK (user_id = (SELECT auth.uid()));

GRANT SELECT, INSERT, UPDATE ON public.workspace_state TO authenticated;

COMMIT;
