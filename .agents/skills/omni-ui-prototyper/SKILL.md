---
name: omni-ui-prototyper
description: Build non-generic UI/UX systems, 3-archetype interactive HTML visual previews, and CSS token contracts without Split-Brain preview drift. Invoke during /omni, /revamp-ui, or any UI/UX design task.
---
# Omni UI Prototyper Skill (v8.1 — Anti-Split-Brain Edition)

## Rule 0: Check If Production App Is Already Running
- **If the user asks to tweak an existing production UI** (e.g., `src/app/page.tsx` already exists and they want softer buttons or new sections):
  1. Run `omni lock-ui` immediately to ensure no stale `design-preview.html` exists anywhere.
  2. Edit the real framework components in `src/` and tokens in `tokens.css` / `index.css`.
  3. Navigate the Antigravity Browser Agent directly to the live dev server URL (e.g., `http://localhost:3000/` or `:4000/`) and verify the visual change on the live route.

## Phase 1: Initial 3-Archetype Sandbox (Only Before Locking Archetype)
1. Copy `.agents/skills/omni-ui-prototyper/templates/preview-shell.html` to `.agents/studio/design-preview.html` (NEVER put it inside `public/`).
2. Inject 3 domain-accurate visual archetypes into `[SLOT_OPTION_A]`, `[SLOT_OPTION_B]`, and `[SLOT_OPTION_C]`.
3. Run `omni preview` and open `http://localhost:4173/design-preview.html` in the Antigravity Browser Agent.
✋ **STOP POINT**: Ask the user to select Option A, B, or C.

## Phase 2: Teardown Sandbox & Switch to Live App (`omni lock-ui`)
1. The moment the user picks an option, run:
   `omni lock-ui "Option-X"`
   *(This archives and deletes `.agents/studio/design-preview.html` and kills port 4173 so the user can never get stuck viewing a stale static file).*
2. Write the winning CSS variables into `.context/03_DESIGN_SYSTEM.md` and `src/app/globals.css` (or `src/tokens.css`).
3. Implement the components in `src/` and navigate the Browser Agent to the live application dev server URL.
