export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'V CACSMGE',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/i18n',
    
  ],
  i18n: {
    /* module options */
    locales: [
    {
      code: 'en',
      name: 'EN'
    },
    {
      code: 'ru',
      name: 'RU'
    },
    {
      code: 'uz',
      name: 'UZ'
    }
  ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          headerLinks: {
            main: 'Main',
            about: 'About the Conference',
            venue: 'Venue',
            hotels: 'Hotels',
            gallery: 'Photo gallery',
            month: 'October',
            register: 'Register'
          },
          indexPage: {
            logo: 'CENTRAL ASIAN CONFERENCE ON SOIL MECHANICS AND GEOTECHNICAL ENGINEERING',
            city: 'Samarkand, Uzbekistan',
            importantDates: 'Important dates',
            importantDateOne: 'Acceptance of abstracts (abstracts) until August 25, 2022.',
            importantDateTwo: 'Submission of the article until September 15, 2022.',
            importantDateThree: 'Registration for the conference until September 25, 2022.',
          },
        },
        ru: {
          headerLinks: {
            main: 'Главная',
            about: 'О конференции',
            venue: 'Место проведение',
            hotels: 'Гостиницы',
            gallery: 'Фотогалерея',
            month: 'Октября',
            register: 'Зарегистрироваться'
          },
          indexPage: {
            logo: 'ЦЕНТРАЛЬНО-АЗИАТСКАЯ КОНФЕРЕНЦИЯ ПО МЕХАНИКЕ ГРУНТОВ И ГЕОТОЕХНИКЕ',
            city: 'Самарканд, Узбекистан',
            importantDates: 'Основные даты',
            importantDateOne: '25 авгута - окончание приема тезисов (абстрактов).',
            importantDateTwo: '15 сентября  - окончание приема статей.',
            importantDateThree: '20 сентября  - окончание регистрации на конференцию .',
          },
        },
        uz: {
          headerLinks: {
            main: 'Uy',
            about: 'Biz haqimizda',
            venue: 'Konferensiya',
            hotels: 'Hotels',
            gallery: 'Photo gallery',
            month: 'October',
            register: 'Register'
          },
          indexPage: {
            logo: 'CENTRAL ASIAN CONFERENCE ON SOIL MECHANICS AND GEOTECHNICAL ENGINEERING',
            city: 'Samarkand, Uzbekistan',
            importantDates: 'Important dates',
            importantDateOne: 'Acceptance of abstracts (abstracts) until August 25, 2022.',
            importantDateTwo: 'Submission of the article until September 15, 2022.',
            importantDateThree: 'Registration for the conference until September 25, 2022.',
          },
        }
      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
