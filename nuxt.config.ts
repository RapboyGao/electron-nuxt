export default defineNuxtConfig({
  compatibilityDate: '2025-01-21',
  devtools: { enabled: true },
  
  srcDir: 'src/nuxt',
  
  app: {
    head: {
      title: 'Electron Nuxt',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Electron + Nuxt 4.x application' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  modules: [],
  
  vite: {
    build: {
      outDir: '.out/nuxt'
    }
  }
})
