<template>
  <section class="metodo">
    <br />
    <h2 class="text-center py-3 display-4 font-white">
      ¿Conoces el Método Mind<b>Growth</b>?
    </h2>

    <div class="container py-2 mt-4 mb-4 text-center">
      <!-- timeline item 1 -->
      <div class="row no-gutters">
        <div class="col-sm">
          <!--spacer-->
        </div>
        <!-- timeline item 1 center dot -->
        <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
          <div class="row h-50">
            <div class="col">&nbsp;</div>
            <div class="col">&nbsp;</div>
          </div>
          <h5 class="m-2">
            <span class="badge badge-pill bg-orange shadow">&nbsp;</span>
          </h5>
          <div class="row h-50">
            <div class="col border-right">&nbsp;</div>
            <div class="col">&nbsp;</div>
          </div>
        </div>
        <!-- timeline item 1 event content -->
        <div class="col-sm py-2">
          <div class="card bg-transparent border-white shadow">
            <div class="card-body">
              <h4 class="card-title font-white">Desarrollo  de modelo de negocios</h4>
              <p class="card-text font-white ">
                Mediante el uso de
                la metodología Canvas, nuestros consultores te ayudarán a documentar
                dicho modelo y destacar de la mejor manera, la propuesta de valor que
                presenta tu organización.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--/row-->
      <!-- timeline item 2 -->
      <div class="row no-gutters">
        <div class="col-sm py-2">
          <div class="card bg-transparent border-white shadow font-white">
            <div class="card-body">
              <h4 class="card-title">Planificación formal</h4>
              <p class="card-text">
                Define tu visión de empresa, analiza tu entorno, plantea objetivos y determina estrategias. 
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
          <div class="row h-50">
            <div class="col border-right">&nbsp;</div>
            <div class="col">&nbsp;</div>
          </div>
          <h5 class="m-2">
            <span class="badge badge-pill bg-orange shadow">&nbsp;</span>
          </h5>
          <div class="row h-50">
            <div class="col border-right">&nbsp;</div>
            <div class="col">&nbsp;</div>
          </div>
        </div>
        <div class="col-sm">
          <!--spacer-->
        </div>
      </div>
      <!--/row-->
      <!-- timeline item 3 -->
      <div class="row no-gutters">
        <div class="col-sm">
          <!--spacer-->
        </div>
        <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
          <div class="row h-50">
            <div class="col border-right">&nbsp;</div>
            <div class="col">&nbsp;</div>
          </div>
          <h5 class="m-2">
            <span class="badge badge-pill bg-orange shadow">&nbsp;</span>
          </h5>
          <div class="row h-50">
            <div class="col border-right">&nbsp;</div>
            <div class="col">&nbsp;</div>
          </div>
        </div>
        <div class="col-sm py-2">
          <div class="card bg-transparent border-white shadow font-white">
            <div class="card-body">
              <h4 class="card-title">Indicadores y planes de acción</h4>
              <p>
                Te ayudamos a seleccionar indicadores claves de desempeño y determinar las actividades que te permitirán cumplir tus metas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--/row-->
      <!-- timeline item 4 -->
      <div class="row no-gutters">
        <div class="col-sm py-2">
          <div class="card bg-transparent border-white shadow font-white">
            <div class="card-body">
              <h4 class="card-title">¡Manos a la obra!</h4>
              <p>
                ¡Felicitaciones! ya cuentas con tu plan estatégico, ahora solo falta implementarlo para que comiences a ver resultados.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
          <div class="row h-50">
            <div class="col border-right">&nbsp;</div>
            <div class="col">&nbsp;</div>
          </div>
          <h5 class="m-2">
            <span class="badge badge-pill bg-primary shadow">&nbsp;</span>
          </h5>
          
        </div>
        <div class="col-sm">
          <!--spacer-->
        </div>
      </div>
      <!--/row-->
      <!-- timeline item 5 -->
  
      
    </div>

    <hr />

    <!--container-->
  </section>
</template>

<script>
export default {
  name: "Timeline"
};
</script>

<style>
.card {
  border-radius: 20px;
}

.metodo {
  background: rgba(73, 155, 234, 1);
  background: -moz-linear-gradient(
    top,
    rgba(73, 155, 234, 1) 0%,
    rgba(72, 89, 168, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(73, 155, 234, 1)),
    color-stop(100%, rgba(72, 89, 168, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(73, 155, 234, 1) 0%,
    rgba(72, 89, 168, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(73, 155, 234, 1) 0%,
    rgba(72, 89, 168, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(73, 155, 234, 1) 0%,
    rgba(72, 89, 168, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(73, 155, 234, 1) 0%,
    rgba(72, 89, 168, 1) 100%
  );
}

.font-white {
  color: white;
}

.bg-orange {
  background-color: #f3782c;
}
</style>
