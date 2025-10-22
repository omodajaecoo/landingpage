<template>
  <nav class="w-full lg:w-auto overflow-y-auto
    h-[100vh] fixed left-0 top-0 pt-[0.88rem] lg:pt-0
    lg:h-full lg:static"
    :class="[
      toggleShowClass,
      'lg:visible lg:opacity-100',
      'lg:transform-none',
      props.expand ? 'translate-y-0' : '-translate-y-full',
      'transition-all duration-700 ease-[cubic-bezier(0.4, 0.0, 0.2, 1)] lg:transition-none'
    ]"
  >
    <!-- pc -->
    <ul class="lg:flex hidden justify-center lg:h-full">
      <li 
        v-for="nav in navList.filter(item => item.name !== 'global website')" 
        :key="nav.name" 
        @click="toggleNav(nav)"
        @mouseover="navStore.setNav(true, nav.name)"
        @mouseleave="navStore.setNav(false)"
        :class="{'group': navStore.name === nav.name}"
        class="mr-[0.24rem] last:mr-0 flex items-center">
        <div class="nav-line relative
          capitalize cursor-pointer
          text-[14px] leading-[0.21rem] px-[0.16rem] py-[0.1rem]"
        >
          <span class="tracking-[1px]">{{ nav.name }}</span>
          <div class="line"></div>
        </div>
        <!-- model -->
        <transition appear enter-active-class="animate__fadeIn" leave-active-class="animate__fadeOut">
          <div v-if="nav.children && nav.type === 'model' && navStore.name === nav.name" 
            class="nav-mask animate__animated animate__faster">
            <LayoutsModelList 
              v-if="nav.children && nav.type === 'model'"
              v-show="navStore.name === nav.name"
              class="h-[3rem] lg:h-auto opacity-100 duration-500 ease-in-out transition-all relative z-[101] pointer-events-auto"
              :class="[modelBgClass]"
              :modelList="nav.children" 
              :brand-list="brandList"
          />
        </div>
        </transition>
        <transition appear enter-active-class="animate__fadeIn" leave-active-class="animate__fadeOut">
          <div class="nav-mask animate__animated animate__faster" v-if="nav.children && nav.type !== 'model' && navStore.name === nav.name" >
            <ul 
              v-if="nav.children && nav.type !== 'model'" 
              v-show="navStore.name === nav.name"
              :class="[bgColor, textColor]"
              class="
                absolute top-0 left-0
                flex items-center justify-center
                w-[100vw] h-[0.6rem] overflow-hidden backdrop-blur-2xl
                pointer-events-auto opacity-100 group-hover:opacity-100
            ">
          <li 
            v-for="child in nav.children" 
            :key="child.name"
            class="mr-[150px] last:mr-0 flex items-center"
            @click.stop="NavToPage(child.linkUrl)"
          >
            <div 
              class="nav-line block text-[16px] lg:text-[14px] cursor-pointer relative px-[0.16rem] py-[0.1rem] animate__animated animate__fadeIn animate__faster"
            >
              <span>{{ child.name }}</span>
              <span class="line"></span>
            </div>
          </li>
            </ul>
          </div>
        </transition>
      </li>
    </ul>
    <!-- mb -->
    <ul class="flex lg:hidden flex-col backdrop-blur-xl"
        :class="headerTheme === 'dark' ? 'bg-black/95' : 'bg-white/95'">
      <li
        v-for="(nav, index) in mbNavList" 
        :key="nav.name" 
        class="text-center leading-[0.84rem] text-[0.24rem] font-miMedium overflow-hidden
          opacity-0 transform -translate-y-4"
        :class="[
          props.expand ? 'nav-item-show' : ''
        ]"
        @click="toggleNav(nav)"
        :style="{ animationDelay: `${0.2 + index * 0.1}s` }"
      >
        <div class="nav-info relative capitalize" 
          :class="[
            mbMenuBg,
            'transition-all duration-500'
          ]"
        >
          <BaseImg 
            v-if="nav.name === 'global website'"
            :src="`header/globalsite_${headerTheme}.png`" 
            class="inline-block w-[0.24rem] mr-[0.2rem] mt-[-2px]"
          />
          <span>{{ nav.name }}</span>
          <BaseImg 
            v-if="nav.children && nav.children.length > 0"
            src="common/arrow_bottom.png" 
            class="duration-500 transition-transform absolute w-[0.38rem] right-[0.38rem] top-1/2 -translate-y-1/2"
            :class="[
              { 'rotate-180': nav.expand }, 
              headerTheme === 'dark' ? 'bg-black/70 text-white' : 'bg-white/80'
            ]" 
          />
        </div>
        
        <!-- model list -->
        <template v-if="nav.type === 'model'">
          <div 
            class="sub-menus overflow-hidden" 
            :class="[
              headerTheme === 'dark' ? 'bg-black/70 text-white' : 'bg-white/80',
              'transition-all duration-500 ease-[cubic-bezier(0.4, 0.0, 0.2, 1)]'
            ]"
            :style="{
              maxHeight: nav.expand ? '100vh' : '0',
              opacity: nav.expand ? 1 : 0,
              transform: nav.expand ? 'translateY(0)' : 'translateY(-8px)'
            }"
          >
            <div class="py-[0.32rem]">
              <LayoutsModelList 
                :class="headerTheme === 'dark' ? 'text-white' : 'text-[#222]'"
                :modelList="nav.children" 
                :brand-list="brandList"
              />
            </div>
          </div>
        </template>
        
        <!-- sub menu -->
        <template v-if="nav.children && nav.type !== 'model'">
          <div 
            class="sub-menus overflow-hidden" 
            :class="[
              headerTheme === 'dark' ? 'bg-black/70 text-white' : 'bg-white/80 text-[#222]',
              'transition-all duration-500 ease-[cubic-bezier(0.4, 0.0, 0.2, 1)]'
            ]"
            :style="{
              maxHeight: nav.expand ? '100vh' : '0',
              opacity: nav.expand ? 1 : 0,
              transform: nav.expand ? 'translateY(0)' : 'translateY(-8px)'
            }"
          >
            <div class="py-[0.16rem]">
              <div 
                class="sub-menu py-[0.16rem] leading-[0.32rem] text-[0.24rem] cursor-pointer
                  transition-all duration-300"
                v-for="sub in nav.children"
                :key="sub.name"
                @click.stop="NavToPage(sub.linkUrl)"
              >{{ sub.name }}</div>
            </div>
          </div>
        </template>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import { useHeaderStore } from '~/stores/useHeader';
  import { useNavStore } from '~/stores/useNav';
  const navStore = useNavStore();

  const router = useRouter();
  const props = defineProps<{ expand: boolean; }>();
  const showModelList = ref(false);

  watch(() => props.expand, (newVal) => {
    if (!newVal) {
      // 重置mbNavList里的expand为false
      mbNavList.forEach(item => {
        item.expand = false;
      })
    }
  })

  // 切换显示菜单
  const toggleShowClass = computed(() => {
    if (props.expand) {
      return 'visible opacity-100';
    } else {
      // 增加过渡时间，使收起更平滑
      return 'invisible opacity-0 transition-opacity duration-500 lg:visible lg:opacity-100';
    }
  })

  const { headerTheme } = storeToRefs(useHeaderStore());
  const store = useHeaderStore();
  const bgColor = computed(() => 
    headerTheme.value === 'dark' ? 'bg-[rgba(0,0,0,0.7)]' : 'bg-[rgba(255,255,255,0.8)]'
  );
  const modelBgClass = computed(() => 
    headerTheme.value === 'dark' ? 'bg-[rgba(0,0,0,0.8)]' : 'bg-[rgba(255,255,255,0.8)]'
  );
  const textColor = computed(() => 
    headerTheme.value === 'dark' ? 'text-white' : 'text-black'
  );
  const mbMenuBg = computed(() => headerTheme.value === 'dark' ? 'bg-black text-white' : 'bg-white text-[#333]')
  const brandList = ['JAECOO', 'OMODA'];  
  const navList = [
    {
      name: 'models',
      type: 'model',
      children: [
        {
          name: 'OMODA C5',
          imgUrl: '/header/c5.png',
          brand: brandList[1],
          linkUrl: '/c5',
        },
        {
          name: 'OMODA E5',
          imgUrl: '/header/e5.png',
          brand: brandList[1],
          linkUrl: '/e5'
        },
        {
          name: 'JAECOO J7',
          imgUrl: '/header/j7.png',
          brand: brandList[0],
          linkUrl: '/j7'
        },
        
      ]
    },
  ]

  // 注入父组件提供的方法
  const parentMethod = inject('parentMethod');

  const mbNavList = reactive(navList.map(item => ({
    ...item,
    expand: false
  })))

  const toggleNav = (nav: { expand: boolean; linkUrl?: string }) => {
    if (nav.children && nav.children.length > 0) {
      nav.expand = !nav.expand;
    } else if (nav.linkUrl) {
      if (nav.linkUrl.startsWith('#')) {
        // Scroll suave al footer
        const el = document.querySelector(nav.linkUrl);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
        navStore.setNav(false);
        if (parentMethod) {
          parentMethod();
        }
      } else {
        NavToPage(nav.linkUrl);
      }
    }
  }

  // 跳转页面
  const NavToPage = (url: string) => {
    store.setPath(url);
    router.push({ path: url });
    navStore.setNav(false);
    if (parentMethod) {
      parentMethod();
    }
  }

</script>

<style lang="scss" scoped>
.nav-mask {
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.3);
  @apply w-full h-[100vh] absolute top-[100%] left-0 z-[100] overflow-hidden pointer-events-none;
}
.nav-line {
  .line {
    position: absolute;
    width: 80%;
    height: 2px;
    left: 50%;
    transform: translateX(-50%);
    bottom: -2px;
    background: linear-gradient(to right, #67B0C4, #67B0C4) no-repeat right bottom;
    background-size: 0% 100%;
    transition: background-size .3s ease;
    border-radius: 1px;
  }
}

.nav-line:hover>.line, .active>.nav-line>.line {
  background: linear-gradient(to right, #67B0C4, #67B0C4) no-repeat left bottom;
  background-size: 100% 2px;
}

.sub-menus {
  display: grid;
  grid-template-rows: 0fr;
  &.active {
    grid-template-rows: 1fr;
  }
}

.nav-info {
  position: relative;
  z-index: 2;
}

.sub-menus {
  position: relative;
  z-index: 1;
}

/* 添加淡入淡出动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 移动端特定样式 */
@media (max-width: 1024px) {
  .nav-info {
    position: relative;
    z-index: 2;
  }

  .sub-menus {
    position: relative;
    z-index: 1;
  }

  /* 导航项依次淡入动画 */
  .nav-item-show {
    animation: navItemShow 0.6s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
  }

  @keyframes navItemShow {
    0% {
      opacity: 0;
      transform: translateY(-16px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* 导航收起动画 */
  nav {
    transform-origin: top;
    will-change: transform, opacity;
  }

  /* 子菜单展开动画 */
  .sub-menus {
    transform-origin: top;
    will-change: transform, opacity, max-height;
  }
}

/* PC端保持原有样式 */
@media (min-width: 1024px) {
  .nav-info,
  .sub-menus {
    transition: none;
  }
}
</style>