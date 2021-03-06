//1.使用Router插件
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let routes = [{
    path: '/',
    component: require('../components/member.vue').default
},{
    path: '/address',
    component: require('../components/address.vue').default,
    children:[{
        path: '',
        component: require('../components/all.vue').default
        //redirect: 'all'
    },{
        path: '/all',
        name: 'all',
        component: require('../components/all.vue').default
    },{
        path: 'form',
        name: 'form',
        component: require('../components/form.vue').default
    }]
}]

//2.创建router实例
let router = new Router({
    routes
})

export default router
