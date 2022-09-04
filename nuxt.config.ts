import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/',
  components: false,
  imports: {
    autoImport: false,
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        target: 'ES2018',
        module: 'esnext',
        paths: {
          '@/*': ['src/*'],
        },
      },
    },
  },
})
