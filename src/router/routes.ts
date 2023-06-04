export const constantRoutes = [
  {
    path: '/',
    redirect: {
      name: 'Home',
    },
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    name: 'Home',
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: 'NotFound',
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'Login',
  },
]
