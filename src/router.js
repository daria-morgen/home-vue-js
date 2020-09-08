import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/task1',
            component: () => import('./views/Task1.vue')
        },
        {
            path: '/task2',
            component: () => import('./views/Task2.vue')
        },
        {
            path: '/task3',
            component: () => import('./views/Task3.vue')
        }
    ]
})