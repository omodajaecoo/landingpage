<template>
  <div class="flex flex-col items-center w-full pt-[60px] sm:pt-0 bg-[#0D0E0E]">
    <HomeFormInfo />
    <HomeLeadForm ref="leadFormRef" id="leadform"/>
  </div>
</template>

<script lang="ts" setup>

const leadFormRef = ref();


</script>
<style lang='scss'>
#layout-quote {
  font-size: 16px;
  line-height: 21px;
  color: #222222;
}
</style>