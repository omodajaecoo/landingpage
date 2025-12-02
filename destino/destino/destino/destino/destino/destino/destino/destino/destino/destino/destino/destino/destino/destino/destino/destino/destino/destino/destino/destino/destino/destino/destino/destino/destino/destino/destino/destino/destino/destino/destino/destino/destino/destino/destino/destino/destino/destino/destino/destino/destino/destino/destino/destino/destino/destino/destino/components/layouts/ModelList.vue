<template>
  <div 
    class="model-wrap lg:py-[0.8rem] w-full 
      flex flex-col justify-center items-center 
      lg:flex-row lg:items-start"
    >
    <div class="lg:w-max-[90%] lg:w-max flex flex-col justify-center items-center 
      lg:flex-row md:justify-start lg:items-start">
      <!-- tab -->
      <div class="tab-list w-full 
        lg:w-[1.2rem] text-[0.22rem] lg:text-[14px] pb-[0.6rem] lg:py-0 leading-[0.29rem]
        flex lg:flex-col flex-row justify-center lg:gap-y-[0.24rem] gap-x-[0.48rem] lg:gap-x-0 font-miNormal"
      >
        <div
          class="tab-item uppercase cursor-pointer"
          :class="{ active: activeBrand === brand }"
          v-for="brand in computedBrandList" 
          :key="brand"
          @click.stop="changeBrand(brand)"
        >{{ brand }}</div>
      </div>
      <!-- modelList -->
      <div class="model-list w-full lg:w-[calc(1190/19.2*1vw)]
        flex flex-wrap lg:gap-x-[0.5rem] gap-[0.5rem] font-miMedium px-[0.9rem] lg:px-0
      ">
        <div 
          v-for="(model, index) in sortModelList" 
          :key="`${model.name}-${activeBrand}`" 
          class="model-item text-center w-[calc(50%-0.25rem)] opacity-0 lg:w-auto animate__animated animate__faster"
          :class="{ 
            'visible-item animate__fadeInDownSmall': (activeBrand === 'ALL' || activeBrand === model.brand),  
            'cursor-pointer': (activeBrand === 'ALL' || activeBrand === model.brand)
          }"
          @click.stop="NavToPage(model)"
          :style="(activeBrand === 'ALL' || activeBrand === model.brand) ? `animation-delay: ${index * 0.1}s;` : ''"
        >
          <BaseImg 
            :src="model.imgUrl" 
            class="w-[2.6rem] hover:scale-[1.1] duration-300 transition-transform ease-in-out" 
          />
          <div class="mt-[0.33rem] font-miMedium text-[0.16rem]">{{ model.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import { useHeaderStore } from '~/stores/useHeader';
  import { useNavStore } from '~/stores/useNav';
  import { inject, computed, nextTick } from 'vue';
  import useDeviceType from '~/composables/useDeviceType';

  interface Model {
    name: string;
    imgUrl: string;
    brand: string;
    linkUrl: string;
  }
  const props = defineProps<{ 
    modelList: Model[]; 
    brandList: string[];
  }>();

  const computedBrandList = computed(() => ['ALL', ...props.brandList]);
  const router = useRouter();
  const store = useHeaderStore();
  const navStore = useNavStore();
  const activeBrand = computed(() => navStore.activeBrand);

  // 注入父组件提供的方法
  const parentMethod = inject('parentMethod') as (() => void) | undefined;

  const { isMobile } = useDeviceType();

  const sortModelList = computed(() => {
    if (activeBrand.value === 'ALL') {
      return props.modelList;
    } else {
      if (isMobile.value) {
        return props.modelList.filter((item) => item.brand === activeBrand.value);
      }
      // // 将属于当前品牌下放到前面，不是的放后面
      // const clone_list = props.modelList.slice();
      // const list = clone_list.sort((a) => {
      //   if (a.brand === activeBrand.value) {
      //     return -1;
      //   } else {
      //     return 1;
      //   }
      // });
      // return list;
      return props.modelList.filter((item) => item.brand === activeBrand.value);
    }
  })

  const scrollToCenter = () => {
    nextTick(() => {
      const container = document.querySelector('.tab-list');
      const activeTab = document.querySelector(`.tab-item.active`);
      
      if (container && activeTab && isMobile.value) {
        const containerWidth = (container as HTMLElement).clientWidth;
        const tabWidth = (activeTab as HTMLElement).clientWidth;
        const tabLeft = (activeTab as HTMLElement).offsetLeft;
        
        container.scrollTo({
          left: tabLeft - containerWidth / 2 + tabWidth / 2,
          behavior: 'smooth'
        });
      }
    });
  };

  const changeBrand = (brand: string) => {
    navStore.setActiveBrand(brand);
    scrollToCenter();
  }

  // 跳转页面
  const NavToPage = (item: Model) => {
    if (item.brand !== activeBrand.value && activeBrand.value !== 'ALL') {
      return
    }
    const url = item.linkUrl;
    store.setPath(url);
    router.push({ path: url });
    if (parentMethod) {
      parentMethod();
    }
    // 关闭导航栏
    navStore.setNav(false);
  }
</script>
<style scoped lang='scss'>
  .model-wrap {
    backdrop-filter: blur(32px);
  }
  .model-list{
    @media (min-width: 1440px) {
      width: 1190px;
    }
    @media (min-width: 1920px) {
      width: calc(1190/19.2*1vw);
    }
  }
  .tab-list {
    // width: 1.2rem;
    position: relative;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    .tab-item {
      transition: .3s all ease-in-out;
      white-space: nowrap;
      &:hover, &.active {
        @apply text-primary;
      }
      &.active {
        // font-family: font-miBold;
        font-family: "MiSansBold", sans-serif;
        // transform: scale(1.05);
        // transform-origin: 0 50%;
      }
    }

    @media (max-width: 768px) {
      scroll-behavior: smooth;
      &::after {
        content: '';
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 30px;
        pointer-events: none;
      }
    }
  }
  
  .model-item {
    opacity: 0;
    &.visible-item {
      opacity: 1;
    }
  }
  
  /* 自定义幅度较小的fadeInDown动画 */
  @keyframes fadeInDownSmall {
    from {
      opacity: 0;
      transform: translate3d(0, -10px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  
  .animate__fadeInDownSmall {
    animation-name: fadeInDownSmall;
  }
  
  @media screen and (max-width: 768px)  {
    .model-wrap { 
      backdrop-filter: none;
    }
  }
</style>