import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    // transformerDirectives,
    // transformerVariantGroup,
} from 'unocss'

export default defineConfig({
    shortcuts: [],
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
            warn: true,
            collections: {
                carbon: async () =>
                    await import('@iconify-json/carbon').then(i => i.icons as any),
            },
        }),
        presetTypography(),
    ],
    // transformers: [
    //     transformerDirectives(),
    //     transformerVariantGroup(),
    // ],
})
