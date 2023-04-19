// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve('src/pages/', 'Contact.html'),
        products: resolve('src/pages/', 'Products.html'),
        about: resolve('src/pages/', 'About.html'),
      },
    },
  },
})