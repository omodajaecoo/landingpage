<template>
    <div class="overflow-hidden">
        <fullArticle class="bg-black" :content="content" v-animate="{
            effect: 'zoomInCenter',
            immediate: true
        }"></fullArticle>
    </div>
   <notFullScreen :bannerContent="banner2Content"></notFullScreen>
   <fullArticle :content="banner3Content"></fullArticle>
    <bannerFour :content="banner4Content"></bannerFour>
</template>
<script lang="ts" setup>
    import { ref, onMounted } from 'vue'
    import fullArticle from '../../components/common/fullArticle.vue'
    import notFullScreen from '../../components/brand/notFullScreen.vue'
    import bannerFour from '../../components/brand/bannerFour.vue'
    import { isMobileDevice } from '../../utils/common/index'
    // 第一屏
    const content = ref({
        // 字体颜色是否为#fff
        isTextWhite: true,
        // 主标题
        title: 'About us',
        // 副标题 如果为空可以不传 支持传html标签如<br />
        subTitle: `In today's rapidly evolving landscape, the automotive industry is undergoing transformative change. Consumer demographics are becoming <br />
        increasingly younger, with demands growing ever more personalized — cars have long transcended their basic transportation function to <br />
        become vital carriers of lifestyle and personal aspirations. <br />
        It is within this tide of change that OMODA & JAECOO brands have emerged. They not only harness cutting-edge automotive technologies to <br />
        build two core product matrices — OMODA and JAECOO — but also deeply integrate into diverse cultural circles and personalized domains <br />
        through O-LAB and J-LAND, creating limitless possibilities for users' future mobility.`,
        // 副标题传入class 支持TailWind的写法传入
        h5ClassName: 'h5-brand-sub',
        // 标题组件的class 支持TailWind的写法
        className: "",
        // 控制图片的class
        imgClass: "",
        // 传入的图片
        img: "brand/brand_banner1",
        // 主标题传入class 支持TailWind的写法传入
        titleClassName: 'uppercase'
    })
    // 第二屏
    const banner2Content = ref({
        isTextWhite: false,
        title: 'OMODA',
        subTitle: `OMODA, as a global professional Crossover brand, focuses on creating stylish crossover products for the new generation of lifestyle <br />
        enthusiasts. Drawing from its core DNA of "Future, Fashion, Technology, and Green," it aims to break traditional constraints and empower <br />
        young people to pursue more personalized, contemporary lifestyles through forward-thinking design and cutting-edge technology.`,
        h5ClassName: "brand-subtitle h5-brand-sub",
        className: "",
        img: "brand/brand_banner2",
        titleClassName: "brand-title uppercase"
    })
    // 第三屏
    const banner3Content = ref({
        isTextWhite: true,
        title: 'JAECOO',
        subTitle: `JAECOO — the global leader in refined off-roading — creates "Fearless Adventure" vehicle series specifically for emerging elites. Adhering to the <br />
        philosophy of "Rooted in Classics, Transcending Classics," it breaks the traditional "rugged and monotonous" stereotypes of off-road vehicles, <br />
        reconstructing off-road aesthetics with extraordinary refinement and leading new off-road trends with exceptional performance, ensuring every <br />
        journey combines sophistication with power.`,
        h5ClassName: 'h5-brand-sub',
        className: "",
        imgClass: "",
        img: "brand/brand_banner3",
        fullArticleClass: 'enlarge',
    })
    // 第四屏
    const bannerFourArr = [{img: 'brand/brand_banner4_1.jpg', title: '',subtitle: "Addressing contemporary consumers' increasingly diverse personalized needs, the complementary product matrices of OMODA & JAECOO together fulfill the brand vision of co-creating a better life with young people."},
        {img: 'brand/brand_banner4_2.jpg', title: '',subtitle: 'Centered on the core concept of "People + Cars + Life," they have rapidly penetrated global markets since launch, now covering user communities across over 50 countries and regions. Within just two years, export sales have exceeded 600,000 units, with strong growth momentum positioning them among the leading global personalized automotive brands.'},
        {img: 'brand/brand_banner4_3.jpg', title: '',subtitle: `Moving forward, OMODA & JAECOO will continue to journey alongside the new generation's driving forces, guided by the brand spirit of "Live Well, Move Forward Fearlessly," working together to create a better, more diverse, and lower-carbon future of mobility.`}]
    const banner4Content = reactive(bannerFourArr)
    const reportWindowSize = () => {
        const isMobile = isMobileDevice()
        console.log(isMobile, 'isMobile============');
        if(isMobile) {
            console.log("当前是手机端");
            content.value.subTitle = `In today's rapidly evolving landscape, the automotive <br />
            industry is undergoing transformative change. <br />
            Consumer demographics are becoming increasingly <br />
            younger, with demands growing ever more personalized <br />
            — cars have long transcended their basic transportation <br />
            function to become vital carriers of lifestyle and <br />
            personal aspirations. <br />
            It is within this tide of change that OMODA & JAECOO <br />
            brands have emerged. They not only harness <br />
            cutting-edge automotive technologies to build two core <br />
            product matrices — OMODA and JAECOO — but also <br />
            deeply integrate into diverse cultural circles and <br />
            personalized domains through O-LAB and J-LAND, <br />
            creating limitless possibilities for users' future mobility.`
            banner2Content.value.subTitle = `OMODA, as a global professional Crossover brand, focuses on creating stylish crossover products for the new generation of lifestyle enthusiasts. Drawing from its core DNA of "Future, Fashion, Technology, and Green," it aims to break traditional constraints and empower young people to pursue more personalized, contemporary lifestyles through forward-thinking design and cutting-edge technology.`
            banner3Content.value.subTitle = `JAECOO — the global leader in refined off-roading — creates "Fearless Adventure" vehicle series specifically for emerging elites. Adhering to the philosophy of "Rooted in Classics, Transcending Classics," it breaks the traditional "rugged and monotonous" stereotypes of off-road vehicles, reconstructing off-road aesthetics with extraordinary refinement and leading new off-road trends with exceptional performance, ensuring every journey combines sophistication with power.`
            banner4Content.forEach(item => {
                if(item.img.indexOf('_mobile') == -1){
                    let preStr = item.img.split('.')[0]
                    item.img = `${preStr}_mobile.jpg`
                }
            })
        }else {
            banner4Content.splice(0,banner4Content.length,...bannerFourArr)
        }
    }
    onMounted(() => {
        reportWindowSize()
        window.addEventListener('resize', () => {
            console.log("窗口大小发生了变化");
            nextTick(() => {
                reportWindowSize()
            })
        });
    })
</script>
