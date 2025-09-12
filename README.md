# Portfolio Vue.js - champagnedevops.fr

Portfolio déployé automatiquement sur VPS avec Caddy.

## 🚀 Déploiement

### Automatique
```bash
git push origin main  # Déclenche GitHub Actions → déploiement auto
```

## 🛠️ Développement

```bash
npm install           # Installer dépendances
npm run dev           # Serveur local
```

## 📋 Infrastructure

- **VPS** : 151.80.60.62 (user `web`)
- **Domaine** : champagnedevops.fr
- **Serveur** : Caddy (TLS auto, cache optimisé)
- **CI/CD** : GitHub Actions
- **Déploiement** : Atomique avec symlinks (`/srv/www/portfolio/current`)

## 🔧 Maintenance

### Logs Caddy
```bash
ssh web@151.80.60.62 "sudo journalctl -u caddy -f"
```

### Rollback
```bash
ssh web@151.80.60.62 "ls /srv/www/portfolio/releases"
ssh web@151.80.60.62 "ln -sfn /srv/www/portfolio/releases/YYYYMMDD-HHMMSS /srv/www/portfolio/current"
```

### Config Caddy
```bash
ssh web@151.80.60.62 "sudo nano /etc/caddy/Caddyfile"
ssh web@151.80.60.62 "sudo systemctl reload caddy"
```

### Monitoring externe

- **UptimeRobot** : Monitoring gratuit toutes les 5 minutes
- **PageSpeed Insights** : Performance et SEO
- **SSL Labs** : Test de la configuration SSL

## 📁 Structure

```
/srv/www/portfolio/
├── current → releases/20250912-143022/
└── releases/
    ├── 20250912-143022/  # Actuel
    ├── 20250912-141501/  # N-1
    └── 20250912-135430/  # N-2 (cleanup auto)
```

**Site live :** https://champagnedevops.fr