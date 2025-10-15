<template>
  <div ref="targetElement" class="count-to inline-flex flex-col select-none" :class="[labelPosition === 'center' ? 'items-center' : 'items-start']">
    <div v-if="flag" class="relative value-wrap flex font-miLight text-[0.48rem] leading-[0.56rem] h-[0.56rem] mb-[0.1rem]
        lg:leading-[0.4rem] lg:h-[0.4rem]" :class="valueClass">
      <div class="number-container" :style="{ width: `${maxWidth}ch` }">
        <count-to class="block text-right tabular-nums" separator="" :startVal="0" :endVal="parseInt(props.value)" :duration="1000">
        </count-to>
      </div>
      <div :class="unitClass" class="unit">{{ unit }}</div>
    </div>
    <div :class="labelClass" class="label text-[0.22rem] lg:text-[0.16rem] leading-[0.3rem] lg:leading-[0.16rem] text-[#999]">
      <template v-if="labelClass?.split(' ').some(item => item.includes('relative'))">
        <span class="absolute left-0 w-max"> {{ label }}</span>
      </template>
      <template v-else>
        {{ label }}
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import {CountTo} from 'vue3-count-to';

interface IC5ClassName {
  numberClass: string;
  labelClass: string;
  c5CountToWrap: string;
}
interface Props {
  value: string;
  label: string;
  unit: string;
  labelPosition?: 'left' | 'center';
  labelClass?: string;
  valueClass?: string;
  unitClass?:string
  once?: boolean
}
const props = withDefaults(
  defineProps<Props>(),
  {
    labelPosition: 'left',
    once: true
  }
);

// 计算最大宽度（数字的字符数）
const maxWidth = computed(() => {
  const numStr = props.value.toString();
  return numStr.length;
});

const flag = ref(false);

// 创建 ref 来引用目标元素
const targetElement = ref(null);

let observer: IntersectionObserver;

onMounted(() => {
  // 其他初始化逻辑...

  // 创建 IntersectionObserver 实例
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("可见");
        flag.value = true; // 设置标志位为 true
      } else if(!props.once && flag.value) {
        flag.value = false
      }
    });
  }, { threshold: 0.5 });
  if (targetElement.value) {
    observer.observe(targetElement.value); // 开始观察目标元素
  }
})

onBeforeUnmount(() => {
  // 清理逻辑...

  // 在组件卸载前停止观察，避免内存泄漏
  if (observer) {
    observer.disconnect();
  }
})

</script>
<style scoped lang='scss'></style>