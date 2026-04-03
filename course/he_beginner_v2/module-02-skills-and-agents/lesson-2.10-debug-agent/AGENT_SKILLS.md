# Lesson 2.10 — Debug agent (errors → minimal fix)

**Vendored in this repo:** copies live under this lesson’s `bundled-skills/` — top-level folders are skills scored **≥ 81** (strictly **> 80**) in `AGENT_SKILLS.md`; `bundled-skills/_to-improve/` holds **72–80** candidates with edit notes in `bundled-skills/TO_IMPROVE.md`. Refresh from the course root: `python3 scripts/bundle_module02_skills.py`.

ASM: `asm search`, `asm add skill <source>`, `asm sync` from your project root.

## Scoring (0–100)

Lesson fit (30) · Authority (30) · Ecosystem signal (20) · Cursor fit (10) · Overlap (−10). **Recommended ≥ 72.**

---

## Ranked candidates

| Skill (id) | Score | Notes |
|------------|-------|--------|
| `shubhamsaboo/debugger` | **88** | General debugging workflow; high visibility. |
| `sickn33/error-detective` | **86** | Error-log interpretation and narrowing. |
| `latestaiagents/agent-skills@stack-trace-decoder` | **84** | Stack-trace focus; often installed via `npx skills add …`. |
| `mrgoonie/root-cause-tracing` | **82** | RCA-style tracing (ClaudeKit skills tree). |
| `parcadei/debug` | **78** | Continuous-claude style debug helper. |
| `kynoptic/debugging-runtime-errors` | **58** | Repo-specific example; **not recommended** as default. |
| `udecode/trace` | **55** | Narrow “trace” skill; **not recommended** unless you use that stack. |

---

## Recommended installs

| Priority | Skill | Source |
|----------|--------|--------|
| 1 | debugger | `github:https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/awesome_agent_skills/debugger` |
| 2 | error-detective | `github:https://github.com/sickn33/antigravity-awesome-skills/tree/main/skills/error-detective` |
| 3 | root-cause-tracing | `github:https://github.com/mrgoonie/claudekit-skills/tree/main/.claude/skills/debugging/root-cause-tracing` |

Optional (stack traces via skills.sh): `npx skills add latestaiagents/agent-skills@stack-trace-decoder`

```bash
asm add skill 'github:https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/awesome_agent_skills/debugger'
asm add skill 'github:https://github.com/sickn33/antigravity-awesome-skills/tree/main/skills/error-detective'
asm add skill 'github:https://github.com/mrgoonie/claudekit-skills/tree/main/.claude/skills/debugging/root-cause-tracing'
asm sync
```

---

## Suggested expertise bundle

```bash
asm create expertise debug-triage \
  debugger error-detective root-cause-tracing \
  --desc "Reproduce, localize, and fix failures from logs and stack traces."
```
