<template>
  <div class="mt-[2rem] lg:mt-[1.45rem] lg:px-[2.4rem] lg:mb-[1.2rem]">
    <CommonTitle :titleContent="content"></CommonTitle>
    <div class="mt-[0.24rem] lg:mt-[0.58rem] overflow-hidden" v-if="!isMobile">
      <div class="relative group overflow-hidden animated-container w-full" v-for="(item,index) in carFlowBanner" :key="index" :class="[index == 1 ? 'left-float mt-[0.24rem] mr-[0.24rem] !w-[58%]' : (index == 2 ? 'left-float mt-[0.24rem] third-img' : '')]">
          <BaseImg 
              :src="`${item.imgUrl}.jpg`"
              class="w-full h-[6.28rem] object-cover group-hover:scale-110 duration-500"
              :class="[index == 0 ? 'h-[8.1rem]' : (index == 1? 'h-[6.28rem]' : 'h-[6.28rem]')]"
          />
          <div class="absolute bottom-[0.24rem] pl-[0.4rem] pr-[0.8rem] lg:px-[0.24rem] lg:transition-all" >
              <h1 class="text-white text-[0.24rem] lg:text-[0.16rem] lg:leading-[0.16rem]">{{ item.title }}</h1>
              <h5 class="mt-[0.16rem] leading-[1.5] text-[0.16rem] lg:text-[0.14rem] text-white lg:text-white/70 lg:mt-0 lg:group-hover:mt-[0.16rem] lg:opacity-0 lg:max-h-0 lg:overflow-hidden lg:group-hover:opacity-100 lg:group-hover:max-h-[0.42rem] lg:transition-all lg:duration-300">{{item.desc}}</h5>
          </div>
      </div>
    </div>
    <C5List :mobileBanner="carFlowBanner" :listClassNames="listClassNames" v-else></C5List>
  </div>
</template>
<script lang="ts" setup>
  import { onMounted } from 'vue'
  import { carFlowAnimation } from '~/utils/common/index'
  const props = defineProps({
    carFlowBanner : {
      type: Object,
      default: () => ({
        imgUrl: '',
        title: '',
        desc: ''
      })
    }
  })
  const content = {
    isTextWhite: false,
    title: 'Appearance details',
    titleClassName: '!text-[#222]',
  }
  const { isMobile } = useDeviceType()
  const listClassNames = "!mt-[0.24rem] !pb-[1.6rem]"
  onMounted(() => {
    carFlowAnimation()
  })
</script>
<style scoped lang="scss">
  .left-float {
    float: left;
  }
  .third-img {
    width: calc(42% - 0.24rem) !important;
  }
</style>