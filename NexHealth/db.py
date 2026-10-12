
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
        .eq("user_id", user_id)
        .limit(1)
    )
    return rows[0] if rows else None


def save_profile(user_id, data):
    allowed_fields = {
        "full_name",
        "date_of_birth",
        "blood_group",
        "gender",
        "height_cm",
        "weight_kg",
        "emergency_contact",
        "allergies",
        "existing_conditions",
        "medications",
    }

    payload = {
        key: value
        for key, value in data.items()
        if key in allowed_fields
    }
    payload["user_id"] = user_id
    payload["updated_at"] = _timestamp()

    rows = _execute(
        get_db()
        .table("profiles")
        .upsert(payload, on_conflict="user_id")
    )
    return rows[0] if rows else payload


def list_medical_records(user_id):
    return _execute(
        get_db()
        .table("medical_records")
        .select("*")
        .eq("user_id", user_id)
        .order("created_at", desc=True)
    )


def create_medical_record(user_id, data):
    allowed_fields = {
        "title",
        "record_type",
        "record_date",
        "file_path",
        "file_name",
        "mime_type",
        "extracted_text",
        "analysis",
        "status",
    }

    payload = {
        key: value
        for key, value in data.items()
        if key in allowed_fields
    }
    payload["user_id"] = user_id

    rows = _execute(
        get_db()
        .table("medical_records")
        .insert(payload)
    )
    return rows[0] if rows else payload


def get_medical_record(user_id, record_id):
    rows = _execute(
        get_db()
        .table("medical_records")
        .select("*")
        .eq("user_id", user_id)
        .eq("id", record_id)
        .limit(1)
    )
    return rows[0] if rows else None


def update_medical_record(user_id, record_id, data):
    allowed_fields = {
        "title",
        "record_type",
        "record_date",
        "file_path",
        "file_name",
        "mime_type",
        "extracted_text",
        "analysis",
        "status",
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
        .table("medical_records")
        .update(payload)
        .eq("user_id", user_id)
        .eq("id", record_id)
    )
    return rows[0] if rows else None


def delete_medical_record(user_id, record_id):
    rows = _execute(
        get_db()
        .table("medical_records")
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
        .order("appointment_date", desc=False)
    )


def create_appointment(user_id, data):
    allowed_fields = {
        "title",
        "provider_name",
        "appointment_date",
        "location",
        "notes",
        "status",
    }

    payload = {
        key: value
        for key, value in data.items()
        if key in allowed_fields
    }
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
        "title",
        "provider_name",
        "appointment_date",
        "location",
        "notes",
        "status",
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
        "due_date",
        "category",
        "completed",
    }

    payload = {
        key: value
        for key, value in data.items()
        if key in allowed_fields
    }
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
        "due_date",
        "category",
        "completed",
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
        .table("privacy_consents")
        .select("*")
        .eq("user_id", user_id)
        .limit(1)
    )
    return rows[0] if rows else None


def save_consent_settings(user_id, data):
    allowed_fields = {
        "data_processing",
        "ai_analysis",
        "share_with_providers",
        "marketing",
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
        .table("privacy_consents")
        .upsert(payload, on_conflict="user_id")
    )
    return rows[0] if rows else payload


def health_check():
    try:
        get_db().table("profiles").select("user_id").limit(1).execute()
        return {"connected": True, "message": "Supabase connection successful"}
    except Exception as exc:
        return {"connected": False, "message": str(exc)}
