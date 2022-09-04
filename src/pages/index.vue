<template>
  <BaseLayout>
    <HelloWorld />
    <Counter />
    <SampleChakraCard />
  </BaseLayout>
</template>

<script lang="ts">
import { BaseLayout } from '@/layouts/BaseLayout'
import { HelloWorld } from '@/components/HelloWorld'
import { Counter } from '@/components/Counter'
import { SampleChakraCard } from '@/components/SampleChakraCard'

export default {
  components: {
    BaseLayout,
    HelloWorld,
    Counter,
    SampleChakraCard,
  },
}
</script>
