import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/SignInView.vue'
import AboutView from '../views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sign-in',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
