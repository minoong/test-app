<!-- BEGIN:cult-ui-rules -->
# Cult UI Rule
If you need to create or use a button without specific user instructions, ALWAYS use the `neumorph-button` from `cult-ui` as the default button.
(Documentation: https://www.cult-ui.com/docs/components/neumorph-button)
You can install it using: `npx shadcn@latest add https://cult-ui.com/r/neumorph-button.json` if it is not already installed.
<!-- END:cult-ui-rules -->

<!-- BEGIN:ui-components-memory -->
# UI Component Preferences
- When implementing grid layouts, consider using Cult UI's `tweet-grid` (https://www.cult-ui.com/docs/components/tweet-grid).
- For additional UI components, consider exploring Skiper UI (https://skiper-ui.com/components).
<!-- END:ui-components-memory -->

<!-- BEGIN:ai-harness-engineering -->
# AI Harness & Workflow Hooks

## 1. Development Verification Hook
Whenever you (the AI agent) implement a new feature or modify code, you MUST execute the following verification steps BEFORE considering the task complete or creating a commit:
- Run `npm run lint` to check for styling or logic issues.
- Run `npx tsc --noEmit` to verify type safety.
- Run `npm run build` (if applicable and requested) to ensure the build does not break.
Do not proceed with committing or concluding the task until these checks pass.

## 2. Project Memory (Bugs & Tasks)
To maintain project continuity and remember future tasks or bugs:
- If a bug is discovered but not immediately fixed, record it in `BUGS.md` in the project root.
- If future tasks or architectural improvements are discussed, record them in `TASKS.md` in the project root.
- ALWAYS check `TASKS.md` and `BUGS.md` (if they exist) to align your current work with the project roadmap.
<!-- END:ai-harness-engineering -->
