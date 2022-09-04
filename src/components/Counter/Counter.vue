<template>
  <chakra.div display="flex" gap="12" align-items="center">
    <chakra.p font-size="20" font-weight="bold"
      >件数: {{ state.count }}</chakra.p
    >
    <CButton
      @click="increment"
      type="button"
      mt="1"
      color="white"
      background-color="blue"
      :_hover="{}"
      :_active="{
        backgroundColor: 'blue.500',
        outline: 'none',
      }"
    >
      increment
    </CButton>
  </chakra.div>
</template>

<script lang="ts">
import { reactive } from 'vue'
import { CButton } from '@chakra-ui/vue-next'

export default {
  name: 'Counter',
  components: {
    CButton,
  },
  setup() {
    const state = reactive({ count: 0 })

    const increment = () => {
      state.count++
    }

    return {
      state,
      increment,
    }
  },
}
</script>
