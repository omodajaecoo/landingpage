<template>
  <div class="horizontal-box" :class="style">
    <div
      v-for="(row, index) in horizontal"
      :key="index"
      class="horizontal-box-row"
      v-animate="{
        effect: 'fadeInUp',
        once: true,
      }"
      :ref="
          (el) => {
            if (el) itemRefs[index] = el as HTMLElement ;
          }
        "
    >
      <div v-for="(item, idx) in row" :key="idx" class="horizontal-box-item">
        <div v-if="item.title" class="horizontal-box-text">
          <div class="horizontal-box-title" v-html="item.title"></div>
          <div class="horizontal-box-desc" v-html="item.desc"></div>
          <div class="horizontal-box-count">
            <div
              v-for="(count, i) in item.countList"
              :key="index"
              class="horizontal-box-count-box"
            >
              <div class="horizontal-box-count-text">
                <FullCountTo
                  class="num"
                  :domRef="itemRefs[index]"
                  :end="parseFloat(count[0])"
                  :autoPlay="true"
                  :duration="1500"
                />{{ count[1] }}
              </div>
              <div class="horizontal-box-count-text" v-html="count[2]"></div>
            </div>
          </div>
        </div>
        <div v-else-if="item.icon" class="horizontal-box-full">
          <img
            :src="`/images/${item.icon}`"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
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
  countList?: string[][];
}
interface TextItemData {
  top?: BoxItemData;
  bottom?: BoxItemData;
  leftTop?: BoxItemData;
  rightTop?: BoxItemData;
  leftBottom?: BoxItemData;
  rightBottom?: BoxItemData;
}
interface PageData {
  imgUrl?: string;
  videoUrl?: string;
  style?: string;
  text?: TextItemData;
  bottomList?: string[][];
  countList?: string[][];
  horizontal?: BoxItemData[][];
  galleryList?: string[];
  page?: {
    text?: TextItemData;
    countList?: string[][];
  }[];
}

const props = withDefaults(defineProps<PageData>(), {
  ispc: true,
  imgUrl: "",
  style: "",
  horizontal: () => [],
});

const itemRefs = ref<Array<HTMLElement | null>>([]);
</script>

<style lang="scss" scoped>
.horizontal-box {
  position: relative;
  font-family: "MiSans";
  color: #222;
  padding: calc(185 / 1920 * 100vw) calc(30 / 1920 * 100vw);
  text-align: center;
  background: #fff;

  &-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: calc(20 / 1920 * 100vw);

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &-text,
  &-full {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-shrink: 0;
    width: calc(920 / 1920 * 100vw);
    height: calc(700 / 1920 * 100vw);
  }

  &-text {
    position: relative;
    flex-wrap: wrap;
    background: #f7f9fa;
  }

  &-title {
    position: relative;
    width: calc(552 / 1920 * 100vw);
    margin: 0 auto;
    font-size: calc(40 / 1920 * 100vw);
    line-height: calc(56 / 1920 * 100vw);
    font-weight: 900;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    &::after {
      content: "";
      position: absolute;
      bottom: calc(-50 / 1920 * 100vw);
      left: 0;
      width: 100%;
      height: 1px;
      background: rgba(0, 0, 0, 0.1);
    }
  }
  &-desc {
    position: absolute;
    left: 0;
    bottom: calc(15 / 1920 * 100vw);
    width: 100%;
    color: #999;
    font-size: calc(15 / 1920 * 100vw);
    line-height: calc(17 / 1920 * 100vw);
    font-weight: 250;
  }

  &-bottom {
    margin: calc(318 / 1920 * 100vw) auto 0;
    display: flex;
    width: calc(1376 / 1920 * 100vw);
    gap: calc(40 / 1920 * 100vw);

    &-item {
      flex: 1;
      flex-shrink: 0;
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      justify-content: center;
      /* width: calc(314 / 1920 * 100vw); */
      height: calc(164 / 1920 * 100vw);
    }
  }

  &-count {
    margin-top: calc(100 / 1920 * 100vw);
    display: flex;
    justify-content: center;
    gap: calc(148 / 1920 * 100vw);

    &-box {
      position: relative;
      text-align: center;
      min-width: calc(155 / 1920 * 100vw);

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: calc(-74 / 1920 * 100vw);
        width: 1px;
        height: calc(62 / 1920 * 100vw);
        background: rgba(0, 0, 0, 0.1);
        transform: translateY(-50%);
      }

      &:last-of-type {
        &::after {
          display: none;
        }
      }
    }

    &-text {
      &:nth-of-type(1) {
        color: #222;
        font-size: calc(36 / 1920 * 100vw);
        line-height: calc(50 / 1920 * 100vw);
      }
      &:nth-of-type(2) {
        margin-top: calc(8 / 1920 * 100vw);
        color: #999;
        font-size: calc(20 / 1920 * 100vw);
        line-height: calc(24 / 1920 * 100vw);
        font-weight: 250;
      }
    }
  }
}
@media screen and (max-width: 1023px) {
  .horizontal-box {
    padding: 1px calc(32 / 750 * 100vw);
    margin-top: -1px;
    margin-bottom: -1px;
    &-row {
      display: block;
      margin-bottom: 0;
    }
    &-text,
    &-full {
      width: 100%;
    }
    &-full {
      margin-top: calc(208 / 750 * 100vw);
      height: calc(457 / 750 * 100vw);
    }
    &-text {
      display: block;
      align-content: normal;
      padding-top: 1px;
      height: calc(703 / 750 * 100vw);
      margin-bottom: 0;
      background: #fff;
      border-bottom: 1px solid rgba(0, 0, 0, 0.10);;
    }
    &-title {
      width: 100%;
      margin-top: calc(100 / 750 * 100vw);
      font-size: calc(48 / 750 * 100vw);
      line-height: calc(68 / 750 * 100vw);
      font-weight: 630;
      &::after {
        left: 50%;
        bottom: calc(-20 / 750 * 100vw);
        width: calc(70 / 750 * 100vw);
        height: calc(3 / 750 * 100vw);
        margin-left: calc(-70 / 2 / 750 * 100vw);
        background: #67b0c4;
      }
    }
    &-desc {
      bottom: calc(40 / 750 * 100vw);
      font-size: calc(20 / 750 * 100vw);
      line-height: calc(23 / 750 * 100vw);
    }
    &-count {
      margin-top: calc(123 / 750 * 100vw);
      gap: calc(80 / 750 * 100vw);

      &-box {
        min-width: calc(180 / 750 * 100vw);

        &::after {
          right: calc(-40 / 750 * 100vw);
          height: calc(62 / 750 * 100vw);
        }
      }

      &-text {
        &:nth-of-type(1) {
          color: #222;
          font-size: calc(40 / 750 * 100vw);
          line-height: calc(56 / 750 * 100vw);
        }
        &:nth-of-type(2) {
          margin-top: calc(8 / 750 * 100vw);
          font-size: calc(20 / 750 * 100vw);
          line-height: calc(28 / 750 * 100vw);
        }
      }
    }
  }
}
</style>
