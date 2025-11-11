<template>
  <div class="mt-[2.5rem] lg:mt-[1.6rem] px-[0.32rem] lg:px-[2.4rem] mb-[2.5rem] lg:mb-[1.6rem]">
    <tLtitle :titleContent="props.carFlowBanner"></tLtitle>
    <!-- flex-wrap lg:flex-nowrap -->
    <div class="flex flex-wrap lg:flex-nowrap lg:justify-evenly mt-[0.68rem] pt-[0.68rem] lg:mt-[0.64rem] lg:pt-[0.64rem] border-t-[1px] border-solid border-[#D0D3DB]">
      <div v-for="config in props.carFlowBanner.configList" :key="config.value" class="w-moblie">
        <CountToV2
            ref="countToRef"
            class="inline-block"
            :value="config.value"
            :label="config.label"
            :unit="config.unit"
            label-position="center"
            label-class="font-miLight lg:text-[#222] text-[0.24rem] leading-[0.29rem]"
            value-class="lg:h-[0.56rem] lg:leading-[0.56rem] text-[0.4rem]  mb-[0.16rem]"
            unit-class="lg:text-[0.32rem] contents"
          />
      </div>
      <div class="flex items-center justify-center relative w-full lg:w-[4.54rem] lg:mt-[0] mt-[0.4rem] lg:h-[auto]">
        <CountToV2
            class="inline-block"
            value="16"
            label=""
            unit="kWh/"
            label-position="center"
            label-class="font-miLight lg:text-[#222] text-[0.24rem] h-[0.29rem] lg:h-[0.16rem]"
            value-class="lg:h-[0.56rem] lg:leading-[0.56rem] text-[0.4rem] mb-[0.16rem]"
             unit-class="lg:text-[0.32rem] contents"
          />
          <CountToV2
            class="inline-block"
            value="100"
            label=""
            unit="kM"
            label-position="center"
            label-class="font-miLight lg:text-[#222] text-[0.24rem] h-[0.29rem] lg:h-[0.16rem]"
            value-class="lg:h-[0.56rem] lg:leading-[0.56rem] text-[0.4rem] mb-[0.16rem]"
            unit-class="lg:text-[0.32rem] contents"
          />
          <div class="font-miLight absolute bottom-[0] lg:text-[#222] text-[0.24rem] label leading-[0.29rem] lg:leading-[0.16rem] lg:text-[0.16rem] text-[#999]">ENERGY CONSUMPTION</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import tLtitle from '../common/title.vue'

  const props = defineProps({
    carFlowBanner: {
      type: Object,
      default: () => ({
        isTextWhite: '',
        title: '',
        subTitle: '',
        titleClassName: '',
        h5ClassName: '',
        configList: []
      })
    }
  })
</script>
<style scoped>
  .w-moblie {
    width: 4.54rem;
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