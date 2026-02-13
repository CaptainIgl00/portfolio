#!/usr/bin/env bash
set -euo pipefail

# Script pour uploader et recharger la config Caddy sur le VPS
REMOTE="web@151.80.60.62"
CADDYFILE="Caddyfile"

echo "📤 Upload du nouveau Caddyfile..."
scp "$CADDYFILE" "$REMOTE:/tmp/Caddyfile.new"

echo "🔄 Reload de la config Caddy..."
ssh -t "$REMOTE" "sudo cp /tmp/Caddyfile.new /etc/caddy/Caddyfile && sudo systemctl reload caddy && rm /tmp/Caddyfile.new"

echo "✅ Config Caddy rechargée avec succès"
