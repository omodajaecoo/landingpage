<template>
  <div class="car-banner pt-[2.15rem] pb-[1.81rem]"
    :class="'car-banner-' + carSwiperIndex">
    <ClientOnly>
      <!-- tab list -->
      <div v-animate="{
        effect: 'fadeInUp'
      }" class="element w-full text-[0.32rem] lg:w-auto lg:text-[20px]">
        <!-- PC端 tab list -->
        <div v-if="!isMobile" class="tab-list w-full
          text-[#999] font-miLight cursor-pointer duration-300
          flex justify-center items-center gap-x-[0.85rem]">
          <div class="tab-item text-nowrap"
            :class="{'text-[#222]': activeType === item.carType}"
            v-for="(item, idx) in tabList"
            :key="item.name"
            @click="changeType(item.carType, idx)"
          >{{ item.name }}</div>
        </div>
        
        <!-- 移动端 tab swiper -->
        <div v-else class="relative w-full flex justify-center">
          <swiper
            ref="tabSwiperRef"
            class="tab-swiper"
            slides-per-view="auto"
            :centered-slides="true"
            :loop="true"
            :speed="300"
            :initial-slide="0"
            @slide-change="handleTabSwiperChange"
            @swiper="handleTabSwiperInit"
          >
            <swiper-slide
              v-for="(item, idx) in tabList"
              :key="item.name"
              class="!w-auto"
            >
              <div 
                :class="cn('tab-item text-nowrap px-[0.4rem] py-[0.12rem] text-[#999] font-miLight cursor-pointer duration-300 text-center', {'text-[#222] font-bold': activeType === item.carType})"
                @click="changeTabType(item.carType, idx)"
              >
                {{ item.name }}
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- swiper -->
      <swiper
        class="w-full mx-auto lg:!pt-[1.56rem] !pt-[3.15rem] car-type-swiper"
        :class="(activeType === 'j8' && !isMobile) ? 'swiper-no-swiping' : ''"
        loop
        :speed="700"
        @slide-change="handleChange"
        @swiper="handleInit"
      >
        <!-- 车型 icon -->
        <BaseImg 
          slot="container-start" 
          class="absolute top-[calc(2.96rem)] left-[0.3rem]
            lg:left-[3.22rem] lg:top-[calc(1.56rem-0.146rem)]" 
          :class="activeType === 'j7shs' ? 'w-[5.06rem] lg:w-[9.07rem]' : 'w-[2.45rem] lg:w-[4.71rem]'"
          :src="activeIcon" 
        />
        <!-- slides -->
        <swiper-slide
          v-for="slide in carList"
          :key="slide.carType"
          class="text-center"
        > 

          <div
            v-if="!isMobile"
            class="w-[14.38rem] h-[4.33rem] text-center mx-auto relative">
            <BaseImg 
              :src="slide.imgUrl" 
              class="h-[4.32rem] mx-auto" 
            />
            <!-- <HomeCarTrigger v-else class="h-full" /> -->
            <!-- <div class="absolute w-[1.56rem] h-[1.56rem]" :class="slide.wheelLeftClass" v-if="slide.carType !== 'j8'">
              <BaseImg 
                :src="slide.wheelImgUrl" 
                class="w-full h-full animate__animated"
                :class="slide.carType === activeType ? 'animate__spin' : ''"
              />
            </div>
            <div class="absolute w-[1.56rem] h-[1.56rem]" :class="slide.wheelRightClass" v-if="slide.carType !== 'j8'">
              <BaseImg 
                :src="slide.wheelImgUrl" 
                class="w-full h-full animate__animated"
                :class="slide.carType === activeType ? 'animate__spin' : ''"
              />
            </div> -->
          </div>
          <div
            v-else
            class="w-full"
          >
            <BaseImg 
              :src="slide.imgUrl" 
              class="w-full" 
            />
          </div>
        </swiper-slide>
        <!-- slide button -->
        <template v-if="!isMobile">
          <BaseImg
            @click="slideTo('prev')"
            slot="container-end"
            src="common/arrow_dark.svg"
            class="absolute cursor-pointer w-[0.48rem] top-1/2 -translate-y-1/2 left-[1rem] z-20 rotate-180" />
          <BaseImg
            @click="slideTo('next')"
            slot="container-end"
            src="common/arrow_dark.svg"
            class="absolute cursor-pointer w-[0.48rem] top-1/2 -translate-y-1/2 right-[1rem] z-20" />
        </template>
      </swiper>
      <!-- car config number -->
      <div 
        class="mt-[2.56rem] lg:w-full lg:px-[0.95rem] min-h-2 relative
          lg:mt-[1.06rem] lg:mx-auto lg:w-auto lg:px-0
          flex justify-center items-center flex-col lg:flex-row">
        <div
        class="lg:flex lg:flex-wrap grid grid-cols-2 grid-cols-2 gap-y-[0.48rem] lg:w-auto">

        <div 
            v-if="flag"
            class="count-item text-left lg:text-center 
              w-[2.8rem] 
              lg:w-[2.3rem] 
              xl:w-[2.6rem]
              2xl:w-[2.8rem]
              pl-[0.5rem]
              lg:pl-0
              lg:border-r-[0.5px] border-solid border-[#999] last:border-none" 
            v-for="config in activeConfigList"
            :key="config.value">
            <CountToV2 
              ref="countToRef"
              class="inline-block h-[0.84rem]"
              :value="config.value"
              :label="config.label"
              :unit="config.unit"
              :once="false"
              label-class="lg:!text-[0.16rem] text-left !text-[0.22rem] !text-[#4D4D4D]"
              value-class="lg:relative lg:mb-[0.12rem] lg:text-[0.32rem]"
              unit-class="lg:text-[0.24rem] text-[0.38rem] contents"
            />
          </div>
          
        </div>
        <!-- learn more -->
        <BaseButton class="lg:mb-0 lg:ml-[0.8rem] mt-[0.73rem] lg:ml-[0.8rem] lg:mt-0 border-[#222]" @click="goCarDetail">Learn More</BaseButton>
        <!-- mb swiper切换按钮 -->
        <template v-if="isMobile">
          <BaseImg
            @click="slideTo('prev')"
            slot="container-end"
            src="common/arrow_dark.svg"
            class="absolute w-[0.48rem] cursor-pointer bottom-[0.085rem] left-[0.75rem] z-20 rotate-180" />
          <BaseImg
            @click="slideTo('next')"
            slot="container-end"
            src="common/arrow_dark.svg"
            class="absolute w-[0.48rem] cursor-pointer bottom-[0.085rem] right-[0.75rem] z-20" />
        </template>
      </div>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
  import { type Swiper } from 'swiper';
  import type CountTo from '../CountTo.vue';

  const router = useRouter();

  const { isMobile } = useDeviceType();
  
  const carList = [
    {
      name: 'OMODA C5',
      carType: 'c5',
      iconUrl: 'index/i_c5.png',
      imgUrl: 'index/banner2_c5.png',
      wheelImgUrl: 'index/banner2_c5_wheel.png',
      wheelLeftClass: 'bottom-[0.42rem] left-[3.46rem] ',
      wheelRightClass: 'bottom-[0.46rem] right-[3.37rem]', 
      configList: [
        {
          label: 'LENGTH',
          value: '4400',
          unit: 'mm'
        },
        {
          label: 'WIDTH',
          value: '1830',
          unit: 'mm'
        },
        {
          label: 'HEIGHT',
          value: '1588',
          unit: 'mm'
        },
        {
          label: 'WHEELBASE',
          value: '2630',
          unit: 'mm'
        },
      ]
    },
    {
      name: 'OMODA E5',
      carType: 'e5',
      iconUrl: 'index/i_e5.png',
      imgUrl: 'index/banner2_e5.png',
      wheelImgUrl: 'index/banner2_e5_wheel.png',
      wheelLeftClass: 'bottom-[0.42rem] left-[3.46rem]',
      wheelRightClass: 'bottom-[0.4rem] right-[3.45rem]', 
      configList: [
        {
          label: 'LENGTH',
          value: '4424',
          unit: 'mm'
        },
        {
          label: 'WIDTH',
          value: '1830',
          unit: 'mm'
        },
        {
          label: 'HEIGHT', 
          value: '1588',
          unit: 'mm'
        },
        {
          label: 'WHEELBASE',
          value: '2630',
          unit: 'mm'
        },
      ]
    },
    {
      name: "JAECOO J5",
      carType: "j5",
      iconUrl: "index/i_j5.png",
      imgUrl: "index/banner2_j5.png",
      wheelImgUrl: "index/banner2_j5_wheel.png",
      wheelLeftClass: "bottom-[0.42rem] left-[3.46rem]",
      wheelRightClass: "bottom-[0.4rem] right-[3.45rem]",
      configList: [
        {
          label: 'LENGTH',
          value: '4390',
          unit: 'mm'
        },
        {
          label: 'WIDTH',
          value: '1860',
          unit: 'mm'
        },
        {
          label: 'HEIGHT',
          value: '1650',
          unit: 'mm'
        },
        {
          label: 'WHEELBASE',
          value: '2620',
          unit: 'mm'
        }, 
      ],
    },
    {
      name: 'JAECOO J7',
      carType: 'j7',
      iconUrl: 'index/i_j7.png',
      imgUrl: 'index/banner2_j7.png',
      wheelImgUrl: 'index/banner2_j7_wheel.png',
      wheelLeftClass: 'bottom-[0.38rem] left-[3.4rem]',
      wheelRightClass: 'bottom-[0.42rem] right-[3.6rem]',
      configList: [
        {
          label: 'LENGTH',
          value: '4500',
          unit: 'mm'
        },
        {
          label: 'WIDTH',
          value: '1865',
          unit: 'mm'
        },
        {
          label: 'HEIGHT',
          value: '1680',
          unit: 'mm'
        },
        {
          label: 'WHEELBASE',
          value: '2672',
          unit: 'mm'
        },
      ]
    },
     {
      name: "JAECOO J7 SHS",
      carType: "j7shs",
      iconUrl: "index/i_j7shs.png",
      imgUrl: "index/banner2_j7shs.png",
      wheelImgUrl: "index/banner2_j7shs_wheel.png",
      wheelLeftClass: "bottom-[0.42rem] left-[3.46rem]",
      wheelRightClass: "bottom-[0.4rem] right-[3.45rem]",
      configList: [
        {
          label: 'LENGTH',
          value: '4500',
          unit: 'mm'
        },
        {
          label: 'WIDTH',
          value: '1865',
          unit: 'mm'
        },
        {
          label: 'HEIGHT',
          value: '1670',
          unit: 'mm'
        },
        {
          label: 'WHEELBASE',
          value: '2672',
          unit: 'mm'
        }, 
      ],
    },
    {
      name: 'JAECOO J8',
      carType: 'j8',
      iconUrl: 'index/i_j8.png',
      imgUrl: 'index/banner2_j8.png',
      wheelImgUrl: 'index/banner2_j8_wheel.png',
      configList: [
        {
          label: 'LENGTH',
          value: '4820',
          unit: 'mm'
        },
        {
          label: 'WIDTH',
          value: '1930',
          unit: 'mm'
        },
        {
          label: 'HEIGHT',
          value: '1710',
          unit: 'mm'
        },
        {
          label: 'WHEELBASE',
          value: '2820',
          unit: 'mm'
        },
      ]
    },
  ]

  const tabList = computed(() => carList.map(({ carType, name }) => ({ carType, name })));
  const activeType = ref('c5');

  const activeIcon = computed(() => {
    const findItem = carList.find(item => item.carType === activeType.value);
    return findItem ? findItem.iconUrl : '';
  })

  const activeConfigList = computed(() => {
    const findItem = carList.find(item => item.carType === activeType.value);
    return findItem ? findItem.configList : [];
  })
  
  let carSwiperInst: Swiper;
  let tabSwiperInst: Swiper;
  const countToRef = ref<InstanceType<typeof CountTo>[]>();
  const tabSwiperRef = ref();
  const flag = ref(true);
  const direction = ref('');
  const carSwiperIndex = ref(0);
  const isUpdating = ref(false); // 防止循环调用的标志位

  const handleInit = (swiper: any) => {
    carSwiperInst = swiper as Swiper;
    // 可视范围内数字动效开始
    nextTick(() => {
      handleCountTo();
    })
  }

  const handleTabSwiperInit = (swiper: any) => {
    tabSwiperInst = swiper as Swiper;
    // 初始化时滑动到当前激活的tab
    const currentIndex = tabList.value.findIndex(item => item.carType === activeType.value);
    if (currentIndex !== -1) {
      nextTick(() => {
        tabSwiperInst.slideToLoop(currentIndex, 0); // 0表示无动画
      });
    }
  }

  const handleTabSwiperChange = (swiper: any) => {
    if (isUpdating.value) return; // 防止循环调用
    
    const { realIndex } = swiper;
    const targetType = tabList.value[realIndex].carType;
    if (activeType.value !== targetType) {
      isUpdating.value = true;
      activeType.value = targetType;
      carSwiperIndex.value = realIndex;
      
      // 同步车型轮播
      if (carSwiperInst) {
        carSwiperInst.slideToLoop(realIndex);
      }
      handleCountTo();
      
      // 延迟重置标志位
      setTimeout(() => {
        isUpdating.value = false;
      }, 100);
    }
  }

  const handleChange = (swiper: any) => {
    if (isUpdating.value) return; // 防止循环调用
    
    const { realIndex } = swiper;
    carSwiperIndex.value = realIndex;
    
    isUpdating.value = true;
    const targetType = tabList.value[realIndex].carType;
    activeType.value = targetType;
    
    // 同步移动端 tab swiper
    if (isMobile.value && tabSwiperInst) {
      tabSwiperInst.slideToLoop(realIndex);
    }
    
    handleCountTo();
    
    // 延迟重置标志位
    setTimeout(() => {
      isUpdating.value = false;
    }, 100);
  }

  const changeType = (type: string, idx: number) => {
    if (activeType.value === type || isUpdating.value) return;
    
    isUpdating.value = true;
    const lastIndex = carSwiperInst.realIndex;
    direction.value = lastIndex > idx ? 'prev' : 'next';
    activeType.value = type;
    carSwiperIndex.value = idx;
    
    nextTick(() => {
      carSwiperInst.slideToLoop(idx);
      // 同步移动端 tab swiper
      if (isMobile.value && tabSwiperInst) {
        tabSwiperInst.slideToLoop(idx);
      }
      handleCountTo();
      
      // 延迟重置标志位
      setTimeout(() => {
        isUpdating.value = false;
      }, 100);
    })
  }

  const changeTabType = (type: string, idx: number) => {
    if (activeType.value === type || isUpdating.value) return;
    
    isUpdating.value = true;
    activeType.value = type;
    carSwiperIndex.value = idx;
    
    // 同步车型轮播
    if (carSwiperInst) {
      carSwiperInst.slideToLoop(idx);
    }
    // 同步 tab swiper
    if (tabSwiperInst) {
      tabSwiperInst.slideToLoop(idx);
    }
    handleCountTo();
    
    // 延迟重置标志位
    setTimeout(() => {
      isUpdating.value = false;
    }, 100);
  }

  const slideTo = (direction: 'prev' | 'next') => {
    if ((activeType.value === carList[carList.length-1].carType && direction === 'next') || (activeType.value === carList[0].carType && direction === 'prev')) {
      return
    }
    if (direction === 'next') {
      carSwiperInst.slideNext();
    } else {
      carSwiperInst.slidePrev();
    }
    handleCountTo();
    const findItem = carList.find((_, idx) => idx === carSwiperInst.realIndex);
    if (!findItem) return;
    activeType.value = findItem.carType;
  }

  const handleCountTo = () => {
    flag.value = false;
    nextTick(() => {
      flag.value = true;
    })
  } 

  const goCarDetail = () => {
    router.push(`/${activeType.value}`);
  }

</script>

<style lang="scss" scoped>
  .car-banner {
    overflow: hidden;
    .car-type-swiper::part(container) {
      overflow: visible;
    }

    &-0 {
      background-image: linear-gradient(to right, #e6ebf0, #9fa3a9);
    }

    &-1 {
      background-image: linear-gradient(to right, #d8e5e8, #9fbcbb);
    }

    &-2 {
      background-image: linear-gradient(to right, #d5e2e6, #a1ced9);
    }

    &-3 {
      background-image: linear-gradient(to right, #f4f9fe, #d5dcee);
    }

    &-4  {
      background-image: linear-gradient(to right, #dee7ef, #b7c1cf);
    }

    &-5 {
      background-image: linear-gradient(to right, #dae5e8, #7aabb9);
    }
  }

  // 移动端 tab swiper 样式
  .tab-swiper {
    overflow: visible;
    max-width: 90%;
    margin: 0 auto;
    
    :deep(.swiper-wrapper) {
      align-items: center;
    }
    
    :deep(.swiper-slide) {
      transition: all 0.3s ease;
      opacity: 0.6;
      transform: scale(0.9);
      width: auto !important;
      
      &.swiper-slide-active {
        opacity: 1;
        transform: scale(1);
      }
      
      &.swiper-slide-next,
      &.swiper-slide-prev {
        opacity: 0.8;
        transform: scale(0.95);
      }
    }
  }

  /* 添加过渡效果 */
  :deep(swiper-slide) {
    transition: opacity 0.7s ease-in-out, transform 0.7s ease-in-out;
  }

  /* 隐藏滚动条 */
.element::-webkit-scrollbar {
    display: none;
}
</style>