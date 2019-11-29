<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top navbar-new">
    <div class="col-md-8 offset-md-2 d-sm-flex">
      <a class="navbar-brand" href="/">
        <img class="logo" src="~/assets/images/svg/rocket.svg" alt="mindgrowth" />
      </a>
      <button
        class="navbar-toggler btn btn-default"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon blue"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/">Inicio</nuxt-link>
          </li>
          <!-- <li class="nav-item">
            <nuxt-link class="nav-link" to="/blog">Blog</nuxt-link>
          </li> -->

          <li class="nav-item">
            <nuxt-link class="nav-link" to="/nosotros">¿Quiénes somos?</nuxt-link>
          </li>
          <li class="nav-item">
             <nuxt-link class="nav-link" to="/">Contacto</nuxt-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://mindgrowth.typeform.com/to/oq0rOo" target="_blank">Diagnóstico <span href="#" class="badge badge-success">Gratis</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://blog.mindgrowth.cl" target="_blank">Blog</a>
          </li>
        </ul>
        <form class="ml-auto">
          <a href="https://www.facebook.com/mindgrowthcl" target="_blank" rel="noopener"><img class="logo-rrss" src="~/assets/images/svg/icons/facebook.svg" alt="facebook mindgrowthcl" /></a>
          <a href="https://www.linkedin.com/company/mindgrowth" target="_blank" rel="noopener"><img class="logo-rrss" src="~/assets/images/svg/icons/linkedin.svg" alt="linkedin mindgrowth" /></a>
          <a href="https://www.twitter.com/mindgrowthcl" target="_blank" rel="noopener"><img class="logo-rrss" src="~/assets/images/svg/icons/twitter.svg" alt="twitter mindgrowthcl" /></a>
          <a href="https://www.instagram.com/mindgrowthcl" target="_blank" rel="noopener"><img class="logo-rrss" src="~/assets/images/svg/icons/instagram.svg" alt="instagram mindgrowthcl" /></a>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>

.logo-rrss{
  height: 35px;
}


.strong {
  font-weight: bold;
}

.navbar-new {
  background-color: rgba(255, 255, 255, 0.8) !important;
}

/*
 * Custom translucent site header
 */
.black {
  color: black;
}

.logo {
  height: 40px;
}

.grayscale {
  fill: lightgray;
}

@media (min-width: 768px) {
  .flex-md-equal > * {
    -ms-flex: 1;
    flex: 1;
  }
}

.overflow-hidden {
  overflow: hidden;
}
</style>
