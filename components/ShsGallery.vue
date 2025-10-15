<template>
  <div class="shs-gallery">
    <div class="shs-gallery-title">Fine gallery</div>
    <div v-if="ispc" class="shs-gallery-row">
      <div class="shs-gallery-left">
        <img
          :src="`/images/${galleryList[0]}`"
          class="w-full h-full object-cover select-none"
          loading="lazy"
        />
      </div>
      <div class="shs-gallery-right">
        <div class="shs-gallery-top">
          <img
            :src="`/images/${galleryList[1]}`"
            class="w-full h-full object-cover select-none"
            loading="lazy"
          />
        </div>
        <div class="shs-gallery-row2">
          <div class="shs-gallery-left2">
            <img
              :src="`/images/${galleryList[2]}`"
              class="w-full h-full object-cover select-none"
              loading="lazy"
            />
          </div>
          <div class="shs-gallery-right2">
            <img
              :src="`/images/${galleryList[3]}`"
              class="w-full h-full object-cover select-none"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="shs-gallery-col">
      <div
        v-for="(item, index) in galleryList"
        :key="index"
        class="shs-gallery-img"
      >
        <img
          :src="`/images/${item}`"
          class="w-full h-full object-cover select-none"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface PageData {
  ispc: boolean;
  galleryList: string[];
}

const props = withDefaults(defineProps<PageData>(), {
  ispc: true,
  galleryList: () => [],
});
</script>

<style lang="scss" scoped>
.shs-gallery {
  position: relative;
  font-family: "MiSans";
  background: #fff;

  &-title {
    padding: calc(120 / 1920 * 100vw) 0;
    font-size: calc(70 / 1920 * 100vw);
    line-height: calc(99 / 1920 * 100vw);
    color: #222;
    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
  }

  &-row {
    display: flex;
    gap: 3px;
  }

  &-left,
  &-right {
    flex: 1;
    flex-shrink: 0;
  }

  &-left {
    height: calc(960 / 1920 * 100vw);
  }

  &-top,
  &-row2 {
    height: calc((960 / 1920 * 100vw - 3px) / 2);
  }

  &-row2 {
    display: flex;
    gap: 3px;
    margin-top: 3px;
  }

  &-left2,
  &-right2 {
    flex: 1;
    flex-shrink: 0;
    height: 100%;
  }
}
@media screen and (max-width: 1023px) {
  .shs-gallery {
    padding-bottom: calc(70 * 1.5 / 1125 * 100vw);
    &-title {
      padding: calc(100 * 1.5 / 1125 * 100vw) 0;
      font-size: calc(48 * 1.5 / 1125 * 100vw);
      line-height: calc(68 * 1.5 / 1125 * 100vw);
    }

    &-col {
      padding: calc(20 * 1.5 / 1125 * 100vw);
    }

    &-img {
      padding-bottom: calc(10 * 1.5 / 1125 * 100vw);
      &:last-of-type {
        padding-bottom: 0;
      }
    }
  }
}
</style>
