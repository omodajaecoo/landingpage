<template>
  <main class="spare-parts-page">
    <section class="spare-parts-section spare-parts-hero">
      <div v-if="isDesktop">
        <fullArticle class="bg-black" :content="bannerHeroContent" ext="webp" v-animate="{
          effect: 'zoomInCenter',
          immediate: true
        }" />
      </div>
      <div v-else class="spare-parts-mobile-hero" v-animate="{
        effect: 'fadeInUp',
        immediate: true
      }">
        <BaseImg :src="`${bannerHeroContent.img}_mobile.webp`" class="spare-parts-mobile-hero__image" :alt="heroTitle" />
        <div class="spare-parts-mobile-hero__shade"></div>
        <div class="spare-parts-mobile-hero__content">
          <h1>{{ heroTitle }}</h1>
          <p>{{ heroDescription }}</p>
        </div>
      </div>
    </section>

    <section class="spare-parts-section spare-parts-section--intro">
      <div class="spare-parts-section__inner spare-parts-intro">
        <div class="spare-parts-image-panel mobile-no-observer-animation" v-animate="{ effect: 'fadeInDown', once: true }">
          <BaseImg
            v-if="!introImageError"
            :src="`${imagePath}/lubricant.webp`"
            class="spare-parts-image-panel__img"
            alt="Lubricante OMODA JAECOO"
            loading="lazy"
            @error="introImageError = true"
          />
          <div v-else class="spare-parts-image-fallback">
            <span>Lubricante OMODA JAECOO</span>
          </div>
        </div>
        <div class="spare-parts-intro__copy mobile-no-observer-animation" v-animate="{ effect: 'fadeInDown', delay: 0.12, once: true }">
          <div class="spare-parts-intro__copy-border">
            <h2>Lubricante OMODA | JAECOO</h2>
          </div>
          <p>{{ lubricantDescription }}</p>
        </div>
      </div>
    </section>

    <section class="spare-parts-section spare-parts-secondary-image">
      <div>
        <BaseImg
          v-if="!secondaryImageError"
          :src="`${secondaryImageSrc}.webp`"
          class="spare-parts-secondary-image__img"
          alt="Repuestos genuinos OMODA JAECOO"
          loading="lazy"
          @error="secondaryImageError = true"
        />
        <div v-else class="spare-parts-image-fallback spare-parts-image-fallback--wide">
          <span>Repuestos genuinos</span>
        </div>
      </div>
    </section>

    <section class="spare-parts-section spare-parts-section--benefits">
      <div class="spare-parts-section__inner spare-parts-benefits">
        <div class="spare-parts-benefits__grid">
          <article
            v-for="(benefit, index) in lubricantBenefits"
            :key="benefit.title"
            class="spare-parts-benefit"
            v-animate="{ effect: 'fadeInDown', delay: index * 0.12, once: true }"
          >
            <BaseImg :src="`${imagePath}/${benefit.icon}`" class="spare-parts-benefit__icon" :alt="benefit.title"
              loading="lazy" />
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="spare-parts-section spare-parts-section--categories">
      <div class="spare-parts-section__inner spare-parts-categories">
        <article
          v-for="category in sparePartCategories"
          :key="category.title"
          class="spare-parts-category" v-animate="{ effect: `fadeIn${category.imagePosition === 'right' ? 'Right' : 'Left'}`, delay: 0.1, once: true }"
          :class="{ 'spare-parts-category--reverse': category.imagePosition === 'right' }"
        >
          <div class="spare-parts-image-panel spare-parts-category__image">
            <BaseImg
              v-if="!categoryImageErrors[category.image]"
              :src="`${imagePath}/${category.image}.webp`"
              class="spare-parts-category-image-panel__img"
              :alt="category.title"
              loading="lazy"
              @error="categoryImageErrors[category.image] = true"
            />
            <div v-else class="spare-parts-image-fallback">
              <span>{{ category.title }}</span>
            </div>
          </div>
          <div class="spare-parts-category__content">
            <div class="spare-parts-category__copy">
              <div class="spare-parts-category__copy-border">
                <h2>{{ category.title }}</h2>
              </div>
              <p>{{ category.description }}</p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="spare-parts-section spare-parts-section--cta">
      <div class="spare-parts-section__inner">
        <div class="spare-parts-cta" v-animate="{ effect: 'fadeInUp', once: true }">
          <div class="spare-parts-cta__content">
            <h2>Asistencia en cada <br /> kilometro</h2>
            <p>Accede a nuestra red nacional de talleres oficiales y centros de repuestos.<br /> 
              Tu OMODA | JAECOO merece el cuidado de expertos.</p>
          </div>
          <button type="button" class="spare-parts-cta__button" @click="goToAuthorizedService">
            Encuéntranos
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { useHead } from '#imports';
import { computed, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import fullArticle from '~/components/common/fullArticle.vue';
import useDeviceType from '~/composables/useDeviceType';

defineOptions({
  name: 'AfterSalesSpareParts'
});

useHead({
  title: 'Repuestos - OMODA | JAECOO',
  meta: [
    {
      name: 'description',
      content: 'Información de repuestos genuinos, lubricantes recomendados y concesionarios autorizados OMODA | JAECOO.'
    }
  ]
});

interface LubricantBenefit {
  icon: string;
  title: string;
  description: string;
}

interface SparePartCategory {
  title: string;
  description: string;
  image: string;
  imagePosition: 'left' | 'right';
}

const router = useRouter();
const { isMobile } = useDeviceType();
const isDesktop = computed(() => {
  return !isMobile.value;
});

const imagePath = 'after-sales/spare-parts';
const heroTitle = 'REPUESTOS GENUINOS';
const heroDescription = 'Mantén la integridad estructural y el rendimiento dinámico de tu vehículo con componentes diseñados específicamente para superar los estándares globales de ingeniería.';
const lubricantDescription = 'Nuestro lubricante motor y familia de lubricantes recomendados, no solo protege la inversión en el vehículo, sino que también optimiza el rendimiento, la seguridad y la eficiencia a largo plazo de tu vehículo.';

const introImageError = ref(false);
const secondaryImageError = ref(false);
const categoryImageErrors = reactive<Record<string, boolean>>({});

const bannerHeroContent = ref({
  isTextWhite: true,
  title: heroTitle,
  subTitle: `
      <div>
        ${heroDescription}
      </div>
    `,
  h5ClassName: 'spare-parts-hero-copy',
  className: '',
  titleClassName: 'spare-parts-hero-title',
  imgClass: '!object-center !object-cover brightness-[60%]',
  img: `${imagePath}/bannerHerobg`,
  fullArticleClass: 'enlarge',
  titleContentClass: '!justify-end !pb-[0.9rem] !pt-0 md:!pt-0',
});

const secondaryImageSrc = computed(() => {
  return `${imagePath}/banner3bg${isDesktop.value ? '' : '_mobile'}`;
});

const lubricantBenefits: LubricantBenefit[] = [
  {
    icon: 'icon_shield.svg',
    title: 'Protección total',
    description: 'Cuida cada pieza del motor, reduciendo el desgaste y alargando su vida útil.'
  },
  {
    icon: 'icon_trending-up.svg',
    title: 'Rendimiento superior',
    description: 'Conduce con mayor suavidad, potencia y respuesta inmediata.'
  },
  {
    icon: 'icon_droplet.svg',
    title: 'Motor siempre limpio',
    description: 'Evita la formación de residuos y mantiene el corazón de tu vehículo en perfecto estado.'
  },
  {
    icon: 'icon_award.svg',
    title: 'Confianza total',
    description: 'Con la tecnología Full Sintética otorgarás las condiciones óptimas para proteger tu vehículo en distintas condiciones.'
  }
];

const sparePartCategories: SparePartCategory[] = [
  {
    title: 'Frenos',
    image: 'category-brakes',
    imagePosition: 'left',
    description: 'Los componentes de Freno están diseñados específicamente para las necesidades de tu OMODA | JAECOO entregándote máxima seguridad y confort en la conducción.'
  },
  {
    title: 'Carrocería',
    image: 'category-body',
    imagePosition: 'right',
    description: 'Mantiene los estándares constructivos de tu vehículo asegurando seguridad y el calce justo en cualquier pieza que necesites.'
  },
  {
    title: 'Motor',
    image: 'category-engine',
    imagePosition: 'left',
    description: 'Estos repuestos aseguran un óptimo funcionamiento y performance. Ofreciendo un alto rendimiento y eficiencia para tu motor. Protección de tu inversión y mayor durabilidad al estar fabricados con materiales de alta calidad bajo los estándares del fabricante.'
  },
  {
    title: 'Filtros',
    image: 'category-filters',
    imagePosition: 'right',
    description: 'Usa filtros genuinos, no solo protege el motor y la salud de los pasajeros, sino que también cuida tu inversión y asegura un desempeño confiable por más tiempo. Protección del motor y mayor eficiencia y rendimiento gracias a los filtros genuinos.'
  }
];

const goToAuthorizedService = () => {
  router.push({ path: '/authorized-service' });
};
</script>

<style lang="scss" scoped>
.spare-parts-page {
  min-height: 100vh;
  color: #fff;
  background: #050505;
}

.spare-parts-section {
  position: relative;
  overflow: hidden;
  background: #0D0E0E;
}

.spare-parts-section__inner {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 100px 48px;
}

.spare-parts-section__heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;

  h2 {
    margin: 0;
    font-family: "Inter", "MiSansMedium", sans-serif;
    font-size: 36px;
    font-weight: 400;
    line-height: 1;
    text-transform: uppercase;
  }

  h4 {
    margin: 0;
    font-family: "Inter", "MiSansMedium", sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.35;
  }
}

:deep(.spare-parts-hero-title) {
  margin-bottom: 0rem;
  padding: 0;
  font-family: "Inter", "MiSansMedium", sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 1.2;
  color: #fff;
}

:deep(.spare-parts-hero-copy) {
  max-width: 876px;
  font-family: "Inter", "MiSansNormal", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.35;
  text-align: center;
  color: #fff;
}

.spare-parts-mobile-hero {
  padding-top: 0.88rem;
  position: relative;
  overflow: hidden;
  background: #050505;
}

.spare-parts-mobile-hero__image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.spare-parts-mobile-hero__shade {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
}

.spare-parts-mobile-hero__content {
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

.spare-parts-section--intro,
.spare-parts-section--benefits,
.spare-parts-section--categories,
.spare-parts-section--cta {
  display: flex;
  justify-content: center;
}

.spare-parts-intro {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  align-items: center;
  gap: 60px;
  background-color: #0D0E0E;
}

.spare-parts-intro__copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  background-color: #121313;
  padding: 24px 56px;
  max-width: 561px;
  min-height: 315px;

  &-border {
    position: relative;
    padding-bottom: 10px;

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      content: '';
      background: linear-gradient(90deg, #FFFFFF 0%, #131313 29.81%);
    }
  }

  h2 {
    margin: 0;
    font-family: "Inter", "MiSansMedium", sans-serif;
    font-size: 24px;
    font-weight: 300;
    line-height: 1.15; 
    text-transform: uppercase;
    
  }

  p {
    margin: 0;
    font-family: "Inter", "MiSansLight", sans-serif;
    font-size: 16px;
    font-weight: 200;
    line-height: 24px;
  }
}

.spare-parts-eyebrow,
.spare-parts-category__copy span,
.spare-parts-benefit span {
  font-family: "Inter", "MiSansMedium", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  color: #67B0C4;
  text-transform: uppercase;
}

.spare-parts-image-panel {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;

  &--left {
    justify-content: flex-end;
  }
  &--right {
    justify-content: flex-start;
  }
}

.spare-parts-image-panel__img {
  width: 100%;
  height: 100%;
  max-height: 400px;
  max-width: 400px;
  object-fit: cover;
}

.spare-parts-image-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: inherit;
  padding: 32px;
  text-align: center;
  background:
    linear-gradient(135deg, rgba(103, 176, 196, 0.22), rgba(255, 255, 255, 0.04)),
    #131313;

  span {
    font-family: "Inter", "MiSansMedium", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.82);
    text-transform: uppercase;
  }
}

.spare-parts-image-fallback--hero {
  height: 100%;
}

.spare-parts-image-fallback--wide {
  min-height: 560px;
}

.spare-parts-secondary-image {
  min-height: 560px;
  background: #050505;
}

.spare-parts-secondary-image__img {
  display: block;
  width: 100%;
  max-height: 596px;
  object-fit: cover;
  object-position: center;
}

.spare-parts-benefits {
  display: flex;
  flex-direction: column;
}

.spare-parts-benefits__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 32px;
}

.spare-parts-benefit {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 312px;
  padding: 56px 32px;
  background: #131313;

  h3 {
    margin: 0;
    font-family: "Inter", "MiSansMedium", sans-serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.15;
  }

  p {
    margin: 0;
    font-family: "Inter", "MiSansLight", sans-serif;
    font-size: 16px;
    font-weight: 200;
    line-height: 24px;
  }

  &__icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
}

.spare-parts-categories {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: 48px;
}

.spare-parts-category-image-panel__img {
  width: 100%;
  height: 100%;
  max-height: 561px;
  max-width: 561px;
  object-fit: cover;
  border-radius: 25px;
  aspect-ratio: 1 / 1;

}

.spare-parts-category {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: stretch;
  gap: 60px;
  height: 100%;

  &__image {
    order: 1;
    justify-content: flex-end;
  }

  &__content {
    order: 2;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }

  &--reverse {
    .spare-parts-category__image {
      order: 2;
      justify-content: flex-start;
    }

    .spare-parts-category__content {
      order: 1;
      justify-content: flex-end;
    }

    .spare-parts-category__copy {
      align-items: flex-end;
      text-align: right;
    }

    .spare-parts-category__copy-border {
      &::after {
        right: 0;
        left: auto;
        background: linear-gradient(270deg, #FFFFFF 0%, #131313 29.81%);
      }
    }
  }
}

.spare-parts-category__copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 42px;
  padding: 24px 56px;
  background-color: #121313;
  width: 100%;
  max-width: 561px;
  min-height: 315px;
  text-align: left;

  &-border {
    position: relative;
    align-self: stretch;
    padding-bottom: 10px;

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      content: '';
      background: linear-gradient(90deg, #FFFFFF 0%, #131313 29.81%);
    }
  }

  h2 {
    margin: 0;
    font-family: "Inter", "MiSansMedium", sans-serif;
    font-size: 24px;
    font-weight: 300;
    line-height: 1;
    text-transform: uppercase;
  }

  p {
    max-width: 540px;
    margin: 0;
    font-family: "Inter", "MiSansLight", sans-serif;
    font-size: 16px;
    font-weight: 200;
    line-height: 24px;
  }
}

.spare-parts-section--cta {
  background: #131313;
}

.spare-parts-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  width: 100%;
}

.spare-parts-cta__content {
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
    margin: 0;
    font-family: "Inter", "MiSansNormal", sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
  }
}

.spare-parts-cta__button {
  padding: 20px;
  border: 1px solid #67B0C4;
  background: #67B0C4;
  color: #fff;
  font-family: "Inter", "MiSansMedium", sans-serif;
  font-size: 20px;
  font-weight: 300;
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

@media screen and (max-width: 1023px) {
  .spare-parts-section__heading {
    h2 {
      font-size: 20px;
      line-height: 1.3;
    }

    h4 {
      font-size: 16px;
      line-height: 1.3;
    }
  }


  .spare-parts-benefits__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .spare-parts-intro {
    gap: 32px;
  }

  .spare-parts-intro__copy {
    text-align: left;
    padding: 24px;
    gap: 42px;

    h2 {
      font-size: 24px;
      line-height: 1.3;
    }

    p {
      font-size: 16px;
      line-height: 1.5;
    }
  }

  .spare-parts-secondary-image,
  .spare-parts-secondary-image__img,
  .spare-parts-image-fallback--wide {
    min-height: 320px;
  }

  .spare-parts-benefits {
    gap: 32px;
  }

  .spare-parts-benefit {
    min-height: auto;
  }

  .spare-parts-category__copy {
    padding: 32px 24px;
    gap: 24px;
    min-height: auto;
  }

  .spare-parts-cta__content {
    h2 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
      line-height: 1.5;
    }
  }

  :deep(.mobile-no-observer-animation) {
    opacity: 1 !important;
    animation: none !important;
  }

  @media screen and (max-width: 767px) {
    .spare-parts-section__inner {
      padding: 32px 48px;
    }
    .spare-parts-intro {
      grid-template-columns: 1fr;
      justify-items: center;
    }
    
    .spare-parts-intro {
      gap: 16px;
    }

    .spare-parts-benefits__grid {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      gap: 24px;
    }

    .spare-parts-benefit {
      padding: 32px;

      h3 {
        font-size: 24px;
      }

      p {
        font-size: 16px;
        line-height: 1.5;
      }
    }

    .spare-parts-image-panel {
      justify-content: center;
    }

    .spare-parts-categories {
      grid-auto-rows: auto;
      gap: 32px;
    }

    .spare-parts-category-image-panel__img {
      border-radius: 0;
    }

    .spare-parts-category {
      grid-template-columns: 1fr;
      gap: 16px;

      &__image {
        order: 1;
        justify-content: center;
      }

      &__content {
        order: 2;
        justify-content: center;
      }

      &--reverse {
        .spare-parts-category__image {
          order: 1;
          justify-content: center;
        }

        .spare-parts-category__content {
          order: 2;
          justify-content: center;
        }

        .spare-parts-category__copy {
          align-items: flex-start;
          text-align: left;
        }

        .spare-parts-category__copy-border {
          &::after {
            right: auto;
            left: 0;
            background: linear-gradient(90deg, #FFFFFF 0%, #131313 29.81%);
          }
        }
      }
    }

    .spare-parts-category__copy {
      align-items: flex-start;
      padding: 16px;
      gap: 16px;
      text-align: left;

      h2 {
        font-size: 20px;
        line-height: 1.3;
      }

      p {
        font-size: 16px;
        line-height: 1.5;
      }
    }

    
  }
}
</style>
