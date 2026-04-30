<template>
  <footer class="w-full bg-[#0d0e0e] flex flex-col justify-center items-center footer-info">
    <div class="flex flex-col justify-center w-full bg-[#0d0e0e] px-[24px] sm:px-[50px] lg:min-h-[140px] py-[50px] lg:py-[32px] gap-y-[20px] ">
      <template v-if="!routePath.startsWith('/LP')">
        <div class="flex w-full flex-col space-y-[32px]">
          <div class="flex justify-center lg:justify-start items-start space-x-[19px] sm:space-x-[64px]">
            <template v-for="(category) in categories" :key="category.title">
              <div class="flex min-w-0 flex-1 lg:flex-none flex-col space-y-[16px]">
                <div v-if="category.isLinked">
                  <a :href="category.link">
                    <p class="text-[10px] sm:text-[12px] text-white font-interMedium hover:underline cursor-pointer">
                      {{ category.title }}
                    </p>
                  </a>
                </div>
                <div v-else>
                  <p class="text-[10px] sm:text-[12px] text-white font-interMedium">
                    {{ category.title }}
                  </p>
                </div>
                <a class="block w-full min-w-0 break-words text-[10px] sm:text-[12px] text-white font-interSemiRegular hover:underline" v-for="(link) in category.links" :key="link.name" :href="link.link">
                  {{ link.name }}
                </a>
              </div>

            </template>
          </div>
          <hr class="border-t border-[#C6C6C6] opacity-40 mt-[0px] w-[0px] h-[0px] lg:w-full lg:h-[1px] hidden lg:block" />
        </div>
      </template>
      <div class="flex flex-col lg:flex-row justify-between items-center w-full space-y-[32px] lg:space-y-0">
        <div class="flex justify-between items-center space-x-[40px] lg:space-x-[24px] lg:order-3">
          <a href="https://www.facebook.com/omodajaecooecuador" target="_blank" rel="noopener">
            <BaseImg src="footer/icon_facebook.webp"
              class="h-[32px] sm:h-[50px] lg:h-[24px] w-[32px] sm:w-[50px] lg:w-[24px] object-contain cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/omodajaecoo.ecuador/" target="_blank" rel="noopener">
            <BaseImg src="footer/icon_instagram.webp"
              class="h-[32px] sm:h-[50px] lg:h-[24px] w-[32px] sm:w-[50px] lg:w-[24px] object-contain cursor-pointer" />
          </a>
          <a href="https://www.tiktok.com/@omodajaecoo.ecuador" target="_blank" rel="noopener">
            <BaseImg src="footer/icon_tiktok.webp"
              class="h-[32px] sm:h-[50px] lg:h-[24px] w-[32px] sm:w-[50px] lg:w-[24px] object-contain cursor-pointer" />
          </a>
        </div>
        <hr class="border-t border-white w-full lg:w-[0px] h-[1px] lg:h-[0px] lg:order-2" />
        <div class="flex lg:order-1">
          <a href="/">
            <BaseImg src="common/logo_dark.png" class="h-[22px] w-auto object-contain" />
          </a>
        </div>
      </div>
      <div class="flex justify-center lg:justify-start mt-[6px] items-center  space-x-[20px] sm:space-x-[40px]">
        <span class="text-[10px] sm:text-[12px] text-white font-interRegular hover:underline cursor-pointer"
          @click="NavToPage('/privacyStatement')">
          Aviso de Privacidad
        </span>
        <span class="text-[10px] sm:text-[12px] text-white font-interRegular hover:underline cursor-pointer"
          @click="NavToPage('/cookieNotice')">
          Cookies
        </span>
      </div>
    </div>
  </footer>

</template>
<script lang="ts" setup>
defineProps<{ routePath: string }>();
import { useRouter } from 'vue-router'
import { useFooterStore } from '~/stores/useFooter'
const store = useFooterStore()
const router = useRouter()


const categories = [
  {
    title: 'MODELOS JAECOO',
    isLinked: false,
    links: [
      { name: 'JAECOO J7 SHS P', link: '/models/jaecoo-j7' },
    ]
  },
  {
    title: 'MODELOS OMODA',
    isLinked: false,
    links: [
      { name: 'OMODA C5 SHS H', link: '/models/omoda-c5' },
      { name: 'OMODA E5', link: '/models/omoda-e5' },
    ]
  },
  {
    title: 'NOSOTROS',
    isLinked: true,
    link: '/about',
    links: [
      { name: 'COTIZACIÓN', link: '/quote' }
    ]
  },
  {
    title: 'POSVENTA',
    isLinked: false,
    links: [
      { name: 'GARANTÍA', link: '/after-sales/warranty' },
      { name: 'REPUESTOS', link: '/after-sales/spare-parts' },
      { name: 'MANTENIMIENTO', link: '/after-sales/maintenance' }
    ]
  }
]

const NavToPage = (url: string) => {
  if (url === '/cookieNotice') {
    store.setShowCookie(true)
    return
  }
  store.setPath(url)
  router.push({ path: url })
}

</script>