<template>

<section class="main-header">
<div class="main-header background-header position-relative overflow-hidden p-3 p-md-5 m-md-3 bg-light">
    <div class="row">

    <div class="col-md-2"></div>
    
  <div class="col-md-4 p-lg-4 my-5">
    <h1 class="display-4 ">Mind<b>Growth</b></h1>
    <p class="lead font-weight-normal">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia id, tempora eius nemo sunt temporibus minus laborum placeat, tenetur fugiat magni voluptates repellendus ipsam. Iusto laborum a eligendi? Voluptas, quis!</p>
    <a class="btn btn-outline-secondary" href="#">Contactanos ahora</a>
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

.background-header{
    background-image: url("~assets/images/SVG/dataAsset 1.svg");
     /* Location of the image */
  
  /* Background image is centered vertically and horizontally at all times */
  background-position: center right;
  
  /* Background image doesn't tile */
  background-repeat: no-repeat;
  
  /* Background image is fixed in the viewport so that it doesn't move when 
     the content's height is greater than the image's height */
  background-attachment:inherit;
  
  /* This is what makes the background image rescale based
     on the container's size */
  background-size: 30%;

  background-position-x: 90%;
  
  /* Set a background color that will be displayed
     while the background image is loading */
  background-color: #464646;
}


.main-header{
    height: 600px;
}

</style>
