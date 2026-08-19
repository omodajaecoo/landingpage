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
    <BaseImg
      v-if="logo"
      :src="logo"
      class="shs-logo"
      :class="{ 'shs-logo--raised': bottom || leftBottom }"
      loading="eager"
    />
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
      <div class="flex justify-center">
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
        class="shs-bottom-item flex-1"
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
  logo?: string;
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

withDefaults(defineProps<PageData>(), {
  ispc: true,
  imgUrl: "",
  logo: "",
  style: "",
});

const activeIndex3 = ref(0);
let page3SwiperInst:any = null;

const handlePage3Swiper = (swiper:any) => {
  page3SwiperInst = swiper;
};
const handlePage3SlideChange = () => {
  activeIndex3.value = page3SwiperInst?.realIndex || 0;
};
const handlePage3Change = (index:number) => {
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
 
  &.p1,
  &.p3,
  &.p6,
  &.p10 {
    .shs-img {
      opacity: 0.8;
    }
  }
  &.p1{
    .shs-img {
      object-position: center center;
    }
  }
  .shs-logo {
    position: absolute;
    bottom: 5.2083vw;
    left: 4.17vw;
    z-index: 1;
    width: clamp(140px, 12.5vw, 240px);
    height: auto;
    pointer-events: none;

    &--raised {
      bottom: 10vw;
    }
  }
  
  .shs-top {
    position: absolute;
    top: 8.0729vw;
    width: 80vw;
    text-align: center;
    left: 50%;
    margin-left: -40vw;
    color: #fff;
    &-title {
      margin-bottom: 0.12rem;
      font-size: 32px;
      line-height: 1.5;
      font-weight: 500;
    }
    &-desc {
      font-size: 16px;
      line-height: 1.2;
      font-weight: 200;
    }
    &.p1 {
      top: 10vw;
      .shs-top-title {
        font-size: 36px;
        line-height: 1.2;
      }
      .shs-top-desc {
        max-width: 950px;
        padding: 0 20px;
      }
    }
    &.p2 {
      .shs-top-desc {
        max-width: 950px;
        padding: 0 20px;
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
      font-size: 16px;
      line-height: 1.2;
      font-weight: 300;
      letter-spacing: 0.002083em;
      max-width: 520px;
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
      font-size: 20px;
      line-height: 1.2;
      font-weight: 300;
      letter-spacing: 0.002083em;

      :deep(span) {
        font-size: 0.4rem;
      }
    }
    &-right {
      width: 52.08vw;
    }
    &.top1432 {
      margin-top: 6.364%;
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
      font-size: 16px;
      line-height: 1.5;
      font-weight: 400;
      letter-spacing: 0.025em;
    }
    &-desc {
      margin-top: 0.62vw;
      font-size: 14px;
      line-height: 1.2;
      font-weight: 250;
      letter-spacing: 0.002083em;
      margin-right: 30px;
    }
    &.p3 {
      .shs-bottom {
        &-desc {
          text-align: center;
          text-transform: none;
        }
      }
    }
    &.p4 {
      .shs-bottom {
        &-desc {
          width: 80vw;
          text-align: center;
          text-transform: none;
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
@media screen and (max-width: 767px) {
  // Solo teléfonos móviles (portrait y landscape)
  .shs-box {
    &.h1,
    &.h3,
    &.h6,
    &.h10 {
      .shs-img {
        opacity: 0.8;
      }
    }
    &.h1{
      .shs-img {
        object-position: center center;
      }
    }
    .shs-top {
      top: 15%;
      &-title {
        font-size: 20px;
        line-height: 24px;
      }
      &-desc {
        font-size: 14px;
        line-height: 16px;
        margin-top: 16px;
      }
      &.titleLarge {
        top: 100px;
        .shs-top-title {
          font-size: 20px;
        }
      }
    }
    .shs-logo {
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      width: clamp(120px, 38vw, 180px);

      &--raised {
        bottom: 190px;
      }
    }
    .shs-leftBottom {
      left: 4.27vw;
      bottom: 40px;
      &-title {
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0;
      }
    }
    .shs-horizontal {
      &-left {
        font-size: 14px;
        line-height: 18px;
      }
    }
    .shs-bottom {
      &-title {
        font-size: 16px;
        line-height: 20px;
      }
      &-desc {
        font-size: 12px;
        line-height: 16px;
      }
      &.h3 {
        .shs-bottom {
          &-desc {
            text-align: center;
            text-transform: none;
            padding-top: 30px;
          }
        }
      }
    }
    &.h5,
    &.h9,
    &.h11,
    &.h13 {
      height: 100%;
      .shs-img {
        position: absolute;
        height: 100%;
      }
      .shs-top {
        position: static;
        transform: none;
        margin: 0 auto;
        padding-top: 50px;
      }
      .shs-horizontal {
        padding-bottom: 100px;
      }
    }

  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  // Solo tablets (portrait y landscape)
  .shs-box {
    .shs-top {
      top: 100px;
      &-title {
        font-size: 32px;
        line-height: 40px;
        margin-bottom: 16px;
      }
      &-desc {
        font-size: 16px;
        line-height: 20px;
      }
      &.titleLarge {
        .shs-top-title {
          font-size: 36px;
        }
      }
      &.p1 {
        top: 10vw;
      }
    }
    .shs-leftBottom {
      left: 4.27vw;
      bottom: 40px;
      max-width: 500px;
      &-title {
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0;
        text-align: left;
      }
    }
    .shs-logo {
      bottom: 40px;
      left: 4.27vw;
      width: clamp(150px, 26vw, 220px);

      &--raised {
        bottom: 180px;
      }
    }
    .shs-horizontal {
      &-left {
        font-size: 16px;
        line-height: 20px;
      }
    }
    .shs-bottom {
      &-title {
        font-size: 24px;
        line-height: 28px;
      }
      &-desc {
        font-size: 18px;
        line-height: 22px;
      }
      &.h3 {
        .shs-bottom {
          &-desc {
            text-align: center;
            text-transform: none;
            padding-top: 30px;
          }
        }
      }
    }
    &.h5,
    &.h9,
    &.h11,
    &.h13 {
      height: 100%;
      .shs-img {
        position: absolute;
        height: 100%;
      }
      .shs-top {
        position: static;
        transform: none;
        margin: 0 auto;
        padding-top: 100px;
      }
      .shs-horizontal {
        margin-bottom: 100px;
      }
    }
  }
}
@media screen and (max-width: 1023px) {
  .shs-box {
    .shs-top {
      width: 91.47vw;
      margin-left: -45.735vw;
      &-title {
        letter-spacing: 0.002083em;
      }

    }
    .shs-horizontal {
      position: static;
      transform: none;
      width: 91.47vw;
      height: auto;
      margin: 60px auto 0;
      /* flex-flow: column-reverse; */
      flex-direction: column;
      &-left {
        display: block;
        width: 100%;
        font-weight: 300;
        letter-spacing: 0.005333em;
        margin-top: 24px;
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
        font-weight: 305;
        letter-spacing: 0.005333em;
        /* text-transform: capitalize; */
        text-align: center;
      }
      &-desc {
        margin-top: 0.62vw;
        font-weight: 250;
        letter-spacing: 0.002083em;
        margin-right: 0px;
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
          &-desc {
            margin-top: 3.2vw;
            font-size: 14px;
            line-height: 4.27vw;
            font-weight: 305;
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
            font-weight: 380;
            text-align: left;
          }
          &-desc {
            margin-top: 1.6vw;
            font-weight: 250;
            margin-right: 30px;
          }
        }
      }
    }
  }
}
</style>
