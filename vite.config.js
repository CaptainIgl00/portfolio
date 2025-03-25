import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        headers: {
          'Permissions-Policy': 'interest-cohort=()',
          'X-Frame-Options': 'DENY'
        }
      }
    }
  }
})
