<script lang="ts" setup>
import SubMenu from './sub-menu.vue'
import Tree from '@/utils/tree'
import useTabStore from '@/store/tab'
import useNavStore from '@/store/nav'

interface IProps {
    isCollapse: boolean
}

const { isCollapse } = $defineProps<IProps>()

const treeUtil = new Tree()

const tabStore = useTabStore()
const navStore = useNavStore()

const navs = navStore.navs

treeUtil.traversal(navs, (nav: any) => {
    nav.title = nav.title()
})

const onSelect = (index: string) => {
    const node = treeUtil.findNode(navs, (node: any) => node.index === index)

    if (node.href)
        window.open(node.href)

    else
        tabStore.addTab(node)
}

onMounted(() => {
    const [firstNav] = navs
    tabStore.addTab(firstNav as any)
    tabStore.renderTabs(navs as any)
})
</script>

<template>
    <div class="app-aside">
        <h1
            font-bold
            text-xl
            flex
            justify-center
            items-center
        >
            LOGO
        </h1>

        <div class="app-aside__menu">
            <ElMenu
                :default-active="tabStore.currentTabIndex"
                class="el-menu-vertical-demo"
                :collapse="isCollapse"
                @select="onSelect"
            >
                <SubMenu
                    v-for="nav in navs"
                    :key="nav.index"
                    :node="nav"
                />
            </ElMenu>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.app-aside {
    display: grid;

    background-color: var(--el-menu-bg-color);

    --el-menu-border-color: transparent;
    --el-menu-bg-color:var(--el-bg-color-page);
    grid-template-rows: var(--header-height) 1fr;
}

.app-aside__menu {
    overflow: auto;
}
</style>
