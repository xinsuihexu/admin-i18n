<script setup lang="ts">
import { useToggleTheme } from '@/hooks/theme'
import { THEME_COLOR } from '@/settings'

const state = reactive({
    themeColor: THEME_COLOR,
})

const changeColor = (color: any) => {
    useToggleTheme(color)
}
</script>

<template>
    <ElColorPicker
        v-model="state.themeColor"
        @change="changeColor"
    />
</template>
