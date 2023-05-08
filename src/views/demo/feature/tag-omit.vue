<script lang="ts" setup>

</script>

<template>
    <ul class="tag-wrap">
        <li
            v-for="i in 10"
            :key="i"
        >
            {{ i }}
        </li>
    </ul>
</template>

<style lang="less" scoped>
.tag-wrap {
    overflow: hidden;

    max-width: 200px;

    white-space: nowrap;
    text-overflow: ellipsis;

}

.tag-wrap > li {
    display: inline-block;

    margin-right: 8px;
    padding: 8px 12px;

    border: 1px solid var(--el-color-primary);
    border-radius: 8px;
}
</style>
