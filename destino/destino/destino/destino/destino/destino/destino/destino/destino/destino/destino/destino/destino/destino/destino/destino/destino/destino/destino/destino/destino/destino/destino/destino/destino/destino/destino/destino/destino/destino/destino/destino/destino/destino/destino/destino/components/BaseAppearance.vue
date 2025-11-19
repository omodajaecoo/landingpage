<template>
  <div class="h-full w-full relative">
    <canvas id="canvas" class="w-full h-full"></canvas>
    <!-- <div class="mask absolute top-0 left-0 w-full h-full"></div> -->
  </div>
</template>

<script lang="ts" setup>
  let inst: any;
  let canvasEl: HTMLCanvasElement;

  defineOptions({
    name: 'BaseAppearance'
  })

  onMounted(() => {
    canvasEl = document.querySelector('#canvas')!;
    initCanvas();
    document.addEventListener('wheel', onScroll, false);
    document.addEventListener('mousemove', onMouse, false);
  })

  onBeforeUnmount(() => {
    document.removeEventListener('wheel', onScroll, false);
    document.removeEventListener('mousemove', onMouse, false);
  })

  const onScroll = () => {
    if (!canvasEl.parentElement) return;
    canvasEl.parentElement.style.pointerEvents = 'none';
  }

  const onMouse = () => {
    if (!canvasEl.parentElement) return;
    canvasEl.parentElement.style.pointerEvents = 'auto';
  }

  const initCanvas = () => {
    // @ts-ignore
    createUnityInstance(canvasEl, {
      arguments: [],
      dataUrl: "unity/Build/eb3b9687356dcd46f87438f6d6d2fb1e.data.unityweb",
      frameworkUrl: "unity/Build/ae23ceba763a9416b2239b38f533ffb8.framework.js.unityweb",
      codeUrl: "unity/Build/a216c7790814cb977bf58dce1cb9fc80.wasm.unityweb",
      streamingAssetsUrl: "unity/StreamingAssets",
      companyName: "Chery",
      productName: "OJ",
      productVersion: "0.1",
      // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
      // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
    }).then((instance: any)=>{
      inst = instance;
    });
  }

  const setColor = (index: number) => {
    if (!inst) return;
    const data = { index };
    const messageData = {
      id: 3,
      message: JSON.stringify(data)
    };
    inst.SendMessage("PlatformMessager", "JsonReceiver", JSON.stringify(messageData));
  }

  defineExpose({
    setColor
  })
</script>
<style scoped lang='scss'>
</style>