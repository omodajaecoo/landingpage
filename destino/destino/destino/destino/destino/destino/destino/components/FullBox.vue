<template>
  <div class="box-box" :class="style">
    <img
      v-if="style === 'p1' || style === 'h1'"
      :src="`/images/${imgUrl}`"
      class="w-full h-full object-cover select-none box-img"
      loading="lazy"
      v-animate="{
        effect: 'zoomInCenter',
        immediate: true,
      }"
    />
    <video
      v-else-if="videoUrl"
      class="w-full h-full"
      loop
      muted
      autoplay
      :poster="imgUrl"
      playsinline="true"
      x5-playsinline="true"
      webkit-playsinline="true"
      x-webkit-airplay="allow"
      x5-video-player-type="h5"
      x5-video-player-fullscreen="true"
      x5-video-ignore-metadata="true"
    >
      <source :src="`/images/${videoUrl}`" />
    </video>
    <img
      v-else-if="imgUrl"
      :src="`/images/${imgUrl}`"
      class="w-full h-full object-cover select-none"
      loading="lazy"
    />
    <template v-for="([key, val], index) in Object.entries(text)">
      <div :class="['box-' + key, val.style || '']">
        <div
          v-if="val.icon"
          :class="`box-${key}-title`"
          class="box-title"
          v-animate="{
            effect: 'fadeInUp',
            once: true,
          }"
        >
          <img
            :src="`/images/${val.icon}`"
            :class="`box-${key}-icon`"
            class="box-icon"
            loading="lazy"
          />{{ val.title }}
        </div>
        <div
          v-else-if="val.title"
          :class="`box-${key}-title`"
          class="box-title"
          v-html="val.title"
          v-animate="{
            effect: 'fadeInUp',
            once: true,
          }"
        ></div>
        <div
          v-if="val.desc"
          :class="`box-${key}-desc`"
          class="box-desc"
          v-html="val.desc"
          v-animate="{
            effect: 'fadeInUp',
            once: true,
          }"
          style="animation-delay: 0.3s"
        ></div>
        <div
          v-if="key === 'rightBottom' && val.style === 'p85'"
          :class="`box-${key}-title`"
          class="box-title"
          v-animate="{
            effect: 'fadeInUp',
            once: true,
          }"
        >
          <div class="p854">
            <div class="p855">
              <div class="p8551">
                <vue-count-to
                  v-if="isShow"
                  :end="480"
                  :autoPlay="true"
                  :duration="1500"
                />L
              </div>
              <div class="p8552">Standard trunk space</div>
            </div>
            <div class="p856">
              <div class="p8551">
                <vue-count-to
                  v-if="isShow"
                  :end="1180"
                  :autoPlay="true"
                  :duration="1500"
                />L
              </div>
              <div class="p8552">Expanded trunk space</div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <ShsPicture
      v-if="picture && picture.length > 0"
      :ispc="ispc"
      :pictureList="picture"
    />
    <div
      v-if="countList"
      class="box-box-count"
      v-animate="{
        effect: 'fadeInUp',
        once: true,
      }"
    >
      <div
        v-for="(item, index) in countList"
        :key="index"
        class="box-box-count-item"
      >
        <template v-if="style === 'p1' || style === 'h1'">
          <div class="box-box-count-text">
            <vue-count-to
              class="num"
              :end="parseInt(item[1])"
              :autoPlay="true"
              :duration="1500"
            />{{ item[2] }}
          </div>
          <div class="box-box-count-text" v-html="item[0]"></div>
        </template>
        <template v-else>
          <div
            v-for="(txt, idx) in item"
            :key="idx"
            class="box-box-count-text"
            v-html="txt"
          ></div>
        </template>
      </div>
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
interface BoxItemData {
  title?: string;
  desc?: string;
  style?: string;
  icon?: string;
}
interface PageData {
  ispc: boolean;
  imgUrl: string;
  videoUrl?: string;
  style?: string;
  text?: {
    top?: BoxItemData;
    leftTop?: BoxItemData;
    rightTop?: BoxItemData;
    leftBottom?: BoxItemData;
    rightBottom?: BoxItemData;
  };
  picture?: BoxItemData[];
  isShow?: boolean;
  countList?: string[][];
}

const props = withDefaults(defineProps<PageData>(), {
  ispc: true,
  imgUrl: "",
  videoUrl: "",
  style: "",
  isShow: false,
  text: () => ({}),
  picture: () => [],
});

const activeIndex3 = ref(0);
let page3SwiperInst;

const handlePage3Swiper = (swiper) => (page3SwiperInst = swiper);
const handlePage3SlideChange = () => {
  activeIndex3.value = page3SwiperInst?.realIndex || 0;
};
const handlePage3Change = (index) => {
  page3SwiperInst.slideToLoop(index);
};
</script>

<style lang="scss">
.object-cover {
  object-fit: cover;
}
.select-none {
  user-select: none;
}
</style>
<style lang="scss" scoped>
.box-box {
  position: relative;
  font-family: "MiSans";
  height: 100vh;
  overflow: hidden;
  color: #fff;

  &.p1 {
    /* .box-img {
      object-position: 50% 0;
    } */
  }

  &.h9 {
    height: 100%;
  }

  .box {
    &-icon {
      display: inline-flex;
    }
    &-title {
      font-size: calc(50 / 1920 * 100vw);
      line-height: calc(66 / 1920 * 100vw);
      font-weight: 380;
    }
    &-desc {
      margin-top: calc(18 / 1920 * 100vw);
      font-size: calc(30 / 1920 * 100vw);
      line-height: calc(40 / 1920 * 100vw);
      font-weight: 250;
    }
  }
  .box-top,
  .box-bottom,
  .box-leftTop,
  .box-leftBottom,
  .box-rightTop,
  .box-rightBottom {
    position: absolute;
    width: 80vw;
  }
  .box-top,
  .box-leftTop,
  .box-rightTop {
    top: calc(100 / 1920 * 100vw);
  }
  .box-bottom,
  .box-leftBottom,
  .box-rightBottom {
    bottom: calc(100 / 1920 * 100vw);
  }
  .box-rightTop,
  .box-rightBottom {
    right: calc(100 / 1920 * 100vw);
    text-align: right;
  }
  .box-leftTop,
  .box-leftBottom {
    left: calc(100 / 1920 * 100vw);
  }
  .box-top,
  .box-bottom {
    text-align: center;
    left: 50%;
    margin-left: -40vw;
  }
  .box-top {
    &.p1 {
      top: calc(188 / 1920 * 100vw);
      .box-top {
        &-icon {
          width: calc(368 / 1920 * 100vw);
        }
      }
    }
    &.j7p1 {
      top: calc(188 / 1920 * 100vw);
      .box-top {
        &-icon {
          width: calc(476 / 1920 * 100vw);
        }
      }
    }
  }
  .box-leftBottom {
    &.p1 {
      .box-leftBottom {
        &-icon {
          width: calc(158 / 1920 * 100vw);
          margin-right: calc(36 / 1920 * 100vw);
        }
        &-title {
          font-size: calc(36 / 1920 * 100vw);
          line-height: calc(48 / 1920 * 100vw);
        }
      }
    }
    &.p3 {
      .box-leftBottom {
        &-desc {
          margin-top: calc(12 / 1920 * 100vw);
          font-size: calc(20 / 1920 * 100vw);
          line-height: calc(28 / 1920 * 100vw);
        }
      }
    }
    &.p34 {
      .box-leftBottom {
        &-icon {
          display: block;
          width: calc(131 / 1920 * 100vw);
          margin-bottom: calc(32 / 1920 * 100vw);
        }

        &-title {
          animation-delay: 0.3s;
        }

        &-desc {
          animation-delay: 0.6s !important;
        }
      }
    }
    &.p36 {
      bottom: calc(70 / 1920 * 100vw);
      :deep(.p361) {
        font-size: calc(54 / 1920 * 100vw);
        line-height: calc(72 / 1920 * 100vw);
      }
      :deep(.p362) {
        margin-top: calc(16 / 1920 * 100vw);
        font-size: calc(70 / 1920 * 100vw);
        line-height: calc(93 / 1920 * 100vw);
      }
      :deep(.p363) {
        margin-top: 0;
        font-size: calc(30 / 1920 * 100vw);
        line-height: calc(40 / 1920 * 100vw);
        font-weight: 250;
      }
      :deep(.p364) {
        margin-top: calc(30 / 1920 * 100vw);
        font-size: calc(64 / 1920 * 100vw);
        line-height: calc(84 / 1920 * 100vw);
      }
    }
    &.p37 {
      :deep(.p371) {
        font-size: calc(30 / 1920 * 100vw);
        line-height: calc(42 / 1920 * 100vw);
        font-weight: 305;
      }
      :deep(.p372) {
        margin-top: calc(10 / 1920 * 100vw);
        font-size: calc(20 / 1920 * 100vw);
        line-height: calc(27 / 1920 * 100vw);
        font-weight: 250;
      }
      :deep(.p373) {
        margin-top: calc(58 / 1920 * 100vw);
        font-size: calc(30 / 1920 * 100vw);
        line-height: calc(42 / 1920 * 100vw);
        font-weight: 305;
      }
      :deep(.p374) {
        margin-top: calc(16 / 1920 * 100vw);
        font-size: calc(20 / 1920 * 100vw);
        line-height: calc(27 / 1920 * 100vw);
        font-weight: 250;
      }
    }
    &.p85 {
      :deep(.p851) {
        font-size: calc(20 / 1920 * 100vw);
        line-height: calc(28 / 1920 * 100vw);
      }
      :deep(.p852) {
        margin-top: calc(8 / 1920 * 100vw);
        font-size: calc(50 / 1920 * 100vw);
        line-height: calc(66 / 1920 * 100vw);
      }
      :deep(.p853) {
        margin-top: calc(12 / 1920 * 100vw);
        font-size: calc(20 / 1920 * 100vw);
        line-height: calc(28 / 1920 * 100vw);
        font-weight: 250;
      }
    }
    &.p86 {
      :deep(.p861) {
        font-size: calc(20 / 1920 * 100vw);
        line-height: calc(28 / 1920 * 100vw);
      }
      :deep(.p862) {
        margin-top: calc(8 / 1920 * 100vw);
        font-size: calc(50 / 1920 * 100vw);
        line-height: calc(66 / 1920 * 100vw);
      }
      :deep(.p863) {
        margin-top: calc(12 / 1920 * 100vw);
        font-size: calc(20 / 1920 * 100vw);
        line-height: calc(28 / 1920 * 100vw);
        font-weight: 250;
      }
    }
    &.p91 {
      .box-leftBottom {
        &-title {
          font-weight: 630;
        }
      }
    }
    &.p92 {
      :deep(.p924) {
        font-size: calc(20 / 1920 * 100vw);
        line-height: calc(28 / 1920 * 100vw);
        color: rgba(#fff, 0.8);
        font-weight: 305;
      }
    }
    &.p93 {
      :deep(.p931) {
        font-size: calc(30 / 1920 * 100vw);
        line-height: calc(40 / 1920 * 100vw);
        font-weight: 305;
      }
      :deep(.p932) {
        margin-top: calc(12 / 1920 * 100vw);
        font-size: calc(50 / 1920 * 100vw);
        line-height: calc(66 / 1920 * 100vw);
        font-weight: 630;
      }
      :deep(.p933) {
        margin-top: calc(12 / 1920 * 100vw);
        font-size: calc(20 / 1920 * 100vw);
        line-height: calc(28 / 1920 * 100vw);
        font-weight: 305;
      }
    }
    &.p96 {
      :deep(.p961) {
        font-size: calc(30 / 1920 * 100vw);
        line-height: calc(40 / 1920 * 100vw);
        font-weight: 305;
      }
      :deep(.p962) {
        margin-top: calc(12 / 1920 * 100vw);
        font-size: calc(50 / 1920 * 100vw);
        line-height: calc(66 / 1920 * 100vw);
        font-weight: 630;
      }
    }
  }
  .box-rightBottom {
    &.p85 {
      width: calc(1720 / 1920 * 100vw);
      :deep(.p854) {
        display: flex;
        padding-left: calc(640 / 1920 * 100vw);
      }
      :deep(.p855),
      :deep(.p856) {
        text-align: center;
      }
      :deep(.p855) {
        padding-right: calc(46 / 1920 * 100vw);
        border-right: 1px solid #fff;
      }
      :deep(.p856) {
        padding-left: calc(46 / 1920 * 100vw);
      }
      :deep(.p8551) {
        font-size: calc(48 / 1920 * 100vw);
        line-height: calc(64 / 1920 * 100vw);
      }
      :deep(.p8552) {
        font-size: calc(16 / 1920 * 100vw);
        line-height: calc(22 / 1920 * 100vw);
        font-weight: 250;
      }
    }
    &.p92 {
      display: flex;
      justify-content: end;
      right: calc(110 / 1920 * 100vw);
      bottom: calc(110 / 1920 * 100vw);
      .box-rightBottom {
        &-icon {
          display: block;
          width: calc(110 / 1920 * 100vw);
        }
      }
    }
  }
  .box-leftTop {
    &.p32 {
      :deep(.p321) {
        font-size: calc(20 / 1920 * 100vw);
        line-height: calc(28 / 1920 * 100vw);
        font-weight: 250;
      }
      :deep(.p322) {
        margin-top: calc(12 / 1920 * 100vw);
        font-size: calc(30 / 1920 * 100vw);
        line-height: calc(42 / 1920 * 100vw);
        font-weight: 305;
      }
      :deep(.p323) {
        margin-top: calc(50 / 1920 * 100vw);
        font-size: calc(20 / 1920 * 100vw);
        line-height: calc(28 / 1920 * 100vw);
        font-weight: 250;
      }
      :deep(.p324) {
        margin-top: calc(6 / 1920 * 100vw);
        font-size: calc(30 / 1920 * 100vw);
        line-height: calc(42 / 1920 * 100vw);
        font-weight: 305;
      }
    }
    &.p34 {
      :deep(.p341) {
        font-size: calc(50 / 1920 * 100vw);
        line-height: calc(66 / 1920 * 100vw);
      }
      :deep(.p342) {
        margin-top: calc(8 / 1920 * 100vw);
        font-size: calc(20 / 1920 * 100vw);
        line-height: calc(28 / 1920 * 100vw);
        font-weight: 250;
      }
      :deep(.p343) {
        margin-top: calc(48 / 1920 * 100vw);
        font-size: calc(50 / 1920 * 100vw);
        line-height: calc(66 / 1920 * 100vw);
      }
      :deep(.p344) {
        margin-top: calc(8 / 1920 * 100vw);
        font-size: calc(20 / 1920 * 100vw);
        line-height: calc(28 / 1920 * 100vw);
        font-weight: 250;
      }
    }
    &.p92 {
      :deep(.p921) {
        font-size: calc(30 / 1920 * 100vw);
        line-height: calc(40 / 1920 * 100vw);
        font-weight: 305;
      }
      :deep(.p922) {
        margin-top: calc(12 / 1920 * 100vw);
        font-size: calc(50 / 1920 * 100vw);
        line-height: calc(66 / 1920 * 100vw);
        font-weight: 630;
      }
      :deep(.p923) {
        margin-top: calc(12 / 1920 * 100vw);
        font-size: calc(20 / 1920 * 100vw);
        line-height: calc(28 / 1920 * 100vw);
        font-weight: 305;
      }
    }
  }
  .box-rightTop {
    &.p35 {
      top: calc(120 / 1920 * 100vw);
      :deep(.p351) {
        font-size: calc(64 / 1920 * 100vw);
        line-height: calc(85 / 1920 * 100vw);
      }
      :deep(.p352) {
        margin-top: calc(8 / 1920 * 100vw);
        font-size: calc(30 / 1920 * 100vw);
        line-height: calc(40 / 1920 * 100vw);
        font-weight: 250;
      }
      :deep(.p353) {
        margin-top: calc(48 / 1920 * 100vw);
        font-size: calc(64 / 1920 * 100vw);
        line-height: calc(85 / 1920 * 100vw);
      }
      :deep(.p354) {
        margin-top: calc(8 / 1920 * 100vw);
        font-size: calc(30 / 1920 * 100vw);
        line-height: calc(40 / 1920 * 100vw);
        font-weight: 250;
      }
    }
  }

  &-count {
    position: absolute;
    /* top: 50%;
    margin-top: calc(-136 / 2 / 1920 * 100vw); */
    bottom: calc(50 / 1920 * 100vw);
    left: 50%;
    display: flex;
    width: calc(1474 / 1920 * 100vw);
    height: calc(136 / 1920 * 100vw);
    gap: calc(200 / 1920 * 100vw);
    margin-left: calc(-1474 / 2 / 1920 * 100vw);

    &-item {
      position: relative;
      min-width: calc(314 / 1920 * 100vw);
      flex-shrink: 0;
      height: calc(136 / 1920 * 100vw);

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: calc(-100 / 1920 * 100vw);
        width: 1px;
        height: calc(100 / 1920 * 100vw);
        margin-top: calc(-100 / 2 / 1920 * 100vw);
        background: rgba(255, 255, 255, 0.4);
      }

      &:last-of-type {
        &::after {
          display: none;
        }
      }
    }

    &-text {
      text-align: center;
      &:nth-of-type(1) {
        width: 100%;
        font-size: calc(60 / 1920 * 100vw);
        line-height: calc(84 / 1920 * 100vw);
        font-weight: 305;
      }
      &:nth-of-type(2) {
        margin-top: calc(24 / 1920 * 100vw);
        color: rgba(255, 255, 255, 0.7);
        font-size: calc(22 / 1920 * 100vw);
        line-height: calc(28 / 1920 * 100vw);
        white-space: nowrap;
      }
    }
  }
}
// 1080 900 810 720
@media screen and (max-height: 900px) {
  .box-box {
    .box-leftTop,
    .box-rightTop {
      top: calc(90 / 1920 * 100vw);
    }
    .box-leftBottom,
    .box-rightBottom {
      bottom: calc(90 / 1920 * 100vw);
    }
  }
}
@media screen and (max-height: 810px) {
  .box-box {
    .box-leftTop,
    .box-rightTop {
      top: calc(81 / 1920 * 100vw);
    }
    .box-leftBottom,
    .box-rightBottom {
      bottom: calc(81 / 1920 * 100vw);
    }
  }
}
@media screen and (max-height: 720px) {
  .box-box {
    .box-leftTop,
    .box-rightTop {
      top: calc(72 / 1920 * 100vw);
    }
    .box-leftBottom,
    .box-rightBottom {
      bottom: calc(72 / 1920 * 100vw);
    }
  }
}
@media screen and (max-width: 1023px) {
  .box-box {
    .box-top,
    .box-leftTop,
    .box-rightTop {
      top: calc(292 / 1125 * 100vw);
    }
    .box-top {
      top: calc(518 / 1125 * 100vw);
      width: 90vw;
      margin-left: -45vw;

      &.h1 {
        .box-icon {
          display: block;
          margin: 0 auto;
          width: calc(303 / 1125 * 100vw);
          margin-bottom: calc(58 / 1125 * 100vw);
        }
        .box-title {
          font-size: calc(42 / 1125 * 100vw);
          line-height: calc(56 / 1125 * 100vw);
          text-align: center;
        }
      }

      &.h6 {
        top: calc(260 / 1125 * 100vw);

        .box-title {
          font-size: calc(80 / 1125 * 100vw);
          line-height: calc(106 / 1125 * 100vw);
        }

        .box-desc {
          margin-top: calc(52 / 1125 * 100vw);
          font-size: calc(68 / 1125 * 100vw);
          line-height: calc(90 / 1125 * 100vw);
        }
      }

      &.h9 {
        top: calc((270 + 192) / 1125 * 100vw);

        .box-title {
          font-size: calc(50 / 1125 * 100vw);
          line-height: calc(66 / 1125 * 100vw);
        }
      }

      &.j7h1 {
        top: calc(306 / 750 * 100vw);
        .box-icon {
          display: block;
          margin: 0 auto;
          width: calc(476 / 750 * 100vw);
        }
      }
    }
    .box-bottom {
      bottom: calc(136 / 1125 * 100vw);

      .box-title {
        font-size: calc(48 / 1125 * 100vw);
        line-height: calc(64 / 1125 * 100vw);
      }
      .box-desc {
        margin-top: calc(30 / 1125 * 100vw);
        font-size: calc(36 / 1125 * 100vw);
        line-height: calc(48 / 1125 * 100vw);
      }

      &.h3 {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;
        height: calc(96 * 3 / 1125 * 100vw);
        bottom: calc((136 - 96 / 2) / 1125 * 100vw);

        .box-icon {
          display: block;
          margin: 0 auto;
          width: calc(303 / 1125 * 100vw);
          margin-bottom: calc(58 / 1125 * 100vw);
        }
        .box-title {
          width: 100%;
          font-size: calc(42 / 1125 * 100vw);
          line-height: calc(56 / 1125 * 100vw);
          text-align: center;
        }
        .box-desc {
          width: 100%;
          color: rgba(255, 255, 255, 0.7);
        }
      }
    }
    .box-leftTop {
      &.h32 {
        :deep(.h321) {
          font-size: calc(30 / 1125 * 100vw);
          line-height: calc(40 / 1125 * 100vw);
          font-weight: 250;
        }
        :deep(.h322) {
          margin-top: calc(10 / 1125 * 100vw);
          font-size: calc(45 / 1125 * 100vw);
          line-height: calc(60 / 1125 * 100vw);
          font-weight: 305;
        }
        :deep(.h323) {
          margin-top: calc(30 / 1125 * 100vw);
          font-size: calc(30 / 1125 * 100vw);
          line-height: calc(40 / 1125 * 100vw);
          font-weight: 250;
        }
        :deep(.h324) {
          margin-top: calc(10 / 1125 * 100vw);
          font-size: calc(45 / 1125 * 100vw);
          line-height: calc(60 / 1125 * 100vw);
          font-weight: 305;
        }
      }
      &.h34 {
        :deep(.h341) {
          font-size: calc(45 / 1125 * 100vw);
          line-height: calc(60 / 1125 * 100vw);
          font-weight: 305;
        }
        :deep(.h342) {
          margin-top: calc(10 / 1125 * 100vw);
          font-size: calc(30 / 1125 * 100vw);
          line-height: calc(40 / 1125 * 100vw);
          font-weight: 250;
        }
        :deep(.h343) {
          margin-top: calc(30 / 1125 * 100vw);
          font-size: calc(45 / 1125 * 100vw);
          line-height: calc(60 / 1125 * 100vw);
          font-weight: 305;
        }
        :deep(.h344) {
          margin-top: calc(10 / 1125 * 100vw);
          font-size: calc(30 / 1125 * 100vw);
          line-height: calc(40 / 1125 * 100vw);
          font-weight: 250;
        }
      }
      &.h36 {
        :deep(.h361) {
          font-size: calc(45 / 1125 * 100vw);
          line-height: calc(60 / 1125 * 100vw);
          font-weight: 305;
        }
        :deep(.h362) {
          margin-top: calc(17 / 1125 * 100vw);
          font-size: calc(45 / 1125 * 100vw);
          line-height: calc(60 / 1125 * 100vw);
          font-weight: 305;
        }
        :deep(.h363) {
          margin-top: calc(37 / 1125 * 100vw);
          font-size: calc(30 / 1125 * 100vw);
          line-height: calc(40 / 1125 * 100vw);
          font-weight: 250;
        }
      }
      &.h37 {
        :deep(.h371) {
          font-size: calc(45 / 1125 * 100vw);
          line-height: calc(60 / 1125 * 100vw);
          font-weight: 305;
        }
        :deep(.h372) {
          margin-top: calc(10 / 1125 * 100vw);
          font-size: calc(30 / 1125 * 100vw);
          line-height: calc(40 / 1125 * 100vw);
          font-weight: 250;
        }
        :deep(.h373) {
          margin-top: calc(64 / 1125 * 100vw);
          font-size: calc(45 / 1125 * 100vw);
          line-height: calc(60 / 1125 * 100vw);
          font-weight: 305;
        }
        :deep(.h374) {
          margin-top: calc(10 / 1125 * 100vw);
          font-size: calc(30 / 1125 * 100vw);
          line-height: calc(40 / 1125 * 100vw);
          font-weight: 250;
        }
      }
      &.h85 {
        :deep(.h851) {
          font-size: calc(30 / 1125 * 100vw);
          line-height: calc(40 / 1125 * 100vw);
          font-weight: 250;
        }
        :deep(.h852) {
          margin-top: calc(10 / 1125 * 100vw);
          font-size: calc(45 / 1125 * 100vw);
          line-height: calc(60 / 1125 * 100vw);
          font-weight: 305;
        }
        :deep(.h853) {
          margin-top: calc(30 / 1125 * 100vw);
          font-size: calc(30 / 1125 * 100vw);
          line-height: calc(40 / 1125 * 100vw);
          font-weight: 250;
        }
        :deep(.h854) {
          display: flex;
          margin-top: calc(56 / 1125 * 100vw);
        }
        :deep(.h855),
        :deep(.h856) {
          text-align: center;
        }
        :deep(.h855) {
          padding-right: calc(48 / 1125 * 100vw);
          border-right: 1px solid #fff;
        }
        :deep(.h856) {
          padding-left: calc(48 / 1125 * 100vw);
        }
        :deep(.h8551) {
          font-size: calc(48 / 1125 * 100vw);
          line-height: calc(64 / 1125 * 100vw);
        }
        :deep(.h8552) {
          font-size: calc(16 / 1125 * 100vw);
          line-height: calc(22 / 1125 * 100vw);
          font-weight: 250;
        }
      }
      &.h86 {
        :deep(.h861) {
          font-size: calc(30 / 1125 * 100vw);
          line-height: calc(40 / 1125 * 100vw);
          font-weight: 250;
        }
        :deep(.h862) {
          margin-top: calc(10 / 1125 * 100vw);
          font-size: calc(45 / 1125 * 100vw);
          line-height: calc(60 / 1125 * 100vw);
          font-weight: 305;
        }
        :deep(.h863) {
          margin-top: calc(30 / 1125 * 100vw);
          font-size: calc(30 / 1125 * 100vw);
          line-height: calc(40 / 1125 * 100vw);
          font-weight: 250;
        }
      }
    }
    .box-rightTop {
      &.h34 {
        .box-rightTop {
          &-icon {
            width: calc(241 / 1125 * 100vw);
          }
        }
      }
      &.h92 {
        top: calc((64 + 192) / 1125 * 100vw);
        .box-rightTop {
          display: flex;
          justify-content: end;
          &-icon {
            width: calc(129 / 1125 * 100vw);
          }
        }
      }
    }
    .box-leftBottom {
      left: calc(120 / 1125 * 100vw);
      bottom: calc(186 / 1125 * 100vw);
      .box-title {
        width: calc(922 / 1125 * 100vw);
        font-size: calc(46 / 1125 * 100vw);
        line-height: calc(62 / 1125 * 100vw);
        font-weight: 520;
      }
      .box-desc {
        width: calc(922 / 1125 * 100vw);
        margin-top: calc(24 / 1125 * 100vw);
        font-size: calc(36 / 1125 * 100vw);
        line-height: calc(48 / 1125 * 100vw);
      }
      &.h92 {
        :deep(.h921) {
          font-size: calc(46 / 1125 * 100vw);
          line-height: calc(62 / 1125 * 100vw);
        }
        :deep(.h922) {
          margin-top: calc(24 / 1125 * 100vw);
          font-size: calc(36 / 1125 * 100vw);
          line-height: calc(48 / 1125 * 100vw);
          font-weight: 250;
        }
        :deep(.h923) {
          margin-top: calc(24 / 1125 * 100vw);
          font-size: calc(36 / 1125 * 100vw);
          line-height: calc(48 / 1125 * 100vw);
          font-weight: 250;
          color: rgba(#fff, 0.6);
        }
      }
    }

    &-count {
      bottom: 0;
      left: 0;
      width: 100%;
      height: auto;
      gap: 0;
      margin-left: 0;
      flex-wrap: wrap;

      &-item {
        min-width: 0;
        width: 50%;
        flex-shrink: 0;
        height: calc(214 / 750 * 100vw);

        &::after {
          display: none;
        }
      }

      &-text {
        &:nth-of-type(1) {
          width: 100%;
          font-size: calc(48 / 750 * 100vw);
          line-height: calc(64 / 750 * 100vw);
          font-weight: 305;
        }
        &:nth-of-type(2) {
          margin-top: calc(16 / 750 * 100vw);
          font-size: calc(22 / 750 * 100vw);
          line-height: calc(32 / 750 * 100vw);
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
