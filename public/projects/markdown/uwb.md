## Contexte
En tant qu'alternant chez **Continental** à Toulouse, j'ai contribué au développement de la technologie **Ultra Wide Band (UWB)**, une technologie de communication radio révolutionnaire déjà présente dans notre quotidien (AirTags, smartphones). Mon travail a abouti au **dépôt d'un brevet** et au développement de plusieurs bancs de test innovants.


## Challenge Initial
Le projet comportait plusieurs défis techniques majeurs :
- Caractérisation précise des performances RF (BLE, UWB, 433MHz)
- Tests en chambre anéchoïque nécessitant une automatisation complète
- Cartographie UWB autour des véhicules avec problèmes de performance
- Besoin de visualisation en temps réel des données
- Intégration complexe (LiDAR, CAN, RF)

## Ma contribution

### Banc de Test BLE
Premier banc développé pour les capteurs de pression des pneus :
- **Interface** :
  - Développement PyQt6
  - Visualisation temps réel
  - Configuration des tests
  - Export des données

- **Mesures** :
  - Puissance RF entre TPMS et ECU
  - Analyse en conditions réelles
  - Validation des performances

![BLE Test Bench](/projects/ble-test-bench.png)

### Banc de Test Chambre Anéchoïque
Automatisation complète des mesures de diagramme de rayonnement :

- **Hardware** :
  - Pilotage moteur pas à pas (Arduino, C++)
  - Interface analyseur Rhode&Schwarz
  - Support multi-fréquences

- **Software** :
  - Tests autonomes longue durée
  - Collecte automatique des métriques
  - Génération de rapports
  - Visualisation des diagrammes

![Diagramme de Rayonnement](/projects/radiation-pattern.png)

### Banc de Test UWB Véhicule
Évolution majeure du système de caractérisation UWB :

- **Architecture** :
  - Refonte complète avec PyQt6
  - Multithreading et multiprocessing
  - Opérations vectorielles NumPy
  - Interface temps réel

- **Fonctionnalités** :
  - Visualisation temps réel PyQtGraph
  - Contrôles Play/Pause
  - Enregistrement des sessions
  - Algorithme d'interpolation avancé

![UWB Test Bench](/projects/uwb-test-bench.png)

### Innovation Brevetée
Développement d'une solution brevetée pour l'UWB :
- Conception du système
- Preuve de concept
- Implémentation IA (classification temps réel)
- Documentation technique

[Brevet UWB](https://patents.google.com/patent/WO2024041872A1/en?inventor=st%C3%A9phane+billy&oq=st%C3%A9phane+billy&sort=new)

## Technologies utilisées

### Software
- Python (PyQt6, PyQtGraph)
- C++ (Arduino)
- Multithreading/Multiprocessing
- NumPy

### Hardware
- Ultra Wide Band
- Bluetooth Low Energy
- LiDAR
- CAN Bus
- Analyseur Rhode&Schwarz

### Data Science
- Algorithmes d'interpolation
- IA temps réel
- Visualisation de données
- Traitement de signal

## Résultats Obtenus

### Performance
- **Temps réel** : Visualisation instantanée des mesures
- **Optimisation** : Tests accélérés par interpolation
- **Autonomie** : Tests weekend sans supervision

### Innovation
- **Brevet** : Dépôt d'une solution UWB innovante
- **IA** : Démonstration de faisabilité
- **Méthodologie** : Nouveaux protocoles de test

### Qualité
- **Fiabilité** : Tests automatisés robustes
- **Précision** : Mesures RF haute qualité
- **Documentation** : Procédures détaillées

## Défis et Solutions

### Performance Temps Réel
- **Problème** : Lenteur du système existant
- **Solution** : Architecture multithreading et vectorisation
- **Résultat** : Visualisation fluide et réactive

### Automatisation RF
- **Problème** : Tests manuels chronophages
- **Solution** : Pilotage matériel intégré
- **Résultat** : Tests autonomes 24/7

### Interpolation
- **Problème** : Durée excessive des tests
- **Solution** : Algorithme prédictif temps réel
- **Résultat** : Optimisation significative

## Impact sur le Projet

Les développements ont permis :
- Dépôt d'un brevet UWB
- Tests véhicules optimisés
- Caractérisation RF automatisée
- Visualisation temps réel
- Réduction des coûts de test
