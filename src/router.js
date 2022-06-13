import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '@/views/HomePage';
import ProductPage from '@/views/ProductPage';
import AllProductsPage from '@/views/AllProductsPage';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/productPage',
    name: 'productPage',
    component: ProductPage
  },
  {
    path: '/AllProductsPage',
    name: 'AllProductsPage',
    component: AllProductsPage
  },
];
 

export const router = createRouter({
  history: createWebHistory(),
  routes,
});