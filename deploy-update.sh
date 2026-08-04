#!/bin/bash
set -euo pipefail

# ─── Config ───────────────────────────────────────────────────────────────────
APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DOMAIN="dennisbui.dev"

# ─── Colors ───────────────────────────────────────────────────────────────────
GREEN='\033[0;32m'; YELLOW='\033[1;33m'; RED='\033[0;31m'; NC='\033[0m'
log()   { echo -e "${GREEN}[UPDATE]${NC} $1"; }
warn()  { echo -e "${YELLOW}[ WARN ]${NC} $1"; }
error() { echo -e "${RED}[ERROR ]${NC} $1"; exit 1; }

cd "$APP_DIR"

# ─── Pull latest code ─────────────────────────────────────────────────────────
log "Pulling latest code from git..."
git pull origin main

# ─── Rebuild app image ────────────────────────────────────────────────────────
log "Rebuilding app Docker image..."
docker compose build app

# ─── Rolling restart (app only, nginx stays up) ───────────────────────────────
log "Restarting app container (nginx stays running)..."
docker compose up -d --no-deps app

# ─── Health check ─────────────────────────────────────────────────────────────
log "Waiting for app to be ready..."
for i in {1..10}; do
    if curl -sf --max-time 5 "https://${DOMAIN}" -o /dev/null; then
        log "✅ Update successful! https://${DOMAIN} is responding."
        break
    fi
    if [[ $i -eq 10 ]]; then
        warn "Site not responding after 30s. Check logs:"
        warn "  docker compose logs app --tail=50"
    fi
    sleep 3
done

# ─── Show status ──────────────────────────────────────────────────────────────
log "Container status:"
docker compose ps
