<template>
  <footer class="container py-5">
    <div class="row">
      <div class="col-12 col-md">
        <p>
          Mind
          <b>Growth</b>
        </p>
        <small class="d-block mb-3 text-muted">&copy; 2019</small>
      </div>
      <div class="col-6 col-md">
      <h5>Mapa del Sitio</h5>
      <ul class="list-unstyled text-small">
        <li><nuxt-link class="text-muted" to="/">Inicio</nuxt-link></li>
        <li><nuxt-link class="text-muted" to="/">Contacto</nuxt-link></li>
        <li><nuxt-link class="text-muted" to="/nosotros">¿Quienes Somos?</nuxt-link></li>
        <li><nuxt-link class="text-muted" to="/diagnostico">Diagnóstico <span href="#" class="badge badge-success">Gratis</span></nuxt-link></li>

      </ul>
      </div>
      <div class="col-6 col-md">
      <h5>Redes Sociales</h5>
      <ul class="list-unstyled text-small">
        <li><a class="text-muted" href="https://www.facebook.com/mindgrowthcl/">Facebook</a></li>
        <li><a class="text-muted" href="https://www.linkedin.com/company/mindgrowth">LinkedIn</a></li>
        <li><a class="text-muted" href="https://twitter.com/mindgrowthcl">Twitter</a></li>
        <li><a class="text-muted" href="https://www.instagram.com/mindgrowthcl/">Instagram</a></li>

      </ul>
      </div>
      <!-- <div class="col-6 col-md">
        <h5>
          <nuxt-link to="/blog">Blog</nuxt-link>
        </h5>
      </div> -->
     
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
a:link {
  text-decoration: none;
}

h5 {
  font-size: 1.1em;
}
</style>
