<template>
  <div class="horizontal-wrap" :class="style">
    <div
      v-if="text.top?.title"
      class="horizontal-title"
      v-html="text.top?.title"
      v-animate="{
        effect: 'fadeInUp',
        once: true,
      }"
    ></div>
    <div
      v-if="text.top?.desc"
      class="horizontal-desc"
      v-html="text.top?.desc"
      v-animate="{
        effect: 'fadeInUp',
        once: true,
      }"
      style="animation-delay: 0.3s"
    ></div>
    <div class="horizontal-swiper">
      <Swiper
        class="inner-swiper"
        :class="style"
        :modules="[SwiperPagination, SwiperEffectCreative]"
        :loop="true"
        @swiper="handleSwiper"
        @slideChange="handleSwiperChange"
      >
        <SwiperSlide
          v-for="(page, idx) in slide"
          :key="idx"
          style="background-color: #000"
        >
          <FullBox
            :ispc="ispc"
            :imgUrl="page.imgUrl"
            :videoUrl="page.videoUrl"
            :style="page.style"
          />
        </SwiperSlide>
      </Swiper>
      <div class="horizontal-pagination">
        <div
          v-if="ispc"
          class="horizontal-pagination-row"
          v-animate="{
            effect: 'fadeInUp',
            once: true,
          }"
        >
          <template v-if="slide.length < 4">
            <div
              v-for="(page, idx) in slide"
              :key="idx"
              class="horizontal-pagination-title"
              :class="{ active: idx === currentIdx, small: slide.length > 4 }"
              v-html="page?.text?.bottom?.title"
              @click="handlePageChange(idx)"
            ></div>
          </template>
          <Swiper
            v-else
            class="title-swiper"
            :slidesPerView="3"
            :centeredSlides="true"
            :centeredSlidesBounds="true"
            :slideToClickedSlide="true"
            @swiper="handleTextSwiper"
          >
            <SwiperSlide v-for="(page, idx) in slide" :key="idx">
              <div
                :class="{ active: idx === currentIdx }"
                class="horizontal-pagination-title"
                v-html="page?.text?.bottom?.title"
                @click="handlePageChange(idx)"
              ></div>
            </SwiperSlide>
          </Swiper>
        </div>
        <template v-else>
          <template v-for="(page, idx) in slide" :key="idx">
            <div
              v-if="idx === currentIdx"
              class="horizontal-pagination-title"
              v-animate="{
                effect: 'fadeInUp',
                once: true,
              }"
              v-html="page?.text?.bottom?.title"
            ></div>
          </template>
        </template>
        <template v-for="(page, idx) in slide" :key="idx">
          <div
            v-if="idx === currentIdx"
            class="horizontal-pagination-desc"
            v-animate="{
              effect: 'fadeInUp',
              once: true,
            }"
            v-html="page?.text?.bottom?.desc"
          ></div>
        </template>
      </div>
      <template v-if="slide?.[0]?.style !== 'h6'">
        <img
          loading="lazy"
          class="btn prev"
          src="/images/j7shs/arrow_left.webp"
          alt="prev"
          v-if="slide.length > 1"
          @click="handleChange('prev')" />
        <img
          loading="lazy"
          class="btn next"
          src="/images/j7shs/arrow_right.webp"
          alt="next"
          v-if="slide.length > 1"
          @click="handleChange('next')"
      /></template>
      <div
        v-else-if="slide?.[0]?.style === 'h6'"
        class="h6-pagination select-none"
        :class="slide?.[0]?.style || ''"
      >
        <ShsSwiperPagination
          :active-index="currentIdx"
          :length="slide.length"
          @change="handlePageChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface BoxItemData {
  title?: string;
  desc?: string;
  style?: string;
  icon?: string;
}
interface BoxData {
  imgUrl?: string;
  style?: string;
  videoUrl?: string;
  text?: {
    top?: BoxItemData;
    bottom?: BoxItemData;
    leftTop?: BoxItemData;
    rightTop?: BoxItemData;
    leftBottom?: BoxItemData;
    rightBottom?: BoxItemData;
  };
}

const props = withDefaults(
  defineProps<{
    ispc: boolean;
    style?: string;
    slide: BoxData[];
    text?: {
      top?: BoxItemData;
      bottom?: BoxItemData;
      leftTop?: BoxItemData;
      rightTop?: BoxItemData;
      leftBottom?: BoxItemData;
      rightBottom?: BoxItemData;
    };
  }>(),
  {
    ispc: true,
    slide: () => [],
    text: () => ({}),
  }
);

let pageSwiper: any;
const currentIdx = ref(0);
const handleSwiper = (swiper) => {
  pageSwiper = swiper;
};
const handleChange = (type: string) => {
  if (type == "next") {
    pageSwiper.slideNext();
  } else {
    pageSwiper.slidePrev();
  }
};
const handlePageChange = (index) => {
  pageSwiper.slideToLoop(index);
};
const handleSwiperChange = (swiper) => {
  textSwiper?.slideTo?.(swiper.realIndex);
  currentIdx.value = swiper.realIndex;
  const curSlide = swiper.slides[swiper.realIndex];
  const videoEl = curSlide.querySelector("video");
  if (videoEl) {
    if (props.ispc) {
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
let textSwiper: any;
const handleTextSwiper = (swiper) => {
  textSwiper = swiper;
};
</script>

<style lang="scss" scoped>
.horizontal-wrap {
  position: relative;
  z-index: 1;
  padding: calc(140 / 1920 * 100vw) 0 calc(140 / 1920 * 100vw);
  background: #fff;
  color: #222;

  &.p7 {
    background: #f8f8f8;
  }

  .inner-swiper {
    width: calc(1494 / 1920 * 100vw);
    height: calc(840 / 1920 * 100vw);
    margin: 0 auto;

    :deep(.box-box) {
      height: calc(840 / 1920 * 100vw);
    }
  }
  .btn {
    position: absolute;
    top: calc(380 / 1920 * 100vw);
    z-index: 1;
    cursor: pointer;
  }
  .btn.prev {
    left: calc(84 / 1920 * 100vw);
  }
  .btn.next {
    right: calc(84 / 1920 * 100vw);
  }
}
.horizontal-title {
  font-size: calc(70 / 1920 * 100vw);
  line-height: calc(99 / 1920 * 100vw);
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
}
.horizontal-desc {
  margin-top: calc(32 / 1920 * 100vw);
  font-size: calc(22 / 1920 * 100vw);
  line-height: calc(30 / 1920 * 100vw);
  color: #666;
  text-align: center;
}
.horizontal-swiper {
  position: relative;
  margin-top: calc(140 / 1920 * 100vw);
}
.horizontal-pagination {
  width: calc(1494 / 1920 * 100vw);
  margin: calc(60 / 1920 * 100vw) auto 0;
}
.horizontal-pagination-row {
  display: flex;
  gap: calc(60 / 1920 * 100vw);
}
.horizontal-pagination-title {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-shrink: 0;
  color: #999;
  height: calc(56 / 1920 * 100vw);
  margin-bottom: calc(24 / 1920 * 100vw);
  text-align: center;
  font-size: calc(24 / 1920 * 100vw);
  line-height: calc(28 / 1920 * 100vw);
  font-weight: 700;
  text-transform: uppercase;
  transition: all 0.5s;
  cursor: pointer;
  white-space: nowrap;
  white-space: pre-line;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: calc(-24 / 1920 * 100vw);
    width: 0;
    height: calc(3 / 1920 * 100vw);
    transform: translateX(-50%);
    background: #67b0c4;
    transition: width 0.5s;
  }

  &.active,
  &:hover {
    color: #222;
    /* font-weight: 900; */
    &::after {
      width: calc(300 / 1920 * 100vw);
    }
  }

  &.small.active,
  &.small:hover {
    &::after {
      width: calc(150 / 1920 * 100vw);
    }
  }
}
.horizontal-pagination-desc {
  text-align: center;
  margin-top: calc(32 / 1920 * 100vw);
  font-size: calc(18 / 1920 * 100vw);
  line-height: calc(32 / 1920 * 100vw);
  /* text-transform: capitalize; */
}
.h6-pagination {
  position: absolute;
  z-index: 1;
  bottom: calc(120 / 1125 * 100vw);
  left: calc(120 / 1125 * 100vw);
  width: 80%;
}
@media screen and (max-width: 1023px) {
  .horizontal-wrap {
    padding: calc(100 * 1.5 / 1125 * 100vw) 0 calc(140 * 1.5 / 1125 * 100vw);
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: calc(32 / 750 * 100vw);
      right: calc(32 / 750 * 100vw);
      height: 1px;
      background: rgba(0, 0, 0, 0.1);
    }

    .inner-swiper {
      width: 100vw;
      height: 100vw;
      margin: 0 auto;

      :deep(.box-box) {
        height: 100vw;
      }

      &.h9 {
        height: calc(422 / 750 * 100vw);
        :deep(.box-box) {
          height: calc(422 / 750 * 100vw);
        }
      }
    }

    .btn {
      position: absolute;
      /* bottom: calc(272 / 1125 * 100vw); */
      top: calc((112 * 1.5 / 1125 * 100vw) + 100vw);
      width: calc(96 / 1125 * 100vw);
      height: calc(96 / 1125 * 100vw);
      user-select: none;
    }
    .btn.prev {
      left: calc(48 / 1125 * 100vw);
    }
    .btn.next {
      right: calc(48 / 1125 * 100vw);
    }

    &.h9 {
      .btn {
        top: calc((112 + 422) / 750 * 100vw);
      }
    }
  }
  .horizontal-title {
    font-size: calc(48 * 1.5 / 1125 * 100vw);
    line-height: calc(68 * 1.5 / 1125 * 100vw);
  }
  .horizontal-desc {
    padding: 0 calc(60 * 1.5 / 1125 * 100vw);
    margin-top: calc(16 * 1.5 / 1125 * 100vw);
    font-size: calc(24 * 1.5 / 1125 * 100vw);
    line-height: calc(40 * 1.5 / 1125 * 100vw);
    color: rgba(51, 51, 51, 0.5);
  }
  .horizontal-swiper {
    margin-top: calc(64 * 1.5 / 1125 * 100vw);
  }
  .horizontal-pagination {
    width: 100vw;
    margin: calc(112 * 1.5 / 1125 * 100vw) auto 0;
  }
  .horizontal-pagination-title {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(64 * 1.5 / 1125 * 100vw);
    padding: 0 calc(120 * 1.5 / 1125 * 100vw);
    font-size: calc(32 * 1.5 / 1125 * 100vw);
    line-height: calc(42 * 1.5 / 1125 * 100vw);
    font-weight: 900;
    color: #222;
  }
  .horizontal-pagination-desc {
    min-height: calc(32 * 3 * 1.5 / 1125 * 100vw);
    padding: 0 calc(40 * 1.5 / 1125 * 100vw);
    margin-top: calc(24 * 1.5 / 1125 * 100vw);
    font-size: calc(24 * 1.5 / 1125 * 100vw);
    line-height: calc(32 * 1.5 / 1125 * 100vw);
    color: #222;
  }
}
</style>
