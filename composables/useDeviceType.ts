import { isMobileDevice, debunce } from '~/utils/common';

function useDeviceType() {
  const { isClient } = useNuxtApp();
  const isMobile = ref(isClient ? isMobileDevice() : false);
  let resizeHandler: (() => void) | undefined;

  const handleResize = () => {
    isMobile.value = isMobileDevice();
  }

  onMounted(() => {
    handleResize();
    resizeHandler = debunce(handleResize);
    window.addEventListener('resize', resizeHandler);
  })

  onBeforeUnmount(() => {
    if (resizeHandler) {
      window.removeEventListener('resize', resizeHandler);
    }
  })

  return {
    isMobile
  }
}

export default useDeviceType;
