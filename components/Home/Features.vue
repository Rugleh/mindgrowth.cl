<template>
<section>
    <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
  <div class="bg-light mr-md-3 pt-3 px-3 pt-md-4 px-md-4 text-center overflow-hidden features">
    <div class="my-3 py-3">
      <h2 class="display-2 blue">Crecimiento de tu negocio</h2>
      <p class="lead">Te acompañamos, orientamos y planificamos el proceso de crecimiento de tu neogocio o PYME</p>

    </div>
    <img class="image-growth lazyload img-fluid" data-src="~/assets/images/svg/growth-orange.svg" alt="mindgrowth sube tus ventas">
   
  </div>
  <div class="bg-light mr-md-3 pt-3 px-3 pt-md-4 px-md-4 text-center overflow-hidden features">
    <div class="my-3 p-3">
      <h2 class="display-2 blue">Aumenta tus ventas</h2>
      <p class="lead">Generando un mejor posicionamiento en el mercado que tu competencia, te ayudamos a conseguir mejores y más ventas</p>
    </div>
    <img class="image-money lazyload img-fluid" data-src="~/assets/images/svg/money-orange.svg" alt="mindgrowth sube tus ventas">
    <br>
    <br>
  </div>
  <div class="bg-light mr-md-3 pt-3 px-3 pt-md-4 px-md-4 text-center overflow-hidden features">
    <div class="my-3 p-3">
      <h2 class="display-2 blue">Consolida tu lugar</h2>
      <p class="lead">Definimos objetivos y metas a corto y largo plazo que te ayudarán a lograr lo que tu competencia no ha podido</p>
    </div>
    <img class="image-success lazyload img-fluid" data-src="~/assets/images/svg/success-orange.svg" alt="mindgrowth sube tus ventas">
    
  </div>
</div>

</section>
</template>

<script>
export default {
    name: 'Features'
}
</script>

<style>

.features{
  border-radius: 30px;
}

.image-money{
  width: 50%
}

.image-growth{
  width: 50%;
}

.image-success{
 width: 50%;
}

.display-2{
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 1.2;
}

</style>
