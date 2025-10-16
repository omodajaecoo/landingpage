<template>
  <div
    class="page-pagination"
    :class="!fade?.[0]?.car && 'page-pagination-small'"
    @touchmove.stop=""
  >
    <div
      v-for="(page, idx) in fade"
      :key="idx"
      :class="{ active: idx === activeIndex }"
      class="page-pagination-item"
      @click="handleChange(idx)"
    >
      <img
        :src="`/images/${page.dot}`"
        class="page-pagination-dot"
        loading="lazy"
      />
      <div
        :class="{ white: fade[activeIndex].white }"
        class="page-pagination-text"
      >
        {{ page.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface FadeData {
  title: string;
  desc?: string;
  bg?: string;
  car?: string;
  dot?: string;
  name?: string;
  white?: boolean;
}

const props = withDefaults(
  defineProps<{
    fade: FadeData[];
    activeIndex: number;
  }>(),
  {
    fade: () => [],
    activeIndex: 0,
  }
);

const emit = defineEmits(["change"]);

const handleChange = (idx) => {
  emit("change", idx);
};
</script>

<style lang="scss" scoped>
.page-pagination {
  display: flex;
  justify-content: center;
  gap: calc(32 / 1920 * 100vw);

  &-item {
    display: flex;
    align-items: center;
    padding: 0 calc(24 / 1920 * 100vw) 0 calc(10 / 1920 * 100vw);
    height: calc(44 / 1920 * 100vw);
    border-radius: calc(22 / 1920 * 100vw);
    transition: background 0.5s;
    cursor: pointer;

    &:hover,
    &.active {
      background-color: #fff;

      .page-pagination-text {
        color: #000;
      }
    }
  }

  &-dot {
    display: block;
    width: calc(28 / 1920 * 100vw);
    height: calc(28 / 1920 * 100vw);
    margin-right: calc(8 / 1920 * 100vw);
  }

  &-text {
    color: #999;
    font-size: calc(16 / 1920 * 100vw);
    line-height: calc(40 / 1920 * 100vw);
    text-transform: capitalize;
    transition: color 0.5s;

    &.white {
      color: #fff;
    }
  }
}
@media screen and (max-width: 1023px) {
  .page-pagination {
    justify-content: flex-start;
    gap: calc(80 / 1125 * 100vw);
    padding: 0 calc(122 / 1125 * 100vw);

    &-small {
      justify-content: center;
    }

    &-item {
      flex-shrink: 0;
      padding: 0;
      height: calc(137 / 1125 * 100vw);
      border-radius: calc(68 / 1125 * 100vw);

      &.active {
        padding: 0 calc(80 / 1125 * 100vw) 0 calc(30 / 1125 * 100vw);
        background-color: #fff;

        .page-pagination-text {
          width: auto;
          color: #000;
        }
        .page-pagination-dot {
          margin-right: calc(25 / 1125 * 100vw);
        }
      }
    }

    &-dot {
      width: calc(87 / 1125 * 100vw);
      height: calc(87 / 1125 * 100vw);
      margin-right: 0;
    }

    &-text {
      width: 0;
      overflow: hidden;
      font-size: calc(50 / 1125 * 100vw);
      line-height: calc(120 / 1125 * 100vw);
    }
  }
}
</style>
