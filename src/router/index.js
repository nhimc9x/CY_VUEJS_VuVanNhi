import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/bai1',
    name: 'bai1',
    title: 'Bài 1',
    component: () => import('../views/bai1/Bai1.vue')
  },
  {
    path: '/bai2',
    name: 'bai2',
    title: 'Bài 2',
    component: () => import('../views/bai2/Bai2.vue')
  },
  {
    path: '/bai3',
    name: 'bai3',
    title: 'Bài 3',
    component: () => import('../views/bai3/Bai3.vue')
  },
  {
    path: '/bai4',
    name: 'bai4',
    title: 'Bài 4',
    component: () => import('../views/bai4/Bai4.vue')
  },
  {
    path: '/bai5',
    name: 'bai5',
    title: 'Bài 5',
    component: () => import('../views/bai5/Bai5.vue')
  },
  {
    path: '/bai6',
    name: 'bai6',
    title: 'Bài 6',
    component: () => import('../views/bai6/Bai6.vue')
  },
  {
    path: '/bai7',
    name: 'bai7',
    title: 'Bài 7',
    component: () => import('../views/bai7/Bai7.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
