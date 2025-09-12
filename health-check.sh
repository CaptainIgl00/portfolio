#!/usr/bin/env bash
# Script de vérification de l'état du déploiement

set -euo pipefail

HOST="champagnedevops.fr"
VPS_HOST="151.80.60.62"
VPS_USER="web"

echo "🔍 Health Check - Portfolio $HOST"
echo "================================="

# Test 1: DNS Resolution
echo "1. 🌐 Test DNS..."
DNS_IP=$(dig +short $HOST | head -n1)
if [ "$DNS_IP" = "$VPS_HOST" ]; then
    echo "   ✅ DNS OK: $HOST -> $DNS_IP"
else
    echo "   ❌ DNS KO: $HOST -> $DNS_IP (attendu: $VPS_HOST)"
    exit 1
fi

# Test 2: HTTP Status
echo "2. 🌍 Test HTTP Status..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://$HOST)
if [ "$HTTP_STATUS" = "200" ]; then
    echo "   ✅ HTTP OK: $HTTP_STATUS"
else
    echo "   ❌ HTTP KO: $HTTP_STATUS"
    exit 1
fi

# Test 3: HTTPS Certificate
echo "3. 🔒 Test Certificat SSL..."
SSL_EXPIRY=$(openssl s_client -connect $HOST:443 -servername $HOST 2>/dev/null | openssl x509 -noout -dates | grep notAfter | cut -d= -f2)
echo "   ✅ SSL OK - Expire: $SSL_EXPIRY"

# Test 4: Response Time
echo "4. ⚡ Test Performance..."
RESPONSE_TIME=$(curl -s -o /dev/null -w "%{time_total}" https://$HOST)
echo "   ✅ Temps de réponse: ${RESPONSE_TIME}s"

# Test 5: Security Headers
echo "5. 🛡️  Test Headers de Sécurité..."
HEADERS=$(curl -s -I https://$HOST)

check_header() {
    local header=$1
    if echo "$HEADERS" | grep -qi "$header"; then
        echo "   ✅ $header présent"
    else
        echo "   ⚠️  $header manquant"
    fi
}

check_header "X-Content-Type-Options"
check_header "X-Frame-Options"
check_header "Referrer-Policy"

# Test 6: SPA Routing
echo "6. 🔀 Test Routing SPA..."
SPA_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://$HOST/about)
if [ "$SPA_STATUS" = "200" ]; then
    echo "   ✅ SPA Routing OK"
else
    echo "   ❌ SPA Routing KO: $SPA_STATUS"
fi

# Test 7: Assets Cache
echo "7. 💾 Test Cache Assets..."
CACHE_HEADER=$(curl -s -I https://$HOST/assets/ 2>/dev/null | grep -i cache-control || echo "")
if echo "$CACHE_HEADER" | grep -qi "max-age"; then
    echo "   ✅ Cache Assets configuré"
else
    echo "   ⚠️  Cache Assets non détecté"
fi

# Test 8: VPS Status (si on a accès SSH)
echo "8. 🖥️  Test Status VPS..."
if ssh -o ConnectTimeout=5 $VPS_USER@$VPS_HOST "echo 'SSH OK'" 2>/dev/null; then
    echo "   ✅ SSH accessible"
    
    # Caddy status
    CADDY_STATUS=$(ssh $VPS_USER@$VPS_HOST "sudo systemctl is-active caddy" 2>/dev/null || echo "unknown")
    echo "   📋 Caddy: $CADDY_STATUS"
    
    # Disk usage
    DISK_USAGE=$(ssh $VPS_USER@$VPS_HOST "df -h /srv/www/portfolio | tail -1 | awk '{print \$5}'" 2>/dev/null || echo "unknown")
    echo "   💿 Espace disque: $DISK_USAGE"
    
    # Last deployment
    LAST_DEPLOY=$(ssh $VPS_USER@$VPS_HOST "ls -lt /srv/www/portfolio/releases/ | head -2 | tail -1 | awk '{print \$9}'" 2>/dev/null || echo "unknown")
    echo "   🚀 Dernière release: $LAST_DEPLOY"
else
    echo "   ⚠️  SSH non accessible (normal si pas configuré)"
fi

echo ""
echo "✅ Health Check terminé !"
echo "🌐 Site: https://$HOST"
echo "📊 PageSpeed: https://pagespeed.web.dev/report?url=https://$HOST"
echo "🔒 SSL Test: https://www.ssllabs.com/ssltest/analyze.html?d=$HOST"
