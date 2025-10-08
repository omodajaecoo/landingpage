<template>
  <NuxtLayout name="layout" @custom-event="handleCustomEvent">
    <template #slidesSection>
      <SwiperSlide
        v-for="(page, index) in allPageData[isMobile ? 'h5' : 'pc']"
        :key="(isMobile ? 'h5' : 'pc') + index"
      >
        <FullBox
          v-if="page.code === 'box'"
          :ispc="!isMobile"
          :imgUrl="page.imgUrl"
          :style="page.style"
          :text="page.text"
        >
          <NumberFullTab
            v-if="index === 1"
            :datas="moduleCard2"
            :show-title="currentPage === 2"
          />
        </FullBox>
        <SwiperFullBox
          v-if="page.code === 'swiper'"
          :ispc="!isMobile"
          :slide="page.slide"
        />
        <SwiperFadeBox
          v-if="page.code === 'fade'"
          :ispc="!isMobile"
          :fade="page.fade"
        />
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
          <SwiperSlide style="height: auto; display: block">
            <ClientOnly fallback-tag="span" fallback="Loading comments...">
              <ConfigTable class="config-table" data-url="excels/j5.xlsx" />
            </ClientOnly>
          </SwiperSlide>
          <SwiperSlide style="height: auto; display: block">
            <ClientOnly fallback-tag="span" fallback="Loading comments...">
              <ConfigTable
                class="config-table config-table-two"
                data-url="excels/j5bev.xlsx"
              />
            </ClientOnly>
          </SwiperSlide>
          <SwiperSlide style="height: auto; display: block; transform: none">
            <LayoutsFooter />
          </SwiperSlide>
        </Swiper>
      </SwiperSlide>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { onMounted, nextTick, watch } from "vue";

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
          title: "Enjoy Each Moment Outdoors",
          icon: "j5/ic_1.webp",
          style: "p1",
        },
      },
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
              title: "BEST LIGHT OFF-ROAD SUV",
            },
          },
        },
        {
          imgUrl: "j5/bg_3_2.webp",
          text: {
            leftBottom: {
              title: "BEST CHOICE FOR LIGHT OFF-ROAD DRIVING",
            },
            leftTop: {
              title: `<div class='p321'>Borgwarner system</div>
              <div class='p322'>1.6T AWD</div>
              <div class='p323'>From entry level</div>
              <div class='p324'>Independent suspension</div>
              `,
              style: "p32",
            },
          },
        },
        {
          imgUrl: "j5/bg_3_3.webp",
          text: {
            leftBottom: {
              title: "FOR THE WILD. TO THE WILD",
              desc: "Independent suspension from entry level, combines off-road driving and comfort experience.",
              style: "p3",
            },
          },
        },
        {
          imgUrl: "j5/bg_3_4.webp",
          text: {
            leftBottom: {
              title: "MAKE THE ROAD AHEAD EASY FOR YOU",
              desc: "With intelligent technology, nothingis difficult.",
              icon: "j5/ic_2.webp",
              style: "p3 p34",
            },
            leftTop: {
              title: `<div class='p341'>3-60km/h</div>
              <div class='p342'>Intelligent speed control for HDC</div>
              <div class='p343'>540°</div>
              <div class='p344'>Panoramic view system</div>
              `,
              style: "p34",
            },
          },
        },
        {
          imgUrl: "j5/bg_3_5.webp",
          text: {
            rightBottom: {
              title: "OFF-ROAD GENE FROM CLASSIC",
            },
            rightTop: {
              title: `<div class='p351'>450 mm</div>
              <div class='p352'>Wading depth</div>
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
              title: `<div class='p361'>Best-in-class</div>
              <div class='p362'>1.45㎡</div>
              <div class='p363'>Integrated panoramic canopy</div>
              <div class='p364'>WIDE VIEW FROM EACH CORNER</div>
              `,
              style: "p36",
            },
          },
        },
        {
          imgUrl: "j5/bg_3_7.webp",
          text: {
            leftTop: {
              title: "SIT OR LIE DOWN,<br />YOU ALWAYS FEEL COMFORTABLE",
            },
            leftBottom: {
              title: `<div class='p371'>Comfort for a trip</div>
              <div class='p372'>Skin friendly PU fabric<br />65% backrest fit rate</div>
              <div class='p373'>Relax your body and mind</div>
              <div class='p374'>50kg/m high rebound foam<br />Better elasticity and support</div>
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
          title: "POWERFUL YET ELEGANT DESIGN",
        },
      },
    },
    {
      code: "fade",
      fade: [
        {
          title: "SNOWY WHITE",
          desc: "The snow blanketing the siberian plains is a dreamlike shade of pure white.",
          bg: "j5/5/b_1.webp",
          car: "j5/5/c_1.webp",
          dot: "j5/5/d_1.webp",
          name: "Snowy White",
        },
        {
          title: "ALPINE GREEN",
          desc: "In the valleys of the Alps,watch the fir trees shimmer in layers of sunlight.",
          bg: "j5/5/b_2.webp",
          car: "j5/5/c_2.webp",
          dot: "j5/5/d_2.webp",
          name: "Alpine Green",
          white: true,
        },
        {
          title: "CANYON BLACK",
          desc: "In Colorado's Black Canyon,you can feel the majestic grandeur of vast chasm.",
          bg: "j5/5/b_3.webp",
          car: "j5/5/c_3.webp",
          dot: "j5/5/d_3.webp",
          name: "Canyon Black",
          white: true,
        },
        {
          title: "GLACIER BLUE",
          desc: "Glacial rivers flow across the Icelandic landscape,bringing the purest of colors.",
          bg: "j5/5/b_4.webp",
          car: "j5/5/c_4.webp",
          dot: "j5/5/d_4.webp",
          name: "Glacier Blue",
        },
        {
          title: "ZIRCON GRAY",
          desc: "The deep veins of Mount Vesuvius conceal their strength within cool dark",
          bg: "j5/5/b_5.webp",
          car: "j5/5/c_5.webp",
          dot: "j5/5/d_5.webp",
          name: "Zircon Gray",
        },
        {
          title: "SNOWY WHITE WITH BLACK ROOF",
          desc: "The snow blanketing the siberian plains is a dreamlike shade of pure white.",
          bg: "j5/5/b_6.webp",
          car: "j5/5/c_6.webp",
          dot: "j5/5/d_6.webp",
          name: "Snowy White with Black Roof",
        },
        {
          title: "ALPINE GREEN WITH BLACK ROOF",
          desc: "In the valleys of the Alps,watch the fir trees shimmer in layers of sunlight.",
          bg: "j5/5/b_7.webp",
          car: "j5/5/c_7.webp",
          dot: "j5/5/d_7.webp",
          name: "Alpine Green with Black Roof",
          white: true,
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
              title: "FRONT BUMPER",
              desc: "As strong as high mountain",
            },
          },
        },
        {
          imgUrl: "j5/bg_6_2.webp",
          text: {
            leftTop: {
              title: "BODY LINE",
              desc: "As sharp and stright as cliff",
            },
          },
        },
        {
          imgUrl: "j5/bg_6_3.webp",
          text: {
            leftBottom: {
              title: "LIGHT LANGUAGE",
              desc: "Inspired by Mountain Road",
            },
          },
        },
      ],
    },
    {
      code: "fade",
      fade: [
        {
          title: "Cabin interior color",
          desc: "BASALT BLACK",
          bg: "j5/7/b_1.webp",
          car: "",
          dot: "j5/7/d_1.webp",
          name: "Basalt Black",
          style: "p7",
        },
        {
          title: "Cabin interior color",
          desc: "MIST GREY",
          bg: "j5/7/b_2.webp",
          car: "",
          dot: "j5/7/d_2.webp",
          name: "Mist Grey",
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
              title: "BEST OUTDOOR SUV",
            },
          },
        },
        {
          imgUrl: "j5/bg_8_2.webp",
          text: {
            leftBottom: {
              title: "GO SEE THE WORLD,<br />PACK ALL YOU PASSION.",
              desc: "75kg roof rack",
            },
          },
        },
        {
          imgUrl: "j5/bg_8_3.webp",
          text: {
            leftBottom: {
              title: "GO SEE THE WORLD,<br />PACK ALL YOU PASSION.",
              desc: "Maximum towing capacity up to 750kg",
            },
          },
        },
        {
          imgUrl: "j5/bg_8_4.webp",
          text: {
            leftBottom: {
              title: `MORE THAN <span style="color: #07B1F2;">35</span> STORAGE SPACES,<br />HOLD ALL YOU OUTDOOR FACILITIES.`,
              desc: "Humanized design dedicated for outdoor travel",
            },
          },
        },
        {
          imgUrl: "j5/bg_8_5.webp",
          text: {
            leftBottom: {
              title: `<div class='p851'>Best-in-class</div>
              <div class='p852'>CAMPING ACCESSORIES</div>
              <div class='p853'>Detachable camping light with 3 modes, magnetically attachable</div>
              `,
              style: "p85",
            },
            rightBottom: {
              // title: `<div class='p854'>
              // <div class='p855'><div class='p8551'>480L</div><div class='p8552'>Standard trunk space</div></div>
              // <div class='p856'><div class='p8551'>1180L</div><div class='p8552'>Expanded trunk space</div></div>
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
              <div class='p862'>KARAOKE MODE</div>
              <div class='p863'>In-car app, noise-canceling mic, subwoofer</div>
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
              title: "BEST PET-FRIENDLY SUV",
              style: "p91",
            },
          },
        },
        {
          imgUrl: "j5/bg_9_2.webp",
          text: {
            leftTop: {
              title: `<div class='p921'>BEST PET-FRIENDLY CABIN</div>
              <div class='p922'>"PET MODE" AVAILABLE</div>
              <div class='p923'>Activate "Pet Mode" for a cool, comfy ride for your pet.</div>
              `,
              style: "p92",
            },
            leftBottom: {
              title: `<div class='p924'>Note: "Pet Mode" is a feature of the J5 EV. Vehicle specifications may vary by market. Contact your local dealer for more information.</div>`,
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
              title: `<div class='p931'>BEST PET-FRIENDLY CABIN</div>
              <div class='p932'>"SUPER ECOCLEAN SKIN" SEAT FABRIC</div>
              <div class='p933'>Low-VOC (volatile organic compounds) to ensure a comfortable environment for pets.</div>
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
              title: `<div class='p931'>BEST PET-FRIENDLY CABIN</div>
              <div class='p932'>"SUPER ECOCLEAN SKIN" SEAT FABRIC</div>
              <div class='p933'>Passed ISO 22196-2011 antibacterial test standard, with over 99.9% bacterial inhibition rate.</div>
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
              title: `<div class='p931'>BEST PET-FRIENDLY CABIN</div>
              <div class='p932'>DURABLE FABRIC</div>
              <div class='p933'>That resists pet scratches | Easy to clean with a simple wipe</div>
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
              title: `<div class='p961'>BEST PET-FRIENDLY CABIN</div>
              <div class='p962'>FRIENDS TOGETHER OUTDOOR FUN FOREVER</div>
              `,
              style: "p96",
            },
          },
        },
        {
          imgUrl: "j5/bg_9_7.webp",
          text: {
            leftBottom: {
              title: `<div class='p961'>BEST PET-FRIENDLY CABIN</div>
              <div class='p962'>BEST PET-FRIENDLY ACCESSORIES</div>
              `,
              style: "p96",
            },
          },
        },
        {
          imgUrl: "",
          style: "p96",
          picture: [
            {
              title: "CAR MODEL CAT SCRATCHER",
              icon: "j5/bg_9_6_1.webp",
            },
            {
              title: "RETRACTABLE LED LEASH",
              icon: "j5/bg_9_6_2.webp",
            },
            {
              title: "TRUNK PET MAT",
              icon: "j5/bg_9_6_3.webp",
            },
            {
              title: "SUBMARINE FRESH AIR CAT CARRIER",
              icon: "j5/bg_9_6_4.webp",
            },
            {
              title: "TRUNK BARRIER NET",
              icon: "j5/bg_9_6_5.webp",
            },
          ],
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
          title: "Enjoy Each Moment Outdoors",
          icon: "j5/m_ic_1.webp",
          style: "h1",
        },
      },
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
              title: "BEST LIGHT OFF-ROAD SUV",
              style: "h3",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_3_2.webp",
          text: {
            bottom: {
              title: "BEST CHOICE FOR LIGHT<br />OFF-ROAD DRIVING",
              style: "h3",
            },
            leftTop: {
              title: `<div class='p321'>Borgwarner system</div>
              <div class='h322'>1.6T AWD</div>
              <div class='p323'>From entry level</div>
              <div class='p324'>Independent Suspension</div>
              `,
              style: "h32",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_3_3.webp",
          text: {
            bottom: {
              title: "FOR THE WILD. TO THE WILD",
              desc: "Independent suspension from entry level, combines<br />off-road driving and comfort experience.",
              style: "h3",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_3_4.webp",
          text: {
            bottom: {
              title: "MAKE THE ROAD AHEAD EASY FOR YOU",
              desc: "With intelligent technology, nothingis difficult.",
              style: "h3",
            },
            leftTop: {
              title: `<div class='h341'>3-60km/h</div>
              <div class='h342'>Intelligent speed control for HDC</div>
              <div class='h343'>540°</div>
              <div class='p344'>Panoramic view system</div>
              `,
              style: "h34",
            },
            rightTop: {
              icon: "j5/m_ic_2.webp",
              style: "h34",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_3_5.webp",
          text: {
            bottom: {
              title: "OFF-ROAD GENE FROM CLASSIC",
              style: "h3",
            },
            leftTop: {
              title: `<div class='h341'>450 mm</div>
              <div class='h342'>Wading depth</div>
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
              title: "WIDE VIEW FROM EACH CORNER",
              style: "h3",
            },
            leftTop: {
              title: `<div class='h361'>Best-in-class</div>
              <div class='h362'>1.45㎡</div>
              <div class='h363'>Integrated panoramic canopy</div>
              `,
              style: "h36",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_3_7.webp",
          text: {
            bottom: {
              title: "SIT OR LIE DOWN,<br />YOU ALWAYS FEEL COMFORTABLE",
              style: "h3",
            },
            leftTop: {
              title: `<div class='h371'>Comfort for a trip</div>
              <div class='h372'>Skin friendly PU fabric<br />65% backrest fit rate</div>
              <div class='h373'>Relax your body and mind</div>
              <div class='h374'>50kg/m high rebound foam<br />Better elasticity and support</div>
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
          title: "POWERFUL YET ELEGANT DESIGN",
        },
      },
    },
    {
      code: "fade",
      fade: [
        {
          title: "SNOWY WHITE",
          desc: "The snow blanketing the siberian plains is a dreamlike shade of pure white.",
          bg: "j5/5/m_b_1.webp",
          car: "j5/5/m_c_1.webp",
          dot: "j5/5/d_1.webp",
          name: "Snowy White",
        },
        {
          title: "ALPINE GREEN",
          desc: "In the valleys of the Alps,watch the fir trees shimmer in layers of sunlight.",
          bg: "j5/5/m_b_2.webp",
          car: "j5/5/m_c_2.webp",
          dot: "j5/5/d_2.webp",
          name: "Alpine Green",
          white: true,
        },
        {
          title: "CANYON BLACK",
          desc: "In Colorado's Black Canyon,you can feel the majestic grandeur of vast chasm.",
          bg: "j5/5/m_b_3.webp",
          car: "j5/5/m_c_3.webp",
          dot: "j5/5/d_3.webp",
          name: "Canyon Black",
          white: true,
        },
        {
          title: "GLACIER BLUE",
          desc: "Glacial rivers flow across the Icelandic landscape,bringing the purest of colors.",
          bg: "j5/5/m_b_4.webp",
          car: "j5/5/m_c_4.webp",
          dot: "j5/5/d_4.webp",
          name: "Glacier Blue",
        },
        {
          title: "ZIRCON GRAY",
          desc: "The deep veins of Mount Vesuvius conceal their strength within cool dark",
          bg: "j5/5/m_b_5.webp",
          car: "j5/5/m_c_5.webp",
          dot: "j5/5/d_5.webp",
          name: "Zircon Gray",
        },
        {
          title: "SNOWY WHITE WITH BLACK ROOF",
          desc: "The snow blanketing the siberian plains is a dreamlike shade of pure white.",
          bg: "j5/5/m_b_6.webp",
          car: "j5/5/m_c_6.webp",
          dot: "j5/5/d_6.webp",
          name: "Snowy White with Black Roof",
        },
        {
          title: "ALPINE GREEN WITH BLACK ROOF",
          desc: "In the valleys of the Alps,watch the fir trees shimmer in layers of sunlight.",
          bg: "j5/5/m_b_7.webp",
          car: "j5/5/m_c_7.webp",
          dot: "j5/5/d_7.webp",
          name: "Alpine Green with Black Roof",
          white: true,
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
              title: "FRONT BUMPER",
              desc: "As strong as high mountain",
              style: "h6",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_6_2.webp",
          text: {
            top: {
              title: "BODY LINE",
              desc: "As sharp and stright as cliff",
              style: "h6",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_6_3.webp",
          text: {
            top: {
              title: "LIGHT LANGUAGE",
              desc: "Inspired by Mountain Road",
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
          title: "Cabin interior color",
          desc: "BASALT BLACK",
          bg: "j5/7/m_b_1.webp",
          car: "",
          dot: "j5/7/d_1.webp",
          name: "Basalt Black",
          style: "h7",
        },
        {
          title: "Cabin interior color",
          desc: "MIST GREY",
          bg: "j5/7/m_b_2.webp",
          car: "",
          dot: "j5/7/d_2.webp",
          name: "Mist Grey",
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
              title: "BEST OUTDOOR SUV",
              style: "h3",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_8_2.webp",
          text: {
            bottom: {
              title: "GO SEE THE WORLD,<br />PACK ALL YOU PASSION.",
              desc: "75kg roof rack",
              style: "h3",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_8_3.webp",
          text: {
            bottom: {
              title: "GO SEE THE WORLD,<br />PACK ALL YOU PASSION.",
              desc: "Maximum towing capacity up to 750kg",
              style: "h3",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_8_4.webp",
          text: {
            bottom: {
              title: `MORE THAN <span style="color: #07B1F2;">35</span> STORAGE SPACES,
              <br />HOLD ALL YOU OUTDOOR
              <br />FACILITIES.`,
              desc: "Humanized design dedicated for outdoor travel",
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
              <div class='h852'>CAMPING ACCESSORIES</div>
              <div class='h853'>Detachable camping light with 3 modes,<br />magnetically attachable</div>
              <div class='h854'>
              <div class='h855'><div class='h8551'>480L</div><div class='h8552'>Standard trunk space</div></div>
              <div class='h856'><div class='h8551'>1180L</div><div class='h8552'>Expanded trunk space</div></div>
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
              <div class='h862'>KARAOKE MODE</div>
              <div class='h863'>In-car app, noise-canceling mic, subwoofer</div>
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
              title: "BEST PET-FRIENDLY CABIN",
              style: "h9",
            },
            leftBottom: {
              title: "BEST PET-FRIENDLY SUV",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_9_2.webp",
          text: {
            top: {
              title: "BEST PET-FRIENDLY CABIN",
              style: "h9",
            },
            leftBottom: {
              title: `<div class='h921'>"PET MODE" AVAILABLE</div>
              <div class='h922'>Activate "Pet Mode" for a cool, comfy ride for your pet.</div>
              <div class='h923'>Note: "Pet Mode" is a feature of the J5 EV. Vehicle specifications may vary by market. Contact your local dealer for more information.</div>
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
              title: "BEST PET-FRIENDLY CABIN",
              style: "h9",
            },
            leftBottom: {
              title: '"SUPER ECOCLEAN SKIN" SEAT FABRIC',
              desc: "Low-VOC (volatile organic compounds) to ensure a comfortable environment for pets.",
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
              title: "BEST PET-FRIENDLY CABIN",
              style: "h9",
            },
            leftBottom: {
              title: '"SUPER ECOCLEAN SKIN" SEAT FABRIC',
              desc: "Passed ISO 22196-2011 antibacterial test standard, with over 99.9% bacterial inhibition rate.",
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
              title: "BEST PET-FRIENDLY CABIN",
              style: "h9",
            },
            leftBottom: {
              title:
                "DURABLE FABRIC<br />THAT RESISTS PET SCRATCHES |<br />EASY TO CLEAN WITH A SIMPLE WIPE",
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
              title: "BEST PET-FRIENDLY CABIN",
              style: "h9",
            },
            leftBottom: {
              title: "FRIENDS TOGETHER OUTDOOR FUN FOREVER",
            },
          },
        },
        {
          imgUrl: "j5/m_bg_9_7.webp",
          text: {
            top: {
              title: "BEST PET-FRIENDLY CABIN",
              style: "h9",
            },
            leftBottom: {
              title: "BEST PET-FRIENDLY ACCESSORIES",
            },
          },
        },
        {
          imgUrl: "",
          style: "h96",
          text: {
            leftBottom: {
              title: "PET ECOLOGICAL PRODUCTS",
              desc: "For pets, it's a warmer lifestyle than just pet supplies.",
              style: "h93",
            },
          },
          picture: [
            {
              title: "CAR MODEL CAT SCRATCHER",
              icon: "j5/m_bg_9_6_1.webp",
            },
            {
              title: "RETRACTABLE LED LEASH",
              icon: "j5/m_bg_9_6_2.webp",
            },
            {
              title: "TRUNK PET MAT",
              icon: "j5/m_bg_9_6_3.webp",
            },
            {
              title: "SUBMARINE FRESH AIR CAT CARRIER",
              icon: "j5/m_bg_9_6_4.webp",
            },
            {
              title: "TRUNK BARRIER NET",
              icon: "j5/m_bg_9_6_5.webp",
            },
          ],
        },
      ],
    },
  ],
};

// 第二屏数字动效数据
const moduleCard2 = [
  { label: "Length", num: 4390, txt: "mm" },
  { label: "Width", num: 1860, txt: "mm" },
  { label: "Height", num: 1650, txt: "mm" },
  { label: "Wheelbase", num: 2620, txt: "mm" },
];

const currentPage = ref(1);
let swiperInst;
const toNextSlide = () => {
  swiperInst?.slideNext();
};
const handleCustomEvent = (cur, swiper) => {
  swiperInst = swiper;
  setTimeout(() => {
    currentPage.value = swiper.activeIndex + 1;
  }, 310);
};
</script>

<style lang="scss" scoped>
.config-table-two {
  padding-top: 2rem;
}
</style>
