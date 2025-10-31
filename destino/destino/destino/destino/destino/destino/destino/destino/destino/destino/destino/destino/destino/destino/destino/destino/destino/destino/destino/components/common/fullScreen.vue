<template>
  <el-dialog
    v-model="props.videoDialog.visible"
    width="100%"
    title=""
    foot="null"
    class="full-screen"
    :fullscreen="true"
    :close="handleClose"
  >
    <div class="w-full h-[94vh] lg:h-full flex justify-center items-center pt-[0.5rem]">
      <video class='w-full lg:w-[96%] h-1/3 lg:h-[88vh] object-none' autoplay controls :poster="isMobile ? `${videoImg}_mobile.jpg` : `${videoImg}.jpg`">
        <source :src="videoUrl" type="video/mp4">
      </video>
    </div>
  </el-dialog>
</template>
<script lang="ts" setup>
  import { onMounted } from 'vue'
  const  props = defineProps({
    videoDialog: {
      type: Object,
      default: () => ({
        visible: false
      })
    },
    content: {
        type: Object,
        default: () => ({
            img: '',
            fullScreenUrl: ''
        })
    }
  })
  const { isMobile } = useDeviceType()
  const config = useRuntimeConfig()
  const videoUrl = computed(() => `${config.public.staticURL}/images/${props.content?.fullScreenUrl}`)
  const videoImg = computed(() => `${config.public.staticURL}/images/${props.content?.img}`)
  const handleClose = () => {
    props.videoDialog.visible = false
  }
  onMounted(() => {
    console.log(videoUrl.value, 'videoUrl==============')
  })
</script>
<style>
  .full-screen {
    background: rgba(0,0,0,0.8) !important;
  }
  .full-screen .el-dialog__headerbtn .el-dialog__close {
    font-size: 0.38rem;
  }
  .full-screen .el-dialog__headerbtn {
    right: 0.1rem;
    top: 0.1rem;
  }
  /* .full-screen .el-dialog__body {
    width: 100%;
    height: 98%;
  } */
  .border-screen {
    border: 1px solid red;
  }
</style>