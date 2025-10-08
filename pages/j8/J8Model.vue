<template>
  <div class="h-screen relative">
    <KeepAlive :includes="['BaseAppearance', 'BaseInterior', 'BaseCarMode']">
      <component 
        ref="BaseModelRef"
        :is="activeComponent" 
        :key="activeTab" 
        :video-url="activeVideoUrl" 
      />
    </KeepAlive>
    <!-- 控制区 -->
    <div class="controller-bar text-white
      w-full px-[1.08rem] 
      absolute left-0 bottom-[0.4rem]">
      <!-- 颜色 -->
      <template v-if="activeTab === 'appearance'">
        <div class="color-name text-center text-[0.16rem]">{{ activeColor?.en }}</div>
        <div class="color-list h-[0.68rem] flex justify-center items-center gap-x-[0.4rem] mt-[0.16rem]">
          <div 
            class="w-[0.3rem] h-[0.3rem] rounded-full 
              border-[2px] border-transparent bg-slate-700
              cursor-pointer"
            v-for="color in colorList"
            :key="color.index"
            :style="{ background: color.value }"
            :class="{ '!border-white': activeIndex === color.index }"
            @click="toggleColor(color.index)"
          ></div>
        </div>
      </template>
      <!-- 驾驶模式 -->
      <div 
        v-if="activeTab === 'mode'"
        class="drive-mode-wrap mx-auto w-[88.5%] h-[0.68rem] text-white text-[0.24rem] 
          flex justify-center items-center">
        <BaseImg 
          :src="`${currentSwiperIndex < 3 ? 'common/arrow_dark.svg' : 'common/arrow_white.svg'}`" 
          class="w-[0.48rem] cursor-pointer rotate-180" 
          @click="toggleModeGroup('prev')"
        />
        <Swiper 
          class="flex-1 overflow-hidden mx-[0.86rem]"
          ref="modeChangeRef"
          :slides-per-view="3"
          :slides-per-group="3"
          :simulate-touch="false"
          :space-between="5"
          :breakpoints="{
            '1600': {
              slidesPerView: 4,
              slidesPerGroup: 4
            }
          }"
          @swiper="handleSwiper"
        >
          <SwiperSlide
            v-for="(item, idx) in modeList"
            :key="idx"
          >
            <div class="drive-mode-item relative h-[0.68rem]
              cursor-pointer uppercase
              flex items-center justify-center"
              @click="toggleMode(item)"
            >
              <BaseImg 
                :src="'drive-mode/' + item + '.png'" 
                class="w-[0.48rem]" 
              />
              <span class="select-none lg:text-[0.16rem]">{{ item }}</span>
              <div 
                class="line hidden absolute bottom-0 bg-primary h-[3px] w-full" 
                :class="{ '!block': activeMode === item }"
              ></div>
            </div>
          </SwiperSlide>
        </Swiper>
        <BaseImg
          :src="currentSwiperIndex >= modeList.length - slidePreviewCount ? 'common/arrow_dark.svg' : 'common/arrow_white.svg'"  
          class="w-[0.48rem] cursor-pointer" 
          @click="toggleModeGroup('next')"
        />
      </div>
      <!-- 选择 -->
      <div class="tab-list flex justify-center items-center mt-[0.28rem]">
        <div 
          class="tab-item px-[0.48rem]"
          v-for="tab in tabLit"
          :key="tab.type"
        >
          <BaseImg 
            class="w-[0.48rem] cursor-pointer"
            :src="activeTab === tab.type ? tab.iconSelectedUrl : tab.iconUrl" 
            @click="toggleTab(tab.type)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
  import type BaseModel from '~/components/BaseAppearance.vue';
  import BaseAppearance from '~/components/BaseAppearance.vue';
  import BaseInterior from '~/components/BaseInterior.vue';
  import BaseCarMode from '~/components/BaseCarMode.vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import type { Swiper as SwiperType } from 'swiper';

  type TabType = 'appearance' | 'interior' | 'mode'

  interface TabItem {
    iconUrl: string;
    iconSelectedUrl: string;
    type: TabType;
  }

  const colorList = [
    {
      name: '橄榄灰',
      en: 'Olive gray',
      value: '#5D717A',
      index: 0
    },
    {
      name: '新卡其白',
      en: 'New khaki white',
      value: '#BEBFC1',
      index: 1
    },
    {
      name: '碳晶黑',
      en: 'Carbon crystal black',
      value: '#3C3B3D',
      index: 2
    },
    {
      name: '铱泽银',
      en: 'Silver',
      value: '#8D9295',
      index: 3
    },
    {
      name: '海岩灰',
      en: 'Searock gray',
      value: '#819397',
      index: 4
    },
  ]

  const tabLit: TabItem[] = [
    {
      iconUrl: 'model-icon/appearance.png',
      iconSelectedUrl: 'model-icon/appearance_selected.png',
      type: 'appearance',
    },
    {
      iconUrl: 'model-icon/interior.png',
      iconSelectedUrl: 'model-icon/interior_selected.png',
      type: 'interior',
    },
    {
      iconUrl: 'model-icon/mode.png',
      iconSelectedUrl: 'model-icon/mode_selected.png',
      type: 'mode',
    },
  ]

  const modeList = [
    'eco', 'sand', 'off-road', 'nor', 'sport', 'snow', 'mud'
  ]

  const activeTab = ref<TabType>('appearance');
  const activeMode = ref('eco');

  const BaseModelRef = ref<InstanceType<typeof BaseModel>>();
  const modeChangeRef = ref();
  const currentSwiperIndex = ref(0);
  const slidePreviewCount = ref(3)

  const activeIndex = ref(0);
  const activeColor = computed(() => {
    const findItem = colorList.find(item => item.index === activeIndex.value);
    return findItem || null;
  })
  const activeVideoUrl = computed(() => {
    return `videos/mode/j8/${activeMode.value}.mp4`
  })

  const activeComponent = computed(() => {
    switch (activeTab.value) {
      case 'appearance':
        return BaseAppearance;
      case 'interior': 
        return BaseInterior;
      case 'mode': 
        return BaseCarMode;
      default:
        return BaseAppearance;
    }
  })

  onMounted(() => {
    slidePreviewCount.value = window.innerWidth > 1600 ? 4 : 3;
  })

  const toggleColor = (idx: number) => {
    activeIndex.value = idx;
    if (!BaseModelRef.value) return;
    BaseModelRef.value.setColor(idx);
  }

  const toggleTab = (data: TabType) => {
    activeTab.value = data;
    if (activeTab.value !== 'mode') {
      currentSwiperIndex.value = 0;
    }
  }

  const toggleMode = (mode: string) => {
    activeMode.value = mode;
  }

  let swiperInst: SwiperType | null = null;

  const handleSwiper = (swiper: SwiperType) => {
    swiperInst = swiper;
  }

  const toggleModeGroup = (type: 'next' | 'prev') => {
    if (!swiperInst) return;
    if (type === 'next') {
      swiperInst.slideNext();
    } else {
      swiperInst.slidePrev();
    }
    currentSwiperIndex.value = swiperInst.activeIndex;
    console.log('currentSwiperIndex', currentSwiperIndex.value, slidePreviewCount.value);
  }
</script>
<style scoped lang='scss'>
  .color-list,
  .drive-mode-wrap {
    background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.7), transparent);
  }
</style>