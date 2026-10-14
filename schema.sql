
-- ============================================================
-- NexHealth | Supabase Database Schema
-- PostgreSQL + Supabase Auth + Row Level Security
-- Designed to be safe to rerun without dropping existing data.
-- ============================================================

BEGIN;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- ============================================================
-- 1. USER PROFILES
-- profiles.id is the authenticated user's UUID.
-- ============================================================

CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT,
    date_of_birth DATE,
    gender TEXT,
    height_cm NUMERIC(6,2),
    weight_kg NUMERIC(6,2),
    allergies TEXT[] NOT NULL DEFAULT '{}',
    dietary_preferences TEXT[] NOT NULL DEFAULT '{}',
    activity_level TEXT,
    health_goals TEXT[] NOT NULL DEFAULT '{}',
    phone TEXT,
    avatar_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.profiles
    ADD COLUMN IF NOT EXISTS full_name TEXT,
    ADD COLUMN IF NOT EXISTS date_of_birth DATE,
    ADD COLUMN IF NOT EXISTS gender TEXT,
    ADD COLUMN IF NOT EXISTS height_cm NUMERIC(6,2),
    ADD COLUMN IF NOT EXISTS weight_kg NUMERIC(6,2),
    ADD COLUMN IF NOT EXISTS allergies TEXT[] NOT NULL DEFAULT '{}',
    ADD COLUMN IF NOT EXISTS dietary_preferences TEXT[] NOT NULL DEFAULT '{}',
    ADD COLUMN IF NOT EXISTS activity_level TEXT,
    ADD COLUMN IF NOT EXISTS health_goals TEXT[] NOT NULL DEFAULT '{}',
    ADD COLUMN IF NOT EXISTS phone TEXT,
    ADD COLUMN IF NOT EXISTS avatar_url TEXT,
    ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

-- ============================================================
-- 1A. ACCOUNT-SCOPED WORKSPACE SNAPSHOT
-- Stores app state through the signed-in user's JWT and RLS.
-- No service-role key is needed by the application.
-- ============================================================

CREATE TABLE IF NOT EXISTS public.workspace_state (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    data JSONB NOT NULL DEFAULT '{}'::JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- 2. PRIVACY AND CONSENT
-- ============================================================

CREATE TABLE IF NOT EXISTS public.consent_preferences (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    ai_processing BOOLEAN NOT NULL DEFAULT FALSE,
    data_sharing BOOLEAN NOT NULL DEFAULT FALSE,
    analytics BOOLEAN NOT NULL DEFAULT FALSE,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Repair older versions of this table if user_id was absent.
ALTER TABLE public.consent_preferences
    ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    ADD COLUMN IF NOT EXISTS ai_processing BOOLEAN NOT NULL DEFAULT FALSE,
    ADD COLUMN IF NOT EXISTS data_sharing BOOLEAN NOT NULL DEFAULT FALSE,
    ADD COLUMN IF NOT EXISTS analytics BOOLEAN NOT NULL DEFAULT FALSE,
    ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

-- Keep this compatible with PostgREST upserts that specify user_id as
-- the conflict target. PostgreSQL unique indexes allow multiple NULLs.
DROP INDEX IF EXISTS public.consent_preferences_user_id_uidx;
CREATE UNIQUE INDEX consent_preferences_user_id_uidx
    ON public.consent_preferences(user_id);

CREATE TABLE IF NOT EXISTS public.consent_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    consent_type TEXT NOT NULL,
    granted BOOLEAN NOT NULL,
    details JSONB NOT NULL DEFAULT '{}'::JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.data_access_grants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    recipient_name TEXT NOT NULL,
    recipient_type TEXT,
    purpose TEXT,
    granted BOOLEAN NOT NULL DEFAULT FALSE,
    expires_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- 3. MEDICAL DOCUMENTS
-- Keep uploaded files in a private Supabase Storage bucket.
-- Store only their storage paths in this table.
-- ============================================================

CREATE TABLE IF NOT EXISTS public.medical_documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    document_name TEXT NOT NULL,
    document_type TEXT NOT NULL DEFAULT 'other',
    storage_path TEXT,
    mime_type TEXT,
    file_size_bytes BIGINT,
    document_date DATE,
    provider_name TEXT,
    notes TEXT,
    processing_status TEXT NOT NULL DEFAULT 'pending',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.prescription_extractions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    document_id UUID REFERENCES public.medical_documents(id) ON DELETE SET NULL,
    extracted_text TEXT,
    extracted_data JSONB NOT NULL DEFAULT '{}'::JSONB,
    review_required BOOLEAN NOT NULL DEFAULT TRUE,
    extraction_confidence NUMERIC(5,2),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.lab_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    document_id UUID REFERENCES public.medical_documents(id) ON DELETE SET NULL,
    test_name TEXT NOT NULL,
    value NUMERIC,
    unit TEXT,
    reference_min NUMERIC,
    reference_max NUMERIC,
    result_status TEXT NOT NULL DEFAULT 'unknown',
    observed_at DATE,
    needs_review BOOLEAN NOT NULL DEFAULT FALSE,
    source_text TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.health_summaries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    document_id UUID REFERENCES public.medical_documents(id) ON DELETE SET NULL,
    summary_text TEXT NOT NULL,
    key_findings JSONB NOT NULL DEFAULT '[]'::JSONB,
    suggested_questions JSONB NOT NULL DEFAULT '[]'::JSONB,
    model_name TEXT,
    disclaimer TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.ai_analyses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    document_id UUID REFERENCES public.medical_documents(id) ON DELETE SET NULL,
    analysis_type TEXT NOT NULL,
    input_text TEXT,
    result JSONB NOT NULL DEFAULT '{}'::JSONB,
    model_name TEXT,
    review_required BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- 4. MEDICATIONS
-- ============================================================

CREATE TABLE IF NOT EXISTS public.medications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    document_id UUID REFERENCES public.medical_documents(id) ON DELETE SET NULL,
    medication_name TEXT NOT NULL,
    dosage TEXT,
    frequency TEXT,
    instructions TEXT,
    start_date DATE,
    end_date DATE,
    prescribing_doctor TEXT,
    active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- 5. DIET PLANS AND MEALS
-- ============================================================

CREATE TABLE IF NOT EXISTS public.diet_plans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    plan_name TEXT NOT NULL DEFAULT 'My Diet Plan',
    daily_calorie_target INTEGER,
    protein_target_g NUMERIC,
    carbohydrate_target_g NUMERIC,
    fat_target_g NUMERIC,
    dietary_preferences TEXT[] NOT NULL DEFAULT '{}',
    allergies TEXT[] NOT NULL DEFAULT '{}',
    plan_data JSONB NOT NULL DEFAULT '{}'::JSONB,
    ai_generated BOOLEAN NOT NULL DEFAULT FALSE,
    active BOOLEAN NOT NULL DEFAULT TRUE,
    start_date DATE,
    end_date DATE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.diet_plan_meals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    diet_plan_id UUID REFERENCES public.diet_plans(id) ON DELETE CASCADE,
    meal_name TEXT NOT NULL,
    meal_type TEXT NOT NULL DEFAULT 'other',
    scheduled_time TIME,
    foods JSONB NOT NULL DEFAULT '[]'::JSONB,
    estimated_calories INTEGER,
    completed BOOLEAN NOT NULL DEFAULT FALSE,
    completed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- 6. TASKS AND ACTIVITY
-- ============================================================

CREATE TABLE IF NOT EXISTS public.health_tasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    task_type TEXT NOT NULL DEFAULT 'general',
    due_at TIMESTAMPTZ,
    completed BOOLEAN NOT NULL DEFAULT FALSE,
    completed_at TIMESTAMPTZ,
    reminder_enabled BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.activity_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    activity_type TEXT NOT NULL,
    quantity NUMERIC,
    unit TEXT,
    notes TEXT,
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- 7. HEALTHCARE PROVIDERS AND SERVICES
-- ============================================================

CREATE TABLE IF NOT EXISTS public.healthcare_providers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    provider_name TEXT NOT NULL,
    specialty TEXT,
    organization_name TEXT,
    address TEXT,
    city TEXT,
    phone TEXT,
    verified BOOLEAN NOT NULL DEFAULT FALSE,
    metadata JSONB NOT NULL DEFAULT '{}'::JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.healthcare_services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    provider_id UUID REFERENCES public.healthcare_providers(id) ON DELETE SET NULL,
    service_name TEXT NOT NULL,
    service_type TEXT NOT NULL,
    description TEXT,
    price NUMERIC(12,2),
    currency TEXT NOT NULL DEFAULT 'INR',
    available BOOLEAN NOT NULL DEFAULT TRUE,
    metadata JSONB NOT NULL DEFAULT '{}'::JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.appointments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    provider_id UUID REFERENCES public.healthcare_providers(id) ON DELETE SET NULL,
    service_id UUID REFERENCES public.healthcare_services(id) ON DELETE SET NULL,
    appointment_type TEXT NOT NULL DEFAULT 'consultation',
    scheduled_at TIMESTAMPTZ NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending',
    reason TEXT,
    notes TEXT,
    confirmation_code TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- 8. AI MENTOR CONVERSATIONS
-- ============================================================

CREATE TABLE IF NOT EXISTS public.mentor_conversations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    title TEXT NOT NULL DEFAULT 'Health conversation',
    language TEXT NOT NULL DEFAULT 'en',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.mentor_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    conversation_id UUID REFERENCES public.mentor_conversations(id) ON DELETE CASCADE,
    role TEXT NOT NULL,
    content TEXT NOT NULL,
    metadata JSONB NOT NULL DEFAULT '{}'::JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- 9. REPAIR MISSING user_id COLUMNS
--
-- CREATE TABLE IF NOT EXISTS does not alter old tables.
-- Add user_id to existing user-owned tables if it is missing.
-- Existing rows are preserved. Existing rows with NULL user_id
-- will need to be associated with their rightful owners.
-- ============================================================

ALTER TABLE public.consent_history
    ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

ALTER TABLE public.data_access_grants
    ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

ALTER TABLE public.medical_documents
    ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

ALTER TABLE public.prescription_extractions
    ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

ALTER TABLE public.lab_results
    ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

ALTER TABLE public.health_summaries
    ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

ALTER TABLE public.ai_analyses
    ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

ALTER TABLE public.medications
    ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

ALTER TABLE public.diet_plans
    ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

ALTER TABLE public.diet_plan_meals
    ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

ALTER TABLE public.health_tasks
    ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

ALTER TABLE public.activity_logs
    ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

ALTER TABLE public.appointments
    ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

ALTER TABLE public.mentor_conversations
    ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

ALTER TABLE public.mentor_messages
    ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

-- ============================================================
-- 10. INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_medical_documents_user
    ON public.medical_documents(user_id);

CREATE INDEX IF NOT EXISTS idx_lab_results_user_date
    ON public.lab_results(user_id, observed_at DESC);

CREATE INDEX IF NOT EXISTS idx_medications_user_active
    ON public.medications(user_id, active);

CREATE INDEX IF NOT EXISTS idx_diet_plans_user_active
    ON public.diet_plans(user_id, active);

CREATE INDEX IF NOT EXISTS idx_health_tasks_user_due
    ON public.health_tasks(user_id, due_at);

CREATE INDEX IF NOT EXISTS idx_appointments_user_date
    ON public.appointments(user_id, scheduled_at);

CREATE INDEX IF NOT EXISTS idx_mentor_conversations_user
    ON public.mentor_conversations(user_id);

CREATE INDEX IF NOT EXISTS idx_mentor_messages_conversation
    ON public.mentor_messages(conversation_id, created_at);

CREATE INDEX IF NOT EXISTS idx_consent_history_user
    ON public.consent_history(user_id);

-- ============================================================
-- 11. UPDATED_AT TRIGGER
-- ============================================================

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = ''
AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS profiles_updated_at ON public.profiles;
CREATE TRIGGER profiles_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

DROP TRIGGER IF EXISTS consent_preferences_updated_at ON public.consent_preferences;
CREATE TRIGGER consent_preferences_updated_at
BEFORE UPDATE ON public.consent_preferences
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

DROP TRIGGER IF EXISTS medical_documents_updated_at ON public.medical_documents;
CREATE TRIGGER medical_documents_updated_at
BEFORE UPDATE ON public.medical_documents
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

DROP TRIGGER IF EXISTS medications_updated_at ON public.medications;
CREATE TRIGGER medications_updated_at
BEFORE UPDATE ON public.medications
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

DROP TRIGGER IF EXISTS diet_plans_updated_at ON public.diet_plans;
CREATE TRIGGER diet_plans_updated_at
BEFORE UPDATE ON public.diet_plans
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

DROP TRIGGER IF EXISTS appointments_updated_at ON public.appointments;
CREATE TRIGGER appointments_updated_at
BEFORE UPDATE ON public.appointments
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

DROP TRIGGER IF EXISTS mentor_conversations_updated_at ON public.mentor_conversations;
CREATE TRIGGER mentor_conversations_updated_at
BEFORE UPDATE ON public.mentor_conversations
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ============================================================
-- 12. CREATE PROFILE AFTER SIGNUP
-- ============================================================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
    INSERT INTO public.profiles (id, full_name)
    VALUES (
        NEW.id,
        NULLIF(NEW.raw_user_meta_data ->> 'full_name', '')
    )
    ON CONFLICT (id) DO NOTHING;

    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============================================================
-- 13. ROW LEVEL SECURITY
-- Users can access only their own records.
-- Providers/services are public read-only catalogue data.
-- ============================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workspace_state ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.consent_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.consent_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.data_access_grants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medical_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.prescription_extractions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lab_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.health_summaries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_analyses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.diet_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.diet_plan_meals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.health_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.healthcare_providers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.healthcare_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mentor_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mentor_messages ENABLE ROW LEVEL SECURITY;

-- Profiles use id, not user_id.
DROP POLICY IF EXISTS profiles_select_own ON public.profiles;
CREATE POLICY profiles_select_own ON public.profiles
FOR SELECT TO authenticated
USING (id = (SELECT auth.uid()));

DROP POLICY IF EXISTS profiles_insert_own ON public.profiles;
CREATE POLICY profiles_insert_own ON public.profiles
FOR INSERT TO authenticated
WITH CHECK (id = (SELECT auth.uid()));

DROP POLICY IF EXISTS profiles_update_own ON public.profiles;
CREATE POLICY profiles_update_own ON public.profiles
FOR UPDATE TO authenticated
USING (id = (SELECT auth.uid()))
WITH CHECK (id = (SELECT auth.uid()));

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

-- Create consistent owner policies for user-owned tables.
-- This also replaces the failing consent_preferences policies.
DO $$
DECLARE
    tbl TEXT;
    owned_tables TEXT[] := ARRAY[
        'consent_preferences',
        'consent_history',
        'data_access_grants',
        'medical_documents',
        'prescription_extractions',
        'lab_results',
        'health_summaries',
        'ai_analyses',
        'medications',
        'diet_plans',
        'diet_plan_meals',
        'health_tasks',
        'activity_logs',
        'appointments',
        'mentor_conversations',
        'mentor_messages'
    ];
BEGIN
    FOREACH tbl IN ARRAY owned_tables
    LOOP
        EXECUTE format(
            'DROP POLICY IF EXISTS %I ON public.%I',
            'nexhealth_select_own', tbl
        );

        EXECUTE format(
            'CREATE POLICY %I ON public.%I FOR SELECT TO authenticated USING (user_id = (SELECT auth.uid()))',
            'nexhealth_select_own', tbl
        );

        EXECUTE format(
            'DROP POLICY IF EXISTS %I ON public.%I',
            'nexhealth_insert_own', tbl
        );

        EXECUTE format(
            'CREATE POLICY %I ON public.%I FOR INSERT TO authenticated WITH CHECK (user_id = (SELECT auth.uid()))',
            'nexhealth_insert_own', tbl
        );

        EXECUTE format(
            'DROP POLICY IF EXISTS %I ON public.%I',
            'nexhealth_update_own', tbl
        );

        EXECUTE format(
            'CREATE POLICY %I ON public.%I FOR UPDATE TO authenticated USING (user_id = (SELECT auth.uid())) WITH CHECK (user_id = (SELECT auth.uid()))',
            'nexhealth_update_own', tbl
        );

        EXECUTE format(
            'DROP POLICY IF EXISTS %I ON public.%I',
            'nexhealth_delete_own', tbl
        );

        EXECUTE format(
            'CREATE POLICY %I ON public.%I FOR DELETE TO authenticated USING (user_id = (SELECT auth.uid()))',
            'nexhealth_delete_own', tbl
        );
    END LOOP;
END;
$$;

-- Providers and services can be viewed by signed-in users.
-- Only trusted administrative/server-side processes should modify them.
DROP POLICY IF EXISTS healthcare_providers_authenticated_read
    ON public.healthcare_providers;
CREATE POLICY healthcare_providers_authenticated_read
ON public.healthcare_providers
FOR SELECT TO authenticated
USING (TRUE);

DROP POLICY IF EXISTS healthcare_services_authenticated_read
    ON public.healthcare_services;
CREATE POLICY healthcare_services_authenticated_read
ON public.healthcare_services
FOR SELECT TO authenticated
USING (TRUE);

-- ============================================================
-- 14. PRIVATE STORAGE BUCKET FOR MEDICAL DOCUMENTS
-- Expected upload path: <authenticated-user-uuid>/<filename>
-- ============================================================

INSERT INTO storage.buckets (
    id,
    name,
    public,
    file_size_limit,
    allowed_mime_types
)
VALUES (
    'medical-documents',
    'medical-documents',
    FALSE,
    10485760,
    ARRAY[
        'application/pdf',
        'image/jpeg',
        'image/png',
        'image/webp'
    ]
)
ON CONFLICT (id) DO UPDATE SET
    public = FALSE,
    file_size_limit = 10485760,
    allowed_mime_types = EXCLUDED.allowed_mime_types;

DROP POLICY IF EXISTS medical_documents_storage_select
    ON storage.objects;
CREATE POLICY medical_documents_storage_select
ON storage.objects
FOR SELECT TO authenticated
USING (
    bucket_id = 'medical-documents'
    AND (storage.foldername(name))[1] = (SELECT auth.uid())::TEXT
);

DROP POLICY IF EXISTS medical_documents_storage_insert
    ON storage.objects;
CREATE POLICY medical_documents_storage_insert
ON storage.objects
FOR INSERT TO authenticated
WITH CHECK (
    bucket_id = 'medical-documents'
    AND (storage.foldername(name))[1] = (SELECT auth.uid())::TEXT
);

DROP POLICY IF EXISTS medical_documents_storage_update
    ON storage.objects;
CREATE POLICY medical_documents_storage_update
ON storage.objects
FOR UPDATE TO authenticated
USING (
    bucket_id = 'medical-documents'
    AND (storage.foldername(name))[1] = (SELECT auth.uid())::TEXT
)
WITH CHECK (
    bucket_id = 'medical-documents'
    AND (storage.foldername(name))[1] = (SELECT auth.uid())::TEXT
);

DROP POLICY IF EXISTS medical_documents_storage_delete
    ON storage.objects;
CREATE POLICY medical_documents_storage_delete
ON storage.objects
FOR DELETE TO authenticated
USING (
    bucket_id = 'medical-documents'
    AND (storage.foldername(name))[1] = (SELECT auth.uid())::TEXT
);

COMMIT;

-- ============================================================
-- END OF NEXHEALTH SCHEMA
-- ============================================================
