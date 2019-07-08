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

<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
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
