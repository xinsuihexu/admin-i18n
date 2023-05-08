<script setup lang="ts">
import { t } from '@/languages'
const value = ref(new Date())

</script>

<template>
    <div>
        <h2 class="text-center text-5xl font-bold mt-10">
            {{ t('欢迎来到我的小屋') }}
        </h2>
        <ElCalendar v-model="value" />
    </div>
</template>

<style lang="less" scoped>

</style>
