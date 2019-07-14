<template lang="html">
<div>
  <Header/>
  <Features />
  <Timeline />
  <Form />
</div>
</template>

<script>
import Header from "~/components/Home/Header.vue";
import Features from "~/components/Home/Features.vue";
import Timeline from "~/components/Home/Timeline.vue";
import Form from "~/components/Form.vue";

export default {
  components: {
    Header,
    Features,
    Timeline,
    Form
  },
  head: {
    titleTemplate: 'MindGrowth - Planificación Estratégica',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'description', name: 'description', content: 'Más que una consultora, MindGrowth representa un aliado estratégico para tu organización. Te ayudamos a planificar tu negocio para llevarlo al siguiente nivel.' }
    ]
  }
}
</script>

<style>
</style>
