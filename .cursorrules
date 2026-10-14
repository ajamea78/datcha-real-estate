# Omni v8.1 Core Runtime Rules (Adaptive Co-Founder & Anti-Split-Brain Mode)
1. **Zero-Touch Bootstrap**: If `.context/00_INDEX.md` is missing, run `omni init` automatically. If existing code is present, run `omni recon` first.
2. **Adaptive Co-Founder Consultation**: Load `.agents/skills/omni-cofounder-architect/SKILL.md` when initiating or planning. Proactively explain options, give a Recommended Default, and ask clarifying questions until reaching 95%+ confidence.
3. **Anti-Split-Brain UI Law (CRITICAL)**:
   - NEVER create or leave `public/design-preview.html` inside `public/`.
   - Temporary 3-option HTML previews ONLY live at `.agents/studio/design-preview.html` during Phase 1 of `/revamp-ui`.
   - The moment an archetype is chosen (or if production UI routes like `src/app/page.tsx` already exist), you MUST run `omni lock-ui "<Archetype>"` to archive and delete the static preview.
   - NEVER maintain both a static HTML file and production framework components simultaneously.
   - After any UI code change in `src/` or `apps/`, explicitly navigate the Antigravity Browser Agent to the live dev server route (e.g., `http://localhost:3000/` or `:4000/`) and verify the active URL matches the running app before reporting completion.
4. **Zero-Fault Verification**: Run `omni checkpoint "<task>"` before edits and `./scripts/verify.sh` after edits.
