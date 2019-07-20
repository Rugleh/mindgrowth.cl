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
  transition: "page",
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
      { name: 'description', content: 'Más que una consultora, MindGrowth representa un aliado estratégico para tu organización. Te ayudamos a planificar tu negocio para llevarlo al siguiente nivel.' },

      //facebook
      { property:"og:type", content:"website" },
      { property:"og:url", content:"https://www.mindgrowth.cl/" },
      { property:"og:title", content:"MindGrowth - Planificación Estratégica"},
      { property:"og:description", content:"Más que una consultora, MindGrowth representa un aliado estratégico para tu organización. Te ayudamos a planificar tu negocio para llevarlo al siguiente nivel."},
      { property:"og:image", content:"https://www.mindgrowth.cl/assets/card.jpg"},

      //twitter
      { property:"twitter:card", content:"summary_large_image"},
      { property:"twitter:url", content:"https://www.mindgrowth.cl/"},
      { property:"twitter:title", content:"MindGrowth - Planificación Estratégica"},
      { property:"twitter:description", content:"Más que una consultora, MindGrowth representa un aliado estratégico para tu organización. Te ayudamos a planificar tu negocio para llevarlo al siguiente nivel."},
      { property:"twitter:image", content:"https://www.mindgrowth.cl/assets/card.jpg"}
    
    ]
  }
}
</script>

<style>
</style>
