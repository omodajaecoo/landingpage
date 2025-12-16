<template>
  <div :class="cn('number-tab-wrap', size)">
    <Transition name="slide-fade" v-for="(item, idx) in datas" :key="idx">
      <div
        class="tab-item"
        v-if="showTitle"
        :style="{ 'transition-delay': idx * 0.2 + 's' }"
      >
        <div class="value-wrap">
          <vue-count-to
            class="num"
            :end="item.num"
            :autoPlay="true"
            :duration="1500"
          />
          <div class="txt">{{ item.txt }}</div>
        </div>
        <div class="label-wrap">{{ item.label }}</div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
interface CardUnit {
  label: string;
  num: number;
  txt: string;
}
interface CardInter {
  showTitle: boolean;
  datas: CardUnit[];
  size?: "default" | "large" | string;
}

const props = withDefaults(defineProps<CardInter>(), {
  size: "default",
});
</script>

<style lang="scss" scoped>
.number-tab-wrap {
  position: absolute;
  bottom: calc(5 * 16 / 19.2 * 1vw);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 20;
  color: #fff;
  .tab-item {
    position: relative;
    text-align: center;
    padding: 0 60px;
    transition: 1.5s;
    .value-wrap {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      font-size: 2.5vw;
      margin-bottom: 1.3542vw;
      min-width: 10.9375vw;
    }
    .label-wrap {
      font-size: 1.25vw;
    }
    &::after {
      content: "";
      width: 1px;
      height: 80%;
      background-color: #fff;
      position: absolute;
      right: 0px;
      top: 50%;
      transform: translateY(-50%);
      display: block;
    }
    &:last-child {
      padding-right: 0px !important;
      &::after {
        width: 0px;
      }
    }
    &:first-child {
      padding-left: 0px !important;
    }
  }
}

@media screen and (max-width: 1023px) {
  .number-tab-wrap {
    .tab-item::after {
      width: 0.1333vw;
    }
    &.default {
      .tab-item {
        padding: 0 4vw;
        .value-wrap {
          font-size: 3.7333vw;
          margin-bottom: 2.4vw;
          display: flex;
          flex-wrap: nowrap;
          justify-content: center;
          min-width: 17vw;
        }
        .label-wrap {
          font-size: 2.1333vw;
        }
      }
    }
    &.large {
      align-items: baseline;
      .tab-item {
        // width: 16.2667vw;
        box-sizing: content-box;
        padding: 0 9.3333vw;
        .value-wrap {
          font-size: 5.0667vw;
          margin-bottom: 3.4667vw;
          display: flex;
          flex-wrap: nowrap;
          justify-content: center;
        }
        .label-wrap {
          font-size: 3.2vw;
          width: 30vw;
        }
      }
    }
  }
}
</style>
