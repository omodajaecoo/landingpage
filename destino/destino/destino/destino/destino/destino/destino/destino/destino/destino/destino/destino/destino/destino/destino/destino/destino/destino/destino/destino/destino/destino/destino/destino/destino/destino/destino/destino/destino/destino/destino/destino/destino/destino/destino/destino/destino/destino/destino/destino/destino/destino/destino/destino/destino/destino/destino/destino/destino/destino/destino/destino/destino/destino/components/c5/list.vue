<template>
  <div class="mt-[2.08rem] pb-[1.28rem] px-[0.32rem]" :class="props.listClassNames">
      <div v-for="(item, index) in props.mobileBanner" :key="index" class="mt-[0.32rem] first:mt-[0]">
        <BaseImg 
            :src="`${item.imgUrl}_mobile.jpg`" 
            class="w-full h-[3.85rem] object-cover"
        />
        <h1 class="text-[0.32rem] text-[#222] mt-[0.24rem]">{{item.title}}</h1>
        <h5 class="text-[#999] text-[0.28rem] leading-[1.5] mt-[0.12rem]">{{item.desc}}</h5>
      </div>
  </div>
</template>
<script lang="ts" setup>
  const props = defineProps({
    mobileBanner: {
      type: Array,
      default: () => ([])
    },
    listClassNames: {
      type: String,
      default: ''
    }
  })
</script>
