<template>
  <div class="page-wrap">
    <div 
      class="line" 
      ref="lineRef" 
      v-for="(i, idx) in length" 
      :key="i"
      @click="handleChange(idx)"
    ></div>
    <div class="active-line" :style="pageLeft"></div>
  </div>
</template>

<script lang="ts" setup>

const props = withDefaults(defineProps<{ 
  length: number;
  activeIndex: number;
}>(), {
  activeIndex: 0
})

const emit = defineEmits([
  'change'
])

const lineRef = ref();

const pageLeft = computed(() => {
	if (!lineRef.value) {
		return { left: '0px' }
	}

	const lineEl = lineRef.value[props.activeIndex];
	const left = lineEl?.offsetLeft || 0;
	return { left: left + 'px' };
})

const handleChange = (idx) => {
  // const nextIndex = props.activeIndex + 1 >= props.length ? 0 : props.activeIndex + 1;
  emit('change', idx);
}
</script>

<style lang="scss" scoped>
.page-wrap {
  position: relative;
  display: flex;

  .line,
  .active-line {
    height: .2083vw;
    width: 2.6042vw;
  }

  .line {
    margin-right: .625vw;
    background: rgba($color: #fff, $alpha: 0.5);
    cursor: pointer;
  }

  .active-line {
    position: absolute;
    transition: .3s ease-in-out;
    left: 0px;
    top: 0px;
    background-color: #fff;
  }
}
@media screen and (max-width: 1023px) {
  .page-wrap {
    .line, .active-line {
      width: 6.6667vw;
      height: .5333vw;
    }
    .line {
      margin-right: 1.6vw;
      background-color: rgba($color: #fff, $alpha: 0.3);
    }
  }
}
</style>