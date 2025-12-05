<template>
    <div class="thank-you_container flex flex-col h-screen justify-center items-center bg-gray-100">
        <div class="flex flex-col lg:flex-row items-center h-full w-full justify-center space-y-[16px] lg:space-y-0 ">
            <div class="flex flex-col items-center justify-center w-full lg:w-[55%] xl:w-[60%] px-[10px] space-y-[16px] lg:space-y-[32px]">
                <h1 class="font-interBold text-[20px] md:text-[32px] text-white text-center uppercase leading-none">Gracias por registrarte</h1>
                <p class="font-interSemiRegular text-white text-center text-[14px] md:text-[16px] max-w-[400px]">En poco tiempo un asesor se pondra en contacto contigo para confirmar tu cotización.</p>
            </div>
            <div class="w-full lg:w-[45%] xl:w-[40%]">
                <BaseImg src="thank-you/Banner.webp" class="w-full h-[60vh] lg:h-screen object-cover"/>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
</script>
<style scoped >
.thank-you_container {
  background: #0D0E0E;
}
.thank-you_container img {
  object-fit: cover;
  object-position: 0% 45%;
}
@media (min-width: 1024px) {
  .thank-you_container {
    background: linear-gradient(180deg, #0D0E0E 60%, #67B0C4 100%);
  }
}

</style>