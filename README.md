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

Add `OPENROUTER_API_KEY` in Vercel **Project Settings → Environment Variables** for the AI endpoints. Set `OPENROUTER_MODEL` only if you want a model other than the default. For account sign-in, add `SUPABASE_URL` and `SUPABASE_ANON_KEY` as Vercel environment variables and enable email/password authentication in Supabase. The app keeps Supabase session tokens in HttpOnly cookies and checks them before serving its API endpoints. Do not commit `.env` or put secret keys in `NEXT_PUBLIC_*` variables.

The existing `db.py` reads `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` (or `SUPABASE_KEY`) for its server-side database helpers. The service role key is not needed by the sign-in flow and must never be exposed to the browser. Flask routes do not currently persist workspace data through `db.py`; the app's demo workspace data stays in account-scoped browser storage. Uploaded files are written under Vercel's temporary `/tmp` directory and can disappear between invocations. Use Supabase Storage for durable uploads before relying on uploaded records in production.

After setting environment variables, redeploy from Vercel's **Deployments** page. The app's health endpoint is `/api/health`.
