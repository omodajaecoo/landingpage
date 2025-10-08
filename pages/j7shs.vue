<template>
  <div class="shs-wrap" @click.once="handleVideo">
    <NuxtLayout name="header" />
    <Backtop />
    <template
      v-for="(page, index) in allPageData[isMobile ? 'h5' : 'pc']"
      :key="(isMobile ? 'h5' : 'pc') + index"
    >
      <FullBox
        v-if="page.code === 'box'"
        :ispc="!isMobile"
        :imgUrl="page.imgUrl"
        :style="page.style"
        :text="page.text"
        :count-list="page.countList"
      />
      <FullText
        v-if="page.code === 'text'"
        :ispc="!isMobile"
        :imgUrl="page.imgUrl"
        :style="page.style"
        :text="page.text"
        :bottom-list="page.bottomList"
      />
      <FullHorizontal
        v-if="page.code === 'horizontal'"
        :ispc="!isMobile"
        :imgUrl="page.imgUrl"
        :style="page.style"
        :horizontal="page.horizontal"
      />
      <FullVertical
        v-if="page.code === 'vertical'"
        :ispc="!isMobile"
        :imgUrl="page.imgUrl"
        :style="page.style"
        :vertical="page.vertical"
      />
      <SwiperHorizontalBox
        v-if="page.code === 'swiper'"
        :ispc="!isMobile"
        :imgUrl="page.imgUrl"
        :style="page.style"
        :text="page.text"
        :slide="page.slide"
      />
      <SwiperFullBox
        v-if="page.code === 'swiperJ5'"
        :ispc="!isMobile"
        :imgUrl="page.imgUrl"
        :style="page.style"
        :text="page.text"
        :slide="page.slide"
      />
      <ShsGallery
        v-if="page.code === 'gallery'"
        :ispc="!isMobile"
        :galleryList="page.galleryList"
      />
      <SwiperFadeJ7Box
        v-if="page.code === 'fade'"
        :ispc="!isMobile"
        :fade="page.fade"
      />
    </template>
    <NuxtLayout name="footer" />
  </div>
</template>

<script lang="ts" setup>
interface BoxItemData {
  title?: string;
  desc?: string;
  style?: string;
  icon?: string;
  countList?: string[][];
}
interface TextItemData {
  top?: BoxItemData;
  bottom?: BoxItemData;
  leftTop?: BoxItemData;
  rightTop?: BoxItemData;
  leftBottom?: BoxItemData;
  rightBottom?: BoxItemData;
}
interface BoxData {
  imgUrl?: string;
  videoUrl?: string;
  style?: string;
  text?: TextItemData;
  bottomList?: string[][];
  countList?: string[][];
  horizontal?: BoxItemData[][];
  galleryList?: string[];
  vertical?: {
    text?: TextItemData;
    countList?: string[][];
  }[];
}
interface FadeData {
  title: string;
  desc?: string;
  bg?: string;
  car?: string;
  dot?: string;
  name?: string;
  style?: string;
  white?: boolean;
}
interface PageData extends BoxData {
  code?: string;
  slide?: BoxData[];
  fade?: FadeData[];
}
interface AllPageData {
  pc: PageData[];
  h5: PageData[];
}
const { isMobile } = useDeviceType();

const allPageData: AllPageData = {
  pc: [
    {
      code: "box",
      imgUrl: "j7shs/bg_1.webp",
      style: "p1",
      text: {
        top: {
          icon: "j7shs/bg_1_1.webp",
          style: "j7p1",
        },
      },
      countList: [
        ["Charge sustaining fuel consumption/100km", "6", "L"],
        ["Combined range", "1200", "km"],
        ["Pure electric range", "90", "km"],
      ],
    },
    {
      code: "vertical",
      imgUrl: "j7shs/bg_2.webp",
      style: "p2",
      vertical: [
        {
          text: {
            top: {
              title: "SUPER HEV+EV",
              desc: `High-performance, fuel-efficient J7 SHS balances eco-friendliness and cost for great driving. Its long combined/electric range meets efficiency needs—daily or long trips.`,
            },
          },
        },
        {
          text: {
            top: {
              title: "BEST NEV SOLUTION",
              desc: `The J7 SHS offers top efficiency, performance, and an eco-friendly, cost-effective drive. Its strong combined/electric range meets all travel needs—city or long trips.`,
            },
          },
          countList: [
            ["No.1", "Super high", "Performance"],
            ["No.1", "Super low", "Energy consumption"],
            ["No.1", "Super long", "Combined range"],
            ["No.1", "Super long", "Electric range"],
          ],
        },
      ],
    },
    {
      code: "horizontal",
      horizontal: [
        [
          {
            icon: "j7shs/bg_4_1.webp",
          },
          {
            title:
              "<span style='color: #67B0C4;'>SUPER HIGH</span><br />PERFORMANCE",
            desc: `The cut-off date for the measured data is July 15, 2025`,
            countList: [
              ["150", "kW", "Motor power"],
              ["105", "kW", "Engine power"],
            ],
          },
        ],
        [
          {
            title:
              "<span style='color: #67B0C4;'>SUPER LOW</span><br />ENERGY CONSUMPTION",
            desc: `The cut-off date for the measured data is July 15, 2025`,
            countList: [
              [
                "6",
                "L/100km",
                "The official fuel consumption<br />of the power supply",
              ],
              [
                "3.3",
                "L/100km",
                "The measured fuel consumption<br />of the power supply",
              ],
            ],
          },
          {
            icon: "j7shs/bg_4_2.webp",
          },
        ],
        [
          {
            icon: "j7shs/bg_4_3.webp",
          },
          {
            title:
              "<span style='color: #67B0C4;'>SUPER LONG</span><br />COMBINED RANGE",
            desc: `The cut-off date for the measured data is July 15, 2025`,
            countList: [
              ["1200", "km", "WLTP comprehensive range"],
              ["1613.1", "km", "Tested comprehensive range"],
            ],
          },
        ],
        [
          {
            title:
              "<span style='color: #67B0C4;'>SUPER LONG</span><br />ELECTRIC RANGE",
            desc: `The cut-off date for the measured data is July 15, 2025`,
            countList: [
              ["90", "km", "WLTP pure electric range"],
              ["151.6", "km", "Tested pure electric range"],
            ],
          },
          {
            icon: "j7shs/bg_4_4.webp",
          },
        ],
      ],
    },
    {
      code: "fade",
      fade: [
        {
          title: "NEW KHAKI WHITE",
          desc: "LIKE THE SANDY STONES GENTLY BRUSHED BY TIME, THEY FORM A CONTINUOUS, SERENE AND POETIC PICTURE ALONG THE WAY.",
          car: "j7shs/5/c_1.webp",
          dot: "j7shs/5/d_1.webp",
          name: "New khaki white",
        },
        {
          title: "MOONLIGHT SILVER",
          desc: "IT IS LIKE THE GENTLE LIGHT POURING DOWN ON THE SERENE LAKE, CREATING A CONTINUOUS SCENE OF TENDER AND ROMANTIC BEAUTY.",
          car: "j7shs/5/c_2.webp",
          dot: "j7shs/5/d_2.webp",
          name: "Moonlight Silver",
        },
        {
          title: "OLIVE GREY",
          desc: "LIKE FROST-BRANCH AND ROCK IN AUTUMN WOODS, STRETCHING A VIGOROUS, WARM SCROLL.",
          car: "j7shs/5/c_3.webp",
          dot: "j7shs/5/d_3.webp",
          name: "Olive grey",
        },
        {
          title: "CARBON CRYSTAL BLACK",
          desc: "LIKE STAR SHADOWS FROZEN IN POST-RAIN NIGHT, BLENDING INTO A MYSTERIOUS, POWERFUL PAINTING.",
          car: "j7shs/5/c_4.webp",
          dot: "j7shs/5/d_4.webp",
          name: "Carbon crystal black",
        },
        {
          title: "BLACK+MOONLIGHT SILVER",
          desc: "THE DEEP POOL REFLECTS THE SCATTERED MOONLIGHT, FORMING A CONTINUOUS LONG SCROLL THAT IS BOTH FIRM AND FLEXIBLE.",
          car: "j7shs/5/c_5.webp",
          dot: "j7shs/5/d_5.webp",
          name: "Black+Moonlight Silver",
        },
        {
          title: "BLACK+OLIVE GREY",
          desc: "THE OLD VINES ENTWINE AROUND THE ROCKS IN THE SECLUDED STREAM, FORMING A LONG, DEEP AND VIGOROUS SCROLL.",
          car: "j7shs/5/c_6.webp",
          dot: "j7shs/5/d_6.webp",
          name: "Black+Olive Grey",
        },
      ],
    },
    {
      code: "swiper",
      style: "p7",
      text: {
        top: {
          title: "ELEGANT <span style='color: #67B0C4;'>AESTHETICS</span>",
          desc: "Inspired by the essence of the nature,indulge in the outdoors and enjoy new elegant off-road life.",
        },
      },
      slide: [
        {
          imgUrl: "j7shs/bg_7_1.webp",
          text: {
            bottom: {
              title: "HEXAGONAL WATERFALL GRILLE",
              desc: "Inspired expression from natural waterfalls,the hexagonal waterfall grille,combined with the oversized JAECOO emblem,not only highlights the brand's confidence but also adds a unique sense of off-road power.",
            },
          },
        },
        {
          imgUrl: "j7shs/bg_7_2.webp",
          text: {
            bottom: {
              title: "CRYSTAL DAYTIME RUNNING LIGHTS",
              desc: "Inspired by natural minerals such as crystals and diamonds,each one shines briliantly and is composed of 106 light beads arranged in an array,with excellent light perception,giving your wilderness a sense of elegant ceremony.",
            },
          },
        },
        {
          imgUrl: "j7shs/bg_7_3.webp",
          text: {
            bottom: {
              title: "MOUNTAIN PEAK HEADLIGHTS",
              desc: "Inspired by the continuous and sharp mountain peaks,the car travels through darkness under the powerful and leading dot matrix split LED light source.The high and low beam split lenses and flowing welcome effect instantly open a door for crossing the summit and driving off-road journeys when starting the car.",
            },
          },
        },
        {
          imgUrl: "j7shs/bg_7_4.webp",
          text: {
            bottom: {
              title: "WIND FLOW BODY LINES",
              desc: 'Derived from the natural meaning of "strong wind passing through",the flying waistline of the car body and the sloping roofline are sharp and crisp,running through the carline like riding the wind,outlining a powerful off-road dynamic that erupts instantly.',
            },
          },
        },
        {
          imgUrl: "j7shs/bg_7_5.webp",
          text: {
            bottom: {
              title: "FULL-WIDTH CRYSTAL TAIL<br />LIGHT BAR",
              desc: "The through type digital taillights are composed of 74 LED beads, which are in line with the aesthetic interpretation of the headlights. The matrix style fine crossing light lines are like jumping wildfires on the road, guiding the direction of off-road travel.",
            },
          },
        },
      ],
    },
    {
      code: "swiper",
      text: {
        top: {
          title: "PREMIUM <span style='color: #67B0C4;'>INTERIOR</span>",
          desc: "The modern interior design seamlessly integrates smart technology with luxury and comfort, offering an unparalleled experience for both the driver and passengers.",
        },
      },
      slide: [
        {
          imgUrl: "j7shs/bg_8_1.webp",
          text: {
            bottom: {
              title: "ULTRA-HIGH-DEFINITION SMART SCREEN",
              desc: "Equipped with a 14.8-inch 2.4K advanced smart central control system, it offers real-time access to various driving and entertainment functions, with easy operation and a smooth touch experience.",
            },
          },
        },
        {
          imgUrl: "j7shs/bg_8_2.webp",
          text: {
            bottom: {
              title: "COLUMN SHIFT DESIGN",
              desc: "Effortless control with a sleek, space-saving column shifter for a seamless driving experience.",
            },
          },
        },
        {
          imgUrl: "j7shs/bg_8_3.webp",
          text: {
            bottom: {
              title: "HEAD-UP DISPLAY(HUD)",
              desc: "HUD projects speed and navigation info upfront—keep eyes on the road, every shift syncs perfectly with the way ahead.",
            },
          },
        },
        {
          imgUrl: "j7shs/bg_8_4.webp",
          text: {
            bottom: {
              title: "SONY SOUND",
              desc: "Sony audio makes every note feel live—bass thrums the road, treble cuts through wind.",
            },
          },
        },
      ],
    },
    {
      code: "swiper",
      text: {
        top: {
          title: "PURE WILDERNESS <span style='color: #67B0C4;'>CABIN</span>",
          desc: "Pursue the Origin of Wilderness in Minimalist Design.",
        },
      },
      slide: [
        {
          imgUrl: "j7shs/bg_11_1.webp",
          text: {
            bottom: {
              title: "PURE WILDERNESS CABIN",
              desc: "The minimalist design with straight and smooth overall lines pursues the origin of the wilderness, which is a dual image of nature and off-road, creating a sense of open space and bringing exclusive enjoyment of outdoor elegant off-road.",
            },
          },
        },
        {
          imgUrl: "j7shs/bg_11_2.webp",
          text: {
            bottom: {
              title: "PASSENGER-SIDE PERSPECTIVE",
              desc: 'Front seats are carved like obsidian, stitching hides star trails; the central screen is a "mobile frame" in the cabin, with touchable delicacy.',
            },
          },
        },
        {
          imgUrl: "j7shs/bg_11_3.webp",
          text: {
            bottom: {
              title: "BACK ROW PERSPECTIVE",
              desc: 'Rear leather seats unfold a "second living room"; light from the panoramic sunroof spills over headrests, keeping relaxation even for three passengers.',
            },
          },
        },
      ],
    },
    {
      code: "swiper",
      style: "h9",
      text: {
        top: {
          title: "POWER AND <span style='color: #67B0C4;'>SAFETY</span>",
          desc: "Combining the SHS super hybrid system, dedicated engine, and high-performance battery technology, it provides<br />exceptional power support and enhanced safety, ensuring every journey is more stable and reliable.",
        },
      },
      slide: [
        {
          imgUrl: "j7shs/bg_9_1.webp",
          videoUrl: "j7shs/bg_9_1.mp4",
          text: {
            bottom: {
              title: "HYBRID SPECIFIC HIGH<br />PERFORMANCE BATTERY PACK",
              desc: "High Energy Density, High Safety Protection.",
            },
          },
        },
        {
          imgUrl: "j7shs/bg_9_2.webp",
          text: {
            bottom: {
              title: "HYBRID SPECIFIC SUPER ELECTRIC<br />HYBRID DHT",
              desc: "Efficient Output, Energy-saving and Fuel-efficient, Smooth and Comfortable.",
            },
          },
        },
        {
          imgUrl: "j7shs/bg_9_3.webp",
          text: {
            bottom: {
              title: "CHASSIS TECHNOLOGY",
              desc: "With top-tier chassis design, it enhances the vehicle's handling and stability, ensuring safe driving even under harsh road conditions.",
            },
          },
        },
        {
          imgUrl: "j7shs/bg_9_4.webp",
          text: {
            bottom: {
              title: "ACHIEVES 5-STAR SAFETY<br />RATING",
              desc: "J7 SHS Achieves 5-Star Safety Rating in 2025 Euro NCAP Safety Tests.",
            },
          },
        },
      ],
    },
    {
      code: "swiper",
      text: {
        top: {
          title:
            "ELEGANT OUTDOOR <span style='color: #67B0C4;'>COMPANION</span>",
          desc: "With features like smart power output, trunk projection, and drone assistance, your outdoor adventures become<br />more intelligent, allowing you to enjoy every moment with freedom and convenience.",
        },
      },
      slide: [
        {
          imgUrl: "j7shs/bg_6_1.webp",
          text: {
            bottom: {
              title: "TRUNK PROJECTION SYSTEM",
              desc: "Easily transform the trunk into a convenient projection screen, offering an immersive outdoor audio-visual entertainment experience.",
            },
          },
        },
        {
          imgUrl: "j7shs/bg_6_2.webp",
          text: {
            bottom: {
              title: "POWER OUTPUT FUNCTION",
              desc: "With 3.3Kw power support, easily run outdoor stoves, camping lights, portable fridges, and device chargers for a worry-free adventure.",
            },
          },
        },
      ],
    },
    {
      code: "gallery",
      galleryList: [
        "j7shs/bg_10_1.webp",
        "j7shs/bg_10_2.webp",
        "j7shs/bg_10_3.webp",
        "j7shs/bg_10_4.webp",
      ],
    },
  ],
  h5: [
    {
      code: "box",
      imgUrl: "j7shs/m_bg_1.webp",
      style: "h1",
      text: {
        top: {
          icon: "j7shs/m_bg_1_1.webp",
          style: "j7h1",
        },
      },
      countList: [
        ["Charge sustaining fuel<br />consumption/100km", "6", "L"],
        ["Combined range", "1200", "km"],
        ["Pure electric range", "90", "km"],
      ],
    },
    {
      code: "vertical",
      imgUrl: "j7shs/m_bg_2.webp",
      style: "h2",
      vertical: [
        {
          text: {
            top: {
              title: "SUPER HEV+EV",
              desc: `High-performance, fuel-efficient J7 SHS balances eco-friendliness and cost for great driving. Its long combined/electric range meets efficiency needs—daily or long trips.`,
            },
          },
        },
        {
          text: {
            top: {
              title: "BEST NEV SOLUTION",
              desc: `The J7 SHS offers top efficiency, performance, and an eco-friendly, cost-effective drive. Its strong combined/electric range meets all travel needs—city or long trips.`,
            },
          },
          countList: [
            ["No.1", "Super high", "Performance"],
            ["No.1", "Super low", "Energy consumption"],
            ["No.1", "Super long", "Combined range"],
            ["No.1", "Super long", "Electric range"],
          ],
        },
      ],
    },
    {
      code: "horizontal",
      horizontal: [
        [
          {
            icon: "j7shs/m_bg_4_1.webp",
          },
          {
            title:
              "<span style='color: #67B0C4;'>SUPER HIGH</span><br />PERFORMANCE",
            desc: `The cut-off date for the measured data is July 15, 2025`,
            countList: [
              ["150", "kW", "Motor power"],
              ["105", "kW", "Engine power"],
            ],
          },
        ],
        [
          {
            icon: "j7shs/m_bg_4_2.webp",
          },
          {
            title:
              "<span style='color: #67B0C4;'>SUPER LOW</span><br />ENERGY CONSUMPTION",
            desc: `The cut-off date for the measured data is July 15, 2025`,
            countList: [
              [
                "6",
                "L/100km",
                "The official fuel consumption<br />of the power supply",
              ],
              [
                "3.3",
                "L/100km",
                "The measured fuel consumption<br />of the power supply",
              ],
            ],
          },
        ],
        [
          {
            icon: "j7shs/m_bg_4_3.webp",
          },
          {
            title:
              "<span style='color: #67B0C4;'>SUPER LONG</span><br />COMBINED RANGE",
            desc: `The cut-off date for the measured data is July 15, 2025`,
            countList: [
              ["1200", "km", "WLTP comprehensive range"],
              ["1613.1", "km", "Tested comprehensive range"],
            ],
          },
        ],
        [
          {
            icon: "j7shs/m_bg_4_4.webp",
          },
          {
            title:
              "<span style='color: #67B0C4;'>SUPER LONG</span><br />ELECTRIC RANGE",
            desc: `The cut-off date for the measured data is July 15, 2025`,
            countList: [
              ["90", "km", "WLTP pure electric range"],
              ["151.6", "km", "Tested pure electric range"],
            ],
          },
        ],
      ],
    },
    {
      code: "fade",
      fade: [
        {
          title: "NEW KHAKI WHITE",
          desc: "LIKE THE SANDY STONES GENTLY BRUSHED BY TIME, THEY FORM A CONTINUOUS, SERENE AND POETIC PICTURE ALONG THE WAY.",
          car: "j7shs/5/m_c_1.webp",
          dot: "j7shs/5/d_1.webp",
          name: "New khaki white",
        },
        {
          title: "MOONLIGHT SILVER",
          desc: "IT IS LIKE THE GENTLE LIGHT POURING DOWN ON THE SERENE LAKE, CREATING A CONTINUOUS SCENE OF TENDER AND ROMANTIC BEAUTY.",
          car: "j7shs/5/m_c_2.webp",
          dot: "j7shs/5/d_2.webp",
          name: "Moonlight Silver",
        },
        {
          title: "OLIVE GREY",
          desc: "LIKE FROST-BRANCH AND ROCK IN AUTUMN WOODS, STRETCHING A VIGOROUS, WARM SCROLL.",
          car: "j7shs/5/m_c_3.webp",
          dot: "j7shs/5/d_3.webp",
          name: "Olive grey",
        },
        {
          title: "CARBON CRYSTAL BLACK",
          desc: "LIKE STAR SHADOWS FROZEN IN POST-RAIN NIGHT, BLENDING INTO A MYSTERIOUS, POWERFUL PAINTING.",
          car: "j7shs/5/m_c_4.webp",
          dot: "j7shs/5/d_4.webp",
          name: "Carbon crystal black",
        },
        {
          title: "BLACK+MOONLIGHT SILVER",
          desc: "THE DEEP POOL REFLECTS THE SCATTERED MOONLIGHT, FORMING A CONTINUOUS LONG SCROLL THAT IS BOTH FIRM AND FLEXIBLE.",
          car: "j7shs/5/m_c_5.webp",
          dot: "j7shs/5/d_5.webp",
          name: "Black+Moonlight Silver",
        },
        {
          title: "BLACK+OLIVE GREY",
          desc: "THE OLD VINES ENTWINE AROUND THE ROCKS IN THE SECLUDED STREAM, FORMING A LONG, DEEP AND VIGOROUS SCROLL.",
          car: "j7shs/5/m_c_6.webp",
          dot: "j7shs/5/d_6.webp",
          name: "Black+Olive Grey",
        },
      ],
    },
    {
      code: "swiper",
      style: "h7",
      text: {
        top: {
          title: "ELEGANT <span style='color: #67B0C4;'>AESTHETICS</span>",
          desc: "Inspired by the essence of the nature,indulge in the outdoors and enjoy new elegant off-road life.",
        },
      },
      slide: [
        {
          imgUrl: "j7shs/m_bg_7_1.webp",
          text: {
            bottom: {
              title: "HEXAGONAL WATERFALL GRILLE",
              desc: "Inspired expression from natural waterfalls,the hexagonal waterfall grille,combined with the oversized JAECOO emblem,not only highlights the brand's confidence but also adds a unique sense of off-road power.",
            },
          },
        },
        {
          imgUrl: "j7shs/m_bg_7_2.webp",
          text: {
            bottom: {
              title: "CRYSTAL DAYTIME RUNNING LIGHTS",
              desc: "Inspired by natural minerals such as crystals and diamonds,each one shines briliantly and is composed of 106 light beads arranged in an array,with excellent light perception,giving your wilderness a sense of elegant ceremony.",
            },
          },
        },
        {
          imgUrl: "j7shs/m_bg_7_3.webp",
          text: {
            bottom: {
              title: "MOUNTAIN PEAK HEADLIGHTS",
              desc: "Inspired by the continuous and sharp mountain peaks,the car travels through darkness under the powerful and leading dot matrix split LED light source.The high and low beam split lenses and flowing welcome effect instantly open a door for crossing the summit and driving off-road journeys when starting the car.",
            },
          },
        },
        {
          imgUrl: "j7shs/m_bg_7_4.webp",
          text: {
            bottom: {
              title: "WIND FLOW BODY LINES",
              desc: 'Derived from the natural meaning of "strong wind passing through",the flying waistline of the car body and the sloping roofline are sharp and crisp,running through the carline like riding the wind,outlining a powerful off-road dynamic that erupts instantly.',
            },
          },
        },
        {
          imgUrl: "j7shs/m_bg_7_5.webp",
          text: {
            bottom: {
              title: "FULL-WIDTH CRYSTAL TAIL<br />LIGHT BAR",
              desc: "The through type digital taillights are composed of 74 LED beads, which are in line with the aesthetic interpretation of the headlights. The matrix style fine crossing light lines are like jumping wildfires on the road, guiding the direction of off-road travel.",
            },
          },
        },
      ],
    },
    {
      code: "swiper",
      text: {
        top: {
          title: "PREMIUM <span style='color: #67B0C4;'>INTERIOR</span>",
          desc: "The modern interior design seamlessly integrates smart technology with luxury and comfort, offering an unparalleled experience for both the driver and passengers.",
        },
      },
      slide: [
        {
          imgUrl: "j7shs/m_bg_8_1.webp",
          text: {
            bottom: {
              title: "ULTRA-HIGH-DEFINITION SMART SCREEN",
              desc: "Equipped with a 14.8-inch 2.4K advanced smart central control system, it offers real-time access to various driving and entertainment functions, with easy operation and a smooth touch experience.",
            },
          },
        },
        {
          imgUrl: "j7shs/m_bg_8_2.webp",
          text: {
            bottom: {
              title: "COLUMN SHIFT DESIGN",
              desc: "Effortless control with a sleek, space-saving column shifter for a seamless driving experience.",
            },
          },
        },
        {
          imgUrl: "j7shs/m_bg_8_3.webp",
          text: {
            bottom: {
              title: "HEAD-UP DISPLAY(HUD)",
              desc: "HUD projects speed and navigation info upfront—keep eyes on the road, every shift syncs perfectly with the way ahead.",
            },
          },
        },
        {
          imgUrl: "j7shs/m_bg_8_4.webp",
          text: {
            bottom: {
              title: "SONY SOUND",
              desc: "Sony audio makes every note feel live—bass thrums the road, treble cuts through wind.",
            },
          },
        },
      ],
    },
    {
      code: "swiper",
      text: {
        top: {
          title: "PURE WILDERNESS <span style='color: #67B0C4;'>CABIN</span>",
          desc: "Pursue the Origin of Wilderness in Minimalist Design.",
        },
      },
      slide: [
        {
          imgUrl: "j7shs/m_bg_11_1.webp",
          text: {
            bottom: {
              title: "PURE WILDERNESS CABIN",
              desc: "The minimalist design with straight and smooth overall lines pursues the origin of the wilderness, which is a dual image of nature and off-road, creating a sense of open space and bringing exclusive enjoyment of outdoor elegant off-road.",
            },
          },
        },
        {
          imgUrl: "j7shs/m_bg_11_2.webp",
          text: {
            bottom: {
              title: "PASSENGER-SIDE PERSPECTIVE",
              desc: 'Front seats are carved like obsidian, stitching hides star trails; the central screen is a "mobile frame" in the cabin, with touchable delicacy.',
            },
          },
        },
        {
          imgUrl: "j7shs/m_bg_11_3.webp",
          text: {
            bottom: {
              title: "BACK ROW PERSPECTIVE",
              desc: 'Rear leather seats unfold a "second living room"; light from the panoramic sunroof spills over headrests, keeping relaxation even for three passengers.',
            },
          },
        },
      ],
    },
    {
      code: "swiper",
      style: "h9",
      text: {
        top: {
          title: "POWER AND <span style='color: #67B0C4;'>SAFETY</span>",
          desc: "Combining the SHS super hybrid system, dedicated engine, and high-performance battery technology, it provides exceptional power support and enhanced safety, ensuring every journey is more stable and reliable.",
        },
      },
      slide: [
        {
          imgUrl: "j7shs/bg_9_1.webp",
          videoUrl: "j7shs/bg_9_1.mp4",
          style: "h9",
          text: {
            bottom: {
              title: "HYBRID SPECIFIC HIGH PERFORMANCE BATTERY PACK",
              desc: "High Energy Density, High Safety Protection.",
            },
          },
        },
        {
          imgUrl: "j7shs/m_bg_9_2.webp",
          text: {
            bottom: {
              title: "HYBRID SPECIFIC SUPER ELECTRIC HYBRID DHT",
              desc: "Efficient Output, Energy-saving and Fuel-efficient, Smooth and Comfortable.",
            },
          },
        },
        {
          imgUrl: "j7shs/m_bg_9_3.webp",
          text: {
            bottom: {
              title: "CHASSIS TECHNOLOGY",
              desc: "With top-tier chassis design, it enhances the vehicle's handling and stability, ensuring safe driving even under harsh road conditions.",
            },
          },
        },
        {
          imgUrl: "j7shs/m_bg_9_4.webp",
          text: {
            bottom: {
              title: "ACHIEVES 5-STAR SAFETY RATING",
              desc: "J7 SHS Achieves 5-Star Safety Rating in 2025 Euro NCAP Safety Tests.",
            },
          },
        },
      ],
    },
    {
      code: "swiperJ5",
      text: {
        top: {
          title:
            "ELEGANT OUTDOOR<br /><span style='color: #67B0C4;'>COMPANION</span>",
          desc: "With features like smart power output, trunk projection, and drone assistance, your outdoor adventures become more intelligent, allowing you to enjoy every moment with freedom and convenience.",
        },
      },
      slide: [
        {
          imgUrl: "j7shs/m_bg_6_1.webp",
          text: {
            bottom: {
              title: "TRUNK PROJECTION SYSTEM",
              desc: "Easily transform the trunk into a convenient projection screen, offering an immersive outdoor audio-visual entertainment experience.",
            },
          },
        },
        {
          imgUrl: "j7shs/m_bg_6_2.webp",
          text: {
            bottom: {
              title: "POWER OUTPUT FUNCTION",
              desc: "With 3.3Kw power support, easily run outdoor stoves, camping lights, portable fridges, and device chargers for a worry-free adventure.",
            },
          },
        },
      ],
    },
    {
      code: "gallery",
      galleryList: [
        "j7shs/m_bg_10_1.webp",
        "j7shs/m_bg_10_2.webp",
        "j7shs/m_bg_10_3.webp",
        "j7shs/m_bg_10_4.webp",
      ],
    },
  ],
};

onMounted(async () => {
  await nextTick();
  handleAnimation();
});

const handleAnimation = () => {
  const modules = document.querySelectorAll(".shs-box");
  const io = new IntersectionObserver(callback, {
    threshold: 0.3,
  });
  modules.forEach((el) => {
    io.observe(el);
  });

  function callback(entities) {
    const { isIntersecting, target } = entities[0];
    if (isIntersecting) {
      const animEls = target.querySelectorAll(".animation");
      console.log("animation emit");
      if (animEls.length === 0) return;
      animEls.forEach((animEl, idx) => {
        const animationName = animEl.getAttribute("anim-name") || "";
        setTimeout(() => {
          animEl.classList.add(animationName);
        }, idx * 300 + 200);
      });
    }
  }
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
