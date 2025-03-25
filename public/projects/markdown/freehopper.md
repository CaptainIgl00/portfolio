## Contexte
**FreeHopper** est un projet R&D innovant d'Airbus Defense & Space visant à démontrer la faisabilité du **Beam Hopping** pour les communications satellites. Cette technologie révolutionnaire permet à un satellite de couvrir dynamiquement plusieurs zones géographiques en "sautant" d'une zone à l'autre, offrant une flexibilité inédite dans l'allocation des ressources de communication.

## Challenge Initial
Le projet faisait face à des défis majeurs :
- Banc de test complexe avec de multiples composants peu fiables
- Process de test manuel nécessitant 30 minutes de manipulation vidéo
- Absence d'automatisation et de collecte de données structurée
- Interface utilisateur limitée développée en Flask/Dash
- Multiples protocoles à gérer (HTTP, SPI, USB, protocoles propriétaires)

## Ma contribution

### Architecture DevOps
Grâce à l'**IDE Cursor** et son IA intégrée, j'ai pu concevoir et implémenter une architecture microservices robuste en un temps record :

- **Frontend** :
  - Interface utilisateur moderne avec **VueJS** et **Vuetify**
  - Configuration dynamique des profils de test
  - Visualisation en temps réel des données
  - Interface intuitive pour le lancement des tests

- **Backend** :
  - API REST avec **FastAPI** pour la coordination des services
  - Scrappers haute performance en **Golang**
  - Conteneurisation des serveurs web tiers
  - Gestion multi-protocoles (HTTP, SPI, USB, propriétaire)

- **Monitoring** :
  - Dashboards **Grafana** pour la visualisation des métriques
  - Collecte et stockage des données de test
  - Monitoring temps réel des performances

### Containerisation et Orchestration
- Mise en place d'une architecture **Docker Compose** :
  - Conteneurisation de tous les services
  - Déploiement sur un serveur Ubuntu recyclé
  - Configuration réseau optimisée
  - Persistance des données
  - Scripts de déploiement automatisés

### Automatisation des Tests
- Développement d'un framework de test complet :
  - Configuration dynamique des profils de test via l'interface
  - Exécution automatisée des séquences de test
  - Support pour les tests longue durée (week-end)
  - Collecte et analyse automatique des résultats

## Technologies utilisées

### DevOps & Cloud
- Docker & Docker Compose
- Ubuntu Server
- Git & GitLab
- Cursor IDE & GitHub Copilot

### Frontend
- VueJS
- Vuetify
- TailwindCSS
- WebSocket pour temps réel

### Backend
- FastAPI (Python)
- Golang (Scrappers)
- SQLAlchemy
- Redis

### Monitoring
- Grafana
- InfluxDB
- Prometheus

## Résultats Exceptionnels

### Performance
- **Automatisation** : Réduction du temps de test de 30 minutes à quelques clics
- **Fiabilité** : Tests automatisés pouvant tourner sans interruption pendant des jours
- **Productivité** : Configuration et lancement des tests accessibles à tous les opérateurs

### Innovation
- **Architecture** : Solution microservices moderne dans un environnement RF traditionnel
- **DevOps** : Introduction des pratiques DevOps dans un contexte R&D
- **Agilité** : Capacité à modifier et lancer des tests rapidement

### Développement Accéléré
- **Cursor IDE** : Productivité multipliée par 10 grâce à l'IA
- **Temps de développement** : Architecture complète livrée par une seule personne
- **Qualité** : Code robuste et maintenable malgré la complexité

## Défis et Solutions

### Complexité Technique
Le principal défi était l'intégration de multiples composants peu fiables :
- **Problème** : Composants hétérogènes avec différents protocoles
- **Solution** : Architecture microservices isolant chaque composant
- **Résultat** : Système stable et résilient aux pannes

### Performance
L'optimisation des performances était critique :
- **Problème** : Besoin de scraping haute performance
- **Solution** : Développement de scrappers en Golang
- **Résultat** : Collecte de données en temps réel sans perte

### Maintenabilité
La pérennité du système était essentielle :
- **Problème** : Code legacy difficile à maintenir
- **Solution** : Architecture moderne et documentation exhaustive
- **Résultat** : Système facilement extensible et maintenable

## Impact sur le Projet

Le système développé a transformé FreeHopper :
- Tests automatisés exécutables 24/7
- Collecte de données complète et structurée
- Interface utilisateur intuitive
- Monitoring en temps réel
- Capacité à modifier les paramètres à la volée

## Perspectives d'évolution
- Migration vers Kubernetes pour plus de scalabilité
- Ajout de tests automatisés supplémentaires
- Extension du monitoring
- Intégration de nouvelles métriques RF
- Développement d'analyses prédictives 