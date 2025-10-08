<template>
  <NuxtLayout name="base">
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig()
  useHead({
    script: [
      {
        src: `${config.public.staticURL}/js/rem.js`
      },
      {
        src: `${config.public.staticURL}/unity/Build/433fc06e22c5a0c77cc7e1f7e8435f17.loader.js`
      }
    ]
  })

  const nuxtApp = useNuxtApp();
  nuxtApp.hook("page:finish", () => {
    process.client && window.scrollTo(0, 0)
  });
</script>