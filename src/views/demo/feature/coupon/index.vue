<script lang="ts" setup>
import Card from './components/card.vue'

const state = reactive({
    direction: 'horizontal',
    position: 'top',
    dash: 'dashed',
    dashSize: 2,
    offset: '50px',
    radius: 9,
    bgColor: '#3F51B5',

    directions: [
        {
            key: 1,
            name: 'horizontal',
            icon: 'i-carbon-pan-horizontal',
        },
        {
            key: 2,
            name: 'vertical',
            icon: 'i-carbon-pan-vertical',
        },
    ],

    positions: [
        {
            key: 1,
            name: 'top',
            icon: 'i-carbon-align-horizontal-left',
        },
        {
            key: 2,
            name: 'center',
            icon: 'i-carbon-align-horizontal-center',
        },
        {
            key: 3,
            name: 'bottom',
            icon: 'i-carbon-align-horizontal-right',
        },
    ],

    dashes: [
        {
            key: 1,
            name: '',
            icon: 'none',
        },
        {
            key: 2,
            name: 'dashed',
            icon: '- - -',
        },
        {
            key: 2,
            name: 'dotted',
            icon: '······',
        },
    ],
})

const customOffset = computed({
    get() {
        return Number(state.offset.replace(/[^0-9]/ig, ''))
    },
    set(v) {
        state.offset = `${v}px`
    },
})

const changeDirection = (item) => {
    state.direction = item.name
}

const changePosition = (item) => {
    state.position = item.name
}

const changeDash = (item) => {
    state.dash = item.name
}
</script>

<template>
    <div class="page">
        <ul class="page-setting">
            <li class="page-setting__item">
                <span class="page-setting__label">Radius</span>
                <ElSlider v-model="state.radius" />
            </li>

            <li class="page-setting__item">
                <span class="page-setting__label">Direction</span>
                <ul class="page-setting__group">
                    <li
                        v-for="(item, i) in state.directions"
                        :key="i"
                        class="group-item"
                        :class="[{ active: item.name === state.direction }]"
                        @click="changeDirection(item)"
                    >
                        <i :class="item.icon" />
                    </li>
                </ul>
            </li>

            <li class="page-setting__item">
                <span class="page-setting__label">Position</span>
                <ul class="page-setting__group">
                    <li
                        v-for="(item, i) in state.positions"
                        :key="i"
                        class="group-item"
                        :class="[{ active: item.name === state.position }]"
                        @click="changePosition(item)"
                    >
                        <i :class="item.icon" />
                    </li>
                </ul>
            </li>

            <li class="page-setting__item">
                <span class="page-setting__label">Offset</span>
                <ElSlider v-model="customOffset" />
            </li>

            <li class="page-setting__item">
                <span class="page-setting__label">Dash</span>
                <ul class="page-setting__group">
                    <li
                        v-for="(item, i) in state.dashes"
                        :key="i"
                        class="group-item"
                        :class="[{ active: item.name === state.dash }]"
                        @click="changeDash(item)"
                    >
                        {{ item.icon }}
                    </li>
                </ul>
            </li>

            <li class="page-setting__item">
                <span class="page-setting__label">Dashsize</span>
                <ElSlider
                    v-model="state.dashSize"
                    :min="0"
                    :max="20"
                />
            </li>

            <li class="page-setting__item">
                <span class="page-setting__label">BackgroundColor</span>
                <ElColorPicker v-model="state.bgColor" />
            </li>
        </ul>

        <Card
            :direction="state.direction"
            :position="state.position"
            :dash="state.dash"
            :dash-size="state.dashSize"
            :offset="state.offset"
            :radius="state.radius"
            :bg-color="state.bgColor"
            :color="state.color"
        />
    </div>
</template>

<style lang="less" scoped>
.page {
    width: 50vw;
}

.page-setting__label {
    min-width: 60px;

    // text-align: end;
}

.page-setting__item {
    display: flex;
    align-items: center;

    column-gap: 24px;

    &:not(:first-child) {
        margin-top: 12px;
    }
}

.page-setting__group {
    display: grid;

    min-height: 30px;
    padding: 4px 0;

    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
}

.group-item {
    display: grid;

    padding: 8px 12px;

    cursor: pointer;

    color: var(--el-color-primary);
    border: 1px solid var(--el-color-primary);

    place-content: center;

    &:not(:first-child) {
        border-left: none;
    }

    &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
    }

    &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
    }
}

.group-item.active {
    color: #fff;
    background-color: var(--el-color-primary);
}
</style>
