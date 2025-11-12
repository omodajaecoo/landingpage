<template>
  <div class="w-full h-[100vh] bg-black overflow-hidden">
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
          :autoplay="false"
          :speed="500"
          @swiper="handleInit"
          @slide-change="handleSlideChange"
          class="home-swiper"
        >
          <swiper-slide v-for="(slide, idx) in slides" :key="idx">
            <div class="h-[100vh] relative">
              <BaseImg
                :src="isMobile ? slide.imgUrlMobile : slide.imgUrl"
                class="w-full h-full object-cover"
              />
              <div
                class="info absolute text-white lg:left-[0.6rem] lg:bottom-[1.1rem] left-[0.48rem] bottom-[1.71rem]"
                :class="{ 'opacity-100': visible }"
              >
                <div
                  class="text-[0.48rem] lg:text-[0.4rem] font-miRegular leading-[0.64rem] mb-[0.1rem] lg:mb-0 anim lg:leading-[0.74rem]"
                >
                  {{ slide.title }}
                </div>
                <div
                  class="text-[0.28rem] leading-[0.37rem] lg:text-[0.16rem] font-miLight lg:leading-[0.27rem] mb-[0.32rem] anim"
                >
                  {{ slide.desc }}
                </div>
                <BaseButton
                  type="text"
                  class="text-[0.32rem] lg:text-[0.16rem] anim"
                  >Learn More</BaseButton
                >
              </div>
            </div>
          </swiper-slide>
          <!-- 分页器 -->
          <div
            slot="container-end"
            class="absolute bottom-[1.1rem] left-[0.48rem] right-0 z-10 lg:right-[0.6rem] lg:left-[unset] opacity-0"
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
                class="active-bar w-[0.48rem] h-[0.02rem] bg-white/80 absolute top-0 duration-300"
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
  title: string;
  desc: string;
  linkUrl: string;
}

const props = defineProps<{ slides: SlideItem[] }>();

const slideLength = computed(() => props.slides.length);

let swiperInst: Swiper;

const activeIndex = ref(0);
const visible = ref(false);

const { isMobile } = useDeviceType();

const handleSlideChange = (curSwiper: any) => {
  activeIndex.value = curSwiper.realIndex;
  visible.value = true;
  handleAnimation();
};

const handleInit = (inst: any) => {
  swiperInst = inst;

  handleAnimation();
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
</style>
