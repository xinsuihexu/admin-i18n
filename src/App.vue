<script setup lang="ts">
import { injectVoerkaI18n } from '@voerkai18n/vue'
import { LANGUAGE } from './settings'
import useLocaleStore from '@/store/locale'

const existLanguage = localStorage.getItem('_locale') as any

const i18n = injectVoerkaI18n()

i18n.activeLanguage = existLanguage || LANGUAGE
i18n.defaultLanguage = existLanguage || LANGUAGE

const localeStore = useLocaleStore()

const locale = computed(() => {
    return localeStore.getLocale
})

</script>

<template>
    <ElConfigProvide
        :key="i18n.activeLanguage"
        :locale="locale"
    >
        <RouterView />
    </ElConfigProvide>
</template>
