<template>
  <div class="w-full h-auto bg-white flex justify-center overflow-hidden">
    <div
      class="w-[calc(686/7.5*1vw)] h-auto pt-[calc(200/7.5*1vw)] pb-[calc(38/7.5*1vw)] lg:w-[calc(1440/19.2*1vw)] lg:pt-[calc(150/19.2*1vw)] lg:pb-[calc(120/19.2*1vw)]"
    >
      <template v-for="(slide, index) in slides" :key="index">
        <div
          class="text-center"
          v-if="index === activeIndex"
          v-animate="{
            effect: 'fadeInUp',
            once: true,
          }"
        >
          <div
            class="text-[#222] text-[0.48rem] lg:text-[0.32rem] font-miLight lg:font-miRegular leading-[calc(48/7.5*1vw)] lg:leading-[calc(48/19.2*1vw)] mb-[calc(24/7.5*1vw)] lg:mb-[calc(24/19.2*1vw)]"
          >
            {{ slide.title }}
          </div>
          <div
            class="text-[#222] lg:text-[#666] text-[0.24rem] lg:text-[0.16rem] leading-[0.37rem] lg:leading-[calc(21/19.2*1vw)] font-miLight mb-[calc(48/7.5*1vw)] lg:mb-[calc(75/19.2*1vw)]"
          >
            {{ slide.desc }}
          </div>
          <template v-if="slide.link">
            <nuxt-link :to="slide.link">
              <BaseButton>{{ slide.btn }}</BaseButton>
            </nuxt-link>
          </template>
          <template v-else>
            <BaseButton>{{ slide.btn }}</BaseButton>
          </template>
        </div>
      </template>
      <ClientOnly>
        <swiper
          :autoplay="false"
          :speed="500"
          @swiper="handleInit"
          @slide-change="handleSlideChange"
          class="home-swiper mt-[0.6rem]"
        >
          <swiper-slide v-for="(slide, idx) in slides" :key="idx">
            <BaseImg
              :src="isMobile ? slide.imgUrlMobile : slide.imgUrl"
              class="w-full h-[calc(1113/7.5*1vw)] lg:h-[calc(630/19.2*1vw)] object-cover"
            />
          </swiper-slide>
        </swiper>
      </ClientOnly>
      <!-- 分页器 -->
      <div
        v-if="!isMobile"
        class="tab-pagination flex relative h-[calc(62/19.2*1vw)] mt-[calc(14/19.2*1vw)] border-b-[3px] border-[#EEEEEE]"
        :class="'tab-pagination-' + activeIndex"
      >
        <div
          v-for="(item, index) in slides"
          :key="index"
          class="flex-1 flex h-full items-center justify-center text-[0.2rem] font-miNormal cursor-pointer"
          :class="index === activeIndex ? 'text-[#222]' : 'text-[#666]'"
          @click="handleChangeSlide(index)"
        >
          {{ item.tab }}
        </div>
      </div>
      <div
        v-else
        class="flex justify-center gap-[calc(10/7.5*1vw)] mt-[calc(40/7.5*1vw)]"
      >
        <div
          v-for="(item, index) in slides"
          :key="index"
          class="w-[calc(48/7.5*1vw)] h-[calc(4/7.5*1vw)]"
          :class="
            index === activeIndex ? 'bg-[#222]' : 'bg-[rgba(34,34,34,0.2)]'
          "
          @click="handleChangeSlide(index)"
        ></div>
      </div>
      <template v-if="isMobile">
        <template v-for="(slide, index) in slides" :key="index">
          <div
            class="mt-[calc(24/7.5*1vw)]"
            v-if="index === activeIndex"
            v-animate="{
              effect: 'fadeInUp',
              once: true,
            }"
          >
            <div
              class="text-[#222] text-[0.28rem] leading-[calc(37/7.5*1vw)] font-miRegular text-center"
            >
              {{ slide.tab }}
            </div>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type Swiper } from "swiper";

const slides = [
  {
    title: "World's Best NEV Solution",
    desc: "Super Hybird System",
    tab: "Super Hybrid System",
    imgUrl: "index/banner4_1.png",
    imgUrlMobile: "index/banner4_1_mobile.png",
    btn: 'Learn More ',
    link: '/shs',
  },
  {
    title: "Classic Off-Road Technology",
    desc: "All-Road Drive Intelligent System",
    tab: "All-Road Drive Intelligent System",
    imgUrl: "index/banner4_2.jpg",
    imgUrlMobile: "index/banner4_2_mobile.png",
    btn: 'Stay Tuned',
    link: ''
  },
];

let swiperInst: Swiper;

const activeIndex = ref(0);
const visible = ref(false);

const { isMobile } = useDeviceType();

const handleSlideChange = (curSwiper: any) => {
  // activeIndex.value = curSwiper.realIndex;
  activeIndex.value = curSwiper.activeIndex;
  visible.value = true;
  handleAnimation();
};

const handleInit = (inst: any) => {
  swiperInst = inst;

  handleAnimation();
};

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
.tab-pagination {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 50%;
    height: 3px;
    background: #67b0c4;
    transition: left 0.3s linear;
  }

  &-1 {
    &::after {
      left: 50%;
    }
  }
}
</style>
