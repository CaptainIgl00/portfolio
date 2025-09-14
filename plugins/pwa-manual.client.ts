export default defineNuxtPlugin(() => {
  if (process.client && 'serviceWorker' in navigator) {
    
    // Fonction pour nettoyer tous les anciens SW
    async function cleanupAllServiceWorkers() {
      try {
        const registrations = await navigator.serviceWorker.getRegistrations()
        
        for (let registration of registrations) {
          await registration.unregister()
        }
        
        // Nettoyer tous les caches
        if ('caches' in window) {
          const cacheNames = await caches.keys()
          for (let name of cacheNames) {
            await caches.delete(name)
          }
        }
      } catch (error) {
        console.error('PWA cleanup error:', error)
      }
    }

    // Fonction pour enregistrer le nouveau SW
    async function registerNewServiceWorker() {
      try {
        // Vérifier s'il y a déjà un SW
        const registrations = await navigator.serviceWorker.getRegistrations()
        
        if (registrations.length === 0) {
          // Enregistrer le nouveau SW
          const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/'
          })
          
          // Gérer les mises à jour
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  if (confirm('Nouvelle version disponible. Recharger ?')) {
                    window.location.reload()
                  }
                }
              })
            }
          })
        }
      } catch (error) {
        console.error('PWA registration error:', error)
      }
    }

    // Initialisation
    async function initializePWA() {
      // 1. Nettoyer tous les anciens SW
      await cleanupAllServiceWorkers()
      
      // 2. Attendre un peu
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // 3. Enregistrer le nouveau SW
      await registerNewServiceWorker()
    }

    // Démarrer l'initialisation
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializePWA)
    } else {
      initializePWA()
    }
  }
})
