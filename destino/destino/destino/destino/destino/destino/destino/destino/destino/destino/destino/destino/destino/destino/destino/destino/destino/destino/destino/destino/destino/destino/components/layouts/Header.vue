<template>
  <header 
    ref="headerRef" 
    :class="[headerTheme, 'header', { 'scrolled': isScrolled || mbMenuExpand || isHovered } ]"
    class="w-full h-[0.88rem] lg:h-[0.54rem] px-[0.32rem] lg:px-[0.6rem] fixed top-0 left-0 z-[1000] flex justify-center items-center"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- logo centrado -->
    <BaseImg 
      class="logo w-[208px] lg:w-[208px] mx-auto block cursor-pointer" 
      :src="logoUrl"
      alt="logo"
      @click="scrollToTop"
    />
    <LayoutsTopNav 
      :expand="mbMenuExpand"
      @touchmove.stop 
    />
    <MenuIcon 
        class="block lg:hidden" 
        :expand="mbMenuExpand" 
        @click="handleToggleMenu"
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
  const mbMenuExpand = ref(false);
  const activeFlag = ref(false);
  const isHovered = ref(false);

  const scrollToTop = () => {    
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  onMounted(() => {
    if (typeof window !== 'undefined') {
      watch(scrollY, (newVal) => {
        isScrolled.value = newVal > 0;
      }, { immediate: true });
    }
  });
  const handleToggleMenu = () => {
    mbMenuExpand.value = !mbMenuExpand.value;
    if (mbMenuExpand.value) {
      activeFlag.value = true;
    } else {
      activeFlag.value = false;
    }
  }

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
  }
</style>