import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        // Optimisations pour le chunking
        manualChunks: {
          vendor: ['vue', 'vue-router', 'pinia'],
          three: ['three'],
          utils: ['gsap', 'marked', '@vueuse/core']
        }
      }
    }
  }
})
