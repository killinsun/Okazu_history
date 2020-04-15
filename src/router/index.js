/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'

if (!process || process.env.NODE_ENV !== 'test') {
  Vue.use(VueRouter)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requireAuth: true }
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('@/views/CreateEditView.vue'),
    meta: { requireAuth: true }
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import('@/views/CreateEditView.vue'),
    props: true,
    meta: { requireAuth: true }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('@/views/Signin.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/ProfileView.vue')
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

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    const userStatus = store.getters.userStatus
    if (userStatus) {
      next()
    } else {
      next({ name: 'Signin' })
    }
  } else {
    next()
  }
})

export default router
