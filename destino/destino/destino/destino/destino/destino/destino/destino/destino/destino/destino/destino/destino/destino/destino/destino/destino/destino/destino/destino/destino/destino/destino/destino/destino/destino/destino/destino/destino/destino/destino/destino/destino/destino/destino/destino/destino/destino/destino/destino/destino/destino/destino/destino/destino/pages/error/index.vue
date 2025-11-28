<template>
   <error :content="content" />
</template>
<script setup>
  import error from "~/components/error"
  const content = ref({
    img: 'error/500',
    title: 'Something went wrong...'
  })
</script>