import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import TodoView from '@/views/TodoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView as any
    },
    {
      path: '/todo/:id',
      name: 'todo',
      component: TodoView as any
    }
  ]
})

export default router
