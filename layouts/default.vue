<template>
  <div class="layout">
    <Navbar />
    <nuxt class="content" />
    <hr />
    <Footer />
    <!--Start of Tawk.to Script-->

<!--End of Tawk.to Script-->
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
</style>
