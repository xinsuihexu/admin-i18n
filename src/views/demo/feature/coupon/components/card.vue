<script setup lang="ts">
interface IProps {
    width?: string
    minHeight?: string
    direction?: 'horizontal' | 'vertical'
    position?: 'top' | 'center' | 'bottom'
    dash?: 'dashed' | 'dotted'
    dashSize?: number
    offset?: string
    radius?: number
    borderColor?: string
    bgColor?: string
    color?: string
}

const {
    width = '100%',
    minHeight = '200px',
    direction = 'horizontal',
    position = 'top',
    dash = 'dashed',
    dashSize = 2,
    offset = '50px',
    radius = 9,
    borderColor = '',
    bgColor = '#3F51B5',
    color = '',
} = $defineProps<IProps>()

const maskImage = computed(() => {
    if (dash) {
        if (direction === 'horizontal') {
            return `radial-gradient(circle at ${position === 'top' ? 'left' : 'right'} ${radius}px ${position !== 'center' ? position : 'top'} ${position === 'center' ? '50%' : offset}, 
                transparent ${radius}px, red ${radius! + 0.5}px), 
                ${dash === 'dashed'
        ? 'linear-gradient(90deg, transparent 25%, red 0, red 75%, transparent 0)'
        : 'radial-gradient(closest-side circle at 50%, red 99%, transparent 100%)'}`
        }

        return `radial-gradient(circle at ${position === 'top' ? 'left' : 'right'} ${position === 'center' ? '50%' : offset} ${position !== 'center' ? position : 'top'} ${radius}px, 
            transparent ${radius}px, red ${radius! + 0.5}px), 
            ${dash === 'dashed'
        ? 'linear-gradient(transparent 25%, red 0, red 75%, transparent 0)'
        : 'radial-gradient(closest-side circle at 50%, red 99%, transparent 100%)'}`
    }
    else {
        if (direction === 'horizontal') {
            return `radial-gradient(circle at left ${radius}px ${position !== 'center' ? position : 'top'} ${position === 'center' ? '50%' : offset}, 
                transparent ${radius}px,
                red ${radius! + 0.5}px, red)`
        }

        return `radial-gradient(circle at ${position === 'center' ? '50%' : offset} ${radius}px, 
            transparent ${radius}px, red ${radius! + 0.5}px)`
    }
})

const maskSize = computed(() => {
    if (dash) {
        if (direction === 'horizontal')
            return `100%, ${dash === 'dashed' ? '8px' : `${2 * dashSize! + 1}px`} 1px`

        return `100%, 1px ${dash === 'dashed' ? '8px' : `${3 * dashSize! + 1}px`}`
    }

    return ''
})

const maskRepeat = computed(() => {
    if (dash) {
        if (direction === 'horizontal')
            return 'repeat, repeat-x'

        return 'repeat, repeat-y'
    }

    return ''
})

const maskPosition = computed(() => {
    if (dash) {
        if (direction === 'horizontal')
            return `${position === 'top' ? `-${radius}px` : `${radius}px`}, 50% ${position === 'center' ? '50%' : position === 'top' ? offset : `calc(100% - ${offset})`}`

        return `0 ${position === 'bottom' ? `${radius}px` : `-${radius}px`}, ${position === 'center' ? '50%' : position === 'top' ? offset : `calc(100% - ${offset})`}`
    }
    else {
        if (direction === 'horizontal')
            return `-${radius}px`

        return `0 -${radius}px`
    }
})
</script>

<template>
    <div class="card">
        <slot />
    </div>
</template>

<style lang="less" scoped>
.card {
    width: v-bind(width);
    height: auto;
    min-height: v-bind(minHeight);
    // border: 1px solid v-bind(borderColor);

    color: v-bind(color);
    border-radius: 0.5rem;
    background-color: v-bind(bgColor);

    mask-image: v-bind(maskImage);
    mask-size: v-bind(maskSize);
    mask-repeat: v-bind(maskRepeat);
    mask-position: v-bind(maskPosition);
    -webkit-mask-composite: source-out;
    mask-composite: subtract;
}
</style>
