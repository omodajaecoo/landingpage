<template>
   <CommonFullArticle :content="banner2Content" ref="banner2">
    <template v-slot:bottomSlot>
      <BaseButton 
        type="text" 
        class="lg:py-[0.1rem] lg:px-[0.2rem] lg:text-[0.14rem] text-[0.28rem] px-[0.2rem] py-[0.14rem]"
        @click="focusLeadForm"
      >Deja tus datos aquí</BaseButton>
    </template>
  </CommonFullArticle>

  <!-- Section: Propuesta de valor -->
  <HomeValueBanner />

  <!-- Section: Autos -->
  <HomeCarsBanner />

  
  <HomeBenefitsBanner/>

  <HomeFormInfo />
  <HomeLeadForm ref="leadFormRef" id="leadform"/>
  
</template>

<script lang="ts" setup>



const banner2Content = ref({
  isTextWhite: false,
  img: 'index/newbanner',
  h5ClassName: 'lg:w-[10.25rem] lg:text-[#fff] banner2-space',
  fullArticleClass: 'enlarge',
  type: 'video',
  videoUrl: 'index/video/newlpvideo.mp4',
})




const leadFormRef = ref();
const focusLeadForm = () => {
  const el = leadFormRef.value?.$el || leadFormRef.value?.$refs?.root || null;
  if (el && typeof el.scrollIntoView === 'function') {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const input = el.querySelector('input,select,textarea,button');
    if (input) input.focus();
  }
};

</script>
<style scoped lang='scss'>
</style>