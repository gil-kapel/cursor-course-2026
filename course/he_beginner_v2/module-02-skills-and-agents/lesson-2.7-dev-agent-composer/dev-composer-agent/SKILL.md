---
name: dev-composer-agent
description: Implement a feature in small, testable slices using Composer-style multi-file work. Use when the user asks to build, implement, wire up, or ship a feature across files, especially when code must connect data shape, services, UI, validation, and tests.
---

# Dev Composer Agent

## Overview

Build working software in the smallest vertical slice that proves the feature. Start from the data shape, keep boundaries explicit, and verify after each slice before widening.

## Default implementation rules

- Start with the data shape — schema before handlers
- Keep functions short (≤25 lines) and single-purpose
- Name the pattern being used (Repository, Service, Command, Worker)
- Stay within one abstraction level at a time
- Never mix sync and async in one logical path
- Validate at boundaries with executable schemas

## Default stack choices

When the project hasn't chosen yet, default to:

**TypeScript / Full-stack:**

| Layer | Default | Why |
|-------|---------|-----|
| Framework | **Next.js** (app router) | Server components, API routes, file routing |
| Data layer | **Prisma** | Type-safe ORM, migration-first, works with SQLite → Postgres |
| Validation | **Zod** | Runtime + compile-time schemas, composable |
| State | **Zustand** (client), **React Query** (server) | Minimal boilerplate, cache-aware |
| Forms | **react-hook-form + Zod resolver** | Validation at boundary |
| Styling | **Tailwind CSS + shadcn/ui** | Token-driven, copy-in components |

**Python / Backend:**

| Layer | Default | Why |
|-------|---------|-----|
| Framework | **FastAPI** | Async-native, OpenAPI auto-docs |
| Data layer | **SQLModel** | SQLAlchemy + Pydantic in one model |
| Validation | **Pydantic** | Built into FastAPI, schema-first |
| Background | **asyncio.gather** for parallel, **BullMQ** (via worker) for queued | Clear async boundaries |
| Testing | **pytest + pytest-asyncio** | Async-aware, fixture-driven |

## Workflow

### 1. Restate the slice

Before editing, define in 4 bullets:

- **User-visible behavior** — what the user can do after this slice
- **Required files / layers** — which boundaries are touched
- **Smallest end-to-end path** — the minimal code that makes it work
- **Main risk** — what could break

If the change is too broad, shrink it until one person can verify it in minutes.

### 2. Model the contract first

Write or confirm before implementation:

- **Input shape** — request body, props, or function args (Zod / Pydantic schema)
- **Output shape** — response body, return type, or state update
- **Stored data** — database model or schema
- **Validation rules** — what gets rejected and why
- **Error cases** — what can fail and how it's reported

If the schema is unclear, stop and fix it first.

### 3. Implement by boundary

Follow this order strictly:

1. **Types / schema** — Zod schemas, Pydantic models, or SQLModel classes
2. **Repository / data access** — queries behind one interface
3. **Service / command** — business logic, named pattern
4. **Route / UI / handler** — external access to the service
5. **Validation + error handling** — guards at every boundary
6. **Tests** — at least one happy path and one failure path

Rules per layer:

- Repository: only data access, no business logic
- Service: orchestrates repos and rules, no direct DB or HTTP
- Route/UI: thin adapter, delegates to service, handles HTTP/rendering concerns only

### 4. Verify after each step

After each meaningful change:

- Run the narrowest relevant test or command
- Check lint and type errors
- Read the result and fix issues before proceeding
- If a test doesn't exist yet, write one before moving to the next layer

One verified slice beats three half-wired files.

### 5. Wire and integrate

After individual layers work:

- Connect the route/UI to the service
- Verify the full path works end-to-end
- Check error paths return correct responses
- Confirm validation rejects bad input at the boundary

## Output

When asked to implement, produce:

1. **The smallest useful code change** across all touched files
2. **A short explanation** of what was added and which pattern was used
3. **Verification evidence** — test output, lint clean, or manual repro
4. **Next slice** — what to build next if the feature isn't complete

## Quality checks

- [ ] Data shape is explicit with executable schemas (Zod / Pydantic / SQLModel)
- [ ] Each layer does exactly one job
- [ ] Patterns are named (Repository, Service, Command)
- [ ] Errors are handled intentionally at boundaries
- [ ] Async usage is consistent within each flow
- [ ] Verification happened after the change (not "trust me")
- [ ] No business logic in UI components or route handlers
- [ ] Functions are ≤25 lines or orchestrate smaller functions

## Common mistakes

- Starting from UI polish before the data contract exists
- Editing many unrelated files "while here"
- Hiding business logic in React components or route handlers
- Adding cache or background work without a TTL / invalidation contract
- Declaring success without running verification
- Using raw SQL or fetch calls scattered across the app instead of a repository
- Mixing sync and async in the same service method
- Writing code without knowing which pattern it follows
