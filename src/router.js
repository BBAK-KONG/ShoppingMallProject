import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '@/views/HomePage';
import ProductPage from '@/views/ProductPage';
import AllProductsPage from '@/views/AllProductsPage';
import LoginPage from '@/views/LoginPage';
import SignUpPage from '@/views/SignUpPage';
import PurchasePage from '@/views/PurchasePage';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/ProductPage',
    name: 'ProductPage',
    component: ProductPage
  },
  {
    path: '/AllProductsPage',
    name: 'AllProductsPage',
    component: AllProductsPage
  },
  {
    path: '/LoginPage',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/SignUpPage',
    name: 'SignUpPage',
    component: SignUpPage
  },
  {
    path: '/PurchasePage',
    name: 'PurchasePage',
    component: PurchasePage
  },
];


export const router = createRouter({
  history: createWebHistory(),
  routes,
});