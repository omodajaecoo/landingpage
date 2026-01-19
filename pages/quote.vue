<template>
  <div class="min-h-screen flex flex-col bg-[#0D0E0E]">
    <!-- Header si existe -->
    <!-- <Header /> -->

    <div class="flex-1 flex">
      <EmbededForm
        class="flex-1"
        :url="URL_FORM"
        container-class="flex-1 flex justify-center px-[10px] pt-[30px] pb-[40px] sm:px-[30px] sm:pt-[100px] bg-gradient-to-b from-[#0D0E0E] to-[#67B0C4]"
        iframe-class="rounded-[8px] w-full lg:w-[80%] max-w-[1200px] shadow-lg"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const URL_FORM = 'https://ayas-formweb-prd.powerappsportals.com/tools/omoda-jaecoo/form-quote-general';
</script>