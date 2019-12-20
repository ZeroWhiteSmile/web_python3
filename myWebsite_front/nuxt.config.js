module.exports = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    'view-design/dist/styles/iview.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/iview'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    publicPath: '/static/', // 配置打包的静态资源文件目录。可以是cdn地址。默认是_nuxt文件夹
  },
    /*
     ** 配置 Nuxt.js 应用生成静态站点的具体方式。
     */
  generate: {
    // dir: process.env.SITE_ENV === 'prod' ? 'dist/prod' : (process.env.SITE_ENV === 'qa' ? 'dist/qa' : 'dist/dev')
    dir: 'dist/'
  }
}
