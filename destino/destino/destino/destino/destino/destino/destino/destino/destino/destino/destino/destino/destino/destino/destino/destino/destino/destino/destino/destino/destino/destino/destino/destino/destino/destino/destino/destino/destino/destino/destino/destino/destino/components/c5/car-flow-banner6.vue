<template>
  <div class="pt-[1.45rem] pb-[1.2rem] px-[2.4rem] bg-[#080C13] mt-[-1px]" v-if="!isMobile">
    <div class="flex">
      <div class="relative group overflow-hidden">
          <BaseImg 
              src="c5/banner8_1.jpg" 
              class="w-[7.08rem] h-[8.8rem] object-cover group-hover:scale-110 duration-500"
          />
          <div class="absolute bottom-[0.24rem] px-[0.24rem] lg:transition-all">
              <h1 class="text-white text-[0.24rem] lg:text-[0.16rem] lg:leading-[0.16rem]">Sports seats</h1>
              <h5 class="mt-0 group-hover:mt-[0.16rem] leading-[1.5] text-[0.16rem] text-white lg:text-white/70 lg:opacity-0 lg:max-h-0 lg:overflow-hidden lg:group-hover:opacity-100 lg:group-hover:max-h-[0.42rem] lg:transition-all lg:duration-300">The sporty front seats are heated and ventilated and feature a variety of electrical adjustments for driver and passenger comfort.</h5>
          </div>
      </div>
      <div class="ml-[0.24rem]">
        <div class="relative group overflow-hidden">
          <BaseImg 
              src="c5/banner8_2.jpg" 
              class="w-[7.08rem] h-[4.28rem] object-cover group-hover:scale-110 duration-500"
          />
          <div class="absolute bottom-[0.24rem] px-[0.24rem] lg:transition-all">
              <h1 class="text-white text-[0.24rem] lg:text-[0.16rem] lg:leading-[0.16rem]">Exclusive UI</h1>
              <h5 class="mt-0 group-hover:mt-[0.16rem] leading-[1.5] text-[0.16rem] lg:text-[0.14rem] text-white lg:text-white/70 lg:opacity-0 lg:max-h-0 lg:overflow-hidden lg:group-hover:opacity-100 lg:group-hover:max-h-[0.42rem] lg:transition-all lg:duration-300">The sporty front seats are heated and ventilated and feature a variety of electrical adjustments for driver and passenger comfort.</h5>
          </div>
        </div>
        <div class="relative group overflow-hidden mt-[0.24rem]">
          <BaseImg 
              src="c5/banner8_3.jpg" 
              class="w-[7.08rem] h-[4.28rem] object-cover group-hover:scale-110 duration-500"
          />
          <div class="absolute bottom-[0.24rem] px-[0.24rem] lg:transition-all">
              <h1 class="text-white text-[0.24rem] lg:text-[0.16rem] lg:leading-[0.16rem]">Sony speaker</h1>
              <h5 class="mt-0 group-hover:mt-[0.16rem] leading-[1.5] text-[0.16rem] lg:text-[0.14rem] text-white lg:text-white/70 lg:opacity-0 lg:max-h-0 lg:overflow-hidden lg:group-hover:opacity-100 lg:group-hover:max-h-[0.42rem] lg:transition-all lg:duration-300">The sporty front seats are heated and ventilated and feature a variety of electrical adjustments for driver and passenger comfort.</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <mobileList :mobileBanner="mobileBanner" v-else></mobileList>
</template>
<script lang="ts" setup>
  import { onMounted } from 'vue'
  import { isMobileDevice, carFlowAnimation } from '~/utils/common/index'
  import mobileList from './list'
  const { isMobile } = useDeviceType();
  const mobileBanner = [{
    imgUrl: 'c5/banner8_1',
    title: 'Sports seats',
    desc: 'The sporty front seats are heated and ventilated and feature a variety of electrical adjustments for driver and passenger comfort.'
  },{
    imgUrl: 'c5/banner8_2',
    title: 'Exclusive UI',
    desc: 'It boasts the design that resembles the aurora, making it even more trendy and dazzling'
  },{
    imgUrl: 'c5/banner8_3',
    title: 'Sony speaker',
    desc: 'The sporty front seats are heated and ventilated and feature a variety of electrical adjustments for driver and passenger comfort.'
  }]
  onMounted(() => {
    // carFlowAnimation()
  })
</script>