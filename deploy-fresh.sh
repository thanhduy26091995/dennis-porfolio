#!/bin/bash
set -euo pipefail

# ─── Config ───────────────────────────────────────────────────────────────────
DOMAIN="dennisbui.dev"
EMAIL="buivuthanhduy@gmail.com"
APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# ─── Colors ───────────────────────────────────────────────────────────────────
GREEN='\033[0;32m'; YELLOW='\033[1;33m'; RED='\033[0;31m'; NC='\033[0m'
log()   { echo -e "${GREEN}[DEPLOY]${NC} $1"; }
warn()  { echo -e "${YELLOW}[ WARN ]${NC} $1"; }
error() { echo -e "${RED}[ERROR ]${NC} $1"; exit 1; }

# ─── Pre-flight checks ────────────────────────────────────────────────────────
log "Starting fresh deployment for ${DOMAIN}..."
cd "$APP_DIR"

command -v docker        >/dev/null 2>&1 || error "Docker not installed. Run: curl -fsSL https://get.docker.com | sh"
docker compose version   >/dev/null 2>&1 || error "Docker Compose v2 not found."

# Warn if port 80 already bound (certbot needs it)
if ss -tlnp 2>/dev/null | grep -q ':80 '; then
    warn "Port 80 is in use. Certbot needs it briefly — stop the conflicting service first."
    warn "Run: ss -tlnp | grep ':80'"
    read -rp "Continue anyway? [y/N] " confirm
    [[ "$confirm" =~ ^[Yy]$ ]] || exit 0
fi

# ─── Install certbot ──────────────────────────────────────────────────────────
if ! command -v certbot >/dev/null 2>&1; then
    log "Installing certbot..."
    apt-get update -qq
    apt-get install -y -qq certbot
fi

# ─── Build Docker image ───────────────────────────────────────────────────────
log "Building Docker image (this may take a few minutes)..."
docker build -t dennis-portfolio .

# ─── Start app only (no nginx yet — port 80 must be free for certbot) ─────────
log "Starting app container..."
docker compose up -d app

# ─── Obtain SSL certificate ───────────────────────────────────────────────────
log "Obtaining SSL certificate for ${DOMAIN} and www.${DOMAIN}..."
certbot certonly --standalone \
    -d "${DOMAIN}" \
    -d "www.${DOMAIN}" \
    --email "${EMAIL}" \
    --agree-tos \
    --non-interactive

# ─── Set up auto-renewal cron ────────────────────────────────────────────────
if ! crontab -l 2>/dev/null | grep -q "certbot renew"; then
    log "Setting up SSL auto-renewal cron job..."
    (crontab -l 2>/dev/null; echo "0 3 * * * certbot renew --quiet && docker compose -f ${APP_DIR}/docker-compose.yml restart nginx") | crontab -
fi

# ─── Start full stack ─────────────────────────────────────────────────────────
log "Starting nginx + full stack..."
docker compose up -d

# ─── Verify ───────────────────────────────────────────────────────────────────
sleep 5
log "Container status:"
docker compose ps

if curl -sf --max-time 10 "https://${DOMAIN}" -o /dev/null; then
    log "✅ Deployment successful! Site is live at https://${DOMAIN}"
else
    warn "HTTPS not responding yet. DNS may still be propagating."
    warn "Check: docker compose logs nginx"
    warn "Check DNS: dig ${DOMAIN}"
fi

log "Done. To update in the future, run: ./deploy-update.sh"
