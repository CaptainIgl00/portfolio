<template>
  <div class="not-found">
    <div class="container">
      <h1>404</h1>
      <h2>Page non trouvée</h2>
      <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>
      <router-link to="/" class="back-home">Retour à l'accueil</router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
}

.container {
  max-width: 600px;
  padding: 0 1rem;
}

h1 {
  font-size: 8rem;
  margin: 0;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1;
}

h2 {
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: #1f2937;
}

p {
  font-size: 1.1rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

.back-home {
  display: inline-block;
  background-color: #4f46e5;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.3s;
}

.back-home:hover {
  background-color: #4338ca;
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  h1 {
    font-size: 6rem;
  }
  
  h2 {
    font-size: 2rem;
  }
}
</style> 