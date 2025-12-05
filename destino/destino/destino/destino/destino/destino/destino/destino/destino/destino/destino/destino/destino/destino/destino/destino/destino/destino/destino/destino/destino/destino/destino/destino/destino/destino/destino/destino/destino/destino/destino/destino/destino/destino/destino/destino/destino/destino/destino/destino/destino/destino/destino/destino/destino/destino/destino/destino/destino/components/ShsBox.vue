<template>
  <div class="shs-box" :class="style" v-scroll>
    <BaseImg
      v-if="style === 'p1' || style === 'h1'"
      :src="imgUrl"
      class="w-full h-full object-cover shs-img"
      v-animate="{
        effect: 'zoomInCenter',
        immediate: true,
      }"
    />
    <BaseImg :src="imgUrl" class="w-full h-full object-cover shs-img" />
    <div v-if="top" class="shs-top" :class="top.style || ''">
      <div
        v-if="top.title"
        class="shs-top-title"
        v-html="top.title"
        v-animate="{
          effect: 'fadeInUp',
          once: false,
        }"
      ></div>
      <div
        v-if="top.desc"
        class="shs-top-desc"
        v-html="top.desc"
        v-animate="{
          effect: 'fadeInUp',
          once: false,
        }"
        style="animation-delay: 0.3s"
      ></div>
    </div>
    <div
      v-if="leftBottom"
      class="shs-leftBottom"
      :class="leftBottom.style || ''"
    >
      <div
        v-if="leftBottom.title"
        class="shs-leftBottom-title"
        v-html="leftBottom.title"
        v-animate="{
          effect: 'fadeInUp',
          once: false,
        }"
      ></div>
    </div>
    <!-- h2为特殊格式 -->
    <div
      v-if="bottom && bottom.style !== 'h2'"
      class="shs-bottom"
      :class="bottom.style || ''"
      v-animate="{
        effect: 'fadeInUp',
        once: false,
      }"
    >
      <div
        v-for="(bottomItem, bottomItemIndex) in bottom.list"
        :key="bottomItemIndex"
        class="shs-bottom-item"
      >
        <div
          v-if="bottomItem.title"
          class="shs-bottom-title"
          v-html="bottomItem.title"
        ></div>
        <div
          v-if="bottomItem.desc"
          class="shs-bottom-desc"
          v-html="bottomItem.desc"
        ></div>
      </div>
    </div>
    <div
      v-else-if="bottom?.style === 'h2'"
      class="shs-bottom shs-bottom-swiper"
      :class="bottom.style || ''"
      v-animate="{
        effect: 'fadeInUp',
        once: false,
      }"
    >
      <swiper
        :loop="true"
        :slidesPerView="2"
        @swiper="handlePage3Swiper"
        @slide-change="handlePage3SlideChange"
      >
        <swiper-slide
          v-for="(bottomItem, bottomItemIndex) in bottom.list"
          :key="bottomItemIndex"
        >
          <div class="shs-bottom-slide">
            <div
              v-if="bottomItem.title"
              class="shs-bottom-title"
              v-html="bottomItem.title"
            ></div>
            <div
              v-if="bottomItem.desc"
              class="shs-bottom-desc"
              v-html="bottomItem.desc"
            ></div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="shs-bottom-pagination">
        <ShsSwiperPagination
          :length="bottom?.list?.length ?? 1"
          :active-index="activeIndex3"
          @change="handlePage3Change"
        />
      </div>
    </div>
    <div
      v-if="horizontal && ispc"
      class="shs-horizontal"
      :class="horizontal.style || ''"
    >
      <div
        class="shs-horizontal-left"
        v-html="horizontal.leftTitle"
        v-animate="{
          effect: ispc ? 'slideRight' : 'slideUp',
          once: false,
        }"
      ></div>
      <div
        class="shs-horizontal-right"
        v-animate="{
          effect: ispc ? 'fadeIn' : 'slideUp',
          once: false,
        }"
        style="animation-delay: 0.3s"
      >
        <video
          class="w-full h-full"
          loop
          muted
          autoplay
          :poster="horizontal.rightUrl"
          playsinline="true"
          x5-playsinline="true"
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="true"
          x5-video-ignore-metadata="true"
        >
          <source :src="config?.public?.staticURL + horizontal.rightUrl" />
        </video>
      </div>
    </div>
    <div
      v-else-if="horizontal"
      class="shs-horizontal"
      :class="horizontal.style || ''"
    >
      <div
        class="shs-horizontal-right"
        v-animate="{
          effect: ispc ? 'fadeIn' : 'slideUp',
          once: false,
        }"
      >
        <video
          class="w-full h-full"
          loop
          muted
          autoplay
          :poster="horizontal.rightUrl"
          playsinline="true"
          x5-playsinline="true"
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="true"
          x5-video-ignore-metadata="true"
        >
          <source :src="config?.public?.staticURL + horizontal.rightUrl" />
        </video>
      </div>
      <div
        class="shs-horizontal-left"
        v-html="horizontal.leftTitle"
        v-animate="{
          effect: ispc ? 'slideRight' : 'slideUp',
          once: false,
        }"
        style="animation-delay: 0.3s"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface PageData {
  ispc: boolean;
  imgUrl: string;
  style?: string;
  top?: {
    title?: string;
    desc?: string;
    style?: string;
  };
  topM?: {
    title?: string;
    desc?: string;
    style?: string;
  };
  leftBottom?: {
    title?: string;
    style?: string;
  };
  horizontal?: {
    leftTitle?: string;
    rightUrl?: string;
    style?: string;
  };
  bottom?: {
    list?: {
      title?: string;
      desc?: string;
      style?: string;
    }[];
    style?: string;
  };
}

const props = withDefaults(defineProps<PageData>(), {
  ispc: true,
  imgUrl: "",
  style: "",
});

const activeIndex3 = ref(0);
let page3SwiperInst;

const handlePage3Swiper = (swiper) => {
  page3SwiperInst = swiper;
};
const handlePage3SlideChange = () => {
  activeIndex3.value = page3SwiperInst?.realIndex || 0;
};
const handlePage3Change = (index) => {
  page3SwiperInst.slideToLoop(index);
};

const config = useRuntimeConfig();
</script>

<style lang="scss" scoped>
.shs-box {
  position: relative;
  font-family: "MiSans";
  height: 100vh;
  overflow: hidden;

  &.p1 {
    .shs-img {
      object-position: 50% 0;
    }
  }
  .shs-top {
    position: absolute;
    top: 8.0729vw;
    width: 80vw;
    text-align: center;
    left: 50%;
    /* transform: translateX(-50%); */
    margin-left: -40vw;
    color: #fff;
    &-title {
      margin-bottom: 0.12rem;
      font-size: 0.32rem;
      line-height: 1.5;
      font-weight: 380;
      /* text-transform: uppercase; */
    }
    &-desc {
      font-size: 0.16rem;
      /* line-height: 0.21rem; */
      line-height: 1.5;
      font-weight: 205;
    }
    &.p1 {
      top: 12.21vw;
      .shs-top-title {
        font-size: 0.4rem;
        line-height: 1.5;
      }
    }
    &.p2 {
      .shs-top-desc {
        /* font-size: 1.25vw;
        line-height: 1.67vw; */
      }
    }
    &.p9 {
      .shs-top-title {
        text-transform: none;
      }
    }
  }
  .shs-leftBottom {
    position: absolute;
    left: 0.6rem;
    bottom: 5.2083vw;
    width: 80vw;
    color: #fff;
    &-title {
      font-size: 0.2rem;
      line-height: 1.5;
      font-weight: 305;
      letter-spacing: 0.002083em;
    }
  }
  .shs-horizontal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 84.38vw;
    height: 29.27vw;
    display: flex;
    justify-content: space-between;
    &-left {
      display: flex;
      align-items: center;
      width: 30.63vw;
      font-size: 0.24rem;
      line-height: 1.5;
      font-weight: 305;
      letter-spacing: 0.002083em;

      :deep(span) {
        font-size: 0.4rem;
      }
    }
    &-right {
      width: 52.08vw;
    }
    &.leftSmall {
      .shs-horizontal-left {
        font-size: 0.18rem;
        line-height: 1.5;
      }
    }
    &.top1432 {
      margin-top: 6.364%;

      .shs-horizontal-left {
        font-weight: 250;
      }
    }
    &.top8 {
      margin-top: 4.6%;
    }
  }
  .shs-bottom {
    position: absolute;
    bottom: 5.2083vw;
    left: 50%;
    /* transform: translateX(-50%); */
    width: 77.14vw;
    margin-left: -38.57vw;
    display: flex;
    justify-content: space-between;
    &-title {
      font-size: 0.16rem;
      line-height: 1.5;
      font-weight: 380;
      letter-spacing: 0.002083em;
      /* text-transform: capitalize; */
    }
    &-desc {
      margin-top: 0.62vw;
      font-size: 0.14rem;
      line-height: 1.5;
      font-weight: 250;
      letter-spacing: 0.002083em;
    }
    &.p3 {
      width: 86.09vw;
      height: 5vw;
      align-items: center;
      margin-left: -43.045vw;
      .shs-bottom {
        &-item {
          position: relative;
          display: flex;
          align-items: center;
          height: 2.81vw;

          &::after {
            content: "";
            position: absolute;
            top: 50%;
            right: -2.6vw;
            width: 1px;
            /* height: 2.6vw; */
            height: 5.2vw;
            transform: scale(0.5);
            margin-top: -2.6vw;
            /* background: rgba(216, 216, 216, 0.8); */
            background: rgba(#909399, 0.85);
            transform-origin: 0 50;
          }
        }
        &-title {
          width: 25.21vw;
          font-size: 0.16rem;
          line-height: 1.5;
          font-weight: 250;
          text-align: center;
          text-transform: none;
        }

        &-item:last-of-type {
          &::after {
            display: none;
          }
        }
      }
    }
    &.p4 {
      justify-content: center;
      text-align: center;
      .shs-bottom {
        &-title {
          font-size: 0.27rem;
          line-height: 1.5;
          font-weight: 380;
        }
        &-desc {
          font-size: 0.16rem;
          line-height: 1.5;
          font-weight: 250;
        }
      }
    }
    &.p14 {
      width: 67.56vw;
      height: 5vw;
      align-items: center;
      margin-left: -33.78vw;
      .shs-bottom {
        &-title {
          position: relative;
          width: 29.25vw;
          font-size: 0.16rem;
          line-height: 1.5;
          font-weight: 250;
          text-align: center;
          text-transform: none;

          :deep(span) {
            font-weight: 520;
          }

          &::after {
            content: "";
            position: absolute;
            top: 50%;
            /* right: -5.21vw; */
            right: -4.53vw;
            width: 1px;
            height: 6.66vw;
            transform: scale(0.5);
            margin-top: -3.33vw;
            /* background: rgba(216, 216, 216, 0.8); */
            background: rgba(#909399, 0.85);
            transform-origin: 0 50;
          }
        }

        &-item:last-of-type {
          .shs-bottom-title::after {
            display: none;
          }
        }
      }
    }
  }
}
// P14设置
@media screen and (max-width: 1160px) {
  .shs-box {
    .shs-bottom.p14 {
      width: 70.56vw;
      margin-left: -35.28vw;
      .shs-bottom {
        &-title {
          width: 32.25vw;
          &::after {
            right: -3.03vw;
          }
        }
      }
    }
  }
}
// 1080 900 810 720
@media screen and (max-height: 900px) {
  .shs-box {
    .shs-top {
      top: 6.7274vw;
    }
    .shs-leftBottom,
    .shs-bottom {
      bottom: 4.3403vw;
    }
  }
}
@media screen and (max-height: 810px) {
  .shs-box {
    .shs-top {
      top: 6.0546vw;
    }
    .shs-leftBottom,
    .shs-bottom {
      bottom: 3.9062vw;
    }
  }
}
@media screen and (max-height: 720px) {
  .shs-box {
    .shs-top {
      top: 5.3819vw;
    }
    .shs-leftBottom,
    .shs-bottom {
      bottom: 3.4722vw;
    }
  }
}
@media screen and (max-width: 1023px) {
  .shs-box {
    .shs-top {
      top: 18.47%;
      width: 91.47vw;
      margin-left: -45.735vw;
      &-title {
        margin-bottom: 3.2vw;
        font-size: 6.4vw;
        line-height: 8.53vw;
        letter-spacing: 0.002083em;
      }
      &-desc {
        font-size: 3.2vw;
        line-height: 4.5333vw;
      }
      &.titleLarge {
        .shs-top-title {
          font-size: 8vw;
          line-height: 10.67vw;
        }
      }
    }
    .shs-leftBottom {
      left: 4.27vw;
      bottom: 8.6224%;
      &-title {
        font-size: 4.27vw;
        line-height: 5.6vw;
        letter-spacing: 0;
      }
    }
    .shs-horizontal {
      position: static;
      transform: none;
      width: 91.47vw;
      height: auto;
      margin: 12.78vw auto 0;
      /* flex-flow: column-reverse; */
      flex-direction: column;
      &-left {
        display: block;
        width: 100%;
        font-size: 3.2vw;
        line-height: 4.27vw;
        font-weight: 380;
        letter-spacing: 0.005333em;
        margin-top: 4.27vw;

        :deep(span) {
          font-size: 5.3375vw;
          font-weight: 305;
        }
      }
      &-right {
        width: 100%;
      }
    }
    .shs-bottom {
      bottom: 6.1608%;
      width: 91.47vw;
      margin-left: -45.735vw;
      display: block;
      &-title {
        padding: 5.33vw 0;
        font-size: 2.67vw;
        line-height: 3.6vw;
        font-weight: 305;
        letter-spacing: 0.005333em;
        /* text-transform: capitalize; */
        text-align: center;
      }
      &-desc {
        margin-top: 0.62vw;
        font-size: 0.83vw;
        line-height: 1.1vw;
        font-weight: 250;
        letter-spacing: 0.002083em;
      }
      &-item {
        position: relative;
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200%;
          height: 1px;
          background: rgba(#5b5b5b, 0.39);
          transform-origin: 0 0;
          transform: scale(0.5);
        }

        &:last-of-type {
          &::after {
            display: none;
          }
        }
      }
      &.h4 {
        justify-content: center;
        text-align: center;
        .shs-bottom {
          &-title {
            padding: 0;
            font-size: 6.93vw;
            line-height: 9.2vw;
            font-weight: 380;
          }
          &-desc {
            margin-top: 3.2vw;
            font-size: 3.2vw;
            line-height: 4.27vw;
            font-weight: 305;
          }
        }
      }
      &.h14 {
        .shs-bottom {
          &-title {
            font-size: 3.2vw;
            line-height: 4.267vw;
            text-align: left;

            :deep(span) {
              font-weight: 520;
            }
          }
        }
      }
      &-swiper {
        position: absolute;
        bottom: 11.0239%;
        left: 50%;
        /* transform: translateX(-50%); */
        width: 91.47vw;
        height: 21.07vw;
        margin-left: -45.735vw;
      }
      :deep(.swiper) {
        /* width: 45.735vw; */
        width: 95.73vw;
        height: 21.07vw;
      }
      &-pagination {
        /* margin-top: 2.67vw; */
        margin-top: 7.4666vw;
      }
      &.h2 {
        .shs-bottom {
          &-title {
            padding: 0;
            font-size: 3.73vw;
            line-height: 4.93vw;
            font-weight: 380;
            text-align: left;
          }
          &-desc {
            margin-top: 1.6vw;
            font-size: 2.4vw;
            line-height: 3.2vw;
            font-weight: 250;
          }
        }
      }
    }
    &.h5,
    &.h9,
    &.h11,
    &.h13 {
      height: 160.13vw;
      .shs-img {
        position: absolute;
        height: 160.13vw;
      }
      .shs-top {
        position: static;
        transform: none;
        margin: 0 auto;
        padding-top: 32vw;
      }
    }
    &.h11,
    &.h13 {
      height: 124.27vw;
      .shs-img {
        height: 124.27vw;
      }
      .shs-horizontal {
        padding-top: 32vw;
        margin-top: 0;
        &-left {
          font-size: 4.27vw;
          line-height: 5.6vw;
        }
      }
    }
  }
}
</style>
