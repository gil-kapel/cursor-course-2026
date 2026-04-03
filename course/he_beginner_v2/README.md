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
| 1.1 | What Claude and Cursor are (and how to install)—chat vs code editor, installing Cursor, adding the official extension; opening a workspace folder | [module-01-intro-and-workbench/lesson-1.1-claude-cursor-and-install](module-01-intro-and-workbench/lesson-1.1-claude-cursor-and-install/README.md) |
| 1.2 | Subscriptions and models (tiers & limits)—connecting a plan (API or Cursor Pro), free vs paid, managing quotas on strong models (e.g. Claude 3.5 Sonnet) | [module-01-intro-and-workbench/lesson-1.2-subscriptions-and-models](module-01-intro-and-workbench/lesson-1.2-subscriptions-and-models/README.md) |
| 1.3 | Terminal, Git, and safety nets—easing “black screen” anxiety; why to ask for an explanation before pressing Enter; Git as “save game” so the AI does not rely on stale code | [module-01-intro-and-workbench/lesson-1.3-terminal-git-and-safety](module-01-intro-and-workbench/lesson-1.3-terminal-git-and-safety/README.md) |
| 1.4 | Guided UI tour—inline edit (Cmd+K), side chat (Cmd+L), Composer / multi-file work (Cmd+I) | [module-01-intro-and-workbench/lesson-1.4-guided-ui-tour](module-01-intro-and-workbench/lesson-1.4-guided-ui-tour/README.md) |
| 1.5 | Context—how the “brain” works; the context window; conversation memory; noise in context; clearing clutter and starting fresh chats to avoid confusion or hallucination | [module-01-intro-and-workbench/lesson-1.5-context-window](module-01-intro-and-workbench/lesson-1.5-context-window/README.md) |

### Module 2: Your AI agency — Skills-based development

**Module goal:** Run Claude as a team of specialists, using a structured prompt/Skills pack across the development lifecycle.

#### Planning phase

| Lesson | Topic | Folder |
|--------|--------|--------|
| 2.1 | Introduction to Skills—downloading the course “agents folder” and enabling rules (e.g. `.cursorrules`) for a specific role | [module-02-skills-and-agents/lesson-2.1-skills-intro](module-02-skills-and-agents/lesson-2.1-skills-intro/README.md) |
| 2.2 | Product / research agent—turning an idea into a detailed PRD | [module-02-skills-and-agents/lesson-2.2-product-agent-prd](module-02-skills-and-agents/lesson-2.2-product-agent-prd/README.md) |
| 2.3 | Tech lead agent—translating the spec into tech choices and folder structure | [module-02-skills-and-agents/lesson-2.3-tech-lead-architecture](module-02-skills-and-agents/lesson-2.3-tech-lead-architecture/README.md) |
| 2.4 | UX agent—user flows and screen-level logic | [module-02-skills-and-agents/lesson-2.4-ux-user-flow](module-02-skills-and-agents/lesson-2.4-ux-user-flow/README.md) |
| 2.5 | UI agent—applying design systems / UI libraries | [module-02-skills-and-agents/lesson-2.5-ui-design-systems](module-02-skills-and-agents/lesson-2.5-ui-design-systems/README.md) |
| 2.6 | Security agent—sanity checks and risks (data handling, permissions) | [module-02-skills-and-agents/lesson-2.6-security-agent](module-02-skills-and-agents/lesson-2.6-security-agent/README.md) |

#### Implementation and production

| Lesson | Topic | Folder |
|--------|--------|--------|
| 2.7 | Dev agent—using Composer to write code | [module-02-skills-and-agents/lesson-2.7-dev-agent-composer](module-02-skills-and-agents/lesson-2.7-dev-agent-composer/README.md) |
| 2.8 | Code review agent—refactoring and cleanup | [module-02-skills-and-agents/lesson-2.8-code-review-agent](module-02-skills-and-agents/lesson-2.8-code-review-agent/README.md) |
| 2.9 | QA agent—tests for edge cases | [module-02-skills-and-agents/lesson-2.9-qa-tests-agent](module-02-skills-and-agents/lesson-2.9-qa-tests-agent/README.md) |
| 2.10 | Debug agent—from terminal errors to targeted fixes | [module-02-skills-and-agents/lesson-2.10-debug-agent](module-02-skills-and-agents/lesson-2.10-debug-agent/README.md) |

#### Basic data handling

| Lesson | Topic | Folder |
|--------|--------|--------|
| 2.11 | Local DB—SQLite / JSON for temporary data during development | [module-02-skills-and-agents/lesson-2.11-local-db](module-02-skills-and-agents/lesson-2.11-local-db/README.md) |

### Module 3: Superpowers with MCP servers (Model Context Protocol)

**Module goal:** Extend the editor so Claude can pull live information from external tools.

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

## Work-in-progress note

Right now this track is **scaffold only**: folder layout, links, and table of contents. Scripts, prompts, recordings, and deep-dive materials will be added lesson by lesson.

The earlier beginner track in this repo: [he-beginner](../he-beginner). `he_beginner_v2` does not need to mirror that file layout.
