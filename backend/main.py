from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import requests
from utils.pdf import extract_text
from services.gemini import analyze_resume
import os
from dotenv import load_dotenv

load_dotenv()
API_KEY = os.getenv("GEMINI_API_KEY")
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "AI Resume Analyzer backend running"}


@app.get("/models")
def list_models():
    """Optional: See available Gemini models"""
    url = f"https://generativelanguage.googleapis.com/v1beta/models?key={API_KEY}"
    response = requests.get(url)
    return response.json()


@app.post("/analyze")
async def analyze(file: UploadFile = File(...)):
    try:
        text = extract_text(file.file)
        return analyze_resume(text)

    except HTTPException as e:
        raise e

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))