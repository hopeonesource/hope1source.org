import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

/**
 * Third site. Its own base and its own outDir, so the current Pages
 * build at dist/ stays untouched. public/ is shared read-only.
 */
const root = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig(({ command }) => {
  const base = process.env.VITE_BASE || (command === 'serve' ? '/v4/' : '/hope1source.org/v4/')

  return {
    root,
    base,
    publicDir: fileURLToPath(new URL('../public', import.meta.url)),
    plugins: [react()],
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
