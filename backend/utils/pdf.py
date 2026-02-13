import pdfplumber
from fastapi import HTTPException

def extract_text(file):
    text = ""

    with pdfplumber.open(file) as pdf:
        for page in pdf.pages:
            text += page.extract_text() or ""

    if not text.strip():
        raise HTTPException(status_code=400, detail="Could not extract text from pdf")

    return text