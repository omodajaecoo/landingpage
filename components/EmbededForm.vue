<template>
  <div :class="containerClass" :style="containerStyle">
    <iframe
      v-if="url"
      :src="iframeSrc"
      :width="width"
      :height="height"
      :frameborder="frameborder"
      :class="iframeClass"
      :style="iframeStyle"
      :allowfullscreen="allowFullscreen"
      :loading="loading"
      data-powerapps-form="true"
      scrolling="yes"
    />
    <div v-else class="flex items-center justify-center p-8 bg-gray-100 rounded">
      <p class="text-gray-500">No se ha proporcionado una URL para el formulario</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import type { StyleValue } from 'vue';
import { useRoute } from 'vue-router';

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
  redirectIos?: boolean;
  forwardParams?: boolean;
  paramMode?: 'keep' | 'overwrite';
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
  loading: 'lazy',
  redirectIos: true,
  forwardParams: true,
  paramMode: 'keep'
});

const route = useRoute();

function appendParamsToUrl(url: string, params: URLSearchParams): string {
  if (!props.forwardParams) return url;

  var hasParams = false;
  params.forEach(() => {
    hasParams = true;
  });
  if (!hasParams) return url;

  try {
    const srcUrl = new URL(url);
    const merged = new URLSearchParams(srcUrl.search);

    params.forEach((value, key) => {
      if (props.paramMode === 'overwrite' || !merged.has(key)) {
        merged.set(key, value);
      }
    });

    srcUrl.search = merged.toString();
    return srcUrl.toString();
  } catch {
    return url;
  }
}

function getRouteParams(): URLSearchParams {
  const params = new URLSearchParams();

  Object.entries(route.query).forEach(([key, value]) => {
    const values = Array.isArray(value) ? value : [value];

    values.forEach((item) => {
      const paramValue = (item == null ? '' : String(item)).trim();
      if (paramValue !== '') params.append(key, paramValue);
    });
  });

  return params;
}

const iframeSrc = computed(() => appendParamsToUrl(props.url, getRouteParams()));

function isIOSDevice(): boolean {
  const ua = navigator.userAgent || "";
  const isIOS = /iPad|iPhone|iPod/.test(ua);
  const isIPadOS = !!(ua.includes("Mac") && navigator.maxTouchPoints && navigator.maxTouchPoints > 1);
  return isIOS || isIPadOS;
}

function getLandingParams(): string {
  if (window.location.search && window.location.search.length > 1) {
    try { 
      localStorage.setItem("landingParams", window.location.search); 
    } catch {
      return window.location.search;
    }
    return window.location.search;
  }
  try {
    const saved = localStorage.getItem("landingParams");
    if (saved && saved.length > 1) return saved;
  } catch {
    return "";
  }
  return "";
}

function redirectIOS(): void {
  if (!props.redirectIos) return;
  if (!isIOSDevice()) return;
  if (!props.url) return;
  const params = getLandingParams();
  if (window.location.href.indexOf("powerappsportals.com") !== -1) return;

  window.location.href = params
    ? appendParamsToUrl(props.url, new URLSearchParams(params))
    : iframeSrc.value;
}

onMounted(() => {
  redirectIOS();
});
</script>

<style scoped>
iframe {
  display: block;
}
</style>
