# Architecture Plan — CFO System Migration

## Overview

העתקת מערכת ה-CFO (ניהול פיננסי) מפרויקט FinanceManager.nosync לפרויקט Course, כתפריט חדש באזור הניהול (Admin) לצד מפת הדרכים הקיימת.

### מה כולל ה-CFO?
- **ניהול מנויים** (Subscriptions) — הוצאות/הכנסות חוזרות (חודשי/שנתי)
- **ניהול תנועות** (Transactions) — הוצאות/הכנסות חד-פעמיות
- **אנליטיקה** — 5 כרטיסי KPI, גרף עוגה (הוצאות), גרף עמודות (תזרים), דוח רו"ה
- **סינון, חיפוש ומיון** מתקדמים
- **עריכה inline** עם optimistic updates

---

## 1. Architecture & State Management

### Component Hierarchy

```
AdminSidebar (update: add "CFO" nav item)
  └─ /admin/cfo/page.tsx (server component — fetches data)
       └─ CfoBoard.tsx (client — main container, local state)
            ├── CfoViewToggle.tsx (month / pnl toggle)
            ├── CfoMonthPicker.tsx (month navigation)
            ├── CfoSummaryCards.tsx (5 KPI cards)
            ├── CfoToolbar.tsx (search, filters, sort)
            ├── CfoAnalytics.tsx (pie + bar charts)
            ├── CfoSubscriptionsTable.tsx
            │   ├── SubscriptionRow.tsx (inline editing)
            │   └── AddSubscriptionRow.tsx
            ├── CfoTransactionsTable.tsx
            │   ├── TransactionRow.tsx (inline editing)
            │   └── AddTransactionRow.tsx
            └── CfoPnlReport.tsx (P&L view with line chart)
```

### Badge Sub-Components (shared by rows)
```
CfoBadgeDropdown.tsx        (generic portal dropdown)
  ├── TypeBadge.tsx          (INCOME / EXPENSE)
  ├── SubscriptionStatusBadge.tsx (ACTIVE / REVIEWING / CANCELED)
  ├── TransactionStatusBadge.tsx  (COMPLETED / PENDING)
  └── BillingCycleBadge.tsx       (MONTHLY / YEARLY)
```

### State Management
- **No Zustand** — React hooks only (useState, useMemo, useCallback, useRef), consistent with existing roadmap pattern
- State lives in `CfoBoard.tsx`:
  - `data: CfoData` — subscriptions + transactions
  - `view: 'month' | 'pnl'`
  - `selectedMonth: string | null`
  - `searchQuery`, `filterConfig`, `sortConfigSubs`, `sortConfigTxns`
  - `prevDataRef` — snapshot for optimistic rollback

### Data Flow
- Server component fetches initial data via `getCfoData()`
- Mutations via server actions → optimistic UI update → rollback on error
- Same pattern as existing `RoadmapBoard.tsx`

---

## 2. Database (Prisma) & Performance

### Schema Changes — Append to `prisma/schema.prisma`

```prisma
// ---------------------------------------------------------------------------
// Admin CFO — internal financial management
// ---------------------------------------------------------------------------

enum FinanceRecordType {
  INCOME
  EXPENSE
}

enum BillingCycle {
  MONTHLY
  YEARLY
}

enum SubscriptionStatus {
  ACTIVE
  REVIEWING
  CANCELED
}

enum TransactionStatus {
  COMPLETED
  PENDING
}

model AdminSubscription {
  id              String             @id @default(cuid())
  title           String
  type            FinanceRecordType
  amount          Float
  currency        String             @default("ILS")
  category        String?
  billingCycle    BillingCycle       @default(MONTHLY)
  nextBillingDate DateTime
  status          SubscriptionStatus @default(ACTIVE)
  createdAt       DateTime           @default(now())
  updatedAt       DateTime           @updatedAt

  @@index([type])
  @@index([status])
  @@index([billingCycle])
  @@index([nextBillingDate])
}

model AdminTransaction {
  id         String            @id @default(cuid())
  title      String
  type       FinanceRecordType
  amount     Float
  currency   String            @default("ILS")
  category   String?
  date       DateTime
  status     TransactionStatus @default(COMPLETED)
  receiptUrl String?
  createdAt  DateTime          @default(now())
  updatedAt  DateTime          @updatedAt

  @@index([type])
  @@index([status])
  @@index([date])
}
```

### Query Optimization
- `getCfoData()` — single query per table with `orderBy`, no N+1
- No pagination needed (admin-only, limited dataset)
- Bulk updates: not needed (single-row CRUD only)

### Migration
```bash
npx prisma migrate dev --name add-cfo-models
```

---

## 3. Security (Fail-Closed Standard)

### Authentication & Authorization
- Every server action calls `requireAdmin()` from `@/lib/admin` — same as roadmap
- Page protected by existing admin `layout.tsx` which checks admin access and redirects
- Two-layer defense: layout guard + per-action guard

### Input Validation — Zod Schemas
New file: `src/lib/validations/admin-cfo.ts`

| Schema | Fields |
|--------|--------|
| `createAdminSubscriptionSchema` | title (1-200), type (INCOME/EXPENSE), amount (>=0), currency (<=10, default ILS), category (<=100, optional), billingCycle (MONTHLY/YEARLY), nextBillingDate (ISO date), status (default ACTIVE) |
| `updateAdminSubscriptionSchema` | All above, all optional |
| `createAdminTransactionSchema` | title (1-200), type (INCOME/EXPENSE), amount (>=0), currency (<=10, default ILS), category (<=100, optional), date (ISO date), status (default COMPLETED), receiptUrl (URL, optional) |
| `updateAdminTransactionSchema` | All above, all optional |

### Vulnerability Check
- **CSRF**: Protected by Next.js Server Actions (automatic CSRF tokens)
- **XSS**: All user input is rendered via React (auto-escaped), no raw HTML injection
- **IDOR**: Admin-only tables, no user-specific data — no IDOR risk
- **Sensitive Data**: No secrets in API responses; currency amounts are non-sensitive admin data

---

## 4. UI/UX (The "Monday.com" Standard)

### Optimistic UI
- Same pattern as roadmap: `saveSnapshot()` before mutation → update state → call server action → rollback on error with toast

### Loading & Error States
- Server component renders `CfoBoard` with initial data (no loading spinner needed for initial load)
- Toast notifications for CRUD success/error (reuse existing `useToast` + `ToastContainer`)
- Inline editing shows immediate feedback

### RTL Localization
- All Tailwind: `start-*`, `end-*`, `ps-*`, `pe-*`, `ms-*`, `me-*` — NO physical `left`/`right`/`pl`/`pr`/`ml`/`mr`
- All UI text in Hebrew
- Date formatting with Hebrew locale
- Currency formatting with ILS locale

---

## 5. Pre-Implementation Code Review

### Edge Cases
- **Currency**: amounts stored as Float, formatted with `Intl.NumberFormat` for display
- **Dates**: stored as `DateTime` (UTC), displayed in local timezone with Hebrew locale
- **Month filtering**: "all time" vs specific month — filter transactions by YYYY-MM prefix of `date`

### New Dependency Required
- **`recharts`** — for analytics charts (pie, bar, line). Not currently in package.json

### Race Conditions
- Optimistic updates use `prevDataRef` for rollback — same proven pattern as roadmap
- No unmount cleanup issues (single-page admin view)

---

## Implementation Steps (Ordered)

### Step 1: Infrastructure
1. `npm install recharts`
2. Add CFO enums + models to `prisma/schema.prisma`
3. Run `npx prisma migrate dev --name add-cfo-models`

### Step 2: Shared Utilities
4. Create `src/lib/chartColors.ts` — color palette + `getChartColor()`
5. Create `src/lib/currency.ts` — `formatCurrencyAmount()`
6. Create `src/lib/validations/admin-cfo.ts` — Zod schemas
7. Create `src/types/admin-cfo.ts` — types + UI label/color constants

### Step 3: Server Actions
8. Create `src/app/actions/admin-cfo-actions.ts` — 7 CRUD functions

### Step 4: Components (copy and adapt from FinanceManager)
9. Badge components: `CfoBadgeDropdown`, `TypeBadge`, `SubscriptionStatusBadge`, `TransactionStatusBadge`, `BillingCycleBadge`
10. Table rows: `SubscriptionRow`, `TransactionRow`, `AddSubscriptionRow`, `AddTransactionRow`
11. Tables: `CfoSubscriptionsTable`, `CfoTransactionsTable`
12. Toolbar and nav: `CfoToolbar`, `CfoViewToggle`, `CfoMonthPicker`, `CfoHeaderButton`
13. Analytics: `CfoSummaryCards`, `CfoAnalytics`, `CfoPnlReport`
14. Main board: `CfoBoard.tsx`

### Step 5: Page & Navigation
15. Create `src/app/admin/cfo/page.tsx` (server component)
16. Update `AdminSidebar.tsx` — add CFO nav item with `DollarSign` icon

### Step 6: Verify
17. Run `prisma generate` + `next build` to verify no errors

---

## Files Summary

### New Files (25)

| # | Path | Source |
|---|------|--------|
| 1 | `src/lib/chartColors.ts` | Adapt from FM `src/lib/chartColors.ts` |
| 2 | `src/lib/currency.ts` | Adapt from FM `src/lib/utils.ts` (formatCurrencyAmount only) |
| 3 | `src/lib/validations/admin-cfo.ts` | Adapt from FM `src/lib/validationSchemas.ts` |
| 4 | `src/types/admin-cfo.ts` | Adapt from FM `src/types/admin-cfo.ts` |
| 5 | `src/app/actions/admin-cfo-actions.ts` | Adapt from FM `src/actions/admin-cfo-actions.ts` |
| 6 | `src/app/admin/cfo/page.tsx` | Adapt from FM `src/app/admin/cfo/page.tsx` |
| 7 | `src/components/admin/cfo/CfoBoard.tsx` | Adapt from FM |
| 8 | `src/components/admin/cfo/CfoViewToggle.tsx` | Adapt from FM |
| 9 | `src/components/admin/cfo/CfoMonthPicker.tsx` | Adapt from FM |
| 10 | `src/components/admin/cfo/CfoSummaryCards.tsx` | Adapt from FM |
| 11 | `src/components/admin/cfo/CfoToolbar.tsx` | Adapt from FM |
| 12 | `src/components/admin/cfo/CfoAnalytics.tsx` | Adapt from FM |
| 13 | `src/components/admin/cfo/CfoPnlReport.tsx` | Adapt from FM |
| 14 | `src/components/admin/cfo/CfoSubscriptionsTable.tsx` | Adapt from FM |
| 15 | `src/components/admin/cfo/CfoTransactionsTable.tsx` | Adapt from FM |
| 16 | `src/components/admin/cfo/SubscriptionRow.tsx` | Adapt from FM |
| 17 | `src/components/admin/cfo/TransactionRow.tsx` | Adapt from FM |
| 18 | `src/components/admin/cfo/AddSubscriptionRow.tsx` | Adapt from FM |
| 19 | `src/components/admin/cfo/AddTransactionRow.tsx` | Adapt from FM |
| 20 | `src/components/admin/cfo/CfoBadgeDropdown.tsx` | Adapt from FM |
| 21 | `src/components/admin/cfo/TypeBadge.tsx` | Adapt from FM |
| 22 | `src/components/admin/cfo/SubscriptionStatusBadge.tsx` | Adapt from FM |
| 23 | `src/components/admin/cfo/TransactionStatusBadge.tsx` | Adapt from FM |
| 24 | `src/components/admin/cfo/BillingCycleBadge.tsx` | Adapt from FM |
| 25 | `src/components/admin/cfo/CfoHeaderButton.tsx` | Adapt from FM |

### Existing Files to Modify (2)

| # | Path | Change |
|---|------|--------|
| 1 | `prisma/schema.prisma` | Append 4 enums + 2 models |
| 2 | `src/components/admin/AdminSidebar.tsx` | Add CFO nav item |

---

## Key Adaptation Notes (FM to Course)

| Concern | FinanceManager | Course |
|---------|---------------|--------|
| Admin auth | `requireAdmin()` from `@/lib/adminHelpers` | `requireAdmin()` from `@/lib/admin` |
| Prisma client | `import { prisma } from '@/lib/prisma'` | `import { prisma } from '@/lib/db'` |
| Prisma types | `import { ... } from '@prisma/client'` | `import { ... } from '@/generated/prisma'` |
| Toast | Custom useToast hook | Existing `useToast` + `ToastContainer` (identical API) |
| RTL classes | Mostly logical, needs audit | Enforce strict logical properties |
| Currency util | Depends on FM `formatCurrency` chain | Standalone `formatCurrencyAmount()` |
| Chart colors | `@/lib/chartColors` | Create new `@/lib/chartColors` |
