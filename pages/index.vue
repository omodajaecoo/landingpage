<template>
  <!-- Section: Main Banners -->
  <div ref="homeSwiperRef">
    <HomeNewSwiper :slides="homeBanners" enable-side-navigation />
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
      title: 'EARLY ADOPTERS EDITION',
      desc: 'Sé parte de los primeros propietarios',
      linkUrl: '/reservations?vehicle=JAECOO%20J5',
      type: 'image',
      buttonText: 'RESERVAR',
      secondaryButtonText: 'FICHA TÉCNICA',
      secondaryButtonUrl: '/files/Ficha_Tecnica_JAECOO-J5.pdf',
      topLeftText: '<span>DESDE</span><span class="home-banner-price-single__amount">$21.990</span>',
      topLeftTextClass: '!font-[inherit] !font-bold !text-[0.42rem] lg:!text-[1.3rem] home-banner-price home-banner-price-single',
      imgUrl: 'images/index/banner_J5.png',
      imgUrlMobile: 'images/index/banner_J5_mobile.png'
    },
    {
      title: '100 UNIDADES AL PRECIO DE RESERVA',
      desc: 'Asegura el tuyo',
      linkUrl: '/reservations?vehicle=OMODA%20E5%20NEXT',
      type: 'image',
      buttonText: 'RESERVAR',
      secondaryButtonText: 'FICHA TÉCNICA',
      secondaryButtonUrl: '/files/Ficha_Tecnica_OMODA-E5-NEXT.pdf',
      topLeftText: '<span class="home-banner-price-discount__old"><span>DESDE</span> <span class="home-banner-price-discount__strike">$21.990</span></span><span class="home-banner-price-discount__amount">$19.990</span>',
      topLeftTextClass: '!font-[inherit] !font-bold !text-[0.42rem] lg:!text-[1.3rem] home-banner-price home-banner-price-discount',
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
    {
      title: '',
      desc: '',
      linkUrl: '/models/jaecoo-j7',
      type: 'video',
      buttonText: 'DESCUBRE MÁS',
      imgUrl: 'images/index/banner_1-1.webp',
      imgUrlMobile: 'images/index/banner_1-1_mb.webp',
      videoUrl: 'videos/index/omoda-jaecoo_web.mp4',
      videoUrlMobile: 'videos/index/omoda-jaecoo-long-distance-challenge_web_v03.mp4',
      autoplayDelay: 105000,
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

<style lang="scss">
.home-banner-price-single {
  display: inline-flex !important;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.02rem;
}

.home-banner-price-single__amount {
  margin-left: 0.24rem;
}

.home-banner-price-discount {
  display: inline-flex !important;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.06rem;
}

.home-banner-price-discount__old {
  font-size: 0.26rem;
  line-height: 100%;
}

.home-banner-price-discount__strike {
  text-decoration: line-through;
  text-decoration-thickness: 0.02rem;
}

.home-banner-price-discount__amount {
  margin-left: 0.24rem;
}

@media (min-width: 751px) and (max-width: 1023px) {
  .home-banner-price {
    font-size: 0.64rem !important;
  }

  .home-banner-price-discount__old {
    font-size: 0.38rem;
  }
}

@media (min-width: 1024px) {
  .home-banner-price-single {
    gap: 0.04rem;
  }

  .home-banner-price-single__amount {
    margin-left: 0.42rem;
  }

  .home-banner-price-discount {
    gap: 0.08rem;
  }

  .home-banner-price-discount__amount {
    margin-left: 0.42rem;
  }

  .home-banner-price-discount__old {
    font-size: 0.48rem;
  }
}
</style>
