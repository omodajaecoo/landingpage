<template>
  <div class="card-swiper
    pt-[2.08rem] pb-[0.36rem] px-[0.32rem]
    lg:pt-[1.45rem] lg:pb-[1.45rem] lg:px-[2.4rem]
  ">
    <!-- title & btns -->
    <div class="card-top flex justify-between items-center lg:mb-[0.7rem]">
      <span class="text-[0.48rem] leading-[0.64rem] 
        lg:text-[0.32rem] lg:leading-[0.53rem]">{{ title }}</span>
      <div class="change-btns flex gap-x-[0.38rem] lg:gap-x-[0.2rem]" v-if="slides.length > 1">
        <BaseImg
          v-if="activeIndex == 0" 
          src="common/round_left.svg" 
          class="cursor-not-allowed w-[0.48rem] lg:w-[0.4rem]"
        />
        <BaseImg
          v-else 
          src="common/round_left_light.svg" 
          class="cursor-pointer w-[0.48rem] lg:w-[0.4rem]"
          @click="slideTo('prev')" 
        />
        <BaseImg
          v-if="slides && activeIndex == slides.length -1"
          src="common/round_right.svg" 
          class="cursor-not-allowed w-[0.48rem] lg:w-[0.4rem]" 
        />
        <BaseImg
          v-else
          src="common/round_right_light.svg" 
          class="cursor-pointer w-[0.48rem] lg:w-[0.4rem]" 
          @click="slideTo('next')"
        />
      </div>
    </div>
    <swiper-container ref="containerRef" :init="false">
      <swiper-slide
        v-for="(slide, idx) in slides"
        :key="idx"
      > 
        <div class="inner-slide">
          <div
            v-for="(sub, subIndex) in slide"
            :key="sub.title"
            class="mt-[0.32rem] lg:mt-0 inner-slide__item lg:relative group"
          >
            <div class="img-wrap w-full lg:h-full overflow-hidden">
              <BaseImg 
                :src="imgUrl(sub.imgUrl)" 
                class="w-full lg:h-full lg:object-cover duration-300 lg:hover:scale-110" 
              />
            </div>
              <div class="info lg:absolute lg:left-[0.24rem] lg:right-[0.24rem] lg:bottom-[0.24rem] lg:transition-all" :class="{
                'lg:!bottom-[0.14rem]': subIndex === 1,
              }">
                <div class="mt-[0.24rem] leading-[0.42rem]
                  lg:text-[0.16rem] lg:leading-[0.16rem] lg:text-white" :class="{'!lg:text-[0.24rem] text-[#222] text-[0.32rem]': fromE5Desc}">{{ sub.title }}</div>
                  <div class="duration-100 desc mt-[0.12rem] leading-[0.37rem] text-[#999] text-[0.28rem]
                  lg:mt-[0.06rem] lg:leading-[0.21rem] lg:text-[0.14rem] lg:text-white/70 lg:opacity-0 lg:max-h-0 lg:overflow-hidden lg:group-hover:opacity-100 lg:group-hover:max-h-[0.42rem] lg:transition-all lg:duration-300"
                  v-if="(1) || isMobile || fromE5Desc"
                  :class="{'pr-[0.8rem]': fromE5Desc && subIndex === 0, 'pr-[0.3rem]': fromE5Desc && subIndex !== 0,'!mt-[0.16rem]': fromE5Desc }">{{ sub.desc }}</div>
              </div>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script lang="ts" setup>
  import { type Swiper } from 'swiper';
  import { debunce } from '~/utils/common';

  interface CardSlide {
    imgUrl: string;
    title: string;
    desc: string;
  }

  const props = withDefaults(
    defineProps<{
      title: string;
      slides: CardSlide[][];
      ext?: string;
      fromE5Desc?: boolean;
    }>(),
    {
      ext: 'jpg',
      fromE5Desc: false,
    }
  );

  const containerRef = ref();
  let activeIndex = ref<number>(0);
  let swiperInst: Swiper;

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

  const handleInit = (swiper: Swiper) => {
    swiperInst = swiper;
  }

  const handleSlideChange = debunce((curSwiper: Swiper) => {
    activeIndex.value = curSwiper.realIndex;
  })

  const swiper = useSwiper(containerRef, {
    loop: true,
    autoplay: false,
    speed: 500,
    on: {
      init: handleInit,
      slideChange: handleSlideChange,
    },
  })
  const slideTo = (direction: 'prev' | 'next') => {
    if (direction === 'next') {
      swiperInst.slideNext()
    } else {
      swiperInst.slidePrev()
    }
  }
</script>
<style scoped lang='scss'>
  @media screen and (min-width: 1024px) {
    .inner-slide {
      display: grid;
      grid-template-columns: 57.64% 40.69%;
      grid-template-rows: 48.15% 48.15%;
      gap: 0.24rem;
      &__item {
        &:first-child {
          grid-row-start: 1;
          grid-row-end: 3;
          grid-column-start: 1;
          grid-column-end: 2;
        }
        
        .info {
          transform: translateY(0);
          transition: transform 0.3s ease;
        }
        
        .desc {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        &:hover .info {
          transform: translateY(-0.1rem);
        }
      }
    }
  }
</style>