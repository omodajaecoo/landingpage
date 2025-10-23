<template>
    <div class="relative min-h-[100vh] lg:h-screen next-module pc-screen-dom" :class="fullArticleClass">
        <div class="cont-wrap will-change" v-if="fullArticleClass?.includes('enlarge')">
            <template v-if="type == 'video'">
              <video id="videoPlayer" class='w-full h-full min-h-svh object-cover absolute z-0' autoplay muted loop playsinline :poster="isMobile ? `${videoImg}_mobile.${ext}` : `${videoImg}.${ext}`">
                <source :src="videoUrl" type="video/mp4">
              </video>
            </template>
            <template v-else>
              <BaseImg 
                  :src="isMobile ?`${props.content.img}_mobile.${ext}` : `${props.content.img}.${ext}`" 
                  class="w-full h-full min-h-svh object-cover"
                  :class="props.content.imgClass"
              />
            </template>
            <div class='absolute top-0 left-0 flex flex-col justify-between items-center w-full h-full min-h-svh text-white' :class="['pt-[3rem] lg:pt-[1.5rem] pb-[2.09rem] lg:pb-[1.2rem]',props.content.titleContentClass]">
                <tLtitle :titleContent="props.content"></tLtitle>
                <slot name="bottomSlot"></slot>
            </div>
            <slot></slot>
        </div>
        <template v-else>
          <BaseImg 
                :src="isMobile ?`${props.content.img}_mobile.${ext}` : `${props.content.img}.${ext}`" 
                class="w-full h-full min-h-svh object-cover"
                :class="props.content.imgClass"
            />
            <div class='absolute top-0 left-0 flex flex-col justify-between items-center w-full h-full min-h-svh text-white' :class="['pt-[3rem] lg:pt-[1.5rem] pb-[2.09rem] lg:pb-[1.16rem]',props.content.titleContentClass]">
                <tLtitle :titleContent="props.content"></tLtitle>
                <slot name="bottomSlot"></slot>
            </div>
            <slot></slot>
        </template>
    </div>
    
</template>
<script lang="ts" setup>
    import { ref, onMounted } from 'vue'
    import tLtitle from './title.vue'
    import { isMobileDevice } from '../../utils/common/index'


    const props = defineProps({
        content: {
            type: Object,
            default: () => ({
                isTextWhite: false,
                title: '',
                subTitle: '',
                h5ClassName: "",
                className: "",
                img: '',
                imgClass: '',
                fullArticleClass: '',
                titleContentClass: '',
                type: ''
            })
        },
        ext: {
            type: String,
            default: 'jpg'
        }
    })
    const isMobile = ref(false)
    const enlargeFlag = ref(false)
    const config = useRuntimeConfig()
    const video = props.content?.videoUrl || ''
    const type = props.content?.type || ''
    const fullArticleClass = props.content?.fullArticleClass || ''
    const videoUrl = computed(() => `${config.public.staticURL}/images/${video}`)
    const videoImg = computed(() => `${config.public.staticURL}/images/${props.content?.img}`)
    const getEnlargeFlag = () => {
      const { innerWidth } = window;
      if (innerWidth >= 1024) {
        return true;
      }
      const ua = window.navigator.userAgent;
      // 判断是否为微信浏览器
      const wxFlag = ua.toLowerCase().match(/MicroMessenger/i) == 'micromessenger';
      if (wxFlag) {
        return false;
      } else {
        // 判断是否为 ios 设备
        const iosFlag = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (iosFlag) {
          return true;
        } else {
          return false;
        }
      }
    }
    const enlargeAnimation = () => {
        // 滚动放大效果
        const enlargeEls = document.querySelectorAll('.enlarge');
        if (!enlargeFlag.value) {
            enlargeEls.forEach(el => {
            el.querySelector('.cont-wrap')
                .style.transform = `matrix(1, 0, 0, 1.001, 0, 0)`;
            })
        }
    }
    const updateDimensions = () => {
        if (!enlargeFlag.value) return;
        const enlargeEls = document.querySelectorAll('.enlarge');
        for (let i = 0; i < enlargeEls.length; i ++) {
          const item = enlargeEls[i];
          const el = item.querySelector('.cont-wrap');
          const itemTop = el.getBoundingClientRect().top - innerHeight;
          if (itemTop > 0) continue;

          const top = Math.abs(itemTop);
          const totalHeight = innerHeight * 4/5;
          const perUnit = 30 / totalHeight;
          const addSize = perUnit * top;
          const totalSize = addSize + 70 > 100 ? 100 : addSize + 70;
          let scale = (totalSize / 100).toFixed(5);
          // console.log('scale: ', scale)
          el.style['transform'] = `matrix(${scale}, 0, 0, ${scale}, 0, 0)`;
        }
        requestAnimationFrame(updateDimensions);
    }
    onMounted(() => {
        isMobile.value = isMobileDevice()
        enlargeFlag.value = getEnlargeFlag();
        window.addEventListener("resize", () => {
          enlargeFlag.value = getEnlargeFlag();
        })
        nextTick(() => {
          enlargeAnimation()
          updateDimensions()
        })
        if(!props.content.hasOwnProperty('fullArticleClass')) {
          props.content.fullArticleClass = ''
        }
    })
</script>
<style scoped lang="scss">
    .imgFill {
        object-fit: unset;
    }
    .full-article-class {
        height: auto !important;
        min-height: auto !important;
    }
    .cont-wrap {
      position: absolute;
      width: 100%;
      height: 100%;
      /* Quitar el escalado inicial */
      transform: none;
    }
    .will-change {
      will-change: transform;
    }
    @media (max-width: 1024px) {
        .globalWebsiteImg {
            min-height: 6.2rem;
        }
    }
</style>
<style lang="scss">
@media screen and (max-width: 1023px) {
  .h5-brand-sub{
    width: calc(624/7.5*1vw);
  }
}
</style>
