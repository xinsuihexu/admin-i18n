/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />
/// <reference types="vite-plugin-pages/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module '*.md' {
    import type { ComponentOptions } from 'vue'
    const Component: ComponentOptions
    export default Component
}

declare module 'element-plus/dist/locale/*.js'

declare module '@voerkai18n/vue'
declare module '@voerkai18n/runtime'

