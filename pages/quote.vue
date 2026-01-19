<template>
  <div class="min-h-full flex flex-col bg-[#0D0E0E]">
    <EmbededForm
      class="flex-1"
      :url="URL_FORM"
      container-class="`flex-1 flex justify-center px-[10px] pt-[100px] pb-[40px] sm:px-[30px] bg-gradient-to-b from-[#0D0E0E] to-[#67B0C4]`"
      :iframe-class="`rounded-[8px] w-full lg:w-[80%] max-w-[1200px] shadow-lg ${breakpoints}`" loading="eager"
    />
  </div>
</template>

<script lang="ts" setup>
const URL_FORM = 'https://ayas-formweb-prd.powerappsportals.com/tools/omoda-jaecoo/form-quote-general';
const breakpoints = "h-[2050px] min-[390px]:h-[2020px] min-[501px]:h-[1740px] min-[596px]:h-[2050px] min-[828px]:h-[1600px] min-[1024px]:h-[1650px]";

</script>
<style lang='scss'>
#layout-quote {
  font-size: 16px;
  line-height: 21px;
  color: #222222;
}
</style>