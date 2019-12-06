<template>
  <section class="metodo" id="form">
    <br />
    <br />
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h2 class="display-2 text-center text-white">¡Conversemos!</h2>
          <br />
          <p class="text-center text-white">Si tienes alguna duda, quieres agendar tu diagnóstico o simplimente quieres dejarnos un comentario, llena el formulario y contacta de forma directa con nuestros consultores</p>
          <!-- <p><font-awesome-icon :icon="['fas', 'phone']"/> +569 67779168</p>
          <p><font-awesome-icon :icon="['fas', 'envelope']"/> mindgrowthcl@gmail.com</p>-->
          <br>
      
        </div>
      
        <div class="col-md-6 offset-md-3 col-xs-12">
          <form name="contact" method="POST" data-netlify="true">
            <div class="form-row">
              <div class="form-group col-md-4 col-xs-12">
                <label for="inputName">Nombre</label>
                <input
                  type="text"
                  class="form-control border-primary"
                  name="nombre"
                  id="inputName"
                  
                />
              </div>
              <div class="form-group col-md-4 col-xs-12">
                <label for="inputEmail4">Correo</label>
                <input
                  type="email"
                  class="form-control border-primary"
                  name="correo"
                  id="inputEmail4"
                 
                />
              </div>
              <div class="form-group col-md-4 col-xs-12">
                <label  for="inputPhone">Telefono</label>
                <input
                  type="text"
                  class="form-control border-primary"
                  name="telefono"
                  id="inputPhone"
                  
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-12 col-xs-12">
                <label  for="exampleFormControlTextarea1">Comentario, cuéntanos sobre tu problemática</label>
                <textarea
                  class="form-control border-primary"
                  name="comentario"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  
                ></textarea>
              </div>
            </div>

            <div class="text-center col-md-6 offset-md-3">
            <button
              type="submit"
              class="btn btn-outline diagnostico-white shadow"
            >¡Enviar!</button>
            </div>

          </form>
        </div>
      </div>
    </div>
    <br />
    <br />
  </section>
</template>

<script>
export default {
  name: "Form"
};
</script>

<style>

.form-btn{
  width: 100px;
}
</style>
