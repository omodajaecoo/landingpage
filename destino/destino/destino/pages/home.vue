<template>
  <!-- Section: Main Banners -->
  <HomeNewSwiper :slides="homeBanners" />

  <!-- Section: Modelos -->
  <HomeCarsCarrousel />

  <!-- Video Banner -->
  <CommonVideoArticle :content="videoBanner" ref="banner2" max-height="800px" objectFit="contain"/>

  <!-- Section: Autos -->
  <HomeCarsBanner />


</template>

<script lang="ts" setup>

  const homeBanners = [
    {
      title: '',
      desc: '',
      linkUrl: '',
      type: 'image',
      imgUrl: 'images/index/banner_1-1.webp',
      imgUrlMobile: 'images/index/banner_1-1_mb.webp'
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
      linkUrl: '/models/omoda-c5',
      type: 'video',
      imgUrl: 'images/index/banner_1-4.webp',
      imgUrlMobile: 'images/index/banner_1-4_mb.webp',
      videoUrl: 'videos/index/banner_1-4.webm',
      videoUrlMobile: 'videos/index/banner_1-4_mb.mp4'
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