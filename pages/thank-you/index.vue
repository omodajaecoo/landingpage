<template>
    <ThankYouBanner v-if="isValid" />
</template>

<script lang="ts" setup>
import ThankYouBanner from '~/components/thank-you/Banner.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isValid = ref(true)

if (import.meta.client) {
  const tyAccess = sessionStorage.getItem('tyAccess')
  
  const referrer = document.referrer || ''
  const isFromPowerApps = referrer.includes('powerappsportals.com')
  
  if (isFromPowerApps) {
    isValid.value = true
  } else if (tyAccess) {
    const timestamp = parseInt(tyAccess)
    const now = Date.now()
    const timeLimit = 15 * 1000
    sessionStorage.removeItem('tyAccess')
    if (now - timestamp > timeLimit) {
      router.replace('/')
    } else {
      isValid.value = true
    }
  } else {
    router.replace('/')
  }
}
</script>
<style lang='scss'>
</style>