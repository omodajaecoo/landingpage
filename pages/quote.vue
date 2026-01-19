<template>
  <div class="flex flex-col items-center w-full pt-[60px] sm:pt-0 bg-[#0D0E0E]">
    <EmbededForm 
      :url="URL_FORM"
      container-class="w-full flex justify-center px-[10px] pt-[30px] pb-[40px] sm:px-[30px] sm:pt-[100px] bg-gradient-to-b from-[#0D0E0E] to-[#67B0C4]"
      iframe-class="rounded-[8px] lg:w-[80%] max-w-[1200px] shadow-lg"
    />
  </div>
</template>

<script lang="ts" setup>
const URL_FORM = 'https://ayas-formweb-prd.powerappsportals.com/tools/omoda-jaecoo/form-quote-general';

</script>
<style lang='scss'>
#layout-quote {
  font-size: 16px;
  line-height: 21px;
  color: #222222;
}

iframe{
  height: 100vh;
  width: 100vw
}

iframe::-webkit-scrollbar {
  display: none;
}

</style>