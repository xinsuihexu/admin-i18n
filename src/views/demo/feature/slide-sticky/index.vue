<script lang="ts" setup>
const state = reactive({
    list: ['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(v => ({
        title: v,
        nodes: new Array(10).fill(0).map((_, i) => ({ name: `${v}-${i}` })),
    })),
})
</script>

<template>
    <div class="container">
        <dl class="sticky-stack">
            <template
                v-for="item in state.list"
                :key="item.title"
            >
                <dt>{{ item.title }}</dt>
                <dd
                    v-for="(node, index) in item.nodes"
                    :key="index"
                >
                    {{ node.name }}
                </dd>
            </template>
        </dl>
    </div>
</template>

<style lang="less" scoped>
.container {
    display: grid;

    min-height: 400px;

    place-items: center;
}

.sticky-stack {
    overflow-y: auto;

    width: 50vw;
    height: 320px;
    margin: 0;

    color: #fff;
    border-radius: 1rem;
    background: #37474f;
}

.sticky-stack::-webkit-scrollbar {
    display: none;
}

.sticky-stack dt {
    position: sticky;
    top: 0;

    padding: .25rem 1rem;

    color: #cfd8dc;
    background: #263238;

    font-weight: bold;
}

.sticky-stack dd {
    margin: 0;
    padding: .75rem 1rem;
}

.sticky-stack dd + dt {
    margin-top: 1rem;
}

</style>
