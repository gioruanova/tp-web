// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve('src/pages', 'contact.html'),
        nested2: resolve('src/pages', 'About.html'),
        nested3: resolve('src/pages', 'Products.html'),
      },
    },
  },
})