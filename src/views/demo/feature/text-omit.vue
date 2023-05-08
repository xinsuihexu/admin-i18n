<script lang="ts" setup>

</script>

<template>
    <div class="page">
        <div class="demo1">
            hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world
        </div>

        <div class="demo2">
            hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world
        </div>

        <div class="demo3">
            <div class="demo3__title">
                hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world
            </div>

            <ElIcon><ArrowRight /></ElIcon>
        </div>
    </div>
</template>

<style lang="less" scoped>
.demo1 {
    overflow: hidden;

    max-width: 300px;
    padding: 4px 8px;

    white-space: nowrap;
    text-overflow: ellipsis;

    border: 1px solid var(--el-color-primary);
}

.demo2 {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;

    max-width: 250px;
    margin: 16px 0;
    padding: 4px 8px;

    text-overflow: ellipsis;
    word-wrap: break-word;

    border: 1px solid var(--el-color-primary);

    -webkit-line-clamp: 2;
}

.demo3 {
    display: flex;
    align-items: center;

    max-width: 500px;
    padding: 4px 6px;

    border: 1px solid var(--el-color-primary);

    gap: 1rem;
}

.demo3__title {
    overflow: hidden;

    min-width: 0;

    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
