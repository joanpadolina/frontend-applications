import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Data from '@/components/Data'
import Home from '@/components/home'
import Mapview from '@/components/Mapview'
Vue.use(VueRouter);

const routes = [{
  path: '/data',
  component: Data
},{
  path:'/',
  component:Home
},{
  path:'/map',
  component: Mapview
}
];

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')