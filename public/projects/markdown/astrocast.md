## Contexte
**Astrocast** est une startup Suisse spécialisée dans l'**IoT satellitaire**, offrant une solution de connectivité globale pour la gestion d'appareils à distance. Leur technologie permet de connecter et gérer des dispositifs IoT (comme des drones agricoles) instantanément n'importe où sur la planète grâce à leur constellation de satellites.

![IoT Satellitaire](/projects/satellite-iot.png)

## Challenge Initial
Le projet présentait plusieurs défis techniques majeurs :
- Infrastructure logicielle complexe basée sur Petalinux
- Code legacy en C++ avec documentation limitée
- Scripts et librairies pour Linux embarqué sur hardware satellite
- Absence d'environnement de développement standardisé
- Gestion de code non structurée

## Ma contribution

### Modernisation DevOps
J'ai apporté une expertise DevOps significative au projet :

- **Containerisation** :
  - Mise en place d'un environnement Docker pour Ubuntu 16
  - Standardisation de l'environnement de développement
  - Isolation des dépendances système
  - Configuration reproductible

- **Gestion de Code** :
  - Migration complète vers GitLab
  - Implémentation de GitLab submodules pour la modularité
  - Séparation claire des composants
  - Versioning efficace

- **Documentation** :
  - Rédaction exhaustive de la documentation technique
  - Guides de déploiement et d'utilisation
  - Documentation des processus DevOps
  - Standardisation des pratiques

### Amélioration de la Qualité
- Résolution de bugs critiques
- Refactoring du code legacy
- Tests et validation
- Optimisation des performances

## Technologies utilisées

### DevOps
- Docker
- GitLab & Git Submodules
- Ubuntu 16.04 LTS

### Embedded
- Petalinux
- C++
- Linux embarqué

### Documentation
- Markdown
- GitLab Wiki
- Diagrammes d'architecture

## Résultats Obtenus

### Productivité
- **Déploiement** : Automatisation complète de l'environnement de développement
- **Reproductibilité** : Configuration Docker standardisée
- **Collaboration** : Meilleure gestion du code source avec GitLab

### Qualité
- **Maintenance** : Code plus facile à maintenir
- **Documentation** : Base de connaissances complète
- **Stabilité** : Correction de bugs critiques

### Organisation
- **Modularité** : Séparation claire des composants avec submodules
- **Versioning** : Gestion efficace des versions
- **Process** : Standardisation des pratiques de développement

## Défis et Solutions

### Environnement Legacy
- **Problème** : Système ancien sur Ubuntu 16
- **Solution** : Containerisation Docker
- **Résultat** : Environnement isolé et reproductible

### Organisation du Code
- **Problème** : Code monolithique difficile à maintenir
- **Solution** : Utilisation de GitLab et submodules
- **Résultat** : Architecture modulaire et maintenable

### Documentation
- **Problème** : Documentation insuffisante
- **Solution** : Rédaction complète de documentation technique
- **Résultat** : Base de connaissances accessible et à jour

## Impact sur le Projet

Les améliorations apportées ont transformé le projet :
- Environnement de développement standardisé
- Code source organisé et versionné
- Documentation complète et à jour
- Processus DevOps modernes
- Maintenance facilitée

## Perspectives d'évolution
- Migration vers des versions plus récentes d'Ubuntu
- Intégration continue avec GitLab CI/CD
- Automatisation des tests
- Monitoring des déploiements 