#!/bin/bash
set -euo pipefail

# ─── Config ───────────────────────────────────────────────────────────────────
DOMAIN="dennisbui.dev"
WWW_DOMAIN="www.dennisbui.dev"
EMAIL="buivuthanhduy@gmail.com"
APP_PORT="3000"                       # host port the app binds to (127.0.0.1:APP_PORT)
APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# ─── Colors ───────────────────────────────────────────────────────────────────
GREEN='\033[0;32m'; YELLOW='\033[1;33m'; RED='\033[0;31m'; NC='\033[0m'
log()   { echo -e "${GREEN}[DEPLOY]${NC} $1"; }
warn()  { echo -e "${YELLOW}[ WARN ]${NC} $1"; }
error() { echo -e "${RED}[ERROR ]${NC} $1"; exit 1; }

# ─── Pre-flight ───────────────────────────────────────────────────────────────
# This VPS already runs a system nginx as a shared reverse proxy, so we DON'T bind
# port 80/443 in Docker. The app runs on 127.0.0.1:${APP_PORT} and system nginx
# proxies dennisbui.dev to it. SSL is issued with the certbot nginx plugin (no
# --standalone, so other sites on port 80 are never interrupted).
log "Starting deployment for ${DOMAIN}..."
cd "$APP_DIR"

[[ $EUID -eq 0 ]]                          || error "Run with sudo (needs nginx + certbot)."
command -v docker      >/dev/null 2>&1     || error "Docker not installed. Run: curl -fsSL https://get.docker.com | sh"
docker compose version >/dev/null 2>&1     || error "Docker Compose v2 not found."
command -v nginx       >/dev/null 2>&1     || error "System nginx not found — this script expects an existing host nginx."

# ─── Build & start the app (localhost only) ───────────────────────────────────
log "Building app image (may take a few minutes)..."
docker compose build app
log "Starting app container on 127.0.0.1:${APP_PORT}..."
docker compose up -d app

log "Waiting for the app to respond..."
app_up=0
for _ in {1..20}; do
    if curl -sf --max-time 3 "http://127.0.0.1:${APP_PORT}" -o /dev/null; then app_up=1; break; fi
    sleep 2
done
[[ $app_up -eq 1 ]] || error "App not responding on 127.0.0.1:${APP_PORT}. Check: docker compose logs app --tail=50"
log "App is up."

# ─── Install the nginx site config (auto-detect layout) ───────────────────────
if [[ -d /etc/nginx/sites-enabled ]]; then
    NGINX_CONF="/etc/nginx/sites-available/${DOMAIN}"
    NGINX_LINK="/etc/nginx/sites-enabled/${DOMAIN}"
else
    NGINX_CONF="/etc/nginx/conf.d/${DOMAIN}.conf"
    NGINX_LINK=""
fi

log "Writing nginx config to ${NGINX_CONF}..."
cat > "$NGINX_CONF" <<EOF
server {
    listen 80;
    listen [::]:80;
    server_name ${DOMAIN} ${WWW_DOMAIN};

    location / {
        proxy_pass http://127.0.0.1:${APP_PORT};
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF
[[ -n "$NGINX_LINK" ]] && ln -sf "$NGINX_CONF" "$NGINX_LINK"

log "Testing nginx config..."
nginx -t
systemctl reload nginx

# ─── SSL via the certbot nginx plugin ─────────────────────────────────────────
if ! command -v certbot >/dev/null 2>&1; then
    log "Installing certbot + nginx plugin..."
    apt-get update -qq
    apt-get install -y -qq certbot python3-certbot-nginx
fi

log "Obtaining SSL certificate for ${DOMAIN} and ${WWW_DOMAIN}..."
certbot --nginx \
    -d "${DOMAIN}" \
    -d "${WWW_DOMAIN}" \
    --email "${EMAIL}" \
    --agree-tos \
    --non-interactive \
    --redirect \
    --keep-until-expiring
# certbot installs its own systemd renewal timer and reloads nginx on renew.

# ─── Verify ───────────────────────────────────────────────────────────────────
sleep 3
log "Container status:"
docker compose ps
if curl -sf --max-time 10 "https://${DOMAIN}" -o /dev/null; then
    log "✅ Deployment successful! Site is live at https://${DOMAIN}"
else
    warn "HTTPS not responding yet. DNS may still be propagating."
    warn "Check: docker compose logs app --tail=50 | sudo journalctl -u nginx -n 50 | dig ${DOMAIN}"
fi

log "Done. To update in the future, run: ./deploy-update.sh"
