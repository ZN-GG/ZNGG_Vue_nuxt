export default {
  server: {
    host: '0.0.0.0' // default: localhost
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ZNGG_Vue_Nuxt',
    htmlAttrs: {
      lang: 'zh-CN'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/fonts/iconfont.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~/plugins/login',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // loading: '~/components/Loading.vue',

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'nuxt-vuex-localstorage',
    "vue-toastification/nuxt",
    'cookie-universal-nuxt',
  ],
  axios: {
    proxy: true
  },
  toast: {
    draggable: false,
    timeout: 2000
  },
  // vue: {
  //   config: {
  //     performance: false,
  //   }
  // },
  // content: {
  //   markdown: {
  //     prism: {
  //       theme: 'prism-themes/themes/prism-material-oceanic.css'
  //     }
  //   }
  // },
  // router: {
  //   scrollBehavior (to, from, savedPosition) {
  //     return { x: 0, y: 0 }
  //   }
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: { allChunks: true },
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-url': false,
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    },
    extend(config, { isDev, isClient }) {
      // ..
      config.module.rules.push({
        include: /node_modules/,
        test: /\.mjs$/,
        type: 'javascript/auto',
      })
      // Sets webpack's mode to development if `isDev` is true.
      if (isDev) {
        //config.mode = 'development'
      }
    }
    
  }
}
