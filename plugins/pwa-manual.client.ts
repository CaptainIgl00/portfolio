export default defineNuxtPlugin(() => {
  if (process.client && 'serviceWorker' in navigator) {

    // Fonction pour enregistrer le SW
    async function registerServiceWorker() {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/'
        })

        // Gérer les mises à jour
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // Nouvelle version disponible
                console.log('Nouvelle version du service worker disponible')
                // Auto-reload après 2 secondes pour éviter de déranger l'utilisateur
                setTimeout(() => {
                  newWorker.postMessage({ type: 'SKIP_WAITING' })
                  window.location.reload()
                }, 2000)
              }
            })
          }
        })

        // Vérifier les mises à jour toutes les heures
        setInterval(() => {
          registration.update()
        }, 60 * 60 * 1000)

      } catch (error) {
        console.error('PWA registration error:', error)
      }
    }

    // Démarrer l'enregistrement
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', registerServiceWorker)
    } else {
      registerServiceWorker()
    }
  }
})
