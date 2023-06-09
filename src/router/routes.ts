import "vue-router"
declare module "vue-router" {
  interface RouteMeta {
    authorization: Array<string>,
    title: String
  }
}

import children from "./dynamicRoutes.ts"
export default [
  {
    path: '/',
    component: () => import('@/layouts/index.vue'),
    name: 'Layout',
    redirect: "/home",
    meta: {
      authorization: ["Admin", "User", "Tenant"],
    },
    children
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: 'NotFound',
    meta: {
      authorization: ["Admin", "User", "Tenant"],
    },
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'Login',
    meta: {
      authorization: ["Admin", "User", "Tenant"],
    },
  },
  {
    path: '/:notFound(.*)',
    redirect: '/404',
    meta: {
      authorization: ["Admin", "User", "Tenant"],
    },
  },
]
