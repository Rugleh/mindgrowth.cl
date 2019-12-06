import pkg from "./package";
import info from "./content/setup/info";
import path from "path";
import glob from "glob";

var dynamicRoutes = getDynamicPaths({
  "/blog": "blog/*.json",
  "/page": "page/*.json"
});

console.log(dynamicRoutes);
const webpack = require("webpack");

export default {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: info.sitename,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "google-site-verification",
        content: "UIhTxrHKG6Y8NctXXlACvtYtmtskgjUyqGG7q85ewIw"
      },
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/favicon512.png" },
     // { rel: "manifest", href:"/manifest.json"},
      { rel: "apple-touch-icon", href:"/favicon192.png"},
  
  ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#4859A8" },

  /*
   ** Global CSS
   */
  css: [
    { src: "~/node_modules/bootstrap/dist/css/bootstrap.css" },
    { src: '~/assets/main.css'},
  ],


  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/bootstrap"],

  /*
   ** Nuxt.js modules
   */
  modules: [
    
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-137846449-2"
      }
    ],
    "@nuxtjs/markdownit",
    "@nuxtjs/axios", // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/pwa",
    '@nuxtjs/sitemap',
    ['nuxt-lazy-load', {
      // These are the default values
      images: true,
      videos: true,
      audios: true,
      iframes: true,
      directiveOnly: false,
   
      // To remove class set value to false
      loadedClass: 'isLoaded',
      appendClass: 'lazyLoad',
      
      observerConfig: {
        rootMargin: '50px 0px 50px 0px',
        threshold: 0
        // See IntersectionObserver documentation
      }
    }]
  ],

  sitemap: {
    hostname: 'https://www.mindgrowth.cl',
    //generate: true,
    exclude: [
      '/admin/**'
    ],
    routes: [
      '/',
      '/nosotros',
      '/diagnostico'
    ]
  },

  markdownit: {
    injected: true,
    preset: "default",
    breaks: true,
    html: true
  },

  pwa: {
    manifest: {
      name: 'MindGrowth PWA',
      short_name: 'MindGrowth',
      lang: 'es',
      display: 'standalone',
      start_url: "/",
      icons: [
        {
          src: "favicon192.png",
          type: "image/png",
          sizes: "192x192"
        },
        {
          src: "favicon512.png",
          type: "image/png",
          sizes: "512x512"
        }
      ],
    },
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
    // analyze: true,
    collapseBooleanAttributes: true,
    decodeEntities: true,
    minifyCSS: true,
    minifyJS: true,
    processConditionalComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    trimCustomFragments: true,
    useShortDoctype: true,
    minimize: true,
    splitChunks: {
      chunks: "all",
      automaticNameDelimiter: ".",
      name: undefined,
      cacheGroups: {}
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ]
  },
  generate: {
    routes: dynamicRoutes
  }
};

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: "content" })
        .map(filepath => `${url}/${path.basename(filepath, ".json")}`);
    })
  );
}
