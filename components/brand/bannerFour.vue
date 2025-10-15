<template>
    <div class="pt-[1rem] flex flex-col lg:flex-row justify-center lg:h-[6.23rem] px-[0.32rem] lg:px-[2.4rem] lg:gap-[0.24rem] pb-[1rem] lg:pb-[0]">
        <div class="lg:mr-[0] lg:flex-1 first:mt-[0] mt-[0.32rem] lg:mt-[0]" v-for="item in props.content">
            <div class="group overflow-hidden">
                <BaseImg 
                    :src="item.img" 
                    class="w-full h-auto lg:h-[75%] object-cover group-hover:scale-110 duration-500"
                />
            </div>
            <h5 class="text-[#222222] text-[0.32rem] lg:text-[0.18rem] pt-[0.24rem]">{{item.title}}</h5>
            <h5 class="text-[#999999] text-[0.24rem] lg:text-[0.16rem] mt-[0.06rem]">{{item.subtitle}}</h5>
        </div>
    </div>
</template>
<script lang="ts" setup>
    const props = defineProps({
        content: {
            type: Array,
            default: () => ([])
        }
    })
</script>
