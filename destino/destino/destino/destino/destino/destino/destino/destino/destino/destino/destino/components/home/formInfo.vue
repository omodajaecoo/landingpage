<template>
    <div
        class="w-full flex bg-[#0D0E0E] justify-center items-center min-h-[100px] pb-[0px] p-[10px] pt-[32px] sm:pt-[100px]"
      >
        <div class="w-[800px] max-w-[90%] flex flex-col items-center">
          
          <div class="w-full flex flex-col items-center text-center mb-[40px] sm:pb-[0px]">
            <h1 class="font-inter font-normal text-[24px] leading-[28px] sm:text-[32px] sm:leading-[38px] text-white sm:mx-[113px]">
              LLENA EL SIGUIENTE FORMULARIO Y SE PARTE DE LOS EARLY ADOPTERS
            </h1>

            <div class="my-[32px] bg-[#67B0C480] rounded-[8px] p-2 flex flex-col items-center mx-auto sm:w-[300px]">
              <div class="flex justify-center items-center gap-x-[8px] w-full">
                <div class="flex flex-col items-center w-[22px]">
                  <span class="font-inter text-[15px] font-semibold text-white">{{ countdown.days }}</span>
                  <span class="font-inter text-[7px] text-white">DÍAS</span>
                </div>
                <span class="font-inter text-[15px] font-semibold text-white">:</span>
                <div class="flex flex-col items-center w-[22px]">
                  <span class="font-inter text-[15px] font-semibold text-white">{{ countdown.hours }}</span>
                  <span class="font-inter text-[7px] text-white">HORAS</span>
                </div>
                <span class="font-inter text-[15px] font-semibold text-white">:</span>
                <div class="flex flex-col items-center w-[22px]">
                  <span class="font-inter text-[15px] font-semibold text-white">{{ countdown.minutes }}</span>
                  <span class="font-inter text-[7px] text-white">MIN</span>
                </div>
                <span class="font-inter text-[15px] font-semibold text-white">:</span>
                <div class="flex flex-col items-center w-[22px]">
                  <span class="font-inter text-[15px] font-semibold text-white">{{ countdown.seconds }}</span>
                  <span class="font-inter text-[7px] text-white">SEG</span>
                </div>
              </div>
              <span class="mt-[10px] font-inter text-white font-semibold text-[12px]">Preventa oficial en Ecuador</span>
            </div>

            <p class="mb-[32px] font-inter text-[14px] sm:text-[16px] text-white font-light text-center whitespace-pre-line">
              Rediseñamos la experiencia, y tú puedes ser parte de ella.
            </p>
            <p class="font-inter text-[14px] sm:text-[16px] text-white font-light text-center whitespace-pre-line">
              Para los early adopters, ofrecemos beneficios exclusivos, challenges y sorteos que convierten cada momento al volante en algo único y emocionante. Vive lo que otros solo imaginan y descubre cómo es rediseñar lo convencional.
            </p>
          </div>
    
        </div>
    </div>
</template>
<script lang="ts" setup>
// --- LÓGICA DE LA CUENTA REGRESIVA ---
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