---
name: tailwind-best-practices
description: Tailwind CSS quality rules (tokens, classnames, component reuse). Originally scoped to Mastra Playground paths; course addendum maps paths to any React+Vite/Next repo. Use with bundled tailwind-design-system skill; this file is the lint-style checklist.
---

# Tailwind Best Practices

## Overview

Styling guidelines containing **5 rules across 3 categories**, prioritized by impact. The examples below reference **Mastra Playground** paths; see **Course generalization** for your own repo.

## Course generalization (any Tailwind + React project)

| Mastra reference | Your project (typical) |
|------------------|-------------------------|
| `packages/playground-ui` | Shared UI package or `components/ui/` |
| `packages/playground` | App package or `app/`, `src/` |
| `@playground-ui/ds/components/` | Your design-system import path (e.g. `@/components/ui`) |
| `tailwind.config.ts` in `@playground-ui` | **Root** `tailwind.config.ts` / `tailwind.config.js`, or app-specific config in monorepos |

**Read order with this course:** use **`bundled-skills/tailwind-design-system/`** first for structure; use **this** skill as a **don’t-do-this** checklist (tokens, arbitrary values, DS overrides).

## Scope (upstream — adapt paths)

- `packages/playground-ui`
- `packages/playground`

## When to Apply

Reference these guidelines when:

- Writing new React components with Tailwind styles
- Reviewing code for styling consistency
- Refactoring existing styled components
- Adding or modifying UI elements

## Priority-Ordered Guidelines

Rules are prioritized by impact:

| Priority | Category        | Impact   |
| -------- | --------------- | -------- |
| 1        | Component Usage | CRITICAL |
| 2        | Design Tokens   | CRITICAL |
| 3        | ClassName Usage | HIGH     |

## Quick Reference

### Critical Patterns (Apply First)

**Component Usage:**

- Use existing components from `@playground-ui/ds/components/` (`component-use-existing`)
- Never create new components in the `ds/` folder

**Design Tokens:**

- Only use tokens from `tailwind.config.ts` in `@playground-ui` (`tokens-use-existing`)
- Never modify design tokens or `tailwind.config.ts` (`tokens-no-modification`)

### High-Impact Patterns

**ClassName Usage:**

- No arbitrary Tailwind values except `height` and `width` (`classname-no-arbitrary`)
- No `className` prop on DS components except `h-`/`w-` on `DialogContent` and `Popover` (`classname-no-ds-override`)

## References

Full documentation with code examples is available in:

- `references/tailwind-best-practices-reference.md` - Complete guide with all patterns
- `references/rules/` - Individual rule files organized by category

To look up a specific pattern, grep the rules directory:

```
grep -l "component" references/rules/
grep -l "token" references/rules/
grep -l "className" references/rules/
```

## Rule Categories in `references/rules/`

- `component-*` - Component usage rules (1 rule)
- `tokens-*` - Design token rules (2 rules)
- `classname-*` - ClassName usage rules (2 rules)
