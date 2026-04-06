# Architecture Plan — Admin Task Management System

## Overview
העתקת מערכת ניהול משימות (Admin Roadmap) מ-FinanceManager אל פרויקט Course.
גישה מוגבלת לשני admin users בלבד, מוגדרים במשתני סביבה.

---

## 1. Architecture & State Management

### Component Hierarchy
```
/admin/roadmap/page.tsx          <- Server component (auth gate)
  RoadmapBoard.tsx               <- Client component, owns all state
      Filter/Search bar
      TaskGroup.tsx[]             <- One per group
         TaskRow.tsx[]            <- One per task (draggable)
            StatusBadge.tsx
            PriorityBadge.tsx
            DateCell.tsx
            OwnerCell.tsx
         AddTaskRow.tsx
      TimelineView.tsx            <- Gantt chart (optional toggle)
      AddGroupButton.tsx
```

### Admin Layout
```
/admin/layout.tsx                <- Server component, auth + role check
   AdminSidebar.tsx              <- Navigation sidebar
   {children}                    <- Page content
```

### State Management
- **No Zustand** -- consistent with Course project conventions
- All state lives in `RoadmapBoard` via `useState` (same pattern as FinanceManager)
- Optimistic updates with snapshot-based rollback on server error
- `useMemo` for client-side filtering/sorting

### Data Flow
```
Client -> Server Action (with ensureAdmin()) -> Prisma -> PostgreSQL
          on success: update local state
          on error: rollback to snapshot + toast
```

### Files to Create
| File | Source (FinanceManager) |
|---|---|
| `src/app/admin/layout.tsx` | New (simplified, just auth gate) |
| `src/app/admin/roadmap/page.tsx` | Copy + adapt |
| `src/components/admin/roadmap/RoadmapBoard.tsx` | Copy + adapt imports |
| `src/components/admin/roadmap/TaskGroup.tsx` | Copy + adapt |
| `src/components/admin/roadmap/TaskRow.tsx` | Copy + adapt |
| `src/components/admin/roadmap/AddTaskRow.tsx` | Copy + adapt |
| `src/components/admin/roadmap/StatusBadge.tsx` | Copy + adapt |
| `src/components/admin/roadmap/PriorityBadge.tsx` | Copy + adapt |
| `src/components/admin/roadmap/DateCell.tsx` | Copy + adapt |
| `src/components/admin/roadmap/OwnerCell.tsx` | Copy + adapt |
| `src/components/admin/roadmap/AddGroupButton.tsx` | Copy + adapt |
| `src/components/admin/roadmap/TimelineView.tsx` | Copy + adapt |
| `src/components/admin/AdminSidebar.tsx` | New (simple nav) |

---

## 2. Database (Prisma) & Performance

### Schema Changes -- Add to `prisma/schema.prisma`

```prisma
enum AdminTaskStatus {
  WORKING_ON_IT
  DONE
  STUCK
  NOT_STARTED
}

enum AdminTaskPriority {
  HIGH
  MEDIUM
  LOW
}

model AdminTaskGroup {
  id         String   @id @default(cuid())
  title      String
  color      String   @default("#69ADFF")
  orderIndex Int      @default(0)
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt

  tasks AdminTask[]
}

model AdminTask {
  id         String             @id @default(cuid())
  groupId    String
  parentId   String?
  title      String
  ownerId    String?
  status     AdminTaskStatus    @default(NOT_STARTED)
  priority   AdminTaskPriority  @default(MEDIUM)
  startDate  DateTime?
  endDate    DateTime?
  orderIndex Int                @default(0)
  createdAt  DateTime           @default(now())
  updatedAt  DateTime           @updatedAt

  group    AdminTaskGroup @relation(fields: [groupId], references: [id], onDelete: Cascade)
  parent   AdminTask?     @relation("SubTasks", fields: [parentId], references: [id], onDelete: Cascade)
  children AdminTask[]    @relation("SubTasks")

  @@index([groupId])
  @@index([groupId, orderIndex])
  @@index([parentId])
  @@index([groupId, parentId, orderIndex])
  @@index([status])
  @@index([priority])
}
```

### Query Optimization
- `getRoadmapData()` -- single query with nested `include`, no N+1
- Task creation uses `findFirst` for max `orderIndex` -- single query
- Group reorder uses `$transaction` batch -- atomic
- No pagination needed (admin-only, limited dataset)

### Migration
```bash
npx prisma migrate dev --name add-admin-task-management
```

---

## 3. Security (Fail-Closed Standard)

### Authentication & Authorization -- ENV-Based Admin Check

**Approach:** Admin access determined solely by `ADMIN_EMAILS` env var (not the `role` DB field).

```
# .env.local
ADMIN_EMAILS=user1@example.com,user2@example.com
```

#### New Files

**`src/lib/admin.ts`** -- Server-side admin helper
- `requireAdmin()` -- calls `auth()`, checks email against `ADMIN_EMAILS`, throws if not admin
- `isAdminEmail(email)` -- pure check, returns boolean

**`src/middleware.ts`** -- Edge middleware for `/admin/*` routes
- Uses NextAuth `auth()` wrapper
- Checks `req.auth.user.email` against `ADMIN_EMAILS`
- Returns 401 if not authenticated, 403 if not admin
- Matcher: `['/admin/:path*']`

### Defense in Depth -- Two Layers
1. **Middleware (Edge):** Blocks unauthorized requests before they reach the page
2. **Server Actions:** Every action calls `requireAdmin()` independently -- fail-closed

### Validation -- Zod Schemas
**`src/lib/validations/admin-roadmap.ts`** -- all input validation schemas copied from FinanceManager:
- `createAdminTaskSchema` -- requires groupId, title; optional parentId, ownerId, status, priority, dates
- `updateAdminTaskSchema` -- all fields optional
- `createAdminTaskGroupSchema` -- title + color
- `updateAdminTaskGroupSchema` -- both optional
- `updateAdminTaskGroupOrderSchema` -- array of {id, orderIndex}

### Vulnerability Check
- **CSRF:** Server Actions use POST-only with Origin check (built-in Next.js protection)
- **XSS:** React auto-escapes all rendered values; no raw HTML injection used
- **IDOR:** Admin-only feature; no user-scoped data -- all admins see the same board
- **Data leakage:** No sensitive data in this feature (task titles/statuses only)

---

## 4. UI/UX (The "Monday.com" Standard)

### Optimistic UI
- Every mutation saves a deep-clone snapshot before applying
- On success: state already reflects the change (instant feel)
- On error: `rollback()` restores snapshot + toast notification

### Loading & Error States
- Initial load: skeleton placeholders for groups and task rows
- Server action errors: toast notification with Hebrew error message
- Empty state: message with CTA to add first group

### RTL Localization
- All existing labels are in Hebrew (from FinanceManager source)
- **Strict logical properties:** `start-0`, `end-0`, `ps-`, `pe-`, `ms-`, `me-` -- no physical `left`/`right`/`pl`/`pr`/`ml`/`mr`
- Audit all copied components and convert any physical directional classes to logical ones

### Drag & Drop
- Install `@hello-pangea/dnd` (used by the copied components)
- Task reordering within groups + cross-group moves

---

## 5. Pre-Implementation Code Review

### Edge Cases
- **Timezone:** Dates stored as UTC `DateTime` in Prisma; displayed using Hebrew locale formatting
- **Empty admin emails:** If `ADMIN_EMAILS` is empty/missing, NO ONE gets access (fail-closed)
- **Case sensitivity:** Email comparison is lowercase-normalized

### Race Conditions
- Optimistic updates with rollback handle concurrent edits gracefully
- `orderIndex` calculation uses `findFirst` max -- no gap-free guarantee, acceptable for admin-only
- Delete guards against temp IDs (prevents deleting tasks not yet persisted)

### New Dependencies
```bash
npm install @hello-pangea/dnd
```
No other new dependencies -- project already has Prisma, Framer Motion, Lucide React.

---

## Implementation Order

| Step | Description |
|---|---|
| 1 | Add `ADMIN_EMAILS` to `.env.local` |
| 2 | Create `src/lib/admin.ts` (requireAdmin + isAdminEmail) |
| 3 | Create `src/middleware.ts` (Edge guard for `/admin/*`) |
| 4 | Add Prisma schema (enums + models) + run migration |
| 5 | Create types file `src/types/admin-roadmap.ts` |
| 6 | Create validation schemas `src/lib/validations/admin-roadmap.ts` |
| 7 | Create server actions `src/app/actions/admin-roadmap.ts` |
| 8 | Install `@hello-pangea/dnd` |
| 9 | Copy + adapt all UI components to `src/components/admin/roadmap/` |
| 10 | Create admin layout `src/app/admin/layout.tsx` + sidebar |
| 11 | Create roadmap page `src/app/admin/roadmap/page.tsx` |
| 12 | Test: verify admin-only access, CRUD operations, drag-and-drop |
