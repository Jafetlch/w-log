import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Login from './views/auth/Login.vue'
import Notice from './views/notices/Notice'
import AdminDashboard from './views/admin/AdminDashboard'
import Test from './views/test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/post/:code',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: AdminDashboard,
      meta: {
        requiredAuth: true
      }
    }
    // {
    //   path: '/sanbox/test',
    //   name: 'Test',
    //   component: Test
    // }
  ]
})
