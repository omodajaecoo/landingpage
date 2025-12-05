<template>
  <div class="shs-wrap" @click.once="handleVideo">
    <template
      v-for="(page, index) in allPageData[isMobile ? 'h5' : 'pc']"
      :key="(isMobile ? 'h5' : 'pc')+index"
    >
      <ShsBox
        :ispc="!isMobile"
        :imgUrl="page.imgUrl"
        :style="page.style"
        :top="page.top"
        :leftBottom="page.leftBottom"
        :horizontal="page.horizontal"
        :bottom="page.bottom"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
interface PageData {
  imgUrl: string;
  style?: string;
  top?: {
    title?: string;
    desc?: string;
    style?: string;
  };
  leftBottom?: {
    title?: string;
    style?: string;
  };
  horizontal?: {
    leftTitle?: string;
    rightUrl?: string;
    rightPoster?: string;
    style?: string;
  };
  bottom?: {
    list?: {
      title?: string;
      desc?: string;
      style?: string;
    }[];
    style?: string;
  };
}
interface AllPageData {
  pc: PageData[];
  h5: PageData[];
}
const { isMobile } = useDeviceType();

const allPageData: AllPageData = {
  pc: [
    {
      imgUrl: "shs/bg_1.webp",
      style: "p1",
      top: {
        title: "SISTEMA SÚPER HÍBRIDO",
        desc: "Basado en la tercera generación de tecnología híbrida de Chery Holding Group, el Súper Sistema Híbrido ha sido desarrollado para satisfacer a los consumidores más exigentes en su búsqueda por eficiencia, innovación y un estilo de vida sostenible.",
        style: "p1",
      },
    },
    {
      imgUrl: "shs/bg_2.webp",
      top: {
        title: "SUPER HYBRID SYSTEM - SUVS FULL HYBRID AND PLUG IN HYBRID",
        desc: "Tecnología y tren motriz de alto rendimiento que brinda una precisión de conducción similar a la de un vehículo 100% eléctrico, combinando potencia, eficiencia y tecnología avanzada.",
        style: "p2",
      },
      bottom: {
        list: [
          {
            title: "Ahorro sobresaliente",
            desc: "Rendimiento superior a los 65 km/gal.",
              },
              {
            title: "Eficiencia superior",
            desc: "Consumo hasta un 75% menor vs vehículo tradicional**.",
              },
              {
            title: "Autonomía extendida",
            desc: "Hasta 1,200 km de recorrido combinado, sin limitantes de autonomía.",
              },
              {
            title: "Amplia autonomía eléctrica",
            desc: "¡Una sola carga alcanza para toda una semana en la ciudad!",
          },
        ],
      },
    },
    {
      imgUrl: "shs/bg_3.webp",
      top: {
        title: "REDISEÑANDO EL RENDIMIENTO",
        desc: "Potencia del motor: 105 kW, Torque del motor: 215 N·m, Potencia del motor eléctrico: 150 kW, Torque del motor eléctrico: 310 N·m.",
      },
      bottom: {
        style: "p3",
        list: [
          {
            desc: "De 0 a 10 km/h en solo 8.2 segundos. Reacción inmediata.",
          },
          {
            desc: "Aceleración instantánea que brinda mayor agilidad y mantiene la potencia incluso a 120 km/h.",
          },
          {
            desc: "Velocidad máxima de 180 km/h que domina el rendimiento en carretera.",
          },
        ],
      },
    },
    {
      imgUrl: "shs/bg_4.webp",
      top: {
        title: "MOVILIDAD PENSADA EN TI",
        desc: "La integración ideal entre un SUV eléctrico e híbrido, otorgando la solución en movilidad pensada en nuestra realidad.",
      },
      bottom: {
        style: "p4",
        list: [
          {
            desc: "Bajo consumo de combustible, sin necesidad de recarga y autonomías extendidas.",
          },
        ],
      },
    },
    {
      imgUrl: "shs/bg_5.webp",
      top: {
        title: "Motor híbrido 1.5L TDGI de quinta generación",
        desc: "Con una eficiencia térmica del 44.5%, es la líder en la industria.",
      },
      horizontal: {
        leftTitle:
          "Seis tecnologías clave: alta eficiencia, gran potencia y bajo consumo de combustible.",
        rightUrl: "/videos/shs/bg_5.webm",
        style: "top1432",
      },
    },
    {
      imgUrl: "shs/bg_6.webp",
      top: {
        title: "AUTONOMÍA COMBINADA EXTENDIDA",
        desc: "Más de 1,200 km* con una sola carga y un tanque lleno, capaz de desde la sierra hasta la costa sin esfuerzo.",
      },
    },
    {
      imgUrl: "shs/bg_7.webp",
      leftBottom: {
        title: "Plataformas dedicadas a los vehículos híbridos, con tecnología de clase mundial.",
      },
    },
    {
      imgUrl: "shs/bg_8.webp",
      leftBottom: {
        title:
          "Los motores están integrados en la transmisión DHT con un diseño de doble motor.",
      },
    },
    {
      imgUrl: "shs/bg_9.webp",
      top: {
        title: "Sistema Inteligente de Potencia Híbrida",
        style: "p9",
      },
      horizontal: {
        leftTitle:
          "Decide de forma automática el uso de la de potencia según las condiciones de manejo, logrando una experiencia de manejo más precisa, eficiente y con una mayor autonomía.",
        rightUrl: "/videos/shs/bg_9.webm",
        style: "top8",
      },
    },
    {
      imgUrl: "shs/bg_10.webp",
      top: {
        title: "AUTONOMÍA ELÉCTRICA EXTENDIDA",
        desc: "En el uso diario cuentas con 90 km de conducción totalmente eléctrica.<br/> ¡Con una sola carga alcanza para toda una semana!",
      },
    },
    {
      imgUrl: "shs/bg_11.webp",
      horizontal: {
        leftTitle:
          "La conducción en modo 100% EV otorga una experiencia silenciosa y cómoda dentro de la ciudad.",
        rightUrl: "/videos/shs/bg_11.webm",
      },
    },
    {
      imgUrl: "shs/bg_12.webp",
      leftBottom: {
        title:
          "La tecnología líder CTP (Cell to Pack) mejora la utilización del espacio en los paquetes de baterías y reduce su peso.",
      },
    },
    {
      imgUrl: "shs/bg_13.webp",
      horizontal: {
        leftTitle:
          "Baterías híbridas de gran capacidad de hasta 18.3 kWh (en nuestros SHS Plug In Hybrid), diseñadas especialmente para máximo rendimiento combinado.",
        rightUrl: "/videos/shs/bg_13.webm",
      },
    }
  ],
  h5: [
    {
      imgUrl: "shs/bg_1_m.webp",
      style: "h1",
      top: {
        title: "SISTEMA SÚPER HÍBRIDO",
        desc: "Basado en la tercera generación de tecnología híbrida de Chery Holding Group, el Súper Sistema Híbrido ha sido desarrollado para satisfacer a los consumidores más exigentes en su búsqueda por eficiencia, innovación y un estilo de vida sostenible.",
        style: "titleLarge",
      },
    },
    {
      imgUrl: "shs/bg_2_m.webp",
      top: {
        title: "SUPER HYBRID SYSTEM - SUVS FULL HYBRID AND PLUG IN HYBRID",
        desc: "Tecnología y tren motriz de alto rendimiento que brinda una precisión de conducción similar a la de un vehículo 100% eléctrico, combinando potencia, eficiencia y tecnología avanzada.",
      },
      bottom: {
        style: "h2",
        list: [
          {
            title: "Ahorro sobresaliente",
            desc: "Rendimiento superior a los 65 km/gal.",
          },
          {
            title: "Eficiencia superior",
            desc: "Consumo hasta un 75% menor vs vehículo tradicional**.",
          },
          {
            title: "Autonomía extendida",
            desc: "Hasta 1,200 km de recorrido combinado, sin limitantes de autonomía.",
          },
          {
            title: "Amplia autonomía eléctrica",
            desc: "Más de 90 km de conducción 100% eléctrica. ¡Una sola carga alcanza para toda una semana en la ciudad!",
          },
        ],
      },
    },
    {
      imgUrl: "shs/bg_3_m.webp",
      top: {
        title: "REDISEÑANDO EL RENDIMIENTO",
        desc: "Potencia del motor: 105 kW, Torque del motor: 215 N·m, Potencia del motor eléctrico: 150 kW, Torque del motor eléctrico: 310 N·m.",
      },
      bottom: {
        style: "h3",
        list: [
          {
            desc: "De 0 a 10 km/h en solo 8.2 segundos. Reacción inmediata.",
          },
          {
            desc:
              "Aceleración instantánea que brinda mayor agilidad y mantiene la potencia incluso a 120 km/h.",
          },
          {
            desc: "Velocidad máxima de 180 km/h que domina el rendimiento en carretera.",
          },
        ],
      },
    },
    {
      imgUrl: "shs/bg_4_m.webp",
      top: {
        title: "MOVILIDAD PENSADA EN TI",
        desc: "La integración ideal entre un SUV eléctrico e híbrido, otorgando la solución en movilidad pensada en nuestra realidad.",
      },
      bottom: {
        style: "h4",
        list: [
          {
            desc: "Bajo consumo de combustible, sin necesidad de recarga y autonomías extendidas.",
          },
        ],
      },
    },
    {
      imgUrl: "shs/bg_5_m.webp",
      style: "h5",
      top: {
        title: "Motor híbrido 1.5L TDGI de quinta generación",
        desc: "Con una eficiencia térmica del 44.5%, es la líder en la industria.",
      },
      horizontal: {
        leftTitle:
          "Seis tecnologías clave: alta eficiencia, gran potencia y bajo consumo de combustible.",
        rightUrl: "/videos/shs/bg_5.webm",
        rightPoster: "/videos/shs/bg_5_mp.webp",
      },
    },
    {
      imgUrl: "shs/bg_6_m.webp",
      top: {
        title: "AUTONOMÍA COMBINADA EXTENDIDA",
        desc: "Más de 1,200 km* con una sola carga y un tanque lleno, capaz de desde la sierra hasta la costa sin esfuerzo.",
      },
    },
    {
      imgUrl: "shs/bg_7_m.webp",
      leftBottom: {
        title:
          "Plataformas dedicadas a los vehículos híbridos, con tecnología de clase mundial.",
      },
    },
    {
      imgUrl: "shs/bg_8_m.webp",
      leftBottom: {
        title:
          "Los motores están integrados en la transmisión DHT con un diseño de doble motor.",
      },
    },
    {
      imgUrl: "shs/bg_9_m.webp",
      style: "h9",
      top: {
        title: "Sistema Inteligente de Potencia Híbrida",
      },
      horizontal: {
        leftTitle:
          "Decide de forma automática el uso de la de potencia según las condiciones de manejo, logrando una experiencia de manejo más precisa, eficiente y con una mayor autonomía.",
        rightUrl: "/videos/shs/bg_9.webm",
        rightPoster: "/videos/shs/bg_9_mp.webp",
      },
    },
    {
      imgUrl: "shs/bg_10_m.webp",
      top: {
        title: "AUTONOMÍA ELÉCTRICA EXTENDIDA",
        desc: "En el uso diario cuentas con 90 km de conducción totalmente eléctrica. ¡Con una sola carga alcanza para toda una semana!",
      },
    },
    {
      imgUrl: "shs/bg_11_m.webp",
      style: "h11",
      horizontal: {
        leftTitle:
          "La conducción en modo 100% EV otorga una experiencia silenciosa y cómoda dentro de la ciudad.",
        rightUrl: "/videos/shs/bg_11.webm",
        rightPoster: "/videos/shs/bg_11_mp.webp",
      },
    },
    {
      imgUrl: "shs/bg_12_m.webp",
      leftBottom: {
        title:
          "La tecnología líder CTP (Cell to Pack) mejora la utilización del espacio en los paquetes de baterías y reduce su peso.",
      },
    },
    {
      imgUrl: "shs/bg_13_m.webp",
      style: "h13",
      horizontal: {
        leftTitle:
          "Baterías híbridas de gran capacidad de hasta 18.3 kWh (en nuestros SHS Plug In Hybrid), diseñadas especialmente para máximo rendimiento combinado.",
        rightUrl: "/videos/shs/bg_13.webm",
        rightPoster: "/videos/shs/bg_13_mp.webp",
      },
    }
  ],
};


const handleVideo = () => {
  const videos = document.querySelectorAll<HTMLVideoElement>(".shs-box video");
  videos.forEach((video) => {
    video.play();
  });
};
</script>

<style lang="scss" scoped>
.shs-wrap {
  background-color: #000;
  color: #fff;
}
</style>
