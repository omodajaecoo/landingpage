<template>
   <CommonFullArticle :content="banner2Content" ref="banner2" ext="webp">
    <template v-slot:bottomSlot>
      <BaseButton 
        type="text" 
        class="text-[16px] px-[12px] py-[12px] md:py-[16px] md:px-[20px] md:text-[20px] lg:py-[25px] lg:px-[20px]"
        @click="focusLeadForm"
      >Deja tus datos aquí</BaseButton>
    </template>
  </CommonFullArticle>

  <!-- Section: Propuesta de valor -->
  <HomeValueBanner />

  <!-- Section: Autos -->
  <HomeCarsBanner :LP="true"/>

  <!-- Section: Beneficios -->
  <HomeBenefitsBanner/>

  <HomeFormInfo />
  <HomeLeadForm ref="leadFormRef" id="leadform"/>
  
</template>

<script lang="ts" setup>



const banner2Content = ref({
  isTextWhite: false,
  img: 'index/LP/banner',
  h5ClassName: 'lg:w-[10.25rem] lg:text-[#fff] banner2-space',
  fullArticleClass: 'enlarge',
  titleContentClass: '!pb-[70px] md:!pb-[86px] lg:!pb-[120px] !pt-0 md:!pt-0 lg:!pt-0',
  type: 'video',
  videoUrl: 'index/LP/banner.webm',
})




const leadFormRef = ref();
const focusLeadForm = () => {
  const el = leadFormRef.value?.root || null;
  if (el && typeof el.scrollIntoView === 'function') {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const input = el.querySelector('input,select,textarea,button');
    if (input) input.focus();
  }
};

</script>
<style scoped lang='scss'>
</style>