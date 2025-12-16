<template>
  <!-- Section: Main Banners -->
  <HomeNewSwiper :slides="homeBanners" />

  <!-- Section: Modelos -->
  <HomeCarsCarrousel />

  <!-- Video Banner -->
  <CommonVideoArticle :content="videoBanner" ref="banner2" max-height="800px" objectFit="fill"/>

  <!-- Section: Autos -->
  <HomeCarsBanner />

  <!-- Section: Beneficios -->
  <HomeBenefitsBanner/>

</template>

<script lang="ts" setup>

  const homeBanners = [
    
    {
      title: '',
      desc: '',
      linkUrl: '/models/jaecoo-j7',
      type: 'video',
      imgUrl: 'images/index/banner_1-1.webp',
      imgUrlMobile: 'images/index/banner_1-1_mb.webp',
      videoUrl: 'videos/index/banner_1-1.webm',
      videoUrlMobile: 'videos/index/banner_1-1_mb.mp4'
    },
    {
      title: '',
      desc: '',
      linkUrl: '',
      type: 'image',
      imgUrl: 'images/index/banner_1-2.webp',
      imgUrlMobile: 'images/index/banner_1-2_mb.webp'
    },
    {
      title: '',
      desc: '',
      linkUrl: '',
      type: 'image',
      imgUrl: 'images/index/banner_1-3.webp',
      imgUrlMobile: 'images/index/banner_1-3_mb.webp'
    },
    {
      title: '',
      desc: '',
      linkUrl: '',
      type: 'image',
      imgUrl: 'images/index/banner_1-4.webp',
      imgUrlMobile: 'images/index/banner_1-4_mb.webp',
    },
  ]

  const videoBanner = ref({
    isTextWhite: false,
    img: 'index/newbanner',
    h5ClassName: 'lg:w-[10.25rem] lg:text-[#fff] banner2-space',
    fullArticleClass: 'enlarge',
    type: 'video',
    videoUrl: 'index/video/newlpvideo.mp4',
  })

</script>

<style scoped lang='scss'>
</style>