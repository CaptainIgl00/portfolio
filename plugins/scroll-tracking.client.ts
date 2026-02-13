export default defineNuxtPlugin((nuxtApp) => {
  const { trackScrollDepth, trackSectionView } = useEnhancedTracking()

  let currentPage = ''
  let scrollDepths = new Set()
  let sectionViews = new Set()
  let handleScroll = null
  let handleSectionView = null

  // Cleanup au changement de page
  nuxtApp.hook('page:start', () => {
    if (handleScroll) {
      window.removeEventListener('scroll', handleScroll)
    }
    if (handleSectionView) {
      window.removeEventListener('scroll', handleSectionView)
    }
  })

  nuxtApp.hook('page:finish', () => {
    const route = useRoute()
    currentPage = route.name || route.path

    // Reset tracking pour la nouvelle page
    scrollDepths.clear()
    sectionViews.clear()

    // Scroll tracking
    handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const documentHeight = document.body.scrollHeight - window.innerHeight
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100)

      // Track des paliers de scroll (25%, 50%, 75%, 100%)
      const milestones = [25, 50, 75, 100]
      milestones.forEach(milestone => {
        if (scrollPercentage >= milestone && !scrollDepths.has(milestone)) {
          scrollDepths.add(milestone)
          trackScrollDepth(currentPage, milestone)
        }
      })
    }

    // Section tracking (basé sur les sections visibles)
    handleSectionView = () => {
      const sections = document.querySelectorAll('section, .section, [data-section]')
      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        const sectionName = section.getAttribute('data-section') || section.className || 'unknown'

        if (rect.top < window.innerHeight && rect.bottom > 0 && !sectionViews.has(sectionName)) {
          sectionViews.add(sectionName)
          trackSectionView(sectionName, currentPage)
        }
      })
    }

    // Event listeners
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('scroll', handleSectionView, { passive: true })
  })
})
