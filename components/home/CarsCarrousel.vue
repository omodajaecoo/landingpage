<template>
  <div class="car-banner pt-[2.15rem] pb-[1.81rem]" :class="'car-banner-' + carSwiperIndex">
    <ClientOnly>
      <!-- Tab Names -->
      <div v-animate="{
        effect: 'fadeInUp'
      }" class="element w-full text-[0.32rem] lg:w-auto lg:text-[20px]">
        <!-- Tab title -->
        <div v-if="!isMobile" class="tab-list w-full
          text-[#999] font-miLight cursor-pointer duration-300
          flex justify-center items-center gap-x-[0.85rem]">
          <div class="tab-item text-nowrap" :class="{ 'text-[#222]': activeType === item.carType }"
            v-for="(item, idx) in tabList" :key="item.name" @click="changeType(item.carType, idx)">{{ item.name }}</div>
        </div>

        <!-- Tab swiper for mobile -->
        <div v-else class="relative w-full flex justify-center">
          <swiper ref="tabSwiperRef" class="tab-swiper" slides-per-view="auto" :centered-slides="true" :loop="false"
            :speed="300" :initial-slide="0" @slide-change="handleTabSwiperChange" @swiper="handleTabSwiperInit">
            <swiper-slide v-for="(item, idx) in tabList" :key="item.name" class="!w-auto">
              <div
                :class="cn('tab-item text-nowrap px-[0.4rem] py-[0.12rem] text-[#999] font-miLight cursor-pointer duration-300 text-center', { 'text-[#222] font-bold': activeType === item.carType })"
                @click="changeTabType(item.carType, idx)">
                {{ item.name }}
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>

      <!-- Swiper for car types -->
      <swiper class="w-full mx-auto lg:!pt-[1.56rem] !pt-[2.3rem] car-type-swiper"
        :class="(activeType === 'j8' && !isMobile) ? 'swiper-no-swiping' : ''" loop :speed="700"
        @slide-change="handleChange" @swiper="handleInit">

        <!-- Logo of car type -->
        <BaseImg slot="container-start" class="absolute top-[calc(1.8rem)] left-[0.3rem]
            lg:left-[3.22rem] lg:top-[calc(1.56rem-0.146rem)]"
          :class="'w-[2.45rem] lg:w-[4.71rem]'"
          :src="activeIcon" />

        <!-- Slides - Car Images -->
        <swiper-slide v-for="slide in carList" :key="slide.carType" class="text-center">
          <div v-if="!isMobile" class="w-[14.38rem] h-[4.33rem] text-center mx-auto relative">
            <BaseImg :src="slide.imgUrl" class="h-[4.32rem] mx-auto" />
          </div>
          <div v-else class="w-full">
            <BaseImg :src="slide.imgUrl" class="w-full" />
          </div>
        </swiper-slide>

        <!-- Swiper navigation buttons -->
        <template v-if="!isMobile">
          <BaseImg @click="slideTo('prev')" slot="container-end" src="common/arrow_dark.svg"
            class="absolute cursor-pointer w-[0.48rem] top-1/2 -translate-y-1/2 left-[1rem] z-20 rotate-180" />
          <BaseImg @click="slideTo('next')" slot="container-end" src="common/arrow_dark.svg"
            class="absolute cursor-pointer w-[0.48rem] top-1/2 -translate-y-1/2 right-[1rem] z-20" />
        </template>
      </swiper>

      <!-- Car configuration specs - Mobile --
      <div class="mt-[40px] relative flex justify-center items-center flex-col lg:hidden">

        <div class="grid grid-cols-2 gap-y-[0.48rem] ">

          <div v-if="flag" class="count-item text-left lg:text-center 
              w-[2.8rem]
              pl-[0.5rem]
              border-solid border-[#999] last:border-none  h-auto"
            v-for="config in activeConfigList" :key="config.value">
            <CountToV2 ref="countToRef" class="inline-block h-auto" :value="config.value" :label="config.label"
              :unit="config.unit" :once="false"
              label-class="text-left !text-[0.22rem] !text-[#4D4D4D] !leading-none"
              value-class="!leading-none !mb-0"
              unit-class="text-[0.38rem] contents" />
          </div>

        </div>

        !-- Learn more button --
        <BaseButton class="mt-[0.33rem] border-[#222] text-[16px]" @click="goCarDetail">
          Descubre más
        </BaseButton>

        !-- Swiper navigation buttons - Mobile 
        <template v-if="isMobile">
          <BaseImg @click="slideTo('prev')" slot="container-end" src="common/arrow_dark.svg"
            class="absolute w-[0.48rem] cursor-pointer bottom-[0.085rem] left-[0.75rem] z-20 rotate-180" />
          <BaseImg @click="slideTo('next')" slot="container-end" src="common/arrow_dark.svg"
            class="absolute w-[0.48rem] cursor-pointer bottom-[0.085rem] right-[0.75rem] z-20" />
        </template>
      </div>-->

      <!-- Car configuration specs - Desktop -->
      <div class="flex flex-col lg:flex-row flex-wrap justify-center items-center flex-row relative mt-[70px] px-[8%] gap-y-[80px] ">
        <div class="flex flex-col md:flex-row justify-start items-start md:justify-center md:w-full md:max-w-[1120px] gap-y-[20px] md:gap-y-[60px]">
          <template v-for="(config, index) in activeConfigList" :key="config.value">
            <div v-if="flag" class="flex md:px-[48px] md:py-[10px] leading-none">
              <span class='md:text-center text-[20px] text-[#222] font-interSemiRegular'>{{ config.label }}</span>
            </div>
            <!-- Línea divisoria -->
            <div v-if="index < activeConfigList.length - 1"
              class="self-stretch h-[1px] md:w-[1px] md:h-auto md:self-stretch bg-[#999]"
            ></div>
          </template>
        </div>        
        <!-- Learn more button -->
        <div class="flex justify-center">
          <BaseButton class="border-[#222] font-interRegular text-[20px] py-[16px] px-[20px]" @click="goCarDetail">
            Descubre más
          </BaseButton>
        </div>

        <!-- Swiper navigation buttons - Mobile -->
        <template v-if="isMobile">
          <BaseImg @click="slideTo('prev')" slot="container-end" src="common/arrow_dark.svg"
            class="absolute w-[0.48rem] cursor-pointer bottom-[0.085rem] left-[0.75rem] z-20 rotate-180" />
          <BaseImg @click="slideTo('next')" slot="container-end" src="common/arrow_dark.svg"
            class="absolute w-[0.48rem] cursor-pointer bottom-[0.085rem] right-[0.75rem] z-20" />
        </template>
      </div>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import { type Swiper } from 'swiper';

const router = useRouter();

const { isMobile } = useDeviceType();

const carList = [
  {
    name: 'OMODA C5',
    carType: 'omoda-c5',
    iconUrl: 'index/cars/omoda-c5/logo_c5.webp',
    imgUrl: 'index/cars/omoda-c5/banner_c5.webp',
    configList: [
      { label: '+1.000 KMS AUTONOMÍA HEV', value: '1000', unit: 'KMS AUTONOMIA' },
      { label: '24.6" PANTALLA DUAL', value: '24', unit: '.6" PANTALLA DUAL' },
      { label: '6 AIRBAGS', value: '6', unit: '.  AIRBAGS' },
    ]
  },
  {
    name: 'OMODA E5',
    carType: 'omoda-e5',
    iconUrl: 'index/cars/omoda-e5/logo_e5.webp',
    imgUrl: 'index/cars/omoda-e5/banner_e5.webp',
    configList: [
      { label: '+505 KMS AUTONOMÍA EV (NEDC)', value: '4424', unit: 'mm' },
      { label: '24.6" PANTALLA DUAL', value: '1830', unit: 'mm' },
      { label: '6 AIRBAGS', value: '1588', unit: 'mm' },
    ]
  },
  {
    name: 'JAECOO J7',
    carType: 'jaecoo-j7',
    iconUrl: 'index/cars/jaecoo-j7/logo_j7.webp',
    imgUrl: 'index/cars/jaecoo-j7/banner_j7.webp',
    configList: [
      { label: '+1.200 KMS AUTONOMÍA PHEV', value: '4500', unit: 'mm' },
      { label: '14.8" PANTALLA VERTICAL', value: '1865', unit: 'mm' },
      { label: '7 AIRBAGS', value: '1680', unit: 'mm' },
    ]
  }
]


const tabList = computed(() => carList.map(({ carType, name }) => ({ carType, name })))
const activeType = ref('c5')
const carSwiperIndex = ref(0)
const flag = ref(true)
const isUpdating = ref(false)

let carSwiperInst: Swiper
let tabSwiperInst: Swiper

const activeIcon = computed(() =>
  carList.find(item => item.carType === activeType.value)?.iconUrl || ''
)

const activeConfigList = computed(() =>
  carList.find(item => item.carType === activeType.value)?.configList || []
)

const handleInit = (swiper: any) => {
  carSwiperInst = swiper as Swiper
  nextTick(() => handleCountTo())
}

const handleTabSwiperInit = (swiper: any) => {
  tabSwiperInst = swiper as Swiper
  const currentIndex = tabList.value.findIndex(item => item.carType === activeType.value)
  if (currentIndex !== -1) {
    nextTick(() => tabSwiperInst.slideTo(currentIndex, 0))
  }
}

const handleTabSwiperChange = (swiper: any) => {
  if (isUpdating.value) return

  const { activeIndex } = swiper
  const targetType = tabList.value[activeIndex].carType

  if (activeType.value !== targetType) {
    isUpdating.value = true
    activeType.value = targetType
    carSwiperIndex.value = activeIndex

    carSwiperInst?.slideToLoop(activeIndex)
    handleCountTo()

    setTimeout(() => { isUpdating.value = false }, 100)
  }
}

const handleChange = (swiper: any) => {
  if (isUpdating.value) return

  const { realIndex } = swiper
  carSwiperIndex.value = realIndex

  isUpdating.value = true
  activeType.value = tabList.value[realIndex].carType

  if (isMobile.value && tabSwiperInst) {
    tabSwiperInst.slideTo(realIndex)
  }

  handleCountTo()
  setTimeout(() => { isUpdating.value = false }, 100)
}

const changeType = (type: string, idx: number) => {
  if (activeType.value === type || isUpdating.value) return

  isUpdating.value = true
  activeType.value = type
  carSwiperIndex.value = idx

  nextTick(() => {
    carSwiperInst.slideToLoop(idx)
    if (isMobile.value && tabSwiperInst) {
      tabSwiperInst.slideTo(idx)
    }
    handleCountTo()
    setTimeout(() => { isUpdating.value = false }, 100)
  })
}

const changeTabType = (type: string, idx: number) => {
  if (activeType.value === type || isUpdating.value) return

  isUpdating.value = true
  activeType.value = type
  carSwiperIndex.value = idx

  carSwiperInst?.slideToLoop(idx)
  tabSwiperInst?.slideTo(idx)
  handleCountTo()

  setTimeout(() => { isUpdating.value = false }, 100)
}

const slideTo = (direction: 'prev' | 'next') => {
  const isFirstSlide = activeType.value === carList[0].carType
  const isLastSlide = activeType.value === carList[carList.length - 1].carType

  if ((isLastSlide && direction === 'next') || (isFirstSlide && direction === 'prev')) {
    return
  }

  direction === 'next' ? carSwiperInst.slideNext() : carSwiperInst.slidePrev()
  handleCountTo()

  const currentCar = carList.find((_, idx) => idx === carSwiperInst.realIndex)
  if (currentCar) activeType.value = currentCar.carType
}

const handleCountTo = () => {
  flag.value = false
  nextTick(() => { flag.value = true })
}

const goCarDetail = () => {
  router.push(`/models/${activeType.value}`)
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
    background-image: linear-gradient(to right, #f4f9fe, #d5dcee);
  }
}

/* Tab swiper móvil */
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

/* Transición de slides */
:deep(swiper-slide) {
  transition: opacity 0.7s ease-in-out, transform 0.7s ease-in-out;
}
</style>