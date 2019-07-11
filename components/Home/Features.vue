<template>
  <section>
    <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
      <div class="bg-light mr-md-3 pt-3 px-3 pt-md-4 px-md-4 text-center overflow-hidden features">
        <div class="my-3 py-3">
          <h2 class="display-2 blue">Desarrolla tu negocio</h2>
          <p
            class="lead"
          >Te ayudamos a desarrollar el plan estratégico que mejor se adapte a tus
necesidades y expectativas de crecimiento.</p>
        </div>
        <img
          class="image-growth img-fluid"
          src="~/assets/images/svg/growth-orange.svg"
          alt="mindgrowth sube tus ventas"
        />
      </div>
      <div class="bg-light mr-md-3 pt-3 px-3 pt-md-4 px-md-4 text-center overflow-hidden features">
        <div class="my-3 p-3">
          <h2 class="display-2 blue">Aumenta tus ventas</h2>
          <p
            class="lead"
          >Te orientamos para que puedas alinear tus actividades con el cumplimiento de
objetivos y así logres conseguir más y mejores ventas!</p>
        </div>
        <img
          class="image-money img-fluid"
          src="~/assets/images/svg/money-orange.svg"
          alt="mindgrowth sube tus ventas"
        />
        <br />
        <br />
      </div>
      <div class="bg-light mr-md-3 pt-3 px-3 pt-md-4 px-md-4 text-center overflow-hidden features">
        <div class="my-3 p-3">
          <h2 class="display-2 blue">Consolida tu lugar</h2>
          <p
            class="lead"
          >Desarrolla ventajas competitivas que te permitan lograr un mejor posicionamiento en
el mercado. Transfórmate en la opción número 1 para los clientes.</p>
        </div>
        <img
          class="image-success img-fluid"
          src="~/assets/images/svg/success-orange.svg"
          alt="mindgrowth sube tus ventas"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Features"
};
</script>

<style>
.features {
  border-radius: 30px;
}

.image-money {
  width: 50%;
}

.image-growth {
  width: 50%;
}

.image-success {
  width: 50%;
}

.display-2 {
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 1.2;
}
</style>
