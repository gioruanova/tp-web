// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pages1: resolve('src/pages', 'Contact.html'),
        pages2: resolve('src/pages', 'Products.html'),
        pages3: resolve('src/pages', 'About.html'),
      },
    },
  },
})