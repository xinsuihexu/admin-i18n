<script lang="ts" setup>
import AppAside from './app-aside/index.vue'
import AppHeader from './app-header/index.vue'
import AppTab from './app-tab.vue'

const state = reactive({
    isCollapse: true,
})
</script>

<template>
    <div class="layout">
        <AppAside
            class="layout__aside"
            :is-collapse="state.isCollapse"
        />

        <AppHeader
            v-model:isCollapse="state.isCollapse"
            class="layout__header"
        />

        <AppTab class="layout__tab" />

        <div class="layout__main-wrapper">
            <RouterView
                v-slot="{ Component: C }"
                class="layout__main"
            >
                <KeepAlive>
                    <Component :is="C" />
                </KeepAlive>
            </RouterView>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.layout {
    display: grid;

    min-height: 100vh;

    --aside-min-width: 150px;
    --header-height: 48px;
    --tab-height: 39px;
    --main-height: calc(100vh - var(--header-height) - var(--tab-height));
    --main-padding-horizontal: 32px;
    --main-padding-vertical: 24px;
    grid-template-areas:
        "aside header"
        "aside tab"
        "aside main";
    grid-template-columns: max-content 1fr;
    grid-template-rows: var(--header-height) var(--tab-height) var(--main-height);

    &__aside {
        max-width: fit-content;

        grid-area: aside;
    }

    &__header {
        grid-area: header;
    }

    &__tab {
        overflow: auto;

        grid-area: tab;
    }

    &__main {
        position: relative;
        z-index: 0;

        width: 100%;
        // height: 100%;
        margin: 0 auto;
        // padding: var(--main-padding-vertical) var(--main-padding-horizontal);

        &-wrapper {
            overflow: auto;

            padding: 12px 16px 0 16px;

            grid-area: main;
            scroll-behavior: smooth;

            &:has(.fullscreen) {
                padding: 0;

                grid-area: 1 / 1 / -1 / -1;
            }
        }
    }
}

</style>
