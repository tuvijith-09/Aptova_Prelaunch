"""
main.py — Aptova Prelaunch Backend
Only 3 endpoints for the 3 static page forms:
  POST /waitlist    → waitlist.html
  POST /suggest     → suggest.html
  POST /question    → how-it-works.html
Run: uvicorn main:app --reload
"""

import os
import io
from datetime import datetime
from typing import Optional
from fastapi import FastAPI, Request, Depends, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from sqlalchemy import create_engine, Column, Integer, SmallInteger, String, Text, DateTime
from sqlalchemy.orm import sessionmaker, declarative_base
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv
from urllib.parse import quote_plus
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side

# ----------------------------------------------------------------
# Load .env
# ----------------------------------------------------------------
load_dotenv()

DB_HOST         = os.getenv("DB_HOST", "localhost")
DB_PORT         = os.getenv("DB_PORT", "3306")
DB_NAME         = os.getenv("DB_NAME", "Aptova_db")
DB_USER         = os.getenv("DB_USER", "root")
DB_PASSWORD     = os.getenv("DB_PASSWORD", "")
DOWNLOAD_SECRET = os.getenv("DOWNLOAD_SECRET", "aptova2026")

DATABASE_URL = (
    f"mysql+pymysql://{DB_USER}:{quote_plus(DB_PASSWORD)}"
    f"@{DB_HOST}:{DB_PORT}/{DB_NAME}?charset=utf8mb4"
)



# ----------------------------------------------------------------
# DB setup
# ----------------------------------------------------------------
engine       = create_engine(DATABASE_URL, pool_pre_ping=True, pool_recycle=1800)
SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)
Base         = declarative_base()


# ----------------------------------------------------------------
# Models
# ----------------------------------------------------------------
class Waitlist(Base):
    __tablename__ = "waitlist"
    id         = Column(Integer,      primary_key=True, autoincrement=True)
    full_name  = Column(String(150),  nullable=False)
    email      = Column(String(255),  nullable=False, unique=True)
    phone      = Column(String(20),   nullable=True)
    ip_address = Column(String(45),   nullable=True)
    created_at = Column(DateTime,     default=datetime.utcnow)


class Suggestion(Base):
    __tablename__ = "suggestions"
    id          = Column(Integer,     primary_key=True, autoincrement=True)
    full_name   = Column(String(150), nullable=False)
    email       = Column(String(255), nullable=False)
    opp_title   = Column(String(255), nullable=False)
    domain      = Column(String(100), nullable=False)
    capital     = Column(String(100), nullable=False)
    description = Column(Text,        nullable=False)
    ip_address  = Column(String(45),  nullable=True)
    created_at  = Column(DateTime,    default=datetime.utcnow)


class Question(Base):
    __tablename__ = "questions"
    id         = Column(Integer,      primary_key=True, autoincrement=True)
    full_name  = Column(String(150),  nullable=False)
    email      = Column(String(255),  nullable=False)
    question   = Column(Text,         nullable=False)
    ip_address = Column(String(45),   nullable=True)
    is_replied = Column(SmallInteger, default=0)
    created_at = Column(DateTime,     default=datetime.utcnow)


# ----------------------------------------------------------------
# FastAPI app
# ----------------------------------------------------------------
app = FastAPI(title="Aptova Prelaunch API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def startup():
    try:
        Base.metadata.create_all(bind=engine)
        print("[OK] Database connected and tables ready.")
    except Exception as e:
        print(f"[WARNING] DB connection at startup failed: {e}")
        print("[INFO] App will still start. DB will connect on first request.")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ----------------------------------------------------------------
# Schemas
# ----------------------------------------------------------------
class WaitlistIn(BaseModel):
    full_name: str
    email: EmailStr
    phone: Optional[str] = None


class SuggestionIn(BaseModel):
    full_name: str
    email: EmailStr
    opp_title: str
    domain: str
    capital: str
    description: str


class QuestionIn(BaseModel):
    full_name: str
    email: EmailStr
    question: str


# ----------------------------------------------------------------
# ENDPOINT 1: Waitlist
# ----------------------------------------------------------------
@app.post("/waitlist")
def join_waitlist(payload: WaitlistIn, request: Request, db=Depends(get_db)):
    existing = db.query(Waitlist).filter(Waitlist.email == payload.email.lower()).first()
    if existing:
        return {"success": False, "message": "You're already on the waitlist!"}

    entry = Waitlist(
        full_name  = payload.full_name.strip(),
        email      = payload.email.lower().strip(),
        phone      = payload.phone,
        ip_address = request.client.host,
    )
    db.add(entry)
    db.commit()
    return {"success": True, "message": "You're on the list! We'll notify you on launch."}


# ----------------------------------------------------------------
# ENDPOINT 2: Suggestions
# ----------------------------------------------------------------
@app.post("/suggest")
def submit_suggestion(payload: SuggestionIn, request: Request, db=Depends(get_db)):
    entry = Suggestion(
        full_name   = payload.full_name.strip(),
        email       = payload.email.lower().strip(),
        opp_title   = payload.opp_title.strip(),
        domain      = payload.domain.strip(),
        capital     = payload.capital.strip(),
        description = payload.description.strip(),
        ip_address  = request.client.host,
    )
    db.add(entry)
    db.commit()
    return {"success": True, "message": "Thanks! We review every suggestion and add the best ones."}


# ----------------------------------------------------------------
# ENDPOINT 3: Questions
# ----------------------------------------------------------------
@app.post("/question")
def ask_question(payload: QuestionIn, request: Request, db=Depends(get_db)):
    entry = Question(
        full_name  = payload.full_name.strip(),
        email      = payload.email.lower().strip(),
        question   = payload.question.strip(),
        ip_address = request.client.host,
    )
    db.add(entry)
    db.commit()
    return {"success": True, "message": "Got it! We reply to every question at the earliest."}


# ----------------------------------------------------------------
# Health check
# ----------------------------------------------------------------
@app.get("/health")
def health():
    return {"status": "ok", "service": "aptova Prelaunch API"}


# ----------------------------------------------------------------
# Helper: style Excel workbook
# ----------------------------------------------------------------
def style_excel(wb, ws, headers):
    header_font  = Font(name='Calibri', bold=True, color='FFFFFF', size=11)
    header_fill  = PatternFill(start_color='059669', end_color='059669', fill_type='solid')
    header_align = Alignment(horizontal='center', vertical='center')
    thin_border  = Border(
        left=Side(style='thin', color='E2E8F0'),
        right=Side(style='thin', color='E2E8F0'),
        top=Side(style='thin', color='E2E8F0'),
        bottom=Side(style='thin', color='E2E8F0'),
    )
    for col_num, header in enumerate(headers, 1):
        cell = ws.cell(row=1, column=col_num, value=header)
        cell.font      = header_font
        cell.fill      = header_fill
        cell.alignment = header_align
        cell.border    = thin_border

    for col in ws.columns:
        max_len    = 0
        col_letter = col[0].column_letter
        for cell in col:
            if cell.value:
                max_len = max(max_len, len(str(cell.value)))
            cell.border = thin_border
        ws.column_dimensions[col_letter].width = min(max_len + 4, 50)

    ws.auto_filter.ref = ws.dimensions
    ws.freeze_panes    = 'A2'


# ----------------------------------------------------------------
# DOWNLOAD: Waitlist as Excel
# ----------------------------------------------------------------
@app.get("/download/waitlist")
def download_waitlist(key: str = Query(...), db=Depends(get_db)):
    if key != DOWNLOAD_SECRET:
        return {"error": "Invalid key"}

    rows     = db.query(Waitlist).order_by(Waitlist.created_at.desc()).all()
    wb       = Workbook()
    ws       = wb.active
    ws.title = "Waitlist"
    headers  = ["ID", "Full Name", "Email", "Phone", "IP Address", "Created At"]
    style_excel(wb, ws, headers)

    for row in rows:
        ws.append([
            row.id, row.full_name, row.email,
            row.phone or "", row.ip_address or "",
            str(row.created_at) if row.created_at else "",
        ])

    buf = io.BytesIO()
    wb.save(buf)
    buf.seek(0)
    filename = f"waitlist_{datetime.utcnow().strftime('%Y%m%d_%H%M')}.xlsx"
    return StreamingResponse(buf,
        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        headers={"Content-Disposition": f"attachment; filename={filename}"})


# ----------------------------------------------------------------
# DOWNLOAD: Suggestions as Excel
# ----------------------------------------------------------------
@app.get("/download/suggestions")
def download_suggestions(key: str = Query(...), db=Depends(get_db)):
    if key != DOWNLOAD_SECRET:
        return {"error": "Invalid key"}

    rows     = db.query(Suggestion).order_by(Suggestion.created_at.desc()).all()
    wb       = Workbook()
    ws       = wb.active
    ws.title = "Suggestions"
    headers  = ["ID", "Full Name", "Email", "Opportunity Title", "Domain", "Capital", "Description", "IP Address", "Created At"]
    style_excel(wb, ws, headers)

    for row in rows:
        ws.append([
            row.id, row.full_name, row.email,
            row.opp_title, row.domain, row.capital, row.description,
            row.ip_address or "", str(row.created_at) if row.created_at else "",
        ])

    buf = io.BytesIO()
    wb.save(buf)
    buf.seek(0)
    filename = f"suggestions_{datetime.utcnow().strftime('%Y%m%d_%H%M')}.xlsx"
    return StreamingResponse(buf,
        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        headers={"Content-Disposition": f"attachment; filename={filename}"})


# ----------------------------------------------------------------
# DOWNLOAD: Questions as Excel
# ----------------------------------------------------------------
@app.get("/download/questions")
def download_questions(key: str = Query(...), db=Depends(get_db)):
    if key != DOWNLOAD_SECRET:
        return {"error": "Invalid key"}

    rows     = db.query(Question).order_by(Question.created_at.desc()).all()
    wb       = Workbook()
    ws       = wb.active
    ws.title = "Questions"
    headers  = ["ID", "Full Name", "Email", "Question", "Replied", "IP Address", "Created At"]
    style_excel(wb, ws, headers)

    for row in rows:
        ws.append([
            row.id, row.full_name, row.email, row.question,
            "Yes" if row.is_replied else "No",
            row.ip_address or "", str(row.created_at) if row.created_at else "",
        ])

    buf = io.BytesIO()
    wb.save(buf)
    buf.seek(0)
    filename = f"questions_{datetime.utcnow().strftime('%Y%m%d_%H%M')}.xlsx"
    return StreamingResponse(buf,
        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        headers={"Content-Disposition": f"attachment; filename={filename}"})