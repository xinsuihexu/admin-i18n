<script lang="ts" setup>
interface IProps {
    hasMore?: boolean
    isLoading?: boolean
    options?: Record<string, unknown>
}

const emit = defineEmits(['intersect'])

const {
    hasMore = false,
    isLoading = false,
    options = {},
} = $defineProps<IProps>()

const state = reactive({
    observer: null,
})

const observerRef = $ref(null)

const text = computed(() => {
    if (!hasMore)
        return '- 到底啦 -'

    if (isLoading)
        return '加载中...'

    return ''
})

const init = () => {
    state.observer = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting)
            emit('intersect')
    }, options)

    state.observer.observe(observerRef)
}

watch(() => hasMore, (v) => {
    if (!v)
        state.observer?.disconnect?.()
})

onMounted(() => {
    init()
})

onUnmounted(() => {
    state.observer?.disconnect?.()
})
</script>

<template>
    <div
        ref="observerRef"
        class="observer"
    >
        {{ text }}
    </div>
</template>

<style lang="less" scoped>
.observer {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 40px;

    color: #666;

    font-size: 14px;
}
</style>
