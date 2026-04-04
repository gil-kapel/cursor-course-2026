# Lesson 2.1 — Agent skills & expertises (ASM)

**Vendored in this repo:** copies live under this lesson’s `bundled-skills/` — top-level folders are skills scored **≥ 81** (strictly **> 80**) in `AGENT_SKILLS.md`; `bundled-skills/_to-improve/` holds **72–80** candidates with edit notes in `bundled-skills/TO_IMPROVE.md`. Refresh from the course root: `python3 scripts/bundle_module02_skills.py`.

Use this file with **ASM** (Agent Skill Manager): `asm search "…"`, `asm add skill <source>`, then `asm sync`. Run commands from the folder that contains your project’s `asm.toml`.

## Scoring (0–100)

| Factor | Max | What we measure |
|--------|-----|-----------------|
| Lesson fit | 30 | Helps you author rules, `SKILL.md`, and agent packs for Cursor. |
| Authority | 30 | Curated index, or publisher/repo you can trust to stay maintained. |
| Ecosystem signal | 20 | Registry visibility (stars / installs)—noisy but better than nothing. |
| Cursor fit | 10 | Mentions Cursor rules, or lives under `.cursor/` in the upstream repo. |
| Overlap | −10 | Duplicate of a higher pick in this list. |

**Recommended** = score **≥ 72**. Others are listed as evaluated only.

---

## Ranked candidates

| Skill (id) | Score | Notes |
|------------|-------|--------|
| `skill-creator` (openclaw, asm-index curated) | **95** | Full skill lifecycle: structure, validation, packaging; course-agnostic. |
| `github/make-skill-template` | **92** | GitHub Awesome Copilot template; great for first `SKILL.md` scaffold. |
| `anthropics/skill-development` | **90** | Official Anthropic SKILL authoring guide (triggers, progressive disclosure); patterns apply in Cursor. |
| `tech-leads-club/cursor-subagent-creator` | **86** | Tech Leads Club catalog; **verified** tree URL (the older `cursor-skill-creator` folder was removed upstream). |
| `pr-pm/creating-cursor-rules-skill` | **78** | Narrow focus on `.cursorrules` / rules files. |
| `jeremylongshore/cursor-rules-config` | **68** | Useful but less authoritative than rows above; **not recommended** as a default. |

---

## Recommended installs (copy `Source` into `asm add skill`)

| Priority | Skill | Source (for `asm add skill`) |
|----------|--------|------------------------------|
| 1 | skill-creator | `github:https://github.com/openclaw/openclaw/tree/main/skills/skill-creator` |
| 2 | make-skill-template | `github:https://github.com/github/awesome-copilot/tree/main/skills/make-skill-template` |
| 3 | skill-development | `github:https://github.com/anthropics/claude-code/tree/main/plugins/plugin-dev/skills/skill-development` |
| 4 | cursor-subagent-creator | `github:https://github.com/tech-leads-club/agent-skills/tree/main/packages/skills-catalog/skills/(creation)/cursor-subagent-creator` |

Optional (rules-only spin): `pr-pm/creating-cursor-rules-skill` — `github:https://github.com/pr-pm/prpm/tree/main/.claude/skills/creating-cursor-rules-skill` *(upstream path; course uses `.cursor/skills` via ASM sync)*

Legacy registry name **`cursor-skill-creator`** may still appear in `asm search` with a GitHub `tree/.../cursor-skill-creator` link that **404s**; prefer the row above or `npx skills add tech-leads-club/agent-skills@cursor-skill-creator` if that package still resolves on your machine.

If `asm add skill` does not accept a `skills.sh` URL, use the `npx skills add …` line from `asm search` for that skill, then re-run `asm sync` if your workspace tracks those paths.

```bash
asm add skill 'github:https://github.com/openclaw/openclaw/tree/main/skills/skill-creator'
asm add skill 'github:https://github.com/github/awesome-copilot/tree/main/skills/make-skill-template'
asm add skill 'github:https://github.com/anthropics/claude-code/tree/main/plugins/plugin-dev/skills/skill-development'
asm add skill 'github:https://github.com/tech-leads-club/agent-skills/tree/main/packages/skills-catalog/skills/(creation)/cursor-subagent-creator'
asm sync
```

---

## Suggested expertise bundle

```bash
asm create expertise cursor-skill-foundation \
  skill-creator make-skill-template skill-development cursor-subagent-creator \
  --desc "Authoring and maintaining Cursor agent skills and rules."
```

Use the **exact skill folder names** ASM created under your workspace if they differ slightly.
