<template>
  <div :class="containerClass" :style="containerStyle">
    <iframe
      v-if="url"
      :src="url"
      :width="width"
      :height="height"
      :frameborder="frameborder"
      :class="iframeClass"
      :style="iframeStyle"
      :allowfullscreen="allowFullscreen"
      :loading="loading"
    />
    <div v-else class="flex items-center justify-center p-8 bg-gray-100 rounded">
      <p class="text-gray-500">No se ha proporcionado una URL para el formulario</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { StyleValue } from 'vue';

interface Props {
  url: string;
  width?: string | number;
  height?: string | number;
  frameborder?: string | number;
  containerClass?: string;
  containerStyle?: StyleValue;
  iframeClass?: string;
  iframeStyle?: StyleValue;
  allowFullscreen?: boolean;
  loading?: 'lazy' | 'eager';
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '100%',
  frameborder: '0',
  containerClass: '',
  containerStyle: '',
  iframeClass: '',
  iframeStyle: '',
  allowFullscreen: true,
  loading: 'lazy'
});
</script>

<style scoped>
iframe {
  display: block;
}
</style>
