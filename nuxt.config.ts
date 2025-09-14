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
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure',
      send_page_view: false,
    }
  },

  // Configuration du rendu
  ssr: true,
  
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
        { name: 'theme-color', content: '#0f172a' },
        { name: 'color-scheme', content: 'dark' },
        { 
          'http-equiv': 'Content-Security-Policy', 
          content: "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://region1.google-analytics.com; img-src 'self' data: https: https://www.google-analytics.com https://www.googletagmanager.com https://*.google-analytics.com;"
        }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
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
  
  // Configuration Nitro pour compression et performance
  nitro: {
    compressPublicAssets: true,
    minify: true,
    prerender: {
      routes: ['/', '/about', '/projects', '/contact']
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