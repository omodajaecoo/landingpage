<template>
  <div 
    class="menu-icon w-[0.48rem] h-[0.48rem] cursor-pointer" 
    :class="[headerTheme, { active: expand }]"
  >
    <span class="menu-line"></span>
    <span class="menu-line"></span>
    <span class="menu-line"></span>
  </div>
</template>

<script lang="ts" setup>
  import { useHeaderStore } from '~/stores/useHeader';

  const { headerTheme } = storeToRefs(useHeaderStore());

  const props = defineProps<{ expand: boolean; }>();
</script>
<style scoped lang='scss'>
.menu-icon {
  @apply relative
    cursor-pointer;
  .menu-line {
    position: absolute;
    left: 0.07rem;
    top: 0.12rem;
    height: 0.015rem;
    // border-radius: 1px;
    width: 0.34rem;
    transition: all .5s ease-in-out;
    &:nth-child(2) {
      top: 0.23rem;
    }
    &:nth-child(3) {
      top: 0.34rem;
    }
  }
  &.dark .menu-line {
    background-color: #fff;
  }
  &.light .menu-line {
    background-color: #222;
  }
  &.active {
    .menu-line {
      &:nth-child(1) {
        transform: rotate(45deg);
        top: 0.22rem;
      }
      &:nth-child(2) {
        width: 0;
      }
      &:nth-child(3) {
        transform: rotate(-45deg);
        top: 0.22rem;
      }
    }
  }
}

</style>