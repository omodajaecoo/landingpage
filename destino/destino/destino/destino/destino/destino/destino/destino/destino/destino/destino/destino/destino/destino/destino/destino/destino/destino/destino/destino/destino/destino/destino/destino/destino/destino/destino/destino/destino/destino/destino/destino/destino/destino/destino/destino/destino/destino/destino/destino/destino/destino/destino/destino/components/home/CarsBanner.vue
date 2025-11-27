<template>
  <div>
    <template v-if="!isMobile">
      <div class="w-full flex flex-col justify-center bg-[#0d0e0e] py-[100px]">
        <template v-for="(slide, index) in slides" :key="index">
          <template v-if="index % 2 === 0">
            <div class="w-full grid grid-cols-2 h-[480px]">
              <div class="flex justify-end items-center">
                <BaseImg :src="slide.imgUrl" class="w-[560px] max-h-[480px] object-cover" />
              </div>
              <div class="flex justify-start items-center">
                <div class="flex flex-col justify-center items-center h-full bg-[#121313] w-[560px] px-[56px] space-y-[42px]">
                  <div class="font-interRegular text-white text-[32px] text-center">
                    {{ slide.title }}
                  </div>
                  <div class="font-interLight text-white text-[16px] text-center">
                    {{ slide.desc }}
                  </div>
                  <div class="flex justify-center items-center">
                    <a :href="slide.link" target="_blank" rel="noopener">
                      <BaseButton type="text" class="font-interRegular text-[20px] px-[20px] py-[25px] border border-white">
                        Más información
                      </BaseButton>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="w-full grid grid-cols-2 h-[480px]">
              <div class="flex justify-end items-center">
                <div class="flex flex-col justify-center items-center  h-full bg-[#121313] w-[560px] px-[56px] space-y-[42px]">
                  <div class="font-interRegular text-white text-[32px] text-center">
                    {{ slide.title }}
                  </div>
                  <div class="font-interSemiRegular text-white text-[16px] text-center">
                    {{ slide.desc }}
                  </div>
                  <div class="flex justify-center items-center">
                    <a :href="slide.link" target="_blank" rel="noopener">
                      <BaseButton type="text" class="font-interRegular text-[20px] px-[20px] py-[25px] border border-white">
                        Más información
                      </BaseButton>
                    </a>
                  </div>
                </div>
              </div>
              <div class="flex justify-start items-center">
                <BaseImg :src="slide.imgUrl" class="w-[560px] max-h-[480px] object-cover" />
              </div>
            </div>
          </template>
        </template>
      </div>
    </template>
    
    <template v-else>
      <div class="w-full h-auto bg-black flex justify-center overflow-hidden">
        <div class="w-full h-auto py-[50px] md:py-[100px] px-[10px] md:px-[24px]">
          <template v-for="(slide, index) in slides" :key="index">
            <div class="" v-if="index === activeIndex"
              v-animate="{
                effect: 'fadeInUp',
                once: true,
              }">
              <div class="flex flex-col justify-center items-center text-center py-[24px] space-y-[42px]">
                <div class="text-white text-[24px] md:text-[32px] font-interRegular">
                  {{ slide.title }}
                </div>
                <div class="text-white text-[14px] md:text-[16px] font-interSemiRegular">
                  {{ slide.desc }}
                </div>
                <a :href="slide.link" target="_blank" rel="noopener"
                  class="font-interRegular text-white text-[20px]">
                  <BaseButton type="text" class="px-[20px] py-[16px] lg:py-[25px] border border-white">
                    {{ slide.btn }}
                  </BaseButton>
                </a>
              </div>
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
                  :src="slide.imgUrl"
                  class="w-full h-[300px] md:h-[980px] object-cover"
                />
              </swiper-slide>
            </swiper>
          </ClientOnly>

          <div class="flex justify-center gap-[calc(10/7.5*1vw)] mt-[calc(40/7.5*1vw)]">
            <div
              v-for="(item, index) in slides"
              :key="index"
              class="w-[calc(48/7.5*1vw)] h-[calc(4/7.5*1vw)]"
              :class="index === activeIndex ? 'bg-white' : 'bg-[rgba(255,255,255,0.2)]'"
              @click="handleChangeSlide(index)"
            ></div>
          </div>

          <template v-for="(slide, index) in slides" :key="index">
            <div class="flex flex-col justify-center items-center py-[24px] space-y-[24px]"
              v-if="index === activeIndex"
              v-animate="{
                effect: 'fadeInUp',
                once: true,
              }"
            >
              <div class="text-white text-[24px] font-interRegular text-center">
                {{ slide.title }}
              </div>
            </div>
            
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import useDeviceType from '~/composables/useDeviceType'
import { type Swiper } from "swiper";

const { isMobile } = useDeviceType()

const slides = [
  {
    title: "Omoda C5",
    desc: "El Omoda C5 Super Hybrid System no solo combina potencia y eficiencia, sino también un diseño que redefine el estilo urbano. Su silueta fastback aerodinámica transmite movimiento incluso en reposo, mientras el frontal sin marco y la parrilla paramétrica en forma de diamante proyectan una estética futurista.",
    imgUrl: "index/banner-value_1.webp",
    btn: 'Más información',
    link: '/files/test.pdf'
  },
  {
    title: "Jaecoo J7",
    desc: "El Jaecoo J7 Super Hybrid System combina elegancia urbana con la fuerza de un auténtico SUV todoterreno. Su diseño vertical y musculoso proyecta autoridad en cada ángulo, mientras la parrilla trapezoidal con detalles cromados y las luces LED en forma de T refuerzan su identidad moderna y poderosa.",
    imgUrl: "index/banner-value_2.webp",
    btn: 'Más información',
    link: '/files/test.pdf'
  }
];

let swiperInst: Swiper;
const activeIndex = ref(0);
const visible = ref(false);

const handleSlideChange = (curSwiper: any) => {
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

<style scoped>
</style>