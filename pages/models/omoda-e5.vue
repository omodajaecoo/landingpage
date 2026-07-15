<template>
  <NuxtLayout name="layout" @custom-event="handleCustomEvent">
    <template #slidesSection>
      <SwiperSlide class="section first-page">
        <img loading="lazy" :src="ispc
            ? dir + 'images/models/E5/section1bg.webp'
            : dir + 'images/models/E5/section1bg_mob.webp'
          " class="banner" />
        <img loading="lazy" src="/images/models/page1icon_mob.webp" v-if="!ispc" class="mob-icon" />
        <div
          class="absolute left-1/2 -translate-x-1/2 bottom-[16%] sm:bottom-[115px] lg:bottom-[50px] flex items-center justify-center w-fit">
          <Transition name="slide-fade">
            <div class="" v-if="currentPage == 0">
              <div class="flex flex-row items-stretch justify-center w-[90vw] lg:w-[70vw] ">
                <div class="pr-[10px] lg:pr-[48px] flex-[1.2] border-r border-white font-interSemiBold text-[12px] sm:text-[20px] text-center">
                  +505 KMS AUTONOMÍA EV (NEDC)</div>
                <div class="px-[10px] lg:px-[48px] flex-[1.2] border-r border-white font-interSemiBold text-[12px] sm:text-[20px] text-center">
                  24.6" PANTALLA DUAL</div>
                <div class="px-[10px] lg:px-[48px] flex-1 border-r border-white font-interSemiBold text-[12px] sm:text-[20px] text-center">
                  6 AIRBAGS</div>
                <div class="pl-[5px] lg:pl-[40px] flex-1 font-interSemiBold text-[12px] sm:text-[20px] text-center">
                  +10 ADAS</div>
              </div>
            </div>
          </Transition>
        </div>
      </SwiperSlide>
      <SwiperSlide class="section fullpage-sub">
        <img loading="lazy" :src="ispc
            ? dir + 'images/models/E5/section2bg.webp'
            : dir + 'images/models/E5/section2bg_mob.webp'
          " class="banner" />
        <div class="title bottom-[20%] sm:bottom-[40px]">
          <div class="flex flex-col justify-center items-center space-y-[20px] sm:space-y-[50px]">
            <div class="flex space-x-[8px] sm:space-x-[32px] justify-center items-center">
              <BaseButton type="text" class="font-interSemiRegular text-[16px] sm:text-[20px] px-[10px] py-[10px] sm:px-[20px] sm:py-[20px] 
              border border-white leading-none" @click="router.push(section2_btns[0].link)">
                {{ section2_btns[0].label }}
              </BaseButton>
              <a :href="section2_btns[1].link" target="_blank" rel="noopener">
                <BaseButton type="text" class="font-interSemiRegular text-[16px] sm:text-[20px] px-[10px] py-[10px] sm:px-[20px] sm:py-[20px] 
                border border-[#67B0C4] leading-none !bg-[#67B0C4]">
                  {{ section2_btns[1].label }}
                </BaseButton>
              </a>
            </div>
            <div class="flex justify-center items-center w-full">
              <img loading="lazy" src="/images/models/title-left.webp" class="icon left-icon" v-if="ispc"/>
              <div class="flex flex-wrap justify-center items-center max-w-[1000px] px-[8px]">
                <Transition name="slide-fade" v-for="(item, idx) in section2_tittle" :key="idx">
                  <div class="txt font-interSemiRegular text-[14px] sm:text-[16px]" v-if="currentPage == 1">
                  {{ item }}
                  </div>
                </Transition>
              </div> 
              <img loading="lazy" src="/images/models/title-right.webp" class="icon right-icon" v-if="ispc"/>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="section carrousel-sub">
        <Swiper v-if="showDesktopSwiper" class="swiper-container carrousel_section3" :modules="[SwiperPagination, SwiperEffectCreative]"
          :slides-per-view="1" :loop="true" @swiper="onPage4Swiper">
          <SwiperSlide v-for="(slide, idx) in section3_slides" :key="idx">
            <img loading="lazy" :src="slide.imgsrc" class="img" />
            <div v-if="slide.ismask" class="mask"></div>
            <div class="flex justify-center items-center w-full">
              <div class="title max-w-[1000px]">
                <Transition name="slide-fade" v-for="(item, ldex) in slide.label" :key="ldex" :style="[
                  currentPage == 2
                    ? 'transition-delay: ' + ldex * 0.15 + 's;'
                    : 'transition-delay: 0s;',
                ]">
                  <div class="word font-interSemiRegular text-[16px]" v-if="currentPage == 2">
                    {{ item }}
                  </div>
                </Transition>
              </div>
            </div>
          </SwiperSlide>
          <img loading="lazy" class="btn next" src="/images/page2_right_arrow.webp" alt="next" v-if="section3_slides.length > 1"
            @click="changePage_section3('next')" />
          <img loading="lazy" class="btn prev" src="/images/page2_left_arrow.webp" alt="prev" v-if="section3_slides.length > 1"
            @click="changePage_section3('prev')" />
        </Swiper>
        <ClientOnly fallback-tag="span" fallback="Loading comments...">
          <modelSwiper modid="mobslides2" :swiperArr="section3_slides_mob" :needTitleBg="false" :needPagination="true"
            :needCarmodel="false" :shownum="3" :curnum="currentPage" v-if="showMobileSwiper"></modelSwiper>
        </ClientOnly>
      </SwiperSlide>
      <SwiperSlide class="section fullpage-sub">
        <img loading="lazy" :src="ispc
            ? dir + 'images/models/E5/section4bg.webp'
            : dir + 'images/models/E5/section4bg_mob.webp'
          " class="banner" />
        <div class="title bottom-[20%] sm:bottom-[40px]">
          <img loading="lazy" src="/images/models/title-left.webp" class="icon left-icon" v-if="ispc"/>
          <div class="flex flex-wrap justify-center items-center max-w-[1000px] px-[8px]">
            <Transition name="slide-fade" v-for="(item, idx) in section4_tittle" :key="idx">
              <div class="txt font-interSemiRegular text-[14px] sm:text-[16px]" v-if="currentPage == 3">
                {{ item }}
              </div>
            </Transition>
          </div>
          <img loading="lazy" src="/images/models/title-right.webp" class="icon right-icon" v-if="ispc"/>
        </div>
      </SwiperSlide>
      <SwiperSlide class="section carrousel-sub">
        <Swiper v-if="showDesktopSwiper" class="swiper-container carrousel_section5" :modules="[SwiperPagination, SwiperEffectCreative]"
          :slides-per-view="1" :loop="true" @swiper="onPage4Swiper">
          <SwiperSlide v-for="(slide, idx) in section5_slides" :key="idx">
            <img loading="lazy" :src="slide.imgsrc" class="img" :style="slide.objectPosition ? { objectPosition: slide.objectPosition } : {}" />
            <div v-if="slide.ismask" class="mask"></div>
            <div class="flex justify-center items-center w-full">
              <div class="title max-w-[1000px]">
                <Transition name="slide-fade" v-for="(item, ldex) in slide.label" :key="ldex" :style="[
                  currentPage == 4
                    ? 'transition-delay: ' + ldex * 0.15 + 's;'
                    : 'transition-delay: 0s;',
                ]">
                  <div class="word font-interSemiRegular text-[16px]" v-if="currentPage == 4">
                    {{ item }}
                  </div>
                </Transition>
              </div>
            </div>
          </SwiperSlide>
          <img loading="lazy" class="btn next" src="/images/page2_right_arrow.webp" alt="next"
            @click="changePage_section5('next')" />
          <img loading="lazy" class="btn prev" src="/images/page2_left_arrow.webp" alt="prev"
            @click="changePage_section5('prev')" />
        </Swiper>
        <ClientOnly fallback-tag="span" fallback="Loading comments...">
          <modelSwiper modid="mobslides" :swiperArr="section5_slides_mob" :needTitleBg="false" :needPagination="true"
            :needCarmodel="false" :shownum="5" :curnum="currentPage" v-if="showMobileSwiper"></modelSwiper>
        </ClientOnly>
      </SwiperSlide>
      <SwiperSlide class="section collage_section" v-if="showDesktopSwiper">
        <div class="img-main">
          <div class="img-item">
            <Transition name="slide-fade">
              <img loading="lazy" src="/images/models/E5/section6-item1.webp" class="img" v-if="currentPage == 5" />
            </Transition>
            <div class="txt" style="text-align: left">
              <Transition name="slide-fade">
                <div class="title" v-if="currentPage == 5">
                  LUCES QUE MARCAN EL FUTURO
                  <img loading="lazy" src="/images/models/page5Line-right.webp" class="icon icon-right" />
                </div>
              </Transition>
              <Transition name="slide-fade">
                <div class="memo" v-if="currentPage == 5">
                  <p>Con diseño 3D las luces traseras brindan pura elegancia nocturna: tecnología con una firma luminosa que no pasa desapercibida.</p>
                </div>
              </Transition>
            </div>
          </div>
          <div class="img-item">
            <div class="txt" style="text-align: right">
              <Transition name="slide-fade">
                <div class="title" v-if="currentPage == 5">
                  DISEÑO DEL MAÑANA
                  <img loading="lazy" src="/images/models/page5Line-left.webp" class="icon" />
                </div>
              </Transition>
              <Transition name="slide-fade">
                <div class="memo" v-if="currentPage == 5">
                  <p>Su lenguaje ART IN MOTION combina las estéticas de un CROSSOVER futuristas y un amplio SUV de la nueva era.</p>
                </div>
              </Transition>
            </div>
            <Transition name="slide-fade">
              <img loading="lazy" src="/images/models/E5/section6-item2.webp" class="img" v-if="currentPage == 5" />
            </Transition>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="section collage_section" v-if="showDesktopSwiper">
        <div class="img-main">
          <div class="img-item">
            <Transition name="slide-fade">
              <img loading="lazy" src="/images/models/E5/section7-item1.webp" class="img" v-if="currentPage == 6" />
            </Transition>
            <div class="txt" style="text-align: left">
              <Transition name="slide-fade">
                <div class="title" v-if="currentPage == 6">
                  DONDE EL DISEÑO ES INSPIRACIÓN
                  <img loading="lazy" src="/images/models/page5Line-right.webp" class="icon icon-right" />
                </div>
              </Transition>
              <Transition name="slide-fade">
                <div class="memo" v-if="currentPage == 6">
                  <p>Se ajusta a ti sin que lo notes. El interior del OMODA E5 no espera tus órdenes: las anticipa.</p>
                </div>
              </Transition>
            </div>
          </div>
          <div class="img-item">
            <div class="txt" style="text-align: right">
              <Transition name="slide-fade">
                <div class="title" v-if="currentPage == 6">
                  HOLA OMODA, HOLA CONECTIVIDAD
                  <img loading="lazy" src="/images/models/page5Line-left.webp" class="icon" />
                </div>
              </Transition>
              <Transition name="slide-fade">
                <div class="memo" v-if="currentPage == 6">
                  <p>Su sistema con comandos de voz te permite controlar el vehículo en sus funciones más avanzadas* y tener conectividad Apple Carplay & Android Auto.</p>
                </div>
              </Transition>
            </div>
            <Transition name="slide-fade">
              <img loading="lazy" src="/images/models/E5/section7-item2.webp" class="img" v-if="currentPage == 6" />
            </Transition>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="section collage_section" v-if="showDesktopSwiper">
        <div class="img-main">
          <div class="img-item">
            <Transition name="slide-fade">
              <img loading="lazy" src="/images/models/E5/section8-item1.webp" class="img" v-if="currentPage >= 7" />
            </Transition>
            <div class="txt" style="text-align: left">
              <Transition name="slide-fade">
                <div class="title" v-if="currentPage >= 7">
                  SEGURIDAD Y CONFIABILIDAD CERTIFICADA
                  <img loading="lazy" src="/images/models/page5Line-right.webp" class="icon icon-right" />
                </div>
              </Transition>
              <Transition name="slide-fade">
                <div class="memo" v-if="currentPage >= 7">
                  <p>El Omoda E5 cuenta con estándares de seguridad a la par de tus necesidades: cámara 360°, 6 airbags y con certificación de 5 estrellas en la EURO NCAP & AUSTRALIA NCAP*.
                  </p>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Swiper class="insideSwiper" style="width: 100%; height: 100vh; transform: none"
          :modules="[SwiperFreeMode, SwiperMousewheel]" direction="vertical" :mousewheel="true" slidesPerView="auto"
          :freeMode="{
            enabled: true,
            minimumVelocity: 0.1,
          }" :nested="true" :observer="true" :observeParents="true" :autoHeight="true">
          <SwiperSlide class="mobile-collage_section" v-if="showMobileSwiper">
            <div class="img-main">
              <div class="img-item item1">
                <img loading="lazy" src="/images/models/E5/section6-item1.webp" class="img animate__animated animate__fadeIn" />
                <Transition name="slide-fade">
                  <div class="flex w-full justify-center items-center title-content">
                    <p class="title-text font-interRegular"  v-if="currentPage >= 5">Luces que marcan el futuro</p>
                  </div>
                </Transition>
              </div>
              <div class="img-item item2">
                <img loading="lazy" src="/images/models/E5/section6-item2.webp"
                  class="img animate__animated animate__fadeIn" />
                <Transition name="slide-fade">
                  <div class="flex w-full justify-center items-center title-content">
                    <p class="title-text font-interRegular"  v-if="currentPage >= 5">Diseño del mañana</p>
                  </div>
                </Transition>
              </div>
              <div class="img-item item3">
                <img loading="lazy" src="/images/models/E5/section7-item1.webp"
                  class="img animate__animated animate__fadeIn" />
                <Transition name="slide-fade">
                  <div class="flex w-full justify-center items-center title-content">
                    <p class="title-text font-interRegular"  v-if="currentPage >= 5">Donde el diseño es inspiración</p>
                  </div>
                </Transition>
              </div>
              <div class="img-item item4">
                <img loading="lazy" src="/images/models/E5/section7-item2.webp" class="img animate__animated animate__fadeIn" />
                <Transition name="slide-fade">
                  <div class="flex w-full justify-center items-center title-content">
                    <p class="title-text font-interRegular"  v-if="currentPage >= 5">Hola Omoda, hola conectividad</p>
                  </div>
                </Transition>
              </div>
              <div class="img-item item5">
                <img loading="lazy" src="/images/models/E5/section8-item1.webp" class="img animate__animated animate__fadeIn" />
                <Transition name="slide-fade">
                  <div class="flex w-full justify-center items-center title-content">
                    <p class="title-text font-interRegular"  v-if="currentPage >= 5">Seguridad y confiabilidad certificada</p>
                  </div>
                </Transition>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style="height: auto; display: block">
            <div class="min-h-[100vh] flex flex-col">
              <ClientOnly fallback-tag="span" fallback="Loading comments...">
                <xlsxTable class="flex-1" model-name="E5"
                  title="Tabla de parámetros de configuración del OMODA E5"
                  desc="Las imágenes y los parámetros de este sitio web son solo de referencia. La configuración del modelo del vehículo puede variar según el mercado. La versión del país de lanzamiento prevalecerá."
                ></xlsxTable>
              </ClientOnly>
              <LayoutsFooter :routePath="$route.path" />
            </div>
          </SwiperSlide>
        </Swiper>
      </SwiperSlide>
    </template>
    <template #overlay>
      <CommonReservationsStickyBar
        v-if="currentPage !== 999 && currentPage > 0"
        variant="fixed"
        vehicle="OMODA E5 NEXT"
      />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, computed } from "vue";
import { EffectCreative as SwiperEffectCreative, Pagination as SwiperPagination, FreeMode as SwiperFreeMode, Mousewheel as SwiperMousewheel } from "swiper/modules";
import { useRuntimeConfig, useDeviceType, useRouter } from "#imports";
import type { Ref } from "vue";
const dir = useRuntimeConfig().public.staticURL + "/";
const { isMobile } = useDeviceType();
const router = useRouter();
const ispc = computed(() => {
  return !isMobile.value;
});

const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1920);
const showDesktopSwiper = computed(() => windowWidth.value > 640);
const showMobileSwiper = computed(() => windowWidth.value <= 640);

const currentPage: Ref<number> = ref(999);
var page4Swiper: any;
const onPage4Swiper = (swiper4: any) => {
  page4Swiper = swiper4;
};
var startNumAni = ref(false);
var dis360: Ref<boolean> = ref(true);
var playweb360: Ref<boolean> = ref(false);
function handleCustomEvent(cur: any) {

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

  const handleResize = () => {
    windowWidth.value = window.innerWidth;
  };
  
  window.addEventListener('resize', handleResize);

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
  window.removeEventListener('resize', () => {
    windowWidth.value = window.innerWidth;
  });
});

var section2_tittle = ["100%", "ELÉCTRICO.", "100%", "OMODA.", "CONDUCCIÓN", "SILENCIOSA,", "RESPUESTA", "INSTANTÁNEA", "Y", "TECNOLOGÍA", "QUE", "CONVIERTE", "CADA", "TRAYECTO", "EN", "UNA", "EXPERIENCIA", "FLUIDA.", "UN", "SUV", "PENSADO", "EN", "COMBINAR", "LO", "MEJOR", "SIN", "SACRIFICAR", "NADA."];
var section2_btns: Array<{ label: string; link: string }> = [
  {
    label: "COTIZAR AHORA",
    link: "/quote"
  },
  {
    label: "FICHA TÉCNICA",
    link: "/files/Ficha_Tecnica_OMODA-E5.pdf"
  }
];

var section3_slides: Array<swiperItem> = [
  {
    label: ["MOTOR", "PLANO", "3", "EN", "1", "DE", "ALTO", "RENDIMIENTO,", "OTORGA", "AUTONOMÍA", "SUPERIOR", "EN", "EL", "SEGMENTO", "DE", "505", "KMS"],
    txtarr: {},
    imgsrc: dir + "images/models/E5/section3-item1.webp",
    isvideo: false,
    vsrc: "",
    ismask: true,
  },
  {
    label: ["ESTRUCTURA", "DE", "ACERO", "DE", "ALTA", "RESISTENCIA", "CON", "ALTA", "PROTECCIÓN", "A", "LOS", "PASAJEROS", "Y", "BATERÍA"],
    txtarr: {},
    imgsrc: dir + "images/models/E5/section3-item2.webp",
    isvideo: false,
    vsrc: "",
    ismask: true,
  },
  {
    label: ["BATERÍAS", "DE", "LITIO", "FERROFOSTATO", "DE", "ALTA", "DURABILIDAD", "RENDIMIENTO", "Y", "5", "ESTÁNDARES", "DE", "PROTECCIÓN", "&", "SEGURIDAD"],
    txtarr: {},
    imgsrc: dir + "images/models/E5/section3-item3.webp",
    isvideo: false,
    vsrc: "",
    ismask: true,
  },
];

var section3_slides_mob: sideswiperItem[] = [
  {
    src: dir + "images/models/E5/section3-item1_mob.webp",
    txt: "Motor plano 3 en 1 de alto rendimiento, otorga autonomía superior en el segmento de 505 KMS.",
  },
  {
    src: dir + "images/models/E5/section3-item2_mob.webp",
    txt: "Estructura de acero de alta resistencia con alta protección a los pasajeros y batería.",
  },  
  {
    src: dir + "images/models/E5/section3-item3_mob.webp",
    txt: "Baterías de litio ferrofosfato de alta durabilidad rendimiento y 5 estándares de protección & seguridad.",
  },
];

function changePage_section3(type: string) {
  const swiper_2 = (document.querySelector(".carrousel_section3") as any)?.swiper;
  if (type == "next") {
    swiper_2.slideNext();
  } else {
    swiper_2.slidePrev();
  }
}

var section4_tittle = ["SÉ", "PARTE", "DEL", "CAMBIO,", "CON", "UN", "SUV", "QUE", "OTORGA", "MÁS", "AUTONOMÍA", "Y", "MENOS", "EMISIONES", "AL", "CONDUCIR"];

type swiperItem = {
  label: string[];
  txtarr: Object;
  imgsrc: string;
  isvideo: boolean;
  vsrc: string;
  ismask: boolean;
  objectPosition?: string;
};
type sideswiperItem = {
  src: string;
  txt: string;
};
var section5_slides: Array<swiperItem> = [
    {
    label: ["PANTALLA", "HD", "CURVA", "DUAL", "DE", "24.6\"", "CON", "COMANDOS", "DE", "VOZ", "Y", "FLUIDEZ", "AL", "TACTO"],
    txtarr: {},
    imgsrc: dir + "images/models/E5/section5-item1.webp",
    isvideo: false,
    vsrc: "",
    ismask: true,
  },
  {
    label: ["CARGA", "RÁPIDA", "WIRELESS", "(50W)", "CON", "VENTILACIÓN", "PARA", "EL", "CELULAR"],
    txtarr: {},
    imgsrc: dir + "images/models/E5/section5-item2.webp",
    isvideo: false,
    vsrc: "",
    ismask: true,
  }

];
var section5_slides_mob: sideswiperItem[] = [
  {
    src: dir + "images/models/E5/section5-item1_mob.webp",
    txt: "Pantalla HD curva dual de 24.6\", con comandos de voz y fluidez al tacto.",
  },
  {
    src: dir + "images/models/E5/section5-item2_mob.webp",
    txt: "Carga rápida wireless (50W) con ventilación para el celular.",
  },
];

function changePage_section5(type: string) {
  const swiper_2 = (document.querySelector(".carrousel_section5") as any)?.swiper;
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

.fullpage-sub {
  width: 100%;
  height: 100vh;
  position: relative;
}

.fullpage-sub .banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}

.fullpage-sub .title {
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

.fullpage-sub .title .txt {
  margin: 0 0.4rem;
  margin: 0 calc(0.4 * 16 / 19.2 * 1vw);
  text-transform: uppercase;
}

.fullpage-sub .title .icon {
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

  .fullpage-sub .titleimg {
    width: 95%;
    height: auto;
    position: absolute;
    top: 18%;
    left: 2.5%;
    z-index: 2;
  }
}

.carrousel-sub {
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #000;
  padding-top: 6rem;
  padding-top: calc(6 * 16 / 19.2 * 1vw);
  box-sizing: border-box;
}

.carrousel-sub .swiper-container {
  width: 100%;
  height: 48rem;
  height: calc(48 * 16 / 19.2 * 1vw);
  position: relative;
}

.carrousel-sub .swiper-slide {
  width: 80%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.carrousel-sub .swiper-container :deep() .swiper-pagination {
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

.carrousel-sub .swiper-container :deep() .swiper-pagination .swiper-pagination-bullet {
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

.carrousel-sub .swiper-container :deep() .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #e4e2e2a4;
}

.carrousel-sub .btn {
  width: 1.3rem;
  width: calc(1.3 * 16 / 19.2 * 1vw);
  height: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9;
  cursor: pointer;
}

.carrousel-sub .next {
  right: 5%;
}

.carrousel-sub .prev {
  left: 5%;
}

.carrousel-sub .swiper-slide .title {
  width: 100%;
  padding-top: 12px;
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
  flex-wrap: wrap;
}

.carrousel-sub .swiper-slide .title .icon {
  width: 7rem;
  width: calc(7 * 16 / 19.2 * 1vw);
  height: auto;
  margin: 0.15rem 1.5rem 0;
  margin: calc(0.15 * 16 / 19.2 * 1vw) calc(0.15 * 16 / 19.2 * 1vw) 0;
}

.carrousel-sub .swiper-slide .title .word {
  margin: 8px 4px;
  text-transform: uppercase;
}

.carrousel-sub .swiper-slide .mask {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  opacity: 0.2;
  display: none;
}

.carrousel-sub .swiper-slide .img {
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
  .carrousel-sub {
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: #000;
    padding-top: 0;
    box-sizing: border-box;
    display: block;
  }

  .carrousel-sub .swiper-container {
    width: 100%;
    height: 100vh;
    position: relative;
    margin-top: 0;
  }

  .carrousel-sub .swiper-slide {
    width: 93%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .carrousel-sub .swiper-container :deep() .swiper-pagination {
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

  .carrousel-sub .swiper-container :deep() .swiper-pagination .swiper-pagination-bullet {
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

  .carrousel-sub .swiper-container :deep() .swiper-pagination .swiper-pagination-bullet-active {
    background-color: #e4e2e2a4;
  }

  .carrousel-sub .btn {
    position: absolute;
    transform: translateY(-50%);
    z-index: 10;
    width: 1rem;
    width: calc(1 * 16 / 3.75 * 1vw);
    height: auto;
    opacity: 0.6;
    cursor: pointer;
  }

  .carrousel-sub .btn:hover {
    opacity: 1;
  }

  .carrousel-sub .btn.next {
    right: 5%;
  }

  .carrousel-sub .btn.prev {
    left: 5%;
  }

  .carrousel-sub .swiper-slide .title {
    width: 93%;
    padding-top: 12px;
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
  }

  .carrousel-sub .swiper-slide .title .word {
    margin: 4px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .carrousel-sub .swiper-slide .mask {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 6;
    opacity: 0.2;
    display: none;
  }

  .carrousel-sub .swiper-slide .img {
    width: 80%;
    height: 70vh;
    max-height: 800px;
    object-fit: cover;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0;
  }
}

@media (max-width: 640px) {
  .carrousel-sub {
    display: block !important;
    min-height: 100vh;
  }
}


.collage_section {
  width: 100%;
  height: 100vh;
  position: relative;
  background: #000;
}

.collage_section .img-main {
  width: 100%;
  height: auto;
  position: relative;
}

.collage_section .img-main .img-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10%;
  margin-top: 1.2rem;
  margin-top: calc(1.2 * 16 / 19.2 * 1vw);
  margin-bottom: 1.2rem;
  margin-bottom: calc(1.2 * 16 / 19.2 * 1vw);
}

.img-item .img {
  width: 50vw;
  max-width: 545px;
  height: 45vh; 
  max-height: 561px;
  transition: 1s;
  transition-delay: 0.3s;
  object-fit: cover;
  border-radius: 0.5rem;
  border-radius: calc(0.5 * 16 / 19.2 * 1vw);
}

.img-item .txt {
  width: 50vw;
  max-width: 545px;
  flex: 1 1 0;
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
  font-size: 24px;
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
  font-size: 16px;
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
  .mobile-collage_section {
    width: 100%;
    height: auto;
    position: relative;
  }

  .mobile-collage_section .img-main {
    width: 100%;
    height: auto;
    position: relative;
    padding-top: 6rem;
    padding-top: calc(6 * 16 / 3.75 * 1vw);
    padding-bottom: 2rem;
    padding-bottom: calc(2 * 16 / 3.75 * 1vw);
  }

  .mobile-collage_section .img-main .img-item {
    display: block;
    position: relative;

  }

  .mobile-collage_section .img-main .row {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .mobile-collage_section .img-main .img-item .img {
    width: 100%;
    max-width: none;
    height: 100%;
    object-fit: cover;
    border-radius: 0;
  }

  .mobile-collage_section .img-main .img-item .title-content {
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: 0.6s;
    transition-delay: 0.3s;
    padding: 0px 12px 12px 12px;
  }

  .mobile-collage_section .img-main .img-item .title-text {
    width: auto;
    text-transform: uppercase;
    font-size: 16px;
    text-align: center;
    color: #fff;
    padding: 0px 10px;
    background: linear-gradient(90deg, #67B0C4 0%, rgba(255, 255, 255, 0) 100%);

  }

  .mobile-collage_section .img-main .item1,
  .mobile-collage_section .img-main .item2,
  .mobile-collage_section .img-main .item3,
  .mobile-collage_section .img-main .item4,
  .mobile-collage_section .img-main .item5 {
    width: 100%;
    height: 400px;
    border-top: 1px solid #fff;
  }
}

@media (min-width: 640px) and (max-width: 874px) {
  .collage_section .img-main .img-item .txt .title {
    font-size: 18px;
  }
  .collage_section .img-main .img-item .txt .memo {
    font-size: 14px;
  }
}

@media (max-width: 640px) {
  .mobile-collage_section .img-main {
    padding-top: 80px;
    padding-bottom: 20px;
  }

  .mobile-collage_section .img-main .item1,
  .mobile-collage_section .img-main .item2,
  .mobile-collage_section .img-main .item3,
  .mobile-collage_section .img-main .item4,
  .mobile-collage_section .img-main .item5 {
    height: 350px;
    min-height: 350px;
  }

}

@media (max-width: 450px) {
  .mobile-collage_section .img-main {
    padding-top: 80px;
    padding-bottom: 20px;
  }

  .mobile-collage_section .img-main .item1,
  .mobile-collage_section .img-main .item2,
  .mobile-collage_section .img-main .item3,
  .mobile-collage_section .img-main .item4,
  .mobile-collage_section .img-main .item5 {
    height: 250px;
    min-height: 250px;
  }

  .mobile-collage_section .img-main .img-item .title-text {
    font-size: 14px;
  }


}

/* Transición slide-fade */
.slide-fade-enter-active {
  transition: all 1.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  transform: translateY(30px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

</style>
