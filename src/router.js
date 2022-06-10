import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '@/views/HomePage';
import ProductPage from '@/views/ProductPage';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
    //component: () => import('@/views/HomePage'), // 동적 import
  },
  {
    path: '/productPage',
    name: 'productPage',
    component: () => import('@/views/ProductPage'),
  },
];


export const router = createRouter({
  history: createWebHistory(),
  routes,
});