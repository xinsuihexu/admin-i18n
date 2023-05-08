import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()

const hexToRGB = (hex: string) => {
    const h = parseInt(hex.slice(hex.startsWith('#') ? 1 : 0), 16)

    return {
        R: h >>> 16,
        G: (h & 0x00FF00) >>> 8,
        B: (h & 0x0000FF) >>> 0,
    }
}

export const useToggleDarkMode = () => {
    const toggleDark = useToggle(isDark)
    toggleDark()
}

const rgbToHSL = (r: number, g: number, b: number) => {
    r /= 255
    g /= 255
    b /= 255
    const l = Math.max(r, g, b)
    const s = l - Math.min(r, g, b)
    const h = s
        ? l === r
            ? (g - b) / s
            : l === g
                ? 2 + (b - r) / s
                : 4 + (r - g) / s
        : 0
    return {
        H: 60 * h < 0 ? 60 * h + 360 : 60 * h,
        S: 100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
        L: (100 * (2 * l - s)) / 2,
    }
}

export const useToggleTheme = (hexColor: string) => {
    const { R, G, B } = hexToRGB(hexColor)
    const { H, S, L } = rgbToHSL(R, G, B)

    const colorPrimary = `hsl(${H}deg ${S}% ${L}%)`
    const colorPrimaryLight3 = `hsl(${H}deg ${S - 3}% ${L + 10}%)`
    const colorPrimaryLight5 = `hsl(${H}deg ${S - 5}% ${L + 15}%)`
    const colorPrimaryLight7 = `hsl(${H}deg ${S - 7}% ${L + 25}%)`
    const colorPrimaryLight8 = `hsl(${H}deg ${S - 8}% ${L + 30}%)`
    const colorPrimaryLight9 = `hsl(${H}deg ${S - 9}% ${L + 40}%)`
    const colorPrimaryDark2 = `hsl(${H}deg ${S + 5}% ${L + 5}%)`

    const rootElement = document.querySelector('html')!
    rootElement.style.setProperty('--el-color-primary', colorPrimary)
    rootElement.style.setProperty('--el-color-primary-light-3', colorPrimaryLight3)
    rootElement.style.setProperty('--el-color-primary-light-5', colorPrimaryLight5)
    rootElement.style.setProperty('--el-color-primary-light-7', colorPrimaryLight7)
    rootElement.style.setProperty('--el-color-primary-light-8', colorPrimaryLight8)
    rootElement.style.setProperty('--el-color-primary-light-9', colorPrimaryLight9)
    rootElement.style.setProperty('--el-color-primary-dark-2', colorPrimaryDark2)
}
