import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '../style/reset.css'
import '../style/dark.css'
import 'element-plus/dist/index.css'
import 'uno.css'
import '../style/common.css'
import type { App } from 'vue'
import zh from 'element-plus/dist/locale/zh-cn.js'
import en from 'element-plus/dist/locale/en.js'
import { useToggleTheme } from '@/hooks/theme'
import { LANGUAGE, THEME_COLOR } from '@/settings'

const language = localStorage.getItem('_locale') ?? LANGUAGE
const locale = {
    zh,
    en,
}[language]

const registerComponent = (app: App) => {
    app.use(ElementPlus, {
        locale,
    })
}

const registerIcons = (app: App) => {
    for (const [key, component] of Object.entries(ElementPlusIconsVue))
        app.component(key, component)
}

export const install = (app: App) => {
    registerComponent(app)
    registerIcons(app)

    if (THEME_COLOR)
        useToggleTheme(THEME_COLOR)
}
