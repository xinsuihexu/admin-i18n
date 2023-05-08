<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'

const { toggle } = useFullscreen()
</script>

<template>
    <div class="fullscreen">
        <button
            class="i-carbon-fit-to-screen text-xl"
            transition
            duration-200
            ease-in-out
            hover:scale-120
            @click="toggle()"
        />
    </div>
</template>

<style lang="scss" scoped>
.fullscreen {
    display: flex;
    align-items: center;
}
</style>
