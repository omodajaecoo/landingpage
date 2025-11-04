function useInViewer(target: HTMLElement, options = {}, callback?: () => void) {
  const isIntersecting = ref(false)

  let observer: IntersectionObserver;

  watch(
    () => isIntersecting.value,
    (value) => {
      console.log(value)
      callback && callback();
    }, {
      immediate: true
    }
  )

  onMounted(() => {
    if (target) {
      console.log(123)
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isIntersecting.value = entry.isIntersecting
        })
      }, {
        threshold: 0.2
      })
      observer.observe(target)
    }
  })

  onUnmounted(() => {
    if (target) {
      observer.unobserve(target)
    }
  })

  return {
    isIntersecting
  }
}

export default useInViewer;