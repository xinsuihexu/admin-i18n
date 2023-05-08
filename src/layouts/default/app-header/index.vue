<script lang="ts" setup>
import Breadcrumb from './breadcrumb.vue'
import News from './news.vue'
import Fullscreen from './fullscreen.vue'
import User from './user.vue'
import SwitchDark from './switch-dark.vue'
import SwitchColor from './switch-theme.vue'
import Language from './language.vue'

const emits = defineEmits<SE<{
    'update:isCollapse': [val: boolean]
}>>()

const { isCollapse } = $defineModel<{
    isCollapse: boolean
}>()
</script>

<template>
    <div class="app-header">
        <div flex>
            <button
                transition
                duration-200
                ease-in-out
                hover:scale-120
                class="i-carbon-fit-to-width"
                @click="emits('update:isCollapse', !isCollapse)"
            />
        </div>

        <Fullscreen class="ml-2" />

        <Breadcrumb class="ml-5" />

        <div class="app-header__right">
            <!-- <News /> -->
            <Language />
            <SwitchDark />
            <SwitchColor />
            <User />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.app-header {
    display: flex;
    align-items: center;

    padding: 0 12px;
}

.app-header__right {
    display: flex;
    align-items: center;

    margin-left: auto;

    column-gap: 32px;
}

</style>
