import Vue from 'vue'
import VueRouter from 'vue-router'

import search from '../pages/search'
import story from '../pages/story'
import reg from '../pages/reg'
import login from '../pages/login'
import message from '../pages/message'
import wish from '../pages/wish'
import NotFound from '../pages/NotFound'
import goods from '../pages/goods'


Vue.use(VueRouter)  //使用VueRouter

let router = new VueRouter({    //实例化VueRouter
    //配置参数，不同的URL显示不同的内容  
    routes: [
        {
            name: 'search',   //组件对应的路由
            path: '/search',  //当前浏览器地址为/home时，显示home组件
            component: search
        },
        {
            path: '/',  //重定向
            redirect: '/search'
        },
        {
            name: 'wish',
            path: '/wish',
            component: wish
        },
        {
            name: 'story',
            path: '/story',
            component: story
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
            name: 'message',
            path: '/message',
            component: message
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