<template>
  <main class="min-h-[80vh] bg-[#0D0E0E]">
    <div class="reservations-hero">
      <div class="reservations-hero__logos">
        <div class="reservations-hero__logo-action reservations-hero__logo-action--e5">
          <img
            src="/images/reservations/E5-NEXT-logo.png"
            alt="E5 NEXT"
            class="reservations-hero__logo reservations-hero__logo--e5"
          />
          <a
            class="reservations-hero__file-button"
            href="/files/Ficha_Tecnica_OMODA-E5-NEXT.pdf"
            target="_blank"
            rel="noopener"
          >
            FICHA TÉCNICA
          </a>
        </div>
        <div class="reservations-hero__logo-action reservations-hero__logo-action--j5">
          <img
            src="/images/reservations/JAECOO-J5-logo.png"
            alt="JAECOO J5"
            class="reservations-hero__logo reservations-hero__logo--j5"
          />
          <a
            class="reservations-hero__file-button"
            href="/files/Ficha_Tecnica_JAECOO-J5.pdf"
            target="_blank"
            rel="noopener"
          >
            FICHA TÉCNICA
          </a>
        </div>
      </div>
      <div class="reservations-hero__content">
        <h1 class="reservations-hero__title">
          RESERVA TU<br />
          NUEVO VEHÍCULO
        </h1>
        <p class="reservations-hero__description">
          Sé uno de los primeros en experimentar la movilidad del futuro. Reserva hoy el modelo que se adapta a tu estilo de vida.
        </p>
      </div>
    </div>

    <div class="reservations-sections">
      <section class="reservation-section">
        <EmbededForm
          :url="URL_FORM"
          container-class="reservation-checkout-form"
          :iframe-class="`reservation-checkout-form__iframe ${formBreakpoints}`"
          :redirect-ios="false"
          loading="eager"
        />
      </section>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { usePowerAppsFormMessages } from '~/composables/usePowerAppsFormMessages';

defineOptions({
  name: 'ReservationsPage'
});

const URL_FORM = 'https://ayas-formweb-prd.powerappsportals.com/tools/omoda-jaecoo/quotation-checkout-form/';
const formBreakpoints = 'h-[1785px] min-[390px]:h-[1785px] min-[501px]:h-[1775px] min-[513px]:h-[1535px] min-[513px]:h-[1485px] min-[596px]:h-[1435px] min-[615px]:h-[1785px] min-[640px]:h-[1435px] min-[708px]:h-[1735px] min-[828px]:h-[1715px] min-[838px]:h-[1385px] min-[1024px]:h-[1435px]';

usePowerAppsFormMessages({
  enablePaymentRedirect: true
});
</script>

<style scoped lang="scss">
.reservations-hero {
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  min-height: 3.6rem;
  padding-bottom: 0.48rem;
  aspect-ratio: 720 / 1280;
  background-image: url("/images/reservations/top-banner-m.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.reservations-hero__logos {
  position: absolute;
  top: calc(0.72rem + 50px);
  left: 0.24rem;
  right: 0.24rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.24rem;
  pointer-events: none;
}

.reservations-hero__logo-action {
  display: flex;
  flex-direction: column;
  gap: 0.14rem;
  pointer-events: auto;
}

.reservations-hero__logo-action--e5 {
  align-items: flex-start;
}

.reservations-hero__logo-action--j5 {
  align-items: flex-end;
}

.reservations-hero__logo {
  display: block;
  height: auto;
  object-fit: contain;
}

.reservations-hero__logo--e5 {
  width: min(2.1rem, 42vw);
}

.reservations-hero__logo--j5 {
  width: min(2.5rem, 42vw);
}

.reservations-hero__file-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 0.36rem;
  padding: 0 0.18rem;
  border: 1px solid #67b0c4;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 0.12rem;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0;
  text-decoration: none;
  text-transform: uppercase;
  background-color: #67b0c4;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(103, 176, 196, 0.84);
  }
}

.reservations-hero__content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 7.2rem;
  margin-left: 0.24rem;
  transform: translateY(-50px);
  color: #fff;
}

.reservations-hero__title {
  margin: 0;
  font-family: "Inter", sans-serif;
  font-size: 36px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0;
  text-transform: uppercase;
}

.reservations-hero__description {
  max-width: 6.8rem;
  margin: 16px 0 0;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0;
}

@media (min-width: 640px) {
  .reservations-hero {
    aspect-ratio: 16 / 9;
    background-image: url("/images/reservations/top-banner-w.webp");
    padding-bottom: 0.7rem;
  }

  .reservations-hero__logos {
    top: calc(0.7rem + 50px);
    left: 0.7rem;
    right: 0.7rem;
  }

  .reservations-hero__logo--e5 {
    width: min(3rem, 24vw);
  }

  .reservations-hero__logo--j5 {
    width: min(3.4rem, 24vw);
  }

  .reservations-hero__file-button {
    min-height: 0.42rem;
    padding: 0 0.22rem;
    font-size: 0.14rem;
  }

  .reservations-hero__content {
    margin-left: 0.7rem;
    transform: none;
  }
}

@media (min-width: 1024px) {
  .reservations-hero__logos {
    align-items: center;
  }

  .reservations-hero__logo-action {
    flex-direction: row;
    align-items: center;
    gap: 0.24rem;
  }

  .reservations-hero__logo-action--j5 {
    flex-direction: row-reverse;
  }
}

.reservations-sections {
  display: flex;
  flex-direction: column;
  gap: 0.64rem;
  width: 100%;
  padding: 0.56rem 0.24rem 0.72rem;
  background-color: #0d0e0e;
}

.reservation-section {
  width: 100%;
}

:deep(.reservation-checkout-form) {
  display: flex;
  justify-content: center;
  width: 100%;
}

:deep(.reservation-checkout-form__iframe) {
  width: 100%;
  padding-top: 35px;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.24);
}

@media (min-width: 640px) {
  .reservations-sections {
    padding-right: 0.7rem;
    padding-left: 0.7rem;
  }
}
</style>
