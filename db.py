
import os
from datetime import datetime, timezone
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY") or os.getenv("SUPABASE_KEY")

supabase: Client | None = None

if SUPABASE_URL and SUPABASE_KEY:
    supabase = create_client(SUPABASE_URL, SUPABASE_KEY)


class DatabaseError(Exception):
    pass


def get_db() -> Client:
    if supabase is None:
        raise DatabaseError(
            "Supabase is not configured. Set SUPABASE_URL and SUPABASE_KEY in .env."
        )
    return supabase


def _execute(query):
    try:
        response = query.execute()
        return response.data or []
    except Exception as exc:
        raise DatabaseError(str(exc)) from exc


def _timestamp():
    return datetime.now(timezone.utc).isoformat()


def get_profile(user_id):
    rows = _execute(
        get_db()
        .table("profiles")
        .select("*")
        .eq("id", user_id)
        .limit(1)
    )
    return rows[0] if rows else None


def save_profile(user_id, data):
    allowed_fields = {
        "full_name",
        "date_of_birth",
        "gender",
        "height_cm",
        "weight_kg",
        "allergies",
        "dietary_preferences",
        "activity_level",
        "health_goals",
        "phone",
        "avatar_url",
    }

    payload = {
        key: value
        for key, value in data.items()
        if key in allowed_fields
    }
    payload["id"] = user_id
    payload["updated_at"] = _timestamp()

    rows = _execute(
        get_db()
        .table("profiles")
        .upsert(payload, on_conflict="id")
    )
    return rows[0] if rows else payload


def list_medical_records(user_id):
    return _execute(
        get_db()
        .table("medical_documents")
        .select("*")
        .eq("user_id", user_id)
        .order("created_at", desc=True)
    )


def create_medical_record(user_id, data):
    allowed_fields = {
        "document_name",
        "document_type",
        "storage_path",
        "mime_type",
        "file_size_bytes",
        "document_date",
        "provider_name",
        "notes",
        "processing_status",
    }

    payload = {
        key: value
        for key, value in data.items()
        if key in allowed_fields
    }
    if not payload.get("document_name"):
        raise DatabaseError("document_name is required to create a medical document.")
    payload["user_id"] = user_id

    rows = _execute(
        get_db()
        .table("medical_documents")
        .insert(payload)
    )
    return rows[0] if rows else payload


def get_medical_record(user_id, record_id):
    rows = _execute(
        get_db()
        .table("medical_documents")
        .select("*")
        .eq("user_id", user_id)
        .eq("id", record_id)
        .limit(1)
    )
    return rows[0] if rows else None


def update_medical_record(user_id, record_id, data):
    allowed_fields = {
        "document_name",
        "document_type",
        "storage_path",
        "mime_type",
        "file_size_bytes",
        "document_date",
        "provider_name",
        "notes",
        "processing_status",
    }

    payload = {
        key: value
        for key, value in data.items()
        if key in allowed_fields
    }

    if not payload:
        return get_medical_record(user_id, record_id)

    rows = _execute(
        get_db()
        .table("medical_documents")
        .update(payload)
        .eq("user_id", user_id)
        .eq("id", record_id)
    )
    return rows[0] if rows else None


def delete_medical_record(user_id, record_id):
    rows = _execute(
        get_db()
        .table("medical_documents")
        .delete()
        .eq("user_id", user_id)
        .eq("id", record_id)
    )
    return bool(rows)


def list_appointments(user_id):
    return _execute(
        get_db()
        .table("appointments")
        .select("*")
        .eq("user_id", user_id)
        .order("scheduled_at", desc=False)
    )


def create_appointment(user_id, data):
    allowed_fields = {
        "provider_id",
        "service_id",
        "appointment_type",
        "scheduled_at",
        "reason",
        "notes",
        "status",
        "confirmation_code",
    }

    payload = {
        key: value
        for key, value in data.items()
        if key in allowed_fields
    }
    if not payload.get("scheduled_at"):
        raise DatabaseError("scheduled_at is required to create an appointment.")
    payload["user_id"] = user_id
    payload.setdefault("status", "scheduled")

    rows = _execute(
        get_db()
        .table("appointments")
        .insert(payload)
    )
    return rows[0] if rows else payload


def update_appointment(user_id, appointment_id, data):
    allowed_fields = {
        "provider_id",
        "service_id",
        "appointment_type",
        "scheduled_at",
        "reason",
        "notes",
        "status",
        "confirmation_code",
    }

    payload = {
        key: value
        for key, value in data.items()
        if key in allowed_fields
    }

    if not payload:
        return None

    rows = _execute(
        get_db()
        .table("appointments")
        .update(payload)
        .eq("user_id", user_id)
        .eq("id", appointment_id)
    )
    return rows[0] if rows else None


def delete_appointment(user_id, appointment_id):
    rows = _execute(
        get_db()
        .table("appointments")
        .delete()
        .eq("user_id", user_id)
        .eq("id", appointment_id)
    )
    return bool(rows)


def list_tasks(user_id):
    return _execute(
        get_db()
        .table("health_tasks")
        .select("*")
        .eq("user_id", user_id)
        .order("created_at", desc=True)
    )


def create_task(user_id, data):
    allowed_fields = {
        "title",
        "description",
        "task_type",
        "due_at",
        "completed",
        "completed_at",
        "reminder_enabled",
    }

    payload = {
        key: value
        for key, value in data.items()
        if key in allowed_fields
    }
    if not payload.get("title"):
        raise DatabaseError("title is required to create a health task.")
    payload["user_id"] = user_id
    payload.setdefault("completed", False)

    rows = _execute(
        get_db()
        .table("health_tasks")
        .insert(payload)
    )
    return rows[0] if rows else payload


def update_task(user_id, task_id, data):
    allowed_fields = {
        "title",
        "description",
        "task_type",
        "due_at",
        "completed",
        "completed_at",
        "reminder_enabled",
    }

    payload = {
        key: value
        for key, value in data.items()
        if key in allowed_fields
    }

    if not payload:
        return None

    rows = _execute(
        get_db()
        .table("health_tasks")
        .update(payload)
        .eq("user_id", user_id)
        .eq("id", task_id)
    )
    return rows[0] if rows else None


def delete_task(user_id, task_id):
    rows = _execute(
        get_db()
        .table("health_tasks")
        .delete()
        .eq("user_id", user_id)
        .eq("id", task_id)
    )
    return bool(rows)


def get_consent_settings(user_id):
    rows = _execute(
        get_db()
        .table("consent_preferences")
        .select("*")
        .eq("user_id", user_id)
        .limit(1)
    )
    return rows[0] if rows else None


def save_consent_settings(user_id, data):
    allowed_fields = {
        "ai_processing",
        "data_sharing",
        "analytics",
    }

    payload = {
        key: bool(value)
        for key, value in data.items()
        if key in allowed_fields
    }
    payload["user_id"] = user_id
    payload["updated_at"] = _timestamp()

    rows = _execute(
        get_db()
        .table("consent_preferences")
        .upsert(payload, on_conflict="user_id")
    )
    return rows[0] if rows else payload


def health_check():
    try:
        get_db().table("profiles").select("id").limit(1).execute()
        return {"connected": True, "message": "Supabase connection successful"}
    except Exception as exc:
        return {"connected": False, "message": str(exc)}
