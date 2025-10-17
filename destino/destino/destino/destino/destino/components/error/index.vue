<template>
     <div class="pt-[4.09rem] lg:pt-[2.06rem] px-[0.62rem] flex flex-col justify-center items-center">
        <BaseImg 
            :src="isMobile ?`${props.content.img}_mobile.png` : `${props.content.img}.png`"
            class="not-found-img"
        />
        <h5 class="hidden lg:block text-[0.16rem] text-[#333] MiSansNormal leading-[0.25rem]">{{props.content.title}}</h5>
        <BaseButton 
            type="text" 
            class="!px-[0] !py-[0] w-[1.45rem] h-[0.54rem] leading-[0.54rem] lg:w-[1.5rem] lg:h-[0.49rem] lg:leading-[0.49rem] !text-[#222] text-[0.2rem] lg:text-[0.16rem] mt-[1.37rem] lg:mt-[0.8rem] text-center cursor-pointer btn-border"
            @click="goBack"
        >BACK</BaseButton>
     </div>
</template>
<script setup>
  import { onMounted,  onBeforeUnmount} from 'vue';
  import { useHeaderStore } from '~/stores/useHeader';
  import useDeviceType from '~/composables/useDeviceType';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const store = useHeaderStore();
  const { currentPath } = storeToRefs(store);
  const { isMobile } = useDeviceType();
  const props = defineProps({
    content:{
      type: Object,
      default: () => ({
        img: '',
        title:''
      })
    }
  })

  const goBack = () => {
    const currentPath2 =  sessionStorage.getItem('currentPath');
    console.log(currentPath, 'currentPath',currentPath2);
    
    // window.history.go(-1);
    if(currentPath2) {
      router.push({
        path: currentPath2
      });
    } else {
      router.push({
        path: '/'
      });
    }
  }
</script>

<style lang="scss" scoped>
    .not-found-img {
      width: 4.48rem;
      height: 2.72rem;
      margin: 0 auto;
    }
    .btn-border {
      border: 1px solid #222 !important;
    }
    @media (max-width: 1024px) {
      .not-found-img {
        height: 3.8rem;
        width: 100%;
      }
    }
</style>