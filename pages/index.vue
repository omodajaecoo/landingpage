<template>
  <!-- Section: Main Banners -->
  <div ref="homeSwiperRef">
    <HomeNewSwiper :slides="homeBanners" enable-side-navigation />
  </div>

  <LazyCommonReservationsStickyBar
    v-if="showReservationsBar"
    @close="dismissReservationsBar"
  />

  <!-- Section: Modelos -->
  <section
    ref="carsCarouselSectionRef"
    class="home-lazy-section home-lazy-section--cars-carousel"
    :class="{ 'home-lazy-section--loaded': shouldRenderCarsCarousel }"
  >
    <LazyHomeCarsCarrousel v-if="shouldRenderCarsCarousel" />
    <div
      v-else
      aria-hidden="true"
      class="home-lazy-section__skeleton home-lazy-section__skeleton--pulse flex w-full flex-col items-center justify-center gap-[0.48rem] bg-[#000000] px-[0.32rem] py-[0.8rem] lg:gap-[0.72rem] lg:px-[1.2rem]"
    >
      <div class="flex w-full max-w-[9.2rem] justify-center gap-[0.22rem] lg:gap-[0.42rem]">
        <div class="h-[0.12rem] w-[1.32rem] rounded-full bg-[#2a2a2a] lg:h-[0.16rem] lg:w-[1.7rem]" />
        <div class="h-[0.12rem] w-[1.12rem] rounded-full bg-[#1d1d1d] lg:h-[0.16rem] lg:w-[1.5rem]" />
        <div class="h-[0.12rem] w-[1.12rem] rounded-full bg-[#1d1d1d] lg:h-[0.16rem] lg:w-[1.5rem]" />
        <div class="hidden h-[0.16rem] w-[1.5rem] rounded-full bg-[#1d1d1d] lg:block" />
      </div>
      <div class="relative h-[2.6rem] w-full max-w-[12rem] overflow-hidden rounded-[0.08rem] bg-[#111111] lg:h-[4.3rem]">
        <div class="absolute left-[8%] top-[18%] h-[0.54rem] w-[2.4rem] rounded-full bg-[#242424] lg:h-[0.82rem] lg:w-[4.2rem]" />
      </div>
      <div class="grid w-full max-w-[8.6rem] grid-cols-1 gap-[0.18rem] md:grid-cols-3 lg:gap-[0.32rem]">
        <div class="h-[0.46rem] rounded-[0.08rem] bg-[#181818] lg:h-[0.62rem]" />
        <div class="h-[0.46rem] rounded-[0.08rem] bg-[#181818] lg:h-[0.62rem]" />
        <div class="h-[0.46rem] rounded-[0.08rem] bg-[#181818] lg:h-[0.62rem]" />
      </div>
      <div class="h-[0.54rem] w-[2rem] rounded-full bg-[#121212] lg:h-[0.64rem] lg:w-[2.3rem]" />
    </div>
  </section>

  <!-- Video Banner -->
  <section
    ref="videoBannerSectionRef"
    class="home-lazy-section home-lazy-section--video-banner"
    :class="{ 'home-lazy-section--loaded': shouldRenderVideoBanner }"
  >
    <LazyCommonVideoArticle
      v-if="shouldRenderVideoBanner"
      :content="videoBanner"
      ref="banner2"
      max-height="800px"
      objectFit="fill"
    />
    <div
      v-else
      aria-hidden="true"
      class="home-lazy-section__skeleton home-lazy-section__skeleton--pulse flex w-full items-center justify-center bg-[#000000] px-[0.32rem] py-[0.48rem] lg:px-[1.2rem]"
    >
      <div class="relative aspect-video w-full max-w-[14.2rem] overflow-hidden rounded-[0.08rem] bg-[#111111]">
        <div class="absolute inset-0 bg-[#151515]" />
        <div class="absolute left-1/2 top-1/2 h-[0.86rem] w-[0.86rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2a2a2a] lg:h-[1.2rem] lg:w-[1.2rem]" />
        <div class="absolute bottom-[12%] left-[7%] h-[0.16rem] w-[46%] rounded-full bg-[#2c2c2c] lg:h-[0.22rem]" />
        <div class="absolute bottom-[12%] right-[7%] h-[0.16rem] w-[14%] rounded-full bg-[#242424] lg:h-[0.22rem]" />
      </div>
    </div>
  </section>

  <!-- Section: Autos -->
  <section
    ref="carsBannerSectionRef"
    class="home-lazy-section home-lazy-section--cars-banner"
    :class="{ 'home-lazy-section--loaded': shouldRenderCarsBanner }"
  >
    <LazyHomeCarsBanner v-if="shouldRenderCarsBanner" />
    <div
      v-else
      aria-hidden="true"
      class="home-lazy-section__skeleton home-lazy-section__skeleton--pulse flex w-full flex-col items-center justify-center gap-[0.42rem] bg-[#000000] px-[0.32rem] py-[0.72rem] lg:gap-[0.72rem] lg:px-[1.2rem]"
    >
      <div class="flex w-full max-w-[10.8rem] flex-col gap-[0.18rem]">
        <div class="h-[0.28rem] w-[54%] rounded-full bg-[#262626] lg:h-[0.4rem] lg:w-[32%]" />
        <div class="h-[0.16rem] w-[78%] rounded-full bg-[#1c1c1c] lg:h-[0.22rem] lg:w-[46%]" />
      </div>
      <div class="grid w-full max-w-[12rem] grid-cols-1 gap-[0.24rem] lg:grid-cols-2 lg:gap-[0.36rem]">
        <div class="h-[2.6rem] rounded-[0.08rem] bg-[#111111] p-[0.28rem] lg:h-[4.8rem] lg:p-[0.44rem]">
          <div class="mb-[0.28rem] h-[58%] rounded-[0.08rem] bg-[#222222]" />
          <div class="h-[0.18rem] w-[64%] rounded-full bg-[#2c2c2c] lg:h-[0.24rem]" />
          <div class="mt-[0.14rem] h-[0.14rem] w-[42%] rounded-full bg-[#202020] lg:h-[0.2rem]" />
        </div>
        <div class="h-[2.6rem] rounded-[0.08rem] bg-[#111111] p-[0.28rem] lg:h-[4.8rem] lg:p-[0.44rem]">
          <div class="mb-[0.28rem] h-[58%] rounded-[0.08rem] bg-[#222222]" />
          <div class="h-[0.18rem] w-[58%] rounded-full bg-[#2c2c2c] lg:h-[0.24rem]" />
          <div class="mt-[0.14rem] h-[0.14rem] w-[48%] rounded-full bg-[#202020] lg:h-[0.2rem]" />
        </div>
      </div>
      <div class="hidden w-full max-w-[12rem] grid-cols-3 gap-[0.24rem] lg:grid">
        <div class="h-[2.4rem] rounded-[0.08rem] bg-[#101010]" />
        <div class="h-[2.4rem] rounded-[0.08rem] bg-[#101010]" />
        <div class="h-[2.4rem] rounded-[0.08rem] bg-[#101010]" />
      </div>
    </div>
  </section>

  <!-- Section: Beneficios -->
  <section
    ref="benefitsBannerSectionRef"
    class="home-lazy-section home-lazy-section--benefits-banner"
    :class="{ 'home-lazy-section--loaded': shouldRenderBenefitsBanner }"
  >
    <LazyHomeBenefitsBanner v-if="shouldRenderBenefitsBanner" />
    <div
      v-else
      aria-hidden="true"
      class="home-lazy-section__skeleton home-lazy-section__skeleton--pulse flex w-full flex-col items-center justify-center gap-[0.36rem] bg-[#000000] px-[0.32rem] py-[0.72rem] lg:px-[1.2rem]"
    >
      <div class="grid w-full max-w-[11rem] grid-cols-1 gap-[0.24rem] md:grid-cols-3 lg:gap-[0.36rem]">
        <div class="flex h-[2.2rem] flex-col items-center justify-center gap-[0.24rem] rounded-[0.08rem] bg-[#111111] lg:h-[3.1rem]">
          <div class="h-[0.82rem] w-[0.82rem] rounded-full bg-[#292929] lg:h-[1.08rem] lg:w-[1.08rem]" />
          <div class="h-[0.18rem] w-[58%] rounded-full bg-[#242424] lg:h-[0.24rem]" />
          <div class="h-[0.14rem] w-[42%] rounded-full bg-[#1d1d1d] lg:h-[0.18rem]" />
        </div>
        <div class="flex h-[2.2rem] flex-col items-center justify-center gap-[0.24rem] rounded-[0.08rem] bg-[#111111] lg:h-[3.1rem]">
          <div class="h-[0.82rem] w-[0.82rem] rounded-full bg-[#292929] lg:h-[1.08rem] lg:w-[1.08rem]" />
          <div class="h-[0.18rem] w-[58%] rounded-full bg-[#242424] lg:h-[0.24rem]" />
          <div class="h-[0.14rem] w-[42%] rounded-full bg-[#1d1d1d] lg:h-[0.18rem]" />
        </div>
        <div class="flex h-[2.2rem] flex-col items-center justify-center gap-[0.24rem] rounded-[0.08rem] bg-[#111111] lg:h-[3.1rem]">
          <div class="h-[0.82rem] w-[0.82rem] rounded-full bg-[#292929] lg:h-[1.08rem] lg:w-[1.08rem]" />
          <div class="h-[0.18rem] w-[58%] rounded-full bg-[#242424] lg:h-[0.24rem]" />
          <div class="h-[0.14rem] w-[42%] rounded-full bg-[#1d1d1d] lg:h-[0.18rem]" />
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="ts" setup>
  import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

  defineOptions({
    name: 'HomePage'
  });

  const homeSwiperRef = ref<HTMLElement | null>(null);
  const carsCarouselSectionRef = ref<HTMLElement | null>(null);
  const videoBannerSectionRef = ref<HTMLElement | null>(null);
  const carsBannerSectionRef = ref<HTMLElement | null>(null);
  const benefitsBannerSectionRef = ref<HTMLElement | null>(null);

  const isHomeSwiperVisible = ref(true);
  const isReservationsBarDismissed = ref(false);
  const shouldRenderCarsCarousel = ref(false);
  const shouldRenderVideoBanner = ref(false);
  const shouldRenderCarsBanner = ref(false);
  const shouldRenderBenefitsBanner = ref(false);

  let homeSwiperObserver: IntersectionObserver | null = null;
  let lazySectionsObserver: IntersectionObserver | null = null;

  const showReservationsBar = computed(() => {
    return !isHomeSwiperVisible.value && !isReservationsBarDismissed.value;
  });

  const dismissReservationsBar = () => {
    isReservationsBarDismissed.value = true;
  };

  const renderAllLazySections = () => {
    shouldRenderCarsCarousel.value = true;
    shouldRenderVideoBanner.value = true;
    shouldRenderCarsBanner.value = true;
    shouldRenderBenefitsBanner.value = true;
  };

  const observeLazySections = () => {
    if (!('IntersectionObserver' in window)) {
      renderAllLazySections();
      return;
    }

    const lazySections = [
      { element: carsCarouselSectionRef.value, shouldRender: shouldRenderCarsCarousel },
      { element: videoBannerSectionRef.value, shouldRender: shouldRenderVideoBanner },
      { element: carsBannerSectionRef.value, shouldRender: shouldRenderCarsBanner },
      { element: benefitsBannerSectionRef.value, shouldRender: shouldRenderBenefitsBanner },
    ].filter((section): section is { element: HTMLElement; shouldRender: typeof shouldRenderCarsCarousel } => {
      return Boolean(section.element);
    });

    lazySectionsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const section = lazySections.find(({ element }) => element === entry.target);
          if (!section) return;

          section.shouldRender.value = true;
          lazySectionsObserver?.unobserve(entry.target);
        });
      },
      {
        threshold: 0.01,
      }
    );

    lazySections.forEach(({ element }) => {
      lazySectionsObserver?.observe(element);
    });
  };

  onMounted(() => {
    observeLazySections();

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
    lazySectionsObserver?.disconnect();
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
      imgUrl: 'images/index/banner_J5.webp',
      imgUrlMobile: 'images/index/banner_J5_mobile.webp'
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
      imgUrl: 'images/index/banner_E5_NEXT.webp',
      imgUrlMobile: 'images/index/banner_E5_NEXT_mobile.webp'
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
.home-lazy-section {
  content-visibility: auto;
  contain-intrinsic-size: 1px var(--lazy-section-height);
  min-height: var(--lazy-section-height);
}

.home-lazy-section__skeleton {
  min-height: var(--lazy-section-height);
}

.home-lazy-section__skeleton--pulse [class*="bg-[#"]:not(.bg-\[\#000000\]) {
  animation: home-skeleton-color-pulse 1.6s ease-in-out infinite;
  will-change: opacity;
}

@keyframes home-skeleton-color-pulse {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.45;
  }
}

.home-lazy-section--loaded {
  contain-intrinsic-size: none;
  min-height: 0;
}

.home-lazy-section--cars-carousel {
  --lazy-section-height: 980px;
}

.home-lazy-section--video-banner {
  --lazy-section-height: min(56.25vw, 800px);
}

.home-lazy-section--cars-banner {
  --lazy-section-height: 1640px;
}

.home-lazy-section--benefits-banner {
  --lazy-section-height: 620px;
}

@media (max-width: 750px) {
  .home-lazy-section--cars-carousel {
    --lazy-section-height: 900px;
  }

  .home-lazy-section--video-banner {
    --lazy-section-height: 56.25vw;
  }

  .home-lazy-section--cars-banner {
    --lazy-section-height: 780px;
  }

  .home-lazy-section--benefits-banner {
    --lazy-section-height: 1050px;
  }
}

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
