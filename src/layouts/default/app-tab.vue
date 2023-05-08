<script setup lang="ts">
import useTabStore from '@/store/tab'
import { t } from '@/languages'
import type { ITab } from '@/store/tab'

enum OperateType {
    OTHER = 1,
    RIGHT = 2,
    LEFT = 3,
    ALL = 4,
}

const state = reactive({
    popoverVisible: false,
    contextList: [
        {
            type: OperateType.OTHER,
            name: t('关闭其他'),
            visible: false,
        },
        {
            type: OperateType.RIGHT,
            name: t('关闭右侧所有'),
            visible: false,
        },
        {
            type: OperateType.LEFT,
            name: t('关闭左侧所有'),
            visible: false,
        },
        {
            type: OperateType.ALL,
            name: t('关闭全部'),
            visible: false,
        },
    ],
})

const tabStore = useTabStore()

const onContextMenu = (type: OperateType, tab: ITab) => {
    if (type === OperateType.OTHER)
        tabStore.removeOtherTabs(tab.index)

    if (type === OperateType.RIGHT)
        tabStore.removeRightTabs(tab.index)

    if (type === OperateType.LEFT)
        tabStore.removeLeftTabs(tab.index)

    if (type === OperateType.ALL)
        tabStore.removeAllTabs()

    tab.visible = false
}

const popstate = () => {
    tabStore.changeTab()
}

window.addEventListener('popstate', popstate, false)

onUnmounted(() => {
    window.removeEventListener('popstate', popstate)
})

</script>

<template>
    <div class="app-tab">
        <div
            v-for="tab in tabStore.getterTabs"
            :key="tab.index"
            class="app-tab__item bg-cool-gray-200 dark:bg-cool-gray-700 font-medium"
            :class="{ 'is-active': tab.index === tabStore.currentTabIndex }"
            tabindex="0"
            @click="tabStore.changeTab(tab.index)"
        >
            <ElPopover
                v-model:visible="tab.visible"
                :teleported="true"
                trigger="contextmenu"
                popper-class="app-tab__context"
            >
                <ul>
                    <li
                        v-for="item in state.contextList"
                        :key="item.type"
                        class="context-item"
                        @click="onContextMenu(item.type, tab)"
                    >
                        {{ item.name }}
                    </li>
                </ul>

                <template #reference>
                    <div class="app-tab__content">
                        <span>{{ tab.title }}</span>
                        <button
                            class="i-carbon-close hover:i-carbon-close-filled"
                            @click.stop="tabStore.removeTab(tab.index)"
                        />
                    </div>
                </template>
            </ElPopover>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.app-tab {
    display: grid;
    overflow-y: hidden;
    justify-content: start;

    width: 100%;
    height: 100%;
    padding-top: 0.8rem;
    padding-right: 1rem;
    padding-left: 1rem;

    background-color: var(--el-bg-color-page);

    gap: 1rem;
    grid-auto-flow: column;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
}

.app-tab::-webkit-scrollbar {
    display: none;
}

.app-tab__item {
    position: relative;

    display: flex;
    align-items: center;

    width: max-content;

    cursor: pointer;
    word-break: keep-all;

    border-top: 1px solid transparent;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    scroll-snap-align: center;
}

.app-tab__item.is-active {
    color: var(--el-color-primary);
    border-top-color: var(--el-color-primary);
    background-color: var(--el-bg-color);
}

.app-tab__content {
    display: grid;

    padding:0 12px;

    place-items: center;
    column-gap: 12px;
    grid-auto-flow : column;
}

.context-item {
    display: grid;

    padding: 8px 0;

    cursor: pointer;

    place-items: center;

    &:hover {
        background-color: var(--el-bg-color-page);
    }
}

</style>
