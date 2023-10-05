import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      charset: 'utf-8',
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'apple-mobile-web-app-title', content: 'Delivo' },
        { name: 'application-name', content: 'Delivo' },
        { name: 'msapplication-TileColor', content: '#00aba9' },
        { name: 'theme-color', content: '#fbfefd' },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        { rel: 'mask-icon', color: '#558676', href: '/safari-pinned-tab.svg' },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com/' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700;6..12,900&display=swap',
        },
      ],
    },
  },
  css: ['@/assets/styles/_colors.scss', '@/assets/styles/_variables.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/styles/functions/_color-opacity.scss";
            @import "@/assets/styles/mixins/_dynamic-sizes.scss";
            @import "@/assets/styles/mixins/_screens.scss";
            @import "@/assets/styles/mixins/_widths.scss";
            `,
        },
      },
    },
    plugins: [
      svgLoader({
        svgo: false,
      }),
    ],
  },
  modules: [
    [
      '@nuxtjs/i18n',
      {
        skipSettingLocaleOnNavigate: true,
        strategy: 'no_prefix',
        locales: [
          {
            code: 'en-GB',
            file: 'en-GB.json',
            iso: 'en-GB',
            name: 'English, UK',
          },
          {
            code: 'ru-RU',
            file: 'ru-RU.json',
            iso: 'ru-RU',
            name: 'Русский',
          },
        ],
        langDir: 'assets/locales',
        defaultLocale: 'en-GB',
        detectBrowserLanguage: {
          useCookie: false,
        },
      },
    ],
    [
      '@pinia/nuxt',
      {
        autoImports: [['defineStore', 'definePiniaStore']],
      },
    ],
  ],
  imports: {
    dirs: ['./models', './stores', './types'],
  },
  devtools: { enabled: false },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  telemetry: {
    enabled: false,
  },
})
