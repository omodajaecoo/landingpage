<template>
  <div class="car-trigger relative overflow-hidden cursor-none" ref="carTriggerRef">
    <div class="h-full relative">
      <BaseImg 
            src="360/j8/1_000.png" 
            class="h-full opacity-0 pointer-events-none" 
          />
      <canvas class="absolute left-0 top-0 w-full h-full canvas" ref="canvasRef"></canvas>
    </div>
    <!-- <canvas class="canvas" ref="canvasRef"></canvas> -->
    <!-- loading icon -->
    <div 
      class="hidden absolute top-0 left-0 w-full h-full " 
      :class="{block: loading}"
    >
      <div class="loading
        w-[0.5rem] h-[0.5rem] absolute top-1/2 left-1/2 z-100
        border-black border-solid border-2 border-t-transparent 
        rounded-[100%]
        animate-spin
      "></div>
    </div>
    <!-- 360 icon -->
    <BaseImg 
      class="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 w-[0.5rem]"
      :style="iconStyle"
      src="common/icon_360.png" 
    />
  </div>
</template>

<script lang="ts" setup>
  const baseUrl = '360/j8';
  const count = 60;

let urls: string[] = [];

for (let i = 0; i < count; i ++) {
  let cur = i < 10 ? `0${i}` : `${i}`;
  const url = `${baseUrl}/1_0${cur}.png`;
  urls.push(url);
}
const imgMap = new Map();

let loading = ref<boolean>(false);

const carTriggerRef = ref<HTMLElement>();
const canvasRef = ref<HTMLCanvasElement>();
let ctx: CanvasRenderingContext2D;

const config = useRuntimeConfig();
// 鼠标拖动事件
const { idx: curIdx } = useMouseDrag('.canvas', 3);

const pageX = ref(-999);
const pageY = ref(-999);
const iconStyle = computed(() => {
  const rect = carTriggerRef.value?.getBoundingClientRect();
  return {
    left: `${pageX.value - (rect?.x || 0)}px`,
    top: `${pageY.value - (rect?.y || 0)}px`
  }
})

watch(
  () => curIdx.value,
  (_) => handleRender()
)

onMounted(() => {
  handleImgInit();
  initCanvas();
  window.addEventListener('mousemove', evt => {
    pageX.value = evt.clientX;
    pageY.value = evt.clientY;
  })
})

// init canvas
const initCanvas = () => {
  if (!carTriggerRef.value || !canvasRef.value) return;

  const width = carTriggerRef.value.offsetWidth;
  const height = carTriggerRef.value.offsetHeight;
  canvasRef.value.width = width;
  canvasRef.value.height = height;
  ctx = canvasRef.value.getContext('2d')!;
}

// 初始化加载所有图片
const handleImgInit = () => {
  loading.value = true;
  urls.forEach((url, idx, arr) => {
    const img = new Image();
    img.src = `${config.public.staticURL}/images/${url}`;
    img.onload = () => {
      imgMap.set(idx, img);
      if (imgMap.size === arr.length) {
        loading.value = false;
        handleRender();
        
      }
    }
  })
}

const handleRender = () => {
  if (!ctx) return;
  const { width, height } = canvasRef.value!;
  ctx.clearRect(0, 0, width, height);
  let img = imgMap.get(curIdx.value || 0);
  
  // 计算图像绘制位置和尺寸
  const imgWidth = img.width;
  const imgHeight = img.height;
  const aspectRatio = imgWidth / imgHeight;
  const canvasAspectRatio = width / height;

  let drawWidth, drawHeight;
  if (canvasAspectRatio > aspectRatio) {
    drawHeight = height;
    drawWidth = height * aspectRatio;
  } else {
    drawWidth = width;
    drawHeight = width / aspectRatio;
  }

  const x = (width - drawWidth) / 2;
  const y = (height - drawHeight) / 2;

  ctx.drawImage(img, x, y, drawWidth, drawHeight); // 使用计算后的宽高绘制图像
}
</script>
<style scoped lang='scss'>
  .loading {
    translate: -50% -50%;
  }
</style>