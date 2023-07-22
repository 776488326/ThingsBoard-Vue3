import 'vue-router'
declare module 'vue-router' {
  interface RouteMeta {
    authorization: Array<string>
    title: String
  }
}
type To = {
  meta: {
    isShow: Boolean
  }
}
type From = {
  name: String
}

import children from './dynamicRoutes.ts'
import type { RouteRecordRaw } from 'vue-router'
export default [
  {
    path: '/',
    component: () => import('@/layouts/index.vue'),
    name: 'Layout',
    redirect: '/home',
    meta: {
      authorization: ['Admin', 'User', 'Tenant'],
      isShow: false,
    },
    children,
    beforeEnter: (to: To, from: From) => {
      if (from.name === 'Login') {
        to.meta.isShow = true
      }
    },
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: 'NotFound',
    meta: {
      authorization: ['Admin', 'User', 'Tenant'],
    },
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'Login',
    meta: {
      authorization: ['Admin', 'User', 'Tenant'],
    },
  },
  {
    path: '/:notFound(.*)',
    redirect: '/404',
    meta: {
      authorization: ['Admin', 'User', 'Tenant'],
    },
  },
] as RouteRecordRaw[]
