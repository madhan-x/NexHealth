# NexHealth

## Run in Windows / VS Code

1. Open this folder in VS Code and open **Terminal → New Terminal**.
2. Create and activate a virtual environment:

   ```powershell
   py -m venv .venv
   .\.venv\Scripts\Activate.ps1
   ```

3. Install dependencies:

   ```powershell
   python -m pip install -r requirements.txt
   ```

4. Copy `.env.example` to `.env`, then replace the placeholder with your OpenRouter API key. Never commit or share `.env`.
5. Start the app:

   ```powershell
   python app.py
   ```

6. Open <http://127.0.0.1:5000>. The health check is at <http://127.0.0.1:5000/api/health>.

When Supabase Auth is not configured, requests from the local machine use a demo-only session so the frontend can be previewed. This bypass is disabled on Vercel; configure Supabase Auth there to require real sign-in.

If Windows blocks virtual environment activation, use `\.venv\Scripts\python.exe -m pip install -r requirements.txt` and `\.venv\Scripts\python.exe app.py` instead.

For scanned image OCR, install the Tesseract OCR application separately and ensure `tesseract.exe` is on PATH. PDF extraction uses PyMuPDF.

## Deploy to GitHub and Vercel

This repository root contains `app.py`, which Vercel detects as a Flask application. Import the GitHub repository `madhan-x/NexHealth` into Vercel and keep **Root Directory** set to `.`. Vercel will build the Flask app using `requirements.txt`.

Add `OPENROUTER_API_KEY` in Vercel **Project Settings → Environment Variables** for the AI endpoints. Set `OPENROUTER_MODEL` only if you want a model other than the default. For account sign-in and workspace persistence, add `SUPABASE_URL` and `SUPABASE_ANON_KEY` as Vercel environment variables and enable email/password authentication in Supabase. Apply `supabase/migrations/20261014000000_workspace_state.sql` to the Supabase project before using persistent workspace data. The app reads and writes this account-scoped JSON workspace using the signed-in user's session token and database row-level security; it does not need a service-role key for this flow. The app keeps Supabase session tokens in HttpOnly cookies and checks them before serving its API endpoints. Do not commit `.env` or put secret keys in `NEXT_PUBLIC_*` variables.

The legacy `db.py` helpers read `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` (or `SUPABASE_KEY`) for direct administrative operations; do not expose that key to the browser. Workspace profile, tasks, appointments, meals, analyses, messages, consent, and record metadata sync to `workspace_state`. Uploaded file contents are still written under Vercel's temporary `/tmp` directory and can disappear between invocations. Use Supabase Storage for durable medical-document uploads before relying on uploaded files in production.

After setting environment variables, redeploy from Vercel's **Deployments** page. The app's health endpoint is `/api/health`.
