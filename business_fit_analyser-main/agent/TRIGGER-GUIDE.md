# 🗂️ Universal Agent Trigger Guide

> **What is this?** The master index for this toolkit — **37 commands, 11 agents, 3 MCP servers**.
> Works with **any AI agent**. When you say "update the UI", this tells the agent which file to read.

---

## 📁 Folder Structure

```
agent/
├── TRIGGER-GUIDE.md               ← You are here
├── FILE-REFERENCE.md              ← Detailed file-by-file explainer
│
├── agents/                        ← 11 AI specialist personas
│   ├── backend-architect.md
│   ├── deep-research-agent.md
│   ├── frontend-architect.md
│   ├── learning-guide.md
│   ├── performance-engineer.md
│   ├── refactoring-expert.md
│   ├── requirements-analyst.md
│   ├── security-engineer.md
│   ├── system-architect.md
│   ├── tech-stack-researcher.md
│   └── technical-writer.md
│
├── commands/                      ← 36 task playbooks
│   ├── dev/                       ← Development (7)
│   ├── api/                       ← API endpoints (3)
│   ├── ui/                        ← UI components (2)
│   ├── supabase/                  ← Database & serverless (2)
│   ├── git/                       ← Git workflows (9)
│   ├── tooling/                   ← Automation & setup (9)
│   ├── product/                   ← Product management (3)
│   └── testing/                   ← Test planning (1)
│
├── workflows/                     ← Multi-step processes
│   └── design-review/             ← Automated UI review (5 files)
│
└── references/                    ← Learning resources
    ├── mcp-servers.md             ← MCP server docs
    └── claude-md-examples/        ← 22 real-world project configs
```

---

## ⚡ COMMANDS

### 🛠️ Development (`commands/dev/`)

| # | Command | File | When | Output |
|---|---------|------|------|--------|
| 1 | `/new-task` | `commands/dev/new-task.md` | Starting any work | Task plan with phases, time estimate, risks |
| 2 | `/feature-plan` | `commands/dev/feature-plan.md` | Planning a feature | Architecture + implementation steps |
| 3 | `/code-explain` | `commands/dev/code-explain.md` | Understanding complex code | Visual diagrams + step-by-step walkthrough |
| 4 | `/code-optimize` | `commands/dev/code-optimize.md` | Slow performance | Bottleneck analysis + optimized code |
| 5 | `/code-cleanup` | `commands/dev/code-cleanup.md` | Messy/prototype code | Refactored code + before/after comparison |
| 6 | `/lint` | `commands/dev/lint.md` | Before committing | Lint report + auto-fixes + priority list |
| 7 | `/docs-generate` | `commands/dev/docs-generate.md` | Documentation needed | JSDoc + API docs + README sections |

### 🔌 API (`commands/api/`)

| # | Command | File | When | Output |
|---|---------|------|------|--------|
| 8 | `/api-new` | `commands/api/api-new.md` | Creating an endpoint | Route handler + Zod validation + types |
| 9 | `/api-test` | `commands/api/api-test.md` | Testing an endpoint | Full test suite + mock data + npm script |
| 10 | `/api-protect` | `commands/api/api-protect.md` | Securing an endpoint | Auth + RBAC + rate limiting + CORS |

### 🎨 UI (`commands/ui/`)

| # | Command | File | When | Output |
|---|---------|------|------|--------|
| 11 | `/component-new` | `commands/ui/component-new.md` | Building a UI element | React component + TypeScript + a11y |
| 12 | `/page-new` | `commands/ui/page-new.md` | Creating a page | Full page + SEO + loading/error states |

### 💾 Supabase (`commands/supabase/`)

| # | Command | File | When | Output |
|---|---------|------|------|--------|
| 13 | `/types-gen` | `commands/supabase/types-gen.md` | After DB schema change | TypeScript types + helper utilities |
| 14 | `/edge-function-new` | `commands/supabase/edge-function-new.md` | Need serverless logic | Deno Edge Function + auth + CORS |

### 🔄 Git (`commands/git/`)

| # | Command | File | When | Output |
|---|---------|------|------|--------|
| 15 | `/commit` | `commands/git/commit.md` | Committing code | Smart atomic commits with emoji convention |
| 16 | `/create-pr` | `commands/git/create-pr.md` | Opening a PR | Formatted PR with description + labels |
| 17 | `/pr-review` | `commands/git/pr-review.md` | Reviewing a PR | PM + Dev + QA + Security review |
| 18 | `/fix-github-issue` | `commands/git/fix-github-issue.md` | Fixing a GitHub issue | Read → find code → fix → test → commit |
| 19 | `/release` | `commands/git/release.md` | Releasing a version | CHANGELOG update + version bump |
| 20 | `/add-to-changelog` | `commands/git/add-to-changelog.md` | Updating changelog | Keep a Changelog formatted entry |
| 21 | `/update-branch-name` | `commands/git/update-branch-name.md` | Renaming a branch | Analyzes diff → suggests name |
| 22 | `/create-worktrees` | `commands/git/create-worktrees.md` | Parallel PR work | Git worktrees for all open PRs |
| 23 | `/create-pull-request` | `commands/git/create-pull-request.md` | Creating PR (alt) | Alternative PR creation flow |

### 🧰 Tooling (`commands/tooling/`)

| # | Command | File | When | Output |
|---|---------|------|------|--------|
| 24 | `/create-hook` | `commands/tooling/create-hook.md` | Automating workflows | Detects tooling → creates + tests hooks |
| 25 | `/context-prime` | `commands/tooling/context-prime.md` | Starting a session | Loads project context (README + file tree) |
| 26 | `/initref` | `commands/tooling/initref.md` | Documenting a project | Builds implementation reference in /ref |
| 27 | `/clean` | `commands/tooling/clean.md` | Fixing all lint issues | black + isort + flake8 + mypy across codebase |
| 28 | `/husky` | `commands/tooling/husky.md` | Verifying repo health | lint → build → test → sort → stage (fix loop) |
| 29 | `/todo` | `commands/tooling/todo.md` | Managing tasks | Add/complete/remove/list with due dates |
| 30 | `/act` | `commands/tooling/act.md` | Working through todos | Pick item → plan → implement → commit |
| 31 | `/update-docs` | `commands/tooling/update-docs.md` | After implementation | Update specs + status + lessons learned |
| 32 | `/evaluate-repository` | `commands/tooling/evaluate-repository.md` | Auditing a repo | Security + quality scores (1-10) |

### 📋 Product (`commands/product/`)

| # | Command | File | When | Output |
|---|---------|------|------|--------|
| 33 | `/create-jtbd` | `commands/product/create-jtbd.md` | Understanding user needs | Jobs-to-be-Done document |
| 34 | `/create-prd` | `commands/product/create-prd.md` | Writing requirements | Product Requirements Document |
| 35 | `/create-prp` | `commands/product/create-prp.md` | AI-ready requirements | PRD + codebase context for AI implementation |

### 🧪 Testing (`commands/testing/`)

| # | Command | File | When | Output |
|---|---------|------|------|--------|
| 36 | `/testing-plan` | `commands/testing/testing_plan_integration.md` | Planning integration tests | Test plan + refactoring suggestions |

---

## 🤖 AGENTS (`agents/`)

> Agents activate based on context. Read the file to adopt the persona.

### Architecture & Planning

| # | Agent | File | Activates When You… | Example Prompts |
|---|-------|------|----------------------|-----------------|
| 1 | **tech-stack-researcher** | `agents/tech-stack-researcher.md` | Compare libraries, choose tech | "Should I use WebSockets or SSE?" |
| 2 | **system-architect** | `agents/system-architect.md` | Design systems, plan scale | "How should I structure this?" |
| 3 | **backend-architect** | `agents/backend-architect.md` | Design APIs, databases, auth | "What's the best auth pattern?" |
| 4 | **frontend-architect** | `agents/frontend-architect.md` | Build UI architecture, a11y | "Make this accessible" |
| 5 | **requirements-analyst** | `agents/requirements-analyst.md` | Have vague ideas, need specs | "Help me write a PRD" |

### Code Quality & Performance

| # | Agent | File | Activates When You… | Example Prompts |
|---|-------|------|----------------------|-----------------|
| 6 | **refactoring-expert** | `agents/refactoring-expert.md` | Need code improvement | "This code is too complex" |
| 7 | **performance-engineer** | `agents/performance-engineer.md` | Have slow code | "Find the bottleneck" |
| 8 | **security-engineer** | `agents/security-engineer.md` | Need security review | "Check for vulnerabilities" |

### Documentation & Research

| # | Agent | File | Activates When You… | Example Prompts |
|---|-------|------|----------------------|-----------------|
| 9  | **technical-writer** | `agents/technical-writer.md` | Need docs | "Write docs for this module" |
| 10 | **learning-guide** | `agents/learning-guide.md` | Want to learn | "Explain how async works" |
| 11 | **deep-research-agent** | `agents/deep-research-agent.md` | Need investigation | "Research the best options for X" |

---

## 🔌 MCP SERVERS (`references/mcp-servers.md`)

| Server | What It Does | How to Use |
|--------|--------------|------------|
| **Context7** | Up-to-date library docs | Say "use context7" |
| **Playwright** | Browser automation + E2E tests | Available for browser tasks |
| **Supabase** | Database queries + schema management | Available for DB operations |

---

## 🎨 DESIGN REVIEW (`workflows/design-review/`)

| File | Purpose |
|------|---------|
| `design-principles.md` | S-Tier SaaS checklist (Stripe/Airbnb/Linear standards) |
| `design-review-agent.md` | Automated design QA agent with Playwright |
| `design-review-command.md` | Slash command for reviewing UI changes |
| `design-review-claude-md-snippet.md` | Quick 6-step visual check after any frontend change |

---

## 🎬 SCENARIO PLAYBOOK

### Building

| Scenario | Files to Use (in order) |
|----------|------------------------|
| **Full feature** | `dev/new-task` → `api/api-new` → `ui/component-new` → `dev/lint` → `git/commit` |
| **New page** | `ui/page-new` → `ui/component-new` → `dev/lint` → `git/commit` |
| **New API** | `api/api-new` → `api/api-protect` → `api/api-test` → `git/commit` |
| **PM-driven feature** | `product/create-jtbd` → `product/create-prd` → `product/create-prp` → `tooling/act` |

### Improving

| Scenario | Files to Use |
|----------|-------------|
| **Slow code** | `dev/code-optimize` + `agents/performance-engineer` |
| **Messy code** | `dev/code-cleanup` + `agents/refactoring-expert` → `dev/lint` |
| **Security** | `api/api-protect` + `agents/security-engineer` → `tooling/evaluate-repository` |
| **Missing docs** | `dev/docs-generate` + `agents/technical-writer` |

### Git & Release

| Scenario | Files to Use |
|----------|-------------|
| **Commit** | `git/commit` |
| **Open PR** | `git/create-pr` |
| **Review PR** | `git/pr-review` |
| **Fix issue** | `git/fix-github-issue` |
| **Release** | `tooling/husky` → `git/release` → `git/commit` → `git/create-pr` |

---

## ⚠️ Rules

1. **Start** with `dev/new-task` for non-trivial work
2. **End** with `dev/lint` before every commit
3. **Use** `git/commit` instead of raw `git commit`
4. **No `any` types** — all commands enforce TypeScript strict
5. **Server Components by default** — `'use client'` only when needed
6. **Zod validation** at every API boundary
