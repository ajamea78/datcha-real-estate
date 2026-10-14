#!/usr/bin/env bash
set -euo pipefail
LEAKS=$(grep -rEi '(sk-[a-zA-Z0-9]{20,}|ghp_[a-zA-Z0-9]{20,}|AIzaSy[a-zA-Z0-9_-]{33})' \
  --exclude-dir={node_modules,.git,.agents} \
  --exclude={.env,.env.example,*.log} . 2>/dev/null || true)
if [ -n "$LEAKS" ]; then
    echo "❌ [OMNI_DIAGNOSTIC_FAILURE] Secret/API key leak detected:"
    echo "$LEAKS"
    exit 1
fi
echo "✔ No raw secrets detected."
