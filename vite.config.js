// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve('pages', 'contact.html'),
        nested2: resolve('pages', 'About.html'),
        nested3: resolve('pages', 'Products.html'),
      },
    },
  },
})