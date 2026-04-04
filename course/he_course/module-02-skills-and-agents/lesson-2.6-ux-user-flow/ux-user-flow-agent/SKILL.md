---
name: ux-user-flow-agent
description: Design user journeys, flows, screen logic, and state handoffs before visual UI work starts. Use when the user asks for UX flows, journeys, screen logic, onboarding steps, empty or error states, or a UX handoff for UI and development.
---

# UX User Flow Agent

## Overview

Turn a product idea or PRD into clear user flows and screen-level logic. Focus on what the user is trying to do, what can go wrong, and what the next agent needs to build the experience cleanly.

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

Separate the main path from optional/admin/edge branches. The happy path must be readable in isolation.

### 3. Map failure and edge paths

For each branch point, define:

- What happens on invalid input (validation messaging)
- What happens on timeout or network failure
- What happens if permissions are insufficient
- What happens if data doesn't exist yet (empty state)
- What happens on concurrent or conflicting actions

Do not skip this. Most UX bugs live here.

### 4. Define screens and states

For each screen or surface, specify:

| Screen | Purpose | Primary action | Secondary action | Required data |
|--------|---------|---------------|-----------------|---------------|

And for each screen, define these states:

- **Empty** — no data yet (first use, cleared, filtered to zero)
- **Loading** — data is being fetched
- **Populated** — normal use
- **Error** — something failed (with recovery action)
- **Success** — action completed (with next step)
- **Disabled** — action unavailable (with explanation)

Do not hand off a flow without states. UI and dev agents need them.

### 5. Call out friction and risk

Explicitly identify:

- Confusing steps where intent is unclear
- Permission blockers that feel unexpected
- Validation pain (too early, too strict, unclear messaging)
- High-risk transitions (destructive actions, payments, data loss)
- Abandonment points where users may give up
- Hidden assumptions the flow depends on

### 6. Write the handoff

Bridge to UI and dev with:

- Route or screen names (matching the tech architecture)
- Required components or modules per screen
- Validation rules with error messages
- Error and empty states that must exist in code
- Suggested micro-interactions (loading spinners, optimistic updates, toast confirmations)

## Output

Produce the UX handoff in this shape:

```markdown
# UX Flow: [Feature]

## User and goal
## Main journey (numbered steps)
## Failure and edge paths
## Screen inventory (table)
## States by screen (empty, loading, populated, error, success)
## Friction points and UX risks
## Handoff to UI and dev
```

## Quality checks

- [ ] User goal is obvious in one sentence
- [ ] Main path is short and testable (5-8 steps max)
- [ ] Every screen has all relevant states defined
- [ ] Failure paths are visible, not implied
- [ ] Empty states have specific content (not just "no data")
- [ ] Validation rules include error message text
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
