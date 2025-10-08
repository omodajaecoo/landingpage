<template>
  <NuxtLayout name="layout" @custom-event="handleCustomEvent">
    <template #slidesSection>
      <!-- 第一屏 -->
      <SwiperSlide class="section first-page">
        <ModuleItem
          bg-url="/images/j8/banner1.webp"
          mb-bg-url="/images/j8/mb/mb_banner1.webp"
          :show-title="currentPage === 1"
        >
          <div
            class="custom-title animate__animated animate__zoomIn"
            v-if="currentPage === 1"
          >
            OFF-ROAD FIRST CLASS
          </div>
        </ModuleItem>
      </SwiperSlide>
      <!-- 第二屏 -->
      <SwiperSlide class="section second-page">
        <ModuleItem
          bg-url="/images/j8/banner2.jpg"
          mb-bg-url="/images/j8/mb/mb_banner2.jpg"
        >
          <NumberTab size="default !bottom-[1.6rem] lg:!bottom-[0.8rem]" :datas="moduleCard2" :show-title="currentPage === 2" />
          <img
            loading="lazy"
            src="/images/models/page1icon_mob.webp"
            class="mob-icon"
            @click="toNextSlide"
          />
        </ModuleItem>
      </SwiperSlide>
      <SwiperSlide class="section swiper-no-swiping !hidden lg:!block">
        <J8Model class="hidden lg:block z-10" />
      </SwiperSlide>
      <!-- 第三屏 -->
      <SwiperSlide class="section third-page">
        <ModuleItem
          bg-url="/images/j8/banner3.webp"
          bottom-title="BEST CHOICE FOR OFF-ROAD"
          mb-bg-url="/images/j8/mb/mb_banner3.webp"
          :show-title="currentPage === (isMobile ? 3 : 4)"
        />
      </SwiperSlide>
      <!-- 第四屏 -->
      <SwiperSlide class="section fourth-page">
        <SwiperModule :slides="slides4" :showText="currentPage === (isMobile ? 4 : 5)" />
      </SwiperSlide>
      <!-- 第五屏 -->
      <SwiperSlide class="section fiveth-page module5">
        <ModuleItem
          bottom-title="MODERNIST LUXURY DESIGN AESTHETIC"
          :show-title="currentPage === (isMobile ? 5 : 6)"
        >
          <video
            class="video-cont"
            loop
            muted
            playsinline="true"
            x5-playsinline="true"
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            x5-video-player-type="h5"
            x5-video-player-fullscreen="true"
            x5-video-ignore-metadata="true"
          >
            <source src="/videos/j8/video1.mp4" />
          </video>
        </ModuleItem>
      </SwiperSlide>
      <!-- 第 6 屏 -->
      <SwiperSlide class="section sixth-page">
        <SwiperModule
          :slides="slides6"
          :showText="currentPage === (isMobile ? 6 : 7)"
          :card-lower="true"
        />
      </SwiperSlide>
      <!-- 第 7 屏 -->
      <SwiperSlide class="section">
        <ModuleItem
          bg-url="/images/j8/banner7.webp"
          bottom-title="LUXURIOUS DRIVING EXPERIENCE"
          mb-bg-url="/images/j8/mb/mb_banner7.webp"
          :show-title="currentPage === (isMobile ? 7 : 8)"
        />
      </SwiperSlide>
      <!-- 第 8 屏 -->
      <SwiperSlide>
        <SwiperModule :slides="slides8" :showText="currentPage === (isMobile ? 8 : 9)" />
      </SwiperSlide>
      <!-- 第 9 屏 -->
      <SwiperSlide class="section">
        <ModuleItem
          bg-url="/images/j8/banner9.webp"
          mb-bg-url="/images/j8/mb/mb_banner9.webp"
          bottom-title="OFF-ROAD INTELLIGENT SYSTEM"
          :show-title="currentPage === (isMobile ? 9 : 10)"
        />
      </SwiperSlide>
      <!-- 第 10 屏 -->
      <SwiperSlide>
        <SwiperModule :slides="slides10" :showText="currentPage === (isMobile ? 10 : 11)" />
      </SwiperSlide>
      <!-- 第 11 屏 -->
      <SwiperSlide>
        <ModuleItem
          bg-url="/images/j8/banner11.webp"
          mb-bg-url="/images/j8/mb/mb_banner11.webp"
          bottom-title="More than just a car, but a lifestyle"
          :show-title="currentPage === (isMobile ? 11 : 12)"
        />
      </SwiperSlide>
      <!-- 第 12 屏 -->
      <SwiperSlide>
        <SwiperModule
          :slides="slides12"
          :showText="currentPage === (isMobile ? 12 : 13)"
          :card-bottom="-6.25"
        />
      </SwiperSlide>
      <!-- 第 13 屏 -->
      <SwiperSlide class="module11">
        <ModuleItem
          bottom-title="Ultra Off-Road Safety"
          :show-title="currentPage === (isMobile ? 13 : 14)"
        >
          <video
            class="video-cont"
            loop
            muted
            playsinline="true"
            x5-playsinline="true"
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            x5-video-player-type="h5"
            x5-video-player-fullscreen="true"
            x5-video-ignore-metadata="true"
          >
            <source src="/videos/j8/video2.mp4" />
          </video>
        </ModuleItem>
      </SwiperSlide>
      <!-- 第 14 屏 -->
      <SwiperSlide>
        <SwiperModule :slides="slides14" :showText="currentPage === (isMobile ? 14 : 15)" />
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
            <div class="min-h-[100vh] flex flex-col">
              <ClientOnly fallback-tag="span" fallback="Loading comments...">
                <ConfigTable
                  class="flex-1 config-table"
                  data-url="excels/j8.xlsx"
                />
              </ClientOnly>
              <LayoutsFooter />
            </div>
          </SwiperSlide>
        </Swiper>
      </SwiperSlide>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { onMounted, nextTick, watch } from "vue";
import J8Model from './J8Model.vue';

const { isMobile } = useDeviceType();
const ispc = computed(() => {
  return !isMobile.value;
});
let swiperInst;

const currentPage = ref(1);

watch(
  () => currentPage.value,
  (val) => {
    if (val === 5 || val === 11) {
      handleVideoModule(val);
    }
  }
);

// 第二屏数字动效数据
const moduleCard2 = [
  { label: "POWER", num: 183, txt: "kW" },
  { label: "TORQUE", num: 385, txt: "N·m" },
];

// 第四屏 slides
const slides4 = [
  {
    name: "All-Road Drive Intelligent System",
    url: "/images/j8/banner4_1.webp",
    mbUrl: "/images/j8/mb/mb_banner4_1.webp",
  },
  {
    name: "Making Escape Easier",
    url: "/images/j8/banner4_2.webp",
    mbUrl: "/images/j8/mb/mb_banner4_2.webp",
  },
  {
    name: "Torque Vectoring Four-Wheel Driving System",
    url: "/images/j8/banner4_3.webp",
    mbUrl: "/images/j8/mb/mb_banner4_3.webp",
  },
  {
    name: "2.0TGDI Engine",
    url: "/images/j8/banner4_4.webp",
    mbUrl: "/images/j8/mb/mb_banner4_4.webp",
    numList: [
      {
        num: 183,
        txt: "kW",
        label: "POWER",
      },
      {
        num: 385,
        txt: "N·m",
        label: "TORQUE",
      },
    ],
  },
];

// 第六屏
const slides6 = [
  {
    name: "",
    url: "/images/j8/banner6_1.webp",
    mbUrl: "/images/j8/mb/mb_banner6_1.webp",
    numList: [
      { num: 4820, txt: "mm", label: "Length" },
      { num: 1930, txt: "mm", label: "Width" },
      { num: 1710, txt: "mm", label: "Height" },
      { num: 2820, txt: "mm", label: "Wheelbase" },
    ],
  },
  {
    name: "Detail of Modernist Luxury Design",
    url: "/images/j8/banner6_2.png",
    mbUrl: "/images/j8/mb/mb_banner6_2.webp",
  },
  {
    name: "Large Size, Super Spacious",
    url: "/images/j8/banner6_3.jpg",
    mbUrl: "/images/j8/mb/mb_banner6_3.webp",
  },
  {
    name: "Modernist Luxury Cabin Design",
    url: "/images/j8/banner6_4.jpg",
    mbUrl: "/images/j8/mb/mb_banner6_4.webp",
  },
  {
    name: "Spacious Luxury Rear Space",
    url: "/images/j8/banner6_5.jpg",
    mbUrl: "/images/j8/mb/mb_banner6_5.webp",
  },
  {
    name: "Wide View, Broad Vision",
    url: "/images/j8/banner6_6.jpg",
    mbUrl: "/images/j8/mb/mb_banner6_6.webp",
  },
];

// 第 8 屏
const slides8 = [
  {
    name: "CDC Active Suspension",
    url: "/images/j8/banner8_1.webp",
    mbUrl: "/images/j8/mb/mb_banner8_1.webp",
  },
  {
    name: "Zero-Gravity Seat",
    videoUrl: "/videos/j8/video3.mp4",
    mbVideoUrl: "/videos/j8/video3.mp4",
  },
  {
    name: "Zero-Gravity Seat",
    url: "/images/j8/banner8_3.webp",
    mbUrl: "/images/j8/mb/mb_banner8_3.webp",
  },
  {
    name: "Premium Headrest Speaker",
    url: "/images/j8/banner8_4.webp",
    mbUrl: "/images/j8/mb/mb_banner8_4.webp",
  },
  {
    name: "Luxury Ultra-Wide Armrest",
    url: "/images/j8/banner8_5.webp",
    mbUrl: "/images/j8/mb/mb_banner8_5.webp",
  },
  {
    name: "Crystal Gear Shift Knob",
    url: "/images/j8/banner8_6.webp",
    mbUrl: "/images/j8/mb/mb_banner8_6.webp",
  },
  {
    name: "All Seats Covered in Nappa Leather",
    url: "/images/j8/banner8_7.webp",
    mbUrl: "/images/j8/mb/mb_banner8_7.webp",
  },
  // {
  // 	name: '空调舒适',
  // 	url: '/images/j8/banner8_8.webp',
  // 	mbUrl: '/images/j8/mb/mb_banner8_8.webp',
  // },
];
// 第 10 屏
const slides10 = [
  {
    name: "540° Panoramic Imaging",
    url: "/images/j8/banner10_1.webp",
    mbUrl: "/images/j8/mb/mb_banner10_1.webp",
  },
  {
    name: "50-Inch AR-HUD",
    url: "/images/j8/banner10_2.webp",
    mbUrl: "/images/j8/mb/mb_banner10_2.webp",
  },
  {
    name: "25 Air Conditioning Vents",
    url: "/images/j8/banner10_3.webp",
    mbUrl: "/images/j8/mb/mb_banner10_3.webp",
  },
];
// 第 12 屏
const slides12 = [
  {
    name: "",
    url: "/images/j8/banner12_1.webp",
    mbUrl: "/images/j8/mb/mb_banner12_1.webp",
    numList: [
      { num: 738, txt: "L", label: "Trunk Capacity" },
      { num: 2021, txt: "L", label: "Expandable Trunk Capacity" },
    ],
    largeFlag: true,
  },
  {
    name: "Go Kayaking",
    url: "/images/j8/banner12_2.webp",
    mbUrl: "/images/j8/mb/mb_banner12_2.webp",
  },
  {
    name: "Go Surfing",
    url: "/images/j8/banner12_3.webp",
    mbUrl: "/images/j8/mb/mb_banner12_3.webp",
  },
  {
    name: "Go Rock Climbing",
    url: "/images/j8/banner12_4.webp",
    mbUrl: "/images/j8/mb/mb_banner12_4.webp",
  },
  {
    name: "Go Skiing",
    url: "/images/j8/banner12_5.webp",
    mbUrl: "/images/j8/mb/mb_banner12_5.webp",
  },
];
// 第 14 屏
const slides14 = [
  {
    name: "26000 N·m/deg Ultra-Strong Body Rigidity",
    url: "/images/j8/banner14_1.webp",
    mbUrl: "/images/j8/mb/mb_banner14_1.webp",
  },
  {
    name: "Best-in-Class 10 Airbags",
    url: "/images/j8/banner14_2.webp",
    mbUrl: "/images/j8/mb/mb_banner14_2.webp",
  },
  {
    name: "Best-in-Class 19 ADAS Features",
    url: "/images/j8/banner14_3.webp",
    mbUrl: "/images/j8/mb/mb_banner14_3.webp",
  },
];

const toNextSlide = () => {
  swiperInst?.slideNext();
};

const handleCustomEvent = (cur, swiper) => {
  swiperInst = swiper;
  setTimeout(() => {
    currentPage.value = swiper.activeIndex + 1;
  }, 310);
};

const handleVideoModule = (moduleNum: number) => {
  const WrapEl = document.querySelector(`.module${moduleNum}`);
  const videoEl = WrapEl?.querySelector("video");
  if (videoEl) {
    if (ispc.value) {
      videoEl.paused && videoEl.play();
    } else {
      document.addEventListener(
        "WeixinTSBridgeReady",
        function (params) {
          videoEl.play();
        },
        false
      );
      document.addEventListener("touchstart", function (params) {
        videoEl.play();
      });
    }
  }
};

onMounted(() => {
  // handleCustomEvent(1);
});
</script>

<style lang="scss" scoped>
.first-page {
  .custom-title {
    font-size: 2.5vw;
    position: absolute;
    color: #fff;
    left: 4.6354vw;
    bottom: 8.4896vw;
    z-index: 20;
  }
}

@media screen and (max-width: 1023px) {
  .first-page {
    .custom-title {
      font-size: 5.3333vw;
      position: absolute;
      width: 100%;
      left: 0px;
      bottom: 20.2667vw;
      text-align: center;
    }
  }
}

.video-cont {
  width: 100%;
  height: 100%;
  position: inherit;
  z-index: 10;
}

.mob-icon {
  display: none;
}

@media screen and (max-width: 1024px) {
  .number-card-wrap {
    bottom: 37.6vw;
  }
  .mob-icon {
    display: block;
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
    z-index: 100;
  }

  @keyframes move {
    0% {
      bottom: 10.2667vw;
    }

    50% {
      bottom: 8vw;
    }

    100% {
      bottom: 10.2667vw;
    }
  }
}
</style>
