<template>
  <div class="mt-[2.5rem] lg:mt-[1.6rem] px-[0.32rem] lg:px-[2.4rem] mb-[2.5rem] lg:mb-[1.6rem]">
    <tLtitle :titleContent="content"></tLtitle>
    <!-- flex-wrap lg:flex-nowrap -->
    <div class="flex flex-wrap lg:flex-nowrap lg:justify-evenly mt-[0.68rem] pt-[0.68rem] lg:mt-[0.64rem] lg:pt-[0.64rem] border-t-[1px] border-solid border-[#D0D3DB]">
      <div v-for="config in configList" :key="config.value" class="w-moblie">
        <CountToV2
            ref="countToRef"
            class="inline-block"
            :value="config.value"
            :label="config.label"
            :unit="config.unit"
            :label-position="isMobile ? 'center' : 'center'"
            label-class="!text-[#222] text-[0.24rem] lg:text-[0.16rem] font-miLight"
            value-class="lg:h-[0.8rem] lg:leading-[0.8rem] text-[0.48rem] lg:text-[0.4rem]"
          />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import tLtitle from '../common/title.vue'
  import CountTo from '../CountTo.vue'
  import { debunce } from '~/utils/common'

  const { isMobile } = useDeviceType();

  const content = {
    isTextWhite: false,
    title: 'DYNAMICS AND SAFETY',
    subTitle: 'The synergy of the efficient 1.6Turbo engine and CVT ensures excellent driving dynamics and comfort. The engine is paired with a reliable and durable gearbox, equipped with a Honeywell turbocharger and DWVT technology.',
    titleClassName: '!text-[#222]',
    h5ClassName: '!text-[#222] lg:w-[10.15rem]',
  }
  const configList = [
    {
      label: 'Power, hp',
      value: '147',
      unit: ''
    },
    {
      label: 'Torque, Nm',
      value: '210',
      unit: ''
    },
    {
      label: 'Acceleration to 100 km/h, sec',
      value: '10',
      unit: ''
    },
    {
      label: 'Fuel consumption, 1/100km',
      value: '7',
      unit: ''
    },
  ]
  const countToRef = ref()
  const c5ClassName = {
    numberClass: 'lg:h-[0.8rem] lg:leading-[0.8rem] text-[0.48rem] lg:text-[0.6rem]',
    labelClass: 'lg:text-[#222] text-[0.24rem] lg:text-[0.16rem]',
    c5CountToWrap: 'items-center lg:items-start'
  }
</script>
<style scoped>
  .w-moblie {
    width: 3.3rem;
    text-align: center;
  }
  @media (max-width: 1024px) {
    .w-moblie {
      width: 50%;
      /* text-align: center;
       */
       display: flex;
       justify-content: center;
       align-items: center;
    }
    .w-moblie:nth-child(3), .w-moblie:last-child{
      margin-top: 0.4rem;
    }
  }
</style>