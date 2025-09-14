export default defineNuxtPlugin((nuxtApp) => {
  const { trackPageView, trackNavigation, trackTimeOnPage } = useNavigationTracking()
  
  let currentPage = ''
  let startTime = Date.now()
  
  // Tracking initial de la page
  nuxtApp.hook('page:finish', () => {
    const route = useRoute()
    const pageName = route.name || route.path
    const pagePath = route.path
    
    // Track navigation si on change de page
    if (currentPage && currentPage !== pageName) {
      trackNavigation(currentPage, pageName)
    }
    
    // Track la nouvelle page
    trackPageView(pageName, pagePath)
    
    // Mettre à jour les variables
    currentPage = pageName
    startTime = Date.now()
  })
  
  // Tracking du temps sur page avant de quitter
  nuxtApp.hook('page:start', () => {
    if (currentPage && startTime) {
      const duration = Math.round((Date.now() - startTime) / 1000)
      if (duration > 0) {
        trackTimeOnPage(currentPage, duration)
      }
    }
  })
})
