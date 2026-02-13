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
        { name: 'keywords', content: 'DevOps, Infrastructure, Cloud, Kubernetes, Docker, Python, FastAPI, Portfolio, Matheo Champagne, Ingénieur DevOps, champagnedevops.fr' },
        { name: 'author', content: 'Matheo Champagne' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'language', content: 'French' },
        { name: 'geo.region', content: 'FR' },
        { name: 'geo.placename', content: 'France' },
        { name: 'revisit-after', content: '7 days' },
        { property: 'og:title', content: 'Matheo Champagne - Ingénieur DevOps' },
        { property: 'og:description', content: 'Portfolio de Matheo Champagne, Ingénieur DevOps spécialisé en infrastructure cloud et développement' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://champagnedevops.fr' },
        { property: 'og:image', content: 'https://champagnedevops.fr/profil.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Photo de profil de Matheo Champagne' },
        { property: 'og:site_name', content: 'champagnedevops.fr' },
        { property: 'og:locale', content: 'fr_FR' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Matheo Champagne - Ingénieur DevOps' },
        { name: 'twitter:description', content: 'Portfolio de Matheo Champagne, Ingénieur DevOps spécialisé en infrastructure cloud et développement' },
        { name: 'twitter:image', content: 'https://champagnedevops.fr/profil.jpg' },
        { name: 'twitter:image:alt', content: 'Photo de profil de Matheo Champagne' },
        { name: 'twitter:site', content: '@champagnedevops' },
        { name: 'twitter:creator', content: '@champagnedevops' },
        { name: 'theme-color', content: '#0f172a' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'apple-mobile-web-app-title', content: 'Portfolio MC' },
        { name: 'msapplication-TileColor', content: '#0f172a' },
        { name: 'msapplication-config', content: '/browserconfig.xml' },
        { name: 'canonical', content: 'https://champagnedevops.fr' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'apple-touch-fullscreen', content: 'yes' },
        { name: 'apple-mobile-web-app-orientations', content: 'portrait' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'manifest', href: '/manifest.webmanifest' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/icon-192x192.png' },
        { rel: 'canonical', href: 'https://champagnedevops.fr' },
        { rel: 'alternate', hreflang: 'fr', href: 'https://champagnedevops.fr' },
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
