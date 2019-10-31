import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Detailmap from '@/pages/Detailmap.vue'

Vue.use(VueRouter);

const routes =[
  { path: '/detailmap', component: Detailmap }
];

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),  
  router,
}).$mount('#app')


