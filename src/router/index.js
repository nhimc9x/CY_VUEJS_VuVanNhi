import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/baitap',
    name: 'BaiTap',
    title: 'Bài Tập',
    component: () => import('@/views/BaiTap/index.vue')
  },
  {
    path: '/bai1',
    name: 'Bai1',
    title: 'Bài 1',
    component: () => import('@/views/Bai1/List.vue')
  },
  {
    path: '/bai2',
    name: 'Bai2',
    title: 'Bài 2',
    component: () => import('@/views/ListApp/CountClick/index.vue')
  },
  {
    path: '/bai3',
    name: 'Bai3',
    title: 'Bài 3',
    component: () => import('@/views/ListApp/FilterProduct/index.vue')
  },
  {
    path: '/bai4',
    name: 'Bai4',
    title: 'Bài 4',
    component: () => import('@/views/ListApp/FormSignUp/index.vue')
  },
  {
    path: '/bai5',
    name: 'Bai5',
    title: 'Bài 5',
    component: () => import('@/views/ListApp/CountDown/index.vue')
  },
  {
    path: '/bai6',
    name: 'Bai6',
    title: 'Bài 6',
    component: () => import('@/views/ListApp/CurrencyExchange/index.vue')
  },
  {
    path: '/bai7',
    name: 'Bai7',
    title: 'Bài 7',
    component: () => import('@/views/ListApp/Blog/index.vue')
  },
  {
    path: '/bai8',
    name: 'Bai8',
    title: 'Bài 8',
    component: () => import('@/views/ListApp/NoteApp/index.vue')
  },
  {
    path: '/bai10',
    name: 'Bai10',
    title: 'Bài 10',
    component: () => import('@/views/ListApp/WeatherApp/index.vue')
  },
  {
    path: '/bai11',
    name: 'Bai11',
    title: 'Bài 11',
    component: () => import('@/views/ListApp/UserPagination/index.vue')
  },
  {
    path: '/bai12',
    name: 'Bai12',
    title: 'Bài 12',
    component: () => import('@/views/ListApp/ShopCart/index.vue')
  },
  {
    path: '/bai13',
    name: 'Bai13',
    title: 'Bài 13',
    component: () => import('@/views/ListApp/DynamicComponent/index.vue')
  },
  {
    path: '/bai14',
    name: 'Bai14',
    title: 'Bài 14',
    component: () => import('@/views/ListApp/FiltersAndSortData/index.vue')
  }
]

export const subRoutes = [
  {
    path: '/bai7/detail',
    name: 'Bai7-detail',
    title: 'Blog detail',
    component: () => import('@/views/ListApp/Blog/BlogDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes, ...subRoutes]
})

export default router
