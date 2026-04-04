---
name: ui-design-systems-agent
description: Turn UX flows into a UI plan grounded in components, tokens, states, accessibility, and responsive behavior. Use when the user asks for UI design, component structure, design systems, shadcn, Tailwind, screen specs, or a UI handoff before coding or polishing starts.
---

# UI Design Systems Agent

## Overview

Convert UX logic into a concrete UI system the developer can build without guessing. Default to reusable components, token-driven styling, and explicit states instead of ad-hoc page mockups.

## Gather first

Confirm:

- Which screen or flow is being designed
- Existing design system or component library (if any)
- Tech stack: React, Next.js, Vue, etc.
- Brand constraints (colors, typography, tone) if they exist
- Whether the deliverable is a spec, component plan, or coded UI

If there is no existing system, propose a minimal one before styling details.

## Default stack

Unless the project already chose a different stack:

| Layer | Default | Why |
|-------|---------|-----|
| Component library | **shadcn/ui** | Copy-in ownership, Radix primitives, full customization |
| Styling | **Tailwind CSS v4** | Utility-first, `@theme` tokens, `@custom-variant` for dark mode |
| Variant management | **class-variance-authority (cva)** | Type-safe variant props, composable with `cn()` |
| Utility merge | **clsx + tailwind-merge** via `cn()` | Prevents class conflicts |
| Icons | **lucide-react** | Tree-shakeable, consistent, pairs with shadcn |
| Forms | **react-hook-form + Zod** | Validation at the boundary, minimal re-renders |

shadcn/ui is **copy-in, not a package** — components live in `components/ui/` and are fully owned. Custom wrappers go in `components/` (never modify `components/ui/` directly).

## Workflow

### 1. Map the UI hierarchy

Define:

- **Page / surface** — top-level container
- **Sections** — logical groups within the page
- **Reusable components** — from shadcn/ui or design system
- **Custom components** — composed from primitives, managed with cva

Prefer composition over custom one-off widgets. If a shadcn component exists, use it.

### 2. Define the token system

Use Tailwind v4 `@theme` for semantic tokens:

```css
@theme {
  --color-primary: oklch(0.65 0.24 265);
  --color-surface: oklch(0.98 0.01 265);
  --radius-default: 0.5rem;
  --spacing-page: 1.5rem;
}
```

Token hierarchy: **brand → semantic → component**

Define:

- **Typography scale** — headings, body, caption (use `@theme` font sizes)
- **Spacing rhythm** — consistent base unit (4px or 8px grid)
- **Color roles** — primary, secondary, destructive, muted, surface
- **Border and radius** — consistent radius tokens
- **Interaction patterns** — which shadcn components for dialogs, toasts, dropdowns, tabs

Do not hardcode random values. Every visual choice traces to a token.

### 3. Specify states for every component

For each important component or screen:

| State | What the user sees | Data condition |
|-------|-------------------|----------------|
| Default | Normal view | Data loaded |
| Loading | Skeleton / spinner | Fetching |
| Empty | Illustration + CTA | No data exists |
| Error | Message + retry | Request failed |
| Success | Confirmation | Action completed |
| Disabled | Greyed + tooltip | Action unavailable |

UI quality is mostly state quality. Do not skip this.

### 4. Check accessibility and responsiveness

Always cover:

- **Keyboard path** — every interactive element reachable via Tab, Enter, Escape
- **Labels and focus** — visible focus rings, `aria-label` for icon-only buttons
- **Contrast** — text meets WCAG 2.1 AA (4.5:1 normal, 3:1 large)
- **Responsive** — mobile-first breakpoints, collapsible nav, stacked layouts
- **Overflow** — long text, localization, dynamic content

### 5. Write build notes for dev

Include:

- Which components come from shadcn/ui (list by name)
- Which components need custom composition with cva
- Which props or data drive state changes
- Animation patterns (use `@starting-style` for enter, keyframes in `@theme` for motion)
- Dark mode approach (`@custom-variant dark` in Tailwind v4)

## Output

Produce the UI spec in this shape:

```markdown
# UI Spec: [Screen or Feature]

## Goal
## Component tree (hierarchy)
## Token system (colors, typography, spacing, radius)
## shadcn/ui components used
## Custom components (with cva variants)
## States by component (table)
## Responsive behavior (breakpoints)
## Accessibility notes
## Build notes for dev
```

## Quality checks

- [ ] Component reuse is higher than one-off invention
- [ ] Every state is specified (empty, loading, error, success, disabled)
- [ ] Token system is defined before visual details
- [ ] shadcn components are used before building custom ones
- [ ] Layout collapses responsively at mobile breakpoints
- [ ] Accessibility is addressed before polish (keyboard, contrast, labels)
- [ ] A dev can implement the screen without reverse-engineering the design intent
- [ ] Dark mode behavior is specified

## Common mistakes

- Designing only the happy-path populated state
- Picking colors and spacing without a token strategy
- Overriding shadcn's `components/ui/` files instead of wrapping
- Treating Tailwind utility classes as the design system itself
- Confusing UI polish with UX logic (this skill is about structure, not animation details)
- Ignoring dark mode until the end
- Using custom components when shadcn already provides one
