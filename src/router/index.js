import Vue from 'vue'
import { IonicVueRouter } from '@ionic/vue'
import Home from '../views/VetHome.vue'
import Login from '../views/Login.vue'
import ForgottenPassword from '../views/ForgottenPassword.vue'

Vue.use(IonicVueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/search',
    children: [
      {
        path: '/search',
        name: 'Search'
      },
      {
        path: '/new',
        name: 'New'
      },
      {
        path: '/actions',
        name: 'Actions'
      },
      {
        path: '/schedule',
        name: 'Schedule'
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgotten-password',
    name: 'ForgottenPassword',
    component: ForgottenPassword
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
