<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top navbar-new">
    <div class="mx-auto d-sm-flex">
      <a class="navbar-brand" href="/">
        <img class="logo lazyload" src="~/assets/images/svg/rocket.svg" alt="mindgrowth" />
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
            <a class="nav-link" href="/">
              Inicio
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/blog">Blog</nuxt-link>
          </li>

          <li class="nav-item">
            <nuxt-link class="nav-link" to="/nosotros">¿Quiénes somos?</nuxt-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#form">Contacto</a>
          </li>
        </ul>
        <form class="ml-auto">
          <!-- <a class="rrss-icon" href="https://www.facebook.com/mindgrowthcl" target="_blank" rel="noopener"><font-awesome-icon :icon="['fab', 'facebook-square']" /></a>
      <a class="rrss-icon" href="https://www.linkedin.com/company/mindgrowth" target="_blank" rel="noopener"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
      <a class="rrss-icon" href="https://www.twitter.com/mindgrowthcl" target="_blank" rel="noopener"><font-awesome-icon :icon="['fab', 'twitter-square']" /></a>
          <a class="rrss-icon" href="https://www.instagram.com/mindgrowthcl" target="_blank" rel="noopener"><font-awesome-icon :icon="['fab', 'instagram']" /></a>-->
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
.strong {
  font-weight: bold;
}

.navbar-new {
  background-color: rgba(255, 255, 255, 0.8) !important;
}

.rrss-icon {
  font-size: 1.5em;
  color: gray;
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
