<script setup lang="ts">

</script>

<template>
    <h1 class="font-bold text-2xl">
        缩放屏幕查看效果
    </h1>

    <ul class="demo">
        <li>我是左侧栏</li>
        <li>我是右侧栏</li>
    </ul>
</template>

<style lang="less" scoped>
.demo {
    display: flex;

    min-height: 400px;

    border: 1px solid var(--el-color-primary-light-9);
    border-radius: 6px;
    box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);

    > li:nth-of-type(1) {
        width: 400px;
        min-width: 400px;

        border-right: 1px solid var(--el-color-primary-light-9);
    }

    > li:nth-of-type(2) {
        flex: 1;
    }
}

@media screen and (max-width: 1280px) {
    .demo {
        flex-wrap: wrap;
        & > li:nth-of-type(1) {
            width: 100%;

            border-bottom: 1px solid var(--el-color-primary-light-9);
        }
    }
}

</style>
