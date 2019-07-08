importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.js",
    "revision": "8ccd02644c1be1cf27569a3d72bd6070"
  },
  {
    "url": "/_nuxt/commons.app.js",
    "revision": "cb369f05ebd7fc1dd5fa72a57af1aff6"
  },
  {
    "url": "/_nuxt/pages_blog__slug.js",
    "revision": "f84e879a7421f5ed8660bbf9003f6881"
  },
  {
    "url": "/_nuxt/pages_blog_index.js",
    "revision": "6a734ab07ad342aecbecf97677cc7c5d"
  },
  {
    "url": "/_nuxt/pages_index.js",
    "revision": "44e84282eb22d63acfe4f53eeec75acc"
  },
  {
    "url": "/_nuxt/pages_nosotros.js",
    "revision": "0fdb58a65f6c7b66aa4a09ec4bfea703"
  },
  {
    "url": "/_nuxt/runtime.js",
    "revision": "9a270d197d91f65439af4792685b3673"
  },
  {
    "url": "/_nuxt/vendors.app.js",
    "revision": "2f56cc4b73f427e0bdbe0cc1b2e7f1ca"
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
