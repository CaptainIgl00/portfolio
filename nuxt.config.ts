// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2025-09-13',
  
  // Configuration CSS
  css: [
    '~/assets/css/main.css',
    '~/assets/animations.css'
  ],
  
  // Configuration Tailwind
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-gtag'],
  
  // Configuration Google Analytics
  gtag: {
    id: 'G-NM8LB6JNV6',
    config: {
      cookie_flags: 'SameSite=None;Secure',
      send_page_view: false,
    }
  },


  // Configuration du rendu
  ssr: true,
  
  // Headers pour éviter le cache en développement
  nitro: {
    compressPublicAssets: true,
    minify: true,
    prerender: {
      routes: ['/', '/about', '/projects', '/contact']
    },
    routeRules: {
      '/**': {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      },
      '/sw.js': {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          'Service-Worker-Allowed': '/'
        }
      }
    }
  },
  
  // Configuration des composants
  components: true,
  
  // Configuration des assets
  app: {
    head: {
      title: 'Matheo Champagne - Ingénieur DevOps',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'description', content: 'Portfolio de Matheo Champagne, Ingénieur DevOps spécialisé en infrastructure cloud et développement' },
        { 
          'http-equiv': 'Content-Security-Policy', 
          content: "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://region1.google-analytics.com; img-src 'self' data: https: https://www.google-analytics.com https://www.googletagmanager.com https://*.google-analytics.com;"
        },
        { name: 'keywords', content: 'DevOps, Infrastructure, Cloud, Kubernetes, Docker, Python, FastAPI, Portfolio' },
        { name: 'author', content: 'Matheo Champagne' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Matheo Champagne - Ingénieur DevOps' },
        { property: 'og:description', content: 'Portfolio de Matheo Champagne, Ingénieur DevOps spécialisé en infrastructure cloud et développement' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://matheochampagne.fr' },
        { property: 'og:image', content: 'https://matheochampagne.fr/profil.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Matheo Champagne - Ingénieur DevOps' },
        { name: 'twitter:description', content: 'Portfolio de Matheo Champagne, Ingénieur DevOps spécialisé en infrastructure cloud et développement' },
        { name: 'twitter:image', content: 'https://matheochampagne.fr/profil.jpg' },
         { name: 'theme-color', content: '#0f172a' },
         { name: 'mobile-web-app-capable', content: 'yes' },
         { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
         { name: 'apple-mobile-web-app-title', content: 'Portfolio MC' },
         { name: 'msapplication-TileColor', content: '#0f172a' },
         { name: 'msapplication-config', content: '/browserconfig.xml' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'manifest', href: '/manifest.webmanifest' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/icon-192x192.png' },
      ]
    }
  },
  
  // Configuration du build
  build: {
    transpile: ['three', 'gsap']
  },
  
  // Configuration des images
  image: {
    quality: 80,
    format: ['webp', 'avif', 'png', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    }
  },
  
  
  // Configuration Vite
  vite: {
    optimizeDeps: {
      include: ['three', 'gsap', 'gsap/ScrollTrigger']
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['vue', 'vue-router'],
            'three': ['three'],
            'gsap': ['gsap', 'gsap/ScrollTrigger'],
            'utils': ['@vueuse/core']
          }
        }
      }
    }
  }
})
