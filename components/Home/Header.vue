<template>

<section class="main-header">
<div class="main-header lazyload background-header position-relative overflow-hidden p-3 p-md-5 m-md-3 bg-light">
    <div class="row">

      <div class="col-md-3"></div>
      
      <div class="col-md-4 p-lg-4 my-3">
      <h1 class="display-4 ">Mind<b>Growth</b></h1>
      <p class="lead ">Más que una consultora, somos un socio estratégico para las PYMEs, buscamos destacar tus fortalezas y combatir tus
         debilidades.
         <br>En Mind<b>Growth</b>, queremos ayudarte a llevar tu negocio a la mejor versión de él.</p>
      <p class="lead">Solicite un diagnóstico de forma <b>gratuita</b> </p>
      

      <!-- <form name="Home" method="POST" data-netlify="true">
         <div class="form-row">
            <div class="div-form col-md-4 col-sm-12">
               <input type="text" class="form-control" name="name" placeholder="Nombre">
            </div>
            <div class="div-form col-md-4 col-sm-12">
               <input type="email" class="form-control" name="email" required placeholder="Correo">
            </div>
            
         </div>
      
         <div class="form-row ">
            <div class="div-form col-md-4 col-sm-12">
               <input type="text" class="form-control" name="phone" placeholder="Teléfono">
            </div>
            <div class="div-form col-md-4 col-sm-12">
               <button class="btn btn-outline-primary w-100" type="submit" href="#">¡Conversemos!</button>
            </div>
         </div>
      </form> -->

      <form name="contact" method="POST" data-netlify="true">
         <div class="form-row">
            <div class="div-form col-md-4 col-sm-12">
               <label class="w-100"><input class="form-control" type="text" name="nombre" placeholder="Su nombre"/></label>   
            </div>
            <div class="div-form col-md-4 col-sm-12">
               <label class="w-100"><input class="form-control " type="email" name="email" placeholder="Correo" /></label>
            </div>
         </div>
         <div class="form-row">
            <div class="div-form col-md-4 col-sm-12">
               <label class="w-100"><input class="form-control " type="text" name="telefono" placeholder="Teléfono"/></label>
            </div>
            <div class="div-form col-md-4 col-sm-12">
               <button class="btn btn-outline-primary w-100" type="submit">Enviar</button>
            </div>
         </div>
      </form>

   </div>
  </div>
</div>
</section>
    
    
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>

.div-form{
   padding-bottom: 15px;
}

.background-header{
    background-image: url("~assets/images/svg/background-header.svg"), url("~assets/images/svg/vectors.svg");

     /* Location of the image */
  
  /* Background image is centered vertically and horizontally at all times */
  background-position: center right, center left;
  
  /* Background image doesn't tile */
  background-repeat: no-repeat;
  
  /* Background image is fixed in the viewport so that it doesn't move when 
     the content's height is greater than the image's height */
  background-attachment:inherit;
  
  /* This is what makes the background image rescale based
     on the container's size */
  background-size: 30%, 16%;

  background-position-x: 96%, 0%;
  
  /* Set a background color that will be displayed
     while the background image is loading */
  background-color: #464646;
}

.main-header{
    height: 600px;
}

/*phone */
@media (max-width: 575.98px) { 
   .main-header{
      height: 100%;
   }

   .background-header{
      background-image: linear-gradient(rgba(255, 255, 255, 0.582), rgba(255, 255, 255, 0.616)), url("~assets/images/svg/vectors.svg");

      background-position: center;
      
      background-repeat: no-repeat;
      
      background-attachment:inherit;
      
      background-size: 100%;
      
      background-color: #464646;
   }

}

</style>
