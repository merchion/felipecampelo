import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    host: true,
    strictPort: true,
    hmr: {
      port: 5174,
    },
    watch: {
      usePolling: true,
    },
  },
  plugins: [react()],
})
