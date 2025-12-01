<template>
   <div class="wrap_360" v-if="!isMobile">
        <!-- <iframe :src="dir+'/OMODAweb-360-new/index.html'" class="iframe" v-once scrolling="no"
            frameborder="0"></iframe> -->
        <!-- <iframe src="/OMODAweb-360-new/index.html" class="iframe" v-once scrolling="no"
            frameborder="0"></iframe> -->
        <div class="w-full h-full" v-if="isThirdScreenVisible">
          <iframe :src="props.url" class="iframe" v-once scrolling="no"
              frameborder="0"></iframe>
        </div>
    </div>
</template>
<script lang="ts" setup>
  import { ref, onMounted, onUnmounted  } from 'vue'
  import { throttle } from '~/utils/common'
  const props = defineProps({
    url: {
      type: String,
      default: ''
    }
  })
  const { isMobile } = useDeviceType()
  const dir = useRuntimeConfig().public.staticURL
  // https://oj-uat.omodaglobal.com/OMODAweb-360-new/index.html
  const isThirdScreenVisible = ref(false); // 控制第3屏的显示状态
  const handleScroll = () => {
    const screenHeight = window.innerHeight; // 屏幕高度
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // 当前滚动位置

    // 计算第3屏的起始和结束位置
    const thirdScreenStart = screenHeight; // 第2屏的起始位置
    const thirdScreenEnd = 2 * thirdScreenStart + screenHeight; // 第4屏的结束位置

    console.log(thirdScreenStart, 'thirdScreenStart=============');
    // 判断是否滚动到第3屏
    if (scrollTop >= thirdScreenStart && scrollTop < thirdScreenEnd) {
      isThirdScreenVisible.value = true; // 显示第3屏
    } else {
      isThirdScreenVisible.value = false; // 隐藏第3屏
    }
    console.log(isThirdScreenVisible.value, 'isThirdScreenVisible===================');
    
  }
  onMounted(() => {
    // window.addEventListener('scroll', throttle(handleScroll));
    window.addEventListener('scroll', handleScroll);
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  })
</script>
<style scoped>
  .wrap_360 {
        width: 100%;
        height: 100vh;
        padding-top: 56.25%;
        position: relative;
    }

    .wrap_360 .iframe {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border: none;
    }
</style>