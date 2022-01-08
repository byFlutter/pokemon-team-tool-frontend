import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Teams from '../views/Teams.vue'
import PKMN from '../views/PKMN.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/teams',
    name: 'Teams',
    component: Teams
  },
  {
    path: '/pkmn',
    name: 'PKMN',
    component: PKMN
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
