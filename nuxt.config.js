export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'JomTolong.my - Platform bantuan komuniti dan NGO',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Anda memerlukan bantuan ? Mari komuniti terdekat atau jauh membantu anda. Tidak perlu malu, nama sebenar anda dirahsiakan.  '
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { 
    color: '#09ebb8',
		background: 'white',
		height: '30px'
   },
  /*
   ** Global CSS
   */
  css: ['~/css/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/axios'},
    { src: '~plugins/vue-modal', ssr: false },
    { src: '~plugins/sweetalert2', ssr: false },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'http://jomtolong-backend.test/api/v1'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
