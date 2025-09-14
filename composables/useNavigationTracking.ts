export const useNavigationTracking = () => {
  const trackPageView = (pageName: string, pagePath: string) => {
    useTrackEvent('page_view', {
      event_category: 'Navigation',
      event_label: pageName,
      page_path: pagePath,
      page_title: pageName
    })
  }

  const trackNavigation = (from: string, to: string) => {
    useTrackEvent('navigation', {
      event_category: 'Navigation',
      event_label: `${from} -> ${to}`,
      from_page: from,
      to_page: to
    })
  }

  const trackTimeOnPage = (pageName: string, duration: number) => {
    useTrackEvent('time_on_page', {
      event_category: 'Engagement',
      event_label: pageName,
      page_name: pageName,
      duration: duration
    })
  }

  return {
    trackPageView,
    trackNavigation,
    trackTimeOnPage
  }
}
