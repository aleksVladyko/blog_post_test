import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/blog_post_test/',
  server: {
    watch: {
      usePolling: true,
    },
    host: '0.0.0.0',
    strictPort: true,
    port: 3000,
  },
})
