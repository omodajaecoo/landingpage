<template>
  <!-- 首屏 banner -->
  <HomeNewSwiper :slides="homeBanners" />
  <!-- 第二屏 -->
  <HomeCarBanner />
  <!-- 第三屏 -->
  <fullArticle :content="banner2Content" ref="banner2">
      <template v-slot:bottomSlot>
        <BaseButton 
            type="text" 
            class="lg:py-[0.1rem] lg:px-[0.2rem] lg:text-[0.14rem]
          text-[0.28rem] px-[0.2rem] py-[0.14rem]"
          @click="videoPlayFullScreen"
          >Watch Video</BaseButton>
      </template>
    </fullArticle>
  <HomeTabSwiper v-if="isMobile"/>
  <HomeTabSwiperPC v-else />
  <!-- 第四屏 -->
  <template v-if="!isMobile">
    <div class="py-[0.52rem] px-[2.4rem]">
      <div class="grid items-center mb-[0.24rem] gap-[0.24rem] grid-cols-3">
        <!-- news title -->
        <div class="col-span-1">
          <div class="w-[3.9rem] max-w-full">
            <div class="leading-[0.53rem] text-[0.32rem] text-[#222] mb-[0.18rem] font-miLight">NEWS</div>
            <div class="leading-[0.27rem] text-[0.18rem] lg:text-[0.16rem] text-[#666] mb-[0.32rem]">Official information on the latest news from OMODA & JAECOO</div>
            <nuxt-link to="/newsCenter">
              <BaseButton>Learn More</BaseButton>
            </nuxt-link>
          </div>
        </div>
        <!-- first news -->
        <div class="news-item overflow-hidden col-span-2 relative cursor-pointer" v-animate="{ effect: 'fadeInUp' }">
          <nuxt-link :to="firstNew.href">
            <BaseImg :src="firstNew.imgUrl" class="w-full h-[56.2%] object-cover hover:scale-110 duration-300" />
            <div class="info absolute left-[0.24rem] bottom-[0.24rem]">
              <div class="text-[0.2rem] lg:text-[0.16rem] text-white leading-[0.27rem] mb-[0.06rem]">{{ firstNew.title }}</div>
              <div class="text-[#999] lg:text-[0.14rem]">{{ firstNew.createDate }}</div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <!-- news list -->
      <div class="grid gap-[0.24rem] grid-cols-3">
        <div 
          v-animate="{ effect: 'fadeInUp', delay: 0.1 + 0.2 * idx }"
          v-for="(news, idx) in newList"
          :key="idx"
          class="col-span-1 news-item cursor-pointer">
          <nuxt-link :to="news.href">
            <div class="img-wrap overflow-hidden">
              <BaseImg 
                :src="news.imgUrl" 
                class="w-full h-[75%] object-cover duration-300 hover:scale-110" 
              />
            </div>
            <div class="info mt-[0.24rem] lg:mt-[0.12rem]">
              <div class="text-[0.2rem] lg:text-[0.16rem] leading-[0.27rem] mb-[0.06rem] 
                overflow-hidden text-ellipsis text-nowrap">{{ news.title }}</div>
              <div class="leading-[0.21rem] text-[#999] lg:text-[0.14rem]">{{ news.createDate }}</div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </template>
  <template v-else> 
    <div class="mt-[2rem] mx-[0.32rem]">
      <!-- title -->
      <div>
        <div class="text-[0.48rem] text-miLight text-center mb-[0.24rem]">NEWS</div>
        <div class="text-[0.24rem] leading-[0.32rem] text-center mb-[0.48rem]">
          Official information on the latest news <br> from OMODA & JAECOO
        </div>
      </div>
      <!-- news list -->
      <div class="mb-[0.99rem]">
        <div
          v-for="(news, idx) in newDatas"
          :key="idx"
          class="mb-[0.32rem] last:mb-0"
        > 
          <div class="overflow-hidden">
            <BaseImg 
              :src="news.imgUrl" 
              class="w-full h-[3.85rem] object-cover hover:scale-110 duration-300" 
            />
          </div>
          <div class="mt-[0.24rem] text-[0.28rem] leading-[0.37rem]">{{ news.title }}</div>
          <div class="mt-[0.06rem] text-[0.24rem] text-[#999] leading-[0.32rem]">{{ news.createDate }}</div>
        </div>
      </div>
    </div>
  </template>
  <fullScreen :videoDialog="videoDialog" :content="banner2Content" v-if="videoDialog.visible"></fullScreen>
</template>

<script lang="ts" setup>
 import fullArticle from '../components/common/fullArticle.vue'
 import fullScreen from '../components/common/fullScreen.vue'
  const homeBanners = [
    {
      title: '',
      desc: '',
      linkUrl: '',
      type: 'image',
      imgUrl: 'images/home_logo_new.webp',
      imgUrlMobile: 'images/home_logo_mb.jpg'
    },
    {
      title: '',
      desc: '',
      linkUrl: '/c5',
      type: 'video',
      imgUrl: 'videos/omoda/c5.webp',
      imgUrlMobile: 'videos/omoda/c5_mob.webp',
      videoUrl: 'videos/omoda/c5.mp4',
      videoUrlMobile: 'videos/omoda/c5_mob.mp4'
    },
    {
      title: '',
      desc: '',
      linkUrl: '/e5',
      type: 'video',
      imgUrl: 'videos/omoda/videoframe_2980.webp',
      imgUrlMobile: 'videos/omoda/videoframe_2172.webp',
      videoUrl: 'videos/omoda/indexBanner.mp4',
      videoUrlMobile: 'videos/omoda/indexBanner_m.mp4'
    },
    {
      title: '',
      desc: '',
      linkUrl: '/j7',
      type: 'video',
      imgUrl: 'videos/indexBanner_pc.webp',
      imgUrlMobile: 'videos/indexBanner_mob.webp',
      videoUrl: 'videos/indexBanner_pc.webm',
      videoUrlMobile: 'videos/indexBanner_mob.mp4'
    },
  ]

  const banner3 = {
    isTextWhite: true,
    title: 'About us',
    subTitle: "In today's rapidly evolving era, the automotive industry is<br> undergoing unprecedented transformations.",
    h5ClassName: "text-[0.24rem] leading-[0.32rem] lowercase",
    className: "uppercase",
    img: "index/banner3",
    titleClassName: "",
  }

  const banner2Content = ref({
    isTextWhite: false,
    title: 'ABOUT OMODA & JAECOO',
    subTitle: "Our OMODA&JAECOO brand not only embodies cutting-edge innovation in the automotive industry with its two flagship product lines,<br/>OMODA and JAECOO, but also encompasses diverse cultural and personal domains through O-UNIVERSE's GREEN OJ,ENTERTAINMENT OJ,<br/>and more. This unlocks greater imagination for future travel experiences for users.",
    titleClassName: 'lg:!text-white px-[0.63rem] lg:px-[0] uppercase',
    img: 'index/banner3_1',
    h5ClassName: 'lg:w-[10.25rem] lg:text-[#fff] banner2-space',
    fullArticleClass: 'enlarge',
    type: 'video',
    videoUrl: 'index/video/banner3_new.mp4',
    fullScreenUrl: 'index/video/banner3_fullScreen.mp4'
  })



  const newDatas = [
    {
      imgUrl: 'index/banner5_1.webp',
      title: 'OMODA & JAECOO`S 2 Year`s Anniversary',
      createDate: 'April 15, 2025',
      href: "/newsDetails?id=35"
    },
    {
      imgUrl: 'index/banner5_2.webp',
      title: 'Redefining the Global Hybrid Market, OMODA & JAECOO Showcases Latest SHS Lineup at Auto Shanghai',
      createDate: 'March 1, 2024',
      href: "/newsDetails?id=36"
    },
    {
      imgUrl: 'index/banner5_3.webp',
      title: 'Breaking Through 20,000 Units for 4 Consecutive Months',
      createDate: 'January 24, 2024',
      href: "/newsDetails?id=32"
    },
    {
      imgUrl: 'index/banner5_4.webp',
      title: 'Championing the Road Ahead',
      createDate: 'May 11, 2024',
      href: "/newsDetails?id=28"
    },
  ]

  const firstNew = newDatas[0];
  const newList = newDatas.filter((_, idx) => idx > 0);

  const { isMobile } = useDeviceType();
  const videoDialog = ref({
    visible: false
  })
   // 播放全部视频
   const videoPlayFullScreen = () => {
    videoDialog.value.visible = true
  }

</script>
<style scoped lang='scss'>
</style>