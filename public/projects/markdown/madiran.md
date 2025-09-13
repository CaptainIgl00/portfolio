## Contexte
**TELEO** est un projet innovant d'**Airbus Defense & Space** en partenariat avec l'**ONERA**, visant à démontrer la faisabilité des communications optiques laser entre satellites et stations sol. Cette technologie révolutionnaire permet d'atteindre des débits de transmission exceptionnels, essentiels pour la transmission d'images satellites en ultra haute résolution.

![Communications Optiques](/projects/optical-comms.png)

## Challenge Initial
Le projet présentait plusieurs défis techniques majeurs :
- Communication complexe entre la station sol ONERA et le Mission Control Center Airbus
- Multiples protocoles à gérer (InfluxDB Line Protocol et CCSDS)
- Métriques critiques à collecter et transmettre en temps réel
- Tests limités sur la charge utile nécessitant une fiabilité maximale
- Scripts legacy en Matlab à moderniser

## Ma contribution

### Architecture Microservices
J'ai conçu et implémenté une architecture microservices robuste :

- **Communication Inter-sites** :
  - Containers Docker pour la liaison GS-MCC
  - Gestion des métriques en temps réel
  - Support multi-protocoles (InfluxDB, CCSDS)
  - Transmission des données météo

- **Automatisation** :
  - Interface PyQt6 pour le pilotage des tests
  - Contrôle multi-machines via Paramiko
  - Tests unitaires avec Pytest
  - Documentation détaillée

- **Data Engineering** :
  - Migration Matlab vers Python
  - Optimisation des simulations physiques
  - Visualisation avec Matplotlib
  - Génération de GIFs explicatifs

### Coordination Inter-équipes
- Liaison technique entre ONERA et Airbus
- Suivi détaillé des développements
- Documentation des protocoles
- Formation des équipes

## Technologies utilisées

### Backend
- Python
- PyQt6
- Paramiko
- Pytest

### DevOps
- Docker
- InfluxDB
- Grafana
- Git

### Protocoles
- CCSDS
- InfluxDB Line Protocol
- HTTP/REST

### Data
- Matplotlib
- NumPy
- Pandas
- Matlab (migration)

## Résultats Obtenus

### Performance
- **Communication** : Transmission fiable des données critiques
- **Tests** : Automatisation complète des bancs de test
- **Simulation** : Optimisation des calculs physiques

### Qualité
- **Fiabilité** : Tests unitaires exhaustifs
- **Maintenance** : Code moderne et documenté
- **Visualisation** : GIFs explicatifs pour les équipes

### Collaboration
- **Inter-équipes** : Communication fluide ONERA-Airbus
- **Documentation** : Protocoles et interfaces détaillés
- **Formation** : Support aux équipes techniques

## Défis et Solutions

### Communication Inter-sites
- **Problème** : Protocoles multiples et données critiques
- **Solution** : Architecture microservices Docker
- **Résultat** : Transmission fiable et temps réel

### Automatisation des Tests
- **Problème** : Sessions de test limitées
- **Solution** : Framework PyQt6 et tests unitaires
- **Résultat** : Fiabilité maximale des tests

### Migration Legacy
- **Problème** : Scripts Matlab complexes
- **Solution** : Réécriture Python optimisée
- **Résultat** : Meilleures performances et visualisations

## Impact sur le Projet

Les développements ont permis :
- Communication fiable entre sites
- Automatisation complète des tests
- Visualisation claire des phénomènes complexes
- Maintenance facilitée du code
- Collaboration renforcée entre équipes