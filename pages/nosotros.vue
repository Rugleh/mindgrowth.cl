<template>
    <div><p> En Construcción</p></div>
</template>

<script>
import Form from "~/components/Form.vue";

export default {
    components: {
    Form,
  },
  head: {
    titleTemplate: 'MindGrowth - Nosotros',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { name: 'description', content: '¿Quienes somos? ¿Qué nos mueve? conoce al equipo que solucionará tus problemas y logrará que tu PYME llegue al éxito' }
    ]
  }
};
</script>

<style>

</style>
