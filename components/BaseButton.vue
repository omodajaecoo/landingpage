<template>
  <button 
    class="base-button px-[0.2rem] py-[0.1rem] outline-none relative overflow-hidden border-none select-none"
    :class="[type]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
  interface ButtonProps {
    type?: 'text' | 'default';
  }

  const props = withDefaults(
    defineProps<ButtonProps>(),
    {
      type: 'default'
    }
  )
</script>

<style scoped lang='scss'>
  .base-button {
    z-index: 1;
    &::after {
      content: "";
      @apply absolute
        top-0
        left-0
        z-[-1]
        w-full
        h-full
        bg-primary
        translate-x-[-100%]
        pointer-events-none
        duration-500
        ease-in-out;
    }
    &.text {
      @apply bg-transparent text-white border border-solid;
    }
    &.default {
      @apply bg-transparent text-[#222] border border-solid;
    }
    &:hover {
      @apply border-primary text-white border;
      &::after {
        @apply translate-x-[0%];
      }
    }
  }
</style>