<template>
  <main class="main model-page">
    <div class="promo">
      <picture
        class="promo__image-wrapper promo__image-wrapper-desktop move-out"
      >
        <source
          media="(orientation: portrait)"
          srcset="/img/model/main_mobile.webp"
        />
        <img class="promo__image" src="/img/model/main.webp" alt="omoda" />
      </picture>
      <div class="promo__content-wrapper">
        <h1 class="promo__title observer-word-up animation-activated">C5</h1>
        <h3 class="promo__subtitle observer-word-up"></h3>
      </div>
    </div>
    <div class="wrap_360" v-if="ispc == true">
      <iframe
        :src="dir + 'OMODAweb-360-new/index.html'"
        class="iframe"
        v-once
        scrolling="no"
        frameborder="0"
      ></iframe>
    </div>
    <div class="stats content">
      <div class="stats__header">
        <div class="stats__subtitle observer-fade-in" v-zoom>
          Futuristic fastback crossover
        </div>
        <div class="stats__title observer-fade-in" v-zoom>
          THE FUTURE STARTS WITH OMODA
        </div>
        <div class="stats__text observer-fade-in" v-zoom>
          was developed within the framework of the Art in Motion concept, which
          is based on avant-garde art, as an experiment - with the concept,
          color, form. The Art in Motion design philosophy is based on the idea
          that functional design can also be incredibly beautiful, touchable,
          seen from the outside and experienced behind the wheel.
        </div>
      </div>
      <button
        onClick="location.href=&#34;&#34;"
        class="button stats__action-button observer-word-up"
        type="button"
      >
        About model
      </button>
      <div class="stats__numbers" v-showClass>
        <div class="stats__number">
          <p class="stats__number-name">Power, hp</p>
          <vue-count-to
            class="js-value-counter stats__number-value"
            :start="900"
            :end="147"
            :autoPlay="true"
            :duration="4000"
          />
          <!-- <p class="js-value-counter stats__number-value" data-value="147">0</p> -->
        </div>

        <div class="stats__number">
          <p class="stats__number-name">Torque, Nm</p>
          <vue-count-to
            class="js-value-counter stats__number-value"
            :start="900"
            :end="210"
            :autoPlay="true"
            :duration="4000"
          />
        </div>

        <div class="stats__number">
          <p class="stats__number-name">Acceleration to 100 km/h, sec</p>
          <vue-count-to
            class="js-value-counter stats__number-value"
            :start="900"
            :end="9.9"
            :default="1"
            :autoPlay="true"
            :duration="4000"
          />
        </div>

        <div class="stats__number">
          <p class="stats__number-name">Fuel consumption, l/100km</p>
          <vue-count-to
            class="js-value-counter stats__number-value"
            :start="900"
            :end="7.1"
            :default="1"
            :autoPlay="true"
            :duration="4000"
          />
        </div>
      </div>
    </div>
    <div class="model__tech">
      <div class="content title-text">
        <div
          class="title-text__content-wrapper title-text--with-title title-text--no-subtitle title-text--only-one-text"
        >
          <h3 class="title-text__title observer-fade-in" v-zoom>
            ART IN MOTION
          </h3>
          <p class="title-text__text observer-fade-in" v-zoom>
            Stylish grille, 18" two-tone alloy wheels, floating roof, dynamic
            fastback bodywork, T-shaped daytime running lights, dynamic turn
            signals - every element emphasizes a sporty modern look.
          </p>
        </div>
      </div>
      <div class="character-slider-container content--only-lateral">
        <!-- :navigation="{nextEl:e.querySelector('.js-slider-character-button-next'),prevEl:e.querySelector('.js-slider-character-button-prev')}"" -->
        <Swiper
          class="character-slider swiper js-slider-character"
          :loop="true"
          :pagination="{ clickable: true }"
          :spaceBetween="40"
          :modules="[SwiperEffectFade, SwiperPagination, SwiperAutoplay]"
          @swiper="onSwiper01Fun"
        >
          <swiperSlide class="character-slider__item swiper-slide">
            <div class="character-slider__image">
              <picture class="">
                <source
                  media="(max-width: 767px)"
                  srcset="/img/design/optics_mb.webp"
                />

                <img
                  loading="lazy"
                  class=""
                  src="/img/design/optics.webp"
                  alt="Advanced LED optics"
                />
              </picture>
            </div>
            <div class="character-slider__content">
              <p class="character-slider__title">Advanced LED optics</p>
              <p class="character-slider__text">
                T-shaped daytime running lights draw attention in traffic,
                powerful LED headlights provide improved visibility at night,
                and the original design of the matrix taillights creates a 3D
                effect - another bright touch in the appearance of a futuristic
                car.
              </p>
            </div>
          </swiperSlide>

          <swiperSlide class="character-slider__item swiper-slide">
            <div class="character-slider__image">
              <picture class="">
                <source
                  media="(max-width: 767px)"
                  srcset="/img/design/body_mb.webp"
                />
                <img
                  loading="lazy"
                  class=""
                  src="/img/design/body.webp"
                  alt="Futuristic silhouette"
                />
              </picture>
            </div>
            <div class="character-slider__content">
              <p class="character-slider__title">Futuristic silhouette</p>
              <p class="character-slider__text">
                Swift, sculpted silhouette emphasizes sportiness, reduces
                aerodynamic drag and reduces fuel consumption
              </p>
            </div>
          </swiperSlide>
          <swiperSlide class="character-slider__item swiper-slide">
            <div class="character-slider__image">
              <picture class="">
                <source
                  media="(max-width: 767px)"
                  srcset="/img/design/roof_mb.webp"
                />
                <img
                  loading="lazy"
                  class=""
                  src="/img/design/roof.webp"
                  alt="Floating roof"
                />
              </picture>
            </div>
            <div class="character-slider__content">
              <p class="character-slider__title">Floating roof</p>
              <p class="character-slider__text">
                Adding visual brilliance to the car is the floating roof, an
                effect created by the black finish of the B-pillars and
                C-pillars and the tinted rear windows.
              </p>
            </div>
          </swiperSlide>
        </Swiper>
      </div>
    </div>
    <div class="model__tech model__tech--black">
      <div class="content title-text title-text--dark">
        <div
          class="title-text__content-wrapper title-text--with-title title-text--no-subtitle title-text--only-one-text"
        >
          <h3 class="title-text__title observer-fade-in" v-zoom>
            PREMIUM COMFORT
          </h3>
          <p class="title-text__text observer-fade-in" v-zoom>
            The front seats are made according to the canons of sports cars - a
            high one-piece headrest, advanced lateral support for seat cushions,
            perforated high-quality eco-leather.
          </p>
        </div>
      </div>
      <div class="character-slider-container content--only-lateral">
        <Swiper
          class="character-slider swiper js-slider-character character-slider--dark"
          :loop="true"
          :pagination="{ clickable: true }"
          :spaceBetween="40"
          :modules="[SwiperEffectFade, SwiperPagination, SwiperAutoplay]"
          @swiper="onSwiper02Fun"
        >
          <swiperSlide
            class="character-slider__item swiper-slide swiper-no-swiping"
          >
            <div class="character-slider__image">
              <picture class="">
                <img
                  loading="lazy"
                  class=""
                  src="/img/design/climat.webp"
                  alt="Intelligent climate control"
                />
              </picture>
            </div>
            <div class="character-slider__content">
              <!--<p class="character-slider__title">Intelligent climate control</p>-->
              <!--<p class="character-slider__text">Dual-zone climate control creates a comfortable atmosphere and also provides high-level air purification (N95/FFP2).</p>-->
              <p class="character-slider__title">Sports seats</p>
              <p class="character-slider__text">
                The sporty front seats are heated and ventilated and feature a
                variety of electrical adjustments for driver and passenger
                comfort.
              </p>
            </div>
          </swiperSlide>
        </Swiper>
      </div>
    </div>
    <div class="model__features model__features--white">
      <div class="content title-text">
        <div
          class="title-text__content-wrapper title-text--with-title title-text--no-subtitle title-text--only-one-text"
        >
          <h3 class="title-text__title observer-fade-in" v-zoom>
            DYNAMICS AND SAFETY
          </h3>
          <p class="title-text__text observer-fade-in" v-zoom>
            The synergy of the efficient 1.6Turbo engine and CVT9 ensures
            excellent driving dynamics and comfort. The engine is paired with a
            reliable and durable gearbox, equipped with a Honeywell turbocharger
            and DVVT technology.
          </p>
        </div>
      </div>
      <div class="feature-block content">
        <Swiper
          class="feature-slider js-slider-triple"
          :watchSlidesProgress="true"
          :slidesPerView="ispc == false ? 1 : 2"
          :pagination="{ clickable: true }"
          :spaceBetween="40"
          :modules="[SwiperEffectFade, SwiperPagination, SwiperAutoplay]"
          @swiper="onSwiper03Fun"
        >
          <SwiperSlide class="feature-slider__item swiper-slide">
            <div class="feature-content">
              <picture class="">
                <img
                  loading="lazy"
                  class="feature-content__image"
                  src="/img/feature/eco.webp"
                  alt="Performance and environmental friendliness"
                />
              </picture>
              <h3 class="feature-content__title">
                Performance and environmental friendliness
              </h3>
              <div class="feature-content__text">
                The maximum power of the 1.6Turbo engine is 183 hp, the maximum
                torque is 290 Nm / 2000-4000 rpm.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="feature-slider__item swiper-slide">
            <div class="feature-content">
              <picture class="">
                <img
                  loading="lazy"
                  class="feature-content__image"
                  src="/img/feature/ADAS.webp"
                  alt="Intelligent ADAS systems"
                />
              </picture>
              <h3 class="feature-content__title">Intelligent ADAS systems</h3>
              <div class="feature-content__text">
                ADAS includes: adaptive cruise control, forward collision
                warning, autonomous emergency braking, lane departure warning,
                lane keeping and automatic low/high beam switching.
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <div class="model__features model__features--bright">
      <div class="content title-text">
        <div
          class="title-text__content-wrapper title-text--with-title title-text--no-subtitle title-text--only-one-text"
        >
          <h3 class="title-text__title observer-fade-in" v-zoom>
            SMART TECHNOLOGIES
          </h3>
          <p class="title-text__text observer-fade-in" v-zoom>
            The tech interior of the new OMODA has many advanced features: 2
            high-resolution dual screens of 10.25” each, multi-color atmospheric
            interior lighting, wireless charging, high-quality acoustics and
            much more.
          </p>
        </div>
      </div>
      <div class="feature-block content feature-block--dark">
        <Swiper
          class="feature-slider js-slider-triple"
          :watchSlidesProgress="true"
          :slidesPerView="ispc == false ? 1 : 2"
          :pagination="{ clickable: true }"
          :spaceBetween="40"
          :slidesOffsetAfter="ispc == true ? 130 : 0"
          :modules="[SwiperEffectFade, SwiperPagination, SwiperAutoplay]"
          @swiper="onSwiper04Fun"
        >
          <SwiperSlide class="feature-slider__item swiper-slide">
            <div class="feature-content">
              <picture class="">
                <img
                  loading="lazy"
                  class="feature-content__image"
                  src="/img/feature/multimedia.webp"
                  alt="Digital instrument panel"
                />
              </picture>
              <h3 class="feature-content__title">Digital instrument panel</h3>
              <div class="feature-content__text">
                The instrument panel and multimedia complex are presented in the
                form of dual LCD displays with a diagonal of 10.25 inches with
                HD resolution and support for Android Auto and Apple CarPlay.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="feature-slider__item swiper-slide">
            <div class="feature-content">
              <picture class="">
                <img
                  loading="lazy"
                  class="feature-content__image"
                  src="/img/feature/charger.webp"
                  alt="Wireless phone charging"
                />
              </picture>
              <h3 class="feature-content__title">Wireless phone charging</h3>
              <div class="feature-content__text">
                The wireless charging module for 2 smartphones not only
                efficiently charges, but also informs you if the device is not
                installed in the charging slot.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="feature-slider__item swiper-slide">
            <div class="feature-content">
              <picture class="">
                <img
                  loading="lazy"
                  class="feature-content__image"
                  src="/img/feature/start-stop.webp"
                  alt="Remote engine start"
                />
              </picture>
              <h3 class="feature-content__title">Remote engine start</h3>
              <div class="feature-content__text">
                Remote start technology allows you to start the engine with a
                smart key, and comfort access allows you to open the car when
                approaching.
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </main>
</template>

<script setup>
const { isMobile } = useDeviceType();
const ispc = computed(() => {
  return !isMobile.value;
});
const dir = useRuntimeConfig().public.staticURL + '/';
let swiper01 = null;
const onSwiper01Fun = (swiper) => {
  swiper01 = swiper;
};
let swiper02 = null;
const onSwiper02Fun = (swiper) => {
  swiper02 = swiper;
};
let swiper03 = null;
const onSwiper03Fun = (swiper) => {
  swiper03 = swiper;
};
let swiper04 = null;
const onSwiper04Fun = (swiper) => {
  swiper04 = swiper;
};
</script>

<style scoped>
body {
  --perxis-auto-first-font: Raleway;
  --perxis-auto-second-font: Raleway;
  --perxis-auto-icon-font: PerxisIconSet2;
  --perxis-auto-first-font-size: 10px;
  --perxis-auto-second-font-size: 12px;
  --perxis-auto-third-font-size: 14px;
  --perxis-auto-fourth-font-size: 16px;
  --perxis-auto-fifth-font-size: 18px;
  --perxis-auto-sixth-font-size: 20px;
  --perxis-auto-seventh-font-size: 24px;
  --perxis-auto-eighth-font-size: 14px;
  --perxis-auto-ninth-font-size: 18px;
  --perxis-auto-tenth-font-size: 18px;
  --perxis-auto-eleventh-font-size: 24px;
  --perxis-auto-twelfth-font-size: 32px;
  --perxis-auto-thirteenth-font-size: 32px;
  --perxis-auto-fourteenth-font-size: 32px;
  --perxis-auto-fifteenth-font-size: 48px;
  --perxis-auto-sixteenth-font-size: 14px;
  --perxis-auto-seventeenth-font-size: 14px;
  --perxis-auto-eighteenth-font-size: 14px;
  --perxis-auto-nineteenth-font-size: 14px;
  --perxis-auto-twenty-first-font-size: 24px;
  --perxis-auto-twenty-second-font-size: 26px;
  --perxis-auto-twenty-third-font-size: 28px;
  --perxis-auto-twenty-fourth-font-size: 32px;
  --perxis-auto-twenty-fifth-font-size: 24px;
  --perxis-auto-first-font-weight: 400;
  --perxis-auto-second-font-weight: 300;
  --perxis-auto-third-font-weight: 400;
  --perxis-auto-first-border-width: 1px;
  --perxis-auto-second-border-width: 2px;
  --perxis-auto-first-border-radius: 0;
  --perxis-auto-first-letter-spacing: normal;
  --perxis-auto-first-text-transform: none;
  --perxis-auto-first-color: #0d0e0e;
  --perxis-auto-second-color: #ffffff;
  --perxis-auto-third-color: #e0300c;
  --perxis-auto-fourth-color: #cfd3d3;
  --perxis-auto-fifth-color: #cdcfd1;
  --perxis-auto-sixth-color: #e9e9e9;
  --perxis-auto-seventh-color: #0d0e0e;
  --perxis-auto-eighth-color: #e7e7e7;
  --perxis-auto-ninth-color: #889090;
  --perxis-auto-tenth-color: #f4f5f5;
  --perxis-auto-eleventh-color: #0d0e0e;
  --perxis-auto-z-index-sticky: 10;
  --perxis-auto-z-index-absolute: 100;
  --perxis-auto-z-index-tooltip: 1000;
  --perxis-auto-z-index-modal: 1010;
  --perxis-auto-z-index-fixed: 1020;
  --perxis-auto-z-index-dropdown: 1030;
  --perxis-auto-z-index-loader: 1040;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100vh;
  background: #fff;
  font: 300 14px/1.4 Raleway, sans-serif;
  width: 100%;
  overflow-x: hidden;
}

body.no-scroll {
  overflow: hidden;
}

::-webkit-scrollbar {
  width: 0.3rem;
  width: calc(0.3 * 16 / 19.2 * 1vw);
  height: 0.3rem;
  height: calc(0.3 * 16 / 19.2 * 1vw);
}

::-webkit-scrollbar-thumb {
  background: #efefef;
  border-radius: 0.4rem;
  border-radius: calc(0.4 * 16 / 19.2 * 1vw);
}

::-webkit-scrollbar-track {
  background: rgb(87, 87, 87);
}

::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}

main,
section {
  display: block;
}

.content {
  padding: 96px 120px;
}

.about-slider__navigation,
.content--only-lateral,
.model-slider__navigation {
  padding: 0 120px;
}

#instock-widget {
  min-height: 100vh;
}

.word-up {
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
  -webkit-transform: translateY(10px) scale(0.999);
  transform: translateY(10px) scale(0.999);
  opacity: 0;
}

.observer-word-up {
  -webkit-transition: all 0.3s 0.1s ease-out;
  transition: all 0.3s 0.1s ease-out;
  -webkit-transform: translateY(10px) scale(0.999);
  transform: translateY(10px) scale(0.999);
  opacity: 0;
}

.observer-word-up.animation-activated {
  opacity: 1;
  -webkit-transform: translateY(0) scale(1);
  transform: translateY(0) scale(1);
}

.observer-fade-in {
  -webkit-transition: all 0.3s 0.1s ease-out;
  transition: all 0.3s 0.1s ease-out;
  -webkit-transform: scale(0.85);
  transform: scale(0.85);
  opacity: 0;
}

.observer-fade-in.animation-activated {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.move-out {
  -webkit-transform: scale(1.25);
  transform: scale(1.25);
}

.move-out.animation-activated {
  -webkit-animation: moveOut 2s 0.3s ease-out both;
  animation: moveOut 0.5s 0.2s ease-out both;
}

@-webkit-keyframes moveOut {
  0% {
    -webkit-transform: scale(1.25);
    transform: scale(1.25);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes moveOut {
  0% {
    -webkit-transform: scale(1.25);
    transform: scale(1.25);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@-webkit-keyframes wordUpAnimation {
  0% {
    -webkit-transform: translateY(10px) scale(0.999);
    transform: translateY(10px) scale(0.999);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateY(0) scale(1);
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

@keyframes wordUpAnimation {
  0% {
    -webkit-transform: translateY(10px) scale(0.999);
    transform: translateY(10px) scale(0.999);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateY(0) scale(1);
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

@-webkit-keyframes scaleInSlide {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  100% {
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
  }
}

@keyframes scaleInSlide {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  100% {
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
  }
}

@-webkit-keyframes scaleOutSlide {
  0% {
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes scaleOutSlide {
  0% {
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.wrap_360 {
  width: 100%;
  height: 100vh;
  padding-top: 56.25%;
  position: relative;
}

.wrap_360 .iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border: none;
}

.button {
  letter-spacing: normal;
  font-family: Raleway, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  font-variant-numeric: lining-nums;
  color: #5f6565;
  display: block;
  margin: auto;
  padding: 17px 32px;
  cursor: pointer;
  color: inherit;
  border: 1px solid #0d0e0e;
  outline: inherit;
  background: 0 0;
  -webkit-transition: 0.3s ease-out;
  transition: 0.3s ease-out;
}

.button:focus,
.button:hover {
  opacity: 0.8 !important;
}

.button--hidden {
  display: none;
}

.button--white {
  color: #fff;
  border-color: #fff;
}

.button--no-border {
  border: none;
}

.button--no-border.button--active {
  color: #363a3a;
  background-color: #fff;
}

* :deep() .swiper-pagination-clickable .swiper-pagination-bullet {
  cursor: pointer;
  position: relative;
}

* :deep() .swiper-pagination-bullet:after {
  content: "";
  display: block;
  top: -8px;
  bottom: -8px;
  left: 0;
  right: 0;
  cursor: pointer;
  position: absolute;
}

* :deep() .swiper-pagination-bullets {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 20px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

* :deep() .swiper-pagination-bullet {
  display: block;
  width: 40px;
  height: 2px;
  -webkit-transition: 0.3s linear;
  transition: 0.3s linear;
  opacity: 0.3;
  background-color: currentColor;
}

* :deep() .swiper-pagination-bullet.swiper-pagination-bullet-active {
  width: 80px;
  opacity: 1;
}

* :deep() .swiper-pagination-lock {
  display: none !important;
}

.promo {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-height: 300px;
  height: calc(100vh - 0px);
  height: calc(var(--vh, 1vh) * 100 - 0px);
  z-index: 1;
}

.promo__image-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: block;
  height: 100%;
  width: 100%;
  background-color: #0d0e0e;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -o-object-fit: contain;
  object-fit: contain;
  aspect-ratio: 1350/640;
  z-index: 1;
}

.promo__image-wrapper.promo__image-wrapper-mobile {
  display: none;
}

.desktop-aspect-ratio .promo__image-wrapper.promo__image-wrapper-mobile {
  display: none;
}

.desktop-aspect-ratio .promo__image-wrapper.promo__image-wrapper-desktop {
  display: block;
}

.promo__image {
  display: block;
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
}

.promo__content-wrapper {
  position: absolute;
  right: 120px;
  bottom: 64px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  color: #fff;
  z-index: 10;
}

.promo__content-wrapper .button {
  margin: initial;
}

.promo__title {
  letter-spacing: normal;
  font-family: Raleway, sans-serif;
  font-size: 72px;
  font-weight: 300;
  line-height: 100%;
  font-variant-numeric: lining-nums;
  color: #0d0e0e;
  text-transform: uppercase;
  color: #0d0e0e;
  margin-bottom: 16px;
}

.promo__title--light {
  color: #fff;
}

.promo__subtitle {
  letter-spacing: normal;
  font-family: Raleway, sans-serif;
  font-size: 32px;
  font-weight: 300;
  line-height: 1.2;
  font-variant-numeric: lining-nums;
  color: #0d0e0e;
  margin-bottom: 32px;
  color: #0d0e0e;
}

.promo__subtitle--light {
  color: #fff;
}

.promo__button {
  color: #0d0e0e;
  border-color: #0d0e0e;
}

.promo__button--light {
  color: #fff;
  border-color: #fff;
}

.title-text {
  position: relative;
  background-color: #f4f5f5;
}

.title-text.title-text--dark {
  background-color: #222424;
}

.title-text.title-text--dark .title-text__title {
  color: #fff;
}

.title-text.title-text--dark .title-text__subtitle {
  color: #e2e4e4;
}

.title-text.title-text--dark .title-text__text {
  color: #acb2b2;
}

.title-text .title-text__content-wrapper {
  display: grid;
  grid-template: "title title" "subtitle text" /1fr 1fr;
  max-width: 985px;
  margin: auto;
  row-gap: 48px;
  -webkit-column-gap: 40px;
  -moz-column-gap: 40px;
  column-gap: 40px;
}

.title-text .title-text__content-wrapper.title-text--no-subtitle {
  grid-template: "title" "text";
  row-gap: 12px;
}

.title-text .title-text__content-wrapper.title-text--no-title {
  grid-template: "subtitle subtitle" /1fr 1fr;
}

.title-text
  .title-text__content-wrapper.title-text--no-title
  .title-text__subtitle {
  grid-area: subtitle;
  margin: auto;
  text-align: center;
}

.title-text .title-text__title {
  letter-spacing: normal;
  font-family: Raleway, sans-serif;
  font-size: 48px;
  font-weight: 300;
  line-height: 1;
  font-variant-numeric: lining-nums;
  color: #0d0e0e;
  grid-area: title;
  max-width: 780px;
  margin: auto;
  text-align: center;
  text-transform: uppercase;
  color: #0d0e0e;
}

.title-text
  .title-text--with-title.title-text--no-subtitle.title-text--only-one-text {
  grid-template: "title" "text";
}

.title-text
  .title-text--with-title.title-text--no-subtitle.title-text--only-one-text
  .title-text__subtitle {
  margin: auto;
  text-align: center;
}

.title-text
  .title-text--with-title.title-text--no-subtitle.title-text--only-one-text
  .title-text__text {
  margin: auto;
  text-align: center;
}

.title-text .title-text__subtitle {
  letter-spacing: normal;
  font-family: Raleway, sans-serif;
  font-size: 24px;
  font-weight: 300;
  line-height: 1.5;
  font-variant-numeric: lining-nums;
  color: #0d0e0e;
  grid-area: subtitle;
  max-width: 780px;
  color: #363a3a;
}

.title-text .title-text__text {
  letter-spacing: normal;
  font-family: Raleway, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.7;
  font-variant-numeric: lining-nums;
  color: #5f6565;
  max-width: 575px;
  color: #5f6565;
}

.feature-content__image {
  display: block;
  width: 100%;
  margin-bottom: 32px;
  -o-object-fit: cover;
  object-fit: cover;
  aspect-ratio: 527/298;
}

.feature-content__title {
  letter-spacing: normal;
  font-family: Raleway, sans-serif;
  font-size: 32px;
  font-weight: 300;
  line-height: 1.2;
  font-variant-numeric: lining-nums;
  color: #0d0e0e;
  -webkit-transform: translateY(10px);
  transform: translateY(10px);
  opacity: 0;
  -webkit-transition: 0.3s 0.1s ease-out;
  transition: 0.3s 0.1s ease-out;
  margin-bottom: 16px;
  text-align: start;
}

.feature-content__text {
  -webkit-transform: translateY(10px);
  transform: translateY(10px);
  opacity: 0;
  -webkit-transition: 0.3s 0.2s ease-out;
  transition: 0.3s 0.2s ease-out;
  letter-spacing: normal;
  font-family: Raleway, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  font-variant-numeric: lining-nums;
  color: #5f6565;
  text-align: start;
}

.stats {
  padding-top: 96px;
  padding-bottom: 96px;
  background-color: #f4f5f5;
}

.stats__header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.stats__subtitle {
  letter-spacing: normal;
  font-family: Raleway, sans-serif;
  font-size: 32px;
  font-weight: 300;
  line-height: 1.2;
  font-variant-numeric: lining-nums;
  color: #0d0e0e;
  margin-bottom: 32px;
  text-align: center;
}

.stats__title {
  letter-spacing: normal;
  font-family: Raleway, sans-serif;
  font-size: 72px;
  font-weight: 300;
  line-height: 1;
  font-variant-numeric: lining-nums;
  margin-bottom: 32px;
  text-align: center;
  text-transform: uppercase;
}

.stats__text {
  letter-spacing: normal;
  font-family: Raleway, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  font-variant-numeric: lining-nums;
  max-width: 810px;
  margin-bottom: 64px;
  text-align: center;
}

.stats__numbers {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  max-width: 1660px;
  margin-right: auto;
  margin-left: auto;
}

.stats__number {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 25%;
}

.stats__number:not(:last-child) {
  border-right: 1px solid #cfd3d3;
}

.stats__number-name {
  letter-spacing: normal;
  font-family: Raleway, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  font-variant-numeric: lining-nums;
  margin-bottom: 20px;
  color: #889090;
}

.stats__number-value {
  letter-spacing: normal;
  font-family: Raleway, sans-serif;
  font-size: 96px;
  font-weight: 200;
  line-height: 1;
  font-variant-numeric: lining-nums;
  display: none;
}

.stats__numbers.show .stats__number-value {
  display: block;
}

.stats__action-button {
  display: none;
}

.character-slider-container {
  position: relative;
  overflow: hidden;
}

.character-slider {
  width: 100%;
  aspect-ratio: 166/93;
}

.character-slider__image {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.character-slider__image img {
  width: 100%;
  height: 100%;
  -webkit-transition: 0.3s 0.2s ease-out;
  transition: 0.3s 0.2s ease-out;
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
  -o-object-fit: cover;
  object-fit: cover;
}

.character-slider__item.swiper-slide-active .character-slider__image img {
  -webkit-transform: scale(1);
  transform: scale(1);
}

.character-slider__item.swiper-slide-active .character-slider__title {
  -webkit-transition: 0.3s 0.2s ease-out;
  transition: 0.3s 0.2s ease-out;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
}

.character-slider__item.swiper-slide-active .character-slider__text {
  -webkit-transition: 0.3s 0.4s ease-out;
  transition: 0.3s 0.4s ease-out;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
}

.character-slider__content {
  position: absolute;
  bottom: 130px;
  left: 80px;
  width: 28.494%;
}

.character-slider__title {
  letter-spacing: normal;
  font-family: Raleway, sans-serif;
  font-size: 36px;
  font-weight: 300;
  line-height: 1.2;
  font-variant-numeric: lining-nums;
  color: #0d0e0e;
  margin-bottom: 16px;
  -webkit-transform: translateY(10px);
  transform: translateY(10px);
  opacity: 0;
  color: #363a3a;
}

.character-slider__item--light-text .character-slider__title {
  color: #fff;
}

.character-slider__text {
  letter-spacing: normal;
  font-family: Raleway, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  font-variant-numeric: lining-nums;
  color: #5f6565;
  -webkit-transform: translateY(10px);
  transform: translateY(10px);
  opacity: 0;
  color: #363a3a;
}

.character-slider__item--light-text .character-slider__text {
  color: #acb2b2;
}

.character-slider__navigation {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 80px;
  left: 80px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 100%;
  pointer-events: none;
}

.character-slider__navigate {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 120px;
  height: 100%;
  cursor: pointer;
  pointer-events: all;
  -webkit-transition: 0.3s ease-out;
  transition: 0.3s ease-out;
}

.character-slider__navigate:focus,
.character-slider__navigate:hover {
  opacity: 0.8 !important;
}

.character-slider__navigate svg {
  width: 64px;
  height: 64px;
  color: #0d0e0e;
}

.character-slider__navigate--prev svg {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.character-slider__navigate--next {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.character-slider :deep() .swiper-pagination {
  width: auto;
  position: absolute;
  z-index: 1;
  bottom: 64px;
  left: 80px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #0d0e0e;
}

.character-slider--dark .character-slider__navigate svg,
.character-slider--dark .character-slider :deep() .swiper-pagination,
.character-slider--dark .character-slider__text,
.character-slider--dark .character-slider__title {
  color: #fff;
}

.character-slider__item--light-slider-pagination {
  color: #fff;
}

.character-slider__navigate svg {
  color: #0d0e0e;
}

.character-slider__navigation--light-arrows .character-slider__navigate svg {
  color: #fff;
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  100% {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@keyframes spin {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  100% {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

.feature-block {
  background: #fff;
  overflow: hidden;
}

.feature-block--dark {
  background: #f4f5f5;
}

.feature-slider {
  overflow: visible;
}

.feature-slider :deep() .swiper-pagination {
  margin-top: 36px;
  color: #0d0e0e;
}

.feature-slider__item.swiper-slide-visible .feature-content__text,
.feature-slider__item.swiper-slide-visible .feature-content__title {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
}

.number-blocks {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 8px;
}

.number-blocks .number-blocks__block {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 64px;
  height: 80px;
  background-color: #f4f5f5;
}

.number-blocks .number-blocks-block__number {
  letter-spacing: normal;
  font-family: Raleway, sans-serif;
  font-size: 48px;
  font-weight: 300;
  line-height: 1;
  font-variant-numeric: lining-nums;
  color: #0d0e0e;
  color: #363a3a;
}

.number-blocks .number-blocks-block__number--gray {
  color: #cfd3d3;
}

.order-online__number-blocks {
  margin-bottom: 48px;
}

.model__widget {
  position: relative;
  background-color: #f4f5f5;
}

.model__widget-content {
  position: relative;
}

.model__features--white {
  background-color: #fff;
}

.model__features--white .title-text {
  background-color: #fff;
}

.model__features--white .model__widget-button {
  background-color: #fff;
}

.model__features--bright {
  background-color: #f4f5f5;
}

.model__features--bright .title-text {
  background-color: #f4f5f5;
}

.model__features--bright .model__widget-button {
  background-color: #f4f5f5;
}

.model__features {
  padding-bottom: 96px;
}

.model__features .feature-block {
  padding-top: 0;
  padding-bottom: 64px;
}

@media (max-width: 1267px) {
  .content {
    padding: 48px 16px;
  }

  .about-slider__navigation,
  .content--only-lateral,
  .model-slider__navigation {
    padding: 0 16px;
  }

  * :deep() .swiper-pagination-bullet {
    width: 30px;
  }

  * :deep() .swiper-pagination-bullet.swiper-pagination-bullet-active {
    width: 60px;
  }

  .promo__content-wrapper {
    right: 80px;
    bottom: 48px;
  }
}

@media (max-width: 1199px) {
  * :deep() .swiper-pagination {
    width: 100% !important;
    left: 0 !important;
    bottom: 0 !important;
  }

  * :deep() .swiper-pagination-bullet {
    width: 30px;
  }

  * :deep() .swiper-pagination-bullet.swiper-pagination-bullet-active {
    width: 60px;
  }

  .character-slider__content {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 36px 16px;
    text-align: center;
  }
}

@media (min-width: 768px) {
  .pano-button {
    width: auto;
  }

  .pano-grade-toggle {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    text-align: center;
    margin-bottom: 30px;
  }

  .pano-grade-toggle__current {
    display: none;
  }

  .pano-grade-toggle__list {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    text-align: center;
    border-bottom: 1px solid #d5d5d5;
  }

  .pano-grade-toggle__item {
    width: auto;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    padding-right: 20px;
    padding-left: 20px;
  }

  .pano-grade-toggle__item:hover,
  .pano-grade-toggle__item_active {
    color: #191919;
  }

  .pano-grade-toggle__active-line {
    display: block;
  }

  .pano-content__drag span {
    display: inline;
  }

  .pano-color-picker_exterior .pano-color-picker__item {
    height: 50px;
    width: 50px;
  }
}

@media all and (min-width: 768px) {
  .brand-page .content.title-text,
  .brand-page .philosophy-block,
  .brand-page .technology-block {
    position: relative;
  }

  .js-parallaxed-wide {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
}

@media (min-width: 1024px) {
  .news-slider__item--hidden {
    display: none;
  }

  .cities-list__slider-pagination {
    display: none;
  }
}

@media all and (max-width: 1600px) {
  .index-page .model-slider__content {
    width: 420px;
  }
}

@media (max-width: 1365px) {
  .content {
    padding: 64px 80px;
  }

  .about-slider__navigation,
  .content--only-lateral,
  .model-slider__navigation {
    padding: 0 80px;
  }

  .promo__content-wrapper {
    right: 80px;
    bottom: 48px;
  }

  .promo__title {
    font-size: 48px;
  }

  .promo__title {
    margin-bottom: 12px;
  }

  .promo__subtitle {
    font-size: 24px;
    margin-bottom: 24px;
  }

  .full-bg--small .full-bg__img {
    right: 80px;
    left: 80px;
  }

  .full-bg__title {
    font-size: 96px;
  }

  .feature-slider {
    overflow: hidden;
  }

  .feature-content__image {
    margin-bottom: 24px;
    aspect-ratio: 370/210;
  }

  .feature-content__title {
    letter-spacing: normal;
    font-family: Raleway, sans-serif;
    font-size: 24px;
    font-weight: 300;
    line-height: 1.2;
    font-variant-numeric: lining-nums;
    color: #0d0e0e;
    margin-bottom: 12px;
  }

  .feature-content__text {
    letter-spacing: normal;
    font-family: Raleway, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.7;
    font-variant-numeric: lining-nums;
    color: #5f6565;
    margin-bottom: 5vw;
  }

  .ambassador-block__image {
    margin-bottom: 24px;
    aspect-ratio: 575/287;
  }

  .ambassador-block__name {
    font-size: 24px;
  }

  .ambassador-block__name {
    margin-bottom: 12px;
  }

  .ambassador-block__occupation {
    margin-bottom: 12px;
    font-size: 14px;
  }

  .news-preview {
    gap: 24px;
  }

  .news-preview__image {
    aspect-ratio: 370/185;
  }

  .news-preview__title {
    letter-spacing: normal;
    font-family: Raleway, sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.5;
    font-variant-numeric: lining-nums;
    color: #0d0e0e;
  }

  .news-preview__date {
    letter-spacing: normal;
    font-family: Raleway, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    font-variant-numeric: lining-nums;
    color: #5f6565;
  }

  .news-slider__item {
    max-width: calc((100vw - 200px) / 2);
  }

  .stats__subtitle {
    letter-spacing: normal;
    font-family: Raleway, sans-serif;
    font-size: 24px;
    font-weight: 300;
    line-height: 1.2;
    font-variant-numeric: lining-nums;
    margin-bottom: 24px;
  }

  .stats__title {
    letter-spacing: normal;
    font-family: Raleway, sans-serif;
    font-size: 48px;
    font-weight: 300;
    line-height: 1;
    font-variant-numeric: lining-nums;
    margin-bottom: 12px;
  }

  .stats__text {
    letter-spacing: normal;
    font-family: Raleway, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.7;
    font-variant-numeric: lining-nums;
    max-width: 575px;
    margin-bottom: 48px;
  }

  .stats__number-name {
    letter-spacing: normal;
    font-family: Raleway, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 17.61px;
    font-variant-numeric: lining-nums;
    margin-bottom: 7px;
  }

  .stats__number-value {
    letter-spacing: normal;
    font-family: Raleway, sans-serif;
    font-size: 64px;
    font-weight: 200;
    line-height: 1;
    font-variant-numeric: lining-nums;
  }

  .character-slider {
    aspect-ratio: 1190/667;
  }

  .character-slider__content {
    bottom: 98px;
    left: 60px;
    width: 27.731%;
  }

  .character-slider__title {
    letter-spacing: normal;
    font-family: Raleway, sans-serif;
    font-size: 24px;
    font-weight: 300;
    line-height: 1.2;
    font-variant-numeric: lining-nums;
    color: #0d0e0e;
    margin-bottom: 24px;
  }

  .character-slider__text {
    letter-spacing: normal;
    font-family: Raleway, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.7;
    font-variant-numeric: lining-nums;
    color: #5f6565;
  }

  .character-slider__navigation {
    right: 60px;
    left: 60px;
  }

  .character-slider__navigate {
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    padding-bottom: 310px;
  }

  .character-slider__navigate svg {
    width: 48px;
    height: 48px;
  }

  .character-slider :deep() .swiper-pagination {
    bottom: 50px;
    left: 60px;
  }

  .content {
    padding: 64px 80px;
  }

  .about-slider__navigation,
  .content--only-lateral,
  .model-slider__navigation {
    padding: 0 80px;
  }

  .about-slider {
    width: 575px;
  }

  .about-slider__image {
    height: 287px;
  }

  .about-slider__navigation {
    top: 64px;
    height: 287px;
  }

  .about-slider__navigate svg {
    width: 48px;
    height: 48px;
  }

  .about-slider__pagination {
    margin: 48px 0;
  }

  .content {
    padding: 64px 80px;
  }

  .about-slider__navigation,
  .content--only-lateral,
  .model-slider__navigation {
    padding: 0 80px;
  }

  .model-slider__content {
    left: 180px;
  }

  .model-slider__title {
    font-size: 96px;
  }

  .model-slider__description {
    font-size: 24px;
  }

  .model-slider__description {
    margin-top: 12px;
  }

  .model-slider__text {
    font-size: 14px;
  }

  .model-slider__navigate svg {
    width: 48px;
    height: 48px;
  }

  .model-slider__pagination {
    margin: 48px 0;
  }

  .pano-wrap {
    padding: 0 80px;
  }

  .pano-rotator_interior {
    aspect-ratio: 1190/667;
  }

  .order-online {
    background-position: right 50%, center;
    background-size: 54%, cover;
  }

  .order-online.animation-activated {
    background-size: 64%, cover;
  }

  .order-online__text-wrapper {
    margin-top: 41px;
  }

  .order-online__action-wrapper {
    margin-bottom: 41px;
  }

  .index-page .model-slider__content {
    width: 370px;
  }

  .index-page .model-slider__text {
    margin-top: 24px;
  }

  .model__features {
    padding-bottom: 64px;
  }

  .model__features .feature-block {
    padding-bottom: 48px;
  }

  .model__tech {
    padding-bottom: 64px;
  }

  .model__tech .character-slider-container {
    margin-bottom: 48px;
  }

  .model__tech .title-text__title {
    max-width: 780px;
    letter-spacing: normal;
    font-family: Raleway, sans-serif;
    font-size: 48px;
    font-weight: 300;
    line-height: 1;
    font-variant-numeric: lining-nums;
    color: #0d0e0e;
  }

  .model__tech .title-text__text {
    max-width: 575px;
    letter-spacing: normal;
    font-family: Raleway, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.7;
    font-variant-numeric: lining-nums;
    color: #5f6565;
  }

  .become-a-dealer-page .promo .promo-brand__title {
    font-size: 48px;
  }

  .become-a-dealer-page .title-text-dealer__first.content {
    padding-bottom: 48px;
  }

  .become-a-dealer-page .dealer-button {
    margin: 0 auto 64px;
  }

  .image-list-block__title {
    font-size: 24px;
  }

  .terms-conditions__content {
    margin-bottom: 64px;
  }
}

@media (max-width: 1199px) {
  .wrap_360 {
    width: 100%;
    height: 80vh;
  }

  .character-slider {
    aspect-ratio: inherit;
  }

  .character-slider__content {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 36px 16px;
    text-align: center;
  }

  .character-slider__navigation {
    display: none;
  }

  .character-slider :deep() .swiper-pagination {
    position: relative;
    bottom: 0;
    left: 0;
  }
}

@media (max-width: 1023px) {
  .stats__subtitle {
    letter-spacing: normal;
    font-family: Raleway, sans-serif;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.2;
    font-variant-numeric: lining-nums;
    margin-bottom: 18px;
  }

  .stats__title {
    letter-spacing: normal;
    font-family: Raleway, sans-serif;
    font-size: 32px;
    font-weight: 300;
    line-height: 1;
    font-variant-numeric: lining-nums;
    margin-bottom: 8px;
  }

  .stats__text {
    margin-bottom: 36px;
  }

  .stats__number-name {
    max-width: 147.5px;
    min-height: 36px;
    text-align: center;
  }

  .stats__number-value {
    letter-spacing: normal;
    font-family: Raleway, sans-serif;
    font-size: 48px;
    font-weight: 200;
    line-height: 1;
    font-variant-numeric: lining-nums;
  }

  .stats__action-button {
    display: block;
    margin-bottom: 48px;
    line-height: 14px;
  }

  .character-slider__navigate {
    width: 80px;
  }

  .character-slider__navigate svg {
    width: 32px;
    height: 32px;
  }

  .content {
    padding: 56px 40px;
  }

  .about-slider__navigation,
  .content--only-lateral,
  .model-slider__navigation {
    padding: 0 40px;
  }

  .about-slider__navigation,
  .content--only-lateral,
  .model-slider__navigation {
    padding: 0 40px;
  }

  .model-slider__item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    aspect-ratio: unset;
  }

  .model-slider__content {
    left: 90px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 290px;
  }

  .model-slider__title {
    font-size: 68px;
  }

  .model-slider__description {
    font-size: 22px;
  }

  .model-slider__text {
    margin-top: 12px;
  }

  .model-slider__navigate {
    width: 80px;
  }

  .model-slider__navigate svg {
    width: 32px;
    height: 32px;
  }

  .model-slider__pagination {
    margin: 30px 0;
  }

  .number-blocks .number-blocks__block {
    width: 59px;
    height: 74px;
  }

  .number-blocks .number-blocks-block__number {
    font-size: 32px;
  }

  .model__features {
    padding-bottom: 48px;
  }

  .model__features .feature-block {
    padding-bottom: 36px;
  }
}

@media (max-width: 767px) {
  .full-bg__content,
  .full-bg__description,
  .block-title--white .block-title__title,
  .character-slider__title,
  .panoviewer-name-wrapper,
  .character-slider__text,
  .feature-slider :deep() .swiper-pagination,
  .character-slider :deep() .swiper-pagination,
  .model-slider__title,
  .model-slider__description,
  .model-slider__text,
  .model-slider__pagination,
  .news-preview__date,
  .menu__item,
  .swiper-pagination-bullet {
    color: #ffffff !important;
  }

  .promo__image-wrapper {
    -o-object-fit: cover;
    object-fit: cover;
    aspect-ratio: 720/1440;
  }

  .promo__content-wrapper {
    right: 16px;
    bottom: 50%;
    left: 16px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
  }

  .promo__title {
    font-size: 32px;
  }

  .promo__title {
    margin-bottom: 8px;
  }

  .promo__subtitle {
    margin-bottom: 18px;
    font-size: 20px;
  }

  .title-text .title-text__content-wrapper {
    grid-template: "title" "subtitle" "text";
    text-align: center;
    row-gap: 18px;
  }

  .title-text .title-text__content-wrapper.title-text--no-subtitle {
    row-gap: 8px;
  }

  .title-text
    .title-text__content-wrapper.title-text--no-subtitle
    .title-text__title {
    margin-bottom: 0;
  }

  .title-text .title-text__content-wrapper.title-text--no-title {
    grid-template: "subtitle";
  }

  .title-text
    .title-text__content-wrapper.title-text--no-title
    .title-text__subtitle {
    margin-bottom: 18px;
  }

  .title-text
    .title-text__content-wrapper.title-text--no-title
    .title-text__text:not(:last-child) {
    margin-bottom: 8px;
  }

  .title-text .title-text__title {
    letter-spacing: normal;
    font-family: Raleway, sans-serif;
    font-size: 32px;
    font-weight: 300;
    line-height: 1;
    font-variant-numeric: lining-nums;
    color: #0d0e0e;
    margin-bottom: 18px;
    word-break: break-word;
  }

  .title-text .title-text__subtitle {
    letter-spacing: normal;
    font-family: Raleway, sans-serif;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.5;
    font-variant-numeric: lining-nums;
    color: #0d0e0e;
  }

  .title-text .title-text__text {
    margin: auto;
    text-align: center;
  }

  .feature-content__image {
    margin-bottom: 18px;
    aspect-ratio: 328/185;
  }

  .feature-content__title {
    letter-spacing: normal;
    font-family: Raleway, sans-serif;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.2;
    font-variant-numeric: lining-nums;
    color: #0d0e0e;
    text-align: center;
  }

  .feature-content__text {
    text-align: center;
  }

  .stats__numbers {
    max-width: 328px;
  }

  .stats__number {
    width: calc(50% - 32px);
    margin-bottom: 24px;
  }

  .stats__number:nth-child(2) {
    border: unset;
  }

  .stats__number:nth-child(2n + 1) {
    padding-right: 16px;
  }

  .stats__number:nth-child(2n) {
    padding-left: 16px;
  }

  .character-slider-container {
    padding: 0;
  }

  .character-slider__image {
    aspect-ratio: 360/203;
  }

  .character-slider__title {
    letter-spacing: normal;
    font-family: Raleway, sans-serif;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.2;
    font-variant-numeric: lining-nums;
    color: #ffffff;
    margin-bottom: 18px;
  }

  .character-slider__item--light-text .character-slider__title {
    color: #ffffff;
  }

  .character-slider__text {
    font-size: 14px;
  }

  .character-slider__item--light-text .character-slider__text {
    color: #ffffff;
  }

  .character-slider__item--light-slider-pagination {
    color: #ffffff;
  }

  .content {
    padding: 48px 16px;
  }

  .about-slider__navigation,
  .content--only-lateral,
  .model-slider__navigation {
    padding: 0 16px;
  }

  .model-slider__item {
    background-color: #e2e4e4;
    aspect-ratio: inherit;
  }

  .model-slider__item.swiper-slide {
    height: auto !important;
  }

  .model-slider__image {
    position: static;
    height: auto;
    aspect-ratio: 360/308;
  }

  .model-slider__content {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    padding: 12px 16px 48px;
    -webkit-transform: none;
    transform: none;
    text-align: center;
  }

  .model-slider__title {
    font-size: 40px;
  }

  .model-slider__title {
    color: #0d0e0e;
    letter-spacing: normal;
    font-family: Raleway, sans-serif;
    font-size: 56px;
    font-weight: 200;
    line-height: 100%;
    font-variant-numeric: lining-nums;
  }

  .model-slider__item--light-text .model-slider__title {
    color: #0d0e0e;
  }

  .model-slider__description {
    font-size: 20px;
  }

  .model-slider__description {
    margin-top: 8px;
  }

  .model-slider__item--light-text .model-slider__description {
    color: #0d0e0e;
  }

  .model-slider__text {
    font-size: 14px;
  }

  .model-slider__text {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-top: 18px;
  }

  .model-slider__item--light-text .model-slider__text {
    color: #0d0e0e;
  }

  .model-slider__buttons {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .model-slider__item--light-buttons .model-slider__button {
    color: #0d0e0e;
    border-color: #0d0e0e;
  }

  .model-slider__navigation {
    display: none;
  }

  .model-slider__pagination {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 36px 0;
  }

  .model-slider__item--light-slider-pagination .model-slider__pagination {
    color: #0d0e0e;
  }

  .wrap_360 {
    padding-top: 150%;
  }
}

@media (max-width: 767px) and (max-width: 1365px) {
  .model-slider__title {
    font-size: 96px;
  }
}

@media (max-width: 767px) and (max-width: 1023px) {
  .model-slider__title {
    font-size: 68px;
  }
}

@media (max-width: 767px) and (max-width: 767px) {
  .model-slider__title {
    font-size: 40px;
  }
}

@media (max-width: 360px) {
  .cities-list__item {
    min-width: unset;
    max-width: 156px;
  }
}

@media (orientation: portrait) {
  .promo__image {
    -o-object-position: top;
    object-position: top;
  }
}

.model__tech,
.model__tech .title-text,
.model__features,
.model__features--white .title-text,
.model__features .feature-block,
.brand-page .content,
.brand-page .full-bg--small {
  background-color: #201e1e;
}

.news-slider,
.news-modal__wrapper,
.stats,
.model__widget,
.pano-wrap,
.model__tech--black,
.model__tech--black .title-text,
.model__features--bright,
.model__features--bright .title-text,
.model__features--bright .feature-block {
  background-color: #0d0e0e;
}

.news-preview__title,
.news-modal__text,
.news-modal__title,
.news-modal__content,
.stats__title,
.stats__text,
.stats__number-value,
.model__tech .title-text__title,
.model__tech .title-text__text,
.title-text .title-text__title,
.title-text .title-text__text,
.feature-content__title,
.feature-content__text,
.title-text .title-text__subtitle,
.block-title--long .block-title__desc,
.block-title--white .block-title__texts,
.promo__title {
  color: #ffffff;
}

.news-modal__close img {
  width: 50px;
}

.title-text .title-text__content-wrapper {
  row-gap: initial;
}

.philosophy-block .block-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.philosophy-block .block-title__wrapper {
  width: 49%;
}

.philosophy-block .block-title__content {
  width: 49%;
}

.title-text .title-text__content-wrapper {
  display: block;
  text-align: center;
}

.title-text .title-text__subtitle {
  max-width: 100%;
}
</style>
