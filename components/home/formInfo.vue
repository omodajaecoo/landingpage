<template>
  <div class="w-full flex bg-[#0D0E0E] justify-center items-center min-h-[100px] sm:px-[10px] pt-[32px] sm:pt-[100px] pb-[40px]">
    <div class="w-[900px] max-w-[90%] flex flex-col justify-center items-center space-y-[32px]">
      <h1 class="text-center font-interRegular text-[24px] leading-[28px] sm:text-[32px] sm:leading-[38px] text-white sm:w-[600px]">
        LLENA EL SIGUIENTE FORMULARIO Y SE PARTE DE LOS EARLY ADOPTERS
      </h1>

      <div class="w-full flex justify-center space-x-[10px] sm:space-x-[14px] md:space-x-[24px] lg:space-x-[32px]">
        <div class="w-[60px] h-[70px] sm:w-[120px] sm:h-[120px] lg:w-[160px] lg:h-[160px] p-[16px] sm:p-[24px] lg:p-[32px] bg-[#67B0C480] rounded-[8px] flex flex-col justify-center items-center flex-shrink-0">
          <div class="flex flex-col items-center space-y-[8px]">
            <span class="font-interBold text-[24px] sm:text-[48px] lg:text-[72px] text-white text-center leading-none">
              {{ countdown.days }}
            </span>
            <span class="font-interSemiBold text-[10px] sm:text-[12px] lg:text-[16px] text-white text-center leading-none mt-1">
              DÍAS
            </span>
          </div>
        </div>

        <div class="flex flex-col justify-center items-center">
          <span class="font-interBold text-[24px] sm:text-[48px] lg:text-[72px] text-white text-center leading-none">
            :
          </span>
        </div>

        <div class="w-[60px] h-[70px] sm:w-[120px] sm:h-[120px] lg:w-[160px] lg:h-[160px] p-[16px] sm:p-[24px] lg:p-[32px] bg-[#67B0C480] rounded-[8px] flex flex-col justify-center items-center flex-shrink-0">
          <div class="flex flex-col items-center space-y-[8px]">
            <span class="font-interBold text-[24px] sm:text-[48px] lg:text-[72px] text-white text-center leading-none">
              {{ countdown.hours }}
            </span>
            <span class="font-interSemiBold text-[10px] sm:text-[12px] lg:text-[16px] text-white text-center leading-none mt-1">
              HORAS
            </span>
          </div>
        </div>

        <div class="flex flex-col justify-center items-center">
          <span class="font-interBold text-[24px] sm:text-[48px] lg:text-[72px] text-white text-center leading-none">
            :
          </span>
        </div>

        <div class="w-[60px] h-[70px] sm:w-[120px] sm:h-[120px] lg:w-[160px] lg:h-[160px] p-[16px] sm:p-[24px] lg:p-[32px] bg-[#67B0C480] rounded-[8px] flex flex-col justify-center items-center flex-shrink-0">
          <div class="flex flex-col items-center space-y-[8px]">
            <span class="font-interBold text-[24px] sm:text-[48px] lg:text-[72px] text-white text-center leading-none">
              {{ countdown.minutes }}
            </span>
            <span class="font-interSemiBold text-[10px] sm:text-[12px] lg:text-[16px] text-white text-center leading-none mt-1">
              MIN
            </span>
          </div>
        </div>

        <div class="flex flex-col justify-center items-center">
          <span class="font-interBold text-[24px] sm:text-[48px] lg:text-[72px] text-white text-center leading-none">
            :
          </span>
        </div>

        <div class="w-[60px] h-[70px] sm:w-[120px] sm:h-[120px] lg:w-[160px] lg:h-[160px] p-[16px] sm:p-[24px] lg:p-[32px] bg-[#67B0C480] rounded-[8px] flex flex-col justify-center items-center flex-shrink-0">
          <div class="flex flex-col items-center space-y-[8px]">
            <span class="font-interBold text-[24px] sm:text-[48px] lg:text-[72px] text-white text-center leading-none">
              {{ countdown.seconds }}
            </span>
            <span class="font-interSemiBold text-[10px] sm:text-[12px] lg:text-[16px] text-white text-center leading-none mt-1">
              SEG
            </span>
          </div>
        </div>
      </div>

      <p class="text-center font-interSemiBold text-[24px] leading-[28px] text-white sm:w-[600px]">
        PREVENTA OFICIAL EN ECUADOR
      </p>

      <p class="font-inter text-[14px] sm:text-[16px] text-white font-light text-center whitespace-pre-line sm:max-w-[800px]">
        Rediseñamos la experiencia, y tú puedes ser parte de ella.<br><br>
        Para los early adopters, ofrecemos beneficios exclusivos, challenges y sorteos que convierten cada momento al
        volante en algo único y emocionante. Vive lo que otros solo imaginan y descubre cómo es rediseñar lo
        convencional.
      </p>

    </div>
  </div>
</template>

<script lang="ts" setup>

const countdown = ref({
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
});
let timerInterval: number | undefined;

const updateCountdown = () => {
  const targetDate = new Date('2025-12-04T00:00:00').getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  const formatTime = (time: number) => String(time).padStart(2, '0');

  if (difference > 0) {
    countdown.value.days = formatTime(Math.floor(difference / (1000 * 60 * 60 * 24)));
    countdown.value.hours = formatTime(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    countdown.value.minutes = formatTime(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
    countdown.value.seconds = formatTime(Math.floor((difference % (1000 * 60)) / 1000));
  } else {
    // Si la fecha ya pasó, limpiar el intervalo
    if (timerInterval) clearInterval(timerInterval);
  }
};

onMounted(() => {
  updateCountdown(); // Llamada inicial
  timerInterval = window.setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval); // Limpiar al destruir el componente
});
</script>