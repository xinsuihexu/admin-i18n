<script setup lang="ts">
const route = useRoute()

const breadcrumbs = computed(() => {
    return (route.meta.breadcrumbs || []) as { title: Function; path?: string }[]
})
</script>

<template>
    <ElBreadcrumb separator="/">
        <ElBreadcrumbItem
            v-for="(item, index) in breadcrumbs"
            :key="index"
            :to="item.path ? { path: item.path } : undefined"
        >
            {{ item.title() }}
        </ElBreadcrumbItem>
    </ElBreadcrumb>
</template>>
