# Workflow: UI & Layout Revamp (/revamp-ui)
1. Load `.agents/skills/omni-ui-prototyper/SKILL.md`.
2. Generate `.agents/studio/design-preview.html` (never inside `public/`) and open `http://localhost:4173/design-preview.html` via `omni preview` in the Browser Agent.
✋ **STOP POINT**: Wait for user archetype selection.
3. Run `omni lock-ui "<Selected-Option>"` to decommission and archive the static HTML preview.
4. Compile tokens into `.context/03_DESIGN_SYSTEM.md`, run `omni checkpoint "ui-revamp"`, update production components in `src/`, pass `./scripts/verify.sh`, and point the Browser Agent to the live dev server root URL.
