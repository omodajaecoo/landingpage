<template>
  <div class="h-full w-full bg-black">
    <video 
      ref="videoRef"
      class="w-full h-full object-cover" 
      autoplay
      loop 
      muted 
      playsinline="true"
      x5-playsinline="true" 
      webkit-playsinline="true" 
      x-webkit-airplay="allow"
      x5-video-player-type="h5" 
      x5-video-player-fullscreen="true"
      x5-video-ignore-metadata="true"
    >
      <source :src="videoUrl">
    </video>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    videoUrl: string;
  }>();

  const videoRef = ref<HTMLVideoElement>();

  const handlePlay = () => {
    if (!videoRef.value) return;
    console.log('start video play...')
    // videoRef.value.play();
    videoRef.value.load()
  }

  watch(
    () => props.videoUrl,
    _ => handlePlay(),
    {
      immediate: false
    }
  )

  onDeactivated(() => {
    console.log('video inactive..')
    if (!videoRef.value) return;
    videoRef.value.pause();
  })
  onActivated(() => {
    console.log('video active..')
    if (!videoRef.value) return;
    videoRef.value.play();
  })
</script>
<style scoped lang='scss'>
</style>