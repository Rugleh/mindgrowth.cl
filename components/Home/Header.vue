<template>

<section class="main-header">
<div class="main-header lazyload background-header position-relative overflow-hidden p-3 p-md-5 m-md-3 bg-light">
    <div class="row">

      <div class="col-md-3"></div>
      
      <div class="col-md-4 p-lg-4 my-5">
      <h1 class="display-4 ">Mind<b>Growth</b></h1>
      <p class="lead font-weight-normal">Somos la Consultora que te ayudará a crecer como empresa. Mediante el Metodo Mind<b>Growth</b> somos capaces de llevar a tu negocio o PYME donde no pensaste que podría llegar</p>
      <p class="lead font-weight-normal">¡Cambia tu visión, destaca en el mercado!</p>
      

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
         <p>
            <label><input type="text" name="name" placeholder="Su nombre"/></label>   
         </p>
         <p>
            <label><input type="email" name="email" placeholder="Correo" /></label>
         </p>
         <p>
            <button class="btn btn-outline-primary w-100" type="submit">Enviar</button>
         </p>
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



</style>
