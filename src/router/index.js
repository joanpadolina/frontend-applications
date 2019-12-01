import Vue from 'vue'
import Router from 'vue-router'
import HelloWord from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({

    routes:[
        {
            path:'/',
            name:'Home',
            component: 'HelloWorld'
        }
    ]
})