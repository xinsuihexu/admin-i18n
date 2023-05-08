import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/default/index.vue'
import { t } from '@/languages'

const demo: RouteRecordRaw[] = [
    {
        path: '/demo',
        component: Layout,
        redirect: '/demo/layout/divide',
        children: [
            {
                path: '/demo/layout/divide',
                name: 'demoLayoutDivide',
                component: () => import('@/views/demo/layout/divide.vue'),
                meta: {
                    breadcrumbs: [
                        { title: () => t('布局') },
                        { title: () => t('均分列') },
                    ],
                },
            },
            {
                path: '/demo/layout/reactive',
                name: 'demoLayoutReactive',
                component: () => import('@/views/demo/layout/divide-reactive.vue'),
                meta: {
                    breadcrumbs: [
                        { title: () => t('布局') },
                        { title: () => t('响应式均分列') },
                    ],
                },
            },
            {
                path: '/demo/layout/double-column-undivide',
                name: 'demoLayoutDoubleColumnUndivide',
                component: () => import('@/views/demo/layout/double-column-undivide.vue'),
                meta: {
                    breadcrumbs: [
                        { title: () => t('布局') },
                        { title: () => t('两列不均分') },
                    ],
                },
            },
            {
                path: '/demo/layout/double-column-undivide-reactive',
                name: 'demoLayoutDoubleColumnUndivideReactive',
                component: () => import('@/views/demo/layout/double-column-undivide-reactive.vue'),
                meta: {
                    breadcrumbs: [
                        { title: () => t('布局') },
                        { title: () => t('响应式两列不均分') },
                    ],
                },
            },
            {
                path: '/demo/layout/chalice-1',
                name: 'demoLayoutChalice1',
                component: () => import('@/views/demo/layout/chalice-1.vue'),
                meta: {
                    breadcrumbs: [
                        { title: () => t('布局') },
                        { title: () => t('外框搭建-1') },
                    ],
                },
            },
            {
                path: '/demo/layout/chalice-2',
                name: 'demoLayoutChalice2',
                component: () => import('@/views/demo/layout/chalice-2.vue'),
                meta: {
                    breadcrumbs: [
                        { title: () => t('布局') },
                        { title: () => t('外框搭建-2') },
                    ],
                },
            },
            {
                path: '/demo/layout/waterfall',
                name: 'demoLayoutWaterfall',
                component: () => import('@/views/demo/layout/waterfall.vue'),
                meta: {
                    breadcrumbs: [
                        { title: () => t('布局') },
                        { title: () => t('瀑布流') },
                    ],
                },
            },

            {
                path: '/demo/feature/tag-omit',
                name: 'demoFeatureTagOmit',
                component: () => import('@/views/demo/feature/tag-omit.vue'),
                meta: {
                    breadcrumbs: [
                        { title: () => t('小功能') },
                        { title: () => t('标签省略') },
                    ],
                },
            },
            {
                path: '/demo/feature/multi-line-text-expand',
                name: 'demoFeatureMultiLineTextExpand',
                component: () => import('@/views/demo/feature/multi-line-text-expand.vue'),
                meta: {
                    breadcrumbs: [
                        { title: () => t('小功能') },
                        { title: () => t('多行文本展开缩起') },
                    ],
                },
            },
            {
                path: '/demo/feature/page-search',
                name: 'demoFeaturePageSearch',
                component: () => import('@/views/demo/feature/page-search/index.vue'),
                meta: {
                    breadcrumbs: [
                        { title: () => t('小功能') },
                        { title: () => t('页面条件查询') },
                    ],
                },
            },

            {
                path: '/demo/feature/coupon',
                name: 'demoFeatureCoupon',
                component: () => import('@/views/demo/feature/coupon/index.vue'),
                meta: {
                    breadcrumbs: [
                        { title: () => t('小功能') },
                        { title: () => t('卡券') },
                    ],
                },
            },

            {
                path: '/demo/feature/slide-linkage',
                name: 'demoFeatureSlideLinkage',
                component: () => import('@/views/demo/feature/slide-linkage/index.vue'),
                meta: {
                    breadcrumbs: [
                        { title: () => t('小功能') },
                        { title: () => t('滑动联动') },
                    ],
                },
            },

            {
                path: '/demo/feature/text-omit',
                name: 'demoFeatureTextOmit',
                component: () => import('@/views/demo/feature/text-omit.vue'),
                meta: {
                    breadcrumbs: [
                        { title: () => t('小功能') },
                        { title: () => t('文本省略') },
                    ],
                },
            },

            {
                path: '/demo/feature/slide-sticky',
                name: 'demoFeatureSlideSticky',
                component: () => import('@/views/demo/feature/slide-sticky/index.vue'),
                meta: {
                    breadcrumbs: [
                        { title: () => t('小功能') },
                        { title: () => t('滑动黏性') },
                    ],
                },
            },

            {
                path: '/demo/feature/waterfall',
                name: 'demoFeatureWaterfall',
                component: () => import('@/views/demo/feature/waterfall/index.vue'),
                meta: {
                    breadcrumbs: [
                        { title: () => t('小功能') },
                        { title: () => t('瀑布流上拉加载') },
                    ],
                },
            },
        ],
    },
]

export default demo
