## Contexte
La **Brasserie Chez Ju** est un restaurant traditionnel français situé à **Carcassonne**. Le projet consistait à créer une présence en ligne moderne et efficace pour présenter l'établissement, son menu et permettre les réservations en ligne. Mais aussi gérer la campagne de publicité sur **Google Ads**.

## Objectifs
- Créer une interface utilisateur moderne et intuitive
- Permettre la gestion dynamique du menu et des événements
- Intégrer un système de réservation en ligne
- Optimiser le référencement (**SEO**)
- Assurer une maintenance facile du contenu

## Ma contribution

### Architecture et Développement Frontend
- Conception et développement de l'interface utilisateur avec **Nuxt 3**
- Implémentation d'animations fluides et d'interactions utilisateur intuitives avec **Vuetify**
- Optimisation des performances (Core Web Vitals)
- Mise en place d'un design responsive (mobile, tablette, desktop) avec **TailwindCSS**
- Intégration des meilleures pratiques d'accessibilité

### Backend et CMS
- Développement d'une API REST avec **FastAPI**
- Intégration de **Directus** comme CMS headless
- Configuration de la base de données **PostgreSQL**
- Mise en place d'un système de cache efficace
- Gestion des médias et optimisation des images avec **Python** et **Nuxt Image**

### Infrastructure et Déploiement
- Configuration de l'infrastructure avec **Docker**
- Mise en place d'un reverse proxy avec **Traefik**
- Configuration du **SSL** automatique
- Optimisation des performances serveur
- Mise en place d'un pipeline CI/CD avec **GitHub Actions**

## Technologies utilisées

### Frontend
- Nuxt 3
- Vue.js 3
- TailwindCSS
- Vuetify

### Backend
- FastAPI
- PostgreSQL
- Directus CMS

### Infrastructure
- Docker
- Traefik
- GitHub Actions

## Résultats

- Un coût extrêmement réduit comparé à l'ancien site: environ **8€/mois** (nom de domaine + vps) comparé à 600€/mois pour le même service.

- **Score Lighthouse > 90** sur tous les critères
- **Temps de chargement < 2 secondes**

![image](/portfolio/projects/seo.png)

- Interface d'administration **intuitive** pour le client
- **Maintenance simplifiée** grâce au CMS

![image](/portfolio/projects/cms.png)

- Système de réservation **automatisé** réduisant la charge de travail
- Augmentation **significative** de la visibilité en ligne

![image](/portfolio/projects/google-ads.png)

Pour un restaurant sur la région de Carcassonne, un **CTR de 3,05%** est un résultat très satisfaisant.

## Défis et Solutions
### Performance
Le principal défi était d'assurer des performances optimales malgré les nombreuses images et la complexité du menu. La solution a été mise en œuvre à travers :
- **Optimisation automatique** des images via des scripts **Python** et le module **Nuxt Image**
- **Lazy loading** intelligent: les images sont chargées uniquement lorsque l'utilisateur les voit
- Stratégie de **cache** efficace: les images sont mises en cache via le module Nuxt Image

### Gestion du contenu
Le client avait besoin d'une solution simple pour mettre à jour le menu et les événements. L'utilisation de Directus comme CMS headless a permis de :
- Créer une interface d'administration sur mesure très rapidement
- Automatiser la mise en forme du contenu
- Gérer facilement les médias
- Programmer les changements de menu (menu de la semaine, évènements, etc.)

### Photographies
Pour les photos du restaurant, j'ai utilisé les services de mon frère photographe [Luca Guilloux](https://www.instagram.com/guillx.luca/). J'ai ensuite retouché les photos avec GIMP et Photoshop pour améliorer la qualité et la cohérence avec le design du site.

### Hébergement

J'ai opté pour un serveur **VPS** de chez [OVH](https://www.ovhcloud.com/fr/vps/) pour plusieurs raisons :
- **Coût** : Un serveur **VPS** est moins cher qu'un serveur dédié (environ 4€/mois)
- **Localisation** : Le serveur est situé à proximité de la région de Carcassonne
- **Performance** : Un serveur **VPS** offre des performances élevées et une haute disponibilité
- **Sécurité** : Un serveur **VPS** offre une sécurité élevée grâce à la virtualisation

### Déploiement
J'ai développé l'architecture de déploiement suivante qui me semblait la plus simple, la plus efficace et la plus sûre.

💻 Code local → 📦 GitHub → 🔄 GitHub Actions → 🐳 Container Docker → 🌐 Docker Hub → 👁️ Watchtower → 🖥️ VPS

Sur le serveur VPS, j'ai déployé un container **Watchtower** qui surveille les conteneurs et les met à jour automatiquement dès qu'il détecte une nouvelle version sur **Docker Hub**. Mon pipeline de déploiement est donc très simple car il ne fait que construire l'image et la pousser sur **Docker Hub**.

## Perspectives d'évolution
- Intégration d'un **système de réservation** plus poussé pour monitorer le **taux de conversion**
- **Application mobile** pour les employés du restaurant pour gérer les réservations
- Analyse avancée des données de réservation pour optimiser la campagne de publicité sur **Google Ads**