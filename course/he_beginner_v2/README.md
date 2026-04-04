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

**How the arc fits together (app playlist IDs):** **2.1 → 2.3** are the *skills foundation* (Rules vs Skills, skill anatomy, ASM install). **2.4 → 2.8** are the *planning and design gate* (PRD → architecture → UX → UI → security). **2.9 → 2.12** are the *delivery loop* (Composer → code review → QA → debug). **2.13** is *local persistence* before **Module 4** (e.g. Supabase). Repo folders still use names like `lesson-2.12-skill-anatomy` / `lesson-2.2-product-agent-prd`; the app uses consecutive **2.1–2.13** in teaching order.

**Downloadable skills (ASM):** Every lesson in this module includes **`AGENT_SKILLS.md`** (next to `README.md`) with ranked skills, scores, copy-paste `asm add skill` sources for the good ones, and a suggested `asm create expertise` bundle so students can install the same agent packs into their own project.

**Vendored copies in-repo:** Each lesson also has a **`bundled-skills/`** folder: upstream skill trees copied in for offline use (strictly **> 80** / score **≥ 81** at top level; **72–80** under `_to-improve/` with notes in `TO_IMPROVE.md`). See [module-02-skills-and-agents/bundled-skills/README.md](module-02-skills-and-agents/bundled-skills/README.md); refresh via **`uv run scripts/bundle_module02_skills.py`** from the repo root.

**Official project-level skills:** Each merged agent skill lives **only** in its lesson folder under `module-02-skills-and-agents/`. **`uv run scripts/sync_module02_project_skills.py`** symlinks each skill into **`.cursor/skills/<name>`** (the path this course uses). Project rules often live under **`.cursor/rules`** (or a legacy **`.cursorrules`** file at the repo root). The script may also link **`.claude/skills`** → **`.cursor/skills`** for compatibility with other tools—you can ignore that if you work only in Cursor.

#### Planning phase

| Lesson | Topic | Links |
|--------|--------|--------|
| 2.1 | Skills foundations—**Rules vs Skills** (Cursor 3), two value types (**knowledge injection** vs **workflow orchestration**), where **`.cursor/rules`** and **`.cursor/skills`** live | [README](module-02-skills-and-agents/lesson-2.1-skills-intro/README.md) · [Agent skills](module-02-skills-and-agents/lesson-2.1-skills-intro/AGENT_SKILLS.md) |
| 2.2 | Skill anatomy—how the agent **picks** a skill (frontmatter triggers, progressive disclosure), **good vs bad** `SKILL.md` patterns · folder `lesson-2.12-*` | [README](module-02-skills-and-agents/lesson-2.12-skill-anatomy/README.md) |
| 2.3 | ASM in practice—**`asm search` / `add` / `sync`**, **AGENT_SKILLS.md** scores, **`asm create expertise`** · folder `lesson-2.13-*` | [README](module-02-skills-and-agents/lesson-2.13-asm-discovery/README.md) · [Agent skills (same as 2.1)](module-02-skills-and-agents/lesson-2.1-skills-intro/AGENT_SKILLS.md) |
| 2.4 | Product agent—turning an idea into a PRD (problem, users, scope, flows, metrics, acceptance criteria, risks); start **`.cursor/rules/project.mdc`** · folder `lesson-2.2-*` | [README](module-02-skills-and-agents/lesson-2.2-product-agent-prd/README.md) · [Agent skills](module-02-skills-and-agents/lesson-2.2-product-agent-prd/AGENT_SKILLS.md) |
| 2.5 | Tech lead agent—PRD → stack, boundaries, folder layout, APIs, implementation slices; add **`.cursor/rules/stack.mdc`** · folder `lesson-2.3-*` | [README](module-02-skills-and-agents/lesson-2.3-tech-lead-architecture/README.md) · [Agent skills](module-02-skills-and-agents/lesson-2.3-tech-lead-architecture/AGENT_SKILLS.md) |
| 2.6 | UX agent—journeys, screen logic, empty/error states, handoff before pixels · folder `lesson-2.4-*` | [README](module-02-skills-and-agents/lesson-2.4-ux-user-flow/README.md) · [Agent skills](module-02-skills-and-agents/lesson-2.4-ux-user-flow/AGENT_SKILLS.md) |
| 2.7 | UI agent—components, tokens, states, a11y, responsive behavior (e.g. shadcn-style patterns) · folder `lesson-2.5-*` | [README](module-02-skills-and-agents/lesson-2.5-ui-design-systems/README.md) · [Agent skills](module-02-skills-and-agents/lesson-2.5-ui-design-systems/AGENT_SKILLS.md) |
| 2.8 | Security agent—auth, permissions, secrets, data exposure, abuse cases *before* implementation hardens the wrong path · folder `lesson-2.6-*` | [README](module-02-skills-and-agents/lesson-2.6-security-agent/README.md) · [Agent skills](module-02-skills-and-agents/lesson-2.6-security-agent/AGENT_SKILLS.md) |

#### Implementation and production

| Lesson | Topic | Links |
|--------|--------|--------|
| 2.9 | Dev agent—vertical slice in **Composer** (data + services + UI + validation) with reviewable diffs · folder `lesson-2.7-*` | [README](module-02-skills-and-agents/lesson-2.7-dev-agent-composer/README.md) · [Agent skills](module-02-skills-and-agents/lesson-2.7-dev-agent-composer/AGENT_SKILLS.md) |
| 2.10 | Code review agent—bugs, regressions, security footguns, maintainability, merge readiness (not just “LGTM”) · folder `lesson-2.8-*` | [README](module-02-skills-and-agents/lesson-2.8-code-review-agent/README.md) · [Agent skills](module-02-skills-and-agents/lesson-2.8-code-review-agent/AGENT_SKILLS.md) |
| 2.11 | QA agent—test plans and automated tests: happy paths, edge cases, failures, state vs acceptance criteria · folder `lesson-2.9-*` | [README](module-02-skills-and-agents/lesson-2.9-qa-tests-agent/README.md) · [Agent skills](module-02-skills-and-agents/lesson-2.9-qa-tests-agent/AGENT_SKILLS.md) |
| 2.12 | Debug agent—stack traces / logs → minimal repro → smallest safe fix (no whole-repo guessing) · folder `lesson-2.10-*` | [README](module-02-skills-and-agents/lesson-2.10-debug-agent/README.md) · [Agent skills](module-02-skills-and-agents/lesson-2.10-debug-agent/AGENT_SKILLS.md) |

#### Basic data handling

| Lesson | Topic | Links |
|--------|--------|--------|
| 2.13 | Local DB—when SQLite vs JSON fits, schema-first thinking, disposable dev data (bridge to cloud DB later) · folder `lesson-2.11-*` | [README](module-02-skills-and-agents/lesson-2.11-local-db/README.md) · [Agent skills](module-02-skills-and-agents/lesson-2.11-local-db/AGENT_SKILLS.md) |

### Module 3: Superpowers with MCP servers (Model Context Protocol)

**Module goal:** Extend Cursor so the built-in AI can pull live information from external tools via MCP.

| Lesson | Topic | Folder |
|--------|--------|--------|
| 3.1 | MCP introduction—what the protocol is and how to add a server in Cursor settings | [module-03-mcp/lesson-3.1-mcp-intro](module-03-mcp/lesson-3.1-mcp-intro/README.md) |
| 3.2 | Notion MCP—pulling requirements from PRD docs into Cursor | [module-03-mcp/lesson-3.2-notion-mcp](module-03-mcp/lesson-3.2-notion-mcp/README.md) |
| 3.3 | Figma MCP—from studio designs to code | [module-03-mcp/lesson-3.3-figma-mcp](module-03-mcp/lesson-3.3-figma-mcp/README.md) |
| 3.4 | Web search / fetch—internet for competitor research, up-to-date library docs, and live troubleshooting | [module-03-mcp/lesson-3.4-web-search-fetch](module-03-mcp/lesson-3.4-web-search-fetch/README.md) |

### Module 4: Integrations and deployments

**Module goal:** Move the app off your machine, wire real cloud services, and ship.

| Lesson | Topic | Folder |
|--------|--------|--------|
| 4.1 | Remote DB with Supabase—from local DB to the cloud, including secure Auth | [module-04-deployments/lesson-4.1-supabase-remote-db](module-04-deployments/lesson-4.1-supabase-remote-db/README.md) |
| 4.2 | GitHub prep—packaging the project and pushing to GitHub | [module-04-deployments/lesson-4.2-github-prep](module-04-deployments/lesson-4.2-github-prep/README.md) |
| 4.3 | Deploy with Vercel—connect Vercel to GitHub, builds, public URL | [module-04-deployments/lesson-4.3-vercel-deploy](module-04-deployments/lesson-4.3-vercel-deploy/README.md) |

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

**Module 2** includes full **lesson production scaffolds** per lesson: English `README.md` index, Hebrew **`on-screen.md`** (recording beat sheet), and Hebrew **`narration.md`** (ElevenLabs voiceover, timestamp-aligned to the same beats). Other modules remain scaffold-first until their lesson packs are authored the same way.

Screen recordings, audio exports, and deep-dive add-ons are still added lesson by lesson. When a lesson is split in the app playlist, **duplicate or trim** beat sheets so each part stays within the 3–6 minute target.

The earlier beginner track in this repo: [he-beginner](../he-beginner). `he_beginner_v2` does not need to mirror that file layout.
