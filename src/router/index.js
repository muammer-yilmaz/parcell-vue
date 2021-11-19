import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import("../views/HomePage.vue")
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import("../views/LoginPage.vue")
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: () => import("../views/RegisterPage.vue")
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: () => import("../views/ContactPage.vue")
  },
  {
    path: '/faq',
    name: 'FaqPage',
    component: () => import("../views/FaqPage.vue")
  },
  {
    path: '/customer-service',
    name: 'CustomerServicePage',
    component: () => import("../views/CustomerServicePage.vue")
  },
  {
    path: '/shop',
    name: 'ShopPage',
    component: () => import("../views/ShopPage.vue")
  },
  {
    path: '/promotions',
    name: 'PromotionsPage',
    component: () => import("../views/PromotionsPage.vue")
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: () => import("../views/ProfilePage.vue")
  },

  {
    path: '/password-forgot',
    name: 'PasswordForgot',
    component : () => import("../views/PasswordForgot.vue")
  },
  {
    path: '/plans',
    name: 'PlansPage',
    component : () => import("../views/PlansPage.vue")
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
