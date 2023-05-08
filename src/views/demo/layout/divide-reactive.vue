<script setup lang="ts">
const list = computed(() => {
    return new Array(30).fill(0).map((_, i) => ({ id: i, title: `标题${i}` }))
})
</script>

<template>
    <h1 class="font-bold text-2xl">
        缩放屏幕查看效果
    </h1>

    <ul class="demo">
        <li
            v-for="item in list"
            :key="item.id"
        >
            {{ item.title }}
        </li>
    </ul>
</template>

<style lang="less" scoped>
.demo {
    display: grid;

    grid-gap: 50px;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

    > li {
        position: relative;

        overflow: hidden;

        height: 150px;

        border-radius: 6px;
        background-color: var(--el-color-primary-light-9);
        box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);
    }
}

</style>
