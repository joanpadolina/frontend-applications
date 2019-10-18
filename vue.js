let Vue = require('vue');
var webpack = require('webpack');

new Vue({
  render (h) {
    return h('div', this.hi)
  }
})

let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

module.exports = {
  // ...
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  }
}