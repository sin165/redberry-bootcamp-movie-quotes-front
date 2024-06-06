import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/google/callback',
      name: 'google-callback',
      component: () => import('@/views/AuthGoogleView.vue')
    }
  ]
})

export default router
