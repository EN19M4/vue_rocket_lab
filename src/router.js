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
            path: '/employees',
            name: 'Employees',
            component: () => import('./views/Employees.vue')
        },
        {
            path: '/edit',
            name: 'Edit',
            component: () => import('./components/Edit.vue')
        }
    ]
})