// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: [
    '~/assets/css/index.scss',
    '~/assets/css/font.css',
    '~/assets/css/animation.css',
    '~/assets/css/common.scss',
    'element-plus/dist/index.css',
    'animate.css/animate.min.css',
  ],
  runtimeConfig: {
    public: {
      staticURL: process.env.NUXT_STATIC_BASE_URL, // 暴露在前端
      apiURL: process.env.NUXT_API_URL, // 暴露在前端
      formURL: process.env.NUXT_FORM_URL,
      secKey: process.env.NUXT_SEC_KEY,
    },
  },
  app: {
    baseURL: process.env.NUXT_API_KEY,
    head: {
      title: "OMODA&JAECOO INTERNATIONAL WEB",
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
        {
          name: "keywords",
          content: `JAECOO,JAECOO 7,JAECOO 8,CHERY,Off-road,CARS,OMODA,J7,J8,C5,E5,OMODA,OMODA&JAECOO`,
        },
        {
          name: "description",
          content: `Welcome to OMODA&JAECOO official website. Here you can find out more about the OMODA&JAECOO brand concept, the latest models, exciting events and more.`,
        },
        { property: "og:site_name", content: `OMODA&JAECOO INTERNATIONAL WEB` },
        { property: "og:title", content: `OMODA&JAECOO INTERNATIONAL WEB` },
        {
          property: "og:image",
          content: `http://www.omodajaecoo.com/images/page1-championing.webp`,
        },
        {
          property: "og:description",
          content: `Welcome to OMODA&JAECOO official website. Here you can find out more about the OMODA&JAECOO brand concept, the latest models, exciting events and more.`,
        },
      ],
      script: [
        // 这是谷歌分析的监听代码 -是key
        // { src: "https://www.googletagmanager.com/gtag/js?id=G-652S58106P", async: true },
        // `window.dataLayer = window.dataLayer || [];
        //   function gtag() {
        //     dataLayer.push(arguments);

        //   }
        //   gtag("js", new Date());
        //   gtag("config", "G-652S58106P");
        // `,
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    "@nuxt/image",
    '@pinia/nuxt',
    'nuxt-swiper',
    '@element-plus/nuxt',
    'pinia-plugin-persistedstate/nuxt'
  ],
  piniaPluginPersistedstate: {
    storage: 'localStorage', // 默认存储方式
    cookieOptions: {
      maxAge: 2 * 365 * 24 * 60 * 60 * 1000, // Cookie 的过期时间，单位为毫秒
      sameSite: 'lax' // Cookie 的 SameSite 属性
    }
  },
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    config: {
      content: [
        './pages/**/*.vue',
        './assets/css/*.scss'
      ],
      theme: {
        extend: {
          // fontFamily: {
          //   MiSansLight: ['MiSansLight', 'sans-serif'],
          //   MiSansNormal: ['MiSansNormal', 'sans-serif'],
          //   MiSansRegular: ['MiSansRegular', 'sans-serif'],
          //   MiSansMedium: ['MiSansMedium', 'sans-serif'],
          // },
          colors: {
            primary: '#67B0C4'
          },
        }
      },
      plugins: []
    }
  },
  image: {
    inject: true,
    quality: 80,
    format: ['webp', 'png', 'jpg'],
    // domains: ['nuxtjs.org'] // 启用外部网站的图像优化
    providers: {
      customProvider: {
        name: 'customProvider',
        provider: '~/providers/customProvider',
        options: {
          baseURL: `${process.env.NUXT_STATIC_BASE_URL}/images`,
        }
      }
    }
  },
  pinia: {
    storesDirs: ['~/stores/**'],
  },
  nitro: {
    output: {
      publicDir: "./dist",
      dir: './dist'
    },
    devProxy: {
      "/jaecoo-omoda": {
        target: 'https://oj-uat.omodaglobal.com/jaecoo-omoda',
        prependPath: true,
        changeOrigin: true,
      },
      "/static-files": {
        target: "https://oj-uat.omodaglobal.com/static-files",
        prependPath: true,
        changeOrigin: true,
      },
      "/OMODAweb-360-new": {
        target: 'https://oj-uat.omodaglobal.com/OMODAweb-360-new',
        prependPath: true,
        changeOrigin: true,
      },
      "/e5360": {
        target: 'https://oj-uat.omodaglobal.com/e5360',
        prependPath: true,
        changeOrigin: true,
      }
    },
  },
  plugins: [
    '~/plugins/directives.ts'
  ],
  build: {
    transpile: ['vue3-count-to']
  },
  devServer:{
    host: '0.0.0.0'
  }
})
