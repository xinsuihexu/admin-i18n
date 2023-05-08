<script lang="ts" setup>
const state = reactive({
    observer: null,
    activeByAside: false,
    current: '1',
    menus: [
        {
            key: '1',
            name: 'a',
        },
        {
            key: '2',
            name: 'b',
        },
        {
            key: '3',
            name: 'c',
        },
        {
            key: '4',
            name: 'd',
        },
        {
            key: '5',
            name: 'e',
        },
    ],

    list: [
        {
            title: 'A',
            key: '1',
            tabs: [
                {
                    active: 1,
                    key: '1-1-1',
                    title: '季节限定',
                },
                {
                    active: 0,
                    key: '1-1-2',
                    title: '经典风味',
                },
                {
                    active: 0,
                    key: '1-1-3',
                    title: '美式风味',
                },
            ],
            nodes: [
                {
                    key: '1-1-1',
                    title: '',
                    childNodes: [
                        {
                            key: '1-1',
                            title: 'Algeria1',
                        },
                        {
                            key: '1-2',
                            title: 'Algeria2',
                        },
                        {
                            key: '1-3',
                            title: 'Algeria3',
                        },
                        {
                            key: '1-4',
                            title: 'Algeria4',
                        },
                        {
                            key: '1-5',
                            title: 'Algeria5',
                        },
                        {
                            key: '1-6',
                            title: 'Algeria3',
                        },
                        {
                            key: '1-7',
                            title: 'Algeria4',
                        },
                        {
                            key: '1-8',
                            title: 'Algeria5',
                        },
                    ],
                },
                {
                    key: '1-1-2',
                    title: '经典风味',
                    childNodes: [
                        {
                            key: '1-9',
                            title: 'Algeria9',
                        },
                        {
                            key: '1-10',
                            title: 'Algeria10',
                        },
                        {
                            key: '1-11',
                            title: 'Algeria11',
                        },
                        {
                            key: '1-12',
                            title: 'Algeria12',
                        },
                    ],
                },
                {
                    key: '1-1-3',
                    title: '美式风味',
                    childNodes: [
                        {
                            key: '1-13',
                            title: 'Algeria13',
                        },
                        {
                            key: '1-14',
                            title: 'Algeria14',
                        },
                        {
                            key: '1-15',
                            title: 'Algeria15',
                        },
                    ],
                },
            ],
        },
        {
            title: 'B',
            key: '2',
            tabs: [
                {
                    active: 1,
                    key: '2-1-1',
                    title: '季节限定',
                },
                {
                    active: 0,
                    key: '2-1-2',
                    title: '经典风味',
                },
            ],
            nodes: [
                {
                    title: '',
                    key: '2-1-1',
                    childNodes: [
                        {
                            key: '2-1',
                            title: 'Algeria1',
                        },
                        {
                            key: '2-2',
                            title: 'Algeria2',
                        },
                        {
                            key: '2-3',
                            title: 'Algeria3',
                        },
                        {
                            key: '2-4',
                            title: 'Algeria4',
                        },
                        {
                            key: '2-5',
                            title: 'Algeria5',
                        },
                        {
                            key: '2-6',
                            title: 'Algeria4',
                        },
                        {
                            key: '2-7',
                            title: 'Algeria5',
                        },
                    ],
                },
                {
                    title: '经典风味',
                    key: '2-1-2',
                    childNodes: [
                        {
                            key: '2-8',
                            title: 'Algeria8',
                        },
                        {
                            key: '2-9',
                            title: 'Algeria9',
                        },
                        {
                            key: '2-10',
                            title: 'Algeria10',
                        },
                        {
                            key: '2-11',
                            title: 'Algeria11',
                        },
                        {
                            key: '2-12',
                            title: 'Algeria12',
                        },
                        {
                            key: '2-13',
                            title: 'Algeria13',
                        },
                        {
                            key: '2-14',
                            title: 'Algeria14',
                        },
                    ],
                },
            ],
        },
        {
            title: 'C',
            key: '3',
            tabs: [
                {
                    active: 1,
                    key: '3-1-1',
                    title: '季节限定',
                },
                {
                    active: 0,
                    key: '3-1-2',
                    title: '经典风味',
                },
            ],
            nodes: [
                {
                    key: '3-1-1',
                    title: '',
                    childNodes: [
                        {
                            key: '3-1',
                            title: 'Algeria1',
                        },
                        {
                            key: '3-2',
                            title: 'Algeria2',
                        },
                        {
                            key: '3-3',
                            title: 'Algeria3',
                        },
                        {
                            key: '3-4',
                            title: 'Algeria4',
                        },
                        {
                            key: '3-5',
                            title: 'Algeria5',
                        },
                        {
                            key: '3-6',
                            title: 'Algeria4',
                        },
                        {
                            key: '3-7',
                            title: 'Algeria5',
                        },
                    ],
                },
                {
                    key: '3-1-2',
                    title: '经典风味',
                    childNodes: [
                        {
                            key: '3-8',
                            title: 'Algeria1',
                        },
                        {
                            key: '3-9',
                            title: 'Algeria2',
                        },
                        {
                            key: '3-10',
                            title: 'Algeria3',
                        },
                        {
                            key: '3-11',
                            title: 'Algeria4',
                        },
                        {
                            key: '3-12',
                            title: 'Algeria5',
                        },
                        {
                            key: '3-13',
                            title: 'Algeria4',
                        },
                        {
                            key: '3-14',
                            title: 'Algeria5',
                        },
                    ],
                },
            ],
        },
        {
            title: 'd',
            key: '4',
            tabs: [
                {
                    active: 1,
                    key: '4-1-1',
                    title: '季节限定',
                },
                {
                    active: 0,
                    key: '4-1-2',
                    title: '经典风味',
                },
            ],
            nodes: [
                {
                    key: '4-1-1',
                    title: '',
                    childNodes: [
                        {
                            key: '4-1',
                            title: 'Algeria1',
                        },
                        {
                            key: '4-2',
                            title: 'Algeria2',
                        },
                        {
                            key: '4-3',
                            title: 'Algeria3',
                        },
                        {
                            key: '4-4',
                            title: 'Algeria4',
                        },
                        {
                            key: '3-5',
                            title: 'Algeria5',
                        },
                    ],
                },
                {
                    key: '4-1-2',
                    title: '经典风味',
                    childNodes: [
                        {
                            key: '4-6',
                            title: 'Algeria1',
                        },
                        {
                            key: '4-7',
                            title: 'Algeria2',
                        },
                        {
                            key: '4-8',
                            title: 'Algeria3',
                        },
                        {
                            key: '4-9',
                            title: 'Algeria4',
                        },
                        {
                            key: '3-10',
                            title: 'Algeria5',
                        },
                    ],
                },
            ],
        },
        {
            title: 'e',
            key: '5',
            tabs: [
                {
                    active: 1,
                    key: '5-1-1',
                    title: '季节限定',
                },
                {
                    active: 0,
                    key: '5-1-2',
                    title: '经典风味',
                },
            ],
            nodes: [
                {
                    key: '5-1-1',
                    title: '',
                    childNodes: [
                        {
                            key: '5-1',
                            title: 'Algeria1',
                        },
                        {
                            key: '5-2',
                            title: 'Algeria2',
                        },
                        {
                            key: '5-3',
                            title: 'Algeria3',
                        },
                        {
                            key: '5-4',
                            title: 'Algeria4',
                        },
                        {
                            key: '5-5',
                            title: 'Algeria5',
                        },
                    ],
                },
                {
                    key: '5-1-2',
                    title: '经典风味',
                    childNodes: [
                        {
                            key: '5-1',
                            title: 'Algeria1',
                        },
                        {
                            key: '5-2',
                            title: 'Algeria2',
                        },
                        {
                            key: '5-3',
                            title: 'Algeria3',
                        },
                        {
                            key: '5-4',
                            title: 'Algeria4',
                        },
                        {
                            key: '5-5',
                            title: 'Algeria5',
                        },
                    ],
                },
            ],
        },
    ],
})

const changeItem = (item) => {
    try {
        state.activeByAside = true
        state.current = item.key

        const el = document.querySelector(`.sticky-stack__banner[data-item="${item.key}"]`)

        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            line: 'end',
        })
    }
    catch (error) {
        console.log(error)
    }
    finally {
        setTimeout(() => {
            state.activeByAside = false
        }, 2000)
    }
}

const changeChildItem = (item) => {
    const el = document.querySelector(`.sticky-stack__title[data-item="${item.key}"]`)

    const node = state.list.find(_item => item.key.split('-')[0] === _item.key)

    if (node) {
        node.tabs.forEach((tab) => {
            tab.active = tab.key === item.key ? 1 : 0
        })
    }

    el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        line: 'end',
    })
}

onMounted(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
            console.log({ entry })

            const key = entry.target.attributes['data-item'].value
            const pass = entry.target.dataset.pass === '1'

            if (key && !state.activeByAside && !pass)
                state.current = key

            console.log({ key, pass })
            if (key && pass) {
                const node = state.list.find(_item => key.split('-')[0] === _item.key)

                if (node) {
                    node.tabs.forEach((tab) => {
                        tab.active = tab.key === key ? 1 : 0
                    })
                }
            }
        }
    }, {
        threshold: [1],
    })

    state.observer = observer

    state.list.forEach(({ key, tabs, nodes }) => {
        state.observer.observe(document.querySelector(`.sticky-stack__header-title[data-item="${key}"]`))

        if (tabs.length > 0) {
            nodes.forEach((node) => {
                state.observer.observe(document.querySelector(`.sticky-stack__title[data-item="${node.key}"]`))
            })
        }
    })
})
</script>

<template>
    <div class="page">
        <aside>
            <ul>
                <li
                    v-for="item in state.menus"
                    :key="item.key"
                    class="aside__item"
                    :class="{ active: item.key === state.current }"
                    @click="changeItem(item)"
                >
                    {{ item.name }}
                </li>
            </ul>
        </aside>

        <div class="sticky-stack">
            <div
                v-for="item in state.list"
                :key="item.key"
            >
                <div
                    :data-item="item.key"
                    class="sticky-stack__banner"
                >
                    海报图
                </div>
                <div class="sticky-stack__header">
                    <div
                        :data-item="item.key"
                        class="sticky-stack__header-title"
                    >
                        {{ item.title }}
                    </div>

                    <div class="sticky-stack__tabs">
                        <ElTag
                            v-for="tab in item.tabs"
                            :key="tab.key"
                            round
                            :type="tab.active === 1 ? 'primary' : 'info'"
                            class="mr-2"
                            @click="changeChildItem(tab)"
                        >
                            {{ tab.title }}
                        </ElTag>
                    </div>
                </div>

                <div
                    v-for="node in item.nodes"
                    :key="node.key"
                >
                    <span
                        :data-item="node.key"
                        :data-pass="1"
                        class="sticky-stack__title"
                    >{{ node.title }}</span>

                    <div
                        v-for="childNode in node.childNodes"
                        :key="childNode.key"
                        class="sticky-stack__content"
                    >
                        {{ childNode.title }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.page {
    display: grid;

    grid-template-columns: 150px 1fr;
    gap: 36px;
}

.sticky-stack {
    overflow-y: auto;

    max-height: 320px;
    margin: 0;

    color: #fff;
    border-radius: 1rem;
    background: #37474f;
}

.sticky-stack::-webkit-scrollbar {
    display: none;
}

.sticky-stack__banner {
    position: sticky;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 30px;

    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background-color: var(--el-color-primary);
}

.sticky-stack__header {
    position: sticky;
    top: 0;

    padding: .25rem 1rem;

    color: #cfd8dc;
    background: #263238;

    font-weight: bold;
}

.sticky-stack__tabs {
    display: grid;
    overflow-x: auto;

    place-content: start;
    gap: 0.5rem;
    grid-auto-flow: column;
    overscroll-behavior-y: contain;
    scroll-snap-type: x mandatory;
}

.sticky-stack__tabs::-webkit-scrollbar {
    display: none;
}

.sticky-stack__tabs > .el-tag {
    cursor: pointer;

    scroll-snap-align: center;
}

.sticky-stack__title {
    color: var(--el-text-color-placeholder);

    font-size: 12px;
}

.sticky-stack__content {
    min-height: 100px;
    margin: 0;
    padding: .75rem 1rem;
}

.sticky-stack__content + .sticky-stack__header {
    margin-top: 1rem;
}

.aside__item {
    width: 100px;
    margin-top: 24px;
    padding: 0 12px;

    cursor: pointer;

    border: 1px solid var(--el-color-primary);
    border-radius: 12px;
}

.aside__item.active {
    background-color: var(--el-color-primary);
}
</style>
