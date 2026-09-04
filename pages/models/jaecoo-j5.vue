<template>
  <NuxtLayout name="layout" @custom-event="handleCustomEvent">
    <template #slidesSection>
      <SwiperSlide
        v-for="(page, index) in allPageData[isMobile ? 'h5' : 'pc']"
        :key="(isMobile ? 'h5' : 'pc') + index"
      >
        <FullBox
          v-if="page.code === 'box'"
          class="j5-safe-bottom"
          :ispc="!isMobile"
          :imgUrl="page.imgUrl"
          :style="page.style"
          :text="page.text"
        >
          <NumberFullTab
            v-if="page.imgUrl === (isMobile ? 'j5/m_bg_2.webp' : 'j5/bg_2.webp')"
            :datas="moduleCard2"
            :show-title="currentPage === index + 1"
          />
        </FullBox>
        <SwiperFullBox
          v-if="page.code === 'swiper'"
          class="j5-safe-bottom"
          :ispc="!isMobile"
          :slide="page.slide"
        />
        <SwiperFadeBox
          v-if="page.code === 'fade'"
          class="j5-safe-bottom"
          :ispc="!isMobile"
          :fade="page.fade"
        />
        <div 
          v-if="page.code === 'web360'" class="wrap_360 j5-safe-bottom" ref="web360">
          <iframe
            ref="web360_iframe"
            id="wrap_360"
            v-if="playweb360"
            scrolling="no"
            frameborder="0"
            :src="web360Src"
            class="iframe"
            :class="dis360 ? 'dis' : ''"
          ></iframe>
          <img
            loading="lazy"
            src="/images/models/web360-top.png"
            class="icon top"
            :class="dis360 ? 'hide' : 'show'"
            @click="web360Change('top')"
          />
          <img
            loading="lazy"
            src="/images/models/web360-bottom.png"
            class="icon bottom"
            :class="dis360 ? 'hide' : 'show'"
            @click="web360Change('bottom')"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Swiper
          class="insideSwiper"
          style="width: 100%; height: 100vh; transform: none"
          :modules="[SwiperFreeMode, SwiperMousewheel]"
          direction="vertical"
          :mousewheel="{ enabled: true, releaseOnEdges: true, thresholdDelta: 18 }"
          slidesPerView="auto"
          :freeMode="{
            enabled: true,
            minimumVelocity: 0.1,
          }"
          :nested="true"
          :observer="true"
          :observeParents="true"
          :autoHeight="true"
          :threshold="8"
          :longSwipes="true"
          :longSwipesRatio="0.25"
          :touchAngle="38"
          :touchReleaseOnEdges="true"
          :passiveListeners="false"
        >
          <SwiperSlide style="height: auto; display: block">
            <ClientOnly fallback-tag="span" fallback="Loading comments...">
              <ConfigTable class="config-table" data-url="excels/j5.xlsx" specialVersion="Excellent" title="Tabla de parámetros de configuración del JAECOO J5"/>
            </ClientOnly>
          </SwiperSlide>
        </Swiper>
      </SwiperSlide>
    </template>
    <template #overlay>
      <CommonReservationsStickyBar
        v-if="currentPage !== 999 && currentPage > 0"
        variant="fixed"
        vehicle="JAECOO J5"
      />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { onMounted, nextTick, onBeforeUnmount, ref } from "vue";
import type { Ref } from "vue";
import useDeviceType from "~/composables/useDeviceType";

interface BoxItemData {
  title?: string;
  desc?: string;
  style?: string;
  icon?: string;
}
interface BoxData {
  imgUrl?: string;
  style?: string;
  text?: {
    top?: BoxItemData;
    bottom?: BoxItemData;
    leftTop?: BoxItemData;
    rightTop?: BoxItemData;
    leftBottom?: BoxItemData;
    rightBottom?: BoxItemData;
  };
  picture?: BoxItemData[];
}
interface FadeData {
  title: string;
  desc?: string;
  bg?: string;
  car?: string;
  dot?: string;
  name?: string;
  style?: string;
  white?: boolean;
}
interface PageData extends BoxData {
  code?: string;
  slide?: BoxData[];
  fade?: FadeData[];
}
interface AllPageData {
  pc: PageData[];
  h5: PageData[];
}
const { isMobile } = useDeviceType();

const allPageData: AllPageData = {
  pc: [
    {
      code: "box",
      imgUrl: "j5/bg_1.webp",
      style: "p1",
      text: {
        leftBottom: {
          title: "Disfruta cada momento al aire libre",
          icon: "j5/ic_1.webp",
          style: "p1",
        },
      },
    },
    {
      code: "web360",
    },
    {
      code: "box",
      imgUrl: "j5/bg_2.webp",
    },
    {
      code: "swiper",
      slide: [
        {
          imgUrl: "j5/bg_3_1.webp",
          text: {
            leftBottom: {
              title: "FROM CLASSIC, BEYOND CLASSIC",
            },
          },
        },
        {
          imgUrl: "j5/bg_3_2.webp",
          text: {
            leftBottom: {
              title: "RECORRIDOS CON EFICIENCIA, Y POTENCIA",
            },
            leftTop: {
              title: `<div class='p321'>Sistema Full Hybrid Auto Recargable</div>
              <div class='p322'>MOTOR 1.5 TGDI ACTECO - BATERÍA 1,83 kWh</div>
              <div class='p323'>Comodidad en todo camino</div>
              <div class='p324'>Suspensión trasera multilink</div>
              `,
              style: "p32",
            },
          },
        },
        {
          imgUrl: "j5/bg_3_3.webp",
          text: {
            leftBottom: {
              title: "DISEÑO IMPONTENTE Y ELEGANTE",
              desc: "Sus cortes clásicos brindan  estilo, aerodinámica y  experiencia de manejo única.",
              style: "p3",
            },
          },
        },
        {
          imgUrl: "j5/bg_3_4.webp",
          text: {
            leftBottom: {
              title: "UN SUV CON ADN OFF ROAD DISEÑADO PARA TU ESTILO DE VIDA",
              desc: "Diseño clásico con tecnología y seguridad.",
              style: "p3 p34",
            },
            leftTop: {
              title: `<div class='p341'>R18</div>
              <div class='p342'>AROS DE ALEACIÓN</div>
              <div class='p343'>540°</div>
              <div class='p344'>VISIÓN PANORÁMICA*</div>
              `,
              style: "p34",
            },
          },
        },
        {
          imgUrl: "j5/bg_3_5.webp",
          text: {
            rightBottom: {
              title: "CAPACIDAD PARA VIVIR NUEVOS CAMINOS",
            },
            rightTop: {
              title: `<div class='p351'>450 mm</div>
              <div class='p352'>Capacidad de vadeo</div>
              `,
              style: "p35",
            },
          },
        },
      ],
    },
    {
      code: "swiper",
      slide: [
        {
          imgUrl: "j5/bg_3_6.webp",
          text: {
            leftBottom: {
              title: `<div class='p362'>1.45㎡</div>
              <div class='p363'>Techo panorámico integrado</div>
              <div class='p364'>VISTAS IMPRESIONANTES DESDE CÁDA ANGULO</div>
              `,
              style: "p36",
            },
          },
        },
        {
          imgUrl: "j5/bg_3_7.webp",
          text: {
            leftTop: {
              title: "SIÉNTATE O RECUESTATE,<br />SIEMPRE TE SENTIRAS CÓMODA",
            },
            leftBottom: {
              title: `<div class='p371'>Comodidad para cada viaje</div>
              <div class='p372'>Tapizado en PU suave al tacto<br />65% de ajuste al respaldo del cuerpo</div>
              <div class='p373'>Relaja tu cuerpo y tu mente</div>
              <div class='p374'>Espuma de alta resiliencia de 50 kg/m<br />Mayor elasticidad y mejor soporte</div>
              `,
              style: "p37",
            },
          },
        },
      ],
    },
    {
      code: "box",
      imgUrl: "j5/bg_4.webp",
      text: {
        leftBottom: {
          title: "DISEÑO POTENTE Y ELEGANTE",
        },
      },
    },
    {
      code: "fade",
      fade: [
        {
          title: "BLANCO",
          desc: "Las llanuras siberianas se visten de un blanco puro, digno de un sueño.",
          bg: "j5/5/b_1.webp",
          car: "j5/5/c_1.webp",
          dot: "j5/5/d_1.webp",
          name: "Blanco",
        },
        {
          title: "VERDE",
          desc: "Inspirado en los valles de los Alpes, donde los abetos brillan bajo la luz del sol.",
          bg: "j5/5/b_2.webp",
          car: "j5/5/c_2.webp",
          dot: "j5/5/d_2.webp",
          name: "Verde",
          white: true,
        },
        {
          title: "NEGRO",
          desc: "La imponente grandeza del Cañón Negro de Colorado cobra vida.",
          bg: "j5/5/b_3.webp",
          car: "j5/5/c_3.webp",
          dot: "j5/5/d_3.webp",
          name: "Negro",
          white: true,
        },
        {
          title: "AZUL",
          desc: "Inspirado en los ríos glaciares de Islandia, donde nace la pureza del color.",
          bg: "j5/5/b_4.webp",
          car: "j5/5/c_4.webp",
          dot: "j5/5/d_4.webp",
          name: "Azul",
        },
        {
          title: "GRIS",
          desc: "Las profundas vetas del Monte Vesubio resguardan una fuerza silenciosa en su oscura profundidad.",
          bg: "j5/5/b_5.webp",
          car: "j5/5/c_5.webp",
          dot: "j5/5/d_5.webp",
          name: "Gris",
        },
      ],
    },
    {
      code: "swiper",
      slide: [
        {
          imgUrl: "j5/bg_6_1.webp",
          text: {
            leftBottom: {
              title: "IMPONENTE PARILLA FRONTAL",
              desc: "Inspirado en los perfiles montañosos",
            },
          },
        },
        {
          imgUrl: "j5/bg_6_2.webp",
          text: {
            leftTop: {
              title: "SILUETA DE DOBLE ALTURA",
              desc: "Llegando a nuevos horizontes",
            },
          },
        },
        {
          imgUrl: "j5/bg_6_3.webp",
          text: {
            leftBottom: {
              title: "LUCES TRASERAS LED",
              desc: "Corte clásico e insignia de la marca",
            },
          },
        },
      ],
    },
    {
      code: "fade",
      fade: [
        {
          title: "Cabina interior ultra moderna",
          desc: "<h1>NEGRO BASALTO</h1><p style='font-size: 0.28em; line-height: 1.2; margin-top: 0.4em;'>aplica condiciones*</p>",
          bg: "j5/7/b_1.webp",
          car: "",
          dot: "j5/7/d_1.webp",
          name: "Negro Basalto",
          style: "p7",
        },
      ],
    },
    {
      code: "swiper",
      slide: [
        {
          imgUrl: "j5/bg_8_1.webp",
          text: {
            leftBottom: {
              title: "UN SUV PARA VIVIR TUS AVENTURAS",
            },
          },
        },
        {
          imgUrl: "j5/bg_8_2.webp",
          text: {
            leftBottom: {
              title: "VIVE TUS PASIONES<br />AL MÁXIMO EN TU J5.",
              desc: "Sistema completo de luces LED*",
            },
          },
        },
        {
          imgUrl: "j5/bg_8_4.webp",
          text: {
            leftBottom: {
              title: `MÁS DE <span style="color: #07B1F2;">35</span> ESPACIOS DE ALMACENAJE,<br />ADAPTADO A LA VIDA DENTRO Y FUERA DE CIUDAD.`,
              desc: "Espacios humanizados y listos para tu uso",
            },
          },
        },
        {
          imgUrl: "j5/bg_8_5.webp",
          text: {
            leftBottom: {
              title: `<div class='p851'>Best-in-class</div>
              <div class='p852'>ESPACIO PARA TODOS</div>
              <div class='p853'>Espacio confortable para conductor y pasajeros</div>
              `,
              style: "p85",
            },
            rightBottom: {
              // title: `<div class='p854'>
              // <div class='p855'><div class='p8551'>480L</div><div class='p8552'>Capacidad Maletero</div></div>
              // <div class='p856'><div class='p8551'>1180L</div><div class='p8552'>Capacidad Extendida Maletero</div></div>
              // </div>`,
              style: "p85",
            },
          },
        },
      ],
    },
    {
      code: "box",
      imgUrl: "j5/bg_8_6.webp",
      text: {
        leftBottom: {
          title: `<div class='p861'>First-in-class</div>
              <div class='p862'>FUNCIÓN DE KARAOKE</div>
              <div class='p863'>Con APP nativa, lista para el tráfico y los paseos en familia*</div>
              `,
          style: "p86",
        },
      },
    },
    {
      code: "swiper",
      slide: [
        {
          imgUrl: "j5/bg_9_1.webp",
          text: {
            leftBottom: {
              title: "EL MEJOR SUV PET FRIENDLY*",
              style: "p91",
            },
          },
        },
        {
          imgUrl: "j5/bg_9_2.webp",
          text: {
            leftTop: {
              title: `<div class='p921'>LA MEJOR CABINA PET FRIENDLY</div>
              <div class='p922'>AHORA NADIE SE QUEDARÁ ATRÁS</div>              
              `,
              style: "p92",
            },          
            rightTop: {
              icon: "j5/ic_3.webp",
              style: "p92",
            },
          },
        },
        {
          imgUrl: "j5/bg_9_3.webp",
          text: {
            leftBottom: {
              title: `<div class='p931'>LA MEJOR CABINA PET FRIENDLY</div>
              <div class='p932'>TAPICERÍA PARA ASIENTOS "SUPER ECOCLEAN SKIN"*</div>
              <div class='p933'>Bajo contenido de COV (compuestos orgánicos volátiles) para garantizar un entorno cómodo para las mascotas.</div>
              `,
              style: "p93",
            },
            rightBottom: {
              icon: "j5/ic_3.webp",
              style: "p92",
            },
          },
        },
        {
          imgUrl: "j5/bg_9_4.webp",
          text: {
            leftBottom: {
              title: `<div class='p931'>LA MEJOR CABINA PET FRIENDLY</div>
              <div class='p932'>TAPICERÍA PARA ASIENTOS "SUPER ECOCLEAN SKIN"*</div>
              <div class='p933'>Cumple con la norma ISO 22196:2011 para pruebas antibacterianas, con una tasa de inhibición bacteriana superior al 99,9%.</div>
              `,
              style: "p93",
            },
            rightBottom: {
              icon: "j5/ic_3.webp",
              style: "p92",
            },
          },
        },
        {
          imgUrl: "j5/bg_9_5.webp",
          text: {
            leftBottom: {
              title: `<div class='p931'>LA MEJOR CABINA PET FRIENDLY</div>
              <div class='p932'>TAPICERÍA DE ALTA DURABILIDAD*</div>
              <div class='p933'>Fácil de limpiar | Resistente a los arañazos de mascotas</div>
              `,
              style: "p93",
            },
            rightBottom: {
              icon: "j5/ic_3.webp",
              style: "p92",
            },
          },
        },
        {
          imgUrl: "j5/bg_9_6.webp",
          text: {
            leftBottom: {
              title: `<div class='p961'>LA MEJOR CABINA PET FRIENDLY</div>
              <div class='p962'>AVENTURAS DISEÑADAS PARA EL MEJOR COPILOTO</div>
              `,
              style: "p96",
            },
          },
        },
        {
          imgUrl: "j5/bg_9_7.webp",
          text: {
            leftBottom: {
              title: `<div class='p961'>LA MEJOR CABINA PET FRIENDLY</div>
              <div class='p962'>ESPACIOS Y ACCESORIOS PARA TODOS*</div>
              `,
              style: "p96",
            },
          },
        },        
      ],
    },
  ],
  h5: [
    {
      code: "box",
      imgUrl: "j5/m_bg_1.webp",
      style: "p1",
      text: {
        top: {
          title: "Disfruta cada momento al aire libre",
          icon: "j5/m_ic_1.webp",
          style: "h1",
        },
      },
    },
    {
      code: "web360",
    },
    {
      code: "box",
      imgUrl: "j5/m_bg_2.webp",
    },
    {
      code: "swiper",
      slide: [
        {
          imgUrl: "j5/m_bg_3_1.webp",
          text: {
            bottom: {
              title: "FROM CLASSIC, BEYOND CLASSIC",
              style: "h3",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_3_2.webp",
          text: {
            bottom: {
              title: "RECORRIDOS CON EFICIENCIA<br />Y POTENCIA",
              style: "h3",
            },
            leftTop: {
              title: `<div class='p321'>Sistema Full Hybrid Auto Recargable</div>
              <div class='h322'>MOTOR 1.5 TGDI ACTECO - BATERÍA 1,83 kWh</div>
              <div class='p323'>Comodidad en todo camino</div>
              <div class='p324'>Suspensión trasera multilink</div>
              `,
              style: "h32",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_3_3.webp",
          text: {
            bottom: {
              title: "DISEÑO IMPONTENTE Y ELEGANTE",
              desc: "Sus cortes clásicos brindan  estilo, aerodinámica<br />y experiencia de manejo única.",
              style: "h3",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_3_4.webp",
          text: {
            bottom: {
              title: "UN SUV CON ADN OFF ROAD DISEÑADO PARA TU ESTILO DE VIDA",
              desc: "Diseño clásico con tecnología y seguridad.",
              style: "h3",
            },
            leftTop: {
              title: `<div class='h341'>R18</div>
              <div class='h342'>AROS DE ALEACIÓN</div>
              <div class='h343'>540°</div>
              <div class='p344'>VISIÓN PANORÁMICA*</div>
              `,
              style: "h34",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_3_5.webp",
          text: {
            bottom: {
              title: "CAPACIDAD PARA VIVIR NUEVOS CAMINOS",
              style: "h3",
            },
            leftTop: {
              title: `<div class='h341'>450 mm</div>
              <div class='h342'>Capacidad de vadeo</div>
              `,
              style: "h34",
            },
          },
        },
      ],
    },
    {
      code: "swiper",
      slide: [
        {
          imgUrl: "j5/m_bg_3_6.webp",
          text: {
            bottom: {
              title: "VISTAS IMPRESIONANTES DESDE CÁDA ANGULO",
              style: "h3",
            },
            leftTop: {
              title: `<div class='h362'>1.45㎡</div>
              <div class='h363'>Techo panorámico integrado</div>
              `,
              style: "h36",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_3_7.webp",
          text: {
            bottom: {
              title: "SIÉNTATE O RECUESTATE,,<br />SIEMPRE TE SENTIRAS CÓMODA",
              style: "h3",
            },
            leftTop: {
              title: `<div class='h371'>Comodidad para cada viaje</div>
              <div class='h372'>Tapizado en PU suave al tacto<br />65% de ajuste al respaldo del cuerpo</div>
              <div class='h373'>Relaja tu cuerpo y tu mente</div>
              <div class='h374'>Espuma de alta resiliencia de 50 kg/m<br />Mayor elasticidad y mejor soporte</div>
              `,
              style: "h37",
            },
          },
        },
      ],
    },
    {
      code: "box",
      imgUrl: "j5/m_bg_4.webp",
      text: {
        bottom: {
          title: "DISEÑO POTENTE Y ELEGANTE",
        },
      },
    },
    {
      code: "fade",
      fade: [
        {
          title: "BLANCO",
          desc: "Las llanuras siberianas se visten de un blanco puro, digno de un sueño.",
          bg: "j5/5/m_b_1.webp",
          car: "j5/5/m_c_1.webp",
          dot: "j5/5/d_1.webp",
          name: "Blanco",
        },
        {
          title: "VERDE",
          desc: "Inspirado en los valles de los Alpes, donde los abetos brillan bajo la luz del sol.",
          bg: "j5/5/m_b_2.webp",
          car: "j5/5/m_c_2.webp",
          dot: "j5/5/d_2.webp",
          name: "Verde",
          white: true,
        },
        {
          title: "NEGRO",
          desc: "La imponente grandeza del Cañón Negro de Colorado cobra vida.",
          bg: "j5/5/m_b_3.webp",
          car: "j5/5/m_c_3.webp",
          dot: "j5/5/d_3.webp",
          name: "Negro",
          white: true,
        },
        {
          title: "AZUL",
          desc: "Inspirado en los ríos glaciares de Islandia, donde nace la pureza del color.",
          bg: "j5/5/m_b_4.webp",
          car: "j5/5/m_c_4.webp",
          dot: "j5/5/d_4.webp",
          name: "Azul",
        },
        {
          title: "GRIS",
          desc: "Las profundas vetas del Monte Vesubio resguardan una fuerza silenciosa en su oscura profundidad.",
          bg: "j5/5/m_b_5.webp",
          car: "j5/5/m_c_5.webp",
          dot: "j5/5/d_5.webp",
          name: "Gris",
        },
      ],
    },
    {
      code: "swiper",
      slide: [
        {
          imgUrl: "j5/m_bg_6_1.webp",
          style: "h6",
          text: {
            top: {
              title: "IMPONENTE PARILLA FRONTAL",
              desc: "Inspirado en los perfiles montañosos",
              style: "h6",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_6_2.webp",
          text: {
            top: {
              title: "SILUETA DE DOBLE ALTURA",
              desc: "Llegando a nuevos horizontes",
              style: "h6",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_6_3.webp",
          text: {
            top: {
              title: "LUCES TRASERAS LED",
              desc: "Corte clásico e insignia de la marca",
              style: "h6",
            },
          },
        },
      ],
    },
    {
      code: "fade",
      fade: [
        {
          title: "Cabina interior ultra moderna",
          desc: "<h1>NEGRO BASALTO</h1><p style='font-size: 0.28em; line-height: 1.2; margin-top: 0.4em;'>aplica condiciones*</p>",
          bg: "j5/7/m_b_1.webp",
          car: "",
          dot: "j5/7/d_1.webp",
          name: "Negro Basalto",
          style: "h7",
        },
      ],
    },
    {
      code: "swiper",
      slide: [
        {
          imgUrl: "j5/m_bg_8_1.webp",
          text: {
            bottom: {
              title: "UN SUV PARA VIVIR TUS AVENTURAS",
              style: "h3",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_8_2.webp",
          text: {
            bottom: {
              title: "VIVE TUS PASIONES,<br />AL MÁXIMO EN TU J5.",
              desc: "Sistema completo de luces LED*",
              style: "h3",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_8_4.webp",
          text: {
            bottom: {
              title: `MÁS DE <span style="color: #07B1F2;">35</span> ESPACIOS DE ALMACENAJE,
              <br />ADAPTADO A LA VIDA DENTRO Y FUERA DE CIUDAD.`,
              desc: "Espacios humanizados y listos para tu uso",
              style: "h3",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_8_5.webp",
          text: {
            bottom: {
              title: "ACCOMMODATE JOY OF EACH<br />MOMENT",
              style: "h3",
            },
            leftTop: {
              title: `<div class='h851'>Best-in-class</div>
              <div class='h852'>ESPACIO PARA TODOS</div>
              <div class='h853'>Espacio confortable para conductor<br />y pasajeros</div>
              <div class='h854'>
              <div class='h855'><div class='h8551'>480L</div><div class='h8552'>Capacidad Maletero</div></div>
              <div class='h856'><div class='h8551'>1180L</div><div class='h8552'>Capacidad extendida Maletero</div></div>
              </div>
              `,
              style: "h85",
            },
          },
        },
      ],
    },
    {
      code: "box",
      imgUrl: "j5/m_bg_8_6.webp",
      text: {
        bottom: {
          title: "ACCOMMODATE JOY OF EVERYONE",
          style: "h3",
        },
        leftTop: {
          title: `<div class='h861'>First-in-class</div>
              <div class='h862'>FUNCIÓN DE KARAOKE</div>
              <div class='h863'>Con APP nativa, lista para el tráfico y los paseos en familia*</div>
              `,
          style: "h86",
        },
      },
    },
    {
      code: "swiper",
      slide: [
        {
          imgUrl: "j5/m_bg_9_1.webp",
          style: "h9",
          text: {
            top: {
              title: "LA MEJOR CABINA PET FRIENDLY",
              style: "h9",
            },
            leftBottom: {
              title: "EL MEJOR SUV PET FRIENDLY*",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_9_2.webp",
          text: {
            top: {
              title: "LA MEJOR CABINA PET FRIENDLY",
              style: "h9",
            },
            leftBottom: {
              title: `<div class='h921'>AHORA NADIE SE QUEDARÁ ATRÁS</div>
              `,
              style: "h92",
            },
            rightTop: {
              icon: "j5/m_ic_3.webp",
              style: "h92",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_9_3.webp",
          text: {
            top: {
              title: "LA MEJOR CABINA PET FRIENDLY",
              style: "h9",
            },
            leftBottom: {
              title: 'TAPICERÍA PARA ASIENTOS "SUPER ECOCLEAN SKIN"*',
              desc: "Bajo contenido de COV (compuestos orgánicos volátiles) para garantizar un entorno cómodo para las mascotas.",
              style: "h93",
            },
            rightTop: {
              icon: "j5/m_ic_3.webp",
              style: "h92",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_9_4.webp",
          text: {
            top: {
              title: "LA MEJOR CABINA PET FRIENDLY",
              style: "h9",
            },
            leftBottom: {
              title: 'TAPICERÍA PARA ASIENTOS "SUPER ECOCLEAN SKIN"*',
              desc: "Cumple con la norma ISO 22196:2011 para pruebas antibacterianas, con una tasa de inhibición bacteriana superior al 99,9%.",
              style: "h93",
            },
            rightTop: {
              icon: "j5/m_ic_3.webp",
              style: "h92",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_9_5.webp",
          text: {
            top: {
              title: "LA MEJOR CABINA PET FRIENDLY",
              style: "h9",
            },
            leftBottom: {
              title:
                "TAPICERÍA DE ALTA DURABILIDAD*<br />Fácil de limpiar |<br />Resistente a los arañazos de mascotas",
              style: "h95",
            },
            rightTop: {
              icon: "j5/m_ic_3.webp",
              style: "h92",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_9_6.webp",
          text: {
            top: {
              title: "LA MEJOR CABINA PET FRIENDLY",
              style: "h9",
            },
            leftBottom: {
              title: "AVENTURAS DISEÑADAS PARA EL MEJOR COPILOTO",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_9_7.webp",
          text: {
            top: {
              title: "LA MEJOR CABINA PET FRIENDLY",
              style: "h9",
            },
            leftBottom: {
              title: "ESPACIOS Y ACCESORIOS PARA TODOS*",
            },
          },
        },        
      ],
    },
  ],
};

// 第二屏数字动效数据
const moduleCard2 = [
  { label: "Largo", num: 4380, txt: "mm" },
  { label: "Ancho", num: 1860, txt: "mm" },
  { label: "Alto", num: 1650, txt: "mm" },
  { label: "Dist. entre ejes", num: 2620, txt: "mm" },
];

const currentPage = ref(1);
let swiperInst;
const toNextSlide = () => {
  swiperInst?.slideNext();
};
const handleCustomEvent = (cur, swiper) => {
  swiperInst = swiper;
  const page = allPageData[isMobile.value ? "h5" : "pc"][cur - 1];
  dis360.value = page?.code !== "web360";
  setTimeout(() => {
    currentPage.value = swiper.activeIndex + 1;
  }, 310);
};

const web360: any = ref(null);
const web360_iframe: any = ref(null);
const dis360: Ref<boolean> = ref(true);
const playweb360: Ref<boolean> = ref(false);
const web360Src = "/JAECOO5web-360/";
let web360Observer: IntersectionObserver | undefined;
let isHandling360Scroll = false;

function handle360Message(event: MessageEvent) {
  // The 360 iframe prevents the native wheel event and forwards its direction
  // to the parent window instead.
  const iframe = document.querySelector("#wrap_360") as HTMLIFrameElement | null;
  if (event.source !== iframe?.contentWindow) return;

  const deltaY = Number(event.data?.message);
  if (!Number.isFinite(deltaY) || deltaY === 0 || isHandling360Scroll) return;

  const fullPageSwiper = (document.querySelector(".fullPageContainer") as any)?.swiper;
  if (!fullPageSwiper) return;

  isHandling360Scroll = true;
  if (deltaY > 0) {
    fullPageSwiper.slideNext();
  } else {
    fullPageSwiper.slidePrev();
  }

  window.setTimeout(() => {
    isHandling360Scroll = false;
  }, 1500);
}

onMounted(() => {
  window.addEventListener("message", handle360Message);

  nextTick(() => {
    const elements = document.querySelectorAll(".wrap_360");
    web360Observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        playweb360.value = entry.isIntersecting;
        if (entry.isIntersecting) {
          instance.unobserve(entry.target);
        }
      });
    });
    elements.forEach((element) => web360Observer?.observe(element));
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("message", handle360Message);
  web360Observer?.disconnect();
});

function web360Change(txt) {
  let mySwiper: any = (document.querySelector(".fullPageContainer") as any)?.swiper;
  if (!mySwiper) return;
  // console.log('change', txt)
  switch (txt) {
    case "top":
      mySwiper.slidePrev();
      break;
    case "bottom":
      dis360.value = true;
      setTimeout(() => {
        mySwiper.slideNext();
      }, 100);

      break;
  }
}
</script>

<style lang="scss" scoped>
.config-table-two {
  padding-top: 2rem;
}

.wrap_360 {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #000;
}

.wrap_360 .iframe {
  position: absolute;
  inset: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  border: 0;
}

.wrap_360 .iframe.dis {
  pointer-events: none;
}

.wrap_360 .icon {
  position: absolute;
  left: 3%;
  z-index: 200;
  display: block;
  width: 0.6rem;
  height: auto;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.wrap_360 .icon.top {
  top: 35%;
  animation: move2top 1.2s infinite;
}

.wrap_360 .icon.bottom {
  top: 70%;
  animation: move2bottom 1.2s infinite;
}

.wrap_360 .icon.hide {
  opacity: 0;
  pointer-events: none;
}

.wrap_360 .icon.show {
  opacity: 1;
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

@media screen and (max-width: 1023px) {
  .j5-safe-bottom {
    --j5-mobile-bottom-safe: 48px;
    --j5-mobile-bottom-safe: max(48px, env(safe-area-inset-bottom));
  }

  :deep(.j5-safe-bottom .box-bottom) {
    bottom: calc(136 / 1125 * 100vw + var(--j5-mobile-bottom-safe));
  }

  :deep(.j5-safe-bottom .box-bottom.h3) {
    bottom: calc((136 - 96 / 2) / 1125 * 100vw + var(--j5-mobile-bottom-safe));
  }

  :deep(.j5-safe-bottom .box-leftBottom),
  :deep(.j5-safe-bottom .box-rightBottom) {
    bottom: calc(186 / 1125 * 100vw + var(--j5-mobile-bottom-safe));
  }

  :deep(.j5-safe-bottom .box-box-count) {
    bottom: var(--j5-mobile-bottom-safe);
  }

  :deep(.j5-safe-bottom .number-tab-wrap) {
    bottom: calc(24px + var(--j5-mobile-bottom-safe));
  }

  :deep(.j5-safe-bottom .btn) {
    bottom: calc(136 / 1125 * 100vw + var(--j5-mobile-bottom-safe));
  }

  :deep(.j5-safe-bottom .h6-pagination) {
    bottom: calc(120 / 1125 * 100vw + var(--j5-mobile-bottom-safe));
  }

  :deep(.j5-safe-bottom .fade-pagination) {
    bottom: calc(clamp(24px, 7vh, 72px) + var(--j5-mobile-bottom-safe));
  }

  .wrap_360 .icon {
    width: 0.8rem;
  }

  .wrap_360 .icon.top {
    top: 20%;
  }

  .wrap_360 .icon.bottom {
    top: 80%;
  }
}
</style>
