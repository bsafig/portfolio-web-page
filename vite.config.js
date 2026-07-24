import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Portfolio SPA. Builds to dist/, which publish.sh mirrors to the web root
// over FTP. base '/' because the site is served from the domain root.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    // Videos in public/ are copied as-is; keep the default asset inlining
    // threshold low so large media is never base64-embedded.
    assetsInlineLimit: 4096,
  },
})
