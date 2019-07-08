<template>
    <footer class="container py-5">
  <div class="row text-center">
    <div class="col-12 col-md">
      <p>Mind<b>Growth</b></p>
      <small class="d-block mb-3 text-muted">&copy; 2019</small>
    </div>
    <div class="col-6 col-md">
      <h5> <nuxt-link to="/">Inicio</nuxt-link></h5>
    </div>
    <div class="col-6 col-md">
      <h5> <nuxt-link to="/blog">Blog</nuxt-link></h5>
    </div>
    <div class="col-6 col-md">
      <h5> <nuxt-link to="/nosotros">¿Quienes somos?</nuxt-link></h5>
    </div>
    <div class="col-6 col-md">
      <h5> <a href="#form">Contacto</a></h5>
      
    </div>
  </div>
</footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
a:link {
  text-decoration: none;
}

h5{
  font-size: 1.1em;
}
</style>
