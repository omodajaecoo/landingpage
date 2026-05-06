<template>
  <main class="maintenance-page">
    <section class="maintenance-section maintenance-hero">
      <div v-if="isDesktop">
        <fullArticle class="bg-black" :content="bannerHeroContent" ext="webp" v-animate="{
          effect: 'zoomInCenter',
          immediate: true
        }" />
      </div>
      <div v-else class="maintenance-mobile-hero" v-animate="{
        effect: 'fadeInUp',
        immediate: true
      }">
        <BaseImg :src="`${bannerHeroContent.img}_mobile.webp`" class="maintenance-mobile-hero__image" :alt="heroTitle" />
        <div class="maintenance-mobile-hero__shade"></div>
        <div class="maintenance-mobile-hero__content">
          <h1>{{ heroTitle }}</h1>
          <p>{{ heroDescription }}</p>
        </div>
      </div>
    </section>

    <section class="maintenance-section maintenance-section--downloads">
      <div class="maintenance-section__inner">
        <div class="maintenance-section-downloads">
          <div class="maintenance-section-downloads__heading mobile-no-observer-animation" v-animate="{ effect: 'fadeInUp', once: true }">
            <h2>Intervalos de servicio</h2>
            <h4>Protocolos rigurosos diseñados por ingenieros para cada vehículo en específico.</h4>
          </div>
          <div class="maintenance-download-error" v-if="downloadError" v-animate="{ effect: 'fadeInUp', delay: 0.25, once: true }">
            <p class="maintenance-download-error__message" role="alert">
              {{ downloadError }}
            </p>
          </div>
          <div class="maintenance-downloads">
            <div v-for="(document, index) in maintenanceDocuments" :key="document.model" class="maintenance-download">
              <BaseImg :src="`after-sales/warranty/${document.img}.webp`" class="maintenance-download__image"
                :alt="document.model" loading="lazy" />
              <div class="maintenance-download__content">
                <div class="maintenance-download__content-text">
                  <h2>{{ document.model }}</h2>
                  <div class="maintenance-download__content-text-value">
                    <p>Primer servicio</p>
                    <span class="custom-blue">{{ document.service }}</span>
                  </div>
                  <div class="maintenance-download__content-text-value">
                    <p>Frecuencia posterior</p>
                    <span>{{ document.frequency }}</span>
                  </div>
                </div>
                <div class="maintenance-download__content-btn-container">
                  <h3>Pautas de mantenimiento</h3>
                  <button class="maintenance-download__content-btn" type="button"
                    :disabled="downloadingModel === document.model"
                    :aria-label="`Descargar pauta de mantenimiento ${document.model}`"
                    @click="downloadDocument(document)">
                    <span v-if="downloadingModel === document.model" class="maintenance-download__loader"></span>
                    <p v-else class="maintenance-download__content-btn-icon">Descargar PDF</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="maintenance-section maintenance-section--reasons">
      <div class="maintenance-section__inner">
        <div class="maintenance-section-reasons">
          <div class="maintenance-section-reasons__heading" v-animate="{ effect: 'fadeInUp', once: true }">
            <h2>¿Por qué realizarlo en lugares autorizados?</h2>
          </div>
          <div class="maintenance-reasons">
            <div class="maintenance-left-reasons">
              <article v-for="(item, index) in getReasonsByGroup('left')" :key="item.title"
                class="maintenance-reason mobile-no-observer-animation"
                v-animate="{ effect: 'fadeInUp', delay: index * 0.12, once: true }">
                <div class="maintenance-reason__content">
                  <BaseImg :src="`after-sales/maintenance/${item.icon}`" class="maintenance-reason__icon" :alt="item.title"
                    loading="lazy" />
                  <span>{{ item.title }}</span>
                  <p>{{ item.description }}</p>
                </div>
              </article>
            </div>
            
            <div class="maintenance-right-reasons">
              <div class="maintenance-topRight-reasons">
                <article v-for="(item, index) in getReasonsByGroup('topRight')" :key="item.title"
                  class="maintenance-reason mobile-no-observer-animation"
                  v-animate="{ effect: 'fadeInUp', delay: 0.12, once: true }">
                  <div class="maintenance-reason__content">
                    <BaseImg :src="`after-sales/maintenance/${item.icon}`" class="maintenance-reason__icon" :alt="item.title"
                      loading="lazy" />
                    <span>{{ item.title }}</span>
                    <p>{{ item.description }}</p>
                  </div>
                </article>
              </div>
              <div class="maintenance-bottomRight-reasons">
                <article v-for="(item, index) in getReasonsByGroup('bottomRight')" :key="item.title"
                  class="maintenance-reason maintenance-reason--image mobile-no-observer-animation"
                  :style="item.img ? { '--reason-bg-image': `url('/images/${item.img}')` } : undefined"
                  v-animate="{ effect: 'fadeInUp', delay: 0.12, once: true }">
                  <div class="maintenance-reason__content">
                    <BaseImg :src="`after-sales/maintenance/${item.icon}`" class="maintenance-reason__icon" :alt="item.title"
                      loading="lazy" />
                    <span>{{ item.title }}</span>
                    <p>{{ item.description }}</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="maintenance-section maintenance-section--cta">
      <div class="maintenance-section__inner">
        <div class="maintenance-cta">
          <div class="maintenance-cta__content">
            <h2>Optimice el rendimiento de su vehículo hoy</h2>
            <p>Encuentre su centro de servicio autorizado más cercano y agende su cita técnica en minutos.</p>
          </div>
          <button type="button" class="maintenance-cta__button" @click="goToAuthorizedService">
            Encuéntranos
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { useHead } from '#imports';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import fullArticle from '~/components/common/fullArticle.vue';
import useDeviceType from '~/composables/useDeviceType';

defineOptions({
  name: 'AfterSalesMaintenance'
});

useHead({
  title: 'Mantenimiento - OMODA | JAECOO',
  meta: [
    {
      name: 'description',
      content: 'Información de mantenimiento, pautas preventivas y puntos autorizados OMODA | JAECOO.'
    }
  ]
});

interface MaintenanceDocument {
  img: string;
  model: string;
  service: string;
  frequency: string;
  href: string;
  filename: string;
}

interface AuthorizedReasons {
  group: 'left' | 'topRight' | 'bottomRight';
  reasons: AuthorizedReason[];
}

interface AuthorizedReason {
  icon: string;
  title: string;
  description: string;
  img?: string;
}

const router = useRouter();
const { isMobile } = useDeviceType();
const isDesktop = computed(() => {
  return !isMobile.value;
});

const heroTitle = 'MANTENIMIENTO DE EXCELENCIA';
const heroDescription = 'La ingeniería de precisión requiere un cuidado a medida. Asegure el rendimiento óptimo y la longevidad de su OMODA | JAECOO con nuestros protocolos de servicio técnicos.';

const bannerHeroContent = ref({
  isTextWhite: true,
  title: heroTitle,
  subTitle: `
      <div>
        ${heroDescription}
      </div>
    `,
  h5ClassName: 'maintenance-hero-copy',
  className: '',
  titleClassName: 'maintenance-hero-title',
  imgClass: '!object-top !object-cover brightness-[60%]',
  img: 'after-sales/maintenance/bannerHerobg',
  fullArticleClass: 'enlarge',
  titleContentClass: '!justify-end !pb-[0.9rem] !pt-0 md:!pt-0',
});


const maintenanceDocuments: MaintenanceDocument[] = [
  {
    img: 'section5-item1',
    model: 'Omoda C5',
    service: '5,000 KM',
    frequency: 'Cada 10,000 KM',
    href: '/files/Ficha_Tecnica_OMODA-C5.pdf',
    filename: 'Pauta_Mantenimiento_OMODA-C5.pdf'
  },
  {
    img: 'section5-item2',
    model: 'Omoda E5',
    service: '5,000 KM',
    frequency: 'Cada 10,000 KM',
    href: '/files/Ficha_Tecnica_OMODA-E5.pdf',
    filename: 'Pauta_Mantenimiento_OMODA-E5.pdf'
  },
  {
    img: 'section5-item3',
    model: 'Jaecoo J7',
    service: '10,000 KM',
    frequency: 'Cada 20,000 KM',
    href: '/files/Ficha_Tecnica_JAECOO-J7.pdf',
    filename: 'Pauta_Mantenimiento_JAECOO-J7.pdf'
  }
];

const authorizedReasons: AuthorizedReasons[] = [
  {
    group: 'left',
    reasons: [
      {
        icon: 'icon_users.svg',
        title: 'Expertos',
        description: 'Personal técnico certificado bajo los estándares globales de fábrica.'
      },
      {
        icon: 'icon_tool.svg',
        title: 'Entrenamiento',
        description: 'Capacitación continua en nuevas arquitecturas electrónicas y EV.'
      }
    ]
  },
  {
    group: 'topRight',
    reasons: [
      {
        icon: 'icon_cpu.svg',
        title: 'Tecnología',
        description: 'Herramientas de diagnóstico exclusivas de última generación.'
      },
      {
        icon: 'icon_award.svg',
        title: 'Partes originales',
        description: 'Repuestos originales que garantizan el ajuste y desempeño perfecto.'
      }
    ]
  },
  {
    group: 'bottomRight',
    reasons: [
      {
        icon: 'icon_shield.svg',
        title: 'Preservación de garantía',
        description: 'Cumplimiento total para mantener la garantía oficial del fabricante.',
        img: 'after-sales/maintenance/reasonWarranty.webp'
      }
    ]
  }
];

const getReasonsByGroup = (group: AuthorizedReasons['group']) => {
  const groupData = authorizedReasons.find(item => item.group === group);
  return groupData ? groupData.reasons : [];
};

const downloadingModel = ref('');
const downloadError = ref('');

const downloadDocument = async (document: MaintenanceDocument) => {
  downloadError.value = '';
  downloadingModel.value = document.model;

  try {
    const response = await fetch(document.href, { method: 'HEAD' });
    if (!response.ok) {
      throw new Error('Document unavailable');
    }

    const link = window.document.createElement('a');
    link.href = document.href;
    link.download = document.filename;
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
  } catch {
    downloadError.value = 'No fue posible descargar el documento. Por favor intenta nuevamente más tarde.';
  } finally {
    downloadingModel.value = '';
  }
};

const goToAuthorizedService = () => {
  router.push({ path: '/authorized-service' });
};
</script>

<style lang="scss" scoped>
.custom-blue {
  color: #67B0C4;
}
.maintenance-page {
  min-height: 100vh;
  color: #fff;
  background: #050505;
}

:deep(.maintenance-hero-title) {
  margin-bottom: 0rem;
  padding: 0;
  font-family: "Inter", "MiSansMedium", sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 1.2;
  color: #fff;
}

:deep(.maintenance-hero-copy) {
  max-width: 876px;
  font-family: "Inter", "MiSansNormal", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.35;
  text-align: center;
  color: #fff;
}

.maintenance-mobile-hero {
  padding-top: 0.88rem;
  position: relative;
  overflow: hidden;
  background: #050505;
}

.maintenance-mobile-hero__image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.maintenance-mobile-hero__shade {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
}

.maintenance-mobile-hero__content {
  position: absolute;
  top: calc(0.88rem + ((100% - 0.88rem) / 2));
  left: 50%;
  z-index: 2;
  width: 100%;
  padding: 0 16px;
  color: #fff;
  text-align: center;
  transform: translate(-50%, -50%);
  gap: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 0;
    font-family: "Inter", "MiSansMedium", sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    text-transform: uppercase;
  }

  p {
    max-width: 876px;
    font-family: "Inter", "MiSansNormal", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.42;
  }
}

.maintenance-section {
  position: relative;
  overflow: hidden;
  background: #0D0E0E;
}

.maintenance-section--reasons,
.maintenance-section--downloads,
.maintenance-section--cta {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.maintenance-section--cta {
  background: #131313;
}

.maintenance-section__inner {
  width: 100%;
  padding: 100px 48px;
  max-width: 1440px;
  margin: 0 auto;
}

.maintenance-section-reasons__heading,
.maintenance-section-downloads__heading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  h2 {
    font-family: "Inter", "MiSansMedium", sans-serif;
    font-weight: 400;
    font-size: 36px;
    line-height: 100%;
    letter-spacing: 0px;
    text-transform: uppercase;
    text-align: center;
  }

  h4 {
    font-family: "Inter", "MiSansMedium", sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: center;
  }
}

.maintenance-section-downloads {
  font-family: "Inter", "MiSansMedium", sans-serif;
  display: flex;
  width: 100%;
  gap: 56px;
  flex-direction: column;
  justify-content: center;
}

.maintenance-download-error {
  display: flex;
  justify-content: center;
  width: 100%;

  &__message {
    color: #fff;
    max-width: 720px;
    font-family: "Inter", "MiSansNormal", sans-serif;
    font-size: 14px;
    line-height: 1.5;
    text-align: center;
    background: rgba(191, 52, 52, 0.25);
    border: 1px solid rgba(255, 120, 120, 0.45);
    padding: 12px 16px;
  }
}

.maintenance-downloads {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  width: 100%;
}

.maintenance-download {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #131313;

  &__image {
    width: 100%;
    height: auto;
    max-height: 269px;
    object-fit: contain;
  }

  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    gap: 32px;
    padding: 24px;

    &-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      flex: 1;
      min-width: 0;
      gap: 16px;

      h2 {
        font-family: "Inter", "MiSansMedium", sans-serif;
        font-weight: 500;
        font-size: 24px;
        line-height: 100%;
        color: rgba(255, 255, 255, 1);
        text-transform: uppercase;
        width: 100%;
      }

      &-value {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 8px;
        padding-bottom: 16px;
        border-bottom: #393838 1px solid;

        p {
          font-family: "Inter", "MiSansMedium", sans-serif;
          font-weight: 300;
          font-size: 16px;
          line-height: 1;
          color: #B9B9B9;
        }

        span {
          font-family: "Inter", "MiSansMedium", sans-serif;
          font-weight: 500;
          font-size: 16px;
          line-height: 1;
          text-transform: uppercase;
          text-align: right;
        }
      }
    }

    &-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #FFFF;
      cursor: pointer;
      transition: background-color 0.25s ease;
      padding: 20px;

      &-container {
        min-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 16px;

        h3 {
          font-family: "Inter", "MiSansMedium", sans-serif;
          font-weight: 500;
          font-size: 24px;
          line-height: 1.2;
          text-align: center;
          color: rgba(255, 255, 255, 1);
        }
      }

      &:hover {
        background: #93cada;
        border-color: #93cada;
      }

      &:disabled {
        cursor: progress;
        opacity: 0.8;
      }

      p {
        margin: 0;
        font-family: "Inter", "MiSansMedium", sans-serif;
        font-weight: 300;
        font-size: 20px;
        line-height: 1;
      }
    }
  }
}

.maintenance-download__loader {
  width: 22px;
  height: 22px;
  border: 2px solid rgba(255, 255, 255, 0.45);
  border-top-color: #fff;
  border-radius: 50%;
  animation: maintenance-loader 0.7s linear infinite;
}

.maintenance-section-reasons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.maintenance-section-reasons__heading {
  h2 {
    max-width: 620px;
    line-height: 1.2;
  }
}

.maintenance-reasons {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: stretch;
  gap: 24px;
}

.maintenance-left-reasons,
.maintenance-right-reasons,
.maintenance-bottomRight-reasons {
  display: grid;
  align-items: stretch;
  gap: 32px;
}

.maintenance-left-reasons,
.maintenance-right-reasons {
  height: 100%;
}

.maintenance-left-reasons {
  grid-template-rows: repeat(2, minmax(0, 1fr));
}

.maintenance-right-reasons {
  grid-template-rows: auto auto;
  align-content: start;
}

.maintenance-topRight-reasons {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: 1fr;
  align-items: stretch;
  gap: 32px;
}

.maintenance-bottomRight-reasons {
  grid-template-rows: auto;
}

.maintenance-bottomRight-reasons > .maintenance-reason {
  height: auto;
}

.maintenance-reason {
  background: #131313;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  padding: 56px 32px;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    span {
      font-family: "Inter", "MiSansMedium", sans-serif;
      font-weight: 500;
      font-size: 24px;
      color: rgba(255, 255, 255, 1);
      line-height: 100%;
    }

    p {
      font-family: "Inter", "MiSansLight", sans-serif;
      font-weight: 200;
      font-size: 16px;
      line-height: 24px;
      color: rgba(255, 255, 255, 1);
    }
  }

  &__icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
}

.maintenance-reason--image {
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(rgba(103, 176, 196, 0.8), rgba(103, 176, 196, 0.8)), var(--reason-bg-image);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.maintenance-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  width: 100%;

}

.maintenance-cta__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  text-align: center;

  h2 {
    margin: 0;
    font-family: "Inter", "MiSansMedium", sans-serif;
    font-size: 36px;
    font-weight: 400;
    line-height: 1.1;
    text-transform: uppercase;
  }

  p {
    font-family: "Inter", "MiSansNormal", sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
  }
}

.maintenance-cta__button {
  padding: 20px;
  border: 1px solid #67B0C4;
  background: #67B0C4;
  color: #fff;
  font-family: "Inter", "MiSansMedium", sans-serif;
  font-size: 20px;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.25s ease, border-color 0.25s ease;

  &:hover {
    background: #93cada;
    border-color: #93cada;
  }
}

@keyframes maintenance-loader {
  to {
    transform: rotate(360deg);
  }
}

@media screen and (max-width: 1023px) {
  .maintenance-section__inner {
    padding: 32px 48px;
    width: 100%;
  }

  .maintenance-section-reasons__heading,
  .maintenance-section-downloads__heading {
    
    h2 {
      font-size: 20px;
      line-height: 1.3;
    }

    h4 {
      font-size: 16px;
      line-height: 1.3;
    }
  }

  .maintenance-reasons,
  .maintenance-downloads {
    grid-template-columns: 1fr;
  }

  .maintenance-topRight-reasons {
    grid-template-columns: 1fr;
  }

  .maintenance-left-reasons,
  .maintenance-right-reasons,
  .maintenance-topRight-reasons,
  .maintenance-bottomRight-reasons {
    grid-template-rows: auto;
    grid-auto-rows: auto;
  }

  .maintenance-downloads {
    justify-items: center;
  }

  .maintenance-download__content-text-value {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .maintenance-reason {
    height: auto;
    min-height: auto;
    gap: 16px;
  }


  :deep(.mobile-no-observer-animation) {
    opacity: 1 !important;
    animation: none !important;
  }

  .maintenance-download {
    width: fit-content;
  }

  .maintenance-cta__content {
    h2 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
      line-height: 1.5;
    }
  }
}
</style>
