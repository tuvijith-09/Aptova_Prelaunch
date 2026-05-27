# 📖 File-by-File Reference — What Each File Does & How It Helps You Code

> Explains **every file** in the toolkit: what it is, what it teaches the AI, and why it helps you code better.

---

## `agents/` — 11 AI Specialist Personas

Each file defines an expert persona. Reading it gives any AI deep domain expertise.

| File | Expertise | When It Helps Your Code |
|------|-----------|------------------------|
| `backend-architect.md` | API design, databases, auth, fault tolerance | APIs that handle edge cases, data stays consistent |
| `deep-research-agent.md` | Multi-hop investigation, evidence chains, source verification | Well-researched decisions instead of guesses |
| `frontend-architect.md` | WCAG 2.1 AA, Core Web Vitals, responsive, component architecture | UI that works for everyone on every device |
| `learning-guide.md` | Progressive teaching, multiple explanation styles, exercises | Understand before you implement = better code |
| `performance-engineer.md` | Profiling, critical path analysis, benchmarking | Optimizations that actually matter to users |
| `refactoring-expert.md` | SOLID principles, complexity reduction, safe transformations | Readable, maintainable code anyone can understand |
| `requirements-analyst.md` | Socratic questioning, PRDs, user stories, success criteria | Clear requirements = less rework |
| `security-engineer.md` | Zero-trust, OWASP Top 10, threat modeling, compliance | Catches vulnerabilities before production |
| `system-architect.md` | 10x growth design, loose coupling, dependency mapping | Architecture decisions that don't break at scale |
| `tech-stack-researcher.md` | Technology evaluation, ecosystem compatibility, evidence-based | Prevents picking the wrong library — saves weeks |
| `technical-writer.md` | Audience-targeted docs, working examples, a11y standards | Docs that actually help people use your code |

---

## `commands/dev/` — Development Commands

| File | What It Teaches the AI | Key Patterns |
|------|----------------------|--------------|
| `new-task.md` | Break any task into phased plan with time estimates and risks | Classify (Bug/Feature/Refactor), estimate (S/M/L/XL), list files + deps |
| `code-explain.md` | Progressive explanation: overview → steps → deep dive → examples | Mermaid diagrams, concept identification, algorithm visualization, learning paths. **Largest file (22KB)** |
| `code-optimize.md` | Profile first, optimize second — measurement-driven approach | React memoization, DB indexes, API caching, bundle tree-shaking, memory cleanup |
| `code-cleanup.md` | Systematic refactoring: naming → functions → DRY → complexity → TS | Modern patterns (optional chaining, nullish coalescing), Extract Function, Parameter Object |
| `feature-plan.md` | Structured feature design before coding | Requirements → architecture → steps → testing strategy |
| `lint.md` | Multi-tool quality pipeline: ESLint + Prettier + tsc | Priority-based fixes, Husky + lint-staged pre-commit hooks, VSCode integration |
| `docs-generate.md` | Multiple doc types: JSDoc, API docs, component props, README | @param/@returns/@throws/@example format, TypeDoc auto-gen, good comments explain WHY not WHAT |

---

## `commands/api/` — API Commands

| File | What It Teaches the AI | Key Patterns |
|------|----------------------|--------------|
| `api-new.md` | Next.js 15 App Router API scaffolding | Zod validation first, `{data, success}` response format, shared TypeScript types, no `any` |
| `api-test.md` | Comprehensive test generation with security coverage | Vitest/Jest + Supertest, AAA pattern, tests for SQL injection + XSS + auth failures |
| `api-protect.md` | Defense-in-depth security layering | 3 auth patterns (token/user/role), Supabase RLS, NextAuth sessions, 30+ item security checklist |

---

## `commands/ui/` — UI Commands

| File | What It Teaches the AI | Key Patterns |
|------|----------------------|--------------|
| `component-new.md` | React 19 + TypeScript + accessibility best practices | `use()`, `useActionState()`, `useOptimistic()`, Server/Client split, semantic HTML, ARIA, compound components |
| `page-new.md` | Next.js 15 App Router page patterns | Metadata API for SEO, `loading.tsx` + `error.tsx` + `not-found.tsx`, Suspense streaming, next/image + next/font |

---

## `commands/supabase/` — Supabase Commands

| File | What It Teaches the AI | Key Patterns |
|------|----------------------|--------------|
| `types-gen.md` | Type-safe database access | `npx supabase gen types typescript`, `Tables<'users'>` helper, never manually edit generated types |
| `edge-function-new.md` | Deno serverless functions | `serve()` handler, Supabase client setup, CORS preflight, local testing with `supabase functions serve` |

---

## `commands/git/` — Git Workflow Commands

| File | What It Teaches the AI | Key Patterns |
|------|----------------------|--------------|
| `commit.md` | Intelligent commit workflow with atomic splitting | Pre-commit checks, diff analysis, 50+ emoji conventional commit mappings. **165 lines — most detailed commit guide** |
| `create-pr.md` | Well-formatted PR creation | Description, checklist, labels via `gh` CLI |
| `pr-review.md` | Multi-perspective code review | PM → Developer → QA → Security. "All improvements must be addressed immediately" |
| `fix-github-issue.md` | End-to-end issue resolution | `gh issue view` → search code → implement → test → commit |
| `release.md` | Version release workflow | Update CHANGELOG + bump version + prepare release |
| `add-to-changelog.md` | Keep a Changelog formatting | Version, change type (added/changed/fixed/etc), semantic versioning |
| `update-branch-name.md` | Smart branch renaming | Analyzes diff → determines descriptive name → renames |
| `create-worktrees.md` | Parallel PR development | Creates git worktrees for all open PRs |
| `create-pull-request.md` | Alternative PR creation | GitHub CLI-based PR flow |

---

## `commands/tooling/` — Automation & Project Setup

| File | What It Teaches the AI | Key Patterns |
|------|----------------------|--------------|
| `create-hook.md` | Development automation hooks | Detect project tooling → suggest hooks → configure → test. PreToolUse/PostToolUse patterns. **215 lines** |
| `context-prime.md` | Project context loading | Read README + file tree before starting work |
| `initref.md` | Implementation reference building | Summarize files → create /ref docs → update CLAUDE.md |
| `clean.md` | Codebase-wide lint fix | Run black, isort, flake8, mypy across everything |
| `husky.md` | Repo health verification | lint → build → test → sort-package → stage. Fix loop until clean |
| `todo.md` | Task management | `todos.md` with add/complete/remove/list/undo + due dates |
| `act.md` | Todo-driven development | RED-GREEN-REFACTOR: pick first unchecked item → plan → implement → commit |
| `update-docs.md` | Post-implementation documentation | Update specs, status docs, testing plans, lessons learned |
| `evaluate-repository.md` | Repository security + quality audit | Scores 1-10: code quality, security, docs, functionality, hygiene. Red flag scan |

---

## `commands/product/` — Product Management

| File | What It Teaches the AI | Key Patterns |
|------|----------------------|--------------|
| `create-jtbd.md` | Jobs-to-be-Done thinking | Focus on user needs, not implementation. Read product.md → feature.md → output JTBD |
| `create-prd.md` | Product Requirements Documents | Feature + JTBD → what/why/how specification |
| `create-prp.md` | AI-ready implementation specs | "PRD + codebase intelligence + runbook = minimum viable packet for AI to ship production code on first pass" |

---

## `commands/testing/` — Test Planning

| File | What It Teaches the AI | Key Patterns |
|------|----------------------|--------------|
| `testing_plan_integration.md` | Integration test planning | Creates test cases, suggests refactoring for testability, asks for review before writing |

---

## `workflows/design-review/` — Automated UI Review

| File | Purpose | Key Patterns |
|------|---------|--------------|
| `design-principles.md` | S-Tier SaaS design checklist | Typography, spacing, color, a11y, responsiveness — inspired by Stripe/Airbnb/Linear |
| `design-review-agent.md` | Automated design QA agent | Playwright-based: navigate → screenshot → evaluate against standards |
| `design-review-command.md` | Slash command for UI review | Reviews `git diff` changes through live environment testing |
| `design-review-claude-md-snippet.md` | Quick visual check process | 6 steps: identify → navigate → verify → validate → check → capture |
| `README.md` | Workflow overview | How to set up automated design reviews |

---

## `references/` — Learning Resources

| File/Folder | What It Is |
|-------------|-----------|
| `mcp-servers.md` | Documentation for Context7, Playwright, Supabase MCP servers + how to add custom ones |
| `claude-md-examples/` | 22 real-world CLAUDE.md files from production projects (Course-Builder, LangGraphJS, Giselle, etc.) — learn project configuration patterns |
