<template>
  <ClientOnly>
    <div class="car-swiper relative 
      pt-[2.08rem] pb-[1rem] px-[0.32rem]
      lg:pt-[1.45rem] lg:pb-[1.2rem] lg:px-0"
      :class="props.c5Slides.c5WrapperClassName">
      <!-- title & sub title -->
      <div 
        class="title-info font-miLight mx-auto lg:mb-[0.7rem] mb-[0.32rem]" 
        :style="infoStyle"
        :class="props.c5Slides.c5TitleClassName"
      >
        <div 
          v-if="title" 
          class="text-[0.48rem] leading-[0.64rem]
            lg:text-[0.32rem] lg:leading-[0.53rem] text-[#222]"
        >{{ title }}</div>
        <div 
          v-if="subTitle" 
          class="mt-[0.24rem] text-[0.24rem] lg:text-[0.16rem] leading-[0.32rem] text-[#666]"
        >{{ subTitle }}</div>
      </div>
      <!-- swiper -->
      <swiper-container 
        ref="containerRef" 
        :init="false"
      >
        <swiper-slide
          v-for="(slide, idx) in slides"
          :key="idx"
        > 
          <div 
            class="w-full opacity-50 transition-opacity duration-500" 
            :class="{ '!opacity-100': activeIndex === idx }"
          >
            <BaseImg 
              :src="imgUrl(slide.imgUrl)" 
              class="w-full" 
            />
          </div>
        </swiper-slide>
        <div
          v-if="!tabFlag"
          slot="container-end"
          class="absolute z-30 bottom-[0.6rem] left-1/2 -translate-x-1/2
            px-[0.6rem] lg:flex hidden justify-between items-end "
          :style="infoStyle"
        >
          <span class="leading-[0.32rem] text-white text-[0.24rem]">{{ activeSlide?.title }}</span>
          <div class="flex gap-x-[0.09rem] relative">
            <div 
              class="bar w-[0.48rem] h-[0.02rem] bg-white/30" 
              v-for="(_, idx) in slides" 
              :key="idx"
              @click="handleSlideTo(idx)"
            ></div>
            <div 
              class="active-bar w-[0.48rem] h-[0.02rem] bg-white/80 top-0 absolute duration-300"
              :style="activePaginationLeft"
            ></div>
          </div>
        </div>
      </swiper-container>
      <div 
        class="info py-[0.32rem] mx-auto" 
        :style="infoStyle"
      >
        <!-- pc tab list -->
        <div 
          v-if="tabFlag"
          class="tab-list hidden lg:flex border-b border-[#eee] relative mb-[0.32rem]">
          <div 
            class="tab-item flex-1 text-center leading-[0.32rem] text-[0.24rem] lg:text-[0.2rem] mb-[0.15rem] text-[#666] cursor-pointer"
            :class="{ '!text-[#222]': activeIndex === idx }"
            v-for="(item, idx) in tabList"
            :key="idx"
            @click="handleSlideTo(idx)"
          >{{ item.title }}</div>
          <div 
            class="h-[0.03rem] w-[33.3%] bg-primary duration-300 absolute bottom-0 ease-in-out" 
            :style="{ left: `${33.3 * activeIndex}%`}"
          ></div>
        </div>
        <!-- mb title -->
        <div 
          v-if="activeSlide" 
          class="block lg:hidden text-[0.28rem] leading-[0.37rem]"
        >{{ activeSlide.title }}</div>
        <!-- desc -->
        <div 
          v-if="activeSlide && activeSlide.desc"
          class="lg:text-[#222] text-[#999] text-[0.18rem] lg:text-[0.16rem] font-miLight leading-[0.32rem] mt-[0.24rem]"
          :class="props.c5Slides.descClassName"
        >{{ activeSlide.desc }}</div>
      </div>
      <!-- pagination bar -->
      <div class="flex lg:hidden pagination-bar gap-x-[0.09rem] relative">
        <div 
          class="bar w-[0.48rem] h-[0.02rem] bg-[#222]/20" 
          v-for="(_, idx) in slides" 
          :key="idx"
          @click="handleSlideTo(idx)"
        ></div>
        <div 
          class="active-bar w-[0.48rem] h-[0.02rem] bg-[#222] top-0 absolute duration-300"
          :style="activePaginationLeft"
        ></div>
      </div>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
  import { type Swiper } from 'swiper';
  import { debunce } from '~/utils/common';

  interface Slide {
    imgUrl: string;
    title: string;
    desc: string;
  }

  interface descClass {
    descClassName?: string;
    c5WrapperClassName?: string;
    c5TitleClassName?: string;
  }

  const props = withDefaults(
    defineProps<{
      slides: Slide[];
      ext?: string;
      tabFlag?: boolean;
      title?: string;
      subTitle?: string;
      c5Slides?: descClass;
    }>(),
    {
      ext: 'jpg',
      tabFlag: true,
      c5Slides: () => ({
        descClassName: '',
        c5WrapperClassName: '',
        c5TitleClassName: ''
      })
    }
  ) 

  const containerRef = ref();
  let activeIndex = ref<number>(0);
  let swiperInst: Swiper;
  const tabWrapWidth = ref(1000);

  const { isMobile } = useDeviceType();

  // 响应式切换 pc、mb 的 url
  const imgUrl = computed(() => {
    return function(url: string) {
      if (isMobile.value) {
        return `${url}_mobile.${props.ext}`;
      } else {
        return `${url}.${props.ext}`;
      }
    }
  })
  
  const tabList = props.slides.map(({ desc, title }) => ({desc, title}));
  const activeSlide = computed(() => props.slides.find((_, idx) => idx === activeIndex.value));
  const activePaginationLeft = computed(() => {
    return {
      left: `${(0.48 + 0.09) * activeIndex.value}rem`
    }
  })
  const infoStyle = computed(() => {
    return { width: isMobile.value ? '100%' : `${tabWrapWidth.value}px` }
  })

  const handleInit = (swiper: Swiper) => {
    swiperInst = swiper;
    handleUpdateSwiperSize();
    // 防止 swiper旁边显示不全
    nextTick(() => {
      swiperInst.slideToLoop(0);
    })
  }

  const handleSlideChange = debunce((curSwiper: Swiper) => {
    activeIndex.value = curSwiper.realIndex;
    // handleAnimation();
  })

  const handleUpdateSwiperSize = () => {
    if (!swiperInst) return;
    tabWrapWidth.value = swiperInst.slides[0].offsetWidth;
  }

  const handleSlideTo = (index: number) => {
    activeIndex.value = index;
    swiperInst?.slideToLoop(index);
  }

  const swiper = useSwiper(containerRef, {
    loop: true,
    autoplay: false,
    speed: 500,
    on: {
      init: handleInit,
      slideChange: handleSlideChange,
    },
    breakpoints: {
      1024: {
        slidesPerView: 1.2,
        centeredSlides: true,
        spaceBetween: 24,
        grabCursor: true
      }
    }
  })

  onMounted(() => {
    window.addEventListener('resize', handleUpdateSwiperSize);
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleUpdateSwiperSize);
  })
</script>
<style scoped lang='scss'>
  @media (max-width: 1024px) {
  .c5-desc {
      font-family: "MiSansNormal";
      font-size: 0.24rem;
      color: #666;
    }
  }
</style>