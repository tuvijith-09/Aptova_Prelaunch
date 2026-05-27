"""
database.py
-----------
Handles the database connection for BizFit.
Uses SQLAlchemy to connect FastAPI to MySQL.
Reads credentials from the .env file — never hardcoded.
"""

import os
from dotenv import load_dotenv
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker, declarative_base

# ----------------------------------------------------------------
# Load environment variables from .env file
# ----------------------------------------------------------------
load_dotenv()

DB_HOST     = os.getenv("DB_HOST", "localhost")
DB_PORT     = os.getenv("DB_PORT", "3306")
DB_NAME     = os.getenv("DB_NAME", "bizfit_db")
DB_USER     = os.getenv("DB_USER", "bizfit_app")
DB_PASSWORD = os.getenv("DB_PASSWORD", "")

# ----------------------------------------------------------------
# Build the connection URL
# Format: mysql+pymysql://user:password@host:port/dbname
# charset=utf8mb4 supports Hindi, Telugu, emojis (₹ symbol etc.)
# ----------------------------------------------------------------
DATABASE_URL = (
    f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}"
    f"@{DB_HOST}:{DB_PORT}/{DB_NAME}?charset=utf8mb4"
)

# ----------------------------------------------------------------
# Create the SQLAlchemy engine
# pool_pre_ping=True  → tests connection before using it
#                       prevents "MySQL server has gone away" errors
# pool_recycle=1800   → recycle connections every 30 min
#                       MySQL closes idle connections after 8 hours
# pool_size=10        → keep 10 connections open in the pool
# max_overflow=20     → allow 20 extra connections under heavy load
# ----------------------------------------------------------------
engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,
    pool_recycle=1800,
    pool_size=10,
    max_overflow=20,
    echo=False,       # Set to True during development to see SQL queries in terminal
)

# ----------------------------------------------------------------
# SessionLocal — used to create a new DB session per request
# autocommit=False → we manually commit transactions
# autoflush=False  → we manually flush to DB
# ----------------------------------------------------------------
SessionLocal = sessionmaker(
    bind=engine,
    autocommit=False,
    autoflush=False,
)

# ----------------------------------------------------------------
# Base — all SQLAlchemy models (in models.py) inherit from this
# ----------------------------------------------------------------
Base = declarative_base()


# ----------------------------------------------------------------
# get_db() — FastAPI dependency
# Every API endpoint that needs DB access gets a session injected.
# The 'finally' block ensures the session is ALWAYS closed,
# even if an error occurs during the request.
# ----------------------------------------------------------------
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ----------------------------------------------------------------
# test_connection() — run once at startup to verify DB is reachable
# ----------------------------------------------------------------
def test_connection():
    try:
        with engine.connect() as conn:
            conn.execute(text("SELECT 1"))
        print("✅ Database connected successfully.")
    except Exception as e:
        print(f"❌ Database connection FAILED: {e}")
        raise