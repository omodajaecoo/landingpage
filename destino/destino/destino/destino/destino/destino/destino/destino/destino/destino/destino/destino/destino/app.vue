<template>
  <NuxtLayout name="base">
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig()
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
    }
  ],
  script: [
    {
      src: `${config.public.staticURL}/js/rem.js`
    }
  ]
})

  const nuxtApp = useNuxtApp();
  nuxtApp.hook("page:finish", () => {
    process.client && window.scrollTo(0, 0)
  });
</script>