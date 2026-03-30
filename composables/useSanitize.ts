import DOMPurify from 'isomorphic-dompurify'

export const useSanitize = () => ({
  sanitizeHtml: (html: string) =>
    DOMPurify.sanitize(html, { USE_PROFILES: { html: true } }),
  sanitizeSvg: (svg: string) =>
    DOMPurify.sanitize(svg, { USE_PROFILES: { svg: true, svgFilters: true } })
})
