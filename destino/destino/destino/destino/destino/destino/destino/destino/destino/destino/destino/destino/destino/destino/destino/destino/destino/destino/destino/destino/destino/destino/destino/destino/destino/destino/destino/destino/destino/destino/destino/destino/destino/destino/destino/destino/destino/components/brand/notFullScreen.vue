<template>
    <div class="min-h-[100vh] lg:h-[auto] next-module">
        <div class="flex flex-col items-center pt-[3rem] lg:pt-[1rem]">
            <tLtitle :titleContent="props.bannerContent"></tLtitle>
            <div class="mt-[1.45rem] lg:mt-[1rem] w-[6.84rem] lg:w-full lg:px-[2.4rem] lg:mb-[1rem]">
                <BaseImg 
                    :src="isMobile ?`${props.bannerContent.img}_mobile.jpg` : `${props.bannerContent.img}.jpg`" 
                    class="object-cover h-[4.06rem] lg:h-auto w-full"
                    :style="{'aspect-ratio': isMobile ? '1300/769': 'auto'}"
                />
            </div>
        </div>
    </div>
    
</template>
<script lang="ts" setup>
    import { ref, onMounted } from 'vue'
    import tLtitle from '../common/title.vue'
    import { isMobileDevice } from '../../utils/common/index'
    const props = defineProps({
        bannerContent: {
            type: Object,
            default: () => ({
                isTextWhite: false,
                title: '',
                subTitle: '',
                h5ClassName: false,
                className: false,
                img: ''
            })
        }
    })
    const isMobile = ref(false)
    onMounted(() => {
        isMobile.value = isMobileDevice()
    })
</script>