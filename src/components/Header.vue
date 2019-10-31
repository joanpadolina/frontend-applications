<template>
  <div class="headercss"> 
  <nav>

<router-view></router-view>
    <ul>
      <li><a href="/">ondek</a></li>
      <li><a href="#">creëer</a></li>
      <li><router-link to="/detailpagina">de data</router-link></li>
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


