<script setup lang="ts">
import { injectVoerkaI18n } from '@voerkai18n/vue'
import useLocaleStore from '@/store/locale'
import { LANGUAGE } from '@/settings'

const existLanguage = localStorage.getItem('_locale') as any

const currentLanguage = ref(existLanguage || LANGUAGE)

const i18n = injectVoerkaI18n()
const localeStore = useLocaleStore()

const changeLanguage = (type: any, id = null as any) => {
    currentLanguage.value = type
    localeStore.changeLanguage(type)

    i18n.activeLanguage = type
    i18n.defaultLanguage = type

    localStorage.setItem('_locale', type)

    setTimeout(() => {
        window.location.reload()
    }, 16)
}
</script>

<template>
    <div class="language">
        <button class="i-carbon-translate text-xl" />

        <ul class="language-card">
            <li
                v-for="lng in i18n.languages"
                :key="lng.name"
                class="language-card__item"
                :class="{ 'is-active': lng.name === currentLanguage }"
                @click="changeLanguage(lng.name)"
            >
                {{ lng.title }}({{ lng.name }})
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.language {
    position: relative;

    display: flex;
    align-items: center;

    &::before {
        position: absolute;
        top: 100%;
        right: 0;

        width: 120%;
        height: 20px;

        content: "";
    }

    &:not(:hover) {
        .language-card {
            display: none;
        }
    }
}

.language-card {
    position: absolute;
    z-index: 999999;
    top: 140%;
    right: -90px;

    padding: 10px 0;

    border-radius: 4px;
    background-color: var(--el-bg-color);
    box-shadow: 0 0 2px rgba(0, 0, 0, .08),
    0 4px 16px rgba(0, 0, 0, .08),
    0 8px 32px rgba(0, 0, 0, .04);
}

.language-card__item {
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 180px;
    height: 40px;
    padding: 0 24px;

    cursor: pointer;

    line-height: 40px;

    column-gap: 5px;
}

.language-card__item.is-active {
    color: var(--el-text-color-primary);
    background-color: var(--el-color-primary-light-9);
}

.language-card__item:hover {
    color: var(--el-text-color-primary);
    background-color: var(--el-color-primary-light-9);
}
</style>
