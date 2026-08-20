// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'
import { projects } from './data/projects.js'

// Découpage manuel des vendors : chaque entrée associe un nom de chunk
// aux fragments d'identifiant de module qui doivent y atterrir.
const MANUAL_CHUNKS: ReadonlyArray<readonly [string, readonly string[]]> = [
  ['three', ['node_modules/three/']],
  ['gsap', ['node_modules/gsap/']],
  ['utils', ['node_modules/@vueuse/core/']],
  ['vendor', ['node_modules/vue/', 'node_modules/vue-router/']]
]

// Chemin du handler IPX maison (voir server/handlers/ipx.ts) : il remplace celui
// de @nuxt/image, dont le handler Node bloque le prerender Nitro.
const IPX_HANDLER = fileURLToPath(new URL('./server/handlers/ipx.ts', import.meta.url))
const IPX_MODULE_HANDLER = 'image/dist/runtime/server/routes/_ipx'

export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  compatibilityDate: '2025-09-13',
  
  // Configuration CSS
  css: [
    '~/assets/css/main.css',
    '~/assets/animations.css'
  ],
  
  // Configuration Tailwind
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],


  // Configuration du rendu
  ssr: true,
  
  // Headers pour éviter le cache en développement
  nitro: {
    compressPublicAssets: true,
    minify: true,
    prerender: {
      // Les fiches projet sont prérendues elles aussi : le site est servi en
      // statique, sans SSR, donc une route non prérendue retombe sur le
      // index.html de l'accueil et affiche la mauvaise page.
      routes: [
        '/',
        '/about',
        '/projects',
        '/contact',
        ...projects.map((project) => `/project/${project.slug}`)
      ]
    },
    routeRules: {
      '/_nuxt/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable'
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
  
  // @nuxt/image enregistre la route /_ipx/** sur son propre handler ; on la
  // réaffecte au nôtre une fois Nitro initialisé (options.handlers pour le serveur
  // final, options._config.handlers pour l'instance de prerender qui en est clonée).
  hooks: {
    'nitro:build:before'(nitro) {
      let swapped = 0
      const swap = (handlers?: Array<{ handler?: string }>) => {
        for (const handler of handlers || []) {
          if (typeof handler.handler === 'string' && handler.handler.includes(IPX_MODULE_HANDLER)) {
            handler.handler = IPX_HANDLER
            swapped++
          }
        }
      }
      swap(nitro.options.handlers)
      swap(nitro.options._config.handlers)

      if (swapped === 0) {
        console.warn(
          '[ipx] Aucun handler @nuxt/image remplacé : vérifier IPX_MODULE_HANDLER, ' +
          'le prerender des images risque de bloquer le build.'
        )
      }
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
          // Rolldown (Vite 8) n'accepte plus la forme objet de manualChunks :
          // le mapping chunk -> modules est exprimé sous forme de fonction.
          manualChunks(id: string) {
            for (const [chunk, patterns] of MANUAL_CHUNKS) {
              if (patterns.some((pattern) => id.includes(pattern))) {
                return chunk
              }
            }
          }
        }
      }
    }
  }
})
