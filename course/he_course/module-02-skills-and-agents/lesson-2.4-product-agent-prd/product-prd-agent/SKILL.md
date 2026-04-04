---
name: product-prd-agent
description: Turn a rough product idea into a usable PRD with problem statement, users, scope, flows, metrics, acceptance criteria, risks, and open questions. Use when the user asks for a PRD, product spec, feature definition, discovery write-up, or planning document before UX, architecture, or coding starts.
---

# Product PRD Agent

## Overview

Convert fuzzy ideas into a practical PRD another agent can act on. Favor clarity, scope control, and handoff quality over corporate ceremony.

## Gather first

Do not draft the PRD until these are clear enough:

- Product or feature name
- Target user (who feels the pain)
- Main problem being solved
- Desired outcome for the user or business
- Constraints: time, budget, stack, platform, team size

If any are missing, ask concise follow-up questions before writing. Do not invent answers.

## Workflow

### 1. Clarify the problem

Write in plain language:

- Current pain and who feels it
- Why existing behavior is not good enough
- What success looks like (measurable if possible)

Do not jump into screens or implementation.

### 2. Define users and context

Capture:

- Primary user and their goal
- Secondary user or stakeholder (if needed)
- Context of use: frequency, urgency, device, expertise level, permissions

Use one persona only if that is enough. Do not invent a persona pack.

### 3. Set scope with three buckets

- **In scope** — what this PRD covers
- **Out of scope** — what it explicitly does not cover
- **Open questions** — what blocks confidence

This is the fastest way to stop PRDs from becoming wish lists.

### 4. Describe the core flow

Summarize the main user journey in 5-8 numbered steps:

1. Entry point (how the user arrives)
2. Main action (the core task)
3. Decision or branch (what can vary)
4. Result (success state)
5. Failure or edge state (what goes wrong)

This must be detailed enough for UX and architecture agents to continue.

### 5. Write testable requirements

Use short, testable bullets organized as:

- **Functional requirements** — "The system must..."
- **Non-functional constraints** — performance, availability, scale
- **Permissions or roles** — who can do what
- **Acceptance criteria** — observable pass/fail conditions per requirement
- **Success metrics** — how to measure if the feature works (quantified)

Prefer "The system must..." over vague "should probably".

### 6. Surface risk early

Always include:

- Biggest **product risk** (wrong problem, wrong user)
- Biggest **UX risk** (confusing flow, abandoned task)
- Biggest **technical risk** (infeasible, fragile, slow)
- Biggest **delivery risk** (scope creep, unclear dependency)
- Missing information that blocks confidence

If the idea is still weak, say so explicitly instead of pretending the PRD is ready.

### 7. Write the handoff

Bridge to the next agents with:

- Entities or data objects that obviously exist
- Screens or surfaces likely needed
- Role or permission rules
- External integrations mentioned
- Suggested architecture questions to resolve

## Output

Produce the PRD in this shape:

```markdown
# PRD: [Feature or Product]

## Summary
## Problem
## Target users
## Goals and success metrics
## In scope
## Out of scope
## Main user flow
## Functional requirements
## Non-functional requirements
## Acceptance criteria
## Risks
## Open questions
## Handoff to architecture / UX
```

## Completion checklist

- [ ] Problem is specific and evidence-based
- [ ] Primary user is obvious with clear goal
- [ ] Scope is bounded with explicit out-of-scope items
- [ ] Every acceptance criterion has a pass/fail condition
- [ ] Success metrics are quantifiable
- [ ] Risks are stated with severity, not hidden
- [ ] Open questions list what blocks confidence
- [ ] A tech lead can continue without guessing the goal
- [ ] A UX designer can start flows without re-reading the problem

## Common mistakes

- Writing a roadmap instead of a PRD
- Mixing implementation details into the problem section
- Skipping out-of-scope items (scope creep magnet)
- Leaving acceptance criteria as generic statements ("it should work well")
- Hiding uncertainty instead of listing open questions
- Writing for stakeholders instead of for the next agent in the chain
