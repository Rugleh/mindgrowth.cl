<template lang="html">
<div>
  <Header/>
  <Features />
  <Metodo />
</div>
</template>

<script>
import Header from '~/components/Home/Header.vue'
import Features from '~/components/Home/Features.vue'
import Metodo from '~/components/Home/Metodo.vue'


export default {
  components: {
    Header,
    Features,
    Metodo
  }
}
</script>

<style>

</style>
