# NexHealth

**Your health, connected.** NexHealth helps people understand medical reports, organize everyday health tasks, and get general wellness guidance.

Live demo: [nex-health-two.vercel.app](https://nex-health-two.vercel.app/)

## What you can do

- **Analyze a medical report**: Upload a PDF or image and get an AI-generated plain-language explanation.
- **Ask the AI Health Mentor**: Ask general health questions in English, Telugu, or Hindi.
- **Create a personalized plan**: Generate daily suggestions for movement, meals, sleep, and habits from the information you provide.
- **Organize your health workspace**: Keep records, tasks, meals, appointments, profile details, and saved plans together.
- **Explore health services**: Browse the service discovery interface and appointment tools.
- **Use the demo without signing in**: Guest mode is enabled by default on Vercel. Guest workspace data stays in that browser and does not sync across devices.

NexHealth is a demonstration and educational tool. It does not diagnose conditions, prescribe treatment, connect to live ABDM services, or replace a qualified healthcare professional.

## How data is handled

- AI features require AI-processing consent. The submitted question, uploaded report, or relevant plan details are sent to OpenRouter and the selected model provider. Uploaded reports are sent as provided; the app does not anonymize them first.
- Signed-in workspace data is stored in Supabase and protected by account-scoped access policies. Existing browser-cached account data is retained during initial sync recovery and cleared after successful synchronization. If a later save fails, unsynced changes remain in the open tab; they are not written to local storage. This is not end-to-end encryption.
- Signed-in medical files use a private Supabase Storage bucket. Medical file uploads are disabled in the Vercel guest demo because guest files cannot be stored durably across serverless sessions.
- Guest workspace data is kept in the browser's `localStorage`. It is not encrypted and is not available on another device.
- Signed-in users can delete their synced workspace and uploaded files from Privacy & consent. This does not close the account; local browser copies on other devices are cleared when they next open the app and sync. Provider backups and retention are governed by the configured services.
- AI-generated medical explanations can be wrong. Check them against the source document and consult a healthcare professional before making care decisions.

## Built with

- **Frontend:** HTML, CSS, and vanilla JavaScript
- **Backend:** Python and Flask
- **Account data and file storage:** Supabase Auth, Postgres, and private Supabase Storage
- **AI:** OpenRouter with a configurable model (default: `google/gemini-2.5-flash`)
- **Hosting:** Vercel

Voice input uses browser speech-recognition support where available. Speech support and behavior vary by browser.

## Run locally

You need Python 3.9 or newer. Supabase and OpenRouter credentials are needed for account persistence and AI features.

1. Clone the repository and enter its folder:

   ```bash
   git clone https://github.com/madhan-x/NexHealth.git
   cd NexHealth
   ```

2. Create and activate a virtual environment, then install dependencies:

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

   Then install the Python packages:

   ```bash
   pip install -r requirements.txt
   ```

3. Copy `.env.example` to `.env` and set the values you need:

   - `OPENROUTER_API_KEY` for AI features
   - `SUPABASE_URL` and `SUPABASE_ANON_KEY` for Supabase accounts and storage
   - `OPENROUTER_MODEL` is optional; it defaults to `google/gemini-2.5-flash`

   Local development creates a temporary AI-consent signing secret if one is not set. Never commit `.env` or put private API keys in frontend files.

4. For a new Supabase project, run `schema.sql` in its SQL Editor and enable email/password sign-in in Supabase Auth.

5. Start the Flask app:

   ```bash
   python app.py
   ```

   Open [http://127.0.0.1:5000](http://127.0.0.1:5000).

## Vercel configuration

Set environment variables in the Vercel project's **Production** environment:

| Variable | Purpose |
| --- | --- |
| `OPENROUTER_API_KEY` | Enables AI responses. Keep it server-side. |
| `SUPABASE_URL` | Supabase project URL. |
| `SUPABASE_ANON_KEY` | Supabase public/anon key used with authenticated user sessions and RLS. |
| `AI_CONSENT_SECRET` | Required to sign guest AI-consent cookies. Use a new, long random value; it is not an API key. |
| `OPENROUTER_MODEL` | Optional model override. |
| `PUBLIC_DEMO_MODE` | Optional. Guest demo is enabled by default on Vercel; set this to `false` to require account sign-in. |

Generate a random consent secret locally with:

```bash
python -c "import secrets; print(secrets.token_urlsafe(48))"
```

Copy the generated value directly into Vercel's `AI_CONSENT_SECRET` environment variable. Do not place it in frontend code or commit it to Git. After changing Vercel environment variables, create a new deployment for the updated settings to take effect.

## Main API routes

| Method | Route | Purpose |
| --- | --- | --- |
| `GET` | `/api/health` | Basic service status. |
| `GET` | `/api/auth/session` | Check the current session. |
| `POST` | `/api/auth/login` | Sign in. |
| `POST` | `/api/auth/signup` | Create an account. |
| `POST` | `/api/auth/logout` | End the current session. |
| `GET` / `POST` | `/api/consent/ai` | Read or update AI-processing consent. |
| `POST` | `/api/analyze-report` | Analyze a selected report after consent. |
| `POST` | `/api/mentor` | Get a general health education response after consent. |
| `POST` | `/api/personalized-plan` | Generate a daily wellness plan after consent. |
| `GET` / `PUT` | `/api/workspace` | Read or save signed-in workspace data. |
| `DELETE` | `/api/workspace` | Revoke AI consent, delete the signed-in user's uploaded files, and clear the saved workspace. |
| `POST` | `/api/medical-records` | Upload a medical file for a signed-in account. |

Authentication uses secure, HTTP-only cookies. AI endpoints also verify AI-processing consent on the server.

## Contributing

Please open an issue to discuss a substantial change before submitting a pull request. Keep changes focused, protect health information, and include validation steps for behavior you change.

## License

This repository currently has no `LICENSE` file. Contact the repository owner before reusing or redistributing the code.
