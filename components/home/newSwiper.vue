<template>
  <div class="home-page w-full h-[100vh] bg-black overflow-hidden">
    <div
      class="w-full h-full"
      v-animate="{
        effect: 'zoomInCenter',
        immediate: true,
      }"
    >
      <swiper
        :loop="true"
        :autoplay="{
          delay: DEFAULT_SLIDE_DELAY,
          disableOnInteraction: false,
        }"
        :speed="500"
        :modules="[SwiperAutoplay]"
        @swiper="handleInit"
        @slide-change="handleSlideChange"
        class="home-swiper"
      >
          <swiper-slide
            v-for="(slide, idx) in slides"
            :key="idx"
            :data-swiper-autoplay="getSlideDelay(slide)"
          >
            <div class="h-[100vh] relative">
              <button
                v-if="props.enableSideNavigation"
                type="button"
                class="side-navigation side-navigation--prev"
                aria-label="Slide anterior"
                @click.stop="handlePreviousSlide"
              />
              <button
                v-if="props.enableSideNavigation"
                type="button"
                class="side-navigation side-navigation--next"
                aria-label="Siguiente slide"
                @click.stop="handleNextSlide"
              />
              <img
                v-if="slide.type === 'image'"
                :src="
                  config.public.staticURL +
                  '/' +
                  (isMobile ? slide.imgUrlMobile : slide.imgUrl)
                "
                class="w-full h-full object-cover"
                :alt="slide.title || slide.desc || 'OMODA JAECOO'"
                decoding="async"
                :fetchpriority="idx === 0 ? 'high' : 'low'"
                :loading="idx === 0 ? 'eager' : 'lazy'"
              />
              <video
                v-else-if="slide.type === 'video' && shouldLoadSlideMedia(idx)"
                :id="'page1KVVideo' + idx"
                :poster="
                  config.public.staticURL +
                  '/' +
                  (isMobile ? slide.imgUrlMobile : slide.imgUrl)
                "
                class="w-full h-full object-cover"
                loop
                muted
                preload="metadata"
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
              <img
                v-else-if="slide.type === 'video'"
                :src="
                  config.public.staticURL +
                  '/' +
                  (isMobile ? slide.imgUrlMobile : slide.imgUrl)
                "
                class="w-full h-full object-cover"
                :alt="slide.title || slide.desc || 'OMODA JAECOO'"
                decoding="async"
                fetchpriority="low"
                loading="lazy"
              />
              <div
                v-if="slide.topLeftText"
                class="top-left-text absolute z-10 text-white"
                :class="[slide.topLeftTextClass, { anim: shouldAnimateSlideContent(idx) }]"
                v-html="slide.topLeftText"
              />
              <img
                v-if="slide.logo"
                :src="config.public.staticURL + '/' + slide.logo"
                class="home-slide-logo"
                :class="slide.logoClass"
                :alt="slide.title ? `${slide.title} logo` : 'Logo del modelo'"
                loading="lazy"
                decoding="async"
              />
              <div
                class="info absolute text-white left-1/2 transform translate-x-[-50%] lg:bottom-[1.1rem] bottom-[1.71rem] flex flex-col items-center text-center"
                :class="{ 'opacity-100': visible }"
              >
                <div
                  v-if="slide.title || slide.desc"
                  class="mb-[0.24rem] flex flex-col items-center text-center"
                  :class="{ anim: shouldAnimateSlideContent(idx) }"
                >
                  <h2
                    v-if="slide.title"
                    class="slide-title m-0 font-[inherit] font-bold text-[0.36rem] leading-[100%] lg:text-[0.72rem]"
                  >
                    {{ slide.title }}
                  </h2>
                  <p
                    v-if="slide.desc"
                    class="slide-desc m-0 mt-[0.12rem] font-[inherit] text-[0.28rem] leading-[100%] lg:mt-[0.18rem] lg:text-[0.44rem]"
                  >
                    {{ slide.desc }}
                  </p>
                </div>
                <div
                  v-if="slide.linkUrl || slide.secondaryButtonUrl"
                  class="slide-actions flex flex-wrap justify-center gap-[0.12rem] lg:gap-[0.2rem]"
                  :class="{ anim: shouldAnimateSlideContent(idx) }"
                >
                  <BaseButton
                    v-if="slide.linkUrl"
                    type="text"
                    class="slide-button-text text-[0.32rem] lg:text-[0.35rem]"
                    @click.stop="handlePrimaryButtonClick(slide.linkUrl)"
                    >{{ slide.buttonText || 'Descubre más' }}</BaseButton
                  >
                  <BaseButton
                    v-if="slide.secondaryButtonUrl"
                    type="text"
                    class="slide-button-text text-[0.32rem] lg:text-[0.35rem]"
                    @click.stop="handleSecondaryButtonClick(slide.secondaryButtonUrl)"
                    >{{ slide.secondaryButtonText }}</BaseButton
                  >
                </div>
              </div>
            </div>
          </swiper-slide>
          <!-- 分页器 -->
          <template #container-end>
            <div
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
          </template>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { type Swiper } from "swiper";
import { useRouter } from "vue-router";
import { useRuntimeConfig } from "#imports";
import useDeviceType from "~/composables/useDeviceType";

interface SlideItem {
  imgUrl: string;
  imgUrlMobile: string;
  videoUrl?: string;
  videoUrlMobile?: string;
  autoplayDelay?: number;
  buttonText?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  topLeftText?: string;
  topLeftTextClass?: string;
  logo?: string;
  logoClass?: string;
  title: string;
  desc: string;
  linkUrl: string;
  type: string;
}

const props = withDefaults(
  defineProps<{
    slides: SlideItem[];
    enableSideNavigation?: boolean;
  }>(),
  {
    enableSideNavigation: false,
  }
);
const DEFAULT_SLIDE_DELAY = 20000;
const PAGINATION_TRANSITION_OFFSET = 500;

const slideLength = computed(() => props.slides.length);

let swiperInst: Swiper;
let hasStartedAutoplay = false;

const activeIndex = ref(0);
const visible = ref(true);
const showPagination = ref(false);
let timerPagination = 0;

const { isMobile } = useDeviceType();

const config = useRuntimeConfig();
const router = useRouter();

const getSlideDelay = (slide?: SlideItem) =>
  slide?.autoplayDelay ?? DEFAULT_SLIDE_DELAY;

const shouldLoadSlideMedia = (idx: number) => {
  return idx === 0 || idx === activeIndex.value;
};

const shouldAnimateSlideContent = (idx: number) => {
  return idx !== 0;
};

const handlePauseVideo = () => {
  const videoDom = document.querySelectorAll(".home-page video");
  videoDom.forEach((dom) => {
    dom.pause();
  });
};

const handleSlideChange = (curSwiper: Swiper) => {
  activeIndex.value = curSwiper.realIndex;
  visible.value = true;
  handleAnimation();

  handlePauseVideo();
  if (props.slides[activeIndex.value].type === "video") {
    nextTick(() => {
      const videoDom = document.querySelector(
        "#page1KVVideo" + activeIndex.value
      ) as HTMLVideoElement;
      if (videoDom) {
        videoDom.load();
        videoDom.play().catch(() => {
        });
      }
    });
  }

  showPagination.value = false;
  window.clearTimeout(timerPagination);
  timerPagination = window.setTimeout(() => {
    showPagination.value = true;
  }, 300);
};

const handleInit = (inst: Swiper) => {
  swiperInst = inst;
  swiperInst.autoplay?.stop();

  handleAnimation();

  showPagination.value = true;

  // Reproducir video inicial si la primera slide es un video
  if (props.slides[0]?.type === "video") {
    setTimeout(() => {
      const videoDom = document.querySelector("#page1KVVideo0") as HTMLVideoElement;
      if (videoDom) {
        videoDom.play().catch(() => {
          // Ignorar error si el play es interrumpido
        });
      }
    }, 100);
  }
};

const startAutoplayAfterInteraction = () => {
  if (hasStartedAutoplay) return;

  hasStartedAutoplay = true;
  swiperInst?.autoplay?.start();
  removeAutoplayStartListeners();
};

const addAutoplayStartListeners = () => {
  window.addEventListener("pointerdown", startAutoplayAfterInteraction, { passive: true });
  window.addEventListener("keydown", startAutoplayAfterInteraction);
};

const removeAutoplayStartListeners = () => {
  window.removeEventListener("pointerdown", startAutoplayAfterInteraction);
  window.removeEventListener("keydown", startAutoplayAfterInteraction);
};

onMounted(() => {
  addAutoplayStartListeners();
});

const activePaginationLeft = computed(() => {
  const paginationDuration = Math.max(
    getSlideDelay(props.slides[activeIndex.value]) - PAGINATION_TRANSITION_OFFSET,
    0
  );

  return {
    left: `${(0.48 + 0.09) * activeIndex.value}rem`,
    "--pagination-duration": `${paginationDuration}ms`,
  };
});

const handleChangeSlide = (idx: number) => {
  swiperInst.slideTo(idx);
};

const handlePreviousSlide = () => {
  swiperInst?.slidePrev();
};

const handleNextSlide = () => {
  swiperInst?.slideNext();
};

const handlePrimaryButtonClick = (url: string) => {
  router.push(url);
};

const handleSecondaryButtonClick = (url: string) => {
  window.open(url, "_blank", "noopener");
};

const handleAnimation = () => {
  if (!swiperInst) return;

  const curSlide = swiperInst.slides[swiperInst.activeIndex];
  if (!curSlide) return;

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
  removeAutoplayStartListeners();
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
  transition: width var(--pagination-duration, 19500ms) linear;
  width: 0.48rem;
}

.info,
.slide-actions {
  z-index: 10;
}

@media (min-width: 751px) and (max-width: 1023px) {
  .slide-title {
    font-size: 0.58rem !important;
  }

  .slide-desc {
    margin-top: 0.16rem !important;
    font-size: 0.36rem !important;
  }

  .slide-button-text {
    font-size: 0.42rem !important;
  }
}

.side-navigation {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 5;
  width: 30%;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.side-navigation--prev {
  left: 0;
}

.side-navigation--next {
  right: 0;
}

.top-left-text {
  top: 1.18rem;
  left: 0.42rem;
  max-width: 80vw;
  font-family: "Inter", sans-serif;
  font-size: 0.24rem;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0;
}

.home-slide-logo {
  position: absolute;
  bottom: 2.35rem;
  left: 50%;
  z-index: 20;
  width: clamp(2.325rem, 66vw, 3.225rem);
  height: auto;
  transform: translateX(-50%);
  pointer-events: none;
}

@media (min-width: 1024px) {
  .top-left-text {
    top: 1.62rem;
    left: 1.1rem;
    max-width: 6rem;
    font-size: 0.32rem;
  }

  .home-slide-logo {
    bottom: 1.72rem;
    left: 1.1rem;
    width: clamp(3.15rem, 21vw, 4.5rem);
    transform: none;
  }
}
</style>
