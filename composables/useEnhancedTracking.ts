export const useEnhancedTracking = () => {
  const trackPageView = (pageName: string, pagePath: string) => {
    useTrackEvent('page_view', {
      event_category: 'Navigation',
      event_label: pageName,
      page_path: pagePath,
      page_title: pageName,
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`
    })
  }

  const trackScrollDepth = (pageName: string, depth: number) => {
    useTrackEvent('scroll_depth', {
      event_category: 'Engagement',
      event_label: pageName,
      page_name: pageName,
      scroll_depth: depth,
      scroll_percentage: Math.round((depth / document.body.scrollHeight) * 100)
    })
  }

  const trackSectionView = (sectionName: string, pageName: string) => {
    useTrackEvent('section_view', {
      event_category: 'Engagement',
      event_label: sectionName,
      section_name: sectionName,
      page_name: pageName
    })
  }

  return {
    trackPageView,
    trackScrollDepth,
    trackSectionView
  }
}
