<template>
  <img 
    :src="imgUrl" 
    :loading="props.loading" 
    :alt="props.alt"
    class="select-none"
  />
</template>

<script lang="ts" setup>
  const props = withDefaults(defineProps<{
    src: string;
    loading?: 'lazy' | 'eager';
    alt?: string;
  }>(), {
    src: '',
    loading: 'lazy',
    alt: ''
  })
  const config = useRuntimeConfig()
  const imgUrl = computed(() => {
    const src = props.src || ''
    return `${config.public.staticURL}/images${src.startsWith('/') ? '' : '/'}${src}`
  })
</script>
<style scoped lang='scss'>

</style>
