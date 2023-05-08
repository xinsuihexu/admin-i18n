import type { App } from 'vue'
import i18nPlugin from '@voerkai18n/vue'
import { VoerkaI18nScope } from '@/languages'

// https://zhangfisher.github.io/voerka-i18n/guide/tools/vue
export const install = (app: App) => {
    app.use(i18nPlugin, {
        i18nScope: VoerkaI18nScope,
        // activeLanguage: 'en',
        // defaultLanguage: 'en',
    })
}
