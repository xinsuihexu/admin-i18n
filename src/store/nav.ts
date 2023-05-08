import { defineStore } from 'pinia'
import { cloneDeep } from 'lodash'
import { t } from '@/languages'

export interface INav {
    index: string
    title: Function
    to?: string
    href?: string
    icon?: string
    children?: INav[]
}

interface IState {
    navs: INav[]
}

// @unocss-include
export const useNavStore = defineStore(
    'nav-store',
    () => {
        const state = reactive<IState>({
            navs: [
                {
                    index: '1',
                    title: () => t('首页'),
                    icon: 'i-carbon-home',
                    to: '/',
                },
                {
                    index: '2',
                    title: () => t('实用案例'),
                    icon: 'i-carbon-repo-source-code',
                    children: [
                        {
                            index: '2-1',
                            title: () => t('布局'),
                            children: [
                                {
                                    index: '2-1-1',
                                    title: () => t('均分列'),
                                    to: '/demo/layout/divide',
                                },
                                {
                                    index: '2-1-2',
                                    title: () => t('响应式均分列'),
                                    to: '/demo/layout/reactive',
                                },
                                {
                                    index: '2-1-3',
                                    title: () => t('两列不均分'),
                                    to: '/demo/layout/double-column-undivide',
                                },
                                {
                                    index: '2-1-4',
                                    title: () => t('响应式两列不均分'),
                                    to: '/demo/layout/double-column-undivide-reactive',
                                },
                                {
                                    index: '2-1-5',
                                    title: () => t('外框搭建-1'),
                                    to: '/demo/layout/chalice-1',
                                },
                                {
                                    index: '2-1-7',
                                    title: () => t('外框搭建-2'),
                                    to: '/demo/layout/chalice-2',
                                },
                                {
                                    index: '2-1-8',
                                    title: () => t('瀑布流'),
                                    to: '/demo/layout/waterfall',
                                },
                            ],
                        },
                        {
                            index: '2-2',
                            title: () => t('小功能'),
                            children: [
                                {
                                    index: '2-2-1',
                                    title: () => t('标签省略'),
                                    to: '/demo/feature/tag-omit',
                                },
                                {
                                    index: '2-2-2',
                                    title: () => t('多行文本展开缩起'),
                                    to: '/demo/feature/multi-line-text-expand',
                                },
                                {
                                    index: '2-2-3',
                                    title: () => t('页面条件查询'),
                                    to: '/demo/feature/page-search',
                                },
                                {
                                    index: '2-2-4',
                                    title: () => t('卡劵'),
                                    to: '/demo/feature/coupon',
                                },
                                {
                                    index: '2-2-5',
                                    title: () => t('滑动粘性'),
                                    to: '/demo/feature/slide-sticky',
                                },
                                {
                                    index: '2-2-6',
                                    title: () => t('滑动联动'),
                                    to: '/demo/feature/slide-linkage',
                                },
                                {
                                    index: '2-2-7',
                                    title: () => t('文本省略'),
                                    to: '/demo/feature/text-omit',
                                },
                                {
                                    index: '2-2-8',
                                    title: () => t('瀑布流上拉加载'),
                                    to: '/demo/feature/waterfall',
                                },
                            ],
                        },
                    ],
                },
            ],
        })

        return {
            navs: cloneDeep(state.navs),
        }
    },
)

export default useNavStore
