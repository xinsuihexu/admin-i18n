import NProgress from 'nprogress'
import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'

const routes = Object
    .values(import.meta.glob('../routes/*.ts', { eager: true }))
    .map((route: any) => route.default)
    .flat()

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...routes,
        {
            path: '/404',
            name: '404',
            component: () => import('@/layouts/404.vue'),
        },
    ],
})

// https://router.vuejs.org/zh/guide/
export const install = (app: App) => {
    router.beforeEach((to, from, next) => {
        NProgress.start()

        const hasMatchRoute = to.matched.length > 0
        if (!hasMatchRoute) {
            next('/404')
            return
        }

        const hasToken = '1234'

        if (to.meta.auth && !hasToken) {
            return {
                path: '/login',
                query: { redirect: to.fullPath },
            }
        }
        else {
            next()
        }
    })

    router.afterEach(() => {
        NProgress.done()
    })

    app.use(router)
}
