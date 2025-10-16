<template>
  <ModuleItem class="swiper-wrap">
    <div v-if="text?.top" class="swiper-wrap-top">
      <div
        v-if="text.top?.title"
        class="swiper-wrap-title"
        v-html="text.top?.title"
        v-animate="{
          effect: 'fadeInUp',
          once: true,
        }"
      ></div>
      <div
        v-if="text.top?.desc"
        class="swiper-wrap-desc"
        v-html="text.top?.desc"
        v-animate="{
          effect: 'fadeInUp',
          once: true,
        }"
        style="animation-delay: 0.3s"
      ></div>
    </div>
    <Swiper
      class="inner-swiper"
      :modules="[SwiperPagination, SwiperEffectCreative]"
      :loop="true"
      @swiper="handleSwiper"
      @slideChange="handleSwiperChange"
    >
      <SwiperSlide
        v-for="(page, idx) in slide"
        :key="idx"
        style="background-color: #000"
      >
        <FullBox
          :ispc="ispc"
          :imgUrl="page.imgUrl"
          :style="page.style"
          :text="page.text"
          :picture="page.picture"
          :isShow="idx === currentIdx"
        />
      </SwiperSlide>
    </Swiper>
    <template v-if="slide?.[0]?.style !== 'h6' && slide?.[0]?.style !== 'h9'">
      <img
        loading="lazy"
        class="btn prev"
        src="/images/j5/arrow_left.webp"
        alt="prev"
        v-if="slide.length > 1"
        @click="handleChange('prev')"
      />
      <img
        loading="lazy"
        class="btn next"
        src="/images/j5/arrow_right.webp"
        alt="next"
        v-if="slide.length > 1"
        @click="handleChange('next')"
      />
    </template>
    <div
      v-else-if="slide?.[0]?.style === 'h6' || slide?.[0]?.style === 'h9'"
      class="h6-pagination select-none"
      :class="slide?.[0]?.style || ''"
    >
      <ShsSwiperPagination
        :active-index="currentIdx"
        :length="slide.length"
        @change="handlePageChange"
      />
    </div>
  </ModuleItem>
</template>

<script setup lang="ts">
interface BoxItemData {
  title?: string;
  desc?: string;
  style?: string;
  icon?: string;
}
interface BoxData {
  imgUrl?: string;
  style?: string;
  text?: {
    top?: BoxItemData;
    leftTop?: BoxItemData;
    rightTop?: BoxItemData;
    leftBottom?: BoxItemData;
    rightBottom?: BoxItemData;
  };
  picture?: BoxItemData[];
}

const props = withDefaults(
  defineProps<{
    ispc: boolean;
    slide: BoxData[];
    text: {
      top: BoxItemData;
    };
  }>(),
  {
    ispc: true,
    slide: () => [],
  }
);

let pageSwiper: any;
const currentIdx = ref(0);
const handleSwiper = (swiper) => {
  pageSwiper = swiper;
};
const handleChange = (type: string) => {
  if (type == "next") {
    pageSwiper.slideNext();
  } else {
    pageSwiper.slidePrev();
  }
};
const handlePageChange = (index) => {
  pageSwiper.slideToLoop(index);
};
const handleSwiperChange = (swiper) => {
  currentIdx.value = swiper.realIndex;
  const curSlide = swiper.slides[swiper.realIndex];
  const videoEl = curSlide.querySelector("video");
  if (videoEl) {
    if (props.ispc) {
      videoEl.paused && videoEl.play();
    } else {
      document.addEventListener(
        "WeixinTSBridgeReady",
        function (params) {
          videoEl.play();
        },
        false
      );
      document.addEventListener("touchstart", function (params) {
        videoEl.play();
      });
    }
  }
};
</script>

<style scoped>
.swiper-wrap {
  position: relative;
  z-index: 1;
}
.swiper-wrap-top {
  padding: calc(140 / 1920 * 100vw) calc(300 / 1920 * 100vw);
  background: #fff;
}
.swiper-wrap-title {
  font-size: calc(70 / 1920 * 100vw);
  line-height: calc(99 / 1920 * 100vw);
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  color: #000;
}
.swiper-wrap-desc {
  margin-top: calc(32 / 1920 * 100vw);
  font-size: calc(22 / 1920 * 100vw);
  line-height: calc(30 / 1920 * 100vw);
  color: #666;
  text-align: center;
}
.swiper-wrap .inner-swiper {
  height: 100vh;
}
.swiper-wrap .btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
}
.swiper-wrap .btn.prev {
  left: 4.375vw;
}
.swiper-wrap .btn.next {
  right: 4.375vw;
}
.h6-pagination {
  position: absolute;
  z-index: 1;
  bottom: calc(120 / 1125 * 100vw);
  left: calc(120 / 1125 * 100vw);
  width: 80%;
}
@media screen and (max-width: 1023px) {
  .swiper-wrap .btn {
    position: absolute;
    /* bottom: calc(272 / 1125 * 100vw); */
    bottom: calc(136 / 1125 * 100vw);
    width: calc(96 / 1125 * 100vw);
    height: calc(96 / 1125 * 100vw);
    top: unset;
    user-select: none;
  }
  .swiper-wrap .btn.prev {
    left: calc(48 / 1125 * 100vw);
  }
  .swiper-wrap .btn.next {
    right: calc(48 / 1125 * 100vw);
  }
  .swiper-wrap-top {
    padding: calc(100 / 750 * 100vw) calc(75 / 750 * 100vw);
    background: #fff;
  }
  .swiper-wrap-title {
    font-size: calc(48 / 750 * 100vw);
    line-height: calc(68 / 750 * 100vw);
  }
  .swiper-wrap-desc {
    margin-top: calc(16 / 750 * 100vw);
    font-size: calc(24 / 750 * 100vw);
    line-height: calc(40 / 750 * 100vw);
    color: rgba(51, 51, 51, 0.5);
  }
}
</style>
