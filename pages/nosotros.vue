<template>
    <div>
      <Header/> 
      <br>
      <div class="container col-md-8">
        <p>
          Somos una consultora orientada a brindar un servicio personalizado e integral 
          en el campo de planificación estratégica a las Pymes en Chile empleando una visión 
          innovadora e integral, surgiendo de la necesidad existente en nuestra sociedad de libre 
          mercado de potenciar y orientar a los nuevos empresarios, procurando ser una guia que les 
          permita hacer tangibles sus ideas de negocio y hacer sus emprendimientos sostenibles en el tiempo.
        </p>
        <br>
        <div class="row">
          <div class="col-md-6 col-xs-12">
            <h2 class="text-center">Visión</h2>
                <p>
                  Más que sólo una consultora, nuestro objetivo es convertirnos en el mayor aliado 
                  estratégico de los pequeños y medianos empresarios en Chile, reconocidos por nuestro compromiso y profesionalismo,
                  siendo capaces de adaptarnos a cualquier tipo de negocio, creando un sello de confianza y cercanía en la relación con nuestros clientes
                    y en el desempeño de nuestra labor, potenciando la creación de valor dentro de sus organizaciones.
                </p>
          </div>
          <div class="col-md-6 col-xs-12">
            <h2 class="text-center">Misión</h2>
            <p>
              Nos destacamos por establecer un trabajo colaborativo con nuestros clientes, asistiendolos de forma integral y 
              familiarizandolos con campo de la planificación estratégica, resaltando la importancia de la misma en el logro de sus objetivos y expectativas de su negocio, 
              aportando al desarrollo de su curva de aprendizaje, lo que contribuye a  la profesionalización de su negocio.
            </p>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
import Form from "~/components/Form.vue";
import Header from "~/components/Nosotros/Header.vue";

export default {
    transition: "page",
    components: {
    Form,
    Header,
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
