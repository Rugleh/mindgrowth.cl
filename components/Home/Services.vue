<template>
  <section>
    <br />
    <br />

    <div class="row col-md-8 offset-md-2">
      <br />
      <div class="col-md-6">
        <h3 class="display-2 blue text-right services_text">Planificación Estratégica</h3>
        <br />
        <p class="lead text-right services_text">
          <b>¿Tu empresa cuenta con plan estratégico?</b>
          <br />Mediante el Metodo MindGrowth te ayudamos a planificar la estratégia que necesitas y asi cumplir los objetivos que te propongas
        </p>
      </div>
      <div class="col-md-6 text-center services">
          <br>
        <img
          class="image-money img-fluid"
          src="~/assets/images/undraw/business_plan.svg"
          alt="mindgrowth sube tus ventas"
        />
      </div>
    </div>

    <br>
    <br>

    <div class="row col-md-8 offset-md-2">
        <div class="col-md-6 text-center services">
            <br>
        <img
          class="image-money img-fluid"
          src="~/assets/images/undraw/marketing.svg"
          alt="mindgrowth sube tus ventas"
        />
      </div>
      <br />
      <div class="col-md-6">
        <h3 class="display-2 blue text-left services_text">Planes de Marketing</h3>
        <br />
        <p class="lead text-left services_text">
          <b>¿Tienes un plan de marketing?</b>
          <br />Te ayudamos a desarrollar el plan de marketing que necesitas para llegar a tu público objetivo y aprovechar al máximo tu propuesta de valor.
        </p>
      </div>
      
    </div>

    <br />
    <br />
    
    <div class="row col-md-8 offset-md-2">
      <br />
      <div class="col-md-6">
        <h3 class="display-2 blue text-right services_text">Desarollo Web</h3>
        <br />
        <p class="lead text-right services_text">
          <b>¿Necesitas una página web?</b>
          <br />Desarrollamos e implementamos la web que tanto necesitas para hacer crecer tu negocio, utilizamos las últimas técnologias y brindamos soporte cuando requieras.
        </p>
      </div>
      <div class="col-md-6 text-center services">
          <br>
        <img
          class="image-money img-fluid"
          src="~/assets/images/undraw/web.svg"
          alt="mindgrowth web page"
        />
      </div>
    </div>

    <br>
    <br>

    <div class="row col-md-8 offset-md-2">
        <div class="col-md-6 col-xs-12 text-center services">
            <br>
        <img
          class="image-money img-fluid"
          src="~/assets/images/undraw/social.svg"
          alt="mindgrowth social manager community manager"
        />
      </div>
      <br />
      <div class="col-md-6 col-sm-12">
        <h3 class="display-2 blue text-left services_text">Community Manager</h3>
        <br />
        <p class="lead text-left services_text">
          <b>¿Necesitas ayuda con tus redes sociales?</b>
          <br />Entregamos servicios de Community Managers y Social Managers para manejar tus redes sociales 24/7 generando y publicando contenido en Instagram, Facebook, Twitter, LinkedIn y otros.
        </p>
      </div>
      
    </div>

    <br>
    <br>

  </section>
</template>

<script>
export default {
  name: "Services"
};
</script>

<style>

@media (max-width: 576px){
.services {
   display: none;
}
.services_text{
    text-align: center!important;
}
}
</style>
