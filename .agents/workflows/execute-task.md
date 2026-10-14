# Workflow: Task Execution (/execute-task)
1. Run `omni checkpoint "<task-description>"`.
2. Ensure no stale static preview exists (`rm -f public/design-preview.html`).
3. Load needed context via `omni context <id>`, implement modular code in `src/`, and pass `./scripts/verify.sh`.
4. Navigate the Browser Agent to the live dev server URL to verify visual changes on the actual app.
