<script lang="ts" setup>
import Macy from 'macy'
import Observer from './observer.vue'

const state = reactive({
    isLoading: false,
    masonry: null,
    list: [],
})

const sleep = (ts = 1000) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), ts)
    })
}

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

const getList = async () => {
    try {
        state.isLoading = true

        await sleep(1000)

        const list = new Array(30).fill(0).map((_, i) => ({
            id: i,
            title: `元素${i}`,
            width: '200px',
            height: `${i % 2 === 0 ? 200 : 400}px`,
        }))
        state.list.push(...list)

        initMacy()
    }
    catch (error) {
        console.log(error)
    }
    finally {
        state.isLoading = false
    }
}

onMounted(() => {
    getList()
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

        <Observer
            v-if="state.list.length !== 0"
            :has-more="state.list.length < 100"
            :is-loading="state.isLoading"
            @intersect="getList()"
        />
    </div>
</template>

<style lang="less" scoped>
.item {
    min-height: 100px;

    background-color: var(--el-color-primary);
}
</style>
