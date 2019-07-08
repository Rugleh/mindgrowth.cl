<template>

<section class="main-header">
   <div class="main-header lazyload background-header position-relative overflow-hidden p-3 p-md-5 back-color-strong">
      <div class="row">

         <div class="col-md-1"></div>
         
         <div class="col-md-5 p-lg-5 my-3">
         <h1 class="display-4 first-title blue">¡Potenciemos tu negocio!</h1>
         <p class="lead ">
            <br>En Mind<b>Growth</b>, queremos ayudarte a llevar tu negocio a la mejor versión de él. Somos el aliado estrategico que estabas buscando</p>
         <p class="lead">Solicite un diagnóstico de forma <b>gratuita</b> </p>
         <br>  
         <a class="btn btn-outline-primary diagnostico shadow" href="#form">¡Quiero mi diagnostico!</a>
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
.first-title{
   padding-top: 40px;
}

.diagnostico{
   border-radius: 40px;
}

.blue{
   color: #4859A8 !important;
}

.orange{
   color: #F3782C !important;
}

.div-form{
   padding-bottom: 15px;
}

.background-header{
   
 /* background-image: url("~assets/images/svg/background-header.svg"), url("~assets/images/svg/header-orange.svg"), url("~assets/images/svg/header-orange-top.svg"), radial-gradient( circle farthest-corner at 10% 20%,  rgba(215,223,252,1) 0%, rgba(255,255,255,1) 0%, rgba(215,223,252,1) 84% );
  background-position: center right, center left, center right, center;
  background-repeat: no-repeat;
  background-attachment:inherit;
  background-size: 30%, 50%, 50%, 100%;
  background-position-x: 96%, -10%, 105%, 0%;
  background-position-y: 50%, 100%, 0%, 0%;
  background-color: #464646; */

  background-image: url("~assets/images/svg/header-rocket.svg");
  background-position: center right;
  background-repeat: no-repeat;
  background-attachment:scroll;
  background-size: inherit;
  background-position-x: 120%;

  background-color: white;
} 

.main-header{
    height: 600px;
}

/*phone */
@media (max-width: 575.98px) { 
   .main-header{
      height: 600px;
   }

.background-header{
   background-image: url("~assets/images/svg/header-rocket-bottom.svg");
   background-position: center right;
   background-repeat: no-repeat;
   background-attachment:scroll;
   background-size: inherit;
   background-position-x: 120%; 
   background-position-y: 100%; 
   background-color: white;
   }
}

</style>