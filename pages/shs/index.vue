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
    <ShsMarathon :ispc="!isMobile" />
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
      imgUrl: "shs/bg_1.jpg",
      style: "p1",
      top: {
        title: "SUPER HYBRID SYSTEM",
        desc: "Based on the group's third-generation hybrid technology,<br />the SUPER HYBRID SYSTEM developed for the new urban elites",
        style: "p1",
      },
    },
    {
      imgUrl: "shs/bg_2.jpg",
      top: {
        title: "SUPER HEV+EV",
        desc: "J7 Super Hybrid: High-performance powertrain delivering electric-like driving precision.",
        style: "p2",
      },
      bottom: {
        list: [
          {
            title: "Super Strong Performance",
            desc: "Top speed 180km/h.",
          },
          {
            title: "Super Efficient Fuel Consumption",
            desc: "6.0L/100km, less than €0.1/km fuel cost.",
          },
          {
            title: "Super Long Combined Range",
            desc: "1200km Breakthrough: Spontaneous,<br />Effortless Cross-Country Trips.",
          },
          {
            title: "Super Long Electric Range",
            desc: "Over 90km of pure electric range!<br />One full charge, and a week's<br />commute.",
          },
        ],
      },
    },
    {
      imgUrl: "shs/bg_3.jpg",
      top: {
        title: "SUPER STRONG PERFORMANCE",
        desc: "Engine Power 105KW, Engine Torque 215N·M, Motor Power 150KW, Motor Torque 310N·M.",
      },
      bottom: {
        style: "p3",
        list: [
          {
            title: "0-50 km/h in 3.8s. Always one step ahead.",
          },
          {
            title:
              "Instant acceleration enables swift high-speed<br />overtaking, maintaining power even at 120 km/h.",
          },
          {
            title: "180 km/h top speed dominates highway<br />performance.",
          },
        ],
      },
    },
    {
      imgUrl: "shs/bg_4.jpg",
      top: {
        title: "SUPER EFFCIENT FUEL CONSUMPTION",
        desc: "Low fuel consumption without charging.",
      },
      bottom: {
        style: "p4",
        list: [
          {
            title: "6.0L/100KM",
            desc: "Charge Sustaining fuel consumption",
          },
        ],
      },
    },
    {
      imgUrl: "shs/bg_5.jpg",
      top: {
        title: "5th-Gen 1.5L TDGI Hybrid Engine",
        desc: "It achieves 44.5% thermal efficiency, industry-leading.",
      },
      horizontal: {
        leftTitle:
          "Six core technologies: high efficiency, strong power, low fuel consumption.",
        rightUrl: "/videos/shs/bg_5.mp4",
        style: "leftSmall top1432",
      },
    },
    {
      imgUrl: "shs/bg_6.jpg",
      top: {
        title: "SUPER LONG COMBINED RANGE",
        desc: "1,200+ km range (full charge and a full tank of fuel) spans<br />four European countries effortlessly.",
      },
    },
    {
      imgUrl: "shs/bg_7.jpg",
      leftBottom: {
        title: "Dedicated To Hybrid Vehicles<br />World-Class Top Technology",
      },
    },
    {
      imgUrl: "shs/bg_8.jpg",
      leftBottom: {
        title:
          "The motors are integrated in the<br />transmission with a dual-motor layout.",
      },
    },
    {
      imgUrl: "shs/bg_9.jpg",
      top: {
        title: "Intelligent Hybrid Power Management System",
        style: "p9",
      },
      horizontal: {
        leftTitle:
          "Intelligently decide the power output strategy according to different working conditions,making the power distribution more accurate and efficient and the cruising range longer.",
        rightUrl: "/videos/shs/bg_9.mp4",
        style: "leftSmall top8",
      },
    },
    {
      imgUrl: "shs/bg_10.jpg",
      top: {
        title: "SUPER LONG ELECTRIC RANGE",
        desc: "Commutes are super convenient with 90km of pure electric range.<br />One full charge, and a week's commute.",
      },
    },
    {
      imgUrl: "shs/bg_11.jpg",
      horizontal: {
        leftTitle:
          "Pure Electric Driving Is Efficient,Responsive And Quiet.",
        rightUrl: "/videos/shs/bg_11.mp4",
      },
    },
    {
      imgUrl: "shs/bg_12.jpg",
      leftBottom: {
        title:
          "The industry-leading CTP (Cell to Pack) technology can improve the<br />space utilization rate of battery packs and reduce their weight.",
      },
    },
    {
      imgUrl: "shs/bg_13.jpg",
      horizontal: {
        leftTitle:
          "<div><span>18.3</span> Kwh Super-large Hybrid-dedicated Battery Pack</div>",
        rightUrl: "/videos/shs/bg_13.mp4",
      },
    },
    {
      imgUrl: "shs/bg_14.jpg",
      top: {
        title: "3.3KW ULTRA-HIGH-POWER",
        desc: "Vehicle-to-Load (V2L) brings a brand-new outdoor lifestyle for the new elites.",
      },
      bottom: {
        style: "p14",
        list: [
          {
            title:
              'A cup of freshly brewed coffee, the J7 Super<br />Hybrid <span>outdoor café</span> is about to "open."',
          },
          {
            title:
              "A <span>camping barbecue</span>, the J7 Super<br />Hybrid luxury barbecue grill, endless fun.",
          },
        ],
      },
    },
    {
      imgUrl: "shs/bg_15.jpg",
      top: {
        title: "PRIVATE OUTDOOR CINEMA",
        desc: "Open the trunk to reveal the projection screen, unwind and enjoy the joy of watching movies anytime<br />and anywhere, surrounded by endless nature.",
      },
    },
  ],
  h5: [
    {
      imgUrl: "shs/bg_1_m.jpg",
      style: "h1",
      top: {
        title: "SUPER HYBRID<br />SYSTEM",
        desc: "Based on the group's third-generation hybrid<br />technology, the SUPER HYBRID SYSTEM developed<br />for the new urban elites",
        style: "titleLarge",
      },
    },
    {
      imgUrl: "shs/bg_2_m.jpg",
      top: {
        title: "SUPER HEV+EV",
        desc: "The J7 Super Hybrid is a super-performance<br />car that combines super power with a pure<br />electric-like driving experience.",
      },
      bottom: {
        style: "h2",
        list: [
          {
            title: "Super Strong<br />Performance",
            desc: "340 hp powerhouse, with a<br />top speed of 180 km/h.",
          },
          {
            title: "Super Efficient<br />Fuel Consumption",
            desc: "6.0L/100km, less than €0.1/km<br />fuel cost.",
          },
          {
            title: "Super Long<br />Combined Range",
            desc: "1200km Breakthrough: Spontaneous,<br />Effortless Cross-Country Trips.",
          },
          {
            title: "Super Long<br />Electric Range",
            desc: "Over 90km of pure electric range!<br />One full charge, and a week's<br />commute.",
          },
        ],
      },
    },
    {
      imgUrl: "shs/bg_3_m.jpg",
      top: {
        title: "SUPER STRONG<br />PERFORMANCE",
        desc: "525 N•M Torque And 340hp, Matching A 3.0t Engine.",
      },
      bottom: {
        style: "h3",
        list: [
          {
            title: "0-50 km/h in 3.8s. Always one step ahead.",
          },
          {
            title:
              "Instant Acceleration Enables Swift High-Speed Overtaking,<br />Maintaining Power Even At 120 Km/H.",
          },
          {
            title: "180 Km/H Top Speed Dominates Highway Performance.",
          },
        ],
      },
    },
    {
      imgUrl: "shs/bg_4_m.jpg",
      top: {
        title: "SUPER EFFCIENT<br />FUEL CONSUMPTION",
        desc: "Low fuel consumption without charging.",
      },
      bottom: {
        style: "h4",
        list: [
          {
            title: "6.0L/100KM",
            desc: "Charge Sustaining fuel consumption",
          },
        ],
      },
    },
    {
      imgUrl: "shs/bg_5_m.jpg",
      style: "h5",
      top: {
        title: "5th-Gen 1.5L TDGI<br />Hybrid Engine",
        desc: "It achieves 44.5% thermal efficiency,<br />industry-leading.",
      },
      horizontal: {
        leftTitle:
          "Six core technologies: high efficiency, strong<br />power, low fuel consumption.",
        rightUrl: "/videos/shs/bg_5.mp4",
        rightPoster: "/videos/shs/bg_5_mp.jpg",
      },
    },
    {
      imgUrl: "shs/bg_6_m.jpg",
      top: {
        title: "SUPER LONG<br />COMBINED RANGE",
        desc: "1,200+ Km Range (Full Charge And A Full Tank Of Fuel)<br />Spans Four European Countries Effortlessly.",
      },
    },
    {
      imgUrl: "shs/bg_7_m.jpg",
      leftBottom: {
        title:
          "Dedicated To Hybrid<br />Vehicles World-Class Top<br />Technology",
      },
    },
    {
      imgUrl: "shs/bg_8_m.jpg",
      leftBottom: {
        title:
          "The motors are integrated in the<br />transmission with a dual-motor<br />layout.",
      },
    },
    {
      imgUrl: "shs/bg_9_m.jpg",
      style: "h9",
      top: {
        title: "Intelligent Hybrid Power<br />Management System",
      },
      horizontal: {
        leftTitle:
          "Intelligently Decide The Power Output Strategy<br />According To Different Working Conditions, Making The<br />Power Distribution More Accurate And Efficient And<br />The Cruising Range Longer.",
        rightUrl: "/videos/shs/bg_9.mp4",
        rightPoster: "/videos/shs/bg_9_mp.jpg",
      },
    },
    {
      imgUrl: "shs/bg_10_m.jpg",
      top: {
        title: "SUPER LONG<br />ELECTRIC RANGE",
        desc: "Commutes Are Super Convenient With 90km Of Pure<br />Electric Range. One Full Charge, And A Week'S<br />Commute.",
      },
    },
    {
      imgUrl: "shs/bg_11_m.jpg",
      style: "h11",
      horizontal: {
        leftTitle:
          "Pure electric driving is efficient,<br />responsive and quiet.",
        rightUrl: "/videos/shs/bg_11.mp4",
        rightPoster: "/videos/shs/bg_11_mp.jpg",
      },
    },
    {
      imgUrl: "shs/bg_12_m.jpg",
      leftBottom: {
        title:
          "The industry-leading CTP (Cell to Pack)<br />technology can improve the space<br />utilization rate of battery packs and<br />reduce their weight.",
      },
    },
    {
      imgUrl: "shs/bg_13_m.jpg",
      style: "h13",
      horizontal: {
        leftTitle:
          "<span>18.3</span> Kwh Super-large Hybrid-dedicated<br />Battery Pack",
        rightUrl: "/videos/shs/bg_13.mp4",
        rightPoster: "/videos/shs/bg_13_mp.jpg",
      },
    },
    {
      imgUrl: "shs/bg_14_m.jpg",
      top: {
        title: "3.3KW<br />ULTRA-HIGH-POWER",
        desc: "Vehicle-to-Load (V2L) brings a brand-new outdoor<br />lifestyle for the new elites.",
      },
      bottom: {
        style: "h14",
        list: [
          {
            title:
              'A cup of freshly brewed coffee, the J7 Super Hybrid<br /><span>outdoor café</span> is about to "open."',
          },
          {
            title:
              "A <span>camping barbecue</span>, the J7 Super Hybrid luxury<br />barbecue grill, endless fun.",
          },
        ],
      },
    },
    {
      imgUrl: "shs/bg_15_m.jpg",
      top: {
        title: "PRIVATE OUTDOOR<br />CINEMA",
        desc: "Open The Trunk To Reveal The Projection Screen,<br />Unwind And Enjoy The Joy Of Watching Movies Anytime<br />And Anywhere, Surrounded By Endless Nature.",
      },
    },
  ],
};

// onMounted(async () => {
//   await nextTick();
//   handleAnimation();
// });

// const handleAnimation = () => {
//   const modules = document.querySelectorAll(".shs-box");
//   const io = new IntersectionObserver(callback, {
//     threshold: 0.3,
//   });
//   modules.forEach((el) => {
//     io.observe(el);
//   });

//   function callback(entities) {
//     const { isIntersecting, target } = entities[0];
//     if (isIntersecting) {
//       const animEls = target.querySelectorAll(".animation");
//       console.log("animation emit");
//       if (animEls.length === 0) return;
//       animEls.forEach((animEl, idx) => {
//         const animationName = animEl.getAttribute("anim-name") || "";
//         setTimeout(() => {
//           animEl.classList.add(animationName);
//         }, idx * 300 + 200);
//       });
//     }
//   }
// };

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
