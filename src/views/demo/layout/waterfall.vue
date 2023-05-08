<script lang="ts" setup>
import Macy from 'macy'

const state = reactive({
    masonry: null,
    list: new Array(30).fill(0).map((_, i) => ({
        id: i,
        title: `元素${i}`,
        width: `${(i + 1) * 10}px`,
        height: `${(i + 1) * 20}px`,
    })),
})

const initMacy = () => {
    const config = {
        trueOrder: false,
        waitForImages: true,
        useOwnImageLoader: false,
        debug: false,
        margin: {
            x: 32,
            y: 18,
        },
        columns: 6,
        breakAt: {
            1900: {
                columns: 6,
            },
            1650: {
                columns: 5,
            },
            1400: {
                columns: 4,
            },
            960: {
                columns: 2,
            },
        },
    }

    state.masonry = new Macy({
        ...config,
        container: '.container',
    })

    state.masonry.runOnImageLoad(() => {
        state.masonry.recalculate(true)
    }, true)
}

onMounted(() => {
    initMacy()
})
</script>

<template>
    <div class="page">
        <ul class="container">
            <div
                v-for="item in state.list"
                :key="item.id"
                :item="item"
                class="item"
                :style="{ width: item.width, height: item.height }"
            >
                {{ item.title }}
            </div>
        </ul>
    </div>
</template>

<style lang="less" scoped>
.item {
    min-height: 100px;

    background-color: var(--el-color-primary);
}
</style>
