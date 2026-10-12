
import os
import json
import uuid
import mimetypes
from pathlib import Path
from datetime import datetime, timezone

import requests
from flask import Flask, jsonify, request, send_from_directory
from werkzeug.utils import secure_filename
from werkzeug.exceptions import RequestEntityTooLarge
from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / ".env")

BASE_DIR = Path(__file__).resolve().parent
FRONTEND_DIR = BASE_DIR / "frontend"
UPLOAD_DIR = BASE_DIR / "uploads"

UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

ALLOWED_EXTENSIONS = {".pdf", ".jpg", ".jpeg", ".png", ".webp"}
ALLOWED_MIME_TYPES = {
    "application/pdf": "application/pdf",
    "image/jpeg": "image/jpeg",
    "image/png": "image/png",
    "image/webp": "image/webp"
}
MAX_FILE_SIZE = 10 * 1024 * 1024

app = Flask(
    __name__,
    static_folder=str(FRONTEND_DIR),
    static_url_path="/static"
)

app.config["MAX_CONTENT_LENGTH"] = MAX_FILE_SIZE
app.config["JSON_SORT_KEYS"] = False

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY", "").strip()
OPENROUTER_MODEL = os.getenv(
    "OPENROUTER_MODEL",
    "openrouter/free"
).strip()
OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"

APP_URL = os.getenv("APP_URL", "http://localhost:5000")
APP_NAME = "NexHealth"

SYSTEM_MENTOR_PROMPT = """
You are NexHealth Mentor, an assistant that provides general health
education and helps users prepare questions for qualified healthcare
professionals.

Rules:
- Do not claim to diagnose, treat, or cure a disease.
- Do not replace a doctor, pharmacist, or emergency service.
- Do not invent medical history, laboratory values, or report findings.
- Explain medical terminology in clear, accessible language.
- Encourage professional evaluation for concerning symptoms or abnormal
  laboratory results.
- If a user describes potentially life-threatening symptoms, advise them
  to seek emergency medical care immediately.
- Do not recommend changing prescribed medication doses or stopping
  prescribed medication without advice from the prescriber.
- Be respectful, concise, and transparent about uncertainty.
- Never claim that an appointment, prescription, or medical service has
  been booked unless an actual connected service confirms it.
- State when information is insufficient.
"""

SYSTEM_ANALYZER_PROMPT = """
You are NexHealth's medical document explanation assistant.

Explain supplied medical report text for educational purposes only.

Requirements:
1. Summarize what the report explicitly states.
2. Identify values and reference ranges only when supplied.
3. Never invent missing values, units, reference ranges, diagnoses, or dates.
4. Explain potentially abnormal values cautiously.
5. Clearly state that laboratory ranges vary by laboratory and context.
6. Suggest questions the patient may ask a qualified healthcare professional.
7. Flag OCR uncertainty and ask the user to verify extracted values against
   the original document.
8. Do not diagnose or prescribe treatment.
9. Do not tell users to stop or change prescribed medication.
10. If no readable report text is supplied, explain that text extraction is
    required before the report can be interpreted.

Return a clear, structured response with these sections:
- Plain-language summary
- Values requiring review
- Questions to ask a healthcare professional
- Limitations and next steps

This is educational information, not a medical diagnosis.
"""

def utc_now():
    return datetime.now(timezone.utc).isoformat()

def error_response(message, status=400):
    return jsonify({
        "error": message,
        "timestamp": utc_now()
    }), status

def allowed_file(filename):
    return Path(filename).suffix.lower() in ALLOWED_EXTENSIONS

def validate_upload(file):
    if file is None:
        return None, "No file was provided."

    filename = file.filename
    if not filename or not isinstance(filename, str) or not filename.strip():
        return None, "Choose a file before uploading."

    original_name = secure_filename(file.filename)

    if not original_name:
        return None, "The filename is invalid."

    extension = Path(original_name).suffix.lower()

    if extension not in ALLOWED_EXTENSIONS:
        return None, "Only PDF, JPG, JPEG, PNG, and WebP files are accepted."

    content = file.read(MAX_FILE_SIZE + 1)
    file.seek(0)

    if not content:
        return None, "The selected file is empty."

    if len(content) > MAX_FILE_SIZE:
        return None, "The file must be smaller than 10 MB."

    declared_mime = (file.mimetype or "").lower()

    if declared_mime and declared_mime not in ALLOWED_MIME_TYPES:
        return None, "The file content type is not supported."

    if extension == ".pdf" and not content.startswith(b"%PDF-"):
        return None, "The file does not appear to be a valid PDF."

    if extension in {".jpg", ".jpeg"} and not content.startswith(b"\xff\xd8\xff"):
        return None, "The file does not appear to be a valid JPEG image."

    if extension == ".png" and not content.startswith(b"\x89PNG\r\n\x1a\n"):
        return None, "The file does not appear to be a valid PNG image."

    if extension == ".webp":
        if len(content) < 12 or content[:4] != b"RIFF" or content[8:12] != b"WEBP":
            return None, "The file does not appear to be a valid WebP image."

    return {
        "original_name": original_name,
        "extension": extension,
        "content": content,
        "mime_type": ALLOWED_MIME_TYPES.get(
            declared_mime,
            mimetypes.guess_type(original_name)[0] or "application/octet-stream"
        )
    }, None

def save_upload(file_info):
    record_id = str(uuid.uuid4())
    stored_name = f"{record_id}{file_info['extension']}"
    destination = UPLOAD_DIR / stored_name

    with destination.open("xb") as output:
        output.write(file_info["content"])

    return {
        "id": record_id,
        "name": file_info["original_name"],
        "file_name": file_info["original_name"],
        "stored_name": stored_name,
        "mime_type": file_info["mime_type"],
        "size": len(file_info["content"]),
        "created_at": utc_now(),
        "status": "Uploaded",
        "storage": "local"
    }

def openrouter_chat(messages, temperature=0.2, max_tokens=1200):
    if not OPENROUTER_API_KEY:
        raise RuntimeError(
            "OPENROUTER_API_KEY is not configured. Add it to your .env file."
        )

    payload = {
        "model": OPENROUTER_MODEL,
        "messages": messages,
        "temperature": temperature,
        "max_tokens": max_tokens
    }

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": APP_URL,
        "X-Title": APP_NAME
    }

    try:
        response = requests.post(
            OPENROUTER_URL,
            headers=headers,
            json=payload,
            timeout=60
        )
    except requests.RequestException as exc:
        raise RuntimeError(
            "Unable to connect to the AI service. Please try again later."
        ) from exc

    if response.status_code >= 400:
        try:
            details = response.json().get("error", {}).get("message", "")
        except (ValueError, AttributeError):
            details = ""

        if response.status_code in (401, 403):
            app.logger.error(
                "OpenRouter HTTP %s: %s",
                response.status_code,
                details or "No error details returned"
            )
            raise RuntimeError(
                f"OpenRouter rejected the request (HTTP {response.status_code}). "
                f"Details: {details or 'Check API key, model access, and account limits.'}"
            )

        if response.status_code == 429:
            raise RuntimeError("The AI service rate limit was reached. Try again later.")

        raise RuntimeError(
            details or f"The AI service returned HTTP {response.status_code}."
        )

    try:
        result = response.json()
        answer = result["choices"][0]["message"]["content"]
    except (ValueError, KeyError, IndexError, TypeError) as exc:
        raise RuntimeError("The AI service returned an unexpected response.") from exc

    if isinstance(answer, list):
        answer = "\n".join(
            part.get("text", "")
            for part in answer
            if isinstance(part, dict)
        )

    if not isinstance(answer, str) or not answer.strip():
        raise RuntimeError("The AI service returned an empty answer.")

    return answer.strip()

def extract_pdf_text(path):
    try:
        import pymupdf
    except ImportError:
        return None, "PDF text extraction is unavailable. Install PyMuPDF."

    try:
        text_parts = []

        with pymupdf.open(path) as document:
            for page in document:
                text_parts.append(page.get_text())

        extracted = "\n".join(text_parts).strip()

        if not extracted:
            return None, (
                "No selectable text was found. This may be a scanned PDF. "
                "OCR has not been configured."
            )

        return extracted[:30000], None
    except Exception:
        return None, "The PDF could not be read. Verify that the file is valid."

def extract_image_text(path):
    try:
        from PIL import Image
        import pytesseract
    except ImportError:
        return None, (
            "Image OCR is unavailable. Install Pillow and pytesseract, "
            "and install the Tesseract OCR application separately."
        )

    try:
        with Image.open(path) as image_file:
            image_file.verify()

        with Image.open(path) as image_file:
            extracted = pytesseract.image_to_string(image_file).strip()

        if not extracted:
            return None, (
                "No text could be extracted from this image. "
                "Try a clearer scan or enter the report text manually."
            )

        return extracted[:30000], None
    except Exception:
        return None, "Image processing failed. Ensure Tesseract OCR is installed and the image file is not corrupted."

def extract_report_text(path, extension):
    if extension == ".pdf":
        return extract_pdf_text(path)

    return extract_image_text(path)

@app.after_request
def add_security_headers(response):
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "SAMEORIGIN"
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    response.headers["Cache-Control"] = "no-store"
    return response

@app.route("/")
def index():
    index_file = FRONTEND_DIR / "index.html"

    if not index_file.exists():
        return (
            "NexHealth frontend/index.html was not found. "
            "Create the frontend directory and add index.html.",
            404
        )

    return send_from_directory(str(FRONTEND_DIR), "index.html")

@app.get("/api/health")
def health():
    return jsonify({
        "status": "ok",
        "app": APP_NAME,
        "ai_configured": bool(OPENROUTER_API_KEY),
        "timestamp": utc_now()
    })

@app.post("/api/medical-records")
def upload_medical_record():
    file = request.files.get("file")
    file_info, error = validate_upload(file)

    if error:
        return error_response(error)

    try:
        record = save_upload(file_info)
    except OSError:
        app.logger.exception("Medical record upload failed.")
        return error_response("The file could not be saved.", 500)

    return jsonify({
        "message": "File uploaded to local server storage.",
        "id": record["id"],
        "name": record["name"],
        "file_name": record["file_name"],
        "mime_type": record["mime_type"],
        "size": record["size"],
        "created_at": record["created_at"],
        "status": record["status"],
        "storage": record["storage"]
    }), 201

@app.post("/api/analyze-report")
def analyze_report():
    file = request.files.get("file")
    file_info, error = validate_upload(file)

    if error:
        return error_response(error)

    temporary_path = UPLOAD_DIR / f"analysis-{uuid.uuid4()}{file_info['extension']}"

    try:
        with temporary_path.open("xb") as output:
            output.write(file_info["content"])

        extracted_text, extraction_error = extract_report_text(
            temporary_path,
            file_info["extension"]
        )

        if extraction_error:
            return error_response(extraction_error, 422)

        # Check if extracted text is None, empty, or only whitespace
        if extracted_text is None or not extracted_text.strip():
            return error_response(
                "No text could be extracted from the file. The file may be empty, corrupted, or in an unsupported format.",
                422
            )

        answer = openrouter_chat(
            [
                {"role": "system", "content": SYSTEM_ANALYZER_PROMPT},
                {
                    "role": "user",
                    "content": (
                        "Explain the following extracted medical report text. "
                        "The text may contain OCR errors. Do not assume uncertain "
                        "values are correct. Ask the user to verify them against "
                        "the original document.\n\n"
                        f"Filename: {file_info['original_name']}\n\n"
                        f"Extracted report text:\n{extracted_text}"
                    )
                }
            ],
            temperature=0.1,
            max_tokens=1800
        )

        return jsonify({
            "summary": answer,
            "extracted_text": extracted_text,
            "ocr_review_required": True,
            "disclaimer": (
                "AI-generated educational information only. Verify all extracted "
                "values against the original report and consult a qualified "
                "healthcare professional."
            ),
            "created_at": utc_now()
        })

    except RuntimeError as exc:
        return error_response(str(exc), 503)
    except OSError:
        app.logger.exception("Report analysis file operation failed.")
        return error_response("The report could not be processed.", 500)
    finally:
        try:
            temporary_path.unlink(missing_ok=True)
        except OSError:
            app.logger.warning("Could not remove temporary analysis file.")

@app.post("/api/mentor")
def mentor():
    data = request.get_json(silent=True)

    if not isinstance(data, dict):
        return error_response("Send a JSON object containing a message.")

    message = data.get("message")

    if not isinstance(message, str) or not message.strip():
        return error_response("Enter a message first.")

    message = message.strip()

    if len(message) > 6000:
        return error_response("Your message must be shorter than 6000 characters.")

    try:
        answer = openrouter_chat(
            [
                {"role": "system", "content": SYSTEM_MENTOR_PROMPT},
                {"role": "user", "content": message}
            ],
            temperature=0.3,
            max_tokens=1000
        )

        return jsonify({
            "reply": answer,
            "disclaimer": (
                "General health education only. This is not a diagnosis "
                "or a substitute for professional medical advice."
            ),
            "created_at": utc_now()
        })

    except RuntimeError as exc:
        return error_response(str(exc), 503)

@app.errorhandler(RequestEntityTooLarge)
def handle_large_upload(error):
    return error_response("The uploaded file exceeds the 10 MB limit.", 413)

@app.errorhandler(404)
def handle_not_found(error):
    if request.path.startswith("/api/"):
        return error_response("API endpoint not found.", 404)

    return error

@app.errorhandler(500)
def handle_internal_error(error):
    app.logger.exception("Unexpected server error.")
    return error_response("An unexpected server error occurred.", 500)

if __name__ == "__main__":
    debug_mode = os.getenv("FLASK_DEBUG", "false").lower() == "true"

    app.run(
        host=os.getenv("HOST", "127.0.0.1"),
        port=int(os.getenv("PORT", "5000")),
        debug=debug_mode
    )
