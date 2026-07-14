<template>
  <main class="min-h-[80vh] bg-[#0D0E0E]">
    <div class="reservations-hero">
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
      <section
        v-for="section in reservationSections"
        :key="section.number"
        class="reservation-section"
      >
        <div class="reservation-section__title">
          <div class="reservation-section__number">{{ section.number }}</div>
          <h2>{{ section.title }}</h2>
        </div>

        <div
          v-if="section.number === 1"
          :ref="setModelSelectRef"
          class="reservation-model-select"
        >
          <button
            type="button"
            class="reservation-model-select__trigger"
            :class="{ 'reservation-model-select__trigger--placeholder': !selectedVehicle }"
            @click="isModelSelectOpen = !isModelSelectOpen"
          >
            <template v-if="selectedVehicle">
              <img
                :src="`/images/reservations/${selectedVehicle.photo}`"
                :alt="selectedVehicle.name"
                class="reservation-model-select__photo"
              />
              <span class="reservation-model-select__selected-info">
                <span class="reservation-model-select__name">{{ selectedVehicle.name }}</span>
                <span class="reservation-model-select__selected-label">SELECCIONADO</span>
              </span>
            </template>
            <span v-else>SELECCIONA UN MODELO</span>
          </button>

          <div
            v-if="isModelSelectOpen"
            class="reservation-model-select__options"
          >
            <div
              v-for="group in vehicleGroups"
              :key="group.brand"
              class="reservation-model-select__group"
            >
              <div class="reservation-model-select__brand">{{ group.brand }}</div>
              <button
                v-for="vehicle in group.vehicles"
                :key="vehicle.name"
                type="button"
                class="reservation-model-select__option"
                @click="selectVehicle(vehicle)"
              >
                <img
                  :src="`/images/reservations/${vehicle.photo}`"
                  :alt="vehicle.name"
                  class="reservation-model-select__photo"
                />
                <span class="reservation-model-select__info">
                  <span class="reservation-model-select__name-row">
                    <span class="reservation-model-select__name">{{ vehicle.name }}</span>
                    <span
                      v-if="vehicle.newProduct"
                      class="reservation-model-select__launch"
                    >
                      LANZAMIENTO
                    </span>
                  </span>
                  <span
                    v-if="vehicle.limitedEdition"
                    class="reservation-model-select__limited"
                  >
                    Edición Limitada
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div
          v-if="section.number === 2 && selectedVehicle"
          class="reservation-selected-vehicle"
        >
          <div class="reservation-selected-vehicle__media">
            <img
              :src="`/images/reservations/${selectedVehicle.photo}`"
              :alt="selectedVehicle.name"
            />
          </div>
          <div class="reservation-selected-vehicle__info">
            <h3>{{ selectedVehicle.name }}</h3>
            <div class="reservation-selected-vehicle__price">
              <span
                class="reservation-selected-vehicle__price-current"
                :class="{ 'reservation-selected-vehicle__price-current--discounted': hasDiscountedPrice(selectedVehicle) }"
              >
                {{ formatPrice(selectedVehicle.discountedPrice || selectedVehicle.price) }}
              </span>
              <span
                v-if="hasDiscountedPrice(selectedVehicle)"
                class="reservation-selected-vehicle__price-original"
              >
                {{ formatPrice(selectedVehicle.price) }}
              </span>
            </div>
            <div class="reservation-selected-vehicle__specs">
              <div
                v-for="spec in selectedVehicleSpecs"
                :key="spec.label"
                class="reservation-selected-vehicle__spec"
              >
                <span>{{ spec.label }}</span>
                <strong>{{ spec.value }}</strong>
              </div>
            </div>
          </div>
        </div>

        <EmbededForm
          v-if="section.number === 3"
          :url="URL_FORM"
          container-class="reservation-checkout-form"
          :iframe-class="`reservation-checkout-form__iframe ${formBreakpoints}`"
          loading="eager"
        />
      </section>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

defineOptions({
  name: 'ReservationsPage'
});

const URL_FORM = 'https://ayas-formweb-prd.powerappsportals.com/tools/omoda-jaecoo/quotation-checkout-form/';
const formBreakpoints = 'h-[1750px] min-[390px]:h-[1750px] min-[501px]:h-[1740px] min-[513px]:h-[1500px] min-[513px]:h-[1450px] min-[596px]:h-[1400px] min-[615px]:h-[1750px] min-[640px]:h-[1400px] min-[708px]:h-[1700px] min-[828px]:h-[1680px] min-[838px]:h-[1350px] min-[1024px]:h-[1400px]';
const router = useRouter();
const route = useRoute();

interface Vehicle {
  name: string;
  brand: string;
  newProduct: boolean;
  limitedEdition: boolean;
  autonomy: string;
  power: string;
  technology: string;
  price: number;
  discountedPrice: number;
  photo: string;
}

const vehicles: Vehicle[] = [
  {
    name: 'OMODA C5',
    brand: 'OMODA',
    newProduct: false,
    limitedEdition: false,
    autonomy: '1001 KMs',
    power: '221 HP',
    technology: 'HEV',
    price: 22990,
    discountedPrice: 0,
    photo: 'OMODA_C5_OPT.png'
  },
  {
    name: 'OMODA E5 NEXT',
    brand: 'OMODA',
    newProduct: true,
    limitedEdition: true,
    autonomy: '350 KMs (WLTP)',
    power: '208 HP',
    technology: 'EV',
    price: 21499,
    discountedPrice: 19990,
    photo: 'OMODA_E5_NEXT_OPT.png'
  },
  {
    name: 'JAECOO J5',
    brand: 'JAECOO',
    newProduct: true,
    limitedEdition: false,
    autonomy: '950 KMs',
    power: '221 HP',
    technology: 'HEV',
    price: 21990,
    discountedPrice: 0,
    photo: 'JAECOO_J5_OPT.png'
  },
  {
    name: 'JAECOO J7',
    brand: 'JAECOO',
    newProduct: false,
    limitedEdition: false,
    autonomy: '1350 KMs',
    power: '315 HP',
    technology: 'PHEV',
    price: 28990,
    discountedPrice: 0,
    photo: 'JAECOO_J7_OPT.png'
  }
];

const selectedVehicle = ref<Vehicle | null>(null);
const isModelSelectOpen = ref(false);
const modelSelectRef = ref<HTMLElement | null>(null);

const setModelSelectRef = (element: Element | null) => {
  modelSelectRef.value = element instanceof HTMLElement ? element : null;
};

const vehicleGroups = computed(() => {
  const groups = new Map<string, Vehicle[]>();

  vehicles.forEach((vehicle) => {
    const brandVehicles = groups.get(vehicle.brand) ?? [];
    brandVehicles.push(vehicle);
    groups.set(vehicle.brand, brandVehicles);
  });

  return Array.from(groups, ([brand, brandVehicles]) => ({
    brand,
    vehicles: brandVehicles
  }));
});

const selectVehicle = (vehicle: Vehicle) => {
  selectedVehicle.value = vehicle;
  isModelSelectOpen.value = false;
};

const normalizeVehicleParam = (value: string) => {
  return value
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/i, '')
    .replace(/[^a-z0-9]/g, '');
};

const selectVehicleFromQuery = (vehicleQuery: unknown) => {
  const vehicleParam = Array.isArray(vehicleQuery) ? vehicleQuery[0] : vehicleQuery;
  if (typeof vehicleParam !== 'string' || !vehicleParam) return;

  const normalizedVehicleParam = normalizeVehicleParam(vehicleParam);
  const vehicle = vehicles.find((item) => {
    return (
      normalizeVehicleParam(item.name) === normalizedVehicleParam ||
      normalizeVehicleParam(item.photo) === normalizedVehicleParam
    );
  });

  if (vehicle) {
    selectedVehicle.value = vehicle;
    isModelSelectOpen.value = false;
  }
};

const handleClickOutsideModelSelect = (event: PointerEvent) => {
  if (!modelSelectRef.value) return;

  if (!event.composedPath().includes(modelSelectRef.value)) {
    isModelSelectOpen.value = false;
  }
};

const handleFormSubmitMessage = (event: MessageEvent) => {
  const allowedOrigins = ['https://ayas-formweb-prd.powerappsportals.com'];
  if (!allowedOrigins.includes(event.origin)) return;

  const data = event.data || {};
  if (data.type === 'redirect' && typeof data.url === 'string' && data.url) {
    sessionStorage.setItem('tyAccess', Date.now().toString());
    router.push({
      path: '/thank-you',
      query: {
        source: route.path.replace(/^\//, '')
      }
    });
  }
};

onMounted(() => {
  document.addEventListener('pointerdown', handleClickOutsideModelSelect, true);
  window.addEventListener('message', handleFormSubmitMessage, false);
});

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', handleClickOutsideModelSelect, true);
  window.removeEventListener('message', handleFormSubmitMessage, false);
});

const formatPrice = (price: number) => {
  return `$${price.toLocaleString('en-US')}`;
};

const hasDiscountedPrice = (vehicle: Vehicle) => {
  return vehicle.discountedPrice > 0;
};

const selectedVehicleSpecs = computed(() => {
  if (!selectedVehicle.value) return [];

  return [
    {
      label: 'AUTONOMÍA',
      value: selectedVehicle.value.autonomy
    },
    {
      label: 'POTENCIA',
      value: selectedVehicle.value.power
    },
    {
      label: 'TECNOLOGÍA',
      value: selectedVehicle.value.technology
    }
  ];
});

watch(
  () => route.query.vehicle,
  (vehicleQuery) => {
    selectVehicleFromQuery(vehicleQuery);
  },
  {
    immediate: true
  }
);

const reservationSections = [
  {
    number: 1,
    title: 'Selecciona tu modelo.'
  },
  {
    number: 2,
    title: 'Información del vehículo.'
  },
  {
    number: 3,
    title: 'Completa tu reserva.'
  }
];
</script>

<style scoped lang="scss">
.reservations-hero {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 3.6rem;
  aspect-ratio: 3840 / 1986;
  background-image: url("/images/reservations/top-banner.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.reservations-hero__content {
  width: 100%;
  max-width: 7.2rem;
  margin-left: 0.24rem;
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
  .reservations-hero__content {
    margin-left: 0.7rem;
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

.reservation-section__title {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  color: #fff;

  h2 {
    margin: 0;
    font-family: "Inter", sans-serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0;
    text-align: center;
    text-transform: uppercase;
  }
}

.reservation-section__number {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 25px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #67b0c4;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
}

.reservation-model-select {
  position: relative;
  width: 100%;
  margin-top: 16px;
}

.reservation-model-select__trigger {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0 42px 0 14px;
  border: 1px solid #333;
  border-radius: 0;
  background-color: #131313;
  background-image: url("data:image/svg+xml,%3Csvg width='14' height='8' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L7 7L13 1' stroke='%2367B0C4' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-position: right 14px center;
  background-repeat: no-repeat;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0;
  text-align: left;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  gap: 14px;

  &--placeholder {
    color: #8e8e8e;
  }
}

.reservation-model-select__options {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #282828;
}

.reservation-model-select__group {
  display: flex;
  flex-direction: column;
}

.reservation-model-select__brand {
  padding: 12px 14px 6px;
  background-color: #282828;
  color: #67b0c4;
  font-family: "Inter", sans-serif;
  font-size: 10px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0;
  text-transform: uppercase;
}

.reservation-model-select__option {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  min-height: 70px;
  padding: 10px 14px;
  background-color: #282828;
  color: #fff;
  cursor: pointer;
  text-align: left;

  &:hover {
    background-color: #303030;
  }
}

.reservation-model-select__photo {
  flex: 0 0 50px;
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.reservation-model-select__name {
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0;
}

.reservation-model-select__selected-info {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.reservation-model-select__selected-label {
  color: #67b0c4;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0;
  text-transform: uppercase;
}

.reservation-model-select__name-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.reservation-model-select__launch {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 12px;
  padding: 0 8px;
  background-color: #ce0000;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 10px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
}

.reservation-model-select__info {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.reservation-model-select__limited {
  color: #67b0c4;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0;
}

.reservation-selected-vehicle {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0.24rem;
  border: 1px solid #333;
  background-color: #131313;
  color: #fff;
}

.reservation-selected-vehicle__media {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
}

.reservation-selected-vehicle__info {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.24rem;
  text-align: center;

  h3 {
    margin: 0;
    font-family: "Inter", sans-serif;
    line-height: 100%;
    letter-spacing: 0;
    color: #fff;
  }

  h3 {
    font-size: 32px;
    font-weight: 700;
  }
}

.reservation-selected-vehicle__price {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 16px;
}

.reservation-selected-vehicle__price-current {
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0;

  &--discounted {
    color: #67b0c4;
  }
}

.reservation-selected-vehicle__price-original {
  color: #8e8e8e;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0;
  text-decoration: line-through;
}

.reservation-selected-vehicle__specs {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 12.2rem;
  margin-top: 24px;
}

.reservation-selected-vehicle__spec {
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 0;
  padding: 0 0.28rem;
  text-align: center;

  & + & {
    border-left: 1px solid rgba(255, 255, 255, 0.28);
  }

  span,
  strong {
    font-family: "Inter", sans-serif;
    line-height: 100%;
    letter-spacing: 0;
  }

  span {
    color: #fff;
    font-size: 12px;
    font-weight: 300;
  }

  strong {
    margin-top: 10px;
    color: #fff;
    font-size: 20px;
    font-weight: 300;
  }
}

:deep(.reservation-checkout-form) {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 24px;
}

:deep(.reservation-checkout-form__iframe) {
  width: 100%;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.24);
}

@media (min-width: 640px) {
  .reservations-sections {
    padding-right: 0.7rem;
    padding-left: 0.7rem;
  }

  .reservation-selected-vehicle {
    flex-direction: row;
    min-height: 3rem;
  }

  .reservation-selected-vehicle__media {
    flex: 0 0 40%;
    width: 40%;
  }
}
</style>
