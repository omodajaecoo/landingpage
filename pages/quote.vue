<template>
  <div class="min-h-full flex flex-col bg-[#0D0E0E]">
    <EmbededForm
      class="flex-1"
      :url="URL_FORM"
      container-class="`flex-1 flex justify-center px-[10px] pt-[100px] pb-[40px] sm:px-[30px] bg-gradient-to-b from-[#0D0E0E] to-[#67B0C4]`"
      :iframe-class="`rounded-[8px] w-full shadow-lg ${breakpoints}`" loading="eager"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const URL_FORM = 'https://ayas-formweb-prd.powerappsportals.com/tools/omoda-jaecoo/form-quote-general';
const breakpoints = "h-[2050px] min-[390px]:h-[2020px] min-[501px]:h-[1740px] min-[596px]:h-[2050px] min-[828px]:h-[1600px] min-[1024px]:h-[1650px]";

const router = useRouter();
const route = useRoute();

const handleFormSubmitMessage = (event: MessageEvent) => {
  const allowedOrigins = ['https://ayas-formweb-prd.powerappsportals.com'];
  if (allowedOrigins.indexOf(event.origin) === -1) return;
  
  const data = event.data || {};
  if (data.type === 'redirect' && typeof data.url === 'string' && data.url) {
    sessionStorage.setItem('tyAccess', Date.now().toString());
    const isLPRoute = route.path.startsWith('/LP');
    const thankYouPath = isLPRoute ? '/LP/thank-you' : '/thank-you';
    const queryParams: Record<string, string> = { source: route.path.replace(/^\//, '') };
    
    router.push({ path: thankYouPath, query: queryParams });
  }
};

onMounted(() => {
  window.addEventListener('message', handleFormSubmitMessage, false);
});

onUnmounted(() => {
  window.removeEventListener('message', handleFormSubmitMessage, false);
});

</script>
<style lang='scss'>
#layout-quote {
  font-size: 16px;
  line-height: 21px;
  color: #222222;
}
</style>