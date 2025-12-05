import type { Directive } from 'vue'

interface AnimationDirectiveBinding {
  value: {
    effect?: string   // 动画类名前缀
    delay?: number    // 延迟触发（秒）
    once?: boolean    // 是否只触发一次
    immediate?: boolean // 是否立即触发
  }
}

const observerMap = new Map<Element, IntersectionObserver>()

const vAnimate: Directive = {
  beforeMount(el, binding: AnimationDirectiveBinding) {
    const { effect = 'fadeInUp' } = binding.value || {}
    if (effect === 'zoomInCenter') {
      el.style.transform = 'scale(1.2)';
    } else if (effect.includes('fade')) {
      el.style.opacity = '0';
    } 
  },
  mounted(el, binding: AnimationDirectiveBinding) {
    const { effect = 'fadeInUp', delay = 0, once = true, immediate = false } = binding.value || {}
    el.style.willChange = 'transform';
    if (immediate) {
      el.classList.add('animate__animated', `animate__${effect}`)
      return
    }
    
    // 清理旧观察器
    if (observerMap.has(el)) {
      observerMap.get(el)?.unobserve(el)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 添加动画类
          setTimeout(() => {
            el.classList.add('animate__animated', `animate__${effect}`)
            if (once) observer.unobserve(el)
          }, delay * 1000)
        } else {
          // 移除动画类
          if (once) return
          if (effect.includes('fade')) {
            el.style.opacity = '0';
          }
          el.classList.remove('animate__animated', `animate__${effect}`)
        }
      })
    }, { threshold: 0.2 })

    observer.observe(el)
    observerMap.set(el, observer)
    
    // // 初始化隐藏元素
    // el.style.opacity = 0
  },
  unmounted(el) {
    observerMap.get(el)?.unobserve(el)
    observerMap.delete(el)
  }
}

export default vAnimate