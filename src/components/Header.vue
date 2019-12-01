<template>
  <div class="headercss"> 
  <nav>
    <ul>
      <li><router-link to="/">home</router-link></li>
      <li><router-link to="/map">map-view</router-link></li>
      <li><router-link to="/data">de data</router-link></li>
    </ul>
  </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props:'',
}
</script>
<style>
ul{
  position: absolute;
  z-index: 99;
}
li{
  list-style-type: none;
    display: inline-block;
    float: left;
    position: relative;
    top: 0em;
    left: -2em;
    padding: 1em;
}
a{
  text-decoration: none;
  color:slategrey;
}
a:hover{
  color:darkslategrey;
  font-weight:600;
  cursor:pointer;
}
</style>


