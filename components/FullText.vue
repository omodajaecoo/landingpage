<template>
  <div
    ref="sectionDOM"
    class="text-box"
    :class="style"
    :style="{ backgroundImage: `url(/images/${imgUrl})` }"
  >
    <div
      v-if="text.top?.title"
      class="text-box-title"
      v-html="text.top?.title"
      v-animate="{
        effect: 'fadeInUp',
        once: true,
      }"
    ></div>
    <div
      v-if="text.top?.desc"
      class="text-box-desc"
      v-html="text.top?.desc"
      v-animate="{
        effect: 'fadeInUp',
        once: true,
      }"
      style="animation-delay: 0.3s"
    ></div>
    <div
      v-if="bottomList"
      class="text-box-bottom"
      v-animate="{
        effect: 'fadeInUp',
        once: true,
      }"
    >
      <div
        v-for="(item, index) in bottomList"
        :key="index"
        class="text-box-bottom-item"
      >
        <div
          v-for="(txt, idx) in item"
          :key="idx"
          class="text-box-bottom-text"
          v-html="txt"
        ></div>
        <!-- <template v-if="style === 'p2' || style === 'h2'">
          <div class="text-box-bottom-text" v-html="item[0]"></div>
          <div class="text-box-bottom-text" v-if="isOpen">
            <vue-count-to
              class="num"
              :end="parseInt(item[1])"
              :autoPlay="true"
              :duration="1500"
            />{{ item[2] }}
          </div>
        </template>
        <template v-else>
          <div
            v-for="(txt, idx) in item"
            :key="idx"
            class="text-box-bottom-text"
            v-html="txt"
          ></div>
        </template> -->
      </div>
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
}
interface PageData {
  ispc: boolean;
  imgUrl: string;
  style?: string;
  text?: {
    top?: BoxItemData;
    leftTop?: BoxItemData;
    rightTop?: BoxItemData;
    leftBottom?: BoxItemData;
    rightBottom?: BoxItemData;
  };
  bottomList?: string[][];
  horizontal?: BoxItemData[][];
}

const props = withDefaults(defineProps<PageData>(), {
  ispc: true,
  imgUrl: "",
  style: "",
  text: () => ({}),
});

const isOpen = ref(false);
const sectionDOM = ref<HTMLDivElement | null>(null);
const observers = ref<IntersectionObserver | null>(null);

function setupObservers() {
  // 清除之前的观察器
  observers.value?.disconnect?.();
  observers.value = null;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
          isOpen.value = true;
        }
      });
    },
    { threshold: 0.6 }
  );

  observer.observe(sectionDOM.value!);
  observers.value = observer;
}

onMounted(() => {
  setupObservers();
});

onUnmounted(() => {
  // 清除所有观察器
  observers.value?.disconnect?.();
});
</script>

<style lang="scss">
.object-cover {
  object-fit: cover;
}
.select-none {
  user-select: none;
}
</style>
<style lang="scss" scoped>
.text-box {
  position: relative;
  font-family: "MiSans";
  overflow: hidden;
  color: #fff;
  padding: calc(150 / 1920 * 100vw) 0;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;

  &-title {
    font-size: calc(60 / 1920 * 100vw);
    line-height: calc(84 / 1920 * 100vw);
    font-weight: 380;
    font-weight: 900;
    text-transform: uppercase;
  }
  &-desc {
    width: calc(1000 / 1920 * 100vw);
    margin: calc(32 / 1920 * 100vw) auto 0;
    color: rgba(255, 255, 255, 0.7);
    font-size: calc(22 / 1920 * 100vw);
    line-height: calc(30 / 1920 * 100vw);
    font-weight: 250;
  }

  &-bottom {
    position: absolute;
    left: 50%;
    bottom: calc(120 / 1920 * 100vw);
    display: flex;
    width: calc(1408 / 1920 * 100vw);
    gap: calc(120 / 1920 * 100vw);
    margin-left: calc(-1408 / 2 / 1920 * 100vw);

    &-item {
      flex: 1;
      flex-shrink: 0;
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      justify-content: center;
      /* width: calc(314 / 1920 * 100vw); */
      height: calc(155 / 1920 * 100vw);
    }
  }

  &.p2 {
    height: 100%;
    .text-box {
      &-bottom {
        &-item {
          width: 100%;
          height: calc(155 / 1920 * 100vw);
        }
        &-text {
          &:nth-of-type(1) {
            width: 100%;
            font-size: calc(50 / 1920 * 100vw);
            line-height: calc(57 / 1920 * 100vw);
            font-family: Arial;
            font-weight: 700;
          }
          &:nth-of-type(2),
          &:nth-of-type(3) {
            color: rgba(255, 255, 255, 0.6);
            font-size: calc(26 / 1920 * 100vw);
            line-height: calc(40 / 1920 * 100vw);
            font-weight: 250;
          }
          &:nth-of-type(2) {
            margin-top: calc(18 / 1920 * 100vw);
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1023px) {
  .text-box {
    height: 100svh;
    padding: calc(234 / 750 * 100vw) 0 0;

    &-title {
      font-size: calc(48 / 750 * 100vw);
      line-height: calc(68 / 750 * 100vw);
    }
    &-desc {
      width: 100%;
      padding: 0 calc(40 / 750 * 100vw);
      color: rgba(255, 255, 255, 0.5);
      margin-top: calc(32 / 750 * 100vw);
      font-size: calc(24 / 750 * 100vw);
      line-height: calc(30 / 750 * 100vw);
    }
    &.h2 {
      .text-box {
        &-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          margin: 0 auto;
          width: 100%;
          gap: 0;
          flex-wrap: wrap;
          &-item {
            flex-grow: 0;
            flex-basis: auto;
            flex-shrink: 0;
            align-content: start;
            width: 50vw;
            height: calc(218 / 750 * 100vw);
          }
          &-text {
            width: 100%;
            &:nth-of-type(1) {
              font-size: calc(50 / 750 * 100vw);
              line-height: calc(57 / 750 * 100vw);
              font-family: Arial;
              font-weight: 700;
            }
            &:nth-of-type(2),
            &:nth-of-type(3) {
              color: rgba(255, 255, 255, 0.6);
              font-size: calc(26 / 750 * 100vw);
              line-height: calc(40 / 750 * 100vw);
            }
            &:nth-of-type(2) {
              margin-top: calc(18 / 750 * 100vw);
            }
          }
        }
      }
    }
  }
}
</style>
