import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vitest/config'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import FullReload from 'vite-plugin-full-reload'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss(), FullReload(['/javascript', '/typescript'])],
  test: {
    environment: 'jsdom',
    globals: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
      '@v': fileURLToPath(new URL('./vue', import.meta.url)),
      // '@r': fileURLToPath(new URL('./react-src', import.meta.url)),
    },
  },
})
