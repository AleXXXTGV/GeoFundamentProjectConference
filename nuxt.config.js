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
          mainPage: {
            title: 'GREETINGS',
            info: `Dear colleagues, I am pleased to inform you that the Uzbek Geotechnical Society plans
            to hold the 5th Central Asian (CA) conference on mechanics soil and geotechnical engineering
            in October 2022. Last CA conference also took place in Samarkand in 2012. The conference
            was attended by representatives over 10 countries with over 150 participants.
            You know that our city of Samarkand plans to hold a grandiose summit of the Shanghai meeting
            with the participation of top officials of 10 states. For the last 3 years in Samarkand, in connection
            with the summit, grandiose work has been carried out in the field construction, architecture,
            landscaping, transport construction and restoration of architectural monuments. The founders
            of the conference are the host University of Samarkand SamSU and two main construction universities
            of the country: Samarkand and Tashkent State Institute of Architecture and Civil Engineering. Financing 
            and the organization of the conference are entrusted to Geofundamentproject LLC, Samarkand.`
          },
          aboutPage: {
            listOneTitle: 'The conference is planned to be held in the following areas:',
            listOneItemOne: 'Problems of geotechnical construction',
            listOneItemTwo: 'Problems of preservation of monuments of historical cities and related to them geotechnical issues',
            listOneItemThree: `Soil mechanics`,
            listOneItemFour: 'Contact problems of structural mechanics',
            listTwoTitle: 'Important dates:',
            listTwoItemOne: 'Acceptance of abstracts (abstracts) until August 25, 2022.',
            listTwoItemTwo: 'Submission of the article until September 15, 2022.',
            listTwoItemThree: 'Registration for the conference until September 25, 2022.',
            listTwoItemFour: 'Conference October 5-7, 2022',
            listThreeTitle: 'The cost of participation in the conference:',
            listThreeItemOne: 'Main participants: US$450',
            listThreeItemTwo: 'Accompanying persons: US$300',
            listThreeItemThree: 'Online articipants: US$200',
            listFourTitle: 'Information for stands in the exhibition area:',
            listFourItemOne: 'Stand price - 2m x 3m and height 2.5m - US$2500',
            listFourItemTwo: 'The price of the stand also includes a table, 3 chairs, lighting and a socket',
            listFourItemThree: `For further information please contact the conference email address: conference.uzgs2022@gmail.com and please also visit the official  conference website
            https://conference.geotechnics.uz`,
          },
          venuePage: {
            span1: 'Conference Coordinator: Yodgor Obidov',
            span2: 'Conference Secretary: Zohir Khasanov',
          },
          hotelsPage: {
            hotel1: 'Hotel Asia Samarkand',
          },
          galleryPage: {
            title: 'All photos well be uploaded after the Conference.',
            item1: 'Samarkand',
            item2: 'Bukhara',
            item3: 'Shaxrisabz',
            item4: 'Tashkent',
          },
          registerPage: {
            title: 'All the files you need to download will be here.',
            file1: 'How to get to Uzbekistan',
            file2: 'Registration Form',
            file3: 'Attachment to the invoice for payment',
            file4: 'Bulletin EN',
            file5: 'Bulletin RU',
          }
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
          mainPage: {
            title: 'ПРИВЕТСТВИЕ',
            info: `Уважаемые коллеги, я рад сообщить вам, что Узбекское геотехническое общество
            планирует провести 5-ю Центрально-Азиатскую (ЦА) конференцию по механике грунтов и
            геотехнической инженерии в октябре 2022 года. Последняя ЦА конференция также прошла в
            Самарканде в 2012 году. В конференции приняли участие представители более 30 стран с
            более чем 200 участниками.
            Вы знаете, что наш город Самарканд планирует в этом году провести грандиозный
            саммит Шанхайской встречи с участием первых лиц 10 государств. За последние 3 года в
            Самарканде, в связи с саммитом, проведена грандиозная работа в области строительства,
            архитектуры, благоустройства, транспортного строительства и реставрации памятников
            архитектуры. Учредителями конференции являются ведущий ВУЗ Самарканда СамГУ и два
            главных строительных вуза страны: Самаркандский и Ташкентский государственные
            архитектурно-строительные институты.`
          },
          aboutPage: {
            listOneTitle: 'Конференцию планируется  провести по следующим напрвлениям:',
            listOneItemOne: 'Проблемы геотехнического строительства',
            listOneItemTwo: 'Геотехнические проблемы связанные с сохранением памятников архитектуры',
            listOneItemThree: `Механика грунтов`,
            listOneItemFour: 'Контактные задачи строительной механики',
            listTwoTitle: 'Важные даты:',
            listTwoItemOne: 'Прием тезисов (абстрактов) до 25 августа 2022г.',
            listTwoItemTwo: 'Подача статьи до 15 сентября 2022г.',
            listTwoItemThree: 'Регистрация на конференцию до 20 сентября 2022г.',
            listTwoItemFour: 'Конференция 5-7 октября 2022г.',
            listThreeTitle: 'Стоимость участие на конференции',
            listThreeItemOne: 'Главные участники: US$450',
            listThreeItemTwo: 'Сопровождающие лица: US$300',
            listThreeItemThree: 'Онлайн участники: US$200',
            listFourTitle: 'Информация для стендов в выстовочной зоне',
            listFourItemOne: 'Цена стенда 2 м х 3 м и высота 2,5 м - US$2500',
            listFourItemTwo: 'Также в цену стенда входит стол 80 см х 80 см, 4 стула, освещение и розетка',
            listFourItemThree: `Более подробная информация по оформлению статей будет выслана по электронной почте`,
          },
          venuePage: {
            span1: 'Координатро конференции: Ёдгор Обидов',
            span2: 'Секретарь конференции: Зохир Хасанов',
          },
          hotelsPage: {
            hotel1: 'Гостиница Азия Самарканд  ',
          },
          galleryPage: {
            title: 'Все фотографии будут опубликованы после конференции',
            item1: 'г.Самарканд',
            item2: 'г.Бухара',
            item3: 'г.Шахрисабз',
            item4: 'г.Ташкент',
          },
          registerPage: {
            title: 'Тут будет все необходимые  файлы для скачивание',
            file1: 'Как добраться до Узбекистана',
            file2: 'Форма Регистрации',
            file3: 'Приложение к инвойсу для оплаты',
            file4: 'Бюллетень EN',
            file5: 'Бюллетень RU',
          }
        },
        uz: {
          headerLinks: {
            main: 'Bosh sahifa',
            about: 'Konferensiya haqida',
            venue: 'O’tqiziladigan joy',
            hotels: 'Mexmonxonalar',
            gallery: 'Rasmlar',
            month: 'Oktabr',
            register: 'Ro’yhatdan o’tish'
          },
          indexPage: {
            logo: 'CENTRAL ASIAN CONFERENCE ON SOIL MECHANICS AND GEOTECHNICAL ENGINEERING',
            city: 'Samarkand, Uzbekistan',
            importantDates: 'Muhim sanalar',
            importantDateOne: 'Tezislar (referatlar) 2022-yil 25-avgustgacha qabul qilinadi.',
            importantDateTwo: 'Maqolani 2022-yil 15-sentabrgacha yuborish kerak.',
            importantDateThree: 'Konferensiyaga roʻyxatdan oʻtish 2022-yil 25-sentabrgacha.',
          },
          mainPage: {
            title: 'Kirish so’zi',
            info: `Hurmatli hamkasblar, Oʻzbekiston geotexnika jamiyati 2022-yil oktabr oyida tuproq mexanikasi va geotexnika muhandisligi boʻyicha 5-Oʻrta Osiyo konferensiyasini oʻtkazishni rejalashtirayotganini mamnuniyat bilan maʼlum qilaman. Oʻzbekistonning soʻnggi konferensiyasi 2012-yilda Samarqandda boʻlib oʻtgan. Konferensiyada ishtirok etgan. 10 dan ortiq davlat vakillari, 150 dan ortiq ishtirokchilar. Xabaringiz bor, Samarqand shahrida 10 ta davlatning yuqori darajadagi rasmiylari ishtirokida Shanxay yig‘ilishining muhtasham sammiti o‘tkazilishi rejalashtirilgan. Samarqand shahrida so‘nggi 3 yil davomida sammit munosabati bilan dala qurilishi, arxitektura, obodonlashtirish, transport qurilishi, me’moriy yodgorliklarni ta’mirlash bo‘yicha ulkan ishlar amalga oshirildi. Konferensiya ta’sischilari mezbon Samarqand universiteti SamDU va mamlakatimizning ikkita asosiy qurilish oliy o‘quv yurtlari: Samarqand va Toshkent davlat arxitektura-qurilish institutlaridir. Konferensiyani moliyalashtirish va tashkil etish Samarqand shahri, “Geofundamentproject” MChJ zimmasiga yuklatildi`
          },
          aboutPage: {
            listOneTitle: 'Konferensiya quyidagi yo‘nalishlarda o‘tkazilishi rejalashtirilgan:',
            listOneItemOne: 'Geotexnik qurilish muammolari',
            listOneItemTwo: `Tarixiy shaharlar yodgorliklarini saqlash muammolari va ular bilan bog'liq geotexnik masalalar`,
            listOneItemThree: `Gruntlar mexanikasi`,
            listOneItemFour: 'Strukturaviy mexanikaning kontakt muammolari',
            listTwoTitle: 'Muhim sanalar:',
            listTwoItemOne: 'Tezislar (referatlar) 2022-yil 25-avgustgacha qabul qilinadi.',
            listTwoItemTwo: 'Maqolani 2022-yil 15-sentabrgacha yuborish kerak',
            listTwoItemThree: 'Konferensiyaga roʻyxatdan oʻtish 2022-yil 25-sentabrgacha.',
            listTwoItemFour: 'Konferentsiya, 2022 yil 5-7 oktyabr',
            listThreeTitle: 'Konferensiyada ishtirok etish narxi:',
            listThreeItemOne: 'Asosiy ishtirokchilar: US$450',
            listThreeItemTwo: 'Hamrohlik qiluvchi shaxslar: US$300',
            listThreeItemThree: 'Onlayn ishtirokchilar: US$200',
            listFourTitle: `Ko'rgazma maydonidagi stendlar uchun ma'lumotlar:`,
            listFourItemOne: 'Stend narxi - 2m x 3m va balandligi 2,5m - US$2500',
            listFourItemTwo: 'Stend narxiga stol, 3 ta stul, yoritgich va rozetka ham kiradi',
            listFourItemThree: `Qo'shimcha ma'lumot olish uchun konferentsiya elektron manzili: konferensiya.uzgs2022@gmail.com bilan bog'laning va konferentsiyaning rasmiy veb-saytiga tashrif buyuring: http://conference.geotechnics.uz`,
          },
          venuePage: {
            span1: 'Konfentsiya koordinatori: Yodgor Obidov ',
            span2: 'Konferentsiya kotibi: Zoxir Xasanov',
          },
          hotelsPage: {
            hotel1: 'Asia Samarkand Mexmonxonasi',
          },
          galleryPage: {
            title: 'Barcha rasmlar konferentsiya o’tkazilganidan keyin joylashtiliradi.',
            item1: 'Samarkand sh.',
            item2: 'Bukhara sh.',
            item3: 'Shaxrisabz sh.',
            item4: 'Tashkent sh.',
          },
          registerPage: {
            title: `Yuklab olishingiz kerak bo'lgan barcha fayllar shu yerda bo'ladi.`,
            file1: `O'zbekistonga qanday borish mumkin`,
            file2: 'Registratsiya formasi',
            file3: `To'lov uchun schyot-fakturaga ilova`,
            file4: 'Ingliz xabarnomasi',
            file5: 'Rus xabarnomasi',
          }
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
