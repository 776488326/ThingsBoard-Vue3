export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/layouts/index.vue'),
    name: 'Layout',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
      },
      {
        path: '/alarm',
        component: () => import('@/views/alarm/index.vue'),
        name: 'Alarm',
      },
      {
        path: '/dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
      },
      {
        path: "/device",
        component: ()=>import("@/views/entity/device/index.vue"),
        name: "Device"
      },
      {
        path: "/asset",
        component: ()=>import("@/views/entity/asset/index.vue"),
        name: "Asset"
      },
      {
        path: "/entityView",
        component: ()=>import("@/views/entity/entity_view/index.vue"),
        name: "EntityView"
      },
      {
        path: '/assetConfig',
        component: () => import('@/views/config/asset_config/index.vue'),
        name: 'AssetConfig',
      },
      {
        path: '/deviceConfig',
        component: () => import('@/views/config/device_config/index.vue'),
        name: 'DeviceConfig',
      },
      {
        path: '/user',
        component: () => import('@/views/user/index.vue'),
        name: 'User',
      },
      {
        path: '/rulechain',
        component: () => import('@/views/rulechain/index.vue'),
        name: 'Rulechain',
      },
      {
        path: '/instances',
        component:()=>import("@/views/edge_manage/instances/index.vue"),
        name: "Instance"
      },
      {
        path: '/rulechainTemplate',
        component:()=>import("@/views/edge_manage/rulechain_template/index.vue"),
        name: "RulechainTemplate"
      },
      {
        path: '/ota',
        component:()=>import("@/views/advanced_feature/ota/index.vue"),
        name: "Ota"
      },
      {
        path: '/versionControl',
        component:()=>import("@/views/advanced_feature/version_control/index.vue"),
        name: "VersionControl"
      },
      {
        path: '/widget',
        component:()=>import("@/views/resources/widget/index.vue"),
        name: "Widget"
      },
      {
        path: '/resource',
        component:()=>import("@/views/resources/resource/index.vue"),
        name: "Resource"
      },
      {
        path: '/notification',
        component: () => import('@/views/notification/index.vue'),
        name: 'Notification',
      },
      {
        path: '/apistatistics',
        component: () => import('@/views/api_statistics/index.vue'),
        name: 'ApiStatistics',
      },
      {
        path: '/setting',
        component: () => import('@/views/setting/index.vue'),
        name: 'Setting',
      },
      {
        path: '/auditLog',
        component:()=>import("@/views/secure/audit_log/index.vue"),
        name: "AuditLog"
      },
    ],
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
  {
    path: '/:notFound(.*)',
    redirect: '/404',
  },
]
