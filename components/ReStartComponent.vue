/**
 * 当组件可见时 通过 v-if 控制组件重新渲染
 */
<template>
    <div 
    ref="targetElement"
    v-if="flag"
   >
   <slot></slot>
    </div>
</template>

<script lang="ts" setup>

const flag = ref(true);

// 创建 ref 来引用目标元素
const targetElement = ref(null);
// 创建响应式变量来记录元素是否可见
const isVisible = ref(false);

let observer: IntersectionObserver;

onMounted(() => {

nextTick(()=>{
// 创建 IntersectionObserver 实例
observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting &&!isVisible.value) {
      isVisible.value = true; // 设置标志位为 true
      //flag.value = true; // 设置标志位为 true
      handleNumCountTo();
      observer.unobserve(entry.target); // 停止观察该元素
    }
  });
  }, { threshold: 0.5 });
  if (targetElement.value) {
    observer.observe(targetElement.value); // 开始观察目标元素
  }
});

});

onBeforeUnmount(() => {
  // 在组件卸载前停止观察，避免内存泄漏
  if (observer) {
    observer.disconnect();
  }
});

const handleNumCountTo = () => {
    flag.value = false;
    nextTick(() => {
      flag.value = true;
    })
  }


</script>

