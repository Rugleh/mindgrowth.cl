import pkg from './package'
import info from './content/setup/info'
import path from 'path'
import glob from 'glob'

var dynamicRoutes = getDynamicPaths({
  '/blog': 'blog/*.json',
  '/page': 'page/*.json',
});

console.log(dynamicRoutes);
const webpack = require("webpack");

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: info.sitename,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: "google-site-verification", content: "UIhTxrHKG6Y8NctXXlACvtYtmtskgjUyqGG7q85ewIw"},
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#F3782C' },

  /*
  ** Global CSS
  */
  css: [
    { src: "~/node_modules/bootstrap/dist/css/bootstrap.css" }
  ],

  /*
  ** Plugins to load before mounting the App
  */
 plugins: [
  '~/plugins/vue-lazysizes.client.js',
  "@/plugins/bootstrap",
],


  /*
  ** Nuxt.js modules
  */
  modules: [
    
      [
      'nuxt-fontawesome', {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
    ],
    ['@nuxtjs/google-analytics', {
      id: 'UA-137846449-2'
    }],
    'nuxt-material-design-icons',
    '@nuxtjs/markdownit',
    '@nuxtjs/axios', // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
    '@bazzite/nuxt-optimized-images',
  ],
  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 85
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {
      quality: 85
    },
    svgo: {
      quality: 70
    }
  },
  markdownit: {
    injected: true,
    preset: 'default',
    breaks: true,
    html: true


  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
 build: {
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  extend (config, { isDev, isClient, loaders: { vue } }) {
    if (isClient) {
      vue.transformAssetUrls.img = ['data-src', 'src']
      vue.transformAssetUrls.source = ['data-srcset', 'srcset']
    }
  }
},
  generate: {
    routes: dynamicRoutes
  }
}

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
    })
  );
}
