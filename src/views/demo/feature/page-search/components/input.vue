<script lang="ts" setup>
interface IProps {
    title: string
    value: string | number
    column: number
}

// const emit = defineEmits<SE<{
//     'update:value': [val: any]
// }>>()

const emit = defineEmits(['update:value'])

const { title, value, column } = $defineProps<IProps>()

const customValue = computed({
    get() {
        return value
    },
    set(v) {
        console.log({ v })
        emit('update:value', v)
    },
})

const customStyle = computed(() => {
    return {
        '--grid-column': column,
    }
})
</script>

<script lang="ts">
export default {
    name: 'SearchInput',
}
</script>

<template>
    <div
        class="page-search__item"
        :style="customStyle"
    >
        <div class="item-title">
            {{ title }}
        </div>

        <ElInput
            v-model="customValue"
            v-bind="$attrs"
        />
    </div>
</template>

<style lang="less" scoped>
.page-search__item {
    display: flex;

    border: 1px solid #e5e6ec;
    border-radius: 2px;

    grid-column: span var(--grid-column);
}

.item-title {
    display: grid;

    min-width: fit-content;
    padding-left: 8px;

    color: #999;

    font-size: 14px;
    font-weight: 400;

    place-items: center;
}

:deep(.el-input__wrapper, .el-input__wrapper.is_focus, .el-input__wrapper:hover) {
    border: none;
    box-shadow: none;
}
</style>
