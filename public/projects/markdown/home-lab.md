## Contexte
Mon **Home Lab** est un environnement domotique avancé basé sur **Home Assistant**, hébergé sur une Freebox Ultra customisée. Ce laboratoire personnel combine IoT, monitoring énergétique et intelligence artificielle pour créer un habitat connecté et économe en énergie.

![Home Lab Dashboard](/portfolio/projects/home-lab-dashboard.png)

## Challenge Initial
Le projet visait à résoudre plusieurs problématiques :
- Monitoring précis de la consommation électrique
- Automatisation du chauffage sans solution existante
- Sécurité et optimisation énergétique via vidéosurveillance
- Centralisation et analyse des données IoT
- Hébergement local sécurisé

## Ma contribution

### Monitoring Énergétique Avancé
Système complet de suivi énergétique :

- **Hardware** :
  - Module PZEM avec boucle ampèremétrique
  - ESP32 avec ESPHome
  - Prises connectées stratégiques
  - Installation sur tableau électrique

- **Analytics** :
  - Calcul temps réel des coûts (HP/HC)
  - Statistiques par appareil
  - Analyses mensuelles
  - Recommandations d'optimisation

### Integration HACS-Tiko
Développement d'une [intégration open-source](https://github.com/CaptainIgl00/hacs-tiko) pour Home Assistant :

- **Fonctionnalités** :
  - Contrôle des radiateurs
  - Gestion de la présence
  - Programmation intelligente
  - Interface intuitive

- **Technique** :
  - API REST
  - Gestion des tokens
  - Support multilingue
  - Documentation complète

### Vidéosurveillance IA
Système de sécurité intelligent avec Frigate :

- **Capacités** :
  - Détection d'objets (humains, animaux)
  - Alertes en temps réel
  - Automatisation éclairage
  - Économies d'énergie

- **Infrastructure** :
  - Caméras IP multi-pièces
  - Traitement IA local
  - Stockage sécurisé
  - Notifications push

## Technologies utilisées

### Hardware
- Freebox Ultra (VM Host)
- ESP32 & PZEM
- Prises connectées
- Caméras IP

### Software
- Home Assistant
- ESPHome
- Frigate AI
- Python

### Infrastructure
- Docker
- VM Linux
- MQTT
- Node-RED

## Résultats Obtenus

### Économies
- **Électricité** : Optimisation de la consommation
- **Chauffage** : Réduction du gaspillage
- **Éclairage** : Automatisation intelligente

### Confort
- **Automatisation** : Gestion autonome du domicile
- **Contrôle** : Interface centralisée
- **Sécurité** : Surveillance IA 24/7

### Innovation
- **Open Source** : Contribution à la communauté
- **IA** : Détection d'objets en temps réel
- **Analytics** : Tableaux de bord personnalisés

## Défis et Solutions

### Monitoring Électrique
- **Problème** : Installation complexe sur tableau
- **Solution** : Module PZEM + ESP32 custom
- **Résultat** : Données précises en temps réel

### Intégration Chauffage
- **Problème** : Absence de solution Tiko
- **Solution** : Développement intégration HACS
- **Résultat** : Contrôle complet du chauffage

### Vidéosurveillance
- **Problème** : Respect vie privée et performance
- **Solution** : Traitement IA local avec Frigate
- **Résultat** : Système sécurisé et réactif

## Impact sur le Quotidien

Le système permet :
- Réduction significative des factures
- Automatisation intelligente
- Sécurité renforcée
- Confort optimisé
- Contribution open source

## Perspectives d'évolution
- Intégration de panneaux solaires
- Extension des capteurs IoT
- Développement d'autres intégrations
- Machine Learning pour prédictions
- Dashboards personnalisés avancés 