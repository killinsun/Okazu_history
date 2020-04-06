import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'Create a new recipie',
    component: () => import('@/views/CreateEditView.vue')
  },
  {
    path: '/firebase-testing',
    name: 'Firebase test page',
    component: () => import('@/views/FirebaseTesting.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
