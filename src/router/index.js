import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import GenerateView from '@/views/GenerateView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/generate',
      name: 'generate',
      component: GenerateView,
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView,
    },
  ],
})

export default router
