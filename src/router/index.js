import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'products',
        component: () => import('@/views/Products.vue')
      },
      {
        path: 'product/:id',
        component: () => import('@/views/Product.vue')
      },
      {
        path: 'cart',
        component: () => import('@/views/Cart.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('@/views/backend/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('@/views/backend/AdminProducts.vue')
      },
      {
        path: 'orders',
        component: () => import('@/views/backend/AdminOrders.vue')
      },
      {
        path: 'coupons',
        component: () => import('@/views/backend/Coupons.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
