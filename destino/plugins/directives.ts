import vAnimate from '~/utils/directives/animate'
import scrollDirective from '~/utils/directives/scroll'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('animate', vAnimate)
  nuxtApp.vueApp.directive('scroll', scrollDirective)
})