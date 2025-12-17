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
        <div class="fade-box">
          <img
            :src="`/images/${page.bg}`"
            class="w-full h-full object-cover select-none"
            loading="lazy"
          />
          <div class="fade-car">
            <img v-if="page.car" :src="`/images/${page.car}`" loading="lazy" />
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
  height: 100%;
}
.fade-box {
  position: relative;
  width: 100%;
  height: 100%;
}
.fade-car {
  position: absolute;
  top: 58.5%;
  left: 0;
  width: calc(1920 / 1920 * 100vw);
  height: calc(1080 / 1920 * 100vw);
  margin-top: calc(-1080 / 2 / 1920 * 100vw);
  padding: calc(153 / 2 / 1920 * 100vw) calc(110 / 2 / 1920 * 100vw) 0
    calc(36 / 2 / 1920 * 100vw);
}
.fade-car > img {
  width: calc(1774 / 1920 * 100vw);
  height: calc(927 / 1920 * 100vw);
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
.p7.fade-head {
  position: absolute;
  top: auto;
  left: auto;
  right: calc(60 / 1920 * 100vw);
  bottom: calc(100 / 1920 * 100vw);
  width: 100%;
  text-align: right;

  .fade-title {
    color: #fff;
    font-family: MiSans;
    font-weight: 380;
    font-size: calc(36 / 1920 * 100vw);
    line-height: calc(48 / 1920 * 100vw);
  }
  .fade-desc {
    margin-top: calc(10 / 1920 * 100vw);
    color: #fff;
    font-family: MiSans;
    font-weight: 330;
    font-size: calc(72 / 1920 * 100vw);
    line-height: calc(94 / 1920 * 100vw);
  }
}
@media screen and (max-width: 1023px) {
  .fade-box {
    top: 50%;
    height: calc(2436 / 1125 * 100vw);
    margin-top: calc(-1 * 2436 / 2 / 1125 * 100vw);
  }
  .fade-car {
    top: calc(1062 / 1125 * 100vw);
    left: 0;
    width: 100vw;
    height: calc(900 / 1125 * 100vw);
    padding: 0;
    margin-top: 0;
  }
  .fade-car > img {
    width: 100%;
    height: 100%;
  }
  .fade-head {
    top: calc(448 / 1125 * 100vw);
  }
  .fade-title {
    font-size: calc(48 / 1125 * 100vw);
    line-height: calc(54 / 1125 * 100vw);
  }
  .fade-desc {
    width: calc(1000 / 1125 * 100vw);
    margin: calc(30 / 1125 * 100vw) auto 0;
    color: #353535;
    font-size: calc(32 / 1125 * 100vw);
    line-height: calc(42 / 1125 * 100vw);
  }
  .fade-pagination {
    top: calc(1850 / 1125 * 100vw);
    bottom: auto;
    overflow-x: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  .h7.fade-head {
    position: absolute;
    left: auto;
    right: calc(104 / 1125 * 100vw);
    top: calc((1890 - 302) / 1125 * 100vw);
    bottom: auto;
    width: 100%;
    text-align: right;

    .fade-title {
      color: #fff;
      font-family: MiSans;
      font-weight: 380;
      font-size: calc(36 / 1125 * 100vw);
      line-height: calc(42 / 1125 * 100vw);
    }
    .fade-desc {
      margin: 0;
      width: 100%;
      margin-top: calc(20 / 1125 * 100vw);
      color: #fff;
      font-family: MiSans;
      font-weight: 330;
      font-size: calc(70 / 1125 * 100vw);
      line-height: calc(94 / 1125 * 100vw);
    }
  }
}
</style>
