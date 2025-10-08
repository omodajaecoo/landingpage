<template>
  <header 
    ref="headerRef" 
    :class="headerTheme" 
    class="header
      w-full h-[0.88rem] lg:h-[0.54rem] px-[0.32rem] lg:px-[0.6rem] 
      fixed top-0 left-0 z-[1000]
      flex justify-between items-center"
    >  
    <!-- logo -->
    <nuxt-link to="/" class="w-[208px]" @click.stop="setPath">
      <BaseImg 
        class="logo w-full hidden lg:block" 
        :src="logoUrl"
        alt="logo"
      />
    </nuxt-link>
    <!-- nav -->
    <LayoutsTopNav 
      :expand="mbMenuExpand"
      @touchmove.stop 
    />
    <!-- global website -->
    <div class="hidden lg:flex items-center cursor-pointer" @click="goToGlobalWebsite">
      <BaseImg 
        class="logo w-[18px]" 
        :src="globalUrl" 
        alt="global" 
      />
      <span class="ml-[0.06rem] text-[14px]">Global Website</span>
    </div>
    <!-- mb top menu -->
    <div 
      :class="[headerTheme, {active: activeFlag}]"
      class="mb-top-nav h-[0.88rem] w-full px-[0.32rem]
        flex lg:hidden justify-between items-center 
        absolute top-0 left-0 z-20"
    >
    <nuxt-link to="/" @click.stop="setPath">
      <BaseImg 
        class="logo w-[3.18rem]" 
        :src="logoUrl"
        alt="logo" 
      />
    </nuxt-link>
      
      <MenuIcon 
        class="block lg:hidden" 
        :expand="mbMenuExpand" 
        @click="handleToggleMenu"
      />
    </div>
  </header>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import { useHeaderStore } from '~/stores/useHeader';
  import { provide } from 'vue';

  const store = useHeaderStore();
  const { headerTheme } = storeToRefs(store);
  const headerRef = ref<HTMLElement | null>(null);
  const mbHeaderRef = ref<HTMLElement | null>(null);
  const { scrollY } = useScroll();

  const activeFlag = ref(false);
  const router = useRouter();

  watch(scrollY, (newVal) => {
    if (headerRef.value) {
      if (newVal > 0) {
        headerRef.value.classList.add('active');
      } else {
        headerRef.value.classList.remove('active');
      }
    }
    // if (mbHeaderRef.value) {
    //   if (newVal > 0) {
    //     mbHeaderRef.value.classList.add('active');
    //   } else {
    //     mbHeaderRef.value.classList.remove('active');
    //   }
    // }
    if (newVal > 0) {
      activeFlag.value = true;
    } else {
      activeFlag.value = false;
    }
  });

  const logoUrl = computed(() => `common/logo_${headerTheme.value}.png`);

  const globalUrl = computed(() => `common/global_${headerTheme.value}.svg`);

  const mbMenuExpand = ref(false);

  const handleToggleMenu = () => {
    mbMenuExpand.value = !mbMenuExpand.value;
    if (mbMenuExpand.value) {
      activeFlag.value = true;
    } else {
      activeFlag.value = false;
    }
  }
  // 提供方法给子孙组件
 provide('parentMethod', handleToggleMenu);

  const goToGlobalWebsite = () => {
    store.setPath('/globalWebsite');
    router.push({ path: '/globalWebsite' });
  }

  const setPath = () => {
    store.setPath('/');
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
    &::after {
      transition: .3s background ease-in-out;
      content: '';
      background: transparent;
      @apply absolute top-0 left-0 right-0 bottom-0;
    }
    &:hover, &.active, .mb-top-nav.active {
      &.dark {
        background: rgba(0, 0, 0, 0.9);
      }
      &.light {
        background: rgba(255, 255, 255, 0.9);
      }
      &::after {
        @apply backdrop-blur-2xl;
        z-index: -1;
      }
    }
  }
</style>