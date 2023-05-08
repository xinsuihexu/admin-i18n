import { useTitle } from '@vueuse/core'
import type { App } from 'vue'
import { LANGUAGE, TITLE } from './settings'
import type { ILanguageType } from './store/locale'
import useLocaleStore from './store/locale'

const existLanguage = localStorage.getItem('_locale') as any

// install all modules under `modules/`
const installModules = (app: App) => {
    Object.values(import.meta.glob('./modules/*.ts', { eager: true })).forEach((i: any) => i.install?.(app))
}

export const changeLanguage = async (language: ILanguageType) => {
    const localeStore = useLocaleStore()
    localeStore.changeLanguage(language)
}

export default async function init(app: App) {
    installModules(app)
    useTitle(TITLE)
    await changeLanguage(existLanguage || LANGUAGE)
}
