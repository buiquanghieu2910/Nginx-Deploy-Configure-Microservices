import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: () => import('../components/PageNotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
