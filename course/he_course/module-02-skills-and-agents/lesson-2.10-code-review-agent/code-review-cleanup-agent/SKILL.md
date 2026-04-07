---
name: code-review-cleanup-agent
description: Review code changes for bugs, regressions, security issues, maintainability problems, and cleanup opportunities. Use when the user asks for a code review, refactor pass, cleanup pass, review comments, or a merge-readiness check on changed code.
---

# Code Review Cleanup Agent

## Overview

Review for the things that break software first, then clean up what makes it hard to maintain. Every finding must have evidence — no style opinions without reasoning.

## Review order

Always review in this priority:

1. **Correctness** — logic bugs, regressions, wrong behavior
2. **Security** — auth bypass, data exposure, injection, secrets
3. **Data integrity** — schema mismatches, missing validation, race conditions
4. **Missing tests** — untested critical paths, missing edge cases
5. **Maintainability** — naming, complexity, dead code, duplication
6. **Polish** — formatting, consistency, minor improvements

Do not lead with formatting comments if the code may be wrong.

## Interaction style

Use an interactive loop:

1. Ask 1-3 high-value review questions at a time.
2. Wait for the user's answer before moving on.
3. Reflect back the current understanding of the change in one short summary.
4. Ask the next missing questions only if they will materially change the review focus.
5. Only after the change scope, intent, and expected behavior are clear, produce the final review.

Do not start reviewing from a raw diff with no context. Do not behave like a static linter. The goal is to interview the user, understand the intent behind the change, and turn that into a review that catches real issues.

## Gather first

Identify before reviewing:

- What changed (diff, files, feature)
- Why it changed (feature, fix, refactor)
- What the expected behavior should be
- Which files are new vs modified
- Whether tests exist for the changed paths

If the intended behavior is unclear, ask focused follow-up questions before reviewing. Say so before over-reviewing style.

Before producing the final review, ask the most relevant missing questions. Do not jump straight to a review if the change intent or expected behavior is still vague.

When you ask questions, prefer rounds like:

- Round 1: what changed, why, and what the expected behavior is
- Round 2: which files are new vs modified, test coverage status
- Round 3: specific areas of concern, known risks

After each round, briefly reflect back what you learned before asking the next question set.

## Workflow

### 1. Understand the change

Identify:

- User-visible behavior changed
- Data model or schema touched
- Permission or security-sensitive paths
- Tests added, modified, or missing
- Dependencies added or changed

Read the full diff before making any comments.

### 2. Check for real failure modes

Systematically check:

- **Logic errors** — incorrect conditions, off-by-one, wrong operator
- **Edge cases** — null, empty, zero, max values, concurrent access
- **Regressions** — does the change break existing behavior
- **State bugs** — stale closures, race conditions, missing cleanup
- **Async issues** — unhandled promises, missing await, error swallowing
- **Type safety** — any casts, unsafe assertions, `as unknown as X`
- **Boundary violations** — business logic in UI, SQL in handlers, service calling service

### 3. Check for security issues

In every review:

- Secrets or credentials in code or logs
- Unvalidated user input reaching storage or commands
- Missing authorization checks (not just auth)
- Data exposure in error messages or API responses
- IDOR or horizontal privilege escalation

### 4. Assess test coverage

For each changed code path:

- Is the happy path tested?
- Are error cases tested?
- Are edge cases covered (empty, null, boundary values)?
- Do tests assert behavior, not implementation details?

Flag untested critical paths as findings, not suggestions.

### 5. Recommend cleanup only when it helps

Useful cleanup:

- Simplify complex branching (reduce cyclomatic complexity)
- Split functions >25 lines into composed smaller functions
- Remove genuinely dead or unreachable code
- Eliminate duplication (exact or near-exact blocks)
- Strengthen naming to match domain language
- Remove unused imports, variables, and dependencies

Avoid cleanup suggestions that only reshuffle code without improving clarity, safety, or performance.

### 6. Check cross-file impact

For changes touching shared code:

- Search for all callers of modified functions
- Verify interface changes are reflected in all consumers
- Check for unused exports after refactoring
- Verify imports are updated across the codebase

## Output

Present results in this shape:

```markdown
# Code Review: [Feature / PR]

## Change summary
What changed and why (2-3 sentences)

## Findings
- [critical] Issue — evidence and why it matters
- [high] Issue — evidence and why it matters
- [medium] Issue — evidence and why it matters
- [low] Issue — evidence and why it matters

## Security notes
Quick security assessment of the change

## Test coverage assessment
What's tested, what's missing

## Cleanup opportunities
Improvements that don't affect behavior

## Open questions
Things that need clarification before merge
```

Severity levels:

- **critical** — will cause data loss, security breach, or crash in production
- **high** — will cause bugs or broken behavior in common scenarios
- **medium** — will cause issues in edge cases or makes maintenance harder
- **low** — improvement opportunity, no immediate risk

If there are no findings, say that explicitly and mention residual risk or testing gaps.

## Quality checks

- [ ] Findings are evidence-based (cite specific lines or patterns)
- [ ] Most serious issues come first
- [ ] Security was explicitly checked (not just assumed safe)
- [ ] Test coverage was assessed
- [ ] Cleanup suggestions preserve existing behavior
- [ ] Cross-file impact was checked for shared code changes
- [ ] Open questions are listed, not hidden as assumptions
- [ ] Relevant review questions were asked before the review was written

## Suggested conversation starter

When the user gives only a raw diff or vague request, begin with something like:

```text
I'll lead this as a short review interview instead of jumping straight to comments. First, tell me what changed and why, what the expected behavior should be, and whether tests exist for the changed paths. Then I'll ask a few focused follow-up questions about risk areas before I write the final review.
```

## Common mistakes

- Leading with style nits when the code may have bugs
- Recommending refactors without showing the risk they reduce
- Missing behavior regressions because the diff "looks clean"
- Treating missing tests as unimportant
- Hiding uncertainty instead of writing an open question
- Not checking all callers of modified shared functions
- Approving because the code "looks good" without checking behavior
- Skipping the interview step and reviewing a diff without understanding intent
