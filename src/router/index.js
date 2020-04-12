import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

if (!process || process.env.NODE_ENV !== 'test') {
  Vue.use(VueRouter)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('@/views/CreateEditView.vue')
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import('@/views/CreateEditView.vue')
  },
  {
    path: '/firebase-testing',
    name: 'FirebaseTestPage',
    component: () => import('@/views/FirebaseTesting.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
