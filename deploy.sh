#!/usr/bin/env bash
set -euo pipefail

REMOTE="web@151.80.60.62"              # <- user@host
REMOTE_DIR="/srv/www/portfolio"
REL="$(date +%Y%m%d-%H%M%S)"   # id de release

echo "🚀 Déploiement du portfolio - Release: $REL"

# Build local
echo "📦 Installation des dépendances..."
npm ci

echo "🔨 Build du projet..."
npm run build

# Déploiement sur le VPS
echo "📤 Upload vers le VPS..."
ssh "$REMOTE" "mkdir -p $REMOTE_DIR/releases"
rsync -az --delete .output/public/ "$REMOTE:$REMOTE_DIR/releases/$REL/"

echo "🔄 Activation de la nouvelle release..."
ssh "$REMOTE" "ln -sfn $REMOTE_DIR/releases/$REL $REMOTE_DIR/current && \
  find $REMOTE_DIR/releases -mindepth 1 -maxdepth 1 -type d | sort | head -n -3 | xargs -r rm -rf"

echo "🔍 Vérification du déploiement..."
curl -sI https://champagnedevops.fr | head -n 1

echo "✅ Déployé: $REL"
echo "🔄 Rollback: ssh $REMOTE \"ln -sfn $REMOTE_DIR/releases/<ancienne> $REMOTE_DIR/current\""
