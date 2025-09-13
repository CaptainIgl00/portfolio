export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // Configuration CSS
  css: [
    '~/assets/css/main.css',
    '~/assets/animations.css'
  ],
  
  // Configuration Tailwind
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  
  // Configuration du rendu
  ssr: true,
  
  // Configuration des composants
  components: true,
  
  // Configuration des assets
  app: {
    head: {
      title: 'Matheo Champagne - Ingénieur DevOps',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio de Matheo Champagne, Ingénieur DevOps spécialisé en infrastructure cloud et développement' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },
  
  // Configuration du build
  build: {
    transpile: ['three']
  },
  
  // Configuration Vite
  vite: {
    optimizeDeps: {
      include: ['three', 'gsap']
    }
  }
})