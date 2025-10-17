import { isMobileDevice, debunce } from '~/utils/common';

function useDeviceType() {
  const { isClient } = useNuxtApp();
  const isMobile = ref(isClient ? isMobileDevice() : false);

  const handleResize = () => {
    isMobile.value = isMobileDevice();
  }

  onMounted(() => {
    handleResize();
    window.addEventListener('resize', debunce(handleResize));
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', debunce(handleResize));
  })

  return {
    isMobile
  }
}

export default useDeviceType;