# Workflow: Master Autonomous Factory (/omni)
1. **Bootstrap**: If `.context/00_INDEX.md` is missing, run `omni init`. Run `omni recon` to inspect workspace state.
2. **Co-Founder Discovery**: Load `.agents/skills/omni-cofounder-architect/SKILL.md`. Explain options, give a Recommended Default, and ask clarifying questions until reaching 95%+ confidence. Present the **Executive Blueprint Summary**.
✋ **STOP POINT 1**: Wait for Blueprint approval.
3. **Visual Studio Sandbox**: Load `.agents/skills/omni-ui-prototyper/SKILL.md`. Generate `.agents/studio/design-preview.html` and open `http://localhost:4173/design-preview.html` in the Browser Agent.
✋ **STOP POINT 2**: Wait for user archetype selection.
4. **Decommission Sandbox & Build Live App**:
   - Run `omni lock-ui "<Selected-Option>"` immediately to archive/delete the static HTML preview and kill port 4173.
   - Run `omni scaffold <web|ecommerce|mobile|monorepo>`.
   - Execute all tasks in `.context/01_PRODUCT_AND_ROADMAP.md` (`omni checkpoint` -> code -> `./scripts/verify.sh`).
   - Navigate the Browser Agent directly to the live dev server root URL (e.g., `http://localhost:3000/` or `:4000/`) so the user sees the real running application.
