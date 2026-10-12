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
