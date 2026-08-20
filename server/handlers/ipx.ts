import { fileURLToPath } from 'node:url'
import { createIPX, createIPXFetchHandler, parseIPXURL, ipxFSStorage, ipxHttpStorage } from 'ipx'
import { lazyEventHandler, fromWebHandler } from 'h3'
import { isAbsolute } from 'pathe'
import { useRuntimeConfig } from '#imports'

// Reprise de `@nuxt/image/runtime/server/routes/_ipx` avec une seule différence :
// le handler fetch d'IPX est branché via `fromWebHandler` au lieu du handler Node
// (`createIPXNodeHandler` + `fromNodeMiddleware`). Le handler Node d'ipx 4 passe par
// `srvx/node`, qui ne termine jamais la réponse quand la requête vient de
// `node-mock-http` — c'est-à-dire pendant le prerender Nitro et le SSR interne.
// Résultat sans ce correctif : chaque route `/_ipx/**` crawlée bloque le prerender,
// le process sort silencieusement et `.output/public` sort sans `_nuxt/`.
export default lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {}

  const fsDir = opts?.fs?.dir
    ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir: string) =>
        isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, import.meta.url))
      )
    : undefined
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : undefined
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : undefined

  if (!fsStorage && !httpStorage) {
    throw new Error('IPX storage is not configured!')
  }

  const baseURL = (opts.baseURL || '/_ipx').replace(/\/+$/, '')
  const ipx = createIPX({ ...opts, storage: fsStorage || httpStorage, httpStorage })

  const fetchHandler = createIPXFetchHandler(ipx, {
    parseURL(url: string) {
      const parsedURL = new URL(url)
      let pathname = parsedURL.pathname
      if (baseURL && (pathname === baseURL || pathname.startsWith(`${baseURL}/`))) {
        pathname = pathname.slice(baseURL.length) || '/'
      }
      return parseIPXURL(parsedURL.origin + pathname + parsedURL.search)
    }
  })

  return fromWebHandler(fetchHandler)
})
