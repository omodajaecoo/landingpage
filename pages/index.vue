<template>
  <!-- Section: Main Banners -->
  <div ref="homeSwiperRef">
    <HomeNewSwiper :slides="homeBanners" />
  </div>

  <CommonReservationsStickyBar
    v-if="showReservationsBar"
    @close="dismissReservationsBar"
  />

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
  import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

  defineOptions({
    name: 'HomePage'
  });

  const homeSwiperRef = ref<HTMLElement | null>(null);
  const isHomeSwiperVisible = ref(true);
  const isReservationsBarDismissed = ref(false);
  let homeSwiperObserver: IntersectionObserver | null = null;

  const showReservationsBar = computed(() => {
    return !isHomeSwiperVisible.value && !isReservationsBarDismissed.value;
  });

  const dismissReservationsBar = () => {
    isReservationsBarDismissed.value = true;
  };

  onMounted(() => {
    if (!homeSwiperRef.value) return;

    homeSwiperObserver = new IntersectionObserver(
      ([entry]) => {
        isHomeSwiperVisible.value = entry.isIntersecting;
      },
      {
        threshold: 0.01,
      }
    );

    homeSwiperObserver.observe(homeSwiperRef.value);
  });

  onBeforeUnmount(() => {
    homeSwiperObserver?.disconnect();
  });

  const homeBanners = [
    
    {
      title: '',
      desc: '',
      linkUrl: '/models/jaecoo-j7',
      type: 'video',
      imgUrl: 'images/index/banner_1-1.webp',
      imgUrlMobile: 'images/index/banner_1-1_mb.webp',
      videoUrl: 'videos/index/omoda-jaecoo_web.mp4',
      videoUrlMobile: 'videos/index/omoda-jaecoo-long-distance-challenge_web_v03.mp4',
      autoplayDelay: 105000,
    },
    {
      title: 'Early Adopters Edition',
      desc: 'Sé parte de los primeros propietarios',
      linkUrl: '/reservations?vehicle=JAECOO%20J5',
      type: 'image',
      buttonText: 'Reservar',
      imgUrl: 'images/index/banner_J5.png',
      imgUrlMobile: 'images/index/banner_J5_mobile.png'
    },
    {
      title: '100 unidades al precio de reserva',
      desc: 'asegura el tuyo',
      linkUrl: '/reservations?vehicle=OMODA%20E5%20NEXT',
      type: 'image',
      buttonText: 'Reservar',
      imgUrl: 'images/index/banner_E5_NEXT.png',
      imgUrlMobile: 'images/index/banner_E5_NEXT_mobile.png'
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
    h5ClassName: 'lg:w-[10.25rem] lg:text-[#fff] banner2-space',
    fullArticleClass: 'enlarge',
    type: 'video',
    videoUrl: 'index/LP/banner.mp4',
  })

</script>

