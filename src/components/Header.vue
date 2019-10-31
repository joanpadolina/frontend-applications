<template>
  <div class="headercss"> 
  <nav>
    <ul>
      <li>ondek</li>
      <li>creëer</li>
      <li>de data</li>
    </ul>
  </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props:''
}
</script>
<style scope>
ul{
  position: absolute;
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
li:hover{
  font-weight:2em;
  cursor:pointer;
}
</style>


