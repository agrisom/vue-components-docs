import { createRouter, createWebHistory, RouteLocationNormalized, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomePage',
    redirect: { name: 'Home' },
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home/Home.vue'),
  },
  // Error paths
  {
    path: '/forbidden',
    name: 'Forbidden',
    component: () => import('../views/Error/Forbidden.vue'),
  },
  {
    path: '/pagenotfound',
    name: 'PageNotFound',
    component: () => import('../views/Error/PageNotFound.vue'),
  },
  {
    path: '/:catchAll(.*)',
    redirect: {name: 'PageNotFound'},
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to: RouteLocationNormalized) => {
  document.title = to.name ? to.name.toString() + ' - AGM' : 'AGM';
});

export default router;