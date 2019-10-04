import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../pages/home'
import cart from '../pages/cart'
import reg from '../pages/reg'
import login from '../pages/login'
import mine from '../pages/mine'
import discover from '../pages/discover'
import NotFound from '../pages/NotFound'
import goods from '../pages/goods'


Vue.use(VueRouter)  //使用VueRouter

let router = new VueRouter({    //实例化VueRouter
    //配置参数，不同的URL显示不同的内容  
    routes: [
        {
            name: 'home',   //组件对应的路由
            path: '/home',  //当前浏览器地址为/home时，显示home组件
            component: home
        },
        {
            path: '/',  //重定向
            redirect: '/home'
        },
        {
            name: 'cart',
            path: '/cart',
            component: cart
        },
        {
            name: 'reg',
            path: '/reg',
            component: reg
        },
        {
            name: 'login',
            path: '/login',
            component: login
        },
        {
            name: 'mine',
            path: '/mine',
            component: mine
        },
        {
            name: 'discover',
            path: '/discover',
            component: discover
        },
        {
            name: 'goods',
            path: '/goods/:id',
            component: goods
        },
        {
            path: '/404',
            component: NotFound
        },
        {
            path: '*',    //*指匹配所有路径，如果其他路径匹配不到就会进入404的路径
            redirect: '/404'  
        }
    ]
})

export default router