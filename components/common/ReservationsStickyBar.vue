<template>
  <div
    v-if="!isDismissed"
    class="reservations-sticky-bar"
    :class="`reservations-sticky-bar--${variant}`"
  >
    <button
      type="button"
      class="reservations-sticky-bar__close"
      :aria-label="closeAriaLabel"
      @click="closeBar"
    >
      ×
    </button>
    <button
      type="button"
      class="reservations-sticky-bar__button"
      @click="goToReservations"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = withDefaults(defineProps<{
  buttonText?: string;
  closeAriaLabel?: string;
  to?: string;
  vehicle?: string;
  variant?: 'sticky' | 'fixed';
}>(), {
  buttonText: 'Reservar',
  closeAriaLabel: 'Cerrar reservas',
  to: '/reservations',
  vehicle: '',
  variant: 'sticky'
});

const emit = defineEmits<{
  close: [];
}>();

const router = useRouter();
const isDismissed = ref(false);

const closeBar = () => {
  isDismissed.value = true;
  emit('close');
};

const goToReservations = () => {
  router.push({
    path: props.to,
    query: props.vehicle ? { vehicle: props.vehicle } : undefined
  });
};
</script>

<style scoped lang="scss">
.reservations-sticky-bar {
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 0.92rem;
  padding: 0.18rem 0.92rem;
  background-color: rgba(13, 14, 14, 0.72);
  backdrop-filter: blur(16px);
}

.reservations-sticky-bar--sticky {
  position: sticky;
  top: 0.88rem;
}

.reservations-sticky-bar--fixed {
  position: fixed;
  top: 0.88rem;
  left: 0;
}

.reservations-sticky-bar__close {
  position: absolute;
  top: 50%;
  right: 0.32rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0.42rem;
  height: 0.42rem;
  border: 1px solid rgba(255, 255, 255, 0.38);
  border-radius: 50%;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 0.3rem;
  font-weight: 300;
  line-height: 1;
  background-color: transparent;
  cursor: pointer;
  transform: translateY(-50%);
}

.reservations-sticky-bar__button {
  min-height: 0.58rem;
  padding: 0 0.42rem;
  border: 1px solid #67b0c4;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 0.22rem;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0;
  text-transform: uppercase;
  background-color: rgba(103, 176, 196, 0.2);
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(103, 176, 196, 0.34);
  }
}

@media (min-width: 1024px) {
  .reservations-sticky-bar--sticky,
  .reservations-sticky-bar--fixed {
    top: 0.54rem;
  }
}
</style>
