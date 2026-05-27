-- ============================================================
-- BizFit — Prelaunch Database
-- Only 3 tables needed for the static pages
-- ============================================================
CREATE DATABASE IF NOT EXISTS prelaunch_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE prelaunch_db;

-- ================================================================
-- TABLE 1: waitlist
-- From waitlist.html — Name, Email, Phone
-- ================================================================
CREATE TABLE IF NOT EXISTS waitlist (
    id         INT UNSIGNED  NOT NULL AUTO_INCREMENT,
    full_name  VARCHAR(150)  NOT NULL,
    email      VARCHAR(255)  NOT NULL,
    phone      VARCHAR(20)   DEFAULT NULL,
    ip_address VARCHAR(45)   DEFAULT NULL,
    created_at DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY uq_waitlist_email (email),
    INDEX idx_waitlist_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

select * from waitlist;
select * from suggestions;
select * from questions;
-- ================================================================
-- TABLE 2: suggestions
-- From suggest.html — Opportunity suggestions from users
-- ================================================================
CREATE TABLE IF NOT EXISTS suggestions (
    id           INT UNSIGNED  NOT NULL AUTO_INCREMENT,
    full_name    VARCHAR(150)  NOT NULL,
    email        VARCHAR(255)  NOT NULL,
    opp_title    VARCHAR(255)  NOT NULL,   -- Opportunity Title
    domain       VARCHAR(100)  NOT NULL,   -- Category e.g. Food, Tech
    capital      VARCHAR(100)  NOT NULL,   -- Startup investment range
    description  TEXT          NOT NULL,   -- Why it's a good opportunity
    ip_address   VARCHAR(45)   DEFAULT NULL,
    created_at   DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_suggestions_email (email),
    INDEX idx_suggestions_domain (domain),
    INDEX idx_suggestions_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- ================================================================
-- TABLE 3: questions
-- From how-it-works.html — "Still have a question?" section
-- ================================================================
CREATE TABLE IF NOT EXISTS questions (
    id         INT UNSIGNED  NOT NULL AUTO_INCREMENT,
    full_name  VARCHAR(150)  NOT NULL,
    email      VARCHAR(255)  NOT NULL,
    question   TEXT          NOT NULL,
    ip_address VARCHAR(45)   DEFAULT NULL,
    is_replied TINYINT(1)    NOT NULL DEFAULT 0,   -- admin tracks if replied
    created_at DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_questions_email (email),
    INDEX idx_questions_replied (is_replied),
    INDEX idx_questions_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;