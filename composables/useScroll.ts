const useScroll = () => {
  const scroll = ref(0);
  const onScroll = () => {
    scroll.value = window.scrollY;
  };

  onMounted(() => {
    window.addEventListener('scroll', onScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
  });

  return { scrollY: scroll };
}

export default useScroll;