<template>
   <error :content="content" />
</template>
<script setup>
  import error from "~/components/error"
  const content = ref({
    img: 'error/404',
    title: 'Page not found...'
  })
</script>