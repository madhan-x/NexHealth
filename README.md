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

If Windows blocks virtual environment activation, use `\.venv\Scripts\python.exe -m pip install -r requirements.txt` and `\.venv\Scripts\python.exe app.py` instead.

For scanned image OCR, install the Tesseract OCR application separately and ensure `tesseract.exe` is on PATH. PDF extraction uses PyMuPDF.

## Deploy to GitHub and Vercel

This repository root contains `app.py`, which Vercel detects as a Flask application. Import the GitHub repository `madhan-x/NexHealth` into Vercel and keep **Root Directory** set to `.`. Vercel will build the Flask app using `requirements.txt`.

Add `OPENROUTER_API_KEY` in Vercel **Project Settings → Environment Variables** for the AI endpoints. Set `OPENROUTER_MODEL` only if you want a model other than the default. Do not commit `.env` or put secret keys in `NEXT_PUBLIC_*` variables.

The existing `db.py` reads `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` (or `SUPABASE_KEY`). Set these as server-only Vercel environment variables only if using that module. At present, Flask routes do not call `db.py`; Supabase persistence and authentication are not wired into those routes. Uploaded files are written under Vercel's temporary `/tmp` directory and can disappear between invocations. Use Supabase Storage for durable uploads before relying on uploaded records in production.

After setting environment variables, redeploy from Vercel's **Deployments** page. The app's health endpoint is `/api/health`.
