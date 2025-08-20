import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/DashboardPage.vue') }],
  },
  {
    path: '/hours',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/HoursPage.vue') }],
  },
  {
    path: '/forecast',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/DaysPage.vue') }],
  },
  {
    path: '/locations',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/LocationsPage.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
