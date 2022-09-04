import { app } from '@storybook/vue3'
import ChakraUIVuePlugin, {
  chakra,
  extendTheme,
  CReset,
} from '@chakra-ui/vue-next'
import { domElements } from '@chakra-ui/vue-system'

// Chakraの登録
app.use(ChakraUIVuePlugin, {
  extendTheme: extendTheme({}),
})
domElements.forEach(tag => {
  app.component(`chakra.${tag}`, chakra(tag))
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

/** {} */
export const decorators = [
  story => ({
    components: { CReset },
    template: `
      <CReset />
      <story />
    `,
  }),
]
