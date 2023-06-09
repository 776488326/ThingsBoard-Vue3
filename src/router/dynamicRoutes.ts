export default [
    {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
        meta: {
            title: "首页",
            authorization: ["Admin", "User", "Tenant"],
        },
    },
    {
        path: '/alarm',
        component: () => import('@/views/alarm/index.vue'),
        name: 'Alarm',
        meta: {
            title: "告警",
            authorization: ["Admin", "User", "Tenant"],
        },
    },
    {
        path: '/dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
            title: "仪表板",
            authorization: ["Admin", "User", "Tenant"],
        },
    },
    {
        path: "",
        name: "Entity",
        meta: {
            title: "实体",
            authorization: ["Admin", "User", "Tenant"],
        },
        children: [
            {
                path: '/device',
                component: () => import('@/views/entity/device/index.vue'),
                name: 'Device',
                meta: {
                    title: "设备",
                    authorization: ["Admin", "User", "Tenant"],
                },
            },
            {
                path: '/asset',
                component: () => import('@/views/entity/asset/index.vue'),
                name: 'Asset',
                meta: {
                    title: "资产",
                    authorization: ["Admin", "User", "Tenant"],
                },
            },
            {
                path: '/entityView',
                component: () => import('@/views/entity/entity_view/index.vue'),
                name: 'EntityView',
                meta: {
                    title: "实体视图",
                    authorization: ["Admin", "User", "Tenant"],
                },
            },
        ]
    },
    {
        path: "",
        name: "Config",
        meta: {
            title: "配置",
            authorization: ["Admin", "User", "Tenant"],
        },
        children: [
            {
                path: '/assetConfig',
                component: () => import('@/views/config/asset_config/index.vue'),
                name: 'AssetConfig',
                meta: {
                    title: "资产配置",
                    authorization: ["Admin", "User", "Tenant"],
                },
            },
            {
                path: '/deviceConfig',
                component: () => import('@/views/config/device_config/index.vue'),
                name: 'DeviceConfig',
                meta: {
                    title: "设备配置",
                    authorization: ["Admin", "User", "Tenant"],
                },
            },
        ]
    },
    {
        path: '/user',
        component: () => import('@/views/user/index.vue'),
        name: 'User',
        meta: {
            title: "客户",
            authorization: ["Admin", "User", "Tenant"],
        },
    },
    {
        path: '/rulechain',
        component: () => import('@/views/rulechain/index.vue'),
        name: 'Rulechain',
        meta: {
            title: "规则链库",
            authorization: ["Admin", "User", "Tenant"],
        },
    },
    {
        path: "",
        name: "EdgeManage",
        meta: {
            title: "边缘管理",
            authorization: ["Admin", "User", "Tenant"],
        },
        children: [
            {
                path: '/instances',
                component: () => import('@/views/edge_manage/instances/index.vue'),
                name: 'Instance',
                meta: {
                    title: "实例",
                    authorization: ["Admin", "User", "Tenant"],
                },
            },
            {
                path: '/rulechainTemplate',
                component: () =>
                    import('@/views/edge_manage/rulechain_template/index.vue'),
                name: 'RulechainTemplate',
                meta: {
                    title: "规则链模板",
                    authorization: ["Admin", "User", "Tenant"],
                },
            },
        ]
    },
    {
        path: "",
        name: "Advanced",
        meta: {
            title: "Advanced features"
        },
        children: [
            {
                path: '/ota',
                component: () => import('@/views/advanced_feature/ota/index.vue'),
                name: 'Ota',
                meta: {
                    title: "OTA",
                    authorization: ["Admin", "User", "Tenant"],
                },
            },
            {
                path: '/versionControl',
                component: () =>
                    import('@/views/advanced_feature/version_control/index.vue'),
                name: 'VersionControl',
                meta: {
                    title: "版本控制",
                    authorization: ["Admin", "User", "Tenant"],
                },
            },
        ]
    },
    {
        path: "",
        name: "Resources",
        meta: {
            title: "Resources",
            authorization: ["Admin", "User", "Tenant"],
        },
        children: [
            {
                path: '/widget',
                component: () => import('@/views/resources/widget/index.vue'),
                name: 'Widget',
                meta: {
                    title: "小部件",
                    authorization: ["Admin", "User", "Tenant"],
                },
            },
            {
                path: '/resource',
                component: () => import('@/views/resources/resource/index.vue'),
                name: 'Resource',
                meta: {
                    title: "资源",
                    authorization: ["Admin", "User", "Tenant"],
                },
            },
        ]
    },
    {
        path: '/notification',
        component: () => import('@/views/notification/index.vue'),
        name: 'Notification',
        meta: {
            title: "通知中心",
            authorization: ["Admin", "User", "Tenant"],
        },
    },
    {
        path: '/apistatistics',
        component: () => import('@/views/api_statistics/index.vue'),
        name: 'ApiStatistics',
        meta: {
            title: "API统计",
            authorization: ["Admin", "User", "Tenant"],
        },
    },
    {
        path: '/setting',
        component: () => import('@/views/setting/index.vue'),
        name: 'Setting',
        meta: {
            title: "设置",
            authorization: ["Admin", "User", "Tenant"],
        },
    },
    {
        path: "",
        name: "Secure",
        meta: {
            title: "安全",
            authorization: ["Admin", "User", "Tenant"],
        },
        children: [
            {
                path: '/auditLog',
                component: () => import('@/views/secure/audit_log/index.vue'),
                name: 'AuditLog',
                meta: {
                    title: "审计日志",
                    authorization: ["Admin", "User", "Tenant"],
                },
            },
        ]
    }
]