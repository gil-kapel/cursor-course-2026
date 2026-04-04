# Lesson 2.9 — QA agent (tests & edge cases)

**Vendored in this repo:** copies live under this lesson’s `bundled-skills/` — top-level folders are skills scored **≥ 81** (strictly **> 80**) in `AGENT_SKILLS.md`; `bundled-skills/_to-improve/` holds **72–80** candidates with edit notes in `bundled-skills/TO_IMPROVE.md`. Refresh from the course root: `python3 scripts/bundle_module02_skills.py`.

ASM: `asm search`, `asm add skill <source>`, `asm sync` from your project root.

## Scoring (0–100)

Lesson fit (30) · Authority (30) · Ecosystem signal (20) · Cursor fit (10) · Overlap (−10). **Recommended ≥ 72.**

---

## Ranked candidates

| Skill (id) | Score | Notes |
|------------|-------|--------|
| `davila7/qa-test-planner` | **92** | Test planning, cases, and edge thinking from Davila7 open-source agent template pack. |
| `sickn33/unit-testing-test-generate` | **88** | Strong for generating unit tests once behavior is known. |
| `cexll/test-cases` | **80** | Structured test-case authoring (from earlier course search). |
| `jamesrochabrun/qa-test-planner` | **68** | Duplicate role name; prefer davila7 unless you prefer this repo. |
| `jackyst0/unit-test-generator` | **60** | Example-tier; **not recommended** over sickn33. |
| `stxkxs/hsm-fuzz-testing` | **40** | Domain-specific fuzzing; **not recommended** for general QA lesson. |

---

## Recommended installs

| Priority | Skill | Source |
|----------|--------|--------|
| 1 | qa-test-planner | `github:https://github.com/davila7/claude-code-templates/tree/main/cli-tool/components/skills/ai-research/qa-test-planner` |
| 2 | unit-testing-test-generate | `github:https://github.com/sickn33/antigravity-awesome-skills/tree/main/skills/unit-testing-test-generate` |
| 3 | test-cases | `github:https://github.com/cexll/myclaude/tree/master/skills/test-cases` |

After you pick a stack (Vitest, Jest, Playwright, pytest), run **`asm search "<your stack> testing"`** and add one stack-specific skill if scores beat 72.

```bash
asm add skill 'github:https://github.com/davila7/claude-code-templates/tree/main/cli-tool/components/skills/ai-research/qa-test-planner'
asm add skill 'github:https://github.com/sickn33/antigravity-awesome-skills/tree/main/skills/unit-testing-test-generate'
asm add skill 'github:https://github.com/cexll/myclaude/tree/master/skills/test-cases'
asm sync
```

---

## Suggested expertise bundle

```bash
asm create expertise qa-testing \
  qa-test-planner unit-testing-test-generate test-cases \
  --desc "Plan tests, enumerate edge cases, and generate unit/integration tests."
```
