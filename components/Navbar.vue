<template>
<!-- <div >
  <b-navbar class="site-header col-md-12 fixed-top" toggleable="lg">

    <div class="mx-auto d-sm-flex d-block flex-sm-nowrap">
<b-navbar-brand class="orange" to="/" exact> <img class="logo lazyload" src="~/assets/images/svg/rocket.svg" alt="mindgrowth">  Mind<b class="blue">Growth</b></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="blog" exact >Servicios</b-nav-item>
        <b-nav-item to="blog" exact >Blog</b-nav-item>
        <b-nav-item to="nosotros" exact >¿Quienes somos?</b-nav-item>
        <b-nav-item href="#form" exact>Contacto</b-nav-item>
      </b-navbar-nav>

     Right aligned nav items
      
     <b-navbar-nav class="ml-auto">

        <b-nav-item href="https://www.facebook.com/mindgrowthcl" target="_blank"><font-awesome-icon :icon="['fab', 'facebook-square']" size="2x"/></b-nav-item>
        <b-nav-item href="https://www.linkedin.com/company/mindgrowth" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" size="2x"/></b-nav-item>
        <b-nav-item href="https://www.twitter.com/mindgrowthcl" target="_blank"><font-awesome-icon :icon="['fab', 'twitter-square']" size="2x"/></b-nav-item>
        <b-nav-item href="https://www.instagram.com/mindgrowthcl" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" size="2x"/></b-nav-item>

      </b-navbar-nav>
    </b-collapse>

    </div>
    
    
  </b-navbar>
</div> -->

<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top navbar-new">
  <div class="mx-auto d-sm-flex ">
  <a class="navbar-brand" href="/"><img class="logo lazyload" src="~/assets/images/svg/rocket.svg" alt="mindgrowth"></a>
  <button class="navbar-toggler btn btn-default" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon blue"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/">Inicio <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/blog">Blog</nuxt-link>
      </li>
     
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/nosotros" >¿Quiénes somos?</nuxt-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/#form" >Contacto</a>
      </li>
    </ul>
    <form class="ml-auto">
      <a class="rrss-icon" href="https://www.facebook.com/mindgrowthcl" target="_blank" rel="noopener"><font-awesome-icon :icon="['fab', 'facebook-square']" /></a>
      <a class="rrss-icon" href="https://www.linkedin.com/company/mindgrowth" target="_blank" rel="noopener"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
      <a class="rrss-icon" href="https://www.twitter.com/mindgrowthcl" target="_blank" rel="noopener"><font-awesome-icon :icon="['fab', 'twitter-square']" /></a>
      <a class="rrss-icon" href="https://www.instagram.com/mindgrowthcl" target="_blank" rel="noopener"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
    </form>
  </div>
  </div>
</nav>
</template>

<script>
export default {
name: 'Navbar',
}

</script>

<style>

.strong{
  font-weight: bold
}

.navbar-new{
  background-color: rgba(255, 255, 255, .8) !important;
}

.rrss-icon{
  font-size: 1.5em;
  color: gray
}

.navbar-btn{
  min-width: 100px;
  background-color: transparent;
  border-radius: 50px;
  margin-right: 20px;
}
/*
 * Custom translucent site header
 */
.black{
  color: black;
}

.logo{
  height: 40px;
}

.grayscale{
  fill: lightgray;
}

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
