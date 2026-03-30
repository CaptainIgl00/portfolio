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
                // Afficher un bandeau de mise à jour avec consentement utilisateur
                const banner = document.createElement('div')
                banner.setAttribute('role', 'alert')
                banner.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:9999;display:flex;align-items:center;justify-content:center;gap:12px;padding:12px 16px;background:#1e293b;border-top:1px solid #6366f1;color:#e2e8f0;font-family:system-ui,sans-serif;font-size:14px;'

                const text = document.createElement('span')
                text.textContent = 'Nouvelle version disponible'

                const btn = document.createElement('button')
                btn.textContent = 'Mettre à jour'
                btn.style.cssText = 'padding:6px 16px;background:#6366f1;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:14px;font-weight:500;'

                btn.addEventListener('click', () => {
                  newWorker.postMessage({ type: 'SKIP_WAITING' })
                  window.location.reload()
                })

                banner.appendChild(text)
                banner.appendChild(btn)
                document.body.appendChild(banner)
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
