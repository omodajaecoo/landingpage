<template>
  <div class="shs-picture">
    <div v-if="pictureList.length === 5 && ispc" class="shs-picture-row">
      <div
        class="shs-picture-col"
        v-animate="{
          effect: 'fadeInLeft',
          once: true,
        }"
      >
        <img
          :src="`/images/${pictureList[0]?.icon}`"
          class="w-full h-full object-cover select-none"
          loading="lazy"
        />
        <div class="shs-picture-txt">{{ pictureList[0]?.title }}</div>
      </div>
      <div class="shs-picture-col">
        <div
          class="shs-picture-td"
          v-animate="{
            effect: 'fadeInUp',
            once: true,
          }"
          style="animation-delay: 0.1s"
        >
          <img
            :src="`/images/${pictureList[1]?.icon}`"
            class="w-full h-full object-cover select-none"
            loading="lazy"
          />
          <div class="shs-picture-txt">{{ pictureList[1]?.title }}</div>
        </div>
        <div
          class="shs-picture-td"
          v-animate="{
            effect: 'fadeInUp',
            once: true,
          }"
          style="animation-delay: 0.2s"
        >
          <img
            :src="`/images/${pictureList[3]?.icon}`"
            class="w-full h-full object-cover select-none"
            loading="lazy"
          />
          <div class="shs-picture-txt">{{ pictureList[3]?.title }}</div>
        </div>
      </div>
      <div class="shs-picture-col">
        <div
          class="shs-picture-td"
          v-animate="{
            effect: 'fadeInUp',
            once: true,
          }"
          style="animation-delay: 0.3s"
        >
          <img
            :src="`/images/${pictureList[2]?.icon}`"
            class="w-full h-full object-cover select-none"
            loading="lazy"
          />
          <div class="shs-picture-txt">{{ pictureList[2]?.title }}</div>
        </div>
        <div
          class="shs-picture-td"
          v-animate="{
            effect: 'fadeInUp',
            once: true,
          }"
          style="animation-delay: 0.4s"
        >
          <img
            :src="`/images/${pictureList[4]?.icon}`"
            class="w-full h-full object-cover select-none"
            loading="lazy"
          />
          <div class="shs-picture-txt">{{ pictureList[4]?.title }}</div>
        </div>
      </div>
    </div>
    <template v-if="pictureList.length === 5 && !ispc">
      <div class="shs-picture-one">
        <div class="shs-picture-i">
          <img
            :src="`/images/${pictureList[0]?.icon}`"
            class="w-full h-full object-cover select-none"
            loading="lazy"
          />
        </div>
        <div class="shs-picture-t">{{ pictureList[0]?.title }}</div>
      </div>
      <div class="shs-picture-two">
        <div class="shs-picture-f">
          <div class="shs-picture-i">
            <img
              :src="`/images/${pictureList[1]?.icon}`"
              class="w-full h-full object-cover select-none"
              loading="lazy"
            />
          </div>
          <div class="shs-picture-t">{{ pictureList[1]?.title }}</div>
        </div>
        <div class="shs-picture-f">
          <div class="shs-picture-i">
            <img
              :src="`/images/${pictureList[2]?.icon}`"
              class="w-full h-full object-cover select-none"
              loading="lazy"
            />
          </div>
          <div class="shs-picture-t">{{ pictureList[2]?.title }}</div>
        </div>
      </div>
      <div class="shs-picture-two">
        <div class="shs-picture-f">
          <div class="shs-picture-i">
            <img
              :src="`/images/${pictureList[3]?.icon}`"
              class="w-full h-full object-cover select-none"
              loading="lazy"
            />
          </div>
          <div class="shs-picture-t">{{ pictureList[3]?.title }}</div>
        </div>
        <div class="shs-picture-f">
          <div class="shs-picture-i">
            <img
              :src="`/images/${pictureList[4]?.icon}`"
              class="w-full h-full object-cover select-none"
              loading="lazy"
            />
          </div>
          <div class="shs-picture-t">{{ pictureList[4]?.title }}</div>
        </div>
      </div>
    </template>
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
  pictureList: BoxItemData[];
}

const props = withDefaults(defineProps<PageData>(), {
  ispc: true,
  pictureList: () => [],
});
</script>

<style lang="scss" scoped>
.shs-picture {
  width: 100%;
  height: 100%;
  color: #fff;

  &-row {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    gap: calc(30 / 1920 * 100vw);
    width: calc(1570 / 1920 * 100vw);
    height: calc(960 / 1920 * 100vw);
    margin-left: calc(-1570 / 2 / 1920 * 100vw);
    margin-top: calc(-960 / 2 / 1920 * 100vw);
    transform-origin: 50% 50%;
  }

  &-col {
    flex: 1;
    flex-shrink: 0;
    height: 100%;
    position: relative;
  }

  &-td {
    position: relative;
    height: calc((960 - 30) / 2 / 1920 * 100vw);

    &:first-of-type {
      margin-bottom: calc(30 / 1920 * 100vw);
    }
  }

  &-txt {
    position: absolute;
    bottom: calc(30 / 1920 * 100vw);
    left: calc(30 / 1920 * 100vw);
    font-size: calc(22 / 1920 * 100vw);
    line-height: calc(34 / 1920 * 100vw);
    font-weight: 380;
    text-transform: capitalize;
  }
}
@media screen and (max-height: 1000px) {
  .shs-picture {
    &-row {
      transform: scale(calc(0.926 - 0.05));
    }
  }
}
@media screen and (max-height: 900px) {
  .shs-picture {
    &-row {
      transform: scale(calc(0.833 - 0.05));
    }
  }
}
@media screen and (max-height: 810px) {
  .shs-picture {
    &-row {
      transform: scale(calc(0.75 - 0.05));
    }
  }
}
@media screen and (max-height: 720px) {
  .shs-picture {
    &-row {
      transform: scale(calc(0.667 - 0.05));
    }
  }
}
@media screen and (max-width: 1023px) {
  .shs-picture {
    padding: calc(40 / 1125 * 100vw);

    &-one {
      .shs-picture-i {
        height: calc(890 / 1125 * 100vw);
      }
    }

    &-t {
      margin-top: calc(28 / 1125 * 100vw);
      font-size: calc(37 / 1920 * 100vw);
      line-height: calc(49 / 1920 * 100vw);
    }

    &-two {
      margin-top: calc(56 / 1125 * 100vw);
      display: flex;
      justify-content: space-between;
    }

    &-f {
      width: calc(492 / 1125 * 100vw);
      .shs-picture-i {
        height: calc(336 / 1125 * 100vw);
      }
    }
  }
}
</style>
