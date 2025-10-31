<template>
  <header 
    ref="headerRef" 
    :class="[headerTheme, 'header', { 'scrolled': isScrolled } ]"
    class="w-full h-[0.88rem] lg:h-[0.54rem] px-[0.32rem] lg:px-[0.6rem] fixed top-0 left-0 z-[1000] flex justify-center items-center"
  >
    <!-- logo centrado -->
    <BaseImg 
      class="logo w-[208px] lg:w-[208px] mx-auto block" 
      :src="logoUrl"
      alt="logo"
    />
  </header>
</template>

<script lang="ts" setup>
  import { useHeaderStore } from '~/stores/useHeader';
  import { onMounted, ref, computed, watch } from 'vue';
  import { useScroll } from '~/composables/useScroll';

  const store = useHeaderStore();
  const { headerTheme } = storeToRefs(store);
  const headerRef = ref<HTMLElement | null>(null);
  const logoUrl = computed(() => `common/logo_${headerTheme.value}.png`);

  const isScrolled = ref(false);
  const { scrollY } = useScroll();

  onMounted(() => {
    if (typeof window !== 'undefined') {
      watch(scrollY, (newVal) => {
        isScrolled.value = newVal > 0;
      }, { immediate: true });
    }
  });

</script>
<style scoped lang='scss'>
  .header {
    &.dark, .mb-top-nav.dark {
      color: #fff;
    }
    &.light, .mb-top-nav.light {
      color: #000;
    }
    &.scrolled {
      background: rgba(0, 0, 0, 0.9);
      transition: background 0.3s ease-in-out;
    }
    &::after {
      transition: .3s background ease-in-out;
      content: '';
      background: transparent;
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
    }
  }
</style>