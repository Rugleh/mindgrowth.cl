importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/4aff4aaa6a2aa631bad8.js",
    "revision": "9ca7011feaa8cbc4689f263cffe077ae"
  },
  {
    "url": "/_nuxt/50542e649979c06875fd.js",
    "revision": "96d2e17ea15a797d5e519640367d7e39"
  },
  {
    "url": "/_nuxt/827619dbc52eb698a8af.js",
    "revision": "871f65c3f985900af82a98f1d2f3a89f"
  },
  {
    "url": "/_nuxt/8bbc88a5a8818307767b.js",
    "revision": "8db97e21499e78f1a85b26832509bf3a"
  },
  {
    "url": "/_nuxt/9c0da14335fc316f176f.js",
    "revision": "099cf51da9d5567d6e28b2f9a4138590"
  },
  {
    "url": "/_nuxt/b6aa4e056f3041584902.js",
    "revision": "6a942a2e70b63eebaf6f39739a58ddb5"
  },
  {
    "url": "/_nuxt/d7dc384e1c6f792c8bea.js",
    "revision": "74d636b01c985694fa7247e0aabbfae5"
  }
], {
  "cacheId": "nuxt-netlifycms-boilerplate",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
