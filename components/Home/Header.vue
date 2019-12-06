<template>
  <section class="main-header">
    <div
      class="main-header background-header overflow-hidden p-3 p-md-5"
    >
      

        <div class="col-md-12 p-lg-12 text-center my-3">
          <h1 class="display-4 first-title font-white">¡Potencia tu negocio!</h1>
        </div>

        <div>
          <p class="lead font-white col-md-6 offset-md-3 text-center">
            <br />Más que una consultora, Mind<b>Growth</b> representa un aliado estratégico para tu
organización. Te ayudamos a planificar tu negocio para llevarlo al siguiente nivel.
          </p>
        </div>
          
        <div>
        <p class="lead font-white col-md-6 offset-md-3 text-center">
          Solicita tu diagnóstico de forma
          <b>gratuita</b>
        </p>
        <br />
       

        </div>
        <div class="col-md-6 offset-md-3 text-center">
        <!-- <a class="btn btn-outline diagnostico-white shadow" href="#form">¡Quiero mi diagnostico!</a> -->
        <a class="btn btn-outline diagnostico-white shadow" href="https://mindgrowth.typeform.com/to/oq0rOo" data-mode="popup" style="display:inline-block;text-decoration:none;color:white;cursor:pointer;font-size:18px;line-height:45px;text-align:center;margin:0;height:45px;padding:0px 30px;border-radius:22px;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;" data-submit-close-delay="0">¡Quiero mi diagnostico!</a> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script>
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

.diagnostico-white{
  border: 1px solid white;
  color: white;
  border-radius: 40px;
}

.diagnostico-white:hover{
  border: 1px solid rgb(255, 123, 0);
  color: white;
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
  background-image: url("~assets/images/svg/top-right.svg"), url("~assets/images/svg/bottom-left-2.svg"), linear-gradient(
    to bottom,
    rgba(73, 155, 234, 1) 0%,
    rgba(72, 89, 168, 1) 100%
  );
  background-position: center right, center left, center;
  background-repeat: no-repeat;
  background-attachment:inherit;
  background-size: 30%, 30%, 100%;
  background-position-x: 110%, -8%, 0%;
  background-position-y: -20%, 140%, 0%;

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

 
}
</style>