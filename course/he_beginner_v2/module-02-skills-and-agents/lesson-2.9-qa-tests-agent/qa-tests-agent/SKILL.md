---
name: qa-tests-agent
description: Create test plans and focused automated tests that cover happy paths, edge cases, failures, and state transitions. Use when the user asks for QA planning, test cases, edge-case coverage, unit or integration tests, or a release-readiness check on feature behavior.
---

# QA Tests Agent

## Overview

Translate requirements and behavior into a practical test strategy. Optimize for useful coverage that catches real bugs, not noisy test count.

## Gather first

Confirm:

- What feature is under test
- Requirements or acceptance criteria (link to PRD if available)
- Existing test stack or framework choices
- Risks: money, auth, destructive actions, background jobs, async behavior
- What's already tested vs untested

If the behavior is unclear, ask for expected vs actual outcomes before generating tests.

## Default stack

Unless the project already chose a different stack:

**TypeScript:**

| Level | Framework | When to use |
|-------|-----------|-------------|
| Unit + Integration | **Vitest** | Pure logic, services, utilities, component rendering |
| Component | **React Testing Library** | User interaction, state changes, rendering |
| E2E | **Playwright** | Critical user journeys, cross-page flows |
| Mocking | **MSW (Mock Service Worker)** | API mocking without coupling to implementation |

**Python:**

| Level | Framework | When to use |
|-------|-----------|-------------|
| Unit + Integration | **pytest** | Pure logic, services, repositories |
| Async | **pytest-asyncio** | Async services, FastAPI endpoints |
| API | **httpx + pytest** | FastAPI TestClient, endpoint testing |
| Mocking | **unittest.mock / pytest-mock** | Dependency isolation |

## Workflow

### 1. Build the coverage map

For each requirement or acceptance criterion, identify:

| Requirement | Happy path | Edge cases | Error handling | State transitions | Permissions |
|-------------|-----------|------------|----------------|-------------------|-------------|
| Create item | Valid input → saved | Empty name, max length, duplicates | DB error, validation fail | Draft → Active | Owner only |

If a requirement has no testable assertion, flag it — untestable requirements are incomplete requirements.

### 2. Choose the right test level

Default to the **cheapest level** that proves the behavior:

```text
Unit test     → Pure logic, calculations, transformations
Integration   → Service + repository wiring, API contracts
Component     → UI rendering, user interaction, state changes
E2E           → Critical user journeys across pages (sparingly)
```

Rules:

- Unit tests for pure functions and business rules
- Integration tests for boundaries (service ↔ repo, API ↔ service)
- Component tests for UI behavior (Testing Library, not snapshot)
- E2E only for critical paths that span multiple pages
- Never push everything into E2E

### 3. Write crisp test cases

Use clear Given / When / Then with IDs that map back to the plan:

```text
TC-F-001: Create item with valid input
  Given: authenticated user on the create form
  When:  fills name "Widget" and submits
  Then:  item appears in the list, toast confirms creation

TC-E-001: Create item with empty name
  Given: authenticated user on the create form
  When:  submits with empty name
  Then:  validation error shown, item not created

TC-ERR-001: Create item when DB is unreachable
  Given: authenticated user, database connection fails
  When:  submits valid item
  Then:  error message shown, no partial data saved

TC-ST-001: Item transitions from draft to active
  Given: item in draft state
  When:  owner clicks "publish"
  Then:  state changes to active, published_at is set
```

ID convention:

- `TC-F-NNN` — functional / happy path
- `TC-E-NNN` — edge case
- `TC-ERR-NNN` — error handling
- `TC-ST-NNN` — state transition
- `TC-SEC-NNN` — permission / security

### 4. Prioritize by risk

Not all tests are equal. Prioritize:

1. **Critical business rules** — money, permissions, data integrity
2. **Error handling** — failures that could corrupt or expose data
3. **State transitions** — lifecycle changes that are hard to undo
4. **Regressions** — things that broke before or are easy to reintroduce
5. **Edge cases** — boundary values, empty inputs, concurrent access

### 5. Set release gates

Define clear go/no-go criteria:

- All `TC-F-*` and `TC-ERR-*` cases must pass
- No critical or high-severity test failures
- Coverage on changed files ≥80% (lines, not just statements)
- No skipped tests on critical paths

## Output

Produce results in this shape:

```markdown
# Test Plan: [Feature]

## Coverage map (requirement → test cases)
## Priority test cases (with TC-* IDs)
## Test level split (unit / integration / component / E2E)
## Release gates
## Gaps and open questions
```

If asked to write actual tests, use the TC-* IDs as test names:

```typescript
describe("Create item", () => {
  it("TC-F-001: creates item with valid input", async () => { ... });
  it("TC-E-001: rejects empty name", async () => { ... });
  it("TC-ERR-001: handles DB failure gracefully", async () => { ... });
});
```

## Quality checks

- [ ] Every requirement maps to at least one test case
- [ ] Edge cases and failure modes are explicitly covered
- [ ] Test level matches the risk (not everything in E2E)
- [ ] Assertions test observable outcomes, not implementation details
- [ ] Test IDs are consistent and traceable to the plan
- [ ] Release gates are defined with clear pass/fail criteria
- [ ] The plan highlights any requirements that can't be tested

## Common mistakes

- Writing tests before behavior is clearly defined
- Overusing E2E for logic that a unit test covers
- Ignoring permissions and state transitions in test plans
- Testing implementation details instead of outcomes
- Padding the suite with low-value tests that don't catch real bugs
- Using snapshot tests as a substitute for behavior assertions
- Not mocking external dependencies (testing third-party services instead of your code)
