<template id="content">
  <div class="content-api">
      <h2>Content vue</h2>
    <div class="container-info" 
      v-for="result in results"
      v-bind:result="result"
      v-bind:key="result.id">
      <h2>
        {{result.title}}
      </h2>
      <div class="image">
      <img v-bind:src="result.img">
      <!-- {{result.img.value}} -->
      </div>
      <p>
        {{result.placeName}}
      </p>
    </div>
</div>
</template>

<script type="text/javascript">
import App from "../App.vue"
export default {
      component:{
    App
},
    data(){
      return{

}}
}
</script>


<style media="screen">
  li{
    list-style-type: none;
    width:4em;
    height:4em;
    background:yellow;
  }
</style>