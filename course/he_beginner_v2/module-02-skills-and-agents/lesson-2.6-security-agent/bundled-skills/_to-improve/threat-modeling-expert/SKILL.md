---
name: threat-modeling-expert
description: "Expert in threat modeling methodologies, security architecture review, and risk assessment. Masters STRIDE, PASTA, attack trees, and security requirement extraction. Use PROACTIVELY for security architecture reviews, threat identification, or building secure-by-design systems."
risk: unknown
source: community
date_added: "2026-02-27"
---

# Threat Modeling Expert

Expert in threat modeling methodologies, security architecture review, and risk assessment. Masters STRIDE, PASTA, attack trees, and security requirement extraction. Use PROACTIVELY for security architecture reviews, threat identification, or building secure-by-design systems.

## STRIDE quick sheet (beginner PM — one question each)

Use this before diving into attack trees. For each **trust boundary** or **data store**, ask:

| Letter | Threat class | Question to ask |
|--------|----------------|-----------------|
| **S** | Spoofing | Who could pretend to be another user or service? |
| **T** | Tampering | What data or requests could be altered in transit or at rest? |
| **R** | Repudiation | Could someone deny they performed an action? Are we logging enough? |
| **I** | Information disclosure | What secrets, PII, or tokens could leak (logs, APIs, UI)? |
| **D** | Denial of service | What could be abused to exhaust CPU, DB, or wallet? |
| **E** | Elevation of privilege | How could a normal user gain admin or cross-tenant access? |

## Deeper references in this lesson (bundled)

For **checklists and doc-style** depth, prefer the course’s top-scored skills in **`bundled-skills/security-threat-model-openai/`** and **`bundled-skills/security-threat-model-davila7/`** (and **`vulnerability-scanner/`** for code-oriented review). Use **this** file as a fast STRIDE lens; use those for full write-ups.

## Capabilities

- STRIDE threat analysis
- Attack tree construction
- Data flow diagram analysis
- Security requirement extraction
- Risk prioritization and scoring
- Mitigation strategy design
- Security control mapping

## Use this skill when

- Designing new systems or features
- Reviewing architecture for security gaps
- Preparing for security audits
- Identifying attack vectors
- Prioritizing security investments
- Creating security documentation
- Training teams on security thinking

## Do not use this skill when

- You lack scope or authorization for security review
- You need legal or compliance certification
- You only need automated scanning without human review

## Instructions

1. Define system scope and trust boundaries
2. Create data flow diagrams
3. Identify assets and entry points
4. Apply STRIDE to each component
5. Build attack trees for critical paths
6. Score and prioritize threats
7. Design mitigations
8. Document residual risks

## Safety

- Avoid storing sensitive details in threat models without access controls.
- Keep threat models updated after architecture changes.

## Best Practices

- Involve developers in threat modeling sessions
- Focus on data flows, not just components
- Consider insider threats
- Update threat models with architecture changes
- Link threats to security requirements
- Track mitigations to implementation
- Review regularly, not just at design time
