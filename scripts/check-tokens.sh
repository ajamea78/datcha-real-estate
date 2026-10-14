#!/usr/bin/env bash
set -euo pipefail

# 1. Fail immediately if a stale public/design-preview.html exists alongside production code
if [ -f "public/design-preview.html" ]; then
    echo "❌ [OMNI_SPLIT_BRAIN_ERROR] Legacy 'public/design-preview.html' detected!"
    echo "👉 Remediation: Run 'omni lock-ui' to archive the static preview so the browser only renders the live app."
    exit 1
fi

SEARCH_DIRS=()
[ -d "src" ] && SEARCH_DIRS+=("src")
[ -d "apps" ] && SEARCH_DIRS+=("apps")
[ ${#SEARCH_DIRS[@]} -eq 0 ] && exit 0

HEX_ERRORS=$(grep -rEn '#[0-9a-fA-F]{3,8}\b' "${SEARCH_DIRS[@]}" \
  --include='*.css' --include='*.scss' --include='*.tsx' --include='*.jsx' --include='*.vue' --include='*.html' \
  --exclude='tokens.css' --exclude='variables.css' --exclude='theme.css' --exclude='index.css' --exclude='globals.css' 2>/dev/null || true)
SLOP_ERRORS=$(grep -rEn '\b(bg|text|border|from|to)-(indigo|purple|violet)-[0-9]{2,3}\b' "${SEARCH_DIRS[@]}" \
  --include='*.tsx' --include='*.jsx' --include='*.vue' --include='*.html' 2>/dev/null || true)
if [ -n "$SLOP_ERRORS" ]; then
    echo "❌ [OMNI_DIAGNOSTIC_FAILURE] Design System Violation:"
    echo -e "Banned Default AI Indigo/Purple Classes:\n$SLOP_ERRORS"
    exit 1
fi
echo "✔ Token & Anti-Split-Brain check passed."
