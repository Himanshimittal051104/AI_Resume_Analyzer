# 🤖 AI Resume Analyzer (ATS + JD Matching)

An AI-powered Resume Analyzer that evaluates resumes using ATS logic and matches them against a Job Description using Google Gemini.

Users can upload their resume PDF, paste a job description, and receive:

- ATS Score  
- Key strengths  
- Missing technical skills  
- Personalized improvement suggestions  

---

## 🚀 Features

- 📄 PDF Resume Upload  
- 🧠 AI-based ATS Scoring  
- 📝 Job Description Matching  
- ✅ JSON structured output  
- ⚡ FastAPI backend  
- 🔐 Environment-based API key handling  

---

## 🛠 Tech Stack

### Backend
- FastAPI  
- Python  
- pdfplumber  
- Google Gemini API  
- REST API  

---

## 📂 Project Structure
```md
backend/
│
├── main.py
├── services/
│ └── gemini.py
├── utils/
│ └── pdf.py
├── .env
└── requirements.txt
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone repo

```bash
git clone <your-repo-url>
cd AI_Resume_Analyzer/backend
```

### 2️⃣ Create virtual environment

```bash
python -m venv venv
venv\Scripts\activate
```

### 3️⃣ Install dependencies
```bash
pip install -r requirements.txt
```

### 4️⃣ Create .env
```bash
GEMINI_API_KEY=your_api_key_here
```

### 5️⃣ Run backend
```bash
uvicorn main:app --reload
```

### Open:
``` text
http://127.0.0.1:8000/docs
```

---

## 📌 API Endpoint
POST /analyze

Form Data:

file → Resume PDF

job_description → Job text

Returns:
{
  "ats_score": 85,
  "strengths": [],
  "missing_skills": [],
  "suggestions": []
}

---

## 🔮 Upcoming

- Frontend (React / Next.js)
- UI Resume Upload
- Result visualization
- Deployment

---

## 👩‍💻 Author

Himanshi Mittal

---
