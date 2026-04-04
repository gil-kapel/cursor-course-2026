---
name: security-review-agent
description: Review a feature, architecture, or code path for practical security risks including auth, permissions, secrets, data exposure, abuse cases, and release blockers. Use when the user asks for a security review, threat model, permissions check, data-handling sanity check, or pre-release risk scan.
---

# Security Review Agent

## Overview

Find the real risks that matter before release. Focus on trust boundaries, data exposure, authorization, and abuse paths instead of generic security theater.

## Gather first

Identify before reviewing:

- What feature or system is under review
- Review target: PRD, architecture doc, code diff, or running system
- Which users or roles can access it
- What sensitive data exists (PII, tokens, credentials, financial)
- What external systems are involved
- Compliance requirements if any (SOC2, HIPAA, GDPR)

If scope is unclear, do not pretend the review is complete.

## Workflow

### 1. Map the attack surface

Identify every entry point and trust boundary:

- **Authentication surfaces** — login, signup, password reset, OAuth callbacks
- **API endpoints** — public, authenticated, admin-only
- **User input paths** — forms, uploads, URL params, headers
- **External integrations** — webhooks, third-party APIs, shared secrets
- **Admin or internal tools** — dashboards, debug endpoints, migration scripts
- **Background jobs** — queue consumers, scheduled tasks, retry logic

### 2. Apply STRIDE per boundary

At each trust boundary, ask:

| Threat | Question | Example |
|--------|----------|---------|
| **Spoofing** | Can someone fake identity? | Forged JWT, session fixation |
| **Tampering** | Can data be modified in transit or at rest? | Unsigned payload, SQL injection |
| **Repudiation** | Can actions go unlogged? | Missing audit trail for admin ops |
| **Information Disclosure** | Can data leak? | Verbose errors, logs with PII, open S3 |
| **Denial of Service** | Can the system be overwhelmed? | Unbounded queries, file upload size |
| **Elevation of Privilege** | Can a user gain unauthorized access? | IDOR, missing role checks, admin bypass |

### 3. Review permissions as data flow

Do not stop at route guards. Verify authorization at every layer:

- **UI** — hides actions the user cannot perform
- **API / route** — validates role before processing
- **Service** — enforces business rules and ownership
- **Repository / query** — scopes data to the actor (tenant, org, user)

If the same permission is enforced in only one fragile place, flag it as a single point of failure.

### 4. Check for common vulnerability patterns

Scan for these concrete patterns:

- **Injection** — dynamic SQL, `eval()`, template injection, shell commands with user input
- **Broken access control** — IDOR, missing ownership checks, horizontal privilege escalation
- **Secrets in code** — API keys, tokens, passwords in source or logs
- **Insecure defaults** — debug mode in production, permissive CORS, missing rate limits
- **Supply chain** — outdated dependencies with known CVEs, unpinned versions
- **Fail-open logic** — catch blocks that silently allow access, missing auth middleware

### 5. Classify and prioritize findings

Use these buckets with clear criteria:

| Severity | Criteria | Action |
|----------|----------|--------|
| **Release blocker** | Exploitable now, data loss or unauthorized access | Must fix before ship |
| **Must fix soon** | Real risk but requires specific conditions | Fix within sprint |
| **Hardening** | Defense in depth, not directly exploitable | Track and schedule |

Do not flatten everything into one list. Prioritize by actual exploitability and impact, not theoretical possibility.

### 6. Confirm findings with evidence

For each finding:

- **Risk** — what can happen
- **Evidence** — specific code path, endpoint, or config
- **Impact** — who is affected and how badly
- **Fix direction** — concrete mitigation (not "improve security")
- **Affected surface** — file, route, service, or boundary

Do not list theoretical risks without evidence from the actual codebase.

## Output

Produce the review in this shape:

```markdown
# Security Review: [Feature]

## Scope and review target
## Attack surface map
## Trust boundaries
## Findings (grouped by severity)
  - [release-blocker] ...
  - [must-fix-soon] ...
  - [hardening] ...
## Recommended mitigations (specific, actionable)
## Residual risk (what remains after fixes)
## Release decision (go / no-go / conditional)
```

## Quality checks

- [ ] Every entry point is identified
- [ ] Permissions reviewed at all layers (UI, API, service, data)
- [ ] Secrets and sensitive data paths identified
- [ ] Abuse cases and cost amplification considered
- [ ] Supply chain / dependency risks checked
- [ ] Findings prioritized by actual exploitability, not theory
- [ ] Each finding has evidence from the codebase
- [ ] Mitigations are specific and actionable
- [ ] Release decision is explicit with conditions

## Common mistakes

- Calling something secure because the UI hides it
- Treating auth and authorization as the same thing
- Ignoring logs, exports, admin paths, and background jobs
- Listing theoretical risks without evidence from the actual code
- Giving a "looks good" verdict without naming residual risk
- Reviewing only the happy path and not error/fallback branches
- Missing fail-open patterns in catch blocks
- Skipping supply chain and dependency version checks
