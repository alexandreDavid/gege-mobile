import Vue from 'vue'
import { IonicVueRouter } from '@ionic/vue'
import store from '@/store'

import Home from '../views/Home'
import Login from '../views/Login'
import ForgottenPassword from '../views/ForgottenPassword'
import About from '../views/About'
import Details from '../views/Details'

Vue.use(IonicVueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/search',
    children: [
      {
        path: '/search',
        name: 'search'
      },
      {
        path: '/new',
        name: 'new'
      },
      {
        path: '/actions',
        name: 'actions'
      },
      {
        path: '/calendar',
        name: 'calendar'
      },
      {
        path: '/dashboard',
        name: 'dashboard'
      }
    ]
  },
  {
    path: '/details/:id',
    name: 'details',
    component: Details,
    props: true,
    children: [
      {
        path: '/details/:id/informations',
        name: 'details-informations'
      },
      {
        path: '/details/:id/health',
        name: 'details-health'
      },
      {
        path: '/details/:id/observations',
        name: 'details-observations'
      },
      {
        path: '/details/:id/edit',
        name: 'details-edit'
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/forgotten-password',
    name: 'forgotten-password',
    component: ForgottenPassword
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, _, next) => {
  if (!['login', 'forgotten-password'].includes(to.name) && !store.getters.isAuthenticated) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
