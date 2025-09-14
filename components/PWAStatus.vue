<template>
  <div v-if="showPWAStatus" class="fixed top-4 left-4 z-50 bg-slate-800 border border-slate-700 rounded-lg p-3 shadow-xl">
    <div class="flex items-center space-x-2">
      <div class="w-2 h-2 rounded-full" :class="pwaStatus.isOnline ? 'bg-green-500' : 'bg-red-500'"></div>
      <span class="text-sm text-white">
        {{ pwaStatus.isOnline ? 'En ligne' : 'Hors ligne' }}
      </span>
    </div>
    <div v-if="pwaStatus.isInstalled" class="mt-2 text-xs text-green-400">
      ✅ PWA installée
    </div>
    <div v-if="pwaStatus.serviceWorkerRegistered" class="mt-1 text-xs text-blue-400">
      🔄 Service Worker actif
    </div>
  </div>
</template>

<script setup>
const pwaStatus = ref({
  isOnline: true,
  isInstalled: false,
  serviceWorkerRegistered: false
})

const showPWAStatus = ref(false)

onMounted(() => {
  if (process.client) {
    // Vérifier le statut en ligne/hors ligne
    pwaStatus.value.isOnline = navigator.onLine
    
    window.addEventListener('online', () => {
      pwaStatus.value.isOnline = true
    })
    
    window.addEventListener('offline', () => {
      pwaStatus.value.isOnline = false
    })

    // Vérifier si l'app est installée
    if (window.matchMedia('(display-mode: standalone)').matches || 
        window.navigator.standalone === true) {
      pwaStatus.value.isInstalled = true
    }

    // Vérifier si le service worker est enregistré
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistration().then(registration => {
        if (registration) {
          pwaStatus.value.serviceWorkerRegistered = true
        }
      })
    }

    // Afficher le statut en mode développement
    if (process.env.NODE_ENV === 'development') {
      showPWAStatus.value = true
    }
  }
})
</script>
