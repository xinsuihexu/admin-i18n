<script setup lang="ts">
import type { INode } from './type'
interface IProps {
    node: INode
}

const { node } = $defineProps<IProps>()

defineOptions({
    name: 'SubMenu',
    inheritAttrs: false,
})

const hasChildren = computed(() => {
    return node.children && node.children.length > 0
})

</script>

<template>
    <ElSubMenu
        v-if="hasChildren"
        :index="node.index"
    >
        <template #title>
            <ElIcon v-if="node.icon">
                <i :class="node.icon" />
            </ElIcon>
            <span>{{ node.title }}</span>
        </template>

        <SubMenu
            v-for="(childNode) in node.children"
            :key="childNode.index"
            :node="childNode"
        />
    </ElSubMenu>

    <ElMenuItem
        v-else
        :index="node.index"
    >
        <ElIcon v-if="node.icon">
            <!-- <i :class="node.icon" /> -->
            <button :class="node.icon" />
        </ElIcon>
        <template #title>
            <span>{{ node.title }}</span>
        </template>
    </ElMenuItem>
</template>
