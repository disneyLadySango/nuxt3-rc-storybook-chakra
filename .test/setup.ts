import { setGlobalConfig } from '@storybook/testing-vue'
import * as globalStorybookConfig from '../.storybook/preview'
setGlobalConfig(globalStorybookConfig)
console.log('CALL')
