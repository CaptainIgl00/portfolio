#!/usr/bin/env bash
# Script de configuration du VPS - À exécuter étape par étape

echo "=== Configuration VPS pour Portfolio Vue.js ==="
echo "⚠️  Ce script doit être exécuté étape par étape, pas en une fois !"
echo ""

echo "=== ÉTAPE 1: Connexion initiale en root ==="
echo "ssh root@151.80.60.62"
echo ""

echo "=== ÉTAPE 2: Création du user web ==="
cat << 'EOF'
adduser web
usermod -aG sudo web
EOF
echo ""

echo "=== ÉTAPE 3: Configuration SSH pour le user web ==="
cat << 'EOF'
mkdir -p /home/web/.ssh && chmod 700 /home/web/.ssh
# IMPORTANT: Colle ta clé publique SSH dans le fichier suivant :
nano /home/web/.ssh/authorized_keys
chown -R web:web /home/web/.ssh
chmod 600 /home/web/.ssh/authorized_keys
EOF
echo ""

echo "=== ÉTAPE 4: Sécurisation SSH ==="
cat << 'EOF'
sed -i 's/^#\?PermitRootLogin.*/PermitRootLogin no/' /etc/ssh/sshd_config
sed -i 's/^#\?PasswordAuthentication.*/PasswordAuthentication no/' /etc/ssh/sshd_config
systemctl reload ssh
EOF
echo ""

echo "=== ÉTAPE 5: Mises à jour et outils de base ==="
cat << 'EOF'
apt update && apt -y upgrade
apt -y install ufw fail2ban unattended-upgrades curl gnupg
EOF
echo ""

echo "=== ÉTAPE 6: Configuration du firewall ==="
cat << 'EOF'
ufw default deny incoming
ufw default allow outgoing
ufw allow OpenSSH
ufw allow http
ufw allow https
ufw --force enable
EOF
echo ""

echo "=== ÉTAPE 7: Mises à jour automatiques ==="
cat << 'EOF'
echo 'APT::Periodic::Update-Package-Lists "1";' > /etc/apt/apt.conf.d/20auto-upgrades
echo 'APT::Periodic::Unattended-Upgrade "1";' >> /etc/apt/apt.conf.d/20auto-upgrades
echo 'Unattended-Upgrade::Automatic-Reboot "false";' >> /etc/apt/apt.conf.d/50unattended-upgrades
dpkg-reconfigure -plow unattended-upgrades
EOF
echo ""

echo "🔄 À ce point, reconnecte-toi avec: ssh web@151.80.60.62"
echo ""

echo "=== ÉTAPE 8: Installation de Caddy (en tant que user web) ==="
cat << 'EOF'
sudo apt -y install debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update && sudo apt -y install caddy
sudo systemctl enable caddy
sudo systemctl status caddy
EOF
echo ""

echo "=== ÉTAPE 9: Création de l'arborescence de déploiement ==="
cat << 'EOF'
sudo mkdir -p /srv/www/portfolio/releases
sudo chown -R web:web /srv/www/portfolio
EOF
echo ""

echo "=== ÉTAPE 10: Configuration Caddy ==="
echo "Créer le fichier /etc/caddy/Caddyfile avec le contenu suivant :"
cat << 'EOF'

champagnedevops.fr, www.champagnedevops.fr {
  encode zstd gzip
  root * /srv/www/portfolio/current
  try_files {path} /index.html
  file_server

  header {
    # Cache long pour assets fingerprintés
    @assets path *.js *.css *.png *.jpg *.svg *.ico *.webp *.woff *.woff2
    header @assets Cache-Control "public, max-age=31536000, immutable"
    # Pas de cache pour HTML (déploiements instantanés)
    @html path *.html
    header @html Cache-Control "no-cache"
    # Sécurité de base
    X-Content-Type-Options nosniff
    Referrer-Policy no-referrer-when-downgrade
    X-Frame-Options DENY
    X-XSS-Protection "1; mode=block"
  }

  # Log des accès (optionnel)
  log {
    output file /var/log/caddy/champagnedevops.fr.log {
      roll_size 100mb
      roll_keep 5
    }
  }
}
EOF

echo ""
echo "Puis recharger Caddy :"
echo "sudo systemctl reload caddy"
echo ""

echo "=== ÉTAPE 11: Configuration DNS ==="
echo "Configurer les enregistrements DNS :"
echo "A  @    -> 151.80.60.62"
echo "A  www  -> 151.80.60.62"
echo ""

echo "=== ÉTAPE 12: Test final ==="
echo "Une fois le DNS propagé et Caddy configuré :"
echo "curl -I https://champagnedevops.fr"
echo ""

echo "✅ Configuration VPS terminée !"
echo "🚀 Tu peux maintenant utiliser ./deploy.sh pour déployer"
