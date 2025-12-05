<template>
  <ModuleItem class="swiper-wrap">
    <Swiper
      class="inner-swiper"
      :modules="[SwiperPagination, SwiperEffectCreative]"
      :slides-per-view="1"
      :loop="true"
      @swiper="handleSwiper"
      @slideChange="handleSwiperChange"
    >
      <SwiperSlide
        v-for="(slide, idx) in slides"
        :key="idx"
        style="background-color: #000"
      >
        <!-- 图片 -->
        <div class="img-wrap relative" v-if="slide.url || slide.mbUrl">
          <img v-if="ispc" loading="lazy" :src="slide.url" class="img" />
          <img v-if="!ispc" loading="lazy" :src="slide.mbUrl" class="img" />
          <!-- numList -->
          <template v-if="slide.numList && slide.numList.length > 0">
            <NumberTab
              :class="['number-card', { cardLower: cardLower }]"
              :datas="slide.numList"
              :size="`${slide.largeFlag ? 'large' : 'default'}`"
              :show-title="currentIdx === idx && showText"
              :style="cardStyle"
            />
          </template>
        </div>
        <!-- 视频 -->
        <div class="img-wrap relative" v-if="slide.videoUrl">
          <video
            class="video-cont"
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
            <source :src="slide.videoUrl" />
          </video>
        </div>
        <!-- mask -->
        <div v-if="slide.isMask" class="mask"></div>
        <!-- slide下方的标题 -->
        <div
          class="title animate__animated animate__zoomIn"
          v-if="showText && currentIdx === idx && slide.name"
        >
          <img
            loading="lazy"
            src="/images/models/title-left.webp"
            class="icon left-icon"
          />
          <Transition name="slide-fade" style="transition-delay: 1000ms">
            <div class="word" v-if="showText">
              <span>{{ slide.name }}</span>
            </div>
          </Transition>
          <img
            loading="lazy"
            src="/images/models/title-right.webp"
            class="icon right-icon"
          />
        </div>
      </SwiperSlide>
    </Swiper>
    <img
      loading="lazy"
      class="btn prev"
      src="/images/page2_left_arrow.webp"
      alt="prev"
      v-if="slides.length > 1"
      @click="handleChange('prev')"
    />
    <img
      loading="lazy"
      class="btn next"
      src="/images/page2_right_arrow.webp"
      alt="next"
      v-if="slides.length > 1"
      @click="handleChange('next')"
    />
  </ModuleItem>
</template>

<script setup lang="ts">
type NumUnit = {
  num: number;
  txt: string;
  label: string;
};

interface SlideInter {
  name: string;
  url?: string;
  mbUrl?: string;
  videoUrl?: string;
  bgVideoUrl?: string;
  isMask?: boolean;
  numList?: NumUnit[];
  largeFlag?: boolean;
}

const props = withDefaults(
  defineProps<{
    slides: SlideInter[];
    showText: boolean;
    cardLower?: boolean;
    cardBottom?: number;
  }>(),
  {
    cardLower: false,
  }
);
const { isMobile } = useDeviceType();
const ispc = computed(() => {
  return !isMobile.value;
});
let pageSwiper: any;
const currentIdx = ref(0);

const initFlag = ref(false);

const cardStyle = computed(() => {
  if (props.cardBottom) {
    return {
      bottom: `${props.cardBottom}vw`,
    };
  } else {
    return {};
  }
});

onMounted(() => {
  setTimeout(() => {
    initFlag.value = true;
  }, 500);
});

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
    if (ispc.value) {
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
  padding: 109px 86px 0px 86px;
  position: relative;
  z-index: 10;
}
.swiper-wrap .inner-swiper {
  height: 100%;
}
.swiper-wrap .video-cont {
  width: 100%;
  height: 100%;
}
.swiper-wrap .btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  cursor: pointer;
}
.swiper-wrap .btn.prev {
  left: 40px;
}
.swiper-wrap .btn.next {
  right: 40px;
}

.inner-swiper .img-wrap {
  height: calc(100% - 8.125vw);
  position: relative;
  text-align: center;
}
.inner-swiper .img-wrap .img {
  /* object-fit: cover; */
  /* width: 100%; */
  height: 100%;
  margin: auto;
}

.inner-swiper .title {
  margin-top: 2.6042vw;
  width: 100%;
  line-height: 1.25vw;
  font-size: 1.25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.inner-swiper .title .word {
  margin: 0 44px;
  line-height: 22px;
}
.number-card {
  bottom: 6.9%;
  &.cardLower {
    bottom: -4.5313vw;
  }
}
@media screen and (max-width: 1023px) {
  .swiper-wrap {
    padding: 0;
  }
  .swiper-wrap .swiper-slide .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-wrap .btn {
    position: absolute;
    bottom: 17.333vw;
    width: 3.867vw;
    height: 9.2vw;
    top: unset;
    user-select: none;
  }
  .swiper-wrap .btn.prev {
    left: 5.2vw;
  }
  .swiper-wrap .btn.next {
    right: 5.2vw;
  }
  .swiper-wrap .title {
    position: absolute;
    /* bottom: 18vw; */
    bottom: 21.333vw;
    width: 100%;
    text-align: center;
    margin: 0;
  }
  .swiper-wrap .title .icon {
    display: none;
  }
  .swiper-wrap .word {
    display: inline-flex;
    /* width: 47.867vw; */
    width: 75.4667vw;
    height: 9.6vw;
    align-items: center;
    justify-content: center;
    line-height: 4.8vw;
    font-size: 4.8vw;
    letter-spacing: 0.0225em;
    text-align: ce;
  }

  .number-card {
    bottom: 25.6%;
  }

  .swiper-wrap .number-tab-wrap{
    bottom: 130px!important;
  }
}
</style>
