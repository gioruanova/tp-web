// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'src/pages/Contact.html'),
        products: resolve(__dirname, 'src/pages/Products.html'),
        about: resolve(__dirname, 'src/pages/About.html'),
      },
    },
  },
})