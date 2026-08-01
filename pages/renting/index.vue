<template>
  <main class="renting-page">
    <section
      class="renting-section renting-banner renting-banner--one"
      aria-label="Renting"
    >
      <div class="renting-banner__content">
        <h1 class="renting-banner__title">
          ¿Qué es Renting<br />
          Omoda | Jaecoo?
        </h1>

        <p class="renting-banner__description">
          Soluciones de movilidad integrales creadas a la medida, desde 1 a 5 años. Selecciona vehículos nuevos que se ajustan a tu requerimiento empresarial o personal. Construiremos el plan que más se acomode a tu presupuesto en un solo pago fijo mensual. Optimizamos tus recursos, generamos ahorro y mejoramos la productividad de tu empresa.
        </p>

        <NuxtLink to="/quote" class="renting-banner__button-link">
          <BaseButton
            type="text"
            class="renting-banner__button font-interSemiRegular text-[16px] sm:text-[20px] px-[10px] py-[10px] sm:px-[20px] sm:py-[20px] border border-[#67B0C4] leading-none !bg-[#67B0C4]"
          >
            SOLICITA TU COTIZACIÓN
          </BaseButton>
        </NuxtLink>
      </div>
    </section>

    <section class="renting-section renting-includes" aria-labelledby="renting-includes-title">
      <div class="renting-includes__container">
        <h2 id="renting-includes-title" class="renting-includes__title">
          El pago fijo mensual <span>incluye</span>
        </h2>

        <div class="renting-includes__grid">
          <article
            v-for="feature in rentingFeatures"
            :key="feature.title"
            class="renting-feature-card"
          >
            <img
              :src="feature.icon"
              :alt="feature.title"
              class="renting-feature-card__icon"
              loading="lazy"
            />

            <h3 class="renting-feature-card__title">
              {{ feature.title }}
            </h3>

            <p v-if="feature.description" class="renting-feature-card__description">
              {{ feature.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section
      class="renting-section renting-banner renting-banner--two"
      aria-label="Renting"
    >
      <div class="renting-banner-two__content">
        <h2 class="renting-banner-two__title">
          <span>Beneficios omoda | jaecoo</span>
          <span class="renting-banner-two__title-accent">
            Renting con enterprise
          </span>
        </h2>
      </div>
    </section>

    <section class="renting-section renting-info">
      <div class="renting-info__grid">
        <article
          v-for="card in rentingInfoCards"
          :key="card.title"
          class="renting-info-card"
        >
          <p class="renting-info-card__category">
            {{ card.category }}
          </p>

          <h3 class="renting-info-card__title">
            {{ card.title }}
          </h3>

          <p class="renting-info-card__description">
            {{ card.description }}
          </p>
        </article>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'RentingPage',
});

const rentingFeatures = [
  {
    icon: '/icons/car.svg',
    title: 'Vehículos OMODA/JAECOO 0 km',
    description: 'Modelos nuevos seleccionados según los requerimientos de tu operación.',
  },
  {
    icon: '/icons/route.svg',
    title: 'Recorrido a la medida',
    description: 'Kilometraje mensual/anual de acuerdo con la dinámica de tu operación.',
  },
  {
    icon: '/icons/file-text.svg',
    title: 'Trámites legales',
    description: 'Matriculación anual y revisión vehicular.',
  },
  {
    icon: '/icons/shield-check.svg',
    title: 'Cobertura total',
    description: 'Seguro vehicular y administración de siniestros.',
  },
  {
    icon: '/icons/wrench.svg',
    title: 'Mantenimiento 360°',
    description: 'Mantenimiento preventivo y correctivo predecible de tus vehículos.',
  },
  {
    icon: '/icons/rotate-ccw-key.svg',
    title: 'Movilidad garantizada',
    description: 'Auto sustituto disponible.',
  },
  {
    icon: '/icons/map-pinned.svg',
    title: 'Respaldo nacional',
    description: 'Amplia red de cobertura a nivel nacional con el respaldo de Automotores y Anexos.',
  },
  {
    icon: '/icons/satellite.svg',
    title: 'Telemetría satelital',
    description: 'Dispositivo de rastreo satelital con información accesible al cliente.',
  },
  {
    icon: '/icons/headset.svg',
    title: 'Atención VIP',
    description: 'Gestor de flota asignado a tu contrato.',
  },
];

const rentingInfoCards = [
  {
    category: 'Beneficio',
    title: 'Flexibilidad',
    description: 'Planes adaptados a las necesidades de movilidad de tu empresa o uso personal.',
  },
  {
    category: 'Beneficio',
    title: 'Control',
    description: 'Un pago mensual fijo para simplificar la administracion y planificacion de gastos.',
  },
  {
    category: 'Beneficio',
    title: 'Respaldo',
    description: 'Acompanamiento especializado durante todo el periodo de renting.',
  },
];
</script>

<style lang="scss" scoped>
.renting-page {
  background-color: #0d0e0e;
}

.renting-section {
  width: 100%;
  background-color: #0d0e0e;
}

.renting-banner {
  position: relative;
  min-height: 320px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.renting-banner--two::before {
  position: absolute;
  inset: 0;
  content: '';
  background: #00000066;
}

.renting-banner-two__content {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 24px 24px 0;
}

.renting-banner-two__title {
  display: flex;
  margin: 0;
  flex-direction: column;
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0;
  text-align: center;
  text-transform: uppercase;
}

.renting-banner-two__title-accent {
  color: #67b0c4;
}

.renting-banner__content {
  position: absolute;
  left: 24px;
  right: 24px;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  transform: translateY(-50%);
  color: #fff;
}

.renting-banner__title {
  margin: 0;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0;
  text-transform: uppercase;
}

.renting-banner__description {
  margin: 0;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0;
}

.renting-banner__button-link {
  display: inline-flex;
  align-items: center;
  width: 100%;
  line-height: 1;
  text-decoration: none;
}

.renting-banner__button {
  width: 100%;
}

.renting-banner--one {
  background-image: url('/images/renting/banner-1.jpg');
}

.renting-banner--two {
  background-image: url('/images/renting/banner-2.png');
}

.renting-section--empty {
  min-height: 240px;
}

.renting-includes {
  padding: 64px 24px;
}

.renting-includes__container {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
}

.renting-includes__title {
  margin: 0;
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  text-transform: uppercase;
}

.renting-includes__title span {
  color: #67b0c4;
}

.renting-includes__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 40px;
}

.renting-feature-card {
  display: flex;
  min-height: 136px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-color: #0d0e0e;
}

.renting-feature-card__icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.renting-feature-card__title {
  margin: 0;
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  text-transform: uppercase;
}

.renting-feature-card__description {
  margin: 0;
  color: rgb(255 255 255 / 72%);
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
}

.renting-info {
  padding: 64px 24px;
}

.renting-info__grid {
  display: grid;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  grid-template-columns: 1fr;
  gap: 24px;
}

.renting-info-card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  border: 1px solid #323232;
  background-color: #131313;
  color: #fff;
}

.renting-info-card__category {
  margin: 0;
  color: #67b0c4;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0;
  text-transform: uppercase;
}

.renting-info-card__title {
  margin: 0;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0;
}

.renting-info-card__description {
  margin: 0;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0;
}

@media (min-width: 768px) {
  .renting-banner {
    min-height: 520px;
  }

  .renting-banner__content {
    left: 70px;
    right: auto;
    max-width: 520px;
  }

  .renting-banner__title {
    font-size: 36px;
  }

  .renting-banner__description {
    font-size: 16px;
  }

  .renting-banner-two__title {
    font-size: 36px;
    line-height: 42px;
  }

  .renting-banner-two__content {
    padding-bottom: 96px;
  }

  .renting-banner__button-link,
  .renting-banner__button {
    width: auto;
  }

  .renting-section--empty {
    min-height: 360px;
  }

  .renting-includes {
    padding: 88px 70px;
  }

  .renting-includes__title {
    font-size: 36px;
  }

  .renting-includes__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 28px;
    margin-top: 56px;
  }

  .renting-feature-card {
    align-items: flex-start;
  }

  .renting-feature-card__title {
    text-align: left;
  }

  .renting-feature-card__description {
    font-size: 16px;
    text-align: left;
  }

  .renting-info {
    padding: 88px 70px;
  }

  .renting-info__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .renting-info-card__category {
    font-size: 14px;
  }

  .renting-info-card__title {
    font-size: 24px;
  }

  .renting-info-card__description {
    font-size: 16px;
  }
}

@media (min-width: 1280px) {
  .renting-banner {
    min-height: 720px;
  }
}
</style>
