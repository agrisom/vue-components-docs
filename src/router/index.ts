import { createRouter, createWebHistory, RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
import { i18n } from '../lang/configI18n';

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
    name: 'PageForbidden',
    component: () => import('../views/Error/PageForbidden.vue'),
  },
  {
    path: '/notfound',
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
  document.title = to.name ? i18n.global.t('pages.' + to.name.toString(), to.name.toString()) + ' - agrisom' : 'agrisom';
});

export default router;