<template>
    <swiper-container 
      ref="containerRef" 
      class="home-swiper zoomIn overflow-hidden c5-swiper"
      :init="false"
    >
      <swiper-slide
        v-for="(slide, idx) in slides"
        :key="idx"
      >
        <div class="h-[100vh] relative">
          <BaseImg 
            :src="isMobile ?`${slide.imgUrl}_mobile.jpg` : `${slide.imgUrl}.jpg`"
            class="w-full h-full object-cover"
          />
          <div 
            class="info absolute text-white
              lg:left-[2.4rem] lg:bottom-[1.38rem] left-[0.48rem] bottom-[1.71rem]"
            :class="[{ 'opacity-100': visible }, idx == 0 ? 'top-[1.6rem] !bottom-[unset]': '']"
            v-if="!isMobile"
          >
            <div class="text-[0.36rem] font-miLight mb-[0.24rem] anim
              lg:text-[0.32rem] leading-[1.5]" :class="[idx == 0 ? 'lg:w-[4.4rem]': '']">{{ slide.title }}</div>
            <div class="text-[0.24rem] lg:text-[0.16rem] font-miLight leading-[1.5] anim lg:w-[8.86rem]" :class="[idx == 0 ? 'lg:!w-[4.4rem]': '']">{{ slide.desc }}</div>
          </div>
          <div 
            class="info absolute text-white lg:top-[3rem] top-[2.4rem] px-[0.63rem] text-center"
            :class="[{ 'opacity-100': visible }]"
            v-else
          >
            <div class="text-[0.36rem] font-miLight mb-[0.24rem] anim
              lg:text-[0.32rem] leading-[1.5]" :class="[idx == 0 ? 'lg:w-[4.4rem]': '']">{{ slide.mobileTitle }}</div>
            <div class="text-[0.24rem] lg:text-[0.16rem] font-miLight leading-[1.5] anim lg:w-[8.86rem]" :class="[idx == 0 ? 'lg:!w-[4.4rem]': '']">{{ slide.desc }}</div>
          </div>
        </div>
      </swiper-slide>
      <!-- 分页器 -->
      <div 
        slot="container-end" 
        class="absolute bottom-[1.1rem] left-[0.48rem] right-0 z-10
          lg:right-[2.4rem] lg:left-[unset]
          opacity-0"
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
      <!-- slide button -->
      <template v-if="!isMobile">
        <!-- <BaseImg
          v-show="activeIndex == 1"
          @click="slideTo('prev')"
          slot="container-end"
          src="c5/arrow_left.svg"
          class="absolute cursor-pointer top-1/2 -translate-y-1/2 left-[1rem] z-20" />
        <BaseImg
          v-show="activeIndex == 0"
          slot="container-end"
          src="c5/arrow_left_gray.svg"
          class="absolute top-1/2 -translate-y-1/2 left-[1rem] z-20 cursor-not-allowed" />
        <BaseImg
          v-show="activeIndex == 0"
          @click="slideTo('next')"
          slot="container-end"
          src="c5/arrow_right.svg"
          class="absolute cursor-pointer top-1/2 -translate-y-1/2 right-[1rem] z-20" /> -->
        <BaseImg
          @click="slideTo('prev')"
          slot="container-end"
          :src="`c5/arrow_left${activeIndex === 0 ? '_gray' : ''}.svg`"
          :class="`${activeIndex === 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`"
          class="absolute top-1/2 -translate-y-1/2 left-[1.68rem] z-20 w-[0.48rem]" />
        <BaseImg
          @click="slideTo('next')"
          slot="container-end"
          :src="`c5/arrow_left${activeIndex === 0 ? '' : '_gray'}.svg`"
          :class="`${activeIndex === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`"
          class="absolute top-1/2 -translate-y-1/2 right-[1.68rem] z-20 rotate-180 w-[0.48rem]" />
      </template>
    </swiper-container>
</template>

<script lang="ts" setup>
  import { type Swiper } from 'swiper';

  interface SlideItem {
    imgUrl: string;
    title: string;
    desc: string;
    linkUrl: string;
  }

  const props = defineProps<{ slides: SlideItem[]; }>();

  const slideLength = computed(() => props.slides.length);

  const containerRef = ref<null>(null);

  let swiperInst: Swiper;

  const activeIndex = ref(0);
  const visible = ref(false);

  const { isMobile } = useDeviceType();

  const slideTo = (direction: 'prev' | 'next') => {
    if ((direction === 'prev' && activeIndex.value === 0) || (direction === 'next' && activeIndex.value === 1)) {
      return
    }
    if (direction === 'next') {
      swiperInst.slideNext();
    } else {
      swiperInst.slidePrev();
    }
  }

  const handleSlideChange = (curSwiper: any) => {
    activeIndex.value = curSwiper.realIndex;
    visible.value = true;
    handleAnimation();
  }

  const handleInit = (inst: any) => {
    swiperInst = inst;

    handleAnimation();
  }

  const swiper = useSwiper(containerRef, {
    loop: true,
    autoplay: false,
    speed: 500,
    on: {
      slideChange: handleSlideChange,
      init: handleInit
    },
  })

  const activePaginationLeft = computed(() => {
    return {
      left: `${(0.48 + 0.09) * activeIndex.value}rem`
    }
  })

  const handleChangeSlide = (idx: number) => {
    swiperInst.slideTo(idx);
  }

  const handleAnimation = () => {
    if (!swiperInst) return;

    const curSlide = swiperInst.slides[activeIndex.value];
    const animElements = curSlide.querySelectorAll('.anim');
    if (animElements.length === 0) return;

    animElements.forEach((element, idx) => {
      element.classList.remove('slideUp');
      setTimeout(() => {
        element.classList.add('slideUp');
      }, (idx + 1) * 300);
    })
  }
  
</script>

<style scoped lang='scss'>
  .home-swiper {
    height: 100vh;
    position: relative;
    z-index: 100;
    .swiper-wrapper {
      transition-timing-function: ease-in-out;
    }
  }
</style>