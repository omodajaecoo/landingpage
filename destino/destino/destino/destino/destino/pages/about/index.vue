<template>
    <div class="overflow-hidden">
        <fullArticle class="bg-black" :content="banner1Content" ext="webp" v-animate="{
            effect: 'zoomInCenter',
            immediate: true
        }"></fullArticle>
    </div>
    <fullArticle class="bg-black" :content="banner2Content" ext="webp"></fullArticle>
    <notFullScreen class="bg-black" :bannerContent="banner3Content" ext="webp"></notFullScreen>
    <notFullScreen class="bg-black" :bannerContent="banner4Content" ext="webp"></notFullScreen>

</template>
<script lang="ts" setup>
    import { ref } from 'vue'
    import fullArticle from '../../components/common/fullArticle.vue'
    import notFullScreen from '../../components/brand/notFullScreen.vue'

    const banner1Content = ref({
        isTextWhite: true,
        subTitle: `
        <div class="px-0 max-w-[876px] lg:mx-[70px] font-interSemiBold text-[20px] sm:text-[36px] text-white">ACERCA DE NOSOTROS</div>
        <div class="px-0 max-w-[876px] lg:mx-[70px] font-interRegular text-[12px] sm:text-[16px] mt-[18px] text-white">
        Desde 1963, Automotores y Anexos ha sido protagonista en la evolución de la movilidad en Ecuador, iniciando con la representación de Nissan y consolidando alianzas con marcas globales como Renault, Foton y BAIC. Con más de seis décadas de experiencia, seguimos innovando para ofrecer soluciones que respondan a las tendencias del mercado y a las necesidades de nuestros clientes. Hoy, damos un paso hacia el futuro con la incorporación de Omoda y Jaecoo, marcas del Grupo Chery que están diseñadas para la mejor experiencia automotriz con diseño vanguardista, tecnología inteligente y un firme compromiso con la movilidad sostenible. Nuestra historia es sinónimo de confianza, calidad y visión, y con estas nuevas marcas reafirmamos nuestro propósito: construir relaciones duraderas y liderar la transformación del sector automotor en el país.
        </div>
        <div class="flex justify-center items-center">
        <img src="/images/about/banner1bg_logo.webp" alt="Logo" class="w-[132px] sm:w-[250px] h-[50px] sm:h-[96px] mt-[24px]" />
        </div>
        `,
        h5ClassName: 'h5-brand-sub',
        className: "",
        imgClass: "!object-left lg:!object-top !object-cover lg:!object-fill",
        img: "about/banner1bg",
        fullArticleClass: 'enlarge',
        titleContentClass: '!justify-center  !pb-0 !pt-0 md:!pt-[0px]',
    })

    const banner2Content = ref({
        isTextWhite: true,
        subTitle: `
        <div class="px-0 max-w-[876px] lg:mx-[70px] font-interMedium text-[20px] sm:text-[36px]">LAS MARCAS QUE ESTÁN CONQUISTANDO EUROPA, AHORA EN ECUADOR</div>
        <br>
        <div class="px-0 max-w-[876px] lg:mx-[70px] font-interRegular text-[12px] sm:text-[16px]">
        Parte del grupo automotriz líder en exportaciones por más de 22 años. Fundada en 1997 Wuhu China, este Holding Group ha evolucionado de una empresa local a un referente global en la industria automotriz. Con más de 80 países en su red y 14.2 millones de usuarios en todo el mundo, el grupo lidera la exportación, calidad y seguridad en vehículos pasajeros chinos. Su compromiso con la innovación y la sostenibilidad se refleja en el desarrollo de tecnologías avanzadas para vehículos eléctricos, híbridos y conectividad inteligente, consolidando su posición como pionero en movilidad verde.  Con marcas como Omoda y Jaecoo hay una visión clara: ofrecer soluciones inteligentes, seguras y sostenibles que transformen la experiencia de conducción y marquen el futuro de la movilidad.
        </div>
        `,
        h5ClassName: 'mx-[20px] sm:mx-[50px] lg:mx-0',
        className: "",
        imgClass: "",
        img: "about/banner2bg",
        titleClassName: 'uppercase',
        fullArticleClass: 'enlarge',
        titleContentClass: '!justify-start !pb-0 !pt-[1.2rem]',
    })
    const banner3Content = ref({
        isTextWhite: true,
        subTitle: `
        <div class="px-0 max-w-[1028px] lg:mx-[70px] font-interMedium text-[20px] sm:text-[32px] text-white">OMODA</div>
        <br> 
        <div class="px-0 max-w-[1028px] lg:mx-[70px] font-interRegular text-[12px] sm:text-[16px] text-white">
        Omoda es la expresión de una nueva era en la industria automotriz, donde el diseño futurista se une con la tecnología inteligente para crear experiencias únicas. Omoda nace con una visión clara: ofrecer vehículos que no solo se adapten al presente, sino que anticipen el futuro de la movilidad. Cada modelo refleja innovación, conectividad y un compromiso con la sostenibilidad, pensado para quienes buscan estilo, seguridad y rendimiento sin compromisos. En Automotores y Anexos, llevamos esta propuesta al mercado ecuatoriano, respaldados por décadas de experiencia y la confianza que nos caracteriza.
        </div>
        `,
        h5ClassName: "brand-subtitle h5-brand-sub",
        className: "",
        imgClass: "max-h-[600px]",
        img: "about/banner3bg",
        titleClassName: "brand-title uppercase"
    })

    const banner4Content = ref({
        isTextWhite: true,
        subTitle: `
        <div class="px-0 max-w-[1028px] sm:mx-[70px] font-interMedium text-[20px] sm:text-[32px] text-white">JAECOO</div>
        <br> 
        <div class="px-0 max-w-[1028px] sm:mx-[70px] font-interRegular text-[12px] sm:text-[16px] text-white">
        Jaecoo representa la esencia del espíritu aventurero y la sofisticación urbana. Su propuesta se centra en vehículos con ADN todoterreno premium que combinan potencia, tecnología avanzada y diseño elegante, pensados para quienes buscan libertad sin renunciar al confort. Con Jaecoo, la experiencia de conducción trasciende los límites, ofreciendo seguridad, conectividad y rendimiento en cualquier terreno. En Automotores y Anexos, llevamos esta visión al Ecuador, respaldados por nuestra trayectoria y compromiso con la excelencia.
        </div>
        `,
        h5ClassName: 'brand-subtitle h5-brand-sub',
        className: "",
        imgClass: "max-h-[600px]",
        img: "about/banner4bg",
        titleClassName: "brand-title uppercase"
    })



    
</script>
