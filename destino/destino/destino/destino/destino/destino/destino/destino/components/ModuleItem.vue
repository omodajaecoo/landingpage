<template>
  <div class="module-item">
    <img v-if="ispc && bgUrl" loading="lazy" :src="bgUrl" class="full-banner" />
    <img
      v-if="!ispc && mbBgUrl"
      loading="lazy"
      :src="mbBgUrl"
      class="full-banner_mb"
    />
    <div
      ref="titleRef"
      class="bottom-title animate__animated animate__zoomIn"
      v-if="showTitle"
    >
      <span>{{ bottomTitle }}</span>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from "vue";

interface PageModuleInter {
  bgUrl?: string;
  mbBgUrl?: string;
  bottomTitle?: string;
  showTitle?: boolean;
}
const props = withDefaults(defineProps<PageModuleInter>(), {
  showTitle: false,
});
const { isMobile } = useDeviceType();
const ispc = computed(() => {
  return !isMobile.value;
});

const titleRef = ref<HTMLElement | null>(null);

// watch(
//     () => props.titleAnimFlag,
//     val => {
//         if (val) {
//             titleRef.value?.classList.add('animate__zoomIn');
//         }
//     }
// )
</script>

<style lang="scss" scoped>
.module-item {
  height: 100%;
  position: relative;
  overflow: hidden;
  .full-banner,
  .full-banner_mb {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: inherit;
    z-index: 10;
  }
  .bottom-title {
    position: absolute;
    bottom: 66px;
    width: 100%;
    text-align: center;
    font-size: 2.5vw;
    color: #fff;
    z-index: 100;
  }
}
@media screen and (max-width: 1024px) {
  .module-item {
    .bottom-title {
      font-size: 4.8vw;
      bottom: 19.733vw;
      text-align: center;
      span {
        display: inline-block;
        max-width: 75.4667vw;
      }
    }
  }
}
</style>
