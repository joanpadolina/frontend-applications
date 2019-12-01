<template>
<div>

<div class="map-contain">
  

<div class="map-static">
  <img id="Amerika" class="noord hover-click" src="../assets/svg/noordam.svg">
  <img id="Amerika2" class="zuid hover-click" src="../assets/svg/zuidam.svg">
  <img id="Eurazië" class="eu hover-click" src="../assets/svg/europa.svg">
  <img id="Afrika" class="af hover-click" src="../assets/svg/afrika.svg">
  <img id="Azië" class="az hover-click" src="../assets/svg/azie.svg">
  <img id="Oceanië" class="au hover-click" src="../assets/svg/austra.svg">
</div>
</div>


</div>
</template>


<script>

export default{
  name:'Map',
  props:''
}

methods:{
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
.hover-click:hover{
  border:darkslategrey solid .2em;
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