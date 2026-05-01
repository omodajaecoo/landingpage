<template>
  <main class="authorized-service-page">
    <section class="authorized-service-hero">
      <div v-if="isDesktop">
        <fullArticle
          class="bg-black"
          :content="bannerHeroContent"
          ext="webp"
          v-animate="{ effect: 'zoomInCenter', immediate: true }"
        />
      </div>
      <div
        v-else
        class="authorized-service-mobile-hero"
        v-animate="{ effect: 'fadeInUp', immediate: true }"
      >
        <BaseImg
          :src="`${bannerHeroContent.img}_mobile.webp`"
          class="authorized-service-mobile-hero__image"
          :alt="bannerHeroContent.title"
        />
        <div class="authorized-service-mobile-hero__shade"></div>
        <div class="authorized-service-mobile-hero__content">
          <p>{{ currentService.heroEyebrow }}</p>
          <h1>{{ currentService.heroTitle }}</h1>
        </div>
      </div>
    </section>

    <section class="authorized-service-toolbar">
      <div class="authorized-service-container authorized-service-toolbar__inner">
        <div class="authorized-service-tabs" role="tablist" aria-label="Tipo de punto autorizado">
          <button
            v-for="tab in tabs"
            :key="tab.value"
            class="authorized-service-tab"
            :class="{ 'authorized-service-tab--active': tabSelected === tab.value }"
            type="button"
            role="tab"
            :aria-selected="tabSelected === tab.value"
            @click="tabSelected = tab.value"
          >
            {{ tab.label }}
          </button>
        </div>

        <label class="authorized-service-filter">
          <span>Selecciona una ciudad</span>
          <el-select 
            v-model="selectedCity" 
            placeholder="Todas las ciudades"
            size="large"
          >
            <el-option value="all" label="Todas las ciudades" />
            <el-option
              v-for="city in locationCities"
              :key="city"
              :value="city"
              :label="city"
            />
          </el-select>
        </label>
      </div>
    </section>

    <section class="authorized-service-results">
      <div class="authorized-service-container">
        <div v-if="isFiltering" class="authorized-service-grid">
          <article v-for="index in 6" :key="index" class="authorized-service-card authorized-service-card--skeleton">
            <div class="authorized-service-skeleton authorized-service-skeleton--image"></div>
            <div class="authorized-service-card__content">
              <div>
                <div class="authorized-service-skeleton authorized-service-skeleton--title"></div>
                <div class="authorized-service-skeleton authorized-service-skeleton--text"></div>
                <div class="authorized-service-skeleton authorized-service-skeleton--text authorized-service-skeleton--short"></div>
              </div>
              <div class="authorized-service-skeleton authorized-service-skeleton--button"></div>
            </div>
          </article>
        </div>

        <div
          v-else-if="filteredLocations.length"
          class="authorized-service-grid"
          aria-live="polite"
        >
          <article
            v-for="(location, index) in filteredLocations"
            :key="location.name"
            class="authorized-service-card mobile-no-observer-animation"
            v-animate="{ effect: 'fadeInUp', delay: index * 0.08, once: true }"
          >
            <BaseImg
              :src="location.image"
              class="authorized-service-card__image"
              :alt="location.name"
              loading="lazy"
            />
            <div class="authorized-service-card__content">
              <div>
                <h2>{{ location.name }}</h2>
                <div class="authorized-service-card__details">
                  <p>{{ location.address }} {{ location.city }}, Ecuador</p>
                  <p v-if="location.hours">{{ location.hours }}</p>
                  <p v-if="location.phone">{{ location.phone }}</p>
                </div>
              </div>
              <a
                class="authorized-service-card__map-link"
                :href="getMapUrl(location)"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver en mapa
              </a>
            </div>
          </article>
        </div>

        <div v-else class="authorized-service-empty" v-animate="{ effect: 'fadeInUp', once: true }">
          {{ emptyMessage }}
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { useHead, useRoute, useRouter } from '#imports';
import { computed, ref, watch } from 'vue';
import fullArticle from '~/components/common/fullArticle.vue';
import useDeviceType from '~/composables/useDeviceType';

defineOptions({
  name: 'AuthorizedService'
});

type AuthorizedServiceTab = 'workshops' | 'showrooms';

interface Location {
  name: string;
  address: string;
  city: string;
  hours: string;
  phone: string;
  image: string;
  url_map?: string;
}

interface AuthorizedServiceMetadata {
  tabLabel: string;
  title: string;
  meta: string;
  heroImg: string;
  heroEyebrow: string;
  heroTitle: string;
  emptyMessage: string;
  locations: Location[];
}

const route = useRoute();
const router = useRouter();
const { isMobile } = useDeviceType();
const isDesktop = computed(() => !isMobile.value);

const validTabs: AuthorizedServiceTab[] = ['workshops', 'showrooms'];
const queryTab = route.query.tab as AuthorizedServiceTab;
const isValidTab = validTabs.includes(queryTab);
const initialTab = isValidTab ? queryTab : 'workshops';

if (queryTab && !isValidTab) {
  const { tab, ...restQuery } = route.query;
  router.replace({ query: restQuery });
}

const tabSelected = ref<AuthorizedServiceTab>(initialTab);
const selectedCity = ref('all');
const isFiltering = ref(false);
let filterTimer: ReturnType<typeof setTimeout> | undefined;

const folderPath = 'authorized-service';
const workshopPath = `${folderPath}/workshops`;

const services: Record<AuthorizedServiceTab, AuthorizedServiceMetadata> = {
  workshops: {
    tabLabel: 'Talleres',
    title: 'Puntos Autorizados - OMODA | JAECOO',
    meta: 'Encuentra talleres autorizados OMODA | JAECOO por ciudad.',
    heroImg: `${workshopPath}/ws_bannerHerobg`,
    heroEyebrow: 'SERVICIO POSVENTA',
    heroTitle: 'TALLERES AUTORIZADOS',
    emptyMessage: 'No encontramos talleres autorizados en esta ciudad. Por favor selecciona otra ciudad o contáctanos directamente.',
    locations: [
      {
        name: 'Centro Técnico Ecuador',
        address: 'Av. 10 de Agosto 170138',
        city: 'Quito',
        hours: '9 a.m. a 6 p.m.',
        phone: '+593 96 405 4055',
        image: `${workshopPath}/ws_quito.webp`
      },
      {
        name: 'Centro Técnico Orellana',
        address: 'Av. Francisco de Orellana y Av. 10 de Agosto E2-30 y, 170102',
        city: 'Quito',
        hours: '9 a.m. a 6 p.m.',
        phone: '+593 95 897 2022',
        image: `${workshopPath}/ws_orellana.webp`
      },
      {
        name: 'Scala Shopping Mall',
        address: 'Junto CC Scala, Av. Oswaldo Guayasamín y Pje. la Praga S/N, 170902',
        city: 'Quito',
        hours: '9 a.m. a 6 p.m.',
        phone: '+593 95 897 2022',
        image: `${workshopPath}/ws_scala.webp`
      },
      {
        name: 'Centro Juan Tanca Marengo',
        address: 'km 2 1/2, Av. Juan Tanca Marengo 2, 090613',
        city: 'Guayaquil',
        hours: '9 a.m. a 6 p.m.',
        phone: '+593 4 380 2900',
        image: `${workshopPath}/ws_tanca.webp`
      },
      {
        name: 'Centro Piazza Samborondón',
        address: 'La Piazza, 092301',
        city: 'Samborondón',
        hours: '9 a.m. a 6 p.m.',
        phone: '+593 95 897 2022',
        image: `${workshopPath}/ws_piazza.webp`
      },
      {
        name: 'Centro Carlos Julio Arosemena',
        address: 'Av. 41 NO Km 2 1/2, 090609',
        city: 'Guayaquil',
        hours: '9 a.m. a 6 p.m.',
        phone: '+593 4 220 3770',
        image: `${workshopPath}/ws_arosemena.webp`
      }
    ]
  },
  showrooms: {
    tabLabel: 'Ventas',
    title: 'Puntos Autorizados - OMODA | JAECOO',
    meta: 'Encuentra puntos de venta autorizados OMODA | JAECOO por ciudad.',
    heroImg: `${workshopPath}/ws_bannerHerobg`,
    heroEyebrow: 'RED AUTORIZADA',
    heroTitle: 'PUNTOS DE VENTA',
    emptyMessage: 'Próximamente podrás consultar los puntos autorizados de ventas.',
    locations: []
  }
};

const currentService = computed(() => services[tabSelected.value]);

const tabs = computed(() => [
  {
    label: services.workshops.tabLabel,
    value: 'workshops' as AuthorizedServiceTab
  },
  {
    label: services.showrooms.tabLabel,
    value: 'showrooms' as AuthorizedServiceTab
  }
]);

const bannerHeroContent = computed(() => ({
  isTextWhite: true,
  title: currentService.value.heroTitle,
  subTitle: `<div>${currentService.value.heroEyebrow}</div>`,
  h5ClassName: 'authorized-service-hero-copy',
  className: '',
  titleClassName: 'authorized-service-hero-title',
  imgClass: '!object-center !object-cover brightness-[58%]',
  img: currentService.value.heroImg,
  fullArticleClass: 'enlarge',
  titleContentClass: '!justify-center !pb-0 !pt-0 md:!pt-0',
}));

const locationCities = computed(() => {
  return Array.from(new Set(currentService.value.locations.map((location) => location.city))).sort((a, b) => a.localeCompare(b));
});

const filteredLocations = computed(() => {
  if (selectedCity.value === 'all') {
    return currentService.value.locations;
  }

  return currentService.value.locations.filter((location) => location.city === selectedCity.value);
});

const emptyMessage = computed(() => currentService.value.emptyMessage);

useHead({
  title: computed(() => currentService.value.title),
  meta: [
    {
      name: 'description',
      content: computed(() => currentService.value.meta)
    }
  ]
});

watch(tabSelected, () => {
  selectedCity.value = 'all';

  router.push({
    query: { tab: tabSelected.value }
  });
});

watch(selectedCity, () => {
  isFiltering.value = true;
  if (filterTimer) {
    clearTimeout(filterTimer);
  }
  filterTimer = setTimeout(() => {
    isFiltering.value = false;
  }, 220);
});

const getMapUrl = (location: Location) => {
  if (location.url_map) {
    return location.url_map;
  }
  const query = `${location.name}, ${location.address}, ${location.city}, Ecuador`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
};
</script>
<style lang="scss" scoped>
.authorized-service-page {
  min-height: 100vh;
  color: #fff;
  background: #080909;
}

.authorized-service-hero {
  position: relative;
  overflow: hidden;
  background: #050505;
}

.authorized-service-hero :deep(.next-module),
.authorized-service-hero :deep(.cont-wrap),
.authorized-service-hero :deep(.min-h-svh) {
  min-height: 489px;
  height: 489px;
}

:deep(.authorized-service-hero-title) {
  margin: 8px 0 0;
  padding: 0;
  font-family: "Inter", "MiSansMedium", sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 1.15;
  color: #fff;
  text-transform: uppercase;
}

:deep(.authorized-service-hero-copy) {
  order: -1;
  max-width: 876px;
  font-family: "Inter", "MiSansMedium", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  text-align: center;
  color: #67B0C4;
  text-transform: uppercase;
}

.authorized-service-mobile-hero {
  position: relative;
  padding-top: 0.88rem;
  overflow: hidden;
  background: #050505;
}

.authorized-service-mobile-hero__image {
  display: block;
  width: 100%;
  min-height: 164px;
  object-fit: cover;
}

.authorized-service-mobile-hero__shade {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.45);
}

.authorized-service-mobile-hero__content {
  position: absolute;
  top: calc(0.88rem + ((100% - 0.88rem) / 2));
  left: 50%;
  z-index: 2;
  width: 100%;
  padding: 0 16px;
  text-align: center;
  transform: translate(-50%, -50%);

  p {
    margin: 0 0 4px;
    font-family: "Inter", "MiSansMedium", sans-serif;
    font-size: 12px;
    line-height: 1.2;
    font-weight: 400;
    color: #67B0C4;
    text-transform: uppercase;
  }

  h1 {
    margin: 0;
    font-family: "Inter", "MiSansMedium", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2;
    text-transform: uppercase;
  }
}

.authorized-service-container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 48px;
}

.authorized-service-toolbar {
  background: #131313;
}

.authorized-service-toolbar__inner {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 48px;
  padding: 32px 48px;
}

.authorized-service-tabs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
}

.authorized-service-tab {
  position: relative;
  min-height: 43px;
  padding: 0;
  border: 0;
  font-family: "Inter", "MiSansMedium", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  color: #fff;
  background: transparent;
  cursor: pointer;
  transition: color 0.25s ease;

  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 2px;
    content: '';
    background: #67B0C4;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.25s ease;
  }

  &:hover,
  &--active {
    color: #67B0C4;
    font-weight: 600;
  }

  &--active::after {
    transform: scaleX(1);
    transform-origin: left;
  }
}

.authorized-service-filter {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 300px;
  max-width: 100%;
  font-family: "Inter", "MiSansMedium", sans-serif;

  span {
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    color: #fff;
  }

  :deep(.el-select) {
    width: 100%;
  }

  :deep(.el-input__suffix) {
    .el-icon {
      display: none;
    }
  }

  :deep(.el-input__wrapper) {
    height: 44px;
    border: 1px solid #C6C6C6;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }

    &.is-focus {
      box-shadow: none;
    }
  }

  :deep(.el-input__inner) {
    font-family: "Inter", "MiSansNormal", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #757575;
  }

  :deep(.el-select-dropdown__item) {
    padding: 8px 14px;
    font-family: "Inter", "MiSansNormal", sans-serif;
    font-size: 14px;
    color: #757575;

    &:hover {
      background-color: #E8E8E8;
      color: #222;
    }

    &.is-selected {
      color: #222;
      font-weight: 500;
      background-color: #F4F4F4;
    }
  }
}

.authorized-service-results {
  min-height: 540px;
  padding: 64px 0;
  background: #090a0a;
}

.authorized-service-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-auto-rows: 1fr;
  gap: 24px;
}

.authorized-service-card {
  display: flex;
  flex-direction: column;
  background: #121212;
}

.authorized-service-card__image {
  display: block;
  width: 100%;
  aspect-ratio: 431 / 260;
  object-fit: cover;
}

.authorized-service-card__content {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  gap: 40px;

  h2 {
    font-family: "Inter", "MiSansMedium", sans-serif;
    font-size: 24px;
    font-weight: 300;
    line-height: 1.15;
    color: #fff;
    margin-bottom: 24px;
  }
}

.authorized-service-card__details {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-family: "Inter", "MiSansLight", sans-serif;
  font-size: 16px;
  font-weight: 200;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.8);

  p {
    margin: 0;
  }
}

.authorized-service-card__map-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.82);
  font-family: "Inter", "MiSansMedium", sans-serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 1;
  color: #fff;
  text-decoration: none;
  transition: border-color 0.25s ease, color 0.25s ease, background-color 0.25s ease;

  &:hover {
    border-color: #67B0C4;
    color: #ffffff;
    background:#67B0C4;
  }
}

.authorized-service-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 280px;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-family: "Inter", "MiSansNormal", sans-serif;
  font-size: 18px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.78);
  text-align: center;
  background: #121212;
}

.authorized-service-card--skeleton {
  overflow: hidden;
}

.authorized-service-skeleton {
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  background: #242424;

  &::after {
    position: absolute;
    inset: 0;
    content: '';
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
    animation: skeleton-shimmer 1.2s infinite;
    transform: translateX(-100%);
  }
}

.authorized-service-skeleton--image {
  width: 100%;
  aspect-ratio: 431 / 260;
}

.authorized-service-skeleton--title {
  width: 74%;
  height: 32px;
  margin-bottom: 56px;
}

.authorized-service-skeleton--text {
  width: 100%;
  height: 18px;
  margin-bottom: 12px;
}

.authorized-service-skeleton--short {
  width: 62%;
  margin-bottom: 56px;
}

.authorized-service-skeleton--button {
  width: 100%;
  height: 64px;
  margin-top: auto;
  border: 1px solid rgba(255, 255, 255, 0.14);
}

@keyframes skeleton-shimmer {
  100% {
    transform: translateX(100%);
  }
}

@media screen and (max-width: 1023px) {
  .authorized-service-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px;
  }

  .authorized-service-card {
    min-height: 0;
  }

  .authorized-service-empty {
    min-height: 180px;
    padding: 24px;
    font-size: 14px;
  }

  :deep(.mobile-no-observer-animation) {
    opacity: 1 !important;
    animation: none !important;
  }
}

@media screen and (max-width: 764px) {
  .authorized-service-results {
    padding: 32px 0;
  }

  .authorized-service-grid {
    grid-template-columns: minmax(0, 1fr);
    grid-auto-rows: auto;
    gap: 28px;
  }

  .authorized-service-card {
    min-height: 0;
  }

  .authorized-service-card__content {
    gap: 24px;
    h2 {
      margin-bottom: 16px;
    }
  }

  .authorized-service-empty {
    min-height: 180px;
    padding: 24px;
    font-size: 14px;
  }

  :deep(.mobile-no-observer-animation) {
    opacity: 1 !important;
    animation: none !important;
  }
}



@media screen and (max-width: 640px) {
  .authorized-service-tabs {
    display: flex;
    justify-content: start;
}

  .authorized-service-toolbar__inner {
    flex-direction: column;
    gap: 16px;
  }

  .authorized-service-filter {
    width: 100%;
    gap: 8px;

    span {
      font-size: 10px;
    }

    :deep(.el-input__wrapper) {
      height: 44px;
    }

    :deep(.el-input__inner) {
      font-size: 12px;
    }
  }
}
  
</style>

