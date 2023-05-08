<script setup lang="ts">
import { Moon, Sunny } from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()

const value = ref(isDark.value)

const toggleDarkMode = () => {
    const toggleDark = useToggle(isDark)
    toggleDark()
}

</script>

<template>
    <ElSwitch
        v-model="value"
        inline-prompt
        :active-icon="Sunny"
        :inactive-icon="Moon"
        @change="toggleDarkMode"
    />
</template>
