<template>
    <ThankYouBanner v-if="isValid" />
</template>

<script lang="ts" setup>
import ThankYouBanner from '~/components/thank-you/Banner.vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const isValid = ref(false)

const tokenFromUrl = route.query.t as string

if (!tokenFromUrl) {
  router.replace('/LP')
} else if (import.meta.client) {
  const tokenFromStorage = sessionStorage.getItem('formToken')
  
  if (!tokenFromStorage || tokenFromStorage !== tokenFromUrl) {
    router.replace('/LP')
  } else {
    sessionStorage.removeItem('formToken')
    const timestamp = parseInt(tokenFromUrl)
    const now = Date.now()
    const timeLimit = 15 * 1000
    
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