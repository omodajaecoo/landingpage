<template>
  <div>
    <div class="mob-swiper-container" v-if="!ispc">
      <Swiper
        class="swiper-container"
        :id="modid"
        :modules="[SwiperAutoplay, SwiperPagination, SwiperEffectCreative]"
        :slides-per-view="1"
        :loop="swiperArr.length > 1 ? true : false"
        :nested="true"
        :threshold="8"
        :longSwipes="true"
        :longSwipesRatio="0.25"
        :touchAngle="32"
        :touchMoveStopPropagation="false"
        :passiveListeners="false"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
        @swiper="onFullSwiper"
      >
        <swiperSlide class="slide" v-for="(item, idx) in swiperArr" :key="idx">
          <img
            loading="lazy"
            :src="item.src"
            class="img animate__animated animate__fadeIn"
          />
          <!-- <img loading="lazy" src="/images/mask.webp" class="mask" /> -->
          <div
            class="btn-img"
            :class="current_idx == idx ? 'showbtn' : 'hidebtn'"
          >
            <img
              loading="lazy"
              src="/images/indexP2_titBg.webp"
              class="bgimg"
              v-if="needTitleBg"
            />
            <div
              class="animate__animated animate__fadeInUpBig font-interSemiRegular text-[16px]"
              :class="needTitleBg ? 'txt' : 'txt2'"
              v-if="current_idx == idx"
            >
              {{ item.txt }}
            </div>

            <div class="memo">{{ item.memo || "" }}</div>
          </div>
          <div
            class="car-img"
            v-if="needCarmodel"
            :class="current_idx == idx ? 'showbtn' : 'hidebtn'"
          >
            <img
              loading="lazy"
              src="/images/indexP2_carBg.webp"
              class="bgimg"
            />
            <div class="txt">{{ item.carmodel }}</div>
          </div>
          
        </swiperSlide>
        <img
          class="btn next"
          src="/images/page2_right_arrow.webp"
          alt="next"
          v-if="swiperArr.length > 1"
          @click="changeMobSwiper('next')"
        />
        <img
          class="btn prev"
          src="/images/page2_left_arrow.webp"
          alt="prev"
          v-if="swiperArr.length > 1"
          @click="changeMobSwiper('prev')"
        />
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

interface SwiperItem {
  src: string;
  txt: string;
  memo?: string;
  carmodel?: string;
}

const { isMobile } = useDeviceType();
const ispc: Ref<boolean> = computed((): boolean => {
  return !isMobile.value;
});
var current_idx: Ref<Number> = ref(0);
var current_title: Ref<String> = ref("Stream wading");
const props = defineProps({
  curnum: {
    type: Number,
    default: 0,
  },
  shownum: {
    type: Number,
    default: 0,
  },
  swiperArr: {
    type: Array as () => SwiperItem[],
    default: [],
  },
  needTitleBg: {
    type: Boolean,
    default: true,
  },
  needPagination: {
    type: Boolean,
    default: true,
  },
  needCarmodel: {
    type: Boolean,
    default: true,
  },
  modid: {
    type: String,
    default: "",
  },
});
function changeCur(idx:any) {
  current_idx.value = idx;
  if (idx != 99) {
    current_title.value = props.swiperArr[idx].txt;
  }
}

let myFullSwiper: any = null;
const onFullSwiper = (swiper:any) => {
  myFullSwiper = swiper;
  swiper.on("slideChange", () => {
    current_idx.value = swiper.realIndex;
  });
};
function changeMobSwiper(type:any) {
  let modid = props.modid;
  const swiper = (document.querySelector("#" + modid) as any).swiper;
  if (type == "next") {
    swiper.slideNext();
  } else {
    swiper.slidePrev();
  }
}
</script>

<style scoped>
/**移动端*/
.mob-swiper-container {
  width: 100%;
  height: 100vh;
  position: relative;
  touch-action: pan-y;
}

.mob-swiper-container .swiper-container {
  width: 100%;
  height: 100vh;
  touch-action: pan-y;
}
.mob-swiper-container .btn {
  width: 1rem;
  width: calc(1 * 16 / 3.75 * 1vw);
  height: auto;
  position: absolute;
  z-index: 9;
  bottom: 50%;
  cursor: pointer;
}
.mob-swiper-container .next {
  right: 5%;
}
.mob-swiper-container .prev {
  left: 5%;
}
.mob-swiper-container .slide {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.mob-swiper-container .slide .afterMask {
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
}
.mob-swiper-container .slide .img {
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  object-fit: cover;
  z-index: -1;
}
.mob-swiper-container .slide .btn-img {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 15%;
  min-height: 2rem;
  min-height: calc(2 * 16 / 3.75 * 1vw);
  z-index: 12;
}
.mob-swiper-container .slide .btn-img .bgimg {
  width: 90%;
  height: auto;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.mob-swiper-container .slide .btn-img .txt2 {
  position: absolute;
  top: -0.6rem;
  top: calc(-0.6 * 16 / 3.75 * 1vw);
  left: 10%;
  width: 80%;
  color: #ffffff;
  text-align: center;
  transition: 1s;
}
.mob-swiper-container .slide .btn-img .memo {
  position: absolute;
  width: 90%;
  left: 50%;
  transform: translateX(-50%);
  font-family: "SourceHanSansSC-Bold";
  font-size: 0.9rem;
  font-size: calc(0.9 * 16 / 3.75 * 1vw);
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 1px;
  color: #ffffff;
  padding-top: 0.5rem;
  padding-top: calc(0.5 * 16 / 3.75 * 1vw);
  text-align: left;
}
.mob-swiper-container .slide .car-img {
  width: 50%;
  position: absolute;
  right: 3%;
  top: 10%;
}
.mob-swiper-container .slide .car-img .bgimg {
  width: 90%;
  height: auto;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.mob-swiper-container .slide .car-img .txt {
  position: absolute;
  top: -0.4rem;
  top: calc(-0.4 * 16 / 3.75 * 1vw);
  right: 18%;
  font-family: "SourceHanSansSC-Bold";
  font-size: 1.5rem;
  font-size: calc(1.5 * 16 / 3.75 * 1vw);
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 2px;
  color: #ffffff;
  text-align: right;
}
</style>
