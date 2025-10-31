<template>
  <div class="fa-contain relative w-full overflow-hidden" :style="containerStyle">

    <img
      v-if="showPoster && posterSrc"
      :src="posterSrc"
      :alt="alt"
      class="block w-full h-full poster-img"
      :style="imageStyle"
      decoding="async"
      fetchpriority="high"
      loading="eager"
    />

    <video
      v-if="videoSrc"
      ref="videoEl"
      class="block w-full h-full video-player"
      :class="{ 'video-hidden': !videoReady }"
      :style="videoStyle"
      autoplay
      muted
      playsinline
      :loop="loop"
      @loadedmetadata="onMeta"
      @canplay="onCanPlay"
      @playing="onPlaying"
      @error="onError"
    >
      <source :src="videoSrc" type="video/mp4" />
    </video>

    <div v-if="hasOverlay" class="overlay absolute inset-0 flex flex-col justify-between pointer-events-none">
      <div class="p-4">
        <slot name="title" />
      </div>
      <div class="p-4">
        <slot name="bottomSlot" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, getCurrentInstance } from 'vue'
const props = defineProps({
  content: {
    type: Object,
    default: () => ({
      img: '', 
      videoUrl: '', 
      type: 'video'
    })
  },
  ext: { type: String, default: 'jpg' },
  alt: { type: String, default: 'media' },
  loop: { type: Boolean, default: true },
  aspectRatio: { type: String, default: '' },
  maxHeight: { type: String, default: '' },
  objectFit: { type: String, default: 'cover' }
})
const config = useRuntimeConfig()
const videoEl = ref<HTMLVideoElement | null>(null)
const showPoster = ref(true)
const videoReady = ref(false)
const videoDimensions = ref<{width:number;height:number}|null>(null)

// Construcción de rutas
const basePath = computed(() => `${config.public.staticURL}/images/`)
const posterSrc = computed(() => props.content.img ? `${basePath.value}${props.content.img}.${props.ext}` : '')
const videoSrc = computed(() => props.content.videoUrl ? `${basePath.value}${props.content.videoUrl}` : '')

const hasOverlay = computed(() => !!(Object.keys((getCurrentInstance()?.slots||{})).length))

const imageStyle = computed(() => ({ objectFit: props.objectFit as 'contain' | 'cover' | 'fill' | 'scale-down' | 'none' }))
const videoStyle = computed(() => ({ objectFit: props.objectFit as 'contain' | 'cover' | 'fill' | 'scale-down' | 'none' }))

const onCanPlay = () => {
  // El video está listo para reproducir
  if (!videoReady.value) {
    videoReady.value = true
    // Intenta reproducir
    nextTick(() => {
      videoEl.value?.play().catch(e => {
        console.warn('Video autoplay prevented:', e)
      })
    })
  }
}

const onPlaying = () => {
  // El video está realmente reproduciéndose
  showPoster.value = false
}

const onError = (e: Event) => {
  console.error('Video load error:', e)
  showPoster.value = true
  videoReady.value = false
}

const onMeta = () => {
  if (videoEl.value) {
    videoDimensions.value = {
      width: videoEl.value.videoWidth,
      height: videoEl.value.videoHeight
    }
  }
}
const containerStyle = computed(() => {
  const style: Record<string, any> = {}
  
  if (props.maxHeight) {
    style.maxHeight = props.maxHeight
  }
  
  if (videoDimensions.value && videoDimensions.value.width && videoDimensions.value.height) {
    style.aspectRatio = `${videoDimensions.value.width} / ${videoDimensions.value.height}`
    style.width = '100%'
  } else if (props.aspectRatio) {
    style.aspectRatio = props.aspectRatio
    style.width = '100%'
  }
  
  return style
})
onMounted(() => {
  if(!videoSrc.value) {
    videoReady.value = false
    showPoster.value = true
    return
  }
  
  if (videoEl.value) {
    videoEl.value.load()
  }
})
</script>

<style scoped lang="scss">
.fa-contain { 
  background:#0d0e0e; 
  display: flex;
  align-items: center;
  justify-content: center;
}
video, img { 
  transition: opacity .4s ease;
  max-width: 100%;
  max-height: 100%;
}
.poster-img { position: absolute; z-index: 2; }
.video-player { position: absolute; z-index: 1; }
.video-hidden { opacity: 0; pointer-events: none; }
.overlay { color:#fff; z-index: 10; }
</style>
