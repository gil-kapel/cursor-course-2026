# Lesson 2.8 — Code review agent (refactor & cleanup)

**Vendored in this repo:** copies live under this lesson’s `bundled-skills/` — top-level folders are skills scored **≥ 81** (strictly **> 80**) in `AGENT_SKILLS.md`; `bundled-skills/_to-improve/` holds **72–80** candidates with edit notes in `bundled-skills/TO_IMPROVE.md`. Refresh from the course root: `python3 scripts/bundle_module02_skills.py`.

ASM: `asm search`, `asm add skill <source>`, `asm sync` from your project root.

## Scoring (0–100)

Lesson fit (30) · Authority (30) · Ecosystem signal (20) · Cursor fit (10) · Overlap (−10). **Recommended ≥ 72.**

---

## Ranked candidates

| Skill (id) | Score | Notes |
|------------|-------|--------|
| `weaverse/code-review` | **88** | Weaverse `.claude` skill; **verified** URL—best general default in this list. |
| `jackyst0/code-review` | **81** | `awesome-agent-skills` example; **verified** URL; good second checklist. |
| `thebushidocollective/han@code-review` | **80** | skills.sh / `npx` path; good if you already use Han marketplace. |
| `basedhardware/agent-review` | **—** | Was `.cursor/skills`-hosted; upstream path **404** at time of writing—**do not use** until restored. |
| `gannonh/kata-review-pull-requests` | **76** | PR-centric review flows. |
| `ruvnet/agent-code-review-swarm` | **64** | “Swarm” orchestration bias; **not recommended** for lesson scope. |
| `open-circle/repo-source-code-review` | **62** | Repo-specific example context; **not recommended** as default. |

---

## Recommended installs

| Priority | Skill | Source |
|----------|--------|--------|
| 1 | code-review | `github:https://github.com/Weaverse/.claude/tree/main/skills/code-review` |
| 2 | code-review (examples) | `github:https://github.com/JackyST0/awesome-agent-skills/tree/main/examples/code-review` (use `asm add skill … --name code-review-jackyst0` if the folder name collides) |

Optional (PR focus): `github:https://github.com/gannonh/kata-orchestrator/tree/main/skills/kata-review-pull-requests`

Optional (skills.sh): `npx skills add thebushidocollective/han@code-review`

```bash
asm add skill 'github:https://github.com/Weaverse/.claude/tree/main/skills/code-review'
asm add skill 'github:https://github.com/JackyST0/awesome-agent-skills/tree/main/examples/code-review' --name code-review-jackyst0
asm sync
```

---

## Suggested expertise bundle

```bash
asm create expertise code-review \
  code-review code-review-jackyst0 \
  --desc "PR-style review: correctness, style, security smell, and refactor suggestions."
```
