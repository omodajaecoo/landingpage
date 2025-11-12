<template>
    <div class="overflow-hidden">
        <fullArticle class="bg-black" :content="content" v-animate="{
            effect: 'zoomInCenter',
            immediate: true
        }"></fullArticle>
    </div>
   <notFullScreen class="bg-black" :bannerContent="banner2Content"></notFullScreen>
   <fullArticle class="bg-black" :content="banner3Content"></fullArticle>
</template>
<script lang="ts" setup>
    import { ref } from 'vue'
    import fullArticle from '../../components/common/fullArticle.vue'
    import notFullScreen from '../../components/brand/notFullScreen.vue'

    const content = ref({
        isTextWhite: true,
  
        subTitle: `
        <div class="px-0 max-w-[876px] sm:px-[70px] font-interMedium text-[20px] sm:text-[36px]">ACERCA DE NOSOTROS </div>
        <br>
        <div class="px-0 max-w-[876px] sm:px-[70px] font-interRegular text-[12px] sm:text-[16px]">
        En el panorama en rápida evolución de hoy en día, la industria automotriz está experimentando un cambio transformador. La demografía de los consumidores es cada vez más joven, con demandas que se vuelven cada vez más personalizadas; los automóviles han trascendido hace mucho tiempo su función básica de transporte para convertirse en portadores vitales de estilo de vida y aspiraciones personales. <br />
        Es dentro de esta marea de cambio que han surgido las marcas OMODA y JAECCOO. No solo aprovechan tecnologías automotrices de vanguardia para construir dos matrices de productos principales —OMODA y JAECCOO— sino que también se integran profundamente en diversos círculos culturales y dominios personalizados a través de O-LAB y J-LAND, creando posibilidades ilimitadas para la futura movilidad de los usuarios.
        </div>
        `,
        h5ClassName: 'h5-brand-sub',
        className: "",
        imgClass: "",
        img: "brand/brand_banner1",
        titleClassName: 'uppercase',
    })
    const banner2Content = ref({
        isTextWhite: true,
        subTitle: `
        <div class="px-0 max-w-[876px] sm:px-[70px] font-interMedium text-[20px] sm:text-[36px] text-white">OMODA</div>
        <br> 
        <div class="px-0 max-w-[876px] sm:px-[70px] font-interRegular text-[12px] sm:text-[16px] text-white">
        Como marca global profesional de Crossovers, se centra en crear elegantes productos crossover para la nueva generación de entusiastas del estilo de vida. Basándose en su ADN central de 'Futuro, Moda, Tecnología y Verde', su objetivo es romper las limitaciones tradicionales y empoderar a los jóvenes para que sigan estilos de vida contemporáneos más personalizados a través de un diseño con visión de futuro y tecnología de vanguardia.
        </div>
        `,
        h5ClassName: "brand-subtitle h5-brand-sub",
        className: "",
        img: "brand/brand_banner2",
        titleClassName: "brand-title uppercase"
    })

    const banner3Content = ref({
        isTextWhite: true,
        subTitle: `
        <div class="px-0 max-w-[876px] sm:px-[70px] font-interMedium text-[20px] sm:text-[36px] text-white">OMODA</div>
        <br> 
        <div class="px-0 max-w-[876px] sm:px-[70px] font-interRegular text-[12px] sm:text-[16px] text-white">
        El líder global en conducción off-road refinada— crea la serie de vehículos de 'Aventura sin Miedo' (Fearless Adventure) específicamente para las élites emergentes. Adhiriéndose a la filosofía de 'Arraigado en Clásicos, Trascendiendo Clásicos', rompe con los estereotipos tradicionales 'robustos y monótonos' de los vehículos todoterreno, reconstruyendo la estética off-road con un refinamiento extraordinario y liderando nuevas tendencias todoterreno con un rendimiento excepcional, asegurando que cada viaje combine sofisticación con potencia.
        </div>
        `,
        h5ClassName: 'h5-brand-sub',
        className: "",
        imgClass: "",
        img: "brand/brand_banner3",
        fullArticleClass: 'enlarge',
    })
</script>
