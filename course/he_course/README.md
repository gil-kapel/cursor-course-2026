# From Product Managers to AI Developers with Cursor

A Hebrew-delivery course for product managers and beginners who want to move from generic chat to structured work in Cursor—from setting up a workspace through end-to-end projects, Skills-based agents, MCP, and deployment.

## How this repo is organized

| Level | What it means |
|-------|----------------|
| **Module folder** (`module-XX-...`) | A major learning unit: goal and topic arc |
| **Lesson folder** (`lesson-X.Y-...`) | One lesson; contains a `README.md` with the lesson id and title (lesson copy may stay Hebrew in those files) |

Lesson links below are **scaffold only**—teaching content will be added over time.

### Module 1: Introduction and foundations — building your workspace

**Module goal:** Prepare the workspace, reduce technical friction, understand how pricing and limits work, and learn Cursor’s core tools.

| Lesson | Topic | Folder |
|--------|--------|--------|
| 1.1 | What Cursor is (and how to install)—chat vs code editor, installing Cursor, signing in and models inside Cursor, opening a workspace folder | [module-01-intro-and-workbench/lesson-1.1-cursor-and-install](module-01-intro-and-workbench/lesson-1.1-cursor-and-install/README.md) |
| 1.2 | Subscriptions and models (tiers & limits)—Cursor account & billing, free vs paid, choosing models in Cursor, managing usage wisely | [module-01-intro-and-workbench/lesson-1.2-subscriptions-and-models](module-01-intro-and-workbench/lesson-1.2-subscriptions-and-models/README.md) |
| 1.3 | Terminal, Git, and safety nets—easing “black screen” anxiety; why to ask for an explanation before pressing Enter; Git as “save game” so the AI does not rely on stale code | [module-01-intro-and-workbench/lesson-1.3-terminal-git-and-safety](module-01-intro-and-workbench/lesson-1.3-terminal-git-and-safety/README.md) |
| 1.4 | Guided UI tour—inline edit (Cmd+K), side chat (Cmd+L), Composer / multi-file work (Cmd+I) | [module-01-intro-and-workbench/lesson-1.4-guided-ui-tour](module-01-intro-and-workbench/lesson-1.4-guided-ui-tour/README.md) |
| 1.5 | Context—how the “brain” works; the context window; conversation memory; noise in context; clearing clutter and starting fresh chats to avoid confusion or hallucination | [module-01-intro-and-workbench/lesson-1.5-context-window](module-01-intro-and-workbench/lesson-1.5-context-window/README.md) |
| 1.6 | Chat modes: Agent, Ask, Plan & Debug—when to use each mode; Plan mode (Shift+Tab) for thinking before building; decision framework; combined Plan-to-Debug demo | [module-01-intro-and-workbench/lesson-1.6-chat-modes](module-01-intro-and-workbench/lesson-1.6-chat-modes/README.md) |
| 1.7 | Cursor Settings—configuring the editor (General, Models, Tab, Agents) before starting real work; expanded deep-dive into Indexing & Docs for adding custom documentation URLs; module 1 wrap-up | [module-01-intro-and-workbench/lesson-1.7-cursor-settings](module-01-intro-and-workbench/lesson-1.7-cursor-settings/README.md) |

### Module 2: Your AI agency — Skills-based development

**Module goal:** Run Cursor’s AI as a team of specialists, using a structured Skills/rules pack across the development lifecycle.

**How the arc fits together (app playlist IDs):** **2.1 → 2.3** are the *practical skills foundation* (Rules vs Skills, **Agent management / context separation**, ASM install). **2.4 → 2.7** are the *planning and design gate* (installed product skill → PRD → architecture → conversation-led zero-friction UX → conversation-led UI + Stitch workflow). **2.8 → 2.9** are the *plan-then-build gate* (Plan mode slice planning → Composer implementation by slice). **2.10 → 2.12** are the *quality loop* (code review → QA → debug). **2.13** closes the module with **sharp prompts and task-specific context building**, so students can operate their agent team cleanly in real projects. Repo folders use consecutive **2.1–2.13** in teaching order.

**Downloadable skills (ASM):** Module 2 lessons may rely on project skills that are installed into the workspace and used through the agent workflow. Internal skill-ranking reference files may exist in the repo, but the student-facing lesson flow should not depend on opening them directly.

**Vendored copies in-repo:** Lessons that include skill packs also include a **`bundled-skills/`** folder: upstream skill trees copied in for offline use (strictly **> 80** / score **≥ 81** at top level; **72–80** under `_to-improve/` with notes in `TO_IMPROVE.md`). See [module-02-skills-and-agents/bundled-skills/README.md](module-02-skills-and-agents/bundled-skills/README.md); refresh via **`uv run scripts/bundle_module02_skills.py`** from the repo root.

**Official project-level skills:** Each merged agent skill lives **only** in its lesson folder under `module-02-skills-and-agents/`. **`uv run scripts/sync_module02_project_skills.py`** symlinks each skill into **`.cursor/skills/<name>`** (the path this course uses). Project rules often live under **`.cursor/rules`** (or a legacy **`.cursorrules`** file at the repo root). The script may also link **`.claude/skills`** → **`.cursor/skills`** for compatibility with other tools—you can ignore that if you work only in Cursor.

> **Note:** Lesson numbers below follow the syllabus order (2.1, 2.2, …) which differs from on-disk folder names (`lesson-2.1-*`, `lesson-2.2-*`, …). Each row includes the folder name for easy navigation.

#### Planning phase

| Lesson | Topic | Links |
|--------|--------|--------|
| 2.1 | Skills foundations—**Rules vs Skills** (Cursor 3), two value types (**knowledge injection** vs **workflow orchestration**), where **`.cursor/rules`** and **`.cursor/skills`** live | [README](module-02-skills-and-agents/lesson-2.1-skills-intro/README.md) |
| 2.2 | Agent management in Cursor—creating **specialist agents**, giving each one its own context, and avoiding cross-task context pollution | [README](module-02-skills-and-agents/lesson-2.2-agent-management/README.md) |
| 2.3 | ASM in practice—using the **Agent** to install the exact skill needed for the next lesson, then verifying `asm.toml`, `.asm`, and `.cursor/skills/product-prd-agent` | [README](module-02-skills-and-agents/lesson-2.3-asm-discovery/README.md) |
| 2.4 | Product agent—using the installed product skill to turn an idea into a PRD (problem, users, scope, flows, metrics, acceptance criteria, risks); start **`.cursor/rules/project.mdc`** | [README](module-02-skills-and-agents/lesson-2.4-product-agent-prd/README.md) |
| 2.5 | Tech lead agent—PRD → stack, boundaries, folder layout, APIs, implementation slices; add **`.cursor/rules/stack.mdc`** | [README](module-02-skills-and-agents/lesson-2.5-tech-lead-architecture/README.md) |
| 2.6 | UX agent—conversation-led UX interview, next-action clarity, zero-friction flows, empty/error states, and conversion logic before pixels | [README](module-02-skills-and-agents/lesson-2.6-ux-user-flow/README.md) |
| 2.7 | UI agent + Stitch workflow—sync the course repo skill into `.cursor/skills`, use that exact skill for a conversation-led UI interview, upload a Dribbble reference, then generate and bring back Stitch material | [README](module-02-skills-and-agents/lesson-2.7-ui-design-systems/README.md) |
| 2.8 | Plan agent—use **Plan mode** to combine PRD, architecture, UX, and UI into one implementation plan or multiple slice plans before coding | [README](module-02-skills-and-agents/lesson-2.8-security-agent/README.md) |

#### Implementation and production

| Lesson | Topic | Links |
|--------|--------|--------|
| 2.9 | Dev agent—implement **Slice 1** in Composer from the plan, verify it, then return to the slice plan before continuing | [README](module-02-skills-and-agents/lesson-2.9-dev-agent-composer/README.md) |
| 2.10 | Code review agent—bugs, regressions, security footguns, maintainability, merge readiness (not just “LGTM”) | [README](module-02-skills-and-agents/lesson-2.10-code-review-agent/README.md) |
| 2.11 | QA agent—test plans and automated tests: happy paths, edge cases, failures, state vs acceptance criteria | [README](module-02-skills-and-agents/lesson-2.11-qa-tests-agent/README.md) |
| 2.12 | Debug agent—stack traces / logs → minimal repro → smallest safe fix (no whole-repo guessing) | [README](module-02-skills-and-agents/lesson-2.12-debug-agent/README.md) |

#### Basic data handling

| Lesson | Topic | Links |
|--------|--------|--------|
| 2.13 | Agent prompt kits—**sharp prompts**, task-scoped context, `@` file selection, and why each agent/task should keep its own clean context | [README](module-02-skills-and-agents/lesson-2.13-agent-context-prompts/README.md) |

### Module 3: Superpowers with MCP servers (Model Context Protocol)

**Module goal:** Extend Cursor so the built-in AI can pull live information from external tools via MCP, use those tools inside real development workflows, and integrate their outputs and server setups into the student’s own project.

| Lesson | Topic | Folder |
|--------|--------|--------|
| 3.1 | MCP introduction—what the protocol is, how to add a server in Cursor settings, and a repeatable workflow for integrating any MCP into a real project | [module-03-mcp/lesson-3.1-mcp-intro](module-03-mcp/lesson-3.1-mcp-intro/README.md) |
| 3.2 | Stitch MCP—get a fast first draft for one frontend section and turn it into a real build step inside the app | [module-03-mcp/lesson-3.2-stitch-mcp](module-03-mcp/lesson-3.2-stitch-mcp/README.md) |
| 3.3 | Figma MCP—inspect the real design and polish one frontend section with more precise implementation details | [module-03-mcp/lesson-3.3-figma-mcp](module-03-mcp/lesson-3.3-figma-mcp/README.md) |
| 3.4 | Web search / fetch and other practical MCPs—use live docs, research, and troubleshooting tools, then decide which other MCPs belong in the student’s project workflow | [module-03-mcp/lesson-3.4-web-search-fetch](module-03-mcp/lesson-3.4-web-search-fetch/README.md) |

### Module 4: Integrations and deployments

**Module goal:** Start with practical local data, then move the app to real cloud services, package it cleanly, and ship a live URL.

| Lesson | Topic | Folder |
|--------|--------|--------|
| 4.1 | Local DB basics—what a local database is, when JSON is enough, when to use SQLite, and how to build a tiny practical data layer with one real read/write flow | [module-04-deployments/lesson-4.1-local-db-basics](module-04-deployments/lesson-4.1-local-db-basics/README.md) |
| 4.2 | Remote DB with Supabase—move the same schema to the cloud, wire env vars safely, and add first-pass RLS | [module-04-deployments/lesson-4.1-supabase-remote-db](module-04-deployments/lesson-4.1-supabase-remote-db/README.md) |
| 4.3 | GitHub prep—clean the repo, protect secrets, add a minimal README, and push safely | [module-04-deployments/lesson-4.2-github-prep](module-04-deployments/lesson-4.2-github-prep/README.md) |
| 4.4 | Deploy with Vercel—connect GitHub, set build/runtime config, and verify a real public flow | [module-04-deployments/lesson-4.3-vercel-deploy](module-04-deployments/lesson-4.3-vercel-deploy/README.md) |

### Module 5: End-to-end capstone projects

**Module goal:** Apply agents and tools to build real products from zero to working software.

| Lesson | Topic | Folder |
|--------|--------|--------|
| 5.1 | Project A—personal automation (data / files); CSV and `@` mentions; debugging by pasting logs without parsing every error line | [module-05-capstone-projects/lesson-5.1-project-automation-data](module-05-capstone-projects/lesson-5.1-project-automation-data/README.md) |
| 5.2 | Project B—fast interactive landing page; hero section; catalog or product list mixing design with structured data | [module-05-capstone-projects/lesson-5.2-project-landing-page](module-05-capstone-projects/lesson-5.2-project-landing-page/README.md) |
| 5.3 | Course wrap-up—from chat consumers to AI-savvy PMs and fully independent projects | [module-05-capstone-projects/lesson-5.3-course-wrap-up](module-05-capstone-projects/lesson-5.3-course-wrap-up/README.md) |

---

## Lesson length (playlist)

**Target:** each **playlist entry** is about **3–6 minutes** of teaching time. Longer topics are split into **(א) / (ב)** parts (and **(ג)** when needed), each with its own id in the app (e.g. `2.7`, `2.7b`, `2.7c`). The **repo folder** for a skill may still be one per topic (e.g. `lesson-2.7-dev-agent-composer`); production splits `on-screen.md` / `narration.md` to match the parts.

## Work-in-progress note

**Module 2** and **Module 4** include full **lesson production scaffolds** per lesson: English `README.md` index, Hebrew **`on-screen.md`** (recording beat sheet), and Hebrew **`narration.md`** (ElevenLabs voiceover, timestamp-aligned to the same beats). Other modules remain scaffold-first until their lesson packs are authored the same way.

Screen recordings, audio exports, and deep-dive add-ons are still added lesson by lesson. When a lesson is split in the app playlist, **duplicate or trim** beat sheets so each part stays within the 3–6 minute target.

This tree is the **canonical Hebrew curriculum** for the Cursor Course web app (`/course`). Lesson folders, `on-screen.md` / `narration.md`, and Module 2 agent skills live here; paths in `src/data/` and `scripts/` assume `course/he_course/`.
