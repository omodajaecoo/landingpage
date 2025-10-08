<template>
  <div
    class="w-full h-auto bg-white flex justify-center overflow-hidden px-[2.4rem] py-[1.56rem]"
  >
    <div class="w-full flex flex-col">
      <template v-for="(slide, index) in slides" :key="index">
        <div
          class="flex items-center"
          :class="index === 0 ? 'flex-row' : 'flex-row-reverse'"
        >
          <!-- 图片在左 -->
          <div class="flex-1">
            <BaseImg
              :src="isMobile ? slide.imgUrlMobile : slide.imgUrl"
              class="w-full aspect-[720/615] object-cover"
            />
          </div>
          <!-- 文字在右 -->
          <div
            class="flex-1 flex flex-col w-full h-full justify-center align-center bg-[#f5f7fa]"
          >
            <div class="mx-auto" v-animate="{ effect: 'fadeInUp' }">
              <div
                class="leading-[0.53rem] text-[0.32rem] text-[#222] mb-[0.18rem] font-miLight"
              >
                {{ slide.title }}
              </div>
              <div
                class="leading-[0.27rem] text-[0.18rem] lg:text-[0.16rem] text-[#666] mb-[0.32rem]"
              >
                {{ slide.desc }}
              </div>
             <template v-if="slide.link">
                <nuxt-link :to="slide.link">
                  <BaseButton>{{ slide.btn }}</BaseButton>
                </nuxt-link>
              </template>
              <template v-else>
                <BaseButton>{{ slide.btn }}</BaseButton>
              </template>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useDeviceType from '~/composables/useDeviceType'

const { isMobile } = useDeviceType()

const slides = [
  {
    title: "World's Best NEV Solution",
    desc: 'Super Hybird System',
    tab: 'Super Hybrid System',
    imgUrl: 'index/banner4_1.png',
    imgUrlMobile: 'index/banner4_1_mobile.png',
    btn: 'Learn More ',
    link: '/shs',
  },
  {
    title: 'Classic Off-Road Technology',
    desc: 'All-Road Drive Intelligent System',
    tab: 'All-Road Drive Intelligent System',
    imgUrl: 'index/banner4_2.jpg',
    imgUrlMobile: 'index/banner4_2_mobile.png',
    btn: 'Stay Tuned',
    link: ''
  },
]
</script>

<style scoped lang="scss">
// 新的布局样式
</style>
