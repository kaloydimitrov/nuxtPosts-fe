import path from 'path';

export default defineNuxtConfig({
  modules: [
    'nuxt-primevue'
  ],
  css: [
    '~/assets/css/main.css',
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css'
  ],
})