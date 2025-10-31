<template>
  <div  ref="targetElement"
   class="count-to inline-flex flex-col select-none w-max"
    :class="[labelPosition === 'center' ? 'items-center' : 'items-start']">
    <div v-if="flag" ref="valueRef" class="value-wrap flex font-miLight
        text-[0.48rem] leading-[0.48rem] h-[0.48rem] mb-[0.08rem]
        lg:leading-[0.48rem] lg:h-[0.48rem] lg:mb-[0.26rem]" :class="valueClass">
      <div class="value relative flex overflow-hidden h-full">
        <div class="duration-1000 ease-in-out inline-flex flex-col h-full text-center" v-for="(val, idx) in countList"
          :key="val" :style="{ transform: `translate(0px, ${transformList[idx]}px)`, marginRight: `${val == '1' ? '-10px' : 0}` }" :data-num="val">
          <span v-if="val == '0'"  class="inline-block leading-[inherit]">0</span>
          <template v-else>
            <div class="w-fit " v-for="i in (Number(val) + 1)" :key="i"
              :style="{ textAlign: i == 2 ? (idx == 0 ? 'right' : 'center') : 'center',height:`${transformUnitHeight}px`,  paddingRight: `${i == 2 ? '6px' : 0}` }">{{ i - 1 }}</div>
          </template>
        </div>
      </div>
      <div class="unit">{{ unit }}</div>
    </div>
    <div :class="labelClass" class="label text-[0.24rem] leading-[0.29rem] 
        lg:leading-[0.24rem] text-[#999]">{{ label }}</div>
  </div>
</template>

<script lang="ts" setup>

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
}
const props = withDefaults(
  defineProps<Props>(),
  {
    labelPosition: 'left'
  }
);
const countList = computed(() => props.value.split(''));
let transformUnit = 48.00;
const transformList = ref<number[]>([]);
const transformUnitHeight = ref(48.00);
const valueRef = ref<HTMLElement>();
const flag = ref(true);

// 创建 ref 来引用目标元素
const targetElement = ref(null);
// 创建响应式变量来记录元素是否可见
const isVisible = ref(false);

let observer: IntersectionObserver;
const initCount = () => {
  transformList.value = transformList.value.map(_ => 0);
}

const handleCountTo = () => {
  transformList.value = countList.value.map(count => {
    let num = Number(count);
    if (num === 0) {
      return 0;
    } else {
      transformUnit = transformUnit === 0 && valueRef.value ? valueRef.value.offsetHeight : transformUnit;
      console.log(transformUnit, 'transformUnit'+num );
      transformUnitHeight.value = Math.floor(transformUnit );
     return -transformUnitHeight.value * num;
    }
  });
}

const handleResizeUnitSize = () => {
  if (!valueRef.value) return;
  var oStyle = window.getComputedStyle(valueRef.value, null);
  transformUnit=parseFloat(oStyle.height);
  //console.log(valueRef.value.offsetHeight, '12123213')
  handleCountTo();
}

onMounted(() => {
  handleResizeUnitSize();
  initCount();
  // setTimeout(() => {
  //   handleCountTo();
  // }, 500);
  window.addEventListener('resize', handleResizeUnitSize);

  // 创建 IntersectionObserver 实例
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
       // isVisible.value = true; // 设置标志位为 true
        console.log("可见");
        //flag.value = true; // 设置标志位为 true
        handleNumCountTo();
       // observer.unobserve(entry.target); // 停止观察该元素
      }
    });
  }, { threshold: 0.5 });
  if (targetElement.value) {
    observer.observe(targetElement.value); // 开始观察目标元素
  }

})


const handleNumCountTo = () => {
  console.log('handleNumCountTo')
  initCount();
  flag.value = false;
 
  nextTick(() => {
    flag.value = true;
    console.log('触发数字动效');
    setTimeout(() => {
    handleCountTo();
  }, 500);
  })


 
}

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResizeUnitSize);
  // 在组件卸载前停止观察，避免内存泄漏
  if (observer) {
    observer.disconnect();
  }
})



</script>
<style scoped lang='scss'></style>