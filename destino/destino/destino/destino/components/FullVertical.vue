<template>
  <div ref="verticalRef" class="vertical-box" :class="style">
    <img
      :src="`/images/${imgUrl}`"
      class="vertical-bg w-full h-full object-cover select-none"
      :class="[{ active: 1 === currentIdx }]"
      loading="lazy"
    />
    <div
      v-for="(pageItem, idx) in vertical"
      :key="idx"
      class="vertical-text"
      :class="[{ active: idx === currentIdx }]"
    >
      <FullText
        :ispc="ispc"
        :imgUrl="''"
        :style="style"
        :text="pageItem.text"
        :bottom-list="pageItem.countList"
      />
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
interface BoxItemData {
  title?: string;
  desc?: string;
  style?: string;
  icon?: string;
  countList?: string[][];
}
interface TextItemData {
  top?: BoxItemData;
  bottom?: BoxItemData;
  leftTop?: BoxItemData;
  rightTop?: BoxItemData;
  leftBottom?: BoxItemData;
  rightBottom?: BoxItemData;
}
interface PageData {
  ispc: boolean;
  imgUrl: string;
  videoUrl?: string;
  style?: string;
  text?: TextItemData;
  bottomList?: string[][];
  countList?: string[][];
  galleryList?: string[];
  vertical?: {
    text?: TextItemData;
    countList?: string[][];
  }[];
}

const props = withDefaults(defineProps<PageData>(), {
  ispc: true,
  imgUrl: "",
  style: "",
  vertical: () => [],
});

const verticalRef = ref<HTMLDivElement | null>(null);

let flag = false;
const currentIdx = ref(0);
let animationFrameId = 0;

function linearScrollTo(targetY, duration = 300) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function scrollStep(timestamp) {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = progress; // 线性变化

    window.scrollTo(0, startY + distance * easeProgress);

    if (progress < 1) {
      window.requestAnimationFrame(scrollStep);
    }
  }

  window.cancelAnimationFrame(animationFrameId);
  animationFrameId = window.requestAnimationFrame(scrollStep);
}

let startY;
const handleTouchstart = (event) => {
  startY = event.touches[0].clientY;
};

const handleScroll = (direction, event) => {
  const element = verticalRef.value;

  if (!element) return;
  if (flag) {
    event.preventDefault();
    return;
  }

  const rect = element.getBoundingClientRect();

  if (Math.abs(rect.top) >= rect.height) return;

  if (direction === "down") {
    // 向下滚动检测上边距
    if (
      Math.abs(rect.top) <= 10 &&
      currentIdx.value < props.vertical.length - 1
    ) {
      flag = true;
      event.preventDefault();
      currentIdx.value++;
      setTimeout(() => {
        flag = false;
      }, 500);
    } else if (
      rect.top <= rect.height / 2 &&
      currentIdx.value < props.vertical.length - 1
    ) {
      flag = true;
      event.preventDefault();
      setTimeout(() => {
        flag = false;
      }, 500);
      linearScrollTo(window.scrollY + rect.top);
    }
  } else {
    if (Math.abs(rect.top) < 10 && currentIdx.value > 0) {
      flag = true;
      event.preventDefault();
      currentIdx.value--;
      setTimeout(() => {
        flag = false;
      }, 500);
    } else if (rect.top >= -(rect.height / 2) && currentIdx.value > 0) {
      flag = true;
      event.preventDefault();
      setTimeout(() => {
        flag = false;
      }, 500);
      linearScrollTo(window.scrollY + rect.top);
    }
  }
};

const handleWheel = (event) => {
  handleScroll(event.deltaY > 0 ? "down" : "up", event);
};

const handleTouchmove = (event) => {
  handleScroll(event.touches[0].clientY - startY < 0 ? "down" : "up", event);
};

onMounted(() => {
  if (props.ispc) {
    window.addEventListener("wheel", handleWheel, { passive: false });
  } else {
    document.body.addEventListener("touchstart", handleTouchstart, {
      passive: false,
    });
    document.body.addEventListener("touchmove", handleTouchmove, {
      passive: false,
    });
  }
});

onUnmounted(() => {
  window.removeEventListener("wheel", handleWheel);
  document.body.removeEventListener("touchstart", handleTouchstart);
  document.body.removeEventListener("touchmove", handleTouchmove);
  window.cancelAnimationFrame(animationFrameId);
});
</script>

<style lang="scss" scoped>
.vertical-box {
  position: relative;
  font-family: "MiSans";
  height: 100vh;
  overflow: hidden;
}
.vertical-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s;

  &.active {
    opacity: 1;
  }
}
.vertical-bg {
  &.active {
    filter: blur(10px);
  }
}
@media screen and (max-width: 1023px) {
  .vertical-bg {
    &.active {
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(15px);
    }
  }
}
</style>
