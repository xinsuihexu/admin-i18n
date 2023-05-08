import { defineStore } from 'pinia'

export type ILanguageType =
'zh' |
'en'

const useLocaleStore = defineStore ({
    id: 'store-locale',

    state: () => {
        return {
            language: '',
            locale: undefined,
        }
    },

    getters: {
        getLanguage: state => state.language,

        getLocale: state => state.locale,
    },

    actions: {
        changeLanguage(language: ILanguageType) {
            this.language = language

            this.changeLocale()
        },

        async changeLocale() {
            const locale = await {
                zh: import('element-plus/dist/locale/zh-cn.js'),
                en: import('element-plus/dist/locale/en.js'),
            }[this.language]

            this.locale = locale
        },
    },
})

export default useLocaleStore
