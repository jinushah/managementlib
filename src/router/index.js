import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/DashBoard.vue'
import Available from '../components/available.vue'
import Total from '../components/total.vue'
import Rent from '../components/rent.vue'

import Premium from '../components/premium.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/account',
    name: 'account',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AccountView.vue')
  },
  {
    path: '/available',
    name:'available',
    component:Available
  },
  { 
    path:'/total', 
    name:'total',
    component:Total
  },
  {
    path:'/rent',
    name:'rent',
    component:Rent
  },
  {
    path:'/premium',
    name:'premium',
    component:Premium
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
