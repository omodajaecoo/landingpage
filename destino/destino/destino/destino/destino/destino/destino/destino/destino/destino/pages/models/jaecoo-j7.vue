<template>
  <NuxtLayout name="layout" @custom-event="handleCustomEvent">
    <template #slidesSection>
      <SwiperSlide class="section first-page">
        <img
          loading="lazy"
          :src="
            ispc
              ? dir + 'images/models/banner.webp'
              : dir + 'images/models/page1Banner_mob.webp'
          "
          class="banner"
        />
        <img
          loading="lazy"
          src="/images/models/page1icon_mob.webp"
          v-if="!ispc"
          class="mob-icon"
        />
  <div class="absolute left-1/2 -translate-x-1/2 bottom-[10px] sm:bottom-[115px] lg:bottom-[50px] flex items-center justify-center w-fit">
          <Transition
            name="slide-fade"
          >
            <div
              class=""
              v-if="currentPage == 0"
            >
              <div class="flex flex-row items-center justify-center w-[90vw] lg:w-[70vw]">
                <div class="pr-[10px] lg:pr-[48px] border-r border-white font-interSemiBold text-[12px] sm:text-[20px]">1.000KMS AUTONOMÍA</div>
                <div class="px-[10px] lg:px-[48px] border-r border-white font-interSemiBold text-[12px] sm:text-[20px]">24.6" PANTALLA DUAL</div>
                <div class="pl-[10px] lg:pl-[48px] font-interSemiBold text-[12px] sm:text-[20px]">6 AIRBAGS</div>
              </div>
            </div>
          </Transition>
        </div>
      </SwiperSlide>
      <SwiperSlide class="section third-page">
        <img
          loading="lazy"
          :src="
            ispc
              ? dir + 'images/models/page3bg2.webp'
              : dir + 'images/models/page3bg2_mob.webp'
          "
          class="banner"
        />
        <div
          class="title bottom-[10px] sm:bottom-[40px]"
          v-if="currentPage == 1"
        >
          
          <Transition
            name="slide-fade"
            v-for="(item, idx) in thirdPage_title2"
            :key="idx"
          >
            <div class="txt font-interSemiRegular text-[14px] sm:text-[16px]" v-if="currentPage == 1">
              {{ item }}
            </div>
          </Transition>
        </div>
      </SwiperSlide>
      <SwiperSlide class="section fourth-page">
        <Swiper
          v-if="ispc"
          class="swiper-container my_swiper_3"
          :modules="[SwiperPagination, SwiperEffectCreative]"
          :slides-per-view="1"
          :loop="true"
          @swiper="onPage4Swiper"
        >
          <SwiperSlide v-for="(slide, idx) in slides2" :key="idx">
            <img loading="lazy" :src="slide.imgsrc" class="img" />
            <div v-if="slide.ismask" class="mask"></div>
            <div class="title">
              
              <Transition
                name="slide-fade"
                v-for="(item, ldex) in slide.label"
                :key="ldex"
                :style="[
                  currentPage == 2
                    ? 'transition-delay: ' + ldex * 0.15 + 's;'
                    : 'transition-delay: 0s;',
                ]"
              >
                <div class="word font-interSemiRegular text-[16px]" v-if="currentPage == 2">
                  {{ item }}
                </div>
              </Transition>
             
            </div>
          </SwiperSlide>
          <img
            loading="lazy"
            class="btn next"
            src="/images/page2_right_arrow.webp"
            alt="next"
            v-if="slides2.length > 1"
            @click="changePage4_2('next')"
          />
          <img
            loading="lazy"
            class="btn prev"
            src="/images/page2_left_arrow.webp"
            alt="prev"
            v-if="slides2.length > 1"
            @click="changePage4_2('next')"
          />
        </Swiper>
        <ClientOnly fallback-tag="span" fallback="Loading comments...">
          <modelSwiper
            modid="mobslides2"
            :swiperArr="slides2_mob"
            :needTitleBg="false"
            :needPagination="true"
            :needCarmodel="false"
            :shownum="3"
            :curnum="currentPage"
            v-if="!ispc"
          ></modelSwiper>
        </ClientOnly>
      </SwiperSlide>
      <SwiperSlide class="section third-page">
        <img
          loading="lazy"
          :src="
            ispc
              ? dir + 'images/models/page3bg.webp'
              : dir + 'images/models/page3bg_mob.webp'
          "
          class="banner"
        />
        <div
          class="title bottom-[10px] sm:bottom-[40px]"
          v-if="currentPage == 3"
        >
          
          <Transition
            name="slide-fade"
            v-for="(item, idx) in thirdPage_title"
            :key="idx"
          >
            <div class="txt font-interSemiRegular text-[16px] sm:text-[16px]" v-if="currentPage == 3">
              {{ item }}
            </div>
          </Transition>
          
        </div>
      </SwiperSlide>
      <SwiperSlide class="section fourth-page">
        <Swiper
          v-if="ispc"
          class="swiper-container my_swiper_2"
          :modules="[SwiperPagination, SwiperEffectCreative]"
          :slides-per-view="1"
          :loop="true"
          @swiper="onPage4Swiper"
        >
          <SwiperSlide v-for="(slide, idx) in slides" :key="idx">
            <img loading="lazy" :src="slide.imgsrc" class="img" />
            <div v-if="slide.ismask" class="mask"></div>
            <div class="title">
              
              <Transition
                name="slide-fade"
                v-for="(item, ldex) in slide.label"
                :key="ldex"
                :style="[
                  currentPage == 4
                    ? 'transition-delay: ' + ldex * 0.15 + 's;'
                    : 'transition-delay: 0s;',
                ]"
              >
                <div class="word font-interSemiRegular text-[16px]" v-if="currentPage == 4">
                  {{ item }}
                </div>
              </Transition>        
            </div>
          </SwiperSlide>
          <img
            loading="lazy"
            class="btn next"
            src="/images/page2_right_arrow.webp"
            alt="next"
            @click="changePage4('next')"
          />
          <img
            loading="lazy"
            class="btn prev"
            src="/images/page2_left_arrow.webp"
            alt="prev"
            @click="changePage4('next')"
          />
        </Swiper>
        <ClientOnly fallback-tag="span" fallback="Loading comments...">
          <modelSwiper
            modid="mobslides"
            :swiperArr="slides_mob"
            :needTitleBg="false"
            :needPagination="true"
            :needCarmodel="false"
            :shownum="5"
            :curnum="currentPage"
            v-if="!ispc"
          ></modelSwiper>
        </ClientOnly>
      </SwiperSlide>
      <SwiperSlide class="section five-page" v-if="ispc">
        <div class="img-main">
          <div class="img-item">
            <Transition name="slide-fade">
              <img
                loading="lazy"
                src="/images/models/page5Img1.webp"
                class="img"
                v-if="currentPage == 5"
              />
            </Transition>
            <div class="txt" style="text-align: left">
              <Transition name="slide-fade">
                <div class="title" v-if="currentPage == 5">
                  MANIJAS DE PUERTA OCULTAS ELÉCTRICAS
                  <img
                    loading="lazy"
                    src="/images/models/page5Line-right.webp"
                    class="icon icon-right"
                  />
                </div>
              </Transition>
              <Transition name="slide-fade">
                <div class="memo" v-if="currentPage == 5">
                  <p>Con la función de liberación eléctrica</p>
                  <p>la puerta se puede abrir con una fuerza de 30N</p>
                </div>
              </Transition>
            </div>
          </div>
          <div class="img-item">
            <div class="txt" v-if="ispc" style="text-align: right">
              <Transition name="slide-fade">
                <div class="title" v-if="currentPage == 5">
                  RINES DE ALEACIÓN DE ALUMINIO BRILLANTES DE 19 PULGADAS
                  <img
                    loading="lazy"
                    src="/images/models/page5Line-left.webp"
                    class="icon"
                  />
                </div>
              </Transition>
              <Transition name="slide-fade">
                <div class="memo" v-if="currentPage == 5">
                  <p>It boasts the design that resembles the</p>
                  <p>aurora, making it even more trendy and dazzling</p>
                </div>
              </Transition>
            </div>
            <Transition name="slide-fade">
              <img
                loading="lazy"
                src="/images/models/page5Img2.webp"
                class="img"
                v-if="currentPage == 5"
              />
            </Transition>
            <div class="txt" v-if="!ispc" style="text-align: left">
              <Transition name="slide-fade">
                <div class="title" v-if="currentPage == 5">
                  RINES DE ALEACIÓN DE ALUMINIO BRILLANTES DE 19 PULGADAS
                  <img
                    loading="lazy"
                    src="/images/models/page5Line-right.webp"
                    class="icon icon-right"
                  />
                </div>
              </Transition>
              <Transition name="slide-fade">
                <div class="memo" v-if="currentPage == 5">
                  <p>Cuenta con un diseño que se asemeja a la aurora,</p>
                  <p>lo que lo hace aún más moderno y deslumbrante</p>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="section five-page" v-if="ispc">
        <div class="img-main">
          <div class="img-item">
            <Transition name="slide-fade">
              <img
                loading="lazy"
                src="/images/models/page5Img3.webp"
                class="img"
                v-if="currentPage == 6"
              />
            </Transition>
            <div class="txt" style="text-align: left">
              <Transition name="slide-fade">
                <div class="title" v-if="currentPage == 6">
                  TECHO SOLAR PANORÁMICO GRANDE DE 1.1M²
                  <img
                    loading="lazy"
                    src="/images/models/page5Line-right.webp"
                    class="icon icon-right"
                  />
                </div>
              </Transition>
              <Transition name="slide-fade">
                <div class="memo" v-if="currentPage == 6">
                  <p>Con gran tamaño y funciones inteligentes</p>
                  <p>de apertura y cierre líderes en la industria</p>
                </div>
              </Transition>
            </div>
          </div>
          <div class="img-item">
            <div class="txt" v-if="ispc" style="text-align: right">
              <Transition name="slide-fade">
                <div class="title" v-if="currentPage == 6">
                  ASIENTOS ALL-SENSE
                  <img
                    loading="lazy"
                    src="/images/models/page5Line-left.webp"
                    class="icon"
                  />
                </div>
              </Transition>
              <Transition name="slide-fade">
                <div class="memo" v-if="currentPage == 6">
                  <p>Los asientos multimodo son suaves y cómodos</p>
                  <p>con diez potentes funciones de ajuste</p>
                </div>
              </Transition>
            </div>
            <Transition name="slide-fade">
              <img
                loading="lazy"
                src="/images/models/page5Img4.webp"
                class="img"
                v-if="currentPage == 6"
              />
            </Transition>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="section five-page" v-if="ispc">
        <div class="img-main">
          <div class="img-item">
            <Transition name="slide-fade">
              <img
                loading="lazy"
                src="/images/models/page5Img5.webp"
                class="img"
                v-if="currentPage >= 7"
              />
            </Transition>
            <div class="txt" style="text-align: left">
              <Transition name="slide-fade">
                <div class="title" v-if="currentPage >= 7">
                  10 BOLSAS DE AIRE DE SEGURIDAD
                  <img
                    loading="lazy"
                    src="/images/models/page5Line-right.webp"
                    class="icon icon-right"
                  />
                </div>
              </Transition>
              <Transition name="slide-fade">
                <div class="memo" v-if="currentPage >= 7">
                  <p>Toda la serie adopta una tecnología de mantenimiento de presión de 6 segundos que</p>
                  <p>
                    puede prevenir eficazmente lesiones secundarias por accidentes
                  </p>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Swiper
          class="insideSwiper"
          style="width: 100%; height: 100vh; transform: none"
          :modules="[SwiperFreeMode, SwiperMousewheel]"
          direction="vertical"
          :mousewheel="true"
          slidesPerView="auto"
          :freeMode="{
            enabled: true,
            minimumVelocity: 0.1,
          }"
          :nested="true"
          :observer="true"
          :observeParents="true"
          :autoHeight="true"
        >
          <SwiperSlide class="another-five-page" v-if="!ispc">
            <div class="img-main">
              <div class="img-item item1">
                <img
                  loading="lazy"
                  src="/images/models/page5Img5.webp"
                  class="img animate__animated animate__fadeIn"
                />
                <Transition name="slide-fade">
                  <img
                    loading="lazy"
                    src="/images/models/10safetyairbags.webp"
                    v-if="currentPage >= 8"
                    class="titleimg"
                  />
                </Transition>
              </div>
              <div class="row">
                <div class="img-item item2">
                  <img
                    loading="lazy"
                    src="/images/models/page5Img1.webp"
                    class="img animate__animated animate__fadeIn"
                  />
                  <Transition name="slide-fade">
                    <img
                      loading="lazy"
                      src="/images/models/Electrichiddendoorhandles.webp"
                      class="titleimg"
                      v-if="currentPage >= 8"
                    />
                  </Transition>
                </div>
                <div class="img-item item3">
                  <img
                    loading="lazy"
                    src="/images/models/page5Img2.webp"
                    class="img animate__animated animate__fadeIn"
                  />
                  <Transition name="slide-fade">
                    <img
                      loading="lazy"
                      src="/images/models/CrystaldiamondarrayLEDtaillamp.webp"
                      class="titleimg"
                      v-if="currentPage >= 8"
                    />
                  </Transition>
                </div>
              </div>
              <div class="img-item item4">
                <img
                  loading="lazy"
                  src="/images/models/page5Img3.webp"
                  class="img animate__animated animate__fadeIn"
                />
                <Transition name="slide-fade">
                  <img
                    loading="lazy"
                    src="/images/models/1.1M2largepanoramicsunroof.webp"
                    class="titleimg"
                    v-if="currentPage >= 8"
                  />
                </Transition>
              </div>
              <div class="img-item item5">
                <img
                  loading="lazy"
                  src="/images/models/page5Img4.webp"
                  class="img animate__animated animate__fadeIn"
                />
                <Transition name="slide-fade">
                  <img
                    loading="lazy"
                    src="/images/models/All-senseseats.webp"
                    class="titleimg"
                    v-if="currentPage >= 8" 
                  />
                </Transition>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style="height: auto; display: block">
            <div class="min-h-[100vh] flex flex-col">
              <ClientOnly fallback-tag="span" fallback="Loading comments...">
                <xlsxTable class="flex-1" model-name="J7"></xlsxTable>
              </ClientOnly>
              <LayoutsFooter :routePath="$route.path" />
            </div>
          </SwiperSlide>
        </Swiper>
      </SwiperSlide>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import type { Ref } from "vue";
const dir = useRuntimeConfig().public.staticURL + "/";
const { isMobile } = useDeviceType();
const ispc = computed(() => {
  return !isMobile.value;
});
const currentPage: Ref<number> = ref(999);
var page4Swiper: any;
const onPage4Swiper = (swiper4: any) => {
  page4Swiper = swiper4;
};
var startNumAni = ref(false);
var dis360: Ref<boolean> = ref(true);
var playweb360: Ref<boolean> = ref(false);
function handleCustomEvent(cur:any) {
  
  let pagecur;
  if (cur > 8) {
    pagecur = cur + 1;
  } else {
    pagecur = cur - 1;
  }
  if (cur == 2) {
    dis360.value = false;
  }
  setTimeout(
    () => {
      currentPage.value = pagecur;
      if (cur - 1 == 0) {
        setTimeout(() => {
          startNumAni.value = true;
        }, 800);
      } else {
        startNumAni.value = false;
      }
    },
    cur - 1 < 6 ? 310 : 0
  );
}

let goon = true;
function handleMessage(event: any) {
  if (goon == true) {
    goon = false;
    var fullpage = (document.querySelector(".fullPageContainer") as any).swiper;
    if (event.data.message > 0) {
      fullpage.slideNext();
    } else if (event.data.message < 0) {
      fullpage.slidePrev();
    }
    setTimeout(() => {
      goon = true;
    }, 1500);
  }
}
onMounted(() => {
  handleCustomEvent(1);

  nextTick(() => {    
    window.addEventListener("message", handleMessage);
    var elements = document.querySelectorAll(".wrap_360");
    var observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        playweb360.value = entry.isIntersecting;
        if (entry.isIntersecting) {
          const element = entry.target;
          instance.unobserve(element);
        }
      });
    });
    elements.forEach((ele) => {
      observer.observe(ele);
    });
  });
});
onBeforeUnmount(() => {
  window.removeEventListener("message", handleMessage);
});
var firstPage_arr = [
  { label: "", num: 1000, txt: "kMS AUTONOMÍA" },
  {
    label: "TORQUE",
    num: 290,
    txt: ispc.value
      ? "N<div style='width: calc(0.23 * 16 / 19.2 * 1vw);height: calc(0.23 * 16 / 19.2 * 1vw);background: #fff;border-radius: 50%;margin:calc(0.4 * 16 / 19.2 * 1vw) calc(0.2 * 16 / 19.2 * 1vw) 0;'></div>m"
      : "N<div style='width: calc(0.13 * 16 / 3.75 * 1vw);height: calc(0.13 * 16 / 3.75 * 1vw);background: #fff;border-radius: 50%;margin:calc(0.13 * 16 / 3.75 * 1vw) calc(0.1 * 16 / 3.75 * 1vw) 0;'></div>m",
  },
  { label: "WHEELBASE", num: 2672, txt: "mm" },
];

var thirdPage_title = ["Cabina","con","tecnología","inteligente"];
var thirdPage_title2 = ["4x4", "inteligente"," para", "todo","tipo","de","caminos"];

type swiperItem = {
  label: string[];
  txtarr: Object;
  imgsrc: string;
  isvideo: boolean;
  vsrc: string;
  ismask: boolean;
};
type sideswiperItem = {
  src: string;
  txt: string;
};
var slides: Array<swiperItem> = [
  {
    label: ["CARGA","RÁPIDA","INALÁMBRICA","DE","50W","PARA","TELÉFONOS","MÓVILES"],
    txtarr: {},
    imgsrc: dir + "images/models/page4Swiper1.webp",
    isvideo: false,
    vsrc: "",
    ismask: true,
  },
  {
    label: ["Pantalla","grande","de","14.8","pulgadas"],
    txtarr: {},
    imgsrc: dir + "images/models/page4Swiper2.webp",
    isvideo: false,
    vsrc: "",
    ismask: true,
  },
  {
    label: ["Palanca","de","cambios","estilo","AVIÓN"],
    txtarr: {},
    imgsrc: dir + "images/models/page4Swiper3.webp",
    isvideo: false,
    vsrc: "",
    ismask: true,
  },
];
var slides_mob: sideswiperItem[] = [
  {
    src: dir + "images/models/page4Swiper1_mob.webp",
    txt: "CARGA RÁPIDA INALÁMBRICA DE 50W PARA TELÉFONOS MÓVILES",
  },
  {
    src: dir + "images/models/page4Swiper2_mob.webp",
    txt: "Pantalla grande de 14.8 pulgadas",
  },
  {
    src: dir + "images/models/page4Swiper3_mob.webp",
    txt: "Palanca de cambios estilo AVIÓN",
  },
];
function changePage4(type: string) {
  const swiper_2 = (document.querySelector(".my_swiper_2") as any)?.swiper;
  if (type == "next") {
    swiper_2.slideNext();
  } else {
    swiper_2.slidePrev();
  }
}
var slides2: Array<swiperItem> = [
  {
    label: ["Cápsula", "espacial", "enjaulada", "que", "absorbe", "energía"],
    txtarr: {},
    imgsrc: dir + "images/models/page4Swiper6.webp",
    isvideo: false,
    vsrc: "",
    ismask: true,
  },
  {
    label: ["1.6TGDI", "de", "alto", "rendimiento"],
    txtarr: {},
    imgsrc: dir + "images/models/page4Swiper7.webp",
    isvideo: false,
    vsrc: "",
    ismask: true,
  },
];

var slides2_mob: sideswiperItem[] = [
  {
    src: dir + "images/models/page4Swiper6_mob.webp",
    txt: "Cápsula espacial enjaulada que absorbe energía",
  },
  {
    src: dir + "images/models/page4Swiper7_mob.webp",
    txt: "Motor 1.6TGDI de alto rendimiento",
  },
];
function changePage4_2(type: string) {
  const swiper_2 = (document.querySelector(".my_swiper_3") as any)?.swiper;
  if (type == "next") {
    swiper_2.slideNext();
  } else {
    swiper_2.slidePrev();
  }
}
</script>

<style scoped>
.swiper-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #000;
}

.swiper-slide.section {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-size: calc(1 * 16 / 19.2 * 1vw);
  text-align: center;
  color: #fff;
}

.swiper-container :deep() .swiper-pagination {
  width: 100%;
  height: 4rem;
  height: calc(4 * 16 / 19.2 * 1vw);
  position: absolute;
  bottom: 1.8rem !important;
  bottom: calc(1.8 * 16 / 19.2 * 1vw) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.swiper-container :deep() .swiper-pagination .swiper-pagination-bullet {
  width: 4rem;
  width: calc(4 * 16 / 19.2 * 1vw);
  height: 0.35rem;
  height: calc(0.35 * 16 / 19.2 * 1vw);
  margin: 0 0.3rem;
  margin: 0 calc(0.3 * 16 / 19.2 * 1vw);
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 99;
  cursor: pointer;
  border-radius: 0;
  opacity: 1;
}

.swiper-container :deep() .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #e4e2e2a4;
}

.btn:hover {
  opacity: 1;
}

.btn.next {
  right: 5%;
}

.btn.prev {
  left: 5%;
}

/*第一屏*/
.first-page {
  width: 100%;
  height: 100vh;
  position: relative;
}

.first-page .logoimg {
  width: 15rem;
  width: calc(15 * 16 / 19.2 * 1vw);
  height: auto;
  color: #fff;
  font-family: "SourceHanSansSC-Light";
  position: absolute;
  top: 28%;
  left: 26%;
}

.first-page .banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.msg-main {
  width: fit-content;
  height: auto;
  position: absolute;
  bottom: 5rem;
  bottom: calc(5 * 16 / 19.2 * 1vw);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 20;
}

.msg-item {
  width: 25%;
  height: auto;
  border-right: 1px solid #ffffff6b;
  transition: 1.5s;
}

.msg-item:last-child {
  border-right: none;
}

.msg-item .msg-row {
  height: 2rem;
  height: calc(2 * 16 / 19.2 * 1vw);
  overflow: hidden;
  font-family: "SourceHanSansSC-Regular";
  font-size: 2.1rem;
  font-size: calc(2.1 * 16 / 19.2 * 1vw);
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 2px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.msg-item .msg-row .txt {
  display: flex;
  align-items: center;
}


.msg-item .label-row {
  font-family: "SourceHanSansSC-Normal";
  font-size: 1rem;
  font-size: calc(1 * 16 / 19.2 * 1vw);
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #ffffff;
  padding-top: 1.3rem;
  padding-top: calc(1.3 * 16 / 19.2 * 1vw);
}

@media (max-width: 1024px) {
  .first-page .logoimg {
    width: 10rem;
    width: calc(10 * 16 / 3.75 * 1vw);
    height: auto;
    color: #fff;
    font-family: "SourceHanSansSC-Light";
    position: absolute;
    top: 16%;
    left: 50%;
    transform: translateX(-50%);
  }

  .msg-main {
    width: 90%;
    height: auto;
    position: absolute;
    bottom: 13rem;
    bottom: calc(13 * 16 / 3.75 * 1vw);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .msg-item {
    width: 25%;
    height: auto;
    border-right: 1px solid #ffffff38;
    transition: 1.5s;
  }

  .msg-item:last-child {
    border-right: none;
  }

  .msg-item .msg-row {
    height: 1rem;
    height: calc(1 * 16 / 3.75 * 1vw);
    overflow: hidden;
    font-family: "SourceHanSansSC-Regular";
    font-size: 0.8rem;
    font-size: calc(0.8 * 16 / 3.75 * 1vw);
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 2px;
    color: #ffffff;
  }

  .msg-item .label-row {
    font-family: "SourceHanSansSC-Normal";
    font-size: 0.5rem;
    font-size: calc(0.5 * 16 / 3.75 * 1vw);
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
    padding-top: 0.8rem;
    padding-top: calc(0.8 * 16 / 3.75 * 1vw);
  }

  .mob-icon {
    width: 3rem;
    width: calc(3 * 16 / 3.75 * 1vw);
    height: auto;
    position: absolute;
    bottom: 6rem;
    bottom: calc(6 * 16 / 3.75 * 1vw);
    left: 50%;
    transform: translateX(-50%);
    animation: move 1.2s infinite;
    transition: 1.2s;
  }

  @keyframes move {
    0% {
      bottom: 6rem;
      bottom: calc(6 * 16 / 3.75 * 1vw);
    }

    50% {
      bottom: 5rem;
      bottom: calc(5 * 16 / 3.75 * 1vw);
    }

    100% {
      bottom: 6rem;
      bottom: calc(6 * 16 / 3.75 * 1vw);
    }
  }
}

/*第二屏*/
.second-page {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
}

.second-page .banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.second-page {
  position: relative;
}

.wrap_360 {
  width: 100%;
  height: 100%;
}

.wrap_360 .iframe {
  width: 100%;
  height: 94%;
  position: absolute;
  left: 0;
  top: 6%;
  border: none;
  z-index: 10;
}

.wrap_360 .iframe.dis {
  pointer-events: none;
}

.wrap_360 .iframe canvas {
  z-index: 1;
}

.wrap_360 .icon {
  width: 3.2rem;
  width: calc(3.2 * 16 / 19.2 * 1vw);
  height: auto;
  position: absolute;
  left: 3%;
  transition: 1.2s;
  z-index: 200 !important;
  cursor: pointer;
  transition: 1s;
  transition-delay: 1.5s;
  display: block;
}

.wrap_360 .icon.top {
  top: 40%;
  animation: move2top 1.2s infinite;
}

.wrap_360 .icon.bottom {
  top: 80%;
  animation: move2bottom 1.2s infinite;
}

@keyframes move2top {
  0% {
    transform: translateY(-50%);
  }

  50% {
    transform: translateY(-70%);
  }

  100% {
    transform: translateY(-50%);
  }
}

@keyframes move2bottom {
  0% {
    transform: translateY(-70%);
  }

  50% {
    transform: translateY(-50%);
  }

  100% {
    transform: translateY(-70%);
  }
}

/*第三屏*/
.third-page {
  width: 100%;
  height: 100vh;
  position: relative;
}

.third-page .banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.third-page .title {
  width: 100%;
  
  overflow: hidden;


  color: #ffffff;
  position: absolute;
  top: auto;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  --animate-duration: 800ms;
  --animate-delay: 1.8s;
}

.third-page .title .txt {
  margin: 0 0.4rem;
  margin: 0 calc(0.4 * 16 / 19.2 * 1vw);
  text-transform: uppercase;
}

.third-page .title .icon {
  width: 7rem;
  width: calc(7 * 16 / 19.2 * 1vw);
  height: auto;
  margin: 0.15rem 1.5rem 0;
  margin: calc(0.15 * 16 / 19.2 * 1vw) calc(1.5 * 16 / 19.2 * 1vw) 0;
}

@media (max-width: 1024px) {
  .wrap_360 .icon {
    left: 3%;
    z-index: 200 !important;
  }

  .wrap_360 .icon.top {
    top: 20%;
    animation: move2top 1.2s infinite;
  }

  .wrap_360 .icon.bottom {
    top: 80%;
    animation: move2bottom 1.2s infinite;
  }

  .third-page .titleimg {
    width: 95%;
    height: auto;
    position: absolute;
    top: 18%;
    left: 2.5%;
    z-index: 2;
  }
}

/*第四屏*/
.fourth-page {
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #000;
  padding-top: 6rem;
  padding-top: calc(6 * 16 / 19.2 * 1vw);
  box-sizing: border-box;
}

.fourth-page .swiper-container {
  width: 100%;
  height: 48rem;
  height: calc(48 * 16 / 19.2 * 1vw);
  position: relative;
}

.fourth-page .swiper-slide {
  width: 80%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.fourth-page .swiper-container :deep() .swiper-pagination {
  width: 100%;
  height: 4rem;
  height: calc(4 * 16 / 19.2 * 1vw);
  position: absolute;
  bottom: 1rem !important;
  bottom: calc(1 * 16 / 19.2 * 1vw) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.fourth-page
  .swiper-container
  :deep()
  .swiper-pagination
  .swiper-pagination-bullet {
  width: 4rem;
  width: calc(4 * 16 / 19.2 * 1vw);
  height: 0.35rem;
  height: calc(0.35 * 16 / 19.2 * 1vw);
  margin: 0 0.3rem;
  margin: 0 calc(0.3 * 16 / 19.2 * 1vw);
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 99;
  cursor: pointer;
  border-radius: 0;
  opacity: 1;
}

.fourth-page
  .swiper-container
  :deep()
  .swiper-pagination
  .swiper-pagination-bullet-active {
  background-color: #e4e2e2a4;
}

.fourth-page .btn {
  width: 1.3rem;
  width: calc(1.3 * 16 / 19.2 * 1vw);
  height: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9;
  cursor: pointer;
}

.fourth-page .next {
  right: 5%;
}

.fourth-page .prev {
  left: 5%;
}

.fourth-page .swiper-slide .title {
  width: 100%;
  height: 3.8rem;
  height: calc(3.8 * 16 / 19.2 * 1vw);
  overflow: hidden;
  text-align: center;
  font-family: "SourceHanSansSC-Light";
  text-shadow: rgba(0, 0, 0, 0.3) 1px 1px 5px;
  font-size: 1.5rem;
  font-size: calc(1.5 * 16 / 19.2 * 1vw);
  line-height: 1;
  letter-spacing: 3px;
  color: #ffffff;
  z-index: 10;
  transition: 1.8s cubic-bezier(0, 1, 0.65, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.fourth-page .swiper-slide .title .icon {
  width: 7rem;
  width: calc(7 * 16 / 19.2 * 1vw);
  height: auto;
  margin: 0.15rem 1.5rem 0;
  margin: calc(0.15 * 16 / 19.2 * 1vw) calc(0.15 * 16 / 19.2 * 1vw) 0;
}

.fourth-page .swiper-slide .title .word {
  margin: 0 0.4rem;
  margin: 0 calc(0.4 * 16 / 19.2 * 1vw);
}

.fourth-page .swiper-slide .mask {
  width: 100%;
  height: 100vh;
  background: url(/images/mask.webp);
  background-repeat: repeat;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  opacity: 0.2;
  display: none;
}

.fourth-page .swiper-slide .img {
  width: 80%;
  height: 40rem;
  height: calc(40 * 16 / 19.2 * 1vw);
  object-fit: cover;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 1rem;
  border-radius: calc(1 * 16 / 19.2 * 1vw);
}

@media (max-width: 1024px) {
  .fourth-page {
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: #000;
    padding-top: 0;
    box-sizing: border-box;
    display: block;
  }

  .fourth-page .swiper-container {
    width: 100%;
    height: 30rem;
    height: calc(30 * 16 / 3.75 * 1vw);
    position: relative;
    margin-top: 0;
  }

  .fourth-page .swiper-slide {
    width: 93%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .fourth-page .swiper-container :deep() .swiper-pagination {
    width: 100%;
    height: 1rem;
    height: calc(1 * 16 / 3.75 * 1vw);
    position: absolute;
    bottom: 1rem !important;
    bottom: calc(1 * 16 / 3.75 * 1vw) !important;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  .fourth-page
    .swiper-container
    :deep()
    .swiper-pagination
    .swiper-pagination-bullet {
    width: 4rem;
    width: calc(4 * 16 / 3.75 * 1vw);
    height: 0.1rem;
    height: calc(0.1 * 16 / 3.75 * 1vw);
    margin: 0 0.3rem;
    margin: 0 calc(0.3 * 16 / 3.75 * 1vw);
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 99;
    cursor: pointer;
    border-radius: 0;
    opacity: 1;
  }

  .fourth-page
    .swiper-container
    :deep()
    .swiper-pagination
    .swiper-pagination-bullet-active {
    background-color: #e4e2e2a4;
  }

  .fourth-page .btn {
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    z-index: 10;
    width: 1rem;
    width: calc(1 * 16 / 3.75 * 1vw);
    height: auto;
    opacity: 0.6;
    cursor: pointer;
  }

  .fourth-page .btn:hover {
    opacity: 1;
  }

  .fourth-page .btn.next {
    right: 5%;
  }

  .fourth-page .btn.prev {
    left: 5%;
  }

  .fourth-page .swiper-slide .title {
    width: 93%;
    height: 2.8rem;
    height: calc(2.8 * 16 / 3.75 * 1vw);
    overflow: hidden;
    text-align: center;
    font-family: "SourceHanSansSC-Light";
    text-shadow: rgba(0, 0, 0, 0.3) 1px 1px 5px;
    font-size: 0.9rem;
    font-size: calc(0.9 * 16 / 3.75 * 1vw);
    line-height: 1;
    letter-spacing: 3px;
    color: #ffffff;
    z-index: 10;
    transition: 1.8s cubic-bezier(0, 1, 0.65, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    left: 50%;
    top: 1rem;
    top: calc(1 * 16 / 3.75 * 1vw);
    transform: translateX(-50%);
  }

  .fourth-page .swiper-slide .title .word {
    margin: 0 0.25rem;
    margin: 0 calc(0.25 * 16 / 3.75 * 1vw);
    text-transform: uppercase;
  }

  .fourth-page .swiper-slide .mask {
    width: 100%;
    height: 100vh;
    background: url(/images/mask.webp);
    background-repeat: repeat;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 6;
    opacity: 0.2;
    display: none;
  }

  .fourth-page .swiper-slide .img {
    width: 90%;
    height: 20rem;
    height: calc(20 * 16 / 3.75 * 1vw);
    object-fit: cover;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0;
  }
}

/*第五屏*/
.five-page {
  width: 100%;
  height: 100vh;
  position: relative;
  background: #000;
}

.five-page .img-main {
  width: 80%;
  height: auto;
  position: relative;
}

.five-page .img-main .img-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1.2rem;
  margin-bottom: calc(1.2 * 16 / 19.2 * 1vw);
}

.img-item .img {
  width: 38rem;
  width: calc(38 * 16 / 19.2 * 1vw);
  height: 20rem;
  height: calc(20 * 16 / 19.2 * 1vw);
  transition: 1s;
  transition-delay: 0.3s;
  object-fit: cover;
  border-radius: 0.5rem;
  border-radius: calc(0.5 * 16 / 19.2 * 1vw);
}

.img-item .txt {
  width: 35rem;
  width: calc(35 * 16 / 19.2 * 1vw);
  font-size: 1.2rem;
  font-size: calc(1.2 * 16 / 19.2 * 1vw);
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: 3px;
  color: #ffffff;
  margin: 0 2.2rem;
  margin: 0 calc(2.2 * 16 / 19.2 * 1vw);
}

.img-item .txt .title {
  width: 100%;
  margin-bottom: 2.6rem;
  margin-bottom: calc(2.6 * 16 / 19.2 * 1vw);
  font-size: 1.5rem;
  font-size: calc(1.5 * 16 / 19.2 * 1vw);
  transition: 1s;
  transition-delay: 0.1s;
  position: relative;
  text-transform: uppercase;
}

.img-item .txt .title .icon {
  width: 13rem;
  width: calc(13 * 16 / 19.2 * 1vw);
  height: auto;
  bottom: -1rem;
  bottom: calc(-1 * 16 / 19.2 * 1vw);
  position: absolute;
  right: 0;
  left: auto;
}

.img-item .txt .title .icon-right {
  left: 0;
  right: auto;
}

.img-item .txt .memo {
  width: 100%;
  font-family: "SourceHanSansSC-Light";
  font-size: 1.2rem;
  font-size: calc(1.2 * 16 / 19.2 * 1vw);
  font-stretch: normal;
  letter-spacing: 1px;
  transition: 1s;
  transition-delay: 0.3s;
}

.img-item .txt .memo p {
  margin-bottom: 0.4rem;
  margin-bottom: calc(0.4 * 16 / 19.2 * 1vw);
}

@media (max-width: 1024px) {
  .another-five-page {
    width: 100%;
    height: auto;
    position: relative;
  }

  .another-five-page .img-main {
    width: 100%;
    height: auto;
    position: relative;
    padding-top: 6rem;
    padding-top: calc(6 * 16 / 3.75 * 1vw);
    padding-bottom: 2rem;
    padding-bottom: calc(2 * 16 / 3.75 * 1vw);
  }

  .another-five-page .img-main .img-item {
    display: block;
    position: relative;
  }

  .another-five-page .img-main .row {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .another-five-page .img-main .img-item .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0;
  }

  .another-five-page .img-main .img-item .titleimg {
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    bottom: 1%;
    transition: 0.6s;
    transition-delay: 0.3s;
  }

  .another-five-page .img-main .item1 {
    width: 100%;
    height: 13rem;
    height: calc(13 * 16 / 3.75 * 1vw);
    border-top: 1px solid #fff;
  }

  .another-five-page .img-main .item1 .titleimg {
    width: 70%;
    bottom: 3%;
    left: 10%;
  }

  .another-five-page .img-main .item2 {
    width: 50%;
    height: 12rem;
    height: calc(12 * 16 / 3.75 * 1vw);
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
  }

  .another-five-page .img-main .item2 .titleimg {
    width: 100%;
    bottom: 3%;
    left: 6%;
  }

  .another-five-page .img-main .item3 {
    width: 50%;
    height: 12rem;
    height: calc(12 * 16 / 3.75 * 1vw);
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
  }

  .another-five-page .img-main .item3 .titleimg {
    width: 85%;
    bottom: 3%;
    left: 6%;
  }

  .another-five-page .img-main .item4 {
    width: 100%;
    height: 13rem;
    height: calc(13 * 16 / 3.75 * 1vw);
    border-bottom: 1px solid #fff;
  }

  .another-five-page .img-main .item4 .titleimg {
    width: 90%;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }

  .another-five-page .img-main .item5 {
    width: 100%;
    height: 13rem;
    height: calc(13 * 16 / 3.75 * 1vw);
    border-bottom: 1px solid #fff;
  }

  .another-five-page .img-main .item5 .titleimg {
    width: 70%;
    bottom: 5%;
    left: 52%;
    transform: translateX(-50%);
  }
}
</style>
