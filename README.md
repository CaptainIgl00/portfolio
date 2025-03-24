# Portfolio Vue.js

Un portfolio moderne et responsive créé avec Vue.js et hébergé sur GitHub Pages.

## Aperçu

Ce portfolio présente mes compétences en développement web, mes projets et mes informations de contact. Il est conçu pour être facilement personnalisable et déployable sur GitHub Pages.

## Fonctionnalités

- Design responsive et moderne
- Animations et transitions fluides
- Navigation intuitive
- Présentation des projets avec filtrage par catégorie
- Formulaire de contact interactif
- Optimisé pour le référencement

## Technologies utilisées

- Vue.js 3 avec Composition API
- Vue Router pour la navigation
- Pinia pour la gestion d'état (si nécessaire)
- CSS moderne (flexbox, grid, variables CSS)
- Vite pour le bundling et le développement
- GitHub Pages pour l'hébergement

## Démarrage rapide

### Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Installez les dépendances :
   ```bash
   npm install
   # ou avec yarn
   yarn
   ```

3. Démarrez le serveur de développement :
   ```bash
   npm run dev
   # ou avec yarn
   yarn dev
   ```

4. Ouvrez votre navigateur et accédez à `http://localhost:5173`

## Personnalisation

1. Modifiez les informations dans les composants Vue
2. Remplacez les projets dans `src/views/Projects.vue`
3. Mettez à jour vos informations de contact dans `src/views/Contact.vue`
4. Ajoutez vos propres images dans `src/assets/images/`

## Déploiement sur GitHub Pages

1. Mettez à jour la base URL dans `vite.config.js` (remplacez '/portfolio/' par le nom de votre dépôt)
2. Déployez sur GitHub Pages :
   ```bash
   npm run deploy
   # ou avec yarn
   yarn deploy
   ```

## Structure du projet

```
portfolio-vue/
├── public/              # Fichiers publics (favicon, etc.)
├── src/                 # Code source
│   ├── assets/          # Images, polices, etc.
│   ├── components/      # Composants Vue réutilisables
│   ├── router/          # Configuration de Vue Router
│   ├── views/           # Pages principales de l'application
│   ├── App.vue          # Composant racine
│   └── main.js          # Point d'entrée de l'application
├── index.html           # Page HTML principale
└── vite.config.js       # Configuration de Vite
```

## Licence

MIT

---

Créé avec ❤️ et Vue.js
