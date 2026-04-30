<template>
  <main class="warranty-page">

    <section class="warranty-section warranty-hero">
      <div v-if="isDesktop">
        <fullArticle class="bg-black" :content="bannerHeroContent" ext="webp" v-animate="{
          effect: 'zoomInCenter',
          immediate: true
        }" />
      </div>
      <div v-else class="warranty-mobile-hero" v-animate="{
        effect: 'fadeInUp',
        immediate: true
      }">
        <BaseImg :src="`${bannerHeroContent.img}_mobile.webp`" class="warranty-mobile-hero__image" :alt="heroTitle" />
        <div class="warranty-mobile-hero__shade"></div>
        <div class="warranty-mobile-hero__content">
          <h1>{{ heroTitle }}</h1>
          <p>{{ heroDescription }}</p>
        </div>
      </div>
    </section>

    <section class="warranty-section warranty-section--intro">
      <div class="warranty-section__inner">
        <div class="warranty-metrics">
          <article v-for="(item, index) in warrantyBlocks" :key="item.title"
            class="warranty-metric mobile-no-observer-animation"
            v-animate="{ effect: 'fadeInUp', delay: index * 0.12, once: true }">
            <div class="warranty-metric__content">
              <BaseImg :src="`after-sales/warranty/${item.icon}`" class="warranty-metric__icon" :alt="item.title"
                loading="lazy" />
              <span>{{ item.title }}</span>
              <strong>{{ item.value }}</strong>
              <p>{{ item.description }}</p>
            </div>
            <div class="warranty-metric__caption">
              <p>{{ item.caption }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section v-for="section in infoSections" :key="section.title" class="warranty-section warranty-section--split">
      <div class="warranty-section__inner warranty-split">
        <div class="warranty-split__copy">
          <div>
            <h2>{{ section.title }}</h2>
            <h2 v-if="section.titleHighlight" class="warranty-split__copy-title-highlight">{{ section.titleHighlight }}
            </h2>
          </div>
          <p v-if="section.description">
            {{ section.description }}
          </p>
        </div>

        <div class="warranty-grid-items">
          <div class="warranty-grid-item mobile-no-observer-animation" v-for="(item, index) in section.items"
            :key="item.subtitle" v-animate="{ effect: 'fadeInUp', delay: index * 0.12, once: true }">
            <div class="warranty-grid-item__index">{{ item.index }}</div>
            <div class="warranty-grid-item__content">
              <div class="warranty-grid-item__content-subtitle">{{ item.subtitle }}</div>
              <div class="warranty-grid-item__content-description">{{ item.description }}</div>
              <div v-if="item.legend" class="warranty-grid-item__content-legend">{{ item.legend }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="warranty-section">
      <div v-if="isDesktop">
        <fullArticle class="bg-black" :content="bannerValidityContent" ext="webp" />
      </div>
      <div v-else class="warranty-mobile-validity warranty-section--validity" v-animate="{
        effect: 'fadeInUp',
        immediate: true
      }">
        <BaseImg :src="`${bannerValidityContent.img}_mobile.webp`" class="warranty-mobile-validity__image"
          :alt="validityTitle" />
        <div class="warranty-mobile-validity__shade"></div>
        <div class="warranty-mobile-validity__content">
          <h1>{{ validityTitle }}</h1>
          <p>{{ validityDescription }}</p>
        </div>
      </div>
    </section>


    <section class="warranty-section warranty-section--downloads">
      <div class="warranty-section__inner">
        <div class="warranty-section-downloads">
          <div class="warranty-section-downloads__heading" v-animate="{ effect: 'fadeInUp', once: true }">
            <h2>Documentación técnica</h2>
            <span>Libretas de garantía y mantenimiento</span>
          </div>
          <div class="warranty-downloads">
            <div v-for="(document, index) in maintenanceDocuments" :key="document.model" class="warranty-download mobile-no-observer-animation"
              v-animate="{ effect: 'fadeInUp', delay: index * 0.12, once: true }">
              <BaseImg :src="`after-sales/warranty/${document.img}.webp`" class="warranty-download__image"
                :alt="document.model" loading="lazy" />
              <div class="warranty-download__content">
                <div class="warranty-download__content-text">
                  <h2>{{ document.model }}</h2>
                  <h4>Manual de servicio</h4>
                </div>
                <a class="warranty-download__content-btn" :href="document.href" download>
                  <BaseImg :src="`after-sales/warranty/icon_download.svg`" class="warranty-download__content-btn-icon" :alt="document.model + ' manual download icon'"
                    loading="lazy" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { useHead } from '#imports';
import { computed, ref } from 'vue';
import fullArticle from '~/components/common/fullArticle.vue';
import useDeviceType from '~/composables/useDeviceType';

defineOptions({
  name: 'AfterSalesWarranty'
});

useHead({
  title: 'Garantia | OMODA & JAECOO',
  meta: [
    {
      name: 'description',
      content: 'Informacion de garantia, cobertura, validez y libretas de mantenimiento OMODA | JAECOO.'
    }
  ]
});

interface WarrantyBlock {
  icon: string;
  title: string;
  value: string;
  description: string;
  caption: string;
}

interface InfoSection {
  title: string;
  titleHighlight: string;
  description?: string;
  items?: InfoSectionItem[];
}

interface InfoSectionItem {
  index: string;
  subtitle: string;
  description: string;
  legend?: string;
}

interface MaintenanceDocument {
  img: string;
  model: string;
  href: string;
}

const { isMobile } = useDeviceType();
const isDesktop = computed(() => {
  return !isMobile.value;
});

const heroTitle = 'GARANTÍA OMODA | JAECOO';
const heroDescription = 'Diseñados para perdurar. Nuestra promesa de calidad se respalda con una cobertura líder en la industria, asegurando que tu única preocupación sea disfrutar el camino.';

const bannerHeroContent = ref({
  isTextWhite: true,
  title: heroTitle,
  subTitle: `
      <div>
        ${heroDescription}
      </div>
    `,
  h5ClassName: 'warranty-hero-copy',
  className: '',
  titleClassName: 'warranty-hero-title',
  imgClass: '!object-center !object-cover brightness-[75%]',
  img: 'after-sales/warranty/bannerHerobg',
  fullArticleClass: 'enlarge',
  titleContentClass: '!justify-end !pb-[0.9rem] !pt-0 md:!pt-0',
});

const warrantyBlocks: WarrantyBlock[] = [
  {
    icon: 'icon_clock.svg',
    title: 'Tiempo',
    value: '200.000 KM',
    description: 'Tranquilidad absoluta desde el primer kilómetro, cubriendo los componentes más vitales de tu vehículo.',
    caption: 'Motor de por vida'
  },
  {
    icon: 'icon_road.svg',
    title: 'Kilometraje',
    value: '200.000 KM',
    description: 'Extensa cobertura diseñada para acompañar tu ritmo de vida, sin importar la distancia recorrida.',
    caption: 'Motor de por vida'
  },
  {
    icon: 'icon_battery.svg',
    title: 'Batería',
    value: '8 AÑOS / 160.000 KM',
    description: 'Protección especializada para componentes de alto voltaje y sistemas de propulsión eléctrica/híbrida.',
    caption: 'Eficiencia certificada'
  }
];

const infoSections: InfoSection[] = [
  {
    title: '¿Qué cubre nuestra ',
    titleHighlight: 'garantía?',
    description: 'Ingeniería de precisión respaldada por un compromiso de excelencia técnica.',
    items: [
      {
        index: '01',
        subtitle: 'Defectos de material',
        description: 'Cualquier anomalía física en los componentes de origen que comprometa la integridad o estética del vehículo bajo condiciones de uso normal.'
      },
      {
        index: '02',
        subtitle: 'Errores de Fabricación',
        description: 'Garantía completa contra cualquier defecto derivado del proceso de ensamblaje en nuestras plantas de alta precisión.'
      },
      {
        index: '03',
        subtitle: 'Costo de Mano de Obra',
        description: 'Toda reparación cubierta por la garantía incluye el costo total de los especialistas certificados en nuestros servicios técnicos.'
      },
      {
        index: '04',
        subtitle: 'Garantía a todos nuestros vehículos*',
        description: 'Cobertura válida en todo el territorio nacional a través de nuestra red oficial de concesionarios autorizados.',
        legend: '*Los vehículos importados directamente por el cliente no están cubiertos.'
      }
    ]
  }
];

const validityTitle = 'Validez de garantía';
const validityDescription = 'La validez de la garantía está sujeta al cumplimiento del plan de mantenimiento periódico especificado en el manual del propietario, siempre que las revisiones se realicen en la red de concesionarios oficiales OMODA | JAECOO.';

const bannerValidityContent = ref({
  isTextWhite: true,
  title: validityTitle,
  subTitle: `
      <div>
        ${validityDescription}
      </div>
    `,
  h5ClassName: 'warranty-validity-copy',
  className: '',
  titleClassName: 'warranty-validity-title',
  imgClass: '!object-center !object-cover brightness-[75%]',
  img: 'after-sales/warranty/banner4bg',
  fullArticleClass: 'enlarge',
  titleContentClass: '!justify-end !pb-[0.9rem] !pt-0 md:!pt-0',
});

const maintenanceDocuments: MaintenanceDocument[] = [
  {
    img: 'section5-item1',
    model: 'Omoda C5',
    href: '/files/Ficha_Tecnica_OMODA-C5.pdf'
  },
  {
    img: 'section5-item2',
    model: 'Omoda E5',
    href: '/files/Ficha_Tecnica_OMODA-E5.pdf'
  },
  {
    img: 'section5-item3',
    model: 'Jaecoo J7',
    href: '/files/Ficha_Tecnica_JAECOO-J7.pdf'
  }
];

</script>

<style lang="scss" scoped>
.warranty-page {
  min-height: 100vh;
  color: #fff;
  background: #050505;
}

:deep(.warranty-hero-title) {
  margin-bottom: 0rem;
  padding: 0;
  font-family: "Inter", "MiSansMedium", sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 1.2;
  color: #fff;
}

:deep(.warranty-hero-copy) {
  max-width: 876px;
  font-family: "Inter", "MiSansNormal", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.35;
  text-align: center;
  color: #fff;
}

.warranty-mobile-hero {
  padding-top: 0.88rem;
  position: relative;
  overflow: hidden;
  background: #050505;
}

.warranty-mobile-hero__image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.warranty-mobile-hero__shade {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
}

.warranty-mobile-hero__content {
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
    margin: 18px auto 0;
    font-family: "Inter", "MiSansNormal", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.42;
  }
}

.warranty-eyebrow {
  font-family: "MiSansMedium", sans-serif;
  font-size: 0.13rem;
  letter-spacing: 0.04rem;
  color: #67B0C4;
  text-transform: uppercase;
}

.warranty-section {
  position: relative;
  overflow: hidden;
  background: #0D0E0E;
}

.warranty-section--intro {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.warranty-section--split {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.warranty-section--validity {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
}

.warranty-section--downloads {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #0D0E0E;
}

.warranty-section__inner {
  width: 100%;
  padding: 100px 48px;
  max-width: 1440px;
  margin: 0 auto;
}

.warranty-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  height: 319px;
}

.warranty-metric {
  border: 1px solid #323232;
  background: #131313;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    &__icon {
      width: 20px;
      height: 20px;
      object-fit: contain;
    }

    span {
      font-family: "Inter", "MiSansMedium", sans-serif;
      font-weight: 300;
      font-size: 16px;
      color: rgba(255, 255, 255, 1);
      letter-spacing: 20%;
      line-height: 100%;
      text-transform: uppercase;
    }

    strong {
      font-family: "Inter", "MiSansMedium", sans-serif;
      font-weight: 500;
      font-size: 24px;
      line-height: 100%;
      letter-spacing: 0;
      color: rgba(255, 255, 255, 1);
    }

    p {
      font-family: "Inter", "MiSansLight", sans-serif;
      font-weight: 200;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0px;
      color: rgba(255, 255, 255, 1);
    }
  }

  &__caption {
    p {
      font-family: "Inter", "MiSansLight", sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: 0px;
      color: #67B0C4;
      text-transform: uppercase;
    }
  }
}

.warranty-split {
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
}

.warranty-split__copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 24px;
  padding: 24px;
  width: 100%;
  max-width: 360px;
  height: 319px;

  h2 {
    font-family: "Inter", "MiSansMedium", sans-serif;
    font-weight: 400;
    font-size: 36px;
    line-height: 100%;
  }

  &-title-highlight {
    color: #67B0C4;
  }

  p {
    font-family: "Inter", "MiSansLight", sans-serif;
    font-weight: 200;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
    color: rgba(255, 255, 255, 1);
  }
}

.warranty-grid-items {
  display: grid;
  row-gap: 24px;
  column-gap: 48px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: 1fr;
}

.warranty-grid-item {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  gap: 16px;

  &__index {
    font-family: "Inter", "MiSansMedium", sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0px;
    color: #67B0C4;
  }
}

.warranty-grid-item__content {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &-subtitle {
    font-family: "Inter", "MiSansMedium", sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 1);
  }

  &-description {
    font-family: "Inter", "MiSansLight", sans-serif;
    font-weight: 200;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
    color: rgba(255, 255, 255, 1);
  }

  &-legend {
    font-family: "Inter", "MiSansLight", sans-serif;
    font-weight: 200;
    font-size: 10px;
    line-height: 24px;
    letter-spacing: 0px;
    color: rgba(255, 255, 255, 1);
  }
}


:deep(.warranty-validity-title) {
  margin-bottom: 0rem;
  padding: 0;
  font-family: "Inter", "MiSansMedium", sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 2;
  color: #fff;
  text-transform: uppercase;
}

:deep(.warranty-validity-copy) {
  max-width: 740px;
  font-family: "Inter", "MiSansNormal", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  text-align: center;
  color: #fff;
}

.warranty-mobile-validity__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.warranty-mobile-validity__shade {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
}

.warranty-mobile-validity__content {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 64px 48px;
  min-height: 100%;
  width: 100%;
  z-index: 2;
  color: #fff;
  text-align: center;

  h1 {
    margin: 0;
    font-family: "Inter", "MiSansMedium", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2;
    text-transform: uppercase;
  }

  p {
    max-width: 876px;
    margin: 0;
    font-family: "Inter", "MiSansNormal", sans-serif;
    font-size: 12px;
    font-weight: 300;
    line-height: 24px;
  }
}

.warranty-section-downloads {
  font-family: "Inter", "MiSansMedium", sans-serif;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 56px;

  &__heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;

    h2 {
      font-weight: 400;
      font-size: 36px;
      line-height: 100%;
      letter-spacing: 0px;
      text-transform: uppercase;
      text-align: center;
    }

    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: 0px;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      text-transform: uppercase;
      color: #67B0C4;
    }
  }
}


.warranty-downloads {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 56px;
  width: 100%;
}

.warranty-download {
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
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 16px;

    &-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 16px;

      h2 {
        font-family: "Inter", "MiSansMedium", sans-serif;
        font-weight: 500;
        font-size: 24px;
        line-height: 100%;
        letter-spacing: 0;
        color: rgba(255, 255, 255, 1);
        text-transform: uppercase;
      }

      h4 {
        font-family: "Inter", "MiSansMedium", sans-serif;
        font-weight: 300;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 0;
        color: rgba(255, 255, 255, 1);
        text-transform: uppercase;
      }
    }
  
    &-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      min-width: 80px;
      height: 80px;
      min-height: 80px;
      background: #67B0C4;
      color: rgba(255, 255, 255, 1);

      &-icon {
        width: 20px;
        height: 20px;
        object-fit: contain;
      }
      &:hover {
        background: #93cada;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  .warranty-eyebrow {
    font-size: 0.18rem;
  }

  .warranty-section__inner {
    padding: 36px 48px;
    width: 100%;
  }

  .warranty-section__heading {
    h2 {
      font-size: 36px;
    }

    p:last-child {
      font-size: 0.24rem;
    }
  }

  .warranty-metrics,
  .warranty-downloads {
    grid-template-columns: 1fr;
  }

  .warranty-downloads {
    justify-items: center;
  }

  .warranty-metrics {
    height: 100%;
  }

  .warranty-metric {
    min-height: auto;
    gap: 16px;
  }

  .warranty-split {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  .warranty-split__copy {
    align-items: center;
    height: 100%;

    h2 {
      font-size: 20px;
      text-align: center;
    }

    p {
      font-size: 16px;
      text-align: center;
    }
  }

  .warranty-grid-items {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  :deep(.mobile-no-observer-animation) {
    opacity: 1 !important;
    animation: none !important;
  }

  .warranty-section-downloads__heading {
    h2 {
      font-size: 20px;
      line-height: 1.3;
    }
    span {
      font-size: 12px;
      line-height: 1.3;
    }
  }

  .warranty-download {
    width: fit-content;
  }
}
</style>
