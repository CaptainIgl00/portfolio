 ## Contexte
**Browser Bot** est un projet innovant visant à créer un agent intelligent capable de naviguer sur le web de manière autonome. Basé sur l'architecture **LangChain** et utilisant **GPT-4**, cet agent peut effectuer des tâches complexes de navigation et d'extraction d'informations tout en étant observable en temps réel via une interface web.

## Objectifs
- Créer un agent intelligent capable de naviguer sur le web de manière autonome
- Permettre l'observation et le contrôle en temps réel des actions de l'agent
- Automatiser l'extraction et le stockage d'informations web
- Fournir une API RESTful pour le contrôle et la récupération des données
- Assurer une exécution fiable dans un environnement conteneurisé

## Ma contribution

### Architecture et Infrastructure
- Développement d'une architecture conteneurisée avec **Docker**
- Mise en place d'un environnement graphique virtuel avec **Xvfb** et **noVNC**
- Implémentation d'une API **FastAPI** pour le contrôle de l'agent
- Gestion des données avec **SQLite** et système de fichiers
- Configuration complète de l'environnement Chrome headless

![Architecture](/projects/browser-schem.png)

### Intelligence Artificielle
- Intégration de **LangChain** pour la gestion de l'agent
- Utilisation de **GPT-4** pour l'interprétation et la prise de décision
- Développement de prompts spécialisés pour le web scraping
- Mise en place de mécanismes de retry et de fallback
- Gestion intelligente des erreurs et des cas limites

### Interface et Monitoring
- Interface web en temps réel avec **noVNC**
- Système de logs en direct via WebSocket
- Dashboard de monitoring des tâches
- Contrôle manuel/automatique de l'agent
- Visualisation des données extraites

### Automatisation et Planification
- Système de planification des tâches
- Gestion des sessions de navigation
- Mécanismes de reprise sur erreur
- Rotation des user-agents et gestion des proxies
- Sauvegarde et nettoyage automatique des données

## Technologies utilisées

### Backend & Infrastructure
- Python 3.12
- FastAPI
- Docker & Docker Compose
- SQLite
- Chrome DevTools Protocol

### IA & Automatisation
- LangChain
- GPT-4
- Browser-use
- Pydantic

### Interface & Monitoring
- noVNC
- WebSocket
- Xvfb
- Mutter
- Tint2

## Défis et Solutions

### Environnement Graphique Virtuel
Le principal défi était de créer un environnement graphique virtuel stable et observable :
- Configuration complexe de **Xvfb**
- Gestion des processus graphiques
- Stabilité du serveur VNC

Solutions apportées :
- Architecture robuste de démarrage des services
- Scripts de surveillance et redémarrage automatique
- Optimisation des performances graphiques

### Gestion de l'Agent IA
L'interaction entre l'agent et le navigateur présentait plusieurs défis :
- Synchronisation des actions
- Gestion des timeouts
- Robustesse des interactions

Solutions développées :
- Système de retry intelligent
- Gestion fine des états de l'agent
- Mécanismes de fallback

### Performance et Stabilité
L'exécution dans un conteneur nécessitait :
- Optimisation des ressources
- Gestion de la mémoire
- Stabilité long terme

Solutions implémentées :
- Configuration optimisée de Chrome
- Nettoyage automatique des ressources
- Monitoring des performances

![Fonctionnement](/projects/bot-process.png)

## Résultats

- **Coût** : Choix du modèle pour optimiser le coût
- **Performance** : Temps de réponse moyen de **2-3 secondes**
- **Scalabilité** : Support de multiples instances en parallèle
- **Maintenance** : Système entièrement automatisé
- **Monitoring** : Visibilité complète sur les opérations