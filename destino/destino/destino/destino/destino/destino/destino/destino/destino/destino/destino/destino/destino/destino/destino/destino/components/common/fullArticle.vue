<template>
    <div class="relative min-h-[100vh] lg:h-screen next-module pc-screen-dom" :class="fullArticleClass">
        <div class="cont-wrap will-change" v-if="fullArticleClass?.includes('enlarge')">
            
            <ClientOnly>
                <template v-if="type == 'video'">
                    <video id="videoPlayer" class='w-full h-full min-h-svh object-cover absolute z-0' autoplay muted loop playsinline :poster="videoImg">
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
            </ClientOnly>
            
            <div class='absolute top-0 left-0 flex flex-col justify-between items-center w-full h-full min-h-svh text-white' :class="['pt-[3rem] lg:pt-[1.5rem] pb-[2.09rem] lg:pb-[1.2rem]',props.content.titleContentClass]">
                <tLtitle :titleContent="props.content"></tLtitle>
                <slot name="bottomSlot"></slot>
            </div>
            <slot></slot>
        </div>
        <template v-else>

            <ClientOnly>
                <BaseImg 
                    :src="isMobile ?`${props.content.img}_mobile.${ext}` : `${props.content.img}.${ext}`" 
                    class="w-full h-full min-h-svh object-cover"
                    :class="props.content.imgClass"
                />
            </ClientOnly>
            
            <div class='absolute top-0 left-0 flex flex-col justify-between items-center w-full h-full min-h-svh text-white' :class="['pt-[3rem] lg:pt-[1.5rem] pb-[2.09rem] lg:pb-[1.16rem]',props.content.titleContentClass]">
                <tLtitle :titleContent="props.content"></tLtitle>
                <slot name="bottomSlot"></slot>
            </div>
            <slot></slot>
        </template>
    </div>
    
</template>
<script lang="ts" setup>
    import { ref, onMounted, onBeforeUnmount, computed, nextTick } from 'vue'
    import tLtitle from './title.vue'
    import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

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

    const breakpoints = useBreakpoints(breakpointsTailwind)
    const isMobile = breakpoints.smaller('lg') 

    const enlargeFlag = ref(false)
    const config = useRuntimeConfig()
    const video = props.content?.videoUrl || ''
    const type = props.content?.type || ''
    const fullArticleClass = props.content?.fullArticleClass || ''
    
    const getVideoSrc = (base: string) => {
      
        if (isMobile.value) {
            const lastDot = base.lastIndexOf('.');
            if (lastDot === -1) return base + '_mobile';
            return base.slice(0, lastDot) + '_mobile' + base.slice(lastDot);
        }
        return base;
    };
    const videoUrl = computed(() => {
        let base = `${config.public.staticURL}/images/${video}`;
        if (!base.match(/\.(mp4|webm|ogg)$/)) {
            base += '.mp4';
        }
        return getVideoSrc(base);
    });
    const videoImg = computed(() => {
        let base = `${config.public.staticURL}/images/${props.content?.img}.${props.ext}`;
        if (!base.match(/\.(jpg|jpeg|png|webp)$/)) {
            base += '.jpg';
        }
        return getVideoSrc(base);
    });

    // ... (El resto de tus funciones: getEnlargeFlag, enlargeAnimation, updateDimensions) ...
    const getEnlargeFlag = () => {
        const { innerWidth } = window;
        if (innerWidth >= 1024) {
            return true;
        }
        const ua = window.navigator.userAgent;
        const wxFlag = ua.toLowerCase().match(/MicroMessenger/i) == 'micromessenger';
        if (wxFlag) {
            return false;
        } else {
            const iosFlag = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            if (iosFlag) {
                return true;
            } else {
                return false;
            }
        }
    }
    const enlargeAnimation = () => {
        const enlargeEls = document.querySelectorAll('.enlarge');
        if (!enlargeFlag.value) {
            enlargeEls.forEach(el => {
                (el.querySelector('.cont-wrap') as HTMLElement)
                    .style.transform = `matrix(1, 0, 0, 1.001, 0, 0)`;
            })
        }
    }
    const updateDimensions = () => {
        if (!enlargeFlag.value) return;
        const enlargeEls = document.querySelectorAll('.enlarge');
        for (let i = 0; i < enlargeEls.length; i ++) {
            const item = enlargeEls[i];
            const el = item.querySelector('.cont-wrap') as HTMLElement;
            if (!el) continue; // Guarda de seguridad
            const itemTop = el.getBoundingClientRect().top - innerHeight;
            if (itemTop > 0) continue;

            const top = Math.abs(itemTop);
            const totalHeight = innerHeight * 4/5;
            const perUnit = 30 / totalHeight;
            const addSize = perUnit * top;
            const totalSize = addSize + 70 > 100 ? 100 : addSize + 70;
            let scale = (totalSize / 100).toFixed(5);
            el.style['transform'] = `matrix(${scale}, 0, 0, ${scale}, 0, 0)`;
        }
        requestAnimationFrame(updateDimensions);
    }

    // Función para manejar el resize
    const handleResize = () => {
        enlargeFlag.value = getEnlargeFlag();
    }
    
    onMounted(() => {
        // ELIMINADO: El 'setTimeout'
        
        // ELIMINADO: 'isMobile.value = isMobileDevice()'
        
        enlargeFlag.value = getEnlargeFlag();
        nextTick(() => {
            enlargeAnimation();
            updateDimensions();
        });
        if(!props.content.hasOwnProperty('fullArticleClass')) {
            (props.content as any).fullArticleClass = ''; // Se fuerza el tipo
        }
        window.addEventListener("resize", handleResize);
    })

    // Limpia el listener al destruir el componente
    onBeforeUnmount(() => {
        window.removeEventListener("resize", handleResize);
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