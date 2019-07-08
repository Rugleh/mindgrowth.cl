<template>
  <section class="main-header">
    <div
      class="main-header lazyload background-header position-relative overflow-hidden p-3 p-md-5 back-color-strong"
    >
      <div class="row">
        <div class="col-md-1"></div>

        <div class="col-md-5 p-lg-5 my-3">
          <h1 class="display-4 first-title blue">¡Potenciemos tu negocio!</h1>
          <p class="lead">
            <br />En Mind
            <b>Growth</b>, queremos ayudarte a llevar tu negocio a la mejor versión de él. Somos el aliado estrategico que estabas buscando
          </p>
          <p class="lead">
            Solicite un diagnóstico de forma
            <b>gratuita</b>
          </p>
          <br />
          <a class="btn btn-outline-primary diagnostico shadow" href="#form">¡Quiero mi diagnostico!</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
.first-title {
  padding-top: 40px;
}

.diagnostico {
  border-radius: 40px;
}

.blue {
  color: #4859a8 !important;
}

.orange {
  color: #f3782c !important;
}

.div-form {
  padding-bottom: 15px;
}

.background-header {
  background-image: url("~assets/images/svg/header-rocket.svg");
  background-position: center right;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: inherit;
  background-position-x: 120%;

  background-color: white;
}

.main-header {
  height: 600px;
}

/*phone */
@media (max-width: 575.98px) {
  .main-header {
    height: 600px;
  }

  .background-header {
    background-image: url("~assets/images/svg/header-rocket-bottom.svg");
    background-position: center right;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: inherit;
    background-position-x: 120%;
    background-position-y: 100%;
    background-color: white;
  }
}
</style>