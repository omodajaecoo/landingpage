function useMouseDrag(elName: string, unitDistance = 10, maxNum = 60) {
  const startX = ref(0)
  const startY = ref(0)
  const deltaX = ref(0)
  const deltaY = ref(0)
  const pageX = ref(0)
  const pageY = ref(0)
  const isDragging = ref(false)
  const idx = ref(0)
  const lastIdx = ref(0)
  let targetRef: HTMLElement;

  const onMouseDown = (event: MouseEvent) => {
    startX.value = event.clientX
    startY.value = event.clientY
    isDragging.value = true
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }

  const onMouseMove = (event: MouseEvent) => {
    if (isDragging.value) {
      deltaX.value = event.clientX - startX.value
      deltaY.value = event.clientY - startY.value
      const movement = Math.floor(deltaX.value / unitDistance)
      idx.value = (lastIdx.value + movement) % 60
      if (idx.value < 0) {
        idx.value += 60
      }
    }
    
  }

  const onMouseUp = () => {
    isDragging.value = false
    lastIdx.value = idx.value
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
  }

  const handleFetchPagePosition = (event: MouseEvent) => {
    pageX.value = event.clientX;
    pageY.value = event.clientY;
  }

  onMounted(() => {
    targetRef = document.querySelector(elName)!;
    if (targetRef) {
      targetRef.addEventListener('mousedown', onMouseDown)
      window.addEventListener('mousemove', handleFetchPagePosition)
    }
  })

  onUnmounted(() => {
    if (targetRef) {
      targetRef.removeEventListener('mousedown', onMouseDown)
      window.addEventListener('mousemove', handleFetchPagePosition)
    }
  })

  return {
    deltaX,
    deltaY,
    isDragging,
    idx,
    pageX,
    pageY
  }
}

export default useMouseDrag;