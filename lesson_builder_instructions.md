# Lesson Builder Instructions

Use these instructions whenever you create or improve a lesson in this course.

## Goal

Build lessons that are practical, clear, and easy to apply.
The course should help the student land softly in a new development environment, not just describe it.

Each lesson should leave the student with:

- one clear takeaway
- one concrete action
- one useful output, prompt, or artifact

When a lesson covers tools, MCPs, or integrations, it should also leave the student with:

- one clear understanding of how the tool helps during the build step
- one clear understanding of how to integrate the result into their own project

## How to build lessons

- Prefer doing over explaining.
- Start from the real student action, not the abstract concept.
- Keep the lesson focused on one main outcome.
- Use short explanations and concrete examples.
- Make the student do something visible and verifiable.
- Prefer demo-first flows over concept-first lectures.
- End the lesson with a concrete result the student can point to.
- Avoid filler, vague theory, and long abstract sections.

## Course-specific standards

- Use the official Cursor website and docs as the source of truth for product behavior, pricing, usage, model names, and UI labels.
- Verify interface labels and shortcuts against the current Cursor version before finalizing narration or recording directions.
- Teach the current Cursor reality: `Agent` is the main work surface, not a side tool.
- When showing local code changes, prefer selecting code and opening the agent with `Cmd/Ctrl+I` so the selected snippet is attached as context.
- Do not rely on `Cmd/Ctrl+K` as the default beginner editing workflow.
- When a lesson mentions models, explain both capability differences and usage or pricing implications in plain language.
- When a lesson mentions chat modes, explain what each mode is for and the single most important thing the student should look for while using it.
- If a lesson points to the next lesson, bridge forward naturally. Do not "close the module" early unless it is actually the final lesson.

## Cursor lesson expectations

For lessons about Cursor itself, the student should finish knowing both where a feature lives and when to use it.

Good Cursor lessons usually show:

- where to open the relevant surface in the UI
- what job that surface is for
- one realistic example of using it
- one mistake, warning, or decision rule that prevents misuse

Examples from Module 1 that now define the bar:

- pricing and models lessons should show where pricing and usage are inspected, not just describe plan names
- UI lessons should show `Agent`, the mode picker, the model picker, and `Cursor Settings` directly on screen
- mode lessons should include the practical warning for each mode, not just its definition
- settings lessons should include strong reusable prompts for setup review and debug readiness
- context lessons should teach habits that reduce noise, such as fresh chats and `@` references
- terminal lessons should frame the terminal as a place where the agent may propose commands that the student reads before approving

## MCP and integration lessons

If the lesson is about MCPs, external tools, or build accelerators, teach both layers:

- the MCPs that help the student during development work
- the steps required to integrate the result into the student's real project

For example, if the lesson uses a design-to-frontend MCP such as Stitch or Figma:

- show what problem it solves in the dev workflow
- show when to use it in the build process
- show what input the student gives it
- show what output the student gets back
- show how the student moves that output into their app
- show how the student verifies the integration worked

Do not stop at "this tool is useful."  
The lesson must show the bridge from tool usage to project integration.

Good MCP lessons usually include:

- one task where the student uses the MCP to produce something concrete
- one task where the student integrates that result into the project
- one visible check that proves the integration works

## Student tasks

Tasks should be:

- short
- actionable
- easy to check
- written in simple student language
- tied to one visible outcome

Good tasks usually ask the student to open, run, create, compare, edit, attach, or summarize something.

For MCP or tooling lessons, tasks should usually cover both:

- using the MCP in a realistic dev step
- integrating the output, config, or workflow into the student's project

## Prompts

When a lesson includes prompts, make them:

- short and copy-paste ready
- clear about the goal
- clear about the context or input
- clear about the desired output
- explicit about constraints when needed
- stronger than what a beginner would naturally type on the first try

Prompts should sound like practical working prompts, not generic AI-chat prompts.
If the lesson is about setup, planning, debugging, or code changes, the prompt should make the working boundary explicit.

Preferred shape:

`You are [role]. Goal: [goal]. Context: [input]. Output: [format]. Constraints: [limits].`

Useful prompt patterns for this course:

- setup review prompts that ask Cursor to inspect the current environment before changing anything
- planning prompts that ask for a plan before edits
- debugging prompts that start from the visible symptom or terminal error
- local edit prompts that rely on selected code context instead of re-pasting the snippet

## Files needed per lesson

Each lesson should include these core files:

- `README.md` for the lesson overview, goals, and flow
- `narration.md` for the spoken teaching script
- `on-screen.md` for the visual beats and screen actions

These three files should agree on:

- the lesson promise
- the main demo
- the terminology
- the final student outcome
- the bridge to the next lesson

When relevant, also update the shared course files that surface the lesson:

- `src/data/courseData.ts`
- `src/data/studentSetup.ts`
- module or course `README.md` files

If the lesson introduces assets, examples, or supporting materials, keep them directly inside the lesson folder and only add them when they clearly improve execution.

## Cross-OS and beginner safety

- Add Mac and Windows shortcuts when they materially affect the task; include Linux when the flow is meaningfully different or already supported in the lesson.
- Call out shell or terminal differences only when the student could get blocked without them.
- Reduce beginner anxiety with explicit safety rails, fallback paths, and "what to do if this looks different in your version" notes.
- If Git or terminal commands appear, teach the safety habit alongside the command, not after it.
- Avoid assuming the student already knows where settings, terminal, or core UI entry points live.

## Quality bar

Before finishing a lesson, verify:

- the lesson has one clear job
- the student checklist makes sense line by line
- the prompts are sharper than a normal chat request
- the lesson ends with a usable result
- the lesson naturally leads to the next step in the course
- the required lesson files exist and stay consistent with each other
- if the lesson uses MCPs or external tools, it teaches both tool usage and project integration
- if the lesson depends on current Cursor behavior, the labels and claims were checked against the official source
- if the lesson teaches a UI flow, the student can tell both where to click and why they are doing it
- if the lesson teaches a mode or tool choice, the student knows the main warning or decision rule
