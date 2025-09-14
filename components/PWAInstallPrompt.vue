<template>
  <div v-if="showInstallPrompt" class="fixed bottom-4 right-4 z-50 max-w-sm">
    <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg p-4">
      <div class="flex items-start space-x-3">
        <div class="flex-shrink-0">
          <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
          </div>
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="text-sm font-medium text-slate-900 dark:text-slate-100">
            Installer l'application
          </h3>
          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Ajoutez ce portfolio à votre écran d'accueil pour un accès rapide.
          </p>
          <div class="mt-3 flex space-x-2">
            <button
              @click="installApp"
              class="inline-flex items-center px-3 py-2 border border-transparent text-xs font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Installer
            </button>
            <button
              @click="dismissPrompt"
              class="inline-flex items-center px-3 py-2 border border-slate-300 dark:border-slate-600 text-xs font-medium rounded-md text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Plus tard
            </button>
          </div>
        </div>
        <div class="flex-shrink-0">
          <button
            @click="dismissPrompt"
            class="inline-flex text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showInstallPrompt = ref(false)
const deferredPrompt = ref<any>(null)

onMounted(() => {
  // Écouter l'événement beforeinstallprompt
  window.addEventListener('beforeinstallprompt', (e) => {
    // Empêcher l'affichage automatique du prompt
    e.preventDefault()
    
    // Sauvegarder l'événement pour l'utiliser plus tard
    deferredPrompt.value = e
    
    // Afficher notre prompt personnalisé
    showInstallPrompt.value = true
    
    console.log('📱 PWA install prompt disponible')
  })

  // Écouter l'événement appinstalled
  window.addEventListener('appinstalled', () => {
    console.log('✅ PWA installée avec succès')
    showInstallPrompt.value = false
    deferredPrompt.value = null
    
    // Optionnel: envoyer un événement analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'pwa_installed', {
        event_category: 'PWA',
        event_label: 'Portfolio MC'
      })
    }
  })

  // Vérifier si l'app est déjà installée
  if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
    console.log('ℹ️ PWA déjà installée')
    showInstallPrompt.value = false
  }
})

const installApp = async () => {
  if (!deferredPrompt.value) {
    console.log('❌ Pas de prompt d\'installation disponible')
    return
  }

  try {
    // Afficher le prompt d'installation
    deferredPrompt.value.prompt()
    
    // Attendre la réponse de l'utilisateur
    const { outcome } = await deferredPrompt.value.userChoice
    
    console.log(`📱 Résultat de l'installation: ${outcome}`)
    
    // Nettoyer
    deferredPrompt.value = null
    showInstallPrompt.value = false
    
    // Optionnel: envoyer un événement analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'pwa_install_prompt', {
        event_category: 'PWA',
        event_label: outcome
      })
    }
  } catch (error) {
    console.error('Erreur lors de l\'installation:', error)
  }
}

const dismissPrompt = () => {
  showInstallPrompt.value = false
  
  // Optionnel: ne plus afficher pendant cette session
  sessionStorage.setItem('pwa-prompt-dismissed', 'true')
}
</script>