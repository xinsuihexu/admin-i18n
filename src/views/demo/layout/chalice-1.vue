<script lang="ts" setup>

</script>

<template>
    <div class="app">
        <div class="app__aside">
            aside
        </div>

        <div class="app__header">
            header
        </div>

        <div class="app__main-wrapper">
            <div class="app__main">
                main
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.app {
    display: grid;

    min-height: 100vh;

    --aside-min-width: 240px;
    --header-height: 48px;
    --main-height: calc(100vh - var(--header-height) - var(--tab-height));
    --main-padding-horizontal: 32px;
    --main-padding-vertical: 24px;
    grid-template-areas:
        "aside header"
        "aside main";
    grid-template-columns: var( --aside-min-width) 1fr;
    grid-template-rows: var(--header-height) var(--main-height);

    &__aside {
        background-color: var(--el-color-primary-light-9);

        grid-area: aside;
    }

    &__header {
        background-color: #681414;
        box-shadow: 0 4px 16px rgba(0, 0, 0, .04);

        grid-area: header;
    }

    &__main {
        position: relative;
        z-index: 0;

        width: 100%;
        height: 100%;
        margin: 0 auto;
        padding: var(--main-padding-vertical) var(--main-padding-horizontal);

        &-wrapper {
            overflow: auto;

            padding: 12px 16px 0 16px;

            background-color: #88815D;

            grid-area: main;
            scroll-behavior: smooth;
        }
    }
}

</style>
