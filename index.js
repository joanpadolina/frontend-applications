console.log('yo');
let Vue = require('vue');
let HtmlWebpackPlug = require('html-webpack-plugin');
let path = require('path');
let webpack = require('webpack');
let express = require('express');


new Vue({
  render (h) {
    return h('app', this.hi)
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