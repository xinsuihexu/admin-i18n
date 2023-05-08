import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/default/index.vue'
import { t } from '@/languages'

const demo: RouteRecordRaw[] = [
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/demo.vue'),
                meta: {
                    breadcrumbs: [{ title: () => t('首页') }],
                },
            },
        ],
    },
]

export default demo
