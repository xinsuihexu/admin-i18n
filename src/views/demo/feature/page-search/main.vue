<script lang="ts" setup>
import dayjs from 'dayjs'

interface IProps {
    value: any
    list: any[]
    gap?: number
    defaultExpand?: boolean
    triggerHideRow?: number
    minItemWidth?: number
}

// const emit = defineEmits<SE<{
//     'update:value': [val: any]
//     'update:search': [val: any]
//     'search': [val: any]
//     'reset': [val: any]
// }>>()
const emit = defineEmits(['update:value', 'update:search', 'search', 'reset'])

const {
    value,
    list,
    gap,
    defaultExpand,
    triggerHideRow,
    minItemWidth,
} = withDefaults(
    $defineProps<IProps>(), {
        gap: 12,
        defaultExpand: true,
        triggerHideRow: 2,
        minItemWidth: 220,
    },
)

const state = reactive({
    expand: defaultExpand,
    itemWidth: 0,
    containerWidth: 0,
})

const total = $computed(() => {
    return list.reduce((acc, { props }) => {
        acc += props.column || 1

        return acc
    }, 0)
})

const rowGaps = $computed(() => {
    return (state.containerWidth / state.itemWidth - 1) * gap
})

const isShowExpand = $computed(() => {
    return total / ((state.containerWidth - rowGaps) / state.itemWidth) > triggerHideRow
})

const hideIndex = $computed(() => {
    if (state.containerWidth !== 0 && isShowExpand && !state.expand) {
        if (state.containerWidth === state.itemWidth) {
            return triggerHideRow
        }
        else {
            const boundaryIndex = ((state.containerWidth - rowGaps) / state.itemWidth) * triggerHideRow

            const columnCount = list.slice(0, boundaryIndex).reduce((acc, { props }) => {
                acc += props.column > 1 ? props.column : 0

                return acc
            }, 0)

            return boundaryIndex - columnCount / 2
        }
    }

    return list.length
})

const firstSingleIndex = $computed(() => {
    return list.findIndex(({ props }) => !props.column || props.column === 1)
})

const customStyle = computed(() => {
    return {
        '--grid-gap': `${gap}px`,
        '--min-item-width': `${minItemWidth}px`,
    }
})

const setContainerWidth = () => {
    const containerEl = document.querySelector('.page-search__content')
    const containerRect = containerEl?.getBoundingClientRect()
    state.containerWidth = containerRect?.width as number

    const itemEls = document.querySelectorAll('.page-search__item')
    const itemRect = itemEls?.[firstSingleIndex]?.getBoundingClientRect()

    state.itemWidth = itemRect?.width
}

const getForm = (type = 'format') => {
    const result = list.reduce((acc, { componentName, field, props }) => {
        if (componentName === 'SearchDatePicker') {
            if (type !== 'format')
                props.value = []

            const [startDateKey, endDateKey] = field
            const [startDateValue, endDateValue] = props.value

            // if (props.type === 'dateRange') {
            //     acc[startDateKey] = startDateValue ? Date.parse(startDateValue) as any : ''
            //     acc[endDateKey] = endDateValue ? Date.parse(dayjs(endDateValue).add(1, 'days')) : '' as any
            // }

            // if (props.type === 'datetimeRange') {
            //     acc[startDateKey] = startDateValue ? Date.parse(startDateValue) as any : ''
            //     acc[endDateKey] = endDateValue ? Date.parse(endDateValue) as any : ''
            // }
        }
        else {
            if (type !== 'format')
                props.value = ''

            acc[field] = props.value
        }

        return acc
    }, {})

    return result
}

const onSearch = () => {
    const result = getForm()

    emit('update:value', result)
    emit('search')
}

const onReset = () => {
    const result = getForm('reset')

    emit('update:value', result)
    emit('reset')
}

const onExpand = () => {
    if (state.expand) {
        state.expand = false
        setContainerWidth()
    }
    else {
        state.expand = true
    }
}

onMounted(() => {
    setContainerWidth()

    window.addEventListener('resize', setContainerWidth)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', setContainerWidth)
})
</script>

<template>
    <div
        class="page-search"
        :style="customStyle"
    >
        <div
            ref="searchContent"
            class="page-search__content"
        >
            <template
                v-for="(item, index) in list"
                :key="item.index"
            >
                <Component
                    :is="item.component"
                    v-show="index < hideIndex"
                    v-bind="item.props"
                    v-model:value="item.props.value"
                    v-on="item.listeners"
                />
            </template>
        </div>

        <div class="page-search__btn">
            <ElButton
                style="width: 50px"
                type="primary"
                @click="onSearch"
            >
                <i class="i-carbon-search" />
            </ElButton>

            <ElButton @click="onReset">
                <i class="i-carbon-reset" />
            </ElButton>

            <ElButton
                v-if="isShowExpand"
                @click="onExpand"
            >
                <i :class="state.expand ? 'i-carbon-chevron-up' : 'i-carbon-chevron-down'" />
            </ElButton>
        </div>
    </div>
</template>

<style lang="less" scoped>
.page-search {
    display: flex;

    padding-top: 2px;
    padding-bottom: 8px;
}

.page-search__content {
    display: grid;
    flex: 1;

    margin-right: 12px;

    grid-auto-flow: row dense;
    grid-gap: var(--grid-gap);
    grid-template-columns: repeat(auto-fit, minmax(var(--min-item-width), 1fr));
}

.page-search__btn {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    width: fit-content;
    margin-left: auto;

    column-gap: 8px;
    row-gap: 8px;
}

// /deep/ .el-button {
//     min-width: 30px;
//     padding: 0;
// }

// /deep/ .el-button + .el-button {
//     margin-left: 0;
// }

:deep(.el-button + .el-button) {
    margin-left: 0;
}
</style>
