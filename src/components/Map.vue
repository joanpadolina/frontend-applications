<template>
<div>
<h1>
map component
</h1>
<div class="map-contain">
  

<div class="map-static">
  <img class="noord" src="../assets/svg/noordam.svg">
  <img class="zuid" src="../assets/svg/zuidam.svg">
  <img class="eu" src="../assets/svg/europa.svg">
  <img class="af" src="../assets/svg/afrika.svg">
  <img class="az" src="../assets/svg/azie.svg">
  <img class="au" src="../assets/svg/austra.svg">
</div>
</div>


</div>
</template>


<script>

export default{
  name:'Map',
  props:''
}
</script>


<style>
.map-contain{
  width:100vw;
  text-align: -webkit-center;
}
.map-static{
  display:block;
  position:relative;
  width:80vw;
  justify-content: center;
}
.noord{
  
}
.zuid{
  
}
.eu{
  
}
.af{
  
}
.az{
  
}
.au{
  
}
</style>