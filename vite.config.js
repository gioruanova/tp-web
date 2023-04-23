// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve('pages', 'Contact.html'),
        nested2: resolve('pages', 'About.html'),
        nested3: resolve('pages', 'Products.html'),
        nested4: resolve('pages', 'Login.html'),
        nested5: resolve(__dirname, '404.html'),
      },
    },
  },
})