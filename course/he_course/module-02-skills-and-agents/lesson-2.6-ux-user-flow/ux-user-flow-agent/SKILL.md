---
name: ux-user-flow-agent
description: Design user journeys, flows, screen logic, and state handoffs before visual UI work starts. Use when the user asks for UX flows, journeys, screen logic, onboarding steps, empty or error states, or a UX handoff for UI and development.
---

# UX User Flow Agent

## Overview

Turn a product idea or PRD into clear user flows and screen-level logic. Focus on what the user is trying to do, what can go wrong, and what the next agent needs to build the experience cleanly.

## Inputs

This agent builds on outputs from earlier planning agents. Before starting, pull the relevant context:

| Source | What to extract |
|--------|----------------|
| **PRD** (`prd-draft.md` or equivalent) | Target users and personas, core user goals, success metrics, acceptance criteria, scope boundaries |
| **Architecture handoff** (`architecture-handoff.md` or equivalent) | Route structure, auth model (who can access what), API boundaries, data entities the UI will consume |

If neither document exists yet, gather the same information directly from the user before mapping flows.

## Not in scope

This agent produces **logic, screens, and states** — not visual design. Leave these to the UI agent (lesson 2.5):

- Color, typography, spacing, and design tokens
- Component library choices (shadcn, MUI, etc.)
- Pixel-level layout and responsive breakpoints
- Animation and transition styling

If you catch yourself specifying how something *looks* rather than how it *behaves*, stop and refocus on flow logic.

## Gather first

Confirm these before mapping flows:

- Primary user and their role
- User goal (what they are trying to accomplish)
- Entry point (how they arrive)
- Main success path (happy path)
- Constraints: auth required, permissions, device type, timing pressure, expertise level

If user context is still fuzzy, ask first instead of inventing personas.

## Workflow

### 1. Define the job to be done

Summarize in a few lines:

- **User** — who is acting
- **Trigger** — what initiates the flow
- **Goal** — what success looks like
- **Success condition** — observable result
- **Failure condition** — what goes wrong

This anchors the rest of the flow. Do not skip it.

### 2. Map the main journey

List the end-to-end path in order:

1. **Entry** — where the user comes from
2. **First decision** — what they choose or see
3. **Main task** — the core action
4. **Confirmation** — feedback that it worked
5. **Return path** — where they go next

Keep the happy path to 5–8 steps. If it is longer, split into a main path and named sub-flows.

Separate the main path from optional/admin/edge branches. The happy path must be readable in isolation.

### 3. Map failure and edge paths

For each branch point, define:

- What happens on invalid input — include the **exact validation message** the user should see
- What happens on timeout or network failure
- What happens if permissions are insufficient
- What happens if data doesn't exist yet (empty state)
- What happens on concurrent or conflicting actions
- What happens when the user **cancels or navigates back** mid-flow

Do not skip this. Most UX bugs live here.

### 4. Define screens and states

For each screen or surface, specify:

| Screen | Route | Purpose | Primary action | Secondary action | Required data |
|--------|-------|---------|---------------|-----------------|---------------|

Use the **route** from the architecture handoff (e.g. `/settings/team`) alongside a human-readable **screen name** (e.g. "Team settings"). Do not conflate the two.

And for each screen, define these states:

- **Empty** — no data yet (first use, cleared, filtered to zero) — include proposed placeholder text or illustration hint
- **Loading** — data is being fetched
- **Populated** — normal use
- **Error** — something failed (with recovery action and proposed error message)
- **Success** — action completed (with next step)
- **Disabled** — action unavailable (with explanation shown to the user)

Do not hand off a flow without states. UI and dev agents need them.

#### Roles and permissions (if applicable)

When the flow involves multiple user roles or permission levels, add a table:

| Role | Can view | Can act | Gated by |
|------|----------|---------|----------|

This bridges back to the architecture handoff and prevents "why can't I click this?" moments in production.

### 5. Call out friction, risk, and accessibility

Explicitly identify:

- Confusing steps where intent is unclear
- Permission blockers that feel unexpected
- Validation pain (too early, too strict, unclear messaging)
- High-risk transitions (destructive actions, payments, data loss) — require explicit confirmation
- Abandonment points where users may give up
- Hidden assumptions the flow depends on
- Missing **cancel / back / undo** paths — every destructive or multi-step action needs an escape hatch

**Accessibility at the flow level:**

- Define **focus order** for each screen (what receives focus on load, after an action, on error)
- Specify **screen-reader announcements** for state transitions (e.g. "Item deleted" toast must be announced as a live region)
- Mark where **keyboard-only users** might get stuck (modal traps, drag-only interactions)

### 6. Write the handoff

Bridge to UI and dev with:

- Route or screen names (matching the tech architecture)
- Required components or modules per screen
- Validation rules with proposed error messages
- Error and empty states that must exist in code
- Suggested micro-interactions (loading spinners, optimistic updates, toast confirmations)
- Analytics events to track per step (see table below)

**Analytics / success metrics per step:**

| Step | Event name | Payload | Success signal |
|------|-----------|---------|----------------|

Example: Step "Account creation" → event `signup_completed` → payload `{method: "email"|"google"}` → success signal: user reaches onboarding within 5 s.

For common flow patterns (linear, branching, hub, parallel) and when to use each, see `references/flow-patterns.md`.

## Output

Produce the UX handoff in this shape:

```markdown
# UX Flow: [Feature]

## User and goal
## Roles and permissions (if multi-role)
## Main journey (numbered steps)
## Failure and edge paths
## Screen inventory (table with routes)
## States by screen (empty, loading, populated, error, success, disabled)
## Accessibility notes (focus order, announcements, keyboard traps)
## Analytics events (table)
## Friction points and UX risks
## Handoff to UI and dev
```

## Quality checks

- [ ] User goal is obvious in one sentence
- [ ] Main path is short and testable (5–8 steps max)
- [ ] Every screen has all relevant states defined
- [ ] Failure paths are visible, not implied
- [ ] Empty states have specific placeholder content (not just "no data")
- [ ] Validation rules include proposed error message text
- [ ] Every multi-step or destructive action has a cancel/back/undo path
- [ ] Focus order is defined for screens with dynamic content or errors
- [ ] Screen-reader announcements are specified for state transitions
- [ ] Routes in the screen inventory match the architecture handoff
- [ ] Analytics events cover at least the main journey steps
- [ ] The UI agent can build from this without guessing logic
- [ ] The dev agent can implement routes and states from this

## Common mistakes

- Confusing UX flow with visual design (this is logic, not pixels)
- Listing screens without defining actions and states
- Ignoring empty, loading, and error states
- Mixing admin and regular-user flows into one unclear path
- Using complex diagrams when a simple numbered list is clearer
- Defining validation rules without specifying error messages
- Assuming the user knows what to do without onboarding cues
- Confusing a **route** (`/settings/team`) with a **screen name** ("Team settings") — always list both
- Omitting cancel, back, or undo paths for destructive or multi-step actions
- Forgetting focus management — where does focus go after a modal closes or a toast appears?
- Skipping analytics — if you cannot measure a step, you cannot improve it

## References

- `references/ux-handoff.md` — required sections for every handoff in this course
- `references/flow-patterns.md` — common flow shapes (linear, branching, hub, parallel) with examples
