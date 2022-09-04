import { Meta, Story } from '@storybook/vue3'
import { Counter } from '..'

export default {
  title: 'components/Counter',
  component: Counter,
} as Meta<typeof Counter>

const Template: Story<typeof Counter> = () => ({
  components: { Counter },
  template: '<Counter />',
})

export const Default = Template.bind({})
Default.storyName = 'インクリメントカウンター'
