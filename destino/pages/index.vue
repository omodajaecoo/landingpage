<template>
   <fullArticle :content="banner2Content" ref="banner2">
    <template v-slot:bottomSlot>
      <BaseButton 
        type="text" 
        class="lg:py-[0.1rem] lg:px-[0.2rem] lg:text-[0.14rem] text-[0.28rem] px-[0.2rem] py-[0.14rem]"
        @click="focusLeadForm"
      >Deja tus datos aquí</BaseButton>
    </template>
  </fullArticle>

  <!-- Section: Propuesta de valor -->
  <HomeValueBanner />

  <!-- Section: Autos -->
  <HomeCarsBanner />

  
  <HomeBenefitsBanner/>
  
  <formInfo />
  <leadForm ref="leadFormRef" id="leadform"/>
  
</template>

<script lang="ts" setup>
 import fullArticle from '../components/common/fullArticle.vue'
 import fullScreen from '../components/common/fullScreen.vue'
 import leadForm from '~/components/home/leadForm.vue'
 import formInfo from '~/components/home/formInfo.vue'
 import { HomeValueBanner } from '#components'

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

const banner2Content = ref({
  isTextWhite: false,
  img: 'index/newbanner',
  h5ClassName: 'lg:w-[10.25rem] lg:text-[#fff] banner2-space',
  fullArticleClass: 'enlarge',
  type: 'video',
  videoUrl: 'index/video/newlpvideo.mp4',
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

const leadFormRef = ref();
const focusLeadForm = () => {
  const el = leadFormRef.value?.$el || leadFormRef.value?.$refs?.root || null;
  if (el && typeof el.scrollIntoView === 'function') {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const input = el.querySelector('input,select,textarea,button');
    if (input) input.focus();
  }
};

</script>
<style scoped lang='scss'>
</style>