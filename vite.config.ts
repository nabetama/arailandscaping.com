import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ssg from '@hono/vite-dev-server'

export default defineConfig(() => ({
  base: '/arailandscaping.com/',
  plugins: [react(), ssg()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}))