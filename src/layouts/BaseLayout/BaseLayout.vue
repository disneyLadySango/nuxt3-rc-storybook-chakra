<template>
  <CReset />
  <header>ここにヘッダー</header>
  <main>
    <slot />
  </main>
  <footer>ここにフッター</footer>
</template>

<script lang="ts">
import { CReset } from '@chakra-ui/vue-next'

export default {
  components: {
    CReset,
  },
}
</script>
