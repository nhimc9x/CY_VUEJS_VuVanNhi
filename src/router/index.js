import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'TodoApp',
    title: 'Todo',
    component: () => import('@/views/TodoApp/TodoApp.vue')
  },
  {
    path: '/shop',
    name: 'ShopApp',
    title: 'Shop',
    component: () => import('@/views/ShopApp/ShopApp.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
