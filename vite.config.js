import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * GitHub project Pages is served from /hope1source.org/.
 * A custom domain (hope1source.org) and Cloudflare Pages use /.
 *
 * `vite` / `vite preview` default the base to / so local URLs stay clean.
 * `vite build` defaults to the project-Pages path unless VITE_BASE is set.
 */
export default defineConfig(({ command }) => {
  const devBase = '/'
  const pagesBase = '/hope1source.org/'
  const base = process.env.VITE_BASE || (command === 'serve' ? devBase : pagesBase)

  return {
    base,
    plugins: [react()],
    server: {
      host: true,
      port: 5173,
    },
    preview: {
      host: true,
      port: 4173,
    },
  }
})
