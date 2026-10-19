# syntax=docker/dockerfile:1
FROM python:3.12-slim-bookworm

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    HOST=0.0.0.0 \
    PORT=5000 \
    TESSERACT_CMD=/usr/bin/tesseract

RUN apt-get update \
    && apt-get install -y --no-install-recommends tesseract-ocr tesseract-ocr-eng \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt "gunicorn>=22.0,<24.0"

RUN groupadd --system nexhealth \
    && useradd --system --gid nexhealth --home-dir /app --no-create-home nexhealth \
    && mkdir -p /data/uploads \
    && chown -R nexhealth:nexhealth /app /data/uploads

COPY --chown=nexhealth:nexhealth . .

USER nexhealth
EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
    CMD python -c "import urllib.request; urllib.request.urlopen('http://127.0.0.1:5000/', timeout=3)"

CMD ["gunicorn", "--bind", "0.0.0.0:5000", "--workers", "1", "--timeout", "120", "app:app"]
