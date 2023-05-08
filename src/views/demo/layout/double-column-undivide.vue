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
// 方式1 flex
// .demo {
//     display: flex;

//     min-height: 400px;

//     border: 1px solid var(--el-color-primary-light-9);
//     border-radius: 6px;
//     box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);

//     > li:nth-of-type(1) {
//         width: 200px;
//         min-width: 200px;

//         border-right: 1px solid var(--el-color-primary-light-9);
//     }

//     > li:nth-of-type(2) {
//         flex: 1;
//     }
// }

// 方式2 grid
.demo {
    display: grid;

    min-height: 400px;

    border: 1px solid var(--el-color-primary-light-9);
    border-radius: 6px;
    box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);

    grid-template-columns: 200px 1fr;

    > li:nth-of-type(1) {
        border-right: 1px solid var(--el-color-primary-light-9);
    }
}

</style>
