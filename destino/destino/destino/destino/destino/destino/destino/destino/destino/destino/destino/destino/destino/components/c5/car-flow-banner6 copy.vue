<template>
  <div class="pt-[0.6rem] pb-[0.6rem] px-[2.4rem] bg-[#080C13]" v-if="!isMobile">
    <div class="flex">
      <div class="relative group overflow-hidden animated-container">
          <BaseImg 
              src="c5/banner8_1.jpg" 
              class="w-[7.08rem] h-[10.8rem] object-cover group-hover:scale-110 duration-500"
          />
          <div class="absolute bottom-[0.6rem] px-[0.6rem] animated">
              <h1 class="text-white text-[0.24rem] animated-title">Sports seats</h1>
              <h5 class="mt-[0.16rem] leading-[1.5] text-[0.16rem] text-white animated-title">The sporty front seats are heated and ventilated and feature a variety of electrical adjustments for driver and passenger comfort.</h5>
          </div>
      </div>
      <div class="ml-[0.24rem]">
        <div class="relative group overflow-hidden animated-container">
          <BaseImg 
              src="c5/banner8_2.jpg" 
              class="w-[7.08rem] h-[5.28rem] object-cover group-hover:scale-110 duration-500"
          />
          <div class="absolute bottom-[0.6rem] px-[0.6rem] animated">
              <h1 class="text-white text-[0.24rem] animated-title">Exclusive UI</h1>
              <h5 class="mt-[0.16rem] leading-[1.5] text-[0.16rem] text-white animated-title">The sporty front seats are heated and ventilated and feature a variety of electrical adjustments for driver and passenger comfort.</h5>
          </div>
        </div>
        <div class="relative group overflow-hidden animated-container mt-[0.24rem]">
          <BaseImg 
              src="c5/banner8_3.jpg" 
              class="w-[7.08rem] h-[5.28rem] object-cover group-hover:scale-110 duration-500"
          />
          <div class="absolute bottom-[0.6rem] px-[0.6rem] animated">
              <h1 class="text-white text-[0.24rem] animated-title">Sony speaker</h1>
              <h5 class="mt-[0.16rem] leading-[1.5] text-[0.16rem] text-white animated-title">The sporty front seats are heated and ventilated and feature a variety of electrical adjustments for driver and passenger comfort.</h5>
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