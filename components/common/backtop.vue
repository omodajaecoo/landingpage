<template>
    <div>
        <div class="cti_go_top" :class="showBackTopClass" @click="scrollTop">
            <BaseImg 
                src="/common/backtop.webp" 
                class="heartbeat"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted, onBeforeUnmount } from "vue";
    import type { Ref } from "vue";
    var showBackTop: Ref<boolean> = ref(false);
    const showBackTopClass = ref('hide_top')
    const route = useRoute();
    const cur_url = route.path;
    function handleScroll(event) {
        let e = event.originalEvent || event;
        let deltaY = e.deltaY || e.detail;
        const footerHeight = document.querySelector('.footer-info')?.clientHeight || 0;
        const scrollTop = document.documentElement.scrollTop
        const scrollHeight = document.documentElement.scrollHeight;
        const gap = scrollHeight - footerHeight - window.innerHeight;
        // console.log(gap, 'gap=============');
        // console.log(scrollTop, 'scrollTop=============');
        // 处理滚动事件的逻辑
        showBackTopClass.value = scrollTop > gap ? 'show_top2' : (scrollTop > 20 ? 'show_top' : 'hide_top');
        // // 处理滚动事件的逻辑
        // switch (cur_url) {
        //     case "/":
        //     case "/models":
        //     case "/j8":
        //         showBackTopClass.value = scrollTop > gap ? 'show_top2' : (scrollTop > 20 ? 'show_top' : 'hide_top');
        //         break;
        //     default:
        //         showBackTopClass.value = scrollTop > gap ? 'show_top2' : ((scrollTop > 20 && scrollTop < 600) ? 'show_top' : 'hide_top');
        //         break;
        // }
    }
    onMounted(() => {
        window.addEventListener("wheel", handleScroll);
    });
    onBeforeUnmount(() => {
        window.removeEventListener("wheel", handleScroll);
    });
    function scrollTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        setTimeout(() => {
            showBackTopClass.value = 'hide_top'
        }, 700);
    }
</script>

<style scoped>
    .cti_go_top {
        align-items: center;
        border-radius: 50%;
        bottom: 0.4rem;
        cursor: pointer;
        display: flex;
        width: 0.48rem;
        height: 0.48rem;
        justify-content: center;
        position: fixed;
        right: 0.6rem;
        z-index: 99;
    }

    @media (max-width: 1324px) {

        .cti_go_top {
            display: none;
        }
    }

    .show_top {
      position: fixed;
      margin-bottom: 0;
    }

    .show_top2 {
      position: absolute;
      margin-bottom: 110px;
    }

    .hide_top {
        transform: translateY(52.08333vw);
    }

    @keyframes slide-top {
        0% {
            transform: translateY(0);
        }

        100% {
            transform: translateY(-0.34rem);
        }
    }

    @keyframes slide-out-bottom {
        0% {
            opacity: 1;
            transform: translateY(0);
        }

        100% {
            opacity: 0;
            transform: translateY(52.08333vw);
        }
    }

    .cti_go_top>img {
        width: 100%;
        height: auto;
        cursor: pointer;
    }

    .backtop_text {
        bottom: -0.3rem;
        opacity: 0;
        position: absolute;
        transition: all 0.4s;
        white-space: nowrap;
        width: auto;
        font-size: 0.14rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-family: "MiSansLight";
        text-shadow: 0 0 0.43rem rgba(0, 0, 0, 0.9);
        color: #222;
    }

    .show-toptxt {
        opacity: 1 !important;
    }
</style>