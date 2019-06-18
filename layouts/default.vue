<template>
  <div class="layout">
   
    <div class="header">
      
    </div>

    <Navbar />
    <nuxt class="content" />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'


export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
</style>
