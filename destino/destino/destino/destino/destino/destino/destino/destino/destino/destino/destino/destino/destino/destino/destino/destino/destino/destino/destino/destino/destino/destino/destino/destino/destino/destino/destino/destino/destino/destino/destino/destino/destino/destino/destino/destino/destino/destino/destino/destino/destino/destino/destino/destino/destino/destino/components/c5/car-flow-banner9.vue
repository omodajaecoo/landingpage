<template>
  <div class="mt-[2.5rem] lg:mt-[1.6rem] px-[0.32rem] lg:px-[2.4rem] pb-[1.06rem] lg:pb-[1.6rem]">
    <tLtitle :titleContent="content"></tLtitle>
  </div>
</template>
<script lang="ts" setup>
  import tLtitle from '../common/title.vue'
  const content = {
    isTextWhite: false,
    title: 'SMART TECHNOLOGIES',
    subTitle: 'The tech interior of the new OMODA has many advanced features: 2 high-resolution dual screens of 10.25" each, multi-color atmospheric interior lighting, wireless charging, high-quality acoustics and much more.',
    titleClassName: '!text-[#222]',
    h5ClassName: '!text-[#222] lg:w-[10.15rem]',
  }
</script>