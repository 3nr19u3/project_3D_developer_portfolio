import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // TU_REPO_NAME '/' is for root deployment
  //build: { minify: false },
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    hmr: {
      overlay: true,
    },
  },
})
