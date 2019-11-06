import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/Login.vue'
import home from '../views/Home.vue'
import add from '../views/add.vue'
import edit from '../views/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/add',
    name: 'add',
    component: add
  },
  {
    path: '/edit',
    name: 'edit',
    component: edit
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    children:[
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/List.vue')
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/User.vue')
      },
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
