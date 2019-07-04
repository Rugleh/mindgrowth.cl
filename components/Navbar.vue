<template>
   <nav class="site-header sticky-top py-1">
  <div class="container d-flex flex-column flex-md-row justify-content-between">
    <nuxt-link to="/" class="py-2">
      Mind<b>Growth</b>
    </nuxt-link>
    <nuxt-link to="/blog" class="py-2 d-none d-md-inline-block">Blog</nuxt-link>
    <nuxt-link to="/nosotros" class="py-2 d-none d-md-inline-block">¿Quienes somos?</nuxt-link>
    <nuxt-link to="/contacto" class="py-2 d-none d-md-inline-block">Contacto</nuxt-link>
    <a class="py-1 d-none d-md-inline-block" href="https://www.facebook.com/mindgrowthcl">1</a>
    <a class="py-1 d-none d-md-inline-block" href="https://www.linkedin.com/company/mindgrowth">2</a>
    <a class="py-1 d-none d-md-inline-block" href="https://www.twitter.com/mindgrowthcl">3</a>
    <a class="py-1 d-none d-md-inline-block" href="https://www.instagram.com/mindgrowthcl">4</a>
  </div>
</nav>
</template>

<script>
export default {
name: 'Navbar'
}
</script>

<style>

/*
 * Custom translucent site header
 */

.site-header {
  background-color: rgba(255, 255, 255, 0.85);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
}
.site-header a {
  color: #999;
  transition: ease-in-out color .15s;
}
.site-header a:hover {
  color: black;
  text-decoration: none;
}

/*
 * Dummy devices (replace them with your own or something else entirely!)
 */

.product-device {
  position: absolute;
  right: 10%;
  bottom: -30%;
  width: 300px;
  height: 540px;
  background-color: #333;
  border-radius: 21px;
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
}

.product-device::before {
  position: absolute;
  top: 10%;
  right: 10px;
  bottom: 10%;
  left: 10px;
  content: "";
  background-color: rgba(255, 255, 255, .1);
  border-radius: 5px;
}

.product-device-2 {
  top: -25%;
  right: auto;
  bottom: 0;
  left: 5%;
  background-color: #e5e5e5;
}


/*
 * Extra utilities
 */

.flex-equal > * {
  -ms-flex: 1;
  flex: 1;
}
@media (min-width: 768px) {
  .flex-md-equal > * {
    -ms-flex: 1;
    flex: 1;
  }
}

.overflow-hidden { overflow: hidden; }

</style>
