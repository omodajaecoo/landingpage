<template>
  <div class="home-page w-full h-[100vh] bg-black overflow-hidden">
    <div
      class="w-full h-full"
      v-animate="{
        effect: 'zoomInCenter',
        immediate: true,
      }"
    >
      <ClientOnly>
        <swiper
          :loop="true"
          :autoplay="{
            delay: 20000,
          }"
          :speed="500"
          :modules="[SwiperAutoplay]"
          @swiper="handleInit"
          @slide-change="handleSlideChange"
          class="home-swiper"
        >
          <swiper-slide v-for="(slide, idx) in slides" :key="idx">
            <div class="h-[100vh] relative">
              <img
                v-if="slide.type === 'image'"
                :src="
                  config.public.staticURL +
                  '/' +
                  (isMobile ? slide.imgUrlMobile : slide.imgUrl)
                "
                class="w-full h-full object-cover"
              />
              <video
                v-else-if="slide.type === 'video'"
                :id="'page1KVVideo' + idx"
                :poster="
                  config.public.staticURL +
                  '/' +
                  (isMobile ? slide.imgUrlMobile : slide.imgUrl)
                "
                class="w-full h-full object-cover"
                loop
                muted
                preload="auto"
                playsinline="true"
                x5-playsinline="true"
                webkit-playsinline="true"
                x-webkit-airplay="allow"
                x5-video-player-type="h5"
                x5-video-player-fullscreen="true"
                x5-video-ignore-metadata="true"
                v-videoPause
              >
                <source
                  :src="
                    config.public.staticURL +
                    '/' +
                    (isMobile ? slide.videoUrlMobile : slide.videoUrl)
                  "
                />
              </video>
              <div
                class="info absolute text-white left-1/2 transform translate-x-[-50%] lg:bottom-[1.1rem] bottom-[1.71rem]"
                :class="{ 'opacity-100': visible }"
              >
                <nuxt-link v-if="slide.linkUrl" :to="slide.linkUrl">
                  <BaseButton
                    type="text"
                    class="text-[0.32rem] lg:text-[0.16rem] anim"
                    >Learn More</BaseButton
                  >
                </nuxt-link>
              </div>
            </div>
          </swiper-slide>
          <!-- 分页器 -->
          <div
            slot="container-end"
            class="absolute bottom-[1.1rem] left-1/2 transform translate-x-[-50%] z-10 lg:right-[0.6rem] lg:left-[unset] lg:translate-x-0 opacity-0"
            :class="{ 'opacity-100': visible }"
          >
            <div class="pagination-wrap flex gap-x-[0.09rem] relative">
              <div
                class="pagination-item w-[0.48rem] h-[0.02rem] bg-white/30 cursor-pointer"
                v-for="i in slideLength"
                :key="i"
                @click="handleChangeSlide(i - 1)"
              ></div>
              <div
                class="w-0 h-[0.02rem] bg-white/80 absolute top-0 duration-300"
                :class="{ 'active-bar': showPagination }"
                :style="activePaginationLeft"
              ></div>
            </div>
          </div>
        </swiper>
      </ClientOnly>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type Swiper } from "swiper";

interface SlideItem {
  imgUrl: string;
  imgUrlMobile: string;
  videoUrl?: string;
  videoUrlMobile?: string;
  title: string;
  desc: string;
  linkUrl: string;
  type: string;
}

const props = defineProps<{ slides: SlideItem[] }>();

const slideLength = computed(() => props.slides.length);

let swiperInst: Swiper;

const activeIndex = ref(0);
const visible = ref(false);
const showPagination = ref(false);
let timerPagination = 0;

const { isMobile } = useDeviceType();

const config = useRuntimeConfig();

const handlePauseVideo = () => {
  const videoDom = document.querySelectorAll(".home-page video");
  videoDom.forEach((dom) => {
    dom.pause();
  });
};

const handleSlideChange = (curSwiper: any) => {
  activeIndex.value = curSwiper.realIndex;
  visible.value = true;
  handleAnimation();

  handlePauseVideo();
  if (props.slides[activeIndex.value].type === "video") {
    const videoDom = document.querySelector(
      "#page1KVVideo" + activeIndex.value
    ) as HTMLVideoElement;
    videoDom?.play?.();
  }

  showPagination.value = false;
  window.clearTimeout(timerPagination);
  timerPagination = window.setTimeout(() => {
    showPagination.value = true;
  }, 300);
};

const handleInit = (inst: any) => {
  swiperInst = inst;

  handleAnimation();

  showPagination.value = true;
};

const activePaginationLeft = computed(() => {
  return {
    left: `${(0.48 + 0.09) * activeIndex.value}rem`,
  };
});

const handleChangeSlide = (idx: number) => {
  swiperInst.slideTo(idx);
};

const handleAnimation = () => {
  if (!swiperInst) return;

  const curSlide = swiperInst.slides[activeIndex.value];
  const animElements = curSlide.querySelectorAll(".anim");
  if (animElements.length === 0) return;

  animElements.forEach((element, idx) => {
    element.classList.remove("slideUp");
    setTimeout(() => {
      element.classList.add("slideUp");
    }, (idx + 1) * 300);
  });
};

onBeforeUnmount(() => {
  window.clearTimeout(timerPagination);
});
</script>

<style scoped lang="scss">
.home-swiper {
  height: 100vh;
  position: relative;
  z-index: 100;
  .swiper-wrapper {
    transition-timing-function: ease-in-out;
  }
}
.active-bar {
  transition: width 19.5s linear;
  width: 0.48rem;
}
</style>
