import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { aliases, pages } from './src/content/routes.js'

/**
 * Third site. Its own base and its own outDir, so the current Pages
 * build at dist/ stays untouched. public/ is shared read-only.
 */
const root = fileURLToPath(new URL('.', import.meta.url))

// Vite's SPA preview fallback otherwise returns homepage HTML for /contact,
// even when contact/index.html exists. Serve the same per-route HTML a static
// production host serves, while keeping the development server as an SPA.
function staticPagePreview(base) {
  const knownRoutes = new Set([...pages.map((page) => page.path), ...aliases.map(([from]) => from)])
  return {
    name: 'v4-static-page-preview',
    configurePreviewServer(server) {
      server.middlewares.use((request, response, next) => {
        if (!['GET', 'HEAD'].includes(request.method)) return next()
        const url = new URL(request.url, 'http://localhost')
        if (!url.pathname.startsWith(base)) return next()
        let relative
        try {
          relative = decodeURIComponent(url.pathname.slice(base.length)).replace(/\/+$/, '')
        } catch {
          return next()
        }
        if (knownRoutes.has(`/${relative}`)) {
          request.url = `${base}${relative ? `${relative}/` : ''}index.html${url.search}`
          return next()
        }
        const output = path.resolve(server.config.root, server.config.build.outDir)
        const asset = path.resolve(output, relative)
        if (asset.startsWith(`${output}${path.sep}`) && existsSync(asset)) return next()
        const notFound = path.join(output, '404.html')
        if (!existsSync(notFound)) return next()
        response.statusCode = 404
        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        response.end(request.method === 'HEAD' ? undefined : readFileSync(notFound))
      })
    },
  }
}

export default defineConfig(({ command, isPreview }) => {
  const base = process.env.VITE_BASE || (command === 'serve' ? '/v4/' : '/hope1source.org/v4/')

  return {
    root,
    base,
    appType: isPreview ? 'mpa' : 'spa',
    publicDir: fileURLToPath(new URL('../public', import.meta.url)),
    plugins: [react(), staticPagePreview(base)],
    build: {
      outDir: fileURLToPath(new URL('../dist/v4', import.meta.url)),
      emptyOutDir: true,
    },
    server: {
      host: true,
      port: 5175,
    },
    preview: {
      host: true,
      port: 4175,
    },
  }
})
