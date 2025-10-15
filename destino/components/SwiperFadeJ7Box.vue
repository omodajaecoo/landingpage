<template>
  <ModuleItem class="swiper-wrap">
    <Swiper
      class="inner-swiper"
      :effect="'fade'"
      :modules="[SwiperPagination, SwiperEffectFade]"
      @swiper="handleSwiper"
      @slideChange="handleSwiperChange"
    >
      <SwiperSlide
        v-for="(page, idx) in fade"
        :key="idx"
        style="background-color: #000"
      >
        <div class="fade-box" :class="'fade-box-' + idx">
          <div class="fade-car">
            <!-- <img
              :src="`/images/j7shs/5/b_1.webp`"
              class="fade-bg"
              loading="lazy"
            /> -->
            <img
              class="fade-car-bg"
              v-if="page.car"
              :src="`/images/${page.car}`"
              loading="lazy"
            />
          </div>
          <div class="fade-head" :class="page.style || ''">
            <div
              class="fade-title"
              v-animate="{
                effect: 'fadeInUp',
                once: false,
              }"
            >
              {{ page.title }}
            </div>
            <div
              class="fade-desc"
              v-html="page.desc"
              v-animate="{
                effect: 'fadeInUp',
                once: false,
              }"
              style="animation-delay: 0.3s"
            ></div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="fade-pagination select-none" :class="fade?.[0]?.style || ''">
      <SwiperFadePagination
        :fade="fade"
        :active-index="currentIdx"
        @change="handlePageChange"
      />
    </div>
  </ModuleItem>
</template>

<script setup lang="ts">
interface FadeData {
  title: string;
  desc?: string;
  bg?: string;
  car?: string;
  dot?: string;
  name?: string;
  style?: string;
  white?: boolean;
}

const props = withDefaults(
  defineProps<{
    ispc: boolean;
    fade: FadeData[];
  }>(),
  {
    ispc: true,
    fade: () => [],
  }
);

let pageSwiper: any;
const currentIdx = ref(0);
const handleChange = (type: string) => {
  if (type == "next") {
    pageSwiper.slideNext();
  } else {
    pageSwiper.slidePrev();
  }
};
const handleSwiper = (swiper) => {
  pageSwiper = swiper;
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
const handlePageChange = (index) => {
  pageSwiper.slideToLoop(index);
};
</script>

<style lang="scss" scoped>
.select-none {
  user-select: none;
}
.swiper-wrap {
  position: relative;
  z-index: 1;
}
.swiper-wrap .inner-swiper {
  height: 100vh;
}
.fade-box {
  position: relative;
  width: 100%;
  height: 100%;

  &-0 {
    background: linear-gradient(113deg, #f3f3f3 8.99%, #e8e8e8 87.47%);
  }
  &-1 {
    background: linear-gradient(113deg, #dee2eb 8.99%, #a1a9b9 87.47%);
  }
  &-2 {
    background: linear-gradient(113deg, #b5c1cd 8.99%, #8e9daf 87.47%);
  }
  &-3 {
    background: linear-gradient(113deg, #9c9c9c 8.99%, #717171 87.47%);
  }
  &-4 {
    background: linear-gradient(113deg, #dee2eb 8.99%, #a1a9b9 87.47%);
  }
  &-5 {
    background: linear-gradient(113deg, #b5c1cd 8.99%, #8e9daf 87.47%);
  }
}
.fade-bg {
  position: absolute;
  top: calc(242 / 1920 * 100vw);
  left: calc(343 / 1920 * 100vw);
  width: calc(617 / 1920 * 100vw);
  height: calc(213 / 1920 * 100vw);
}
.fade-car {
  position: absolute;
  top: 58.5%;
  left: 0;
  width: calc(1920 / 1920 * 100vw);
  height: calc(1080 / 1920 * 100vw);
  margin-top: calc(-1080 / 2 / 1920 * 100vw);
  padding: calc(238 / 2 / 1920 * 100vw) calc(156 / 2 / 1920 * 100vw) 0
    calc(131 / 2 / 1920 * 100vw);
}
.fade-car-bg {
  width: calc(1633 / 1920 * 100vw);
  height: calc(735 / 1920 * 100vw);
}
.fade-head {
  position: absolute;
  top: calc(130 / 1920 * 100vw);
  left: 0;
  width: 100%;
  text-align: center;
}
.fade-title {
  color: #000;
  font-family: "Arial Black";
  font-size: calc(40 / 1920 * 100vw);
  font-weight: 900;
  line-height: calc(40 / 1920 * 100vw);
  /* text-transform: uppercase; */
}
.fade-desc {
  margin-top: calc(18 / 1920 * 100vw);
  color: #666;
  font-size: calc(22 / 1920 * 100vw);
  line-height: calc(40 / 1920 * 100vw);
  /* text-transform: capitalize; */
}
.fade-pagination {
  position: absolute;
  z-index: 1;
  /* bottom: calc(82 / 1920 * 100vw); */
  bottom: calc(40 / 1920 * 100vw);
  left: 0;
  width: 100%;
}
@media screen and (max-width: 1023px) {
  .fade-box {
    top: 50%;
    height: calc(1624 / 750 * 100vw);
    margin-top: calc(-1 * 1624 / 2 / 750 * 100vw);

    &-0 {
      background: linear-gradient(113deg, #f3f3f3 8.99%, #e8e8e8 87.47%);
    }
    &-1 {
      background: linear-gradient(113deg, #dee2eb 8.99%, #a1a9b9 87.47%);
    }
    &-2 {
      background: linear-gradient(113deg, #b5c1cd 8.99%, #8e9daf 87.47%);
    }
    &-3 {
      background: linear-gradient(113deg, #9c9c9c 8.99%, #717171 87.47%);
    }
    &-4 {
      background: linear-gradient(113deg, #dee2eb 8.99%, #a1a9b9 87.47%);
    }
    &-5 {
      background: linear-gradient(113deg, #b5c1cd 8.99%, #8e9daf 87.47%);
    }
  }
  .fade-bg {
    position: absolute;
    top: calc(0 / 750 * 100vw);
    left: calc(75 / 750 * 100vw);
    width: calc(470 / 750 * 100vw);
    height: calc(162 / 750 * 100vw);
  }
  .fade-car {
    top: calc(628 / 750 * 100vw);
    left: 0;
    width: 100vw;
    height: calc(432 / 750 * 100vw);
    padding: 0;
    margin-top: 0;
  }
  .fade-car-bg {
    width: 100%;
    height: 100%;
  }
  .fade-head {
    top: calc(328 / 750 * 100vw);
  }
  .fade-title {
    font-size: calc(48 / 750 * 100vw);
    line-height: calc(68 / 750 * 100vw);
  }
  .fade-desc {
    width: calc(600 / 750 * 100vw);
    margin: calc(16 / 750 * 100vw) auto 0;
    color: rgba(51, 51, 51, 0.5);
    font-size: calc(24 / 750 * 100vw);
    line-height: calc(40 / 750 * 100vw);
  }
  .fade-pagination {
    top: calc(1120 / 750 * 100vw);
    bottom: auto;
    overflow-x: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
