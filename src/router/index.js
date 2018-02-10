import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login/Login'
import Clientes from '@/components/Clientes/Clientes'
import Dashboard from '@/components/Dashboard/Dashboard'
import User from '@/components/User/User'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          name: '',
          component: Dashboard
        },
        {
          path: '/clientes',
          name: 'clientes',
          component: Clientes
        },
        {
          path: '/usuarios',
          name: 'usuarios',
          component: User
        }
      ]
    }
  ]
})
