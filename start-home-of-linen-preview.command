#!/bin/zsh
cd "/Users/tarek/Documents/Codex/2026-06-22/wha/outputs/home-of-linen-shoppable-dashboard" || exit 1
echo "Home of Linen preview is starting..."
echo "Open: http://localhost:4173"
python3 -m http.server 4173
