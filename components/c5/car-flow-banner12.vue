<template>
  <div class="mt-[1rem] lg:mt-[1.6rem] mb-[1.02rem] lg:mb-[1.2rem] px-[0.32rem] lg:px-[0]">
    <tLtitle :titleContent="content"></tLtitle>
    <div class="grid-layout mt-[0.24rem] lg:mt-[0.7rem]">
      <div class="grid-item group overflow-hidden animated-container" :class="!isMobile && index % 5 == 0? 'span-2' : (isMobile ? 'span-22' : 'span-4')" v-for="(item, index) in banner12Content">
        <BaseImg
            :src="isMobile ?`${item}_mobile.jpg` : `${item}.jpg`" 
            class="w-full h-full object-cover group-hover:scale-110 duration-500"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import tLtitle from '../common/title.vue'
  const content = {
    isTextWhite: false,
    title: 'WONDERFUL ATLAS',
    titleClassName: '!text-[#222]',
  }
  const banner12Content = ['c5/banner12_1','c5/banner12_2','c5/banner12_3','c5/banner12_4','c5/banner12_5']
  const { isMobile } = useDeviceType()
</script>
<style scoped lang="scss">
  .grid-layout {
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* 定义两列，每列占一半宽度 */
        grid-template-rows: repeat(2, 1fr); /* 定义两行，每行占一半高度 */
        gap: 0.24rem; /* 网格项之间的间隔 */
    }

    .grid-item {
        position: relative;
        box-sizing: border-box;
    }

    .span-2 {
        grid-column-end: span 1;
        grid-row-end: span 2;
    }
    .span-22 {
      grid-column-end: span 2;
      grid-row-end: span 2;
    }

    .span-4 {
        grid-column-end: span 1;
        grid-row-end: span 1;
    }
</style>
<style scoped lang="scss">
  @media (max-width: 1024px) {
    .grid-layout {
      gap: 0.32rem;
    }
  }
</style>