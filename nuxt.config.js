export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',

  // Router setup
  router: {
    middleware: ['auth'],
  },

  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Collaboration platform',
    titleTemplate: '%s · Octape',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /*
   ** Global CSS
   */
  css: ['@/assets/scss/buefy-customize.scss'],

  /*
   ** Server settings
   */
  server: {
    port: 8080, // default: 3000
    host: '0.0.0.0', // default: localhost,
  },

  auth: {
    redirect: {
      login: '/auth/login',
      logout: '/auth/login',
      home: '/',
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: 'soter/auth/login', method: 'post' },
          logout: false,
          user: {
            url: 'soter/auth/whoami',
            method: 'get',
            propertyName: false,
          },
        },
        tokenType: 'bearer',
      },
    },
  },

  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/axios-accessor.ts'],

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // Doc: https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources',
    // Doc: https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal-nuxt#readme
    'cookie-universal-nuxt',
    // https://auth.nuxtjs.org
    '@nuxtjs/auth',
  ],

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#f1c40f' },

  /*
   ** Nuxt Style resources
   ** See https://www.npmjs.com/package/@nuxtjs/style-resources
   */
  styleResources: {
    scss: ['assets/scss/global.scss'],
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.API_URL || 'https://api.octape.io/',
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},

  transpileDependencies: ['vuex-module-decorators'],
}
