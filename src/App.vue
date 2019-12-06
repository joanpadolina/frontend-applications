<template>
  <div id="app">
    <Header />
    <img class="trlogo" alt="Vue logo" src="./assets/tropenmuseum.png" />
    <div class="con_svg">
      <img class="rlogo" alt="logo roken" src="./assets/roken_logo.svg" />
    </div>
    <router-view />
  </div>
</template>


<script>
/*eslint 'no-console':0*/
import Header from "./components/Header";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "@/scss/style.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
// img{
//   width:40%;
//   height:40%;
//   }
</style>
