import requests
import json
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("GEMINI_API_KEY")
if not API_KEY:
    raise ValueError("GEMINI_API_KEY not found in .env file")

def analyze_resume(text):

    prompt = f"""
You are an ATS resume analyzer.

Return ONLY valid JSON:

{{
  "ats_score": number,
  "strengths": [],
  "missing_skills": [],
  "suggestions": []
}}

Resume:
{text}
"""

    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={API_KEY}"
    
    headers = {
            "Content-Type": "application/json"
        }


    data = {
        "contents": [
            {
                "parts": [{"text": prompt}]
            }
        ]
    }

    response = requests.post(url, headers=headers, json=data)

    result = response.json()

    raw_text = result["candidates"][0]["content"]["parts"][0]["text"]

    cleaned = raw_text.replace("```json", "").replace("```", "").strip()

    return json.loads(cleaned)