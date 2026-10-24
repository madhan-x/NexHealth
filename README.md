# NexHealth

NexHealth is an AI-powered health workspace for understanding medical documents and organizing everyday health information.

**Live application:** [nex-health-two.vercel.app](https://nex-health-two.vercel.app/)

## Features

- **AI medical document analysis:** Upload a PDF or image to extract text with Tesseract OCR and request an educational explanation. When OCR returns text, a vision model independently cross-checks the document. If OCR cannot read the document, the app attempts a vision-only analysis instead.
- **AI Health Mentor:** Ask general health questions in English, Telugu, or Hindi. Separate conversations are saved in the browser or signed-in workspace; users can edit a message to regenerate its answer.
- **Personalized daily plans:** Request general movement, meal, sleep, and habit suggestions based on the profile and routine information you choose to provide. Checklist progress resets each day.
- **Health workspace:** Organize medical records, meals, tasks, appointments, saved analyses, and profile information.
- **Guest access:** Visitors can try AI features after granting AI-processing consent. Signing in is optional for using the public demo; a signed-in account is needed to sync workspace data between devices and store medical files.
- **Language and voice input:** The interface supports English, Telugu, and Hindi. Voice input depends on browser speech-recognition support.
- **ABDM / ABHA information:** The app links to official resources, but it is not integrated with live ABDM services and cannot create an ABHA identity or manage ABDM record-sharing consent.

NexHealth provides general education, not diagnosis or treatment. AI can misread medical documents and generate incorrect information. Check important details against the original file and consult a qualified healthcare professional.

## How it works

1. The HTML, CSS, and JavaScript frontend is served by the Flask application.
2. The browser sends application requests to Flask routes under `/api`.
3. When AI processing is requested and consent is present, Flask sends the relevant prompt or document to OpenRouter and its configured model providers.
4. Signed-in workspace data and medical files use Supabase Auth, Postgres, and a private Supabase Storage bucket. Row-level security policies in `schema.sql` scope supported database records to the authenticated user.
5. Guest workspace data is stored in that browser. It is not encrypted and does not sync to other devices.

Uploaded documents and relevant details may be sent to the configured AI provider for the requested analysis. NexHealth does not anonymize uploaded files before sending them. Do not upload documents unless you are comfortable with this processing.

## Run locally with Docker

Docker is the recommended local setup when you want the same OCR engine included by the Vercel container. Docker Desktop must be installed and running.

1. Clone the repository and enter the project directory:

   ```bash
   git clone https://github.com/madhan-x/NexHealth.git
   cd NexHealth
   ```

2. Create your local environment file from the example and fill in the values you want to use. Never commit `.env`:

   ```powershell
   Copy-Item .env.example .env
   ```

3. Build and start the app:

   ```bash
   docker compose up --build -d
   ```

4. Open [http://localhost:5000](http://localhost:5000). To view application logs:

   ```bash
   docker compose logs -f nexhealth
   ```

Stop the app with `docker compose down`. Uploaded files in the local Docker volume are retained when the containers stop. `docker compose down -v` also removes that volume and its files.

## Run locally with Python

Python 3.9 or newer is required. This option does not install the native Tesseract executable. Install Tesseract separately and set `TESSERACT_CMD` if you want local OCR; otherwise, document analysis may use the vision fallback.

1. Create and activate a virtual environment:

   ```bash
   python -m venv .venv
   ```

   Windows PowerShell:

   ```powershell
   .\.venv\Scripts\Activate.ps1
   ```

   macOS or Linux:

   ```bash
   source .venv/bin/activate
   ```

2. Install the Python dependencies and prepare `.env` as described above:

   ```bash
   pip install -r requirements.txt
   ```

3. Start Flask and open the local address:

   ```bash
   python app.py
   ```

   Open [http://127.0.0.1:5000](http://127.0.0.1:5000).

## Environment variables

Copy `.env.example` to `.env` for local development. Keep all credentials server-side and out of frontend files and Git.

| Variable | Required | Purpose |
| --- | --- | --- |
| `OPENROUTER_API_KEY` | For AI features | Server-side OpenRouter API key. |
| `OPENROUTER_MODEL` | No | Text model; defaults to `google/gemini-2.5-flash`. |
| `OPENROUTER_VISION_MODEL` | No | Vision model; defaults to `google/gemini-2.5-flash`. |
| `SUPABASE_URL` | For accounts and cloud storage | Supabase project URL. |
| `SUPABASE_ANON_KEY` | For accounts and cloud storage | Supabase public/anon key used with authenticated sessions and database policies. |
| `AI_CONSENT_SECRET` | Required on Vercel | Long random server-side secret used to sign AI-consent cookies. Local development generates a temporary value when omitted. |
| `APP_URL` | No | Application URL sent as the OpenRouter HTTP referer. |
| `PUBLIC_DEMO_MODE` | No | Set to `false` to require sign-in. The public Vercel demo enables guest access by default. |
| `TESSERACT_CMD` | No | Path to the Tesseract executable when it is not available on `PATH`. The Docker images set this automatically. |

Generate a consent secret locally with:

```bash
python -c "import secrets; print(secrets.token_urlsafe(48))"
```

Add the generated value to the Vercel project's **Production** environment as `AI_CONSENT_SECRET`. Also set the OpenRouter and Supabase values required by the features you want to enable. Redeploy after changing Vercel environment variables.

## Supabase setup

1. Create a Supabase project and enable email/password authentication if you want account sign-in.
2. Run `schema.sql` in the Supabase SQL Editor. It creates the application tables, row-level security policies, and private medical-document storage policies used by the app.
3. Add `SUPABASE_URL` and `SUPABASE_ANON_KEY` to the server environment. Do not use a service-role key in the browser or commit it to the repository.

The guest demo does not require a Supabase account. Guest data stays in the current browser and is separate from signed-in cloud data.

## Deploy to Vercel

The repository includes a root-level `Dockerfile.vercel`. Vercel uses it to build the Flask container with Tesseract OCR installed. The existing `Dockerfile` and `compose.yaml` are for local Docker development. See [Vercel's container deployment guide](https://vercel.com/kb/guide/does-vercel-support-docker-deployments) for the platform's container behavior and limits.

Connect the GitHub repository to the Vercel project and configure the server environment variables in Vercel. A push to the configured production branch creates a production deployment; preview branches receive separate preview URLs. The production domain remains attached to the Vercel project unless its domain configuration is changed.

Vercel containers are stateless. This app uses Supabase for signed-in medical-file storage; the local Docker volume is not used by the deployed Vercel container. Do not rely on a container's temporary filesystem for persistent user uploads.

## API routes

| Method | Route | Purpose |
| --- | --- | --- |
| `GET` | `/api/health` | Basic service and configuration status. |
| `GET` | `/api/auth/session` | Check the current account session. |
| `POST` | `/api/auth/login` | Sign in. |
| `POST` | `/api/auth/signup` | Create an account. |
| `POST` | `/api/auth/logout` | End the current session. |
| `GET`, `POST` | `/api/consent/ai` | Read or update AI-processing consent. |
| `POST` | `/api/analyze-report` | Extract and analyze an uploaded report after consent. |
| `POST` | `/api/mentor` | Get a general health-education response after consent. |
| `POST` | `/api/personalized-plan` | Generate a wellness plan after consent. |
| `GET`, `PUT`, `DELETE` | `/api/workspace` | Read, save, or delete the signed-in workspace. |
| `POST` | `/api/medical-records` | Upload a medical file for a signed-in account. |
| `GET` | `/api/medical-records/<record_id>/file` | View an authorized uploaded file. |
| `GET` | `/api/medical-records/<record_id>/download` | Download an authorized uploaded file. |

The AI routes verify consent on the server. Authentication uses secure, HTTP-only cookies.

## Known limitations

- AI explanations are not guaranteed to be correct. OCR text confidence is not a measure of medical accuracy, and the UI does not display an OCR confidence percentage.
- Medical-file upload and cross-device file access require a signed-in account and correctly configured Supabase Storage.
- Guest data is browser-local and unencrypted. It may be lost if browser storage is cleared.
- Live ABDM/ABHA connectivity, real provider availability, appointment booking, and medical advice are not provided by this demo.
- Voice input depends on browser support and permissions.

## License

No `LICENSE` file is included. Contact the repository owner before reusing or redistributing this project.
