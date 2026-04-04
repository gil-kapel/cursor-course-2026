/**
 * Agent Skill Manager (gil-kapel/asm) — official install + agent bootstrap prompt.
 * @see https://github.com/gil-kapel/asm
 */

export const ASM_GITHUB_REPO_URL = 'https://github.com/gil-kapel/asm';

/** One-line install from upstream README (uv-based, no sudo). */
export const ASM_INSTALL_SHELL = 'curl -LsSf https://raw.githubusercontent.com/gil-kapel/asm/main/install.sh | sh';

/**
 * Verbatim "Copy Prompt For Your Agent" block from gil-kapel/asm README
 * (trimmed only for trailing whitespace).
 */
export const ASM_AGENT_SETUP_PROMPT = `Set up ASM in this project and leave it in a working state.

ASM (Agent Skill Manager) is a project-local skill system. It installs skills into \`.asm/\`, builds \`.asm/main_asm.md\`, groups skills into expertises, and syncs the router into the active agent config.

Do this in order:

1. Check whether \`asm\` is already installed. If not, install it with:
   \`curl -LsSf https://raw.githubusercontent.com/gil-kapel/asm/main/install.sh | sh\`

2. Check whether this repo already has ASM initialized by looking for \`asm.toml\`.
   - If ASM is not initialized, run \`asm init\`.
   - If ASM is already initialized, do not recreate it.

3. Inspect the current project briefly and choose the most relevant skill search queries for this repo.
   - Prefer curated, high-signal skills.
   - Do not install a large pile of generic skills.

4. Search and install only the most relevant skills.
   - Use \`asm search "<query>"\`.
   - Use \`asm add skill <source>\` for the best matches.

5. Configure expertise routing for the current project task or stack.
   - Run \`asm expertise auto "<task description>"\` with a concrete description of what this project needs.

6. Sync ASM into the active agent config.
   - Run \`asm sync\`.

7. If \`ASM_CLOUD_API_URL\` is configured and there is at least one local skill worth checking, run one cloud analysis:
   - \`asm skill analyze <skill-name> --cloud\`

8. At the end, report:
   - whether ASM was installed or already present
   - whether the workspace was initialized or already initialized
   - which skills were installed
   - which expertise was selected or created
   - which agent config(s) were synced
   - whether cloud analysis was run, and where the scorecard was saved

Success criteria:
- \`asm.toml\` exists
- \`.asm/main_asm.md\` exists
- at least one relevant skill is installed
- at least one expertise is active or created
- agent sync completed successfully`;
