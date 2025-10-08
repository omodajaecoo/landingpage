<template>
  <div
    ref="footerRef"
    class="footer py-[0.48rem] px-[0.32rem] lg:px-[0.6rem] lg:pt-[0.6rem] lg:pb-0"
    :class="footerTheme === 'dark' ? 'bg-[#222222]' : 'bg-[#F5F7FA]'"
  >
    <div class="footer-nav-wrap flex pb-[0.56rem] lg:pb-[0.3rem] text-left">
      <div
        class="footer-nav w-[2.53rem] last:w-[1.6rem] lg:w-[3.3rem] lg:last:w-[3.3rem]"
        v-for="nav in footerNavs"
        :key="nav.name"
      >
        <div
          class="mb-[0.3rem] text-[0.24rem] lg:text-[0.16rem]"
          :class="footerTheme === 'dark' ? 'text-[#fff]' : 'text-[#222]'"
        >
          {{ nav.name }}
        </div>
        <!-- sub navs -->
        <div class="sub-navs">
          <div
            class="sub-nav-item cursor-pointer duration-300 hover:text-primary text-[0.22rem] lg:text-[0.16rem] mb-[0.24rem] lg:mb-[0.14rem] lg:last:mb-0"
            :class="themeSubNavClass"
            v-for="subNav in nav.children"
            :key="subNav.name"
            @click.stop="NavToPage(subNav.linkUrl)"
          >
            {{ subNav.name }}
          </div>
        </div>
      </div>
    </div>
    <!-- 社交图标&底部 logo -->
    <div
      class="footer-info hidden lg:flex py-[0.3rem] border-solid justify-between items-center"
      style="border-top-width: 0.5px"
      :class="footerTheme === 'dark' ? 'border-[#555]' : 'border-[#999]'"
    >
      <div class="left-info">
        <BaseImg
          class="logo w-[2.91rem] mb-[0.24rem]"
          :src="logoUrl"
          alt="logo"
        />
        <div
          class="flex gap-x-[0.3rem] lg:text-[0.14rem]"
          :class="footerTheme === 'dark' ? 'text-white/70' : 'text-[#666]'"
        >
          <span
            class="cursor-pointer duration-300 hover:text-primary"
            @click="NavToPage('/privacyStatement')"
            >Privacy Policy</span
          >
          <span
            class="cursor-pointer duration-300 hover:text-primary"
            @click="NavToPage('/cookieNotice')"
            >Cookies</span
          >
          <span
            class="cursor-pointer duration-300 hover:text-primary"
            @click="NavToPage('/legalNotices')"
            >Legal Notices</span
          >
          <span
            class="cursor-pointer duration-300 hover:text-primary"
            @click="NavToPage('/globalWebsite')"
            >Global Website</span
          >
        </div>
      </div>
      <div class="right-info flex gap-x-[0.6rem] items-center">
        <div
          v-for="(item, index) in iconFooterList"
          :key="item.status"
          class="relative group"
        >
          <BaseImg
            class="logo w-[0.4rem] cursor-pointer"
            :src="item.src"
            alt="logo"
          />
          <!-- 悬停菜单 -->
          <div
            :class="[
              'absolute opacity-0 invisible transform transition-all duration-300 group-hover:opacity-100 group-hover:visible p-[0.05rem] min-w-[1.3rem]',
              index === 1 ? 'bottom-full mb-[0.1rem] left-1/2 -translate-x-1/2 translate-y-[0.15rem] group-hover:translate-y-0' : 'top-1/2 -translate-y-1/2 right-full mr-[0.1rem] translate-x-[0.15rem] group-hover:translate-x-0'
            ]"
          >
            <div
              v-for="menu in item.menus"
              :key="menu.label"
            >
              <a
                :href="menu.href"
                :target="item.target"
                class="flex items-center p-[0.1rem] rounded transition-colors duration-200"
              >
                <BaseImg
                  :src="menu.img"
                  class="h-full w-auto"
                  :alt="menu.label"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- mb 社交图标&底部 logo -->
    <div class="footer-info-mb block lg:hidden">
      <div class="w-full flex items-center justify-center gap-x-[0.48rem]">
        <div
          v-for="(item, index) in iconFooterList"
          :key="item.status"
          class="relative group"
        >
          <BaseImg
            class="logo w-[0.54rem] cursor-pointer"
            :src="item.src"
            alt="logo"
          />
          <!-- 悬停菜单 -->
          <div
            :class="[
              'absolute h-fit opacity-0 invisible transform top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:opacity-100 group-hover:visible p-[0.15rem] min-w-[2rem]',
              index === 1 ? 'left-full ml-[0.2rem] -translate-x-[0.15rem] group-hover:translate-x-0' : 'right-full mr-[0.2rem] translate-x-[0.15rem] group-hover:translate-x-0'
            ]"
          >
            <div
              v-for="menu in item.menus"
              :key="menu.label"
            >
              <a
                :href="menu.href"
                :target="item.target"
                class="flex items-center p-[0.1rem] hover:bg-[#444] rounded transition-colors duration-200"
              >
                 <BaseImg
                  :src="menu.img"
                  class="h-full w-auto"
                  :alt="menu.label"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="line my-[0.24rem] h-[0.5px]"
        :class="footerTheme === 'dark' ? 'bg-[#555]/70' : 'bg-[#999]/70'"
      ></div>
      <div class="text-center">
        <BaseImg
          class="logo w-[2.9rem] mb-[0.24rem] mx-auto"
          :src="logoUrl"
          alt="logo"
        />
      </div>
      <div
        class="text-[#666] text-[0.16rem] flex justify-center items-center gap-x-[0.3rem]"
      >
        <div @click="NavToPage('/privacyStatement')">Privacy Policy</div>
        <div @click="NavToPage('/cookieNotice')">Cookies</div>
        <div @click="NavToPage('/legalNotices')">Legal Notices</div>
        <div @click="NavToPage('/globalWebsite')">Global Website</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useFooterStore } from '~/stores/useFooter'
import { useRouter } from 'vue-router'
const { footerTheme } = storeToRefs(useFooterStore())
const store = useFooterStore()
const router = useRouter()
const footerRef = ref<HTMLElement | null>(null)
const { scrollY } = useScroll()
const iconFooterList = computed(() => {
  return [
    {
      src: '/footer/icon_facebook.png',
      status: 'facebook',
      menus: [
        {
          label: 'omoda',
          img: `/footer/OMODA_${footerTheme.value}.png`,
          href: 'https://www.facebook.com/people/OMODA-UK/100089854635629/',
        },
        {
          label: 'jaecoo',
          img: `/footer/JAECOO_${footerTheme.value}.png`,
          href: 'https://www.facebook.com/JaecooGlobal/',
        },
      ],
      target: '_blank',
    },
    {
      src: '/footer/icon_instagram.svg',
      status: 'ins',
      menus: [
        {
          label: 'omoda',
          img: `/footer/OMODA_${footerTheme.value}.png`,
          href: 'https://www.instagram.com/omoda_uk/',
        },
        {
          label: 'jaecoo',
          img: `/footer/JAECOO_${footerTheme.value}.png`,
          href: 'https://www.instagram.com/jaecoo.global/',
        },
      ],
      target: '_blank',
    },
  ]
})

watch(scrollY, (newVal) => {
  if (footerRef.value) {
    if (newVal > 0) {
      footerRef.value.classList.add('active')
    } else {
      footerRef.value.classList.remove('active')
    }
  }
})

const logoUrl = computed(() => `common/logo_${footerTheme.value}.png`)
const themeSubNavClass = computed(() => {
  if (footerTheme.value === 'dark') {
    return 'text-[#666] lg:text-[#fff]/70'
  } else {
    return 'text-[#666]'
  }
})

const footerNavs = [
  {
    name: 'JAECOO Models',
    children: [
      {
        name: 'JAECOO J7',
        linkUrl: '/j7',
      },
      {
        name: 'JAECOO J8',
        linkUrl: '/j8',
      },
      {
        name: 'JAECOO J5',
        linkUrl: '/j5',
      },
      {
        name: 'JAECOO J7 SHS',
        linkUrl: '/j7shs',
      },
    ],
  },
  {
    name: 'OMODA Models',
    children: [
      {
        name: 'OMODA C5',
        linkUrl: '/c5',
      },
      {
        name: 'OMODA E5',
        linkUrl: '/e5',
      },
    ],
  },
  {
    name: 'About us',
    children: [
      {
        name: 'Brand',
        linkUrl: '/brand',
      },
      {
        name: 'News',
        linkUrl: '/newsCenter',
      },
    ],
  },
]
// 跳转页面
const NavToPage = (url: string) => {
  if (url === '/cookieNotice') {
    store.setShowCookie(true)
    return
  }
  store.setPath(url)
  router.push({ path: url })
}
</script>
<style scoped lang="scss">
.footer-nav {
  > div:first-child {
    font-family: 'MiSansBold';
    @media (max-width: 1024px) {
      font-family: 'MiSansMedium';
    }
  }
}

// 悬停菜单样式
.group {
  &:hover {
    .logo {
      opacity: 0.8;
    }
  }
}
</style>
