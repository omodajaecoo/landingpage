<template>
  <ClientOnly>
    <div class="h-full w-full interior-wrap" ref="container"></div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { Viewer } from '@photo-sphere-viewer/core';
import { EquirectangularTilesAdapter } from '@photo-sphere-viewer/equirectangular-tiles-adapter';

defineOptions({
  name: 'BaseInterior'
})

const container = ref(null);
let viewer = null;
const config = useRuntimeConfig()

onMounted(async () => {
  console.log('interior init...')
  await nextTick();
  if (!container.value) return;

  console.log('PhotoSphereViewer init...')
  viewer = new Viewer({
    container: container.value,
    adapter: EquirectangularTilesAdapter,
    defaultPitch: '-25deg', // 俯仰角
    defaultYaw: '6deg', // 水平角
    navbar: false,
    mousewheel: false,
    defaultZoomLvl: 0,
    panorama: {
      levels: [
        {
          width: 2048,
          cols: 4,
          rows: 2,
          zoomRange: [0, 30]
        },
        {
          width: 4096,
          cols: 8,
          rows: 4,
          zoomRange: [30, 60]
        },
        {
          width: 8192,
          cols: 16,
          rows: 8,
          zoomRange: [60, 100]
        }
      ],
      tileUrl: (col: number, row: number, levels: number) => {
        var levelStr = "";
        if (levels == 0) {
          levelStr = "0.25";
        } else if (levels == 1) {
          levelStr = "0.5";
        } else if (levels == 2) {
          levelStr = "1.0";
        }
        const num = row * 16 + col;
        return `${config.public.staticURL}/images/interior/j8/res_${levelStr}_tile_${col}_${row}.jpg`;
      },
    },
  });
});
</script>
<style lang='scss'>
@import url(@photo-sphere-viewer/core/index.css);
</style>