import ChakraUIVuePlugin, { chakra, extendTheme } from '@chakra-ui/vue-next'
import { domElements } from '@chakra-ui/vue-system'
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(ChakraUIVuePlugin, {
    extendTheme: extendTheme(
      {
        colors: {
          black: '#222',
          white: '#fff',
        },
      },
      {
        ...extendTheme({}),
        // colors: {
        //   black: '#222',
        //   white: '#fff'
        // },
      },
    ),
  })
  // chakra.divなどを書けるようにする
  domElements.forEach(tag => {
    nuxtApp.vueApp.component(`chakra.${tag}`, chakra(tag))
  })
})
