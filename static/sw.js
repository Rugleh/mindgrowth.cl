importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/088fbf3cd85e06bd6171.js",
    "revision": "abd958b1c121f84d7190219517cb511d"
  },
  {
    "url": "/_nuxt/12246042b5bd08cda065.js",
    "revision": "6686b1ec6e9224b08deecfa5300d25ca"
  },
  {
    "url": "/_nuxt/206d460835c946c5c1bc.js",
    "revision": "6021b26f02e5a26d03a8fe734bdbc895"
  },
  {
    "url": "/_nuxt/3fc68019a0bd52ec3143.js",
    "revision": "20a929ae136cba375c21370f3dbdb506"
  },
  {
    "url": "/_nuxt/4e5c494de1cfefd88d12.js",
    "revision": "de427cdfa806a4d0bf57fde9d0e61eec"
  },
  {
    "url": "/_nuxt/5853a9dc36511a2ef4ad.js",
    "revision": "865f8f483730ab80aa8e11c48b94ffa0"
  },
  {
    "url": "/_nuxt/c7be706d9ee954866bd8.js",
    "revision": "73dd178d998ac73b5e7bdbe08a12ff49"
  },
  {
    "url": "/_nuxt/d0c13a05b282c51ee702.js",
    "revision": "2e182bb4a663de947886f91e7138b6de"
  }
], {
  "cacheId": "mindgrowth.cl",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
