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
      {
        name: "yandex-verification",
        content: "04957623fc915d74"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
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
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: 'https://www.mindgrowth.cl',
    //generate: true,
    exclude: [
      '/admin/**'
    ],
    routes: [
      '/',
      '/nosotros'
    ]
  },

  markdownit: {
    injected: true,
    preset: "default",
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
