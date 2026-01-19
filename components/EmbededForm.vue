<template>
  <div class="iframe-container" :class="containerClass">
    <iframe
      v-if="url"
      :src="url"
      class="iframe"
      :class="iframeClass"
      :allowfullscreen="allowFullscreen"
      :loading="loading"
    />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  url: string;
  containerClass?: string;
  iframeClass?: string;
  allowFullscreen?: boolean;
  loading?: 'lazy' | 'eager';
}

withDefaults(defineProps<Props>(), {
  containerClass: '',
  iframeClass: '',
  allowFullscreen: true,
  loading: 'lazy'
});
</script>

<style scoped>
.iframe-container {
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow: hidden;
}

.iframe {
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
