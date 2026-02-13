<template>
  <div class="min-h-screen w-screen overflow-x-hidden">
    <div class="app relative w-full overflow-x-hidden">
      <NavBar />
      <main class="main-content">
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
// Components auto-imported by Nuxt
</script>

<style>
/* Style global */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary: #a5b4fc;
  --primary-dark: #6366f1;
  --text-primary: #fff;
  --text-secondary: #94a3b8;
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --bg-card: rgba(255, 255, 255, 0.03);
  --border-color: rgba(255, 255, 255, 0.05);
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: var(--text-primary);
  line-height: 1.5;
  background: var(--bg-primary);
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  min-height: 100vh;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding-top: 70px; /* Pour compenser la navbar fixe */
}

/* Animation de transition entre les pages */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

/* Styles de texte */
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-primary);
}

.gradient-title {
  background: linear-gradient(135deg, #fff, var(--primary));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

p {
  color: var(--text-secondary);
}

/* Images */
img {
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
}

/* Liens */
a {
  color: var(--primary);
  text-decoration: none;
  transition: all 0.3s ease;
}

a:hover {
  color: #fff;
  text-shadow: 0 0 10px rgba(165, 180, 252, 0.3);
}

/* Boutons */
button {
  cursor: pointer;
  background: rgba(165, 180, 252, 0.1);
  border: 1px solid rgba(165, 180, 252, 0.2);
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

button:hover:not(:disabled) {
  background: rgba(165, 180, 252, 0.2);
  transform: translateY(-2px);
}

button:disabled {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.1);
  cursor: not-allowed;
}

/* Scrollbar personnalisée */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--bg-primary);
}

::-webkit-scrollbar-thumb {
  background: rgba(165, 180, 252, 0.2);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(165, 180, 252, 0.3);
}

/* Sélection de texte */
::selection {
  background: rgba(165, 180, 252, 0.2);
  color: #fff;
}

html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  width: 100vw;
  min-height: 100vh;
}
</style>
