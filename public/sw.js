// Service Worker PWA manuel - Version stable avec cache intelligent
const CACHE_NAME = 'portfolio-v1'
const STATIC_ASSETS = [
  '/',
  '/favicon.ico',
  '/favicon.svg',
  '/manifest.webmanifest',
  '/about',
  '/projects',
  '/contact'
]

// Installation
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS)
      })
      .catch((error) => {
        console.error('SW Installation error:', error)
      })
  )
  // Prendre le contrôle immédiatement
  self.skipWaiting()
})

// Activation - Nettoyer les anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  // Prendre le contrôle de tous les clients
  self.clients.claim()
})

// Interception des requêtes - Stratégie cache d'abord pour les assets statiques
self.addEventListener('fetch', (event) => {
  // Ignorer les requêtes non-HTTP
  if (!event.request.url.startsWith('http')) {
    return
  }

  const url = new URL(event.request.url)
  
  // Stratégie différente selon le type de ressource
  if (event.request.method === 'GET') {
    // Pour les pages HTML - Cache First
    if (event.request.destination === 'document') {
      event.respondWith(
        caches.match(event.request)
          .then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse
            }
            // Si pas en cache, essayer le réseau
            return fetch(event.request)
              .then((response) => {
                if (response.status === 200) {
                  const responseClone = response.clone()
                  caches.open(CACHE_NAME)
                    .then((cache) => {
                      cache.put(event.request, responseClone)
                    })
                }
                return response
              })
              .catch(() => {
                // Si réseau échoue, retourner la page d'accueil
                return caches.match('/')
              })
          })
      )
    }
    // Pour les assets (CSS, JS, images) - Cache First
    else if (event.request.destination === 'style' || 
             event.request.destination === 'script' || 
             event.request.destination === 'image') {
      event.respondWith(
        caches.match(event.request)
          .then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse
            }
            return fetch(event.request)
              .then((response) => {
                if (response.status === 200) {
                  const responseClone = response.clone()
                  caches.open(CACHE_NAME)
                    .then((cache) => {
                      cache.put(event.request, responseClone)
                    })
                }
                return response
              })
              .catch(() => {
                return new Response('Asset non disponible', {
                  status: 404,
                  statusText: 'Not Found'
                })
              })
          })
      )
    }
    // Pour les autres requêtes - Network First
    else {
      event.respondWith(
        fetch(event.request)
          .then((response) => {
            if (response.status === 200) {
              const responseClone = response.clone()
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseClone)
                })
            }
            return response
          })
          .catch(() => {
            return caches.match(event.request)
              .then((response) => {
                if (response) {
                  return response
                }
                return new Response('Hors ligne', {
                  status: 503,
                  statusText: 'Service Unavailable'
                })
              })
          })
      )
    }
  }
})

// Gestion des messages
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})
