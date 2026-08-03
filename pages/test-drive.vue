<template>
  <div class="test-drive-page flex min-h-[80vh] flex-col bg-[#0D0E0E] text-white">
    <section class="test-drive-hero flex-shrink-0 px-[20px] pt-[120px] pb-[24px] sm:px-[30px] lg:pt-[118px]">
      <div class="mx-auto w-full max-w-[1120px]">
        <h1 class="text-[20px] leading-none font-interRegular sm:text-[36px] text-center">
          Agenda tu Test Drive
        </h1>
      </div>
    </section>

    <EmbededForm
      v-if="URL_FORM"
      :url="URL_FORM"
      container-class="flex justify-center px-[10px] pb-[48px] sm:px-[30px] bg-gradient-to-b from-[#0D0E0E] to-[#67B0C4]"
      :iframe-class="`rounded-[8px] w-full max-w-[1120px] shadow-lg bg-white ${breakpoints}`"
      error-class="mx-auto flex min-h-[320px] w-full max-w-[1120px] items-center justify-center rounded-[8px] bg-white/95 p-8 text-center text-[18px] leading-[1.45] text-[#222] shadow-lg"
      loading="eager"
    />
    <div
      v-else
      class="flex flex-1 items-center justify-center px-[10px] pb-[48px] sm:px-[30px] bg-gradient-to-b from-[#0D0E0E] to-[#67B0C4]"
    >
      <div class="mx-auto flex w-full max-w-[1120px] items-center justify-center rounded-[8px] bg-white/95 p-8 text-center text-[18px] leading-[1.45] text-[#222] shadow-lg">
        El formulario no está disponible en este momento. Por favor intenta nuevamente más tarde o contáctanos directamente.
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePowerAppsFormMessages } from '~/composables/usePowerAppsFormMessages';

const URL_FORM = '';
const breakpoints = "h-[2050px] min-[390px]:h-[2020px] min-[501px]:h-[1740px] min-[596px]:h-[2050px] min-[828px]:h-[1600px] min-[1024px]:h-[1650px]";

usePowerAppsFormMessages();
</script>
