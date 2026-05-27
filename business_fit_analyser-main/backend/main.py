"""
main.py — BizFit Prelaunch Backend
Only 3 endpoints for the 3 static page forms:
  POST /waitlist    → waitlist.html
  POST /suggest     → suggest.html
  POST /question    → how-it-works.html
Run: uvicorn main:app --reload
"""

import os
from datetime import datetime
from typing import Optional
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Column, Integer, SmallInteger, String, Text, DateTime
from sqlalchemy.orm import sessionmaker, declarative_base
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv

# ----------------------------------------------------------------
# Load .env
# ----------------------------------------------------------------
load_dotenv()

DB_HOST     = os.getenv("DB_HOST", "localhost")
DB_PORT     = os.getenv("DB_PORT", "3306")
DB_NAME     = os.getenv("DB_NAME", "bizfit_db")
DB_USER     = os.getenv("DB_USER", "root")
DB_PASSWORD = os.getenv("DB_PASSWORD", "")

from urllib.parse import quote_plus
DATABASE_URL = f"mysql+pymysql://{DB_USER}:{quote_plus(DB_PASSWORD)}@{DB_HOST}:{DB_PORT}/{DB_NAME}?charset=utf8mb4"
# ----------------------------------------------------------------
# DB setup
# ----------------------------------------------------------------
engine = create_engine(DATABASE_URL, pool_pre_ping=True, pool_recycle=1800)
SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)
Base = declarative_base()

# ----------------------------------------------------------------
# Models
# ----------------------------------------------------------------
class Waitlist(Base):
    __tablename__ = "waitlist"
    id         = Column(Integer, primary_key=True, autoincrement=True)
    full_name  = Column(String(150), nullable=False)
    email      = Column(String(255), nullable=False, unique=True)
    phone      = Column(String(20),  nullable=True)
    ip_address = Column(String(45),  nullable=True)
    created_at = Column(DateTime,    default=datetime.utcnow)

class Suggestion(Base):
    __tablename__ = "suggestions"
    id          = Column(Integer, primary_key=True, autoincrement=True)
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
    id         = Column(Integer,     primary_key=True, autoincrement=True)
    full_name  = Column(String(150), nullable=False)
    email      = Column(String(255), nullable=False)
    question   = Column(Text,        nullable=False)
    ip_address = Column(String(45),  nullable=True)
    is_replied = Column(SmallInteger, default=0)
    created_at = Column(DateTime,    default=datetime.utcnow)

# ----------------------------------------------------------------
# FastAPI app
# ----------------------------------------------------------------
app = FastAPI(title="BizFit Prelaunch API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],      # Replace * with your domain when deploying
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def startup():
    # Creates tables if they don't exist yet
    Base.metadata.create_all(bind=engine)
    print("✅ Database connected and tables ready.")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

from fastapi import Depends

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
# ENDPOINT 1: Waitlist — from waitlist.html
# ----------------------------------------------------------------
@app.post("/waitlist")
def join_waitlist(payload: WaitlistIn, request: Request,
                  db=Depends(get_db)):
    # Check duplicate email
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
# ENDPOINT 2: Suggestions — from suggest.html
# ----------------------------------------------------------------
@app.post("/suggest")
def submit_suggestion(payload: SuggestionIn, request: Request,
                       db=Depends(get_db)):
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
# ENDPOINT 3: Questions — from how-it-works.html
# ----------------------------------------------------------------
@app.post("/question")
def ask_question(payload: QuestionIn, request: Request,
                 db=Depends(get_db)):
    entry = Question(
        full_name  = payload.full_name.strip(),
        email      = payload.email.lower().strip(),
        question   = payload.question.strip(),
        ip_address = request.client.host,
    )
    db.add(entry)
    db.commit()
    return {"success": True, "message": "Got it! We reply to every question within 24 hours."}


# ----------------------------------------------------------------
# Health check
# ----------------------------------------------------------------
@app.get("/health")
def health():
    return {"status": "ok", "service": "BizFit Prelaunch API"}