<template>
    <ThankYouBanner v-if="isValid" />
</template>

<script lang="ts" setup>
import ThankYouBanner from '~/components/thank-you/Banner.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isValid = ref(false)

if (import.meta.client) {
  const tyAccess = sessionStorage.getItem('tyAccess')
  
  if (!tyAccess) {
    router.replace('/LP')
  } else {
    const timestamp = parseInt(tyAccess)
    const now = Date.now()
    const timeLimit = 15 * 1000
    sessionStorage.removeItem('tyAccess')
    if (now - timestamp > timeLimit) {
      router.replace('/LP')
    } else {
      isValid.value = true
    }
  }
}
</script>
<style lang='scss'>
</style>