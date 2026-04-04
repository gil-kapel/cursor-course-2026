---
name: local-db-development-agent
description: Design and use lightweight local persistence with SQLite or JSON during development. Use when the user asks for a local database, temporary persistence, schema design, small CRUD flows, dev data storage, or when deciding between JSON files and SQLite for an early-stage project.
---

# Local DB Development Agent

## Overview

Choose the lightest persistence option that keeps the project understandable. Start from the data shape, then decide whether JSON is enough or SQLite is the safer default.

## Decision rule

| Criteria | JSON file | SQLite |
|----------|-----------|--------|
| Data size | Tiny (< 100 records) | Any size |
| Relationships | None or flat | Foreign keys, joins needed |
| Queries | Full scan is fine | Filtering, sorting, aggregation |
| Concurrency | Single process only | Multiple readers, WAL mode |
| Human readability | Helpful for learning | Not needed |
| Migration path | Manual restructure | Schema migrations |

**Default: SQLite** unless the data is truly tiny and temporary with no relationships.

## Default stack

**Python (recommended for this course):**

| Layer | Default | Why |
|-------|---------|-----|
| ORM / schema | **SQLModel** | SQLAlchemy + Pydantic in one model class |
| Migrations | **Alembic** | Schema evolution, auto-generate from models |
| Connection | **`aiosqlite`** (async) or built-in `sqlite3` (sync) | Match the project's async boundary |

**TypeScript:**

| Layer | Default | Why |
|-------|---------|-----|
| ORM / schema | **Prisma** | Type-safe, migration-first, SQLite → Postgres path |
| Query builder alt | **Drizzle** | Lighter weight, SQL-like, good for SQLite |
| Validation | **Zod** | Validate at boundaries before persistence |

**JSON persistence (when appropriate):**

| Layer | Default | Why |
|-------|---------|-----|
| Read/write | **`fs.readFile` / `fs.writeFile`** (TS) or **`pathlib` + `json`** (Python) | Simple, no dependencies |
| Validation | **Zod** (TS) or **Pydantic** (Python) | Validate shape before write |

## Workflow

### 1. Define the data shape first

List:

- **Entities** — what objects exist
- **Fields** — required fields with types and constraints
- **Identifiers** — use CUID2 or UUID, never auto-increment for distributed safety
- **Relationships** — how entities connect (with cascade rules)
- **Valid states** — lifecycle of each entity

Do not start by picking tables or file names before the shape is clear.

### 2. Model with executable schemas

**Python (SQLModel):**

```python
class Item(SQLModel, table=True):
    id: str = Field(default_factory=cuid2, primary_key=True)
    name: str = Field(min_length=1, max_length=200)
    status: ItemStatus = Field(default=ItemStatus.DRAFT)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    owner_id: str = Field(foreign_key="user.id")
```

**TypeScript (Prisma):**

```prisma
model Item {
  id        String   @id @default(cuid())
  name      String
  status    Status   @default(DRAFT)
  createdAt DateTime @default(now())
  owner     User     @relation(fields: [ownerId], references: [id])
  ownerId   String
}
```

### 3. Isolate data access behind one boundary

Always put persistence behind a repository layer:

```text
Route/Handler → Service → Repository → Database
                                    ↑
                          Only this layer knows about SQL/JSON
```

Rules:

- No raw SQL or file reads in handlers or services
- Repository returns domain objects, not raw rows
- Repository handles connection management
- One repository per entity (or per aggregate root)

### 4. Design for safe writes

**SQLite best practices:**

- Enable WAL mode: `PRAGMA journal_mode=WAL;`
- Use explicit transactions for multi-step writes
- Add `ON DELETE CASCADE` or `SET NULL` on foreign keys — decide up front
- Add indexes only where queries justify them (check with `EXPLAIN QUERY PLAN`)
- Use `select` discipline — query only the fields you need

**JSON best practices:**

- Keep one clear schema per file
- Validate with Pydantic/Zod before writing
- Write to temp file then rename (atomic write)
- Avoid deeply nested shapes if they'll need querying later

### 5. Plan the first CRUD slice

Define:

- **Create** — input validation, ID generation, initial state
- **Read** — by ID, list with filtering/pagination
- **Update** — partial update, optimistic locking if concurrent
- **Delete** — soft delete (status change) or hard delete with cascades
- **Failure states** — what happens on constraint violation, not found, permission denied

Implement this slice end-to-end before adding more entities.

### 6. Plan the migration path

Document what changes when the project grows:

| Current | Growth trigger | Migration target |
|---------|---------------|-----------------|
| JSON files | Need queries, relationships | SQLite + SQLModel/Prisma |
| SQLite local | Multi-server, > 10GB, need replication | PostgreSQL |
| Single-file SQLite | Edge/multi-region | LiteFS or Turso |

Keep the repository boundary clean so switching storage requires changing one layer, not the whole app.

## Output

Produce the local-data plan in this shape:

```markdown
# Local Data Plan: [Feature]

## Persistence choice (JSON vs SQLite — with justification)
## Data model (entities, fields, relationships, states)
## Schema code (SQLModel / Prisma / Zod)
## Repository boundary (interface)
## CRUD flows (create, read, update, delete, failure cases)
## Validation rules
## Migration path (what changes when the project grows)
```

## Quality checks

- [ ] Data shape is explicit with types and constraints
- [ ] Persistence choice is justified (not assumed)
- [ ] Access goes through one repository boundary
- [ ] IDs use CUID2/UUID, not auto-increment
- [ ] CRUD paths are defined with failure cases
- [ ] Validation happens before persistence
- [ ] Migration path is documented
- [ ] WAL mode enabled for SQLite (if concurrent reads expected)

## Common mistakes

- Choosing JSON for relational data that already needs queries
- Writing SQL before naming entities and states
- Mixing storage logic into handlers or UI components
- Skipping validation for local-only data ("it's just dev data")
- Using auto-increment IDs that break if data is moved or merged
- Treating "temporary" data as if it never needs cleanup or migration
- Not setting WAL mode on SQLite (causes lock contention)
- Scattering raw `db.query()` calls instead of using a repository
