# Lesson Builder Instructions

Use these instructions whenever you create or improve a lesson in this course.

## Goal

Build lessons that are practical, clear, and easy to apply.  
Each lesson should leave the student with:

- one clear takeaway
- one concrete action
- one useful output, prompt, or artifact

When a lesson covers tools, MCPs, or integrations, it should also leave the student with:

- one clear understanding of how the tool helps during the build step
- one clear understanding of how to integrate the result into their own project

## How to build lessons

- Prefer doing over explaining.
- Keep the lesson focused on one main outcome.
- Use short explanations and concrete examples.
- Make the student do something visible and verifiable.
- Avoid filler, vague theory, and long abstract sections.

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

Preferred shape:

`You are [role]. Goal: [goal]. Context: [input]. Output: [format]. Constraints: [limits].`

## Files needed per lesson

Each lesson should include these core files:

- `README.md` for the lesson overview, goals, and flow
- `narration.md` for the spoken teaching script
- `on-screen.md` for the visual beats and screen actions

When relevant, also update the shared course files that surface the lesson:

- `src/data/courseData.ts`
- `src/data/studentSetup.ts`
- module or course `README.md` files

If the lesson introduces assets, examples, or supporting materials, keep them directly inside the lesson folder and only add them when they clearly improve execution.

## Quality bar

Before finishing a lesson, verify:

- the lesson has one clear job
- the student checklist makes sense line by line
- the prompts are sharper than a normal chat request
- the lesson ends with a usable result
- the lesson naturally leads to the next step in the course
- the required lesson files exist and stay consistent with each other
- if the lesson uses MCPs or external tools, it teaches both tool usage and project integration
