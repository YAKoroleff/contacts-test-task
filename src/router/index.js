import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/List.vue'
import Contact from '../views/ContactInfo.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact/:index',
    name: 'Contact',
    component: Contact
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
