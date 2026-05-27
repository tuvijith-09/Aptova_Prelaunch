"""
models.py
---------
SQLAlchemy ORM models for BizFit.
Every class here maps to one table in the MySQL database.
The column names and types match bizfit_database_fixed.sql exactly.
"""

import uuid
from datetime import datetime
from sqlalchemy import (
    Column, String, Text, Integer, SmallInteger,
    DateTime, Enum, JSON, DECIMAL,
    ForeignKey, UniqueConstraint, Index, event
)
from sqlalchemy.dialects.mysql import TINYINT, BIGINT, INT
from sqlalchemy.orm import relationship
from database import Base


# ----------------------------------------------------------------
# Helper: generate a new UUID string for primary keys
# ----------------------------------------------------------------
def new_uuid():
    return str(uuid.uuid4())


# ================================================================
# MODEL 1: User
# Maps to the 'users' table
# ================================================================
class User(Base):
    __tablename__ = "users"

    id                    = Column(String(36),  primary_key=True, default=new_uuid)
    name                  = Column(String(100), nullable=False)
    email                 = Column(String(255), nullable=False, unique=True)
    password_hash         = Column(String(255), nullable=False)          # bcrypt hash only
    role                  = Column(Enum("user", "admin"), nullable=False, default="user")
    is_active             = Column(TINYINT(1),  nullable=False, default=1)
    is_email_verified     = Column(TINYINT(1),  nullable=False, default=0)
    email_verify_token    = Column(String(128), nullable=True)
    email_verify_expires  = Column(DateTime,    nullable=True)
    password_reset_token  = Column(String(128), nullable=True)
    password_reset_expires= Column(DateTime,    nullable=True)
    last_login_at         = Column(DateTime,    nullable=True)
    failed_login_count    = Column(TINYINT,     nullable=False, default=0)
    locked_until          = Column(DateTime,    nullable=True)
    created_at            = Column(DateTime,    nullable=False, default=datetime.utcnow)
    updated_at            = Column(DateTime,    nullable=False, default=datetime.utcnow,
                                   onupdate=datetime.utcnow)

    # Relationships — lets you do user.sessions, user.auth_sessions in Python
    auth_sessions         = relationship("UserSession",       back_populates="user", cascade="all, delete-orphan")
    assessment_sessions   = relationship("AssessmentSession", back_populates="user", cascade="all, delete-orphan")

    __table_args__ = (
        Index("idx_users_role",     "role"),
        Index("idx_users_is_active","is_active"),
    )

    def __repr__(self):
        return f"<User id={self.id} email={self.email}>"


# ================================================================
# MODEL 2: UserSession  (login tokens — NOT assessment sessions)
# Maps to the 'user_sessions' table
# ================================================================
class UserSession(Base):
    __tablename__ = "user_sessions"

    id          = Column(String(36),  primary_key=True, default=new_uuid)
    user_id     = Column(String(36),  ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    token_hash  = Column(String(255), nullable=False, unique=True)  # hashed JWT
    ip_address  = Column(String(45),  nullable=True)
    user_agent  = Column(String(512), nullable=True)
    is_valid    = Column(TINYINT(1),  nullable=False, default=1)
    expires_at  = Column(DateTime,    nullable=False)
    created_at  = Column(DateTime,    nullable=False, default=datetime.utcnow)

    user        = relationship("User", back_populates="auth_sessions")

    __table_args__ = (
        Index("idx_user_sessions_user_id", "user_id"),
        Index("idx_user_sessions_expires", "expires_at"),
    )


# ================================================================
# MODEL 3: BusinessCategory
# Maps to the 'business_categories' table
# ================================================================
class BusinessCategory(Base):
    __tablename__ = "business_categories"

    id            = Column(INT(unsigned=True), primary_key=True, autoincrement=True)
    name          = Column(String(100), nullable=False)
    slug          = Column(String(100), nullable=False, unique=True)
    description   = Column(Text,        nullable=True)
    icon_key      = Column(String(50),  nullable=True)
    is_active     = Column(TINYINT(1),  nullable=False, default=1)
    display_order = Column(TINYINT,     nullable=False, default=0)
    created_at    = Column(DateTime,    nullable=False, default=datetime.utcnow)
    updated_at    = Column(DateTime,    nullable=False, default=datetime.utcnow,
                           onupdate=datetime.utcnow)

    rules               = relationship("BusinessRule",        back_populates="business", cascade="all, delete-orphan")
    validation_templates= relationship("ValidationTemplate",  back_populates="business", cascade="all, delete-orphan")
    recommendations     = relationship("Recommendation",      back_populates="business")
    validation_results  = relationship("ValidationResult",    back_populates="business")

    def __repr__(self):
        return f"<BusinessCategory id={self.id} name={self.name}>"


# ================================================================
# MODEL 4: BusinessRule
# Maps to the 'business_rules' table
# ================================================================
class BusinessRule(Base):
    __tablename__ = "business_rules"

    id          = Column(INT(unsigned=True), primary_key=True, autoincrement=True)
    business_id = Column(INT(unsigned=True), ForeignKey("business_categories.id", ondelete="CASCADE"), nullable=False)
    version     = Column(TINYINT,   nullable=False, default=1)
    rule_json   = Column(JSON,      nullable=False)
    is_active   = Column(TINYINT(1),nullable=False, default=1)
    created_by  = Column(String(36),nullable=True)   # admin user id
    created_at  = Column(DateTime,  nullable=False, default=datetime.utcnow)
    updated_at  = Column(DateTime,  nullable=False, default=datetime.utcnow,
                         onupdate=datetime.utcnow)

    business    = relationship("BusinessCategory", back_populates="rules")


# ================================================================
# MODEL 5: ValidationTemplate
# Maps to the 'validation_templates' table
# ================================================================
class ValidationTemplate(Base):
    __tablename__ = "validation_templates"

    id                       = Column(INT(unsigned=True), primary_key=True, autoincrement=True)
    business_id              = Column(INT(unsigned=True), ForeignKey("business_categories.id", ondelete="CASCADE"), nullable=False)
    critical_dimensions_json = Column(JSON,      nullable=False)
    risk_notes_json          = Column(JSON,      nullable=True)
    version                  = Column(TINYINT,   nullable=False, default=1)
    is_active                = Column(TINYINT(1),nullable=False, default=1)
    created_at               = Column(DateTime,  nullable=False, default=datetime.utcnow)
    updated_at               = Column(DateTime,  nullable=False, default=datetime.utcnow,
                                      onupdate=datetime.utcnow)

    business    = relationship("BusinessCategory", back_populates="validation_templates")


# ================================================================
# MODEL 6: AssessmentSession
# Maps to the 'assessment_sessions' table
# ================================================================
class AssessmentSession(Base):
    __tablename__ = "assessment_sessions"

    id                   = Column(String(36),  primary_key=True, default=new_uuid)
    user_id              = Column(String(36),  ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    status               = Column(
                               Enum("profile_form", "ai_interview", "recommendation_ready",
                                    "validation_in_progress", "completed", "abandoned"),
                               nullable=False, default="profile_form"
                           )
    current_stage        = Column(TINYINT,       nullable=False, default=1)
    selected_business_id = Column(INT(unsigned=True), ForeignKey("business_categories.id", ondelete="SET NULL"), nullable=True)
    is_guest             = Column(TINYINT(1),    nullable=False, default=0)
    completed_at         = Column(DateTime,      nullable=True)
    created_at           = Column(DateTime,      nullable=False, default=datetime.utcnow)
    updated_at           = Column(DateTime,      nullable=False, default=datetime.utcnow,
                                  onupdate=datetime.utcnow)

    user                = relationship("User",             back_populates="assessment_sessions")
    selected_business   = relationship("BusinessCategory", back_populates=None, foreign_keys=[selected_business_id])
    questions           = relationship("Question",         back_populates="session", cascade="all, delete-orphan")
    profile_snapshot    = relationship("ProfileSnapshot",  back_populates="session", uselist=False, cascade="all, delete-orphan")
    recommendations     = relationship("Recommendation",   back_populates="session", cascade="all, delete-orphan")
    validation_result   = relationship("ValidationResult", back_populates="session", uselist=False, cascade="all, delete-orphan")

    __table_args__ = (
        Index("idx_session_user_id", "user_id"),
        Index("idx_session_status",  "status"),
    )


# ================================================================
# MODEL 7: Question
# Maps to the 'questions' table
# ================================================================
class Question(Base):
    __tablename__ = "questions"

    id               = Column(String(36), primary_key=True, default=new_uuid)
    session_id       = Column(String(36), ForeignKey("assessment_sessions.id", ondelete="CASCADE"), nullable=False)
    stage            = Column(TINYINT,    nullable=False, default=1)
    source           = Column(Enum("standard_form", "ai_generated"), nullable=False, default="ai_generated")
    question_text    = Column(Text,       nullable=False)
    target_dimension = Column(String(100),nullable=True)
    response_type    = Column(Enum("text", "number", "single_choice", "multi_choice"), nullable=False, default="text")
    choices_json     = Column(JSON,       nullable=True)
    sequence_number  = Column(SmallInteger, nullable=False, default=1)
    ai_metadata_json = Column(JSON,       nullable=True)
    created_at       = Column(DateTime,   nullable=False, default=datetime.utcnow)

    session  = relationship("AssessmentSession", back_populates="questions")
    answer   = relationship("Answer", back_populates="question", uselist=False, cascade="all, delete-orphan")

    __table_args__ = (
        Index("idx_questions_session_id", "session_id"),
        Index("idx_questions_stage",      "stage"),
    )


# ================================================================
# MODEL 8: Answer
# Maps to the 'answers' table
# ================================================================
class Answer(Base):
    __tablename__ = "answers"

    id                 = Column(String(36), primary_key=True, default=new_uuid)
    question_id        = Column(String(36), ForeignKey("questions.id", ondelete="CASCADE"), nullable=False, unique=True)
    session_id         = Column(String(36), ForeignKey("assessment_sessions.id", ondelete="CASCADE"), nullable=False)
    answer_text        = Column(Text,       nullable=True)
    answer_json        = Column(JSON,       nullable=True)
    extraction_status  = Column(Enum("pending", "success", "failed", "skipped"), nullable=False, default="pending")
    extraction_error   = Column(Text,       nullable=True)
    created_at         = Column(DateTime,   nullable=False, default=datetime.utcnow)

    question = relationship("Question", back_populates="answer")

    __table_args__ = (
        Index("idx_answers_session_id", "session_id"),
    )


# ================================================================
# MODEL 9: ProfileSnapshot
# Maps to the 'profile_snapshots' table
# One snapshot per session — updated after every answer
# ================================================================
class ProfileSnapshot(Base):
    __tablename__ = "profile_snapshots"

    id               = Column(String(36), primary_key=True, default=new_uuid)
    session_id       = Column(String(36), ForeignKey("assessment_sessions.id", ondelete="CASCADE"),
                              nullable=False, unique=True)
    profile_json     = Column(JSON,         nullable=False, default=dict)
    confidence_json  = Column(JSON,         nullable=True,  default=dict)
    snapshot_version = Column(SmallInteger, nullable=False, default=1)
    updated_at       = Column(DateTime,     nullable=False, default=datetime.utcnow,
                              onupdate=datetime.utcnow)
    created_at       = Column(DateTime,     nullable=False, default=datetime.utcnow)

    session = relationship("AssessmentSession", back_populates="profile_snapshot")


# ================================================================
# MODEL 10: Recommendation
# Maps to the 'recommendations' table
# ================================================================
class Recommendation(Base):
    __tablename__ = "recommendations"

    id            = Column(String(36), primary_key=True, default=new_uuid)
    session_id    = Column(String(36), ForeignKey("assessment_sessions.id", ondelete="CASCADE"), nullable=False)
    business_id   = Column(INT(unsigned=True), ForeignKey("business_categories.id", ondelete="CASCADE"), nullable=False)
    rank          = Column(TINYINT,     nullable=False)                    # 1 = top match
    fit_score     = Column(DECIMAL(5,2),nullable=True)
    reason_text   = Column(Text,        nullable=True)
    effort_level  = Column(Enum("Low","Medium","High"), nullable=True)
    capital_range = Column(String(100), nullable=True)
    income_range  = Column(String(100), nullable=True)
    source        = Column(Enum("ai","scoring_engine"), nullable=False, default="ai")
    created_at    = Column(DateTime,    nullable=False, default=datetime.utcnow)

    session  = relationship("AssessmentSession", back_populates="recommendations")
    business = relationship("BusinessCategory",  back_populates="recommendations")

    __table_args__ = (
        Index("idx_rec_session_id", "session_id"),
        Index("idx_rec_rank",       "session_id", "rank"),
    )


# ================================================================
# MODEL 11: ValidationResult
# Maps to the 'validation_results' table
# ================================================================
class ValidationResult(Base):
    __tablename__ = "validation_results"

    id              = Column(String(36), primary_key=True, default=new_uuid)
    session_id      = Column(String(36), ForeignKey("assessment_sessions.id", ondelete="CASCADE"),
                             nullable=False, unique=True)
    business_id     = Column(INT(unsigned=True), ForeignKey("business_categories.id", ondelete="CASCADE"), nullable=False)
    readiness_score = Column(DECIMAL(5,2), nullable=True)
    verdict         = Column(Enum("Strong Fit","Moderate Fit","Weak Fit"), nullable=True)
    strengths_json  = Column(JSON, nullable=True)
    risks_json      = Column(JSON, nullable=True)
    gaps_json       = Column(JSON, nullable=True)
    next_steps_json = Column(JSON, nullable=True)
    created_at      = Column(DateTime, nullable=False, default=datetime.utcnow)
    updated_at      = Column(DateTime, nullable=False, default=datetime.utcnow,
                             onupdate=datetime.utcnow)

    session  = relationship("AssessmentSession", back_populates="validation_result")
    business = relationship("BusinessCategory",  back_populates="validation_results")


# ================================================================
# MODEL 12: AuditLog
# Maps to the 'audit_logs' table — append only, never delete
# ================================================================
class AuditLog(Base):
    __tablename__ = "audit_logs"

    id            = Column(BIGINT(unsigned=True), primary_key=True, autoincrement=True)
    user_id       = Column(String(36), nullable=True)
    session_id    = Column(String(36), nullable=True)
    action        = Column(String(100),nullable=False)
    entity_type   = Column(String(50), nullable=True)
    entity_id     = Column(String(36), nullable=True)
    ip_address    = Column(String(45), nullable=True)
    user_agent    = Column(String(512),nullable=True)
    metadata_json = Column(JSON,       nullable=True)
    severity      = Column(Enum("info","warning","critical"), nullable=False, default="info")
    created_at    = Column(DateTime,   nullable=False, default=datetime.utcnow)

    __table_args__ = (
        Index("idx_audit_user_id", "user_id"),
        Index("idx_audit_action",  "action"),
        Index("idx_audit_severity","severity"),
    )


# ================================================================
# MODEL 13: Waitlist
# Maps to the 'waitlist' table
# ================================================================
class Waitlist(Base):
    __tablename__ = "waitlist"

    id         = Column(INT(unsigned=True), primary_key=True, autoincrement=True)
    full_name  = Column(String(150), nullable=False)
    email      = Column(String(255), nullable=False, unique=True)
    phone      = Column(String(20),  nullable=True)
    status     = Column(Enum("pending","invited","converted"), nullable=False, default="pending")
    ip_address = Column(String(45),  nullable=True)
    created_at = Column(DateTime,    nullable=False, default=datetime.utcnow)


# ================================================================
# MODEL 14: RateLimitLog
# Maps to the 'rate_limit_log' table
# ================================================================
class RateLimitLog(Base):
    __tablename__ = "rate_limit_log"

    id            = Column(BIGINT(unsigned=True), primary_key=True, autoincrement=True)
    identifier    = Column(String(255), nullable=False)
    action        = Column(String(100), nullable=False)
    attempt_count = Column(SmallInteger,nullable=False, default=1)
    window_start  = Column(DateTime,    nullable=False, default=datetime.utcnow)
    blocked_until = Column(DateTime,    nullable=True)

    __table_args__ = (
        Index("idx_rl_identifier_action", "identifier", "action"),
        Index("idx_rl_window",            "window_start"),
    )