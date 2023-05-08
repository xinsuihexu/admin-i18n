import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Autoprefixer from 'autoprefixer'
import Unocss from 'unocss/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import Voerkai18nPlugin from '@voerkai18n/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        Vue({
            include: [/\.vue$/, /\.md$/],
            reactivityTransform: true,
        }),

        // https://github.com/antfu/unplugin-auto-import
        AutoImport({
            imports: [
                'vue',
                'vue-router',
            ],
            resolvers: [],
            dts: 'src/auto-imports.d.ts',
        }),

        // https://github.com/antfu/unplugin-vue-components
        Components({
            extensions: ['vue', 'md'],
            include: [/\.vue$/],
            resolvers: [],
            dts: 'src/components.d.ts',
        }),

        // https://github.com/antfu/unocss
        Unocss(),

        // https://vue-macros.sxzz.moe/guide/bundler-integration.html
        VueMacros({}),

        Voerkai18nPlugin({}),
    ],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        extensions: ['.vue', '.js', '.ts', '.jsx', '.tsx', '.json', '.mjs'],
    },

    css: {
        // preprocessorOptions: {
        //     less: {
        //         javascriptEnabled: true,
        //     },
        // },
        postcss: {
            plugins: [
                Autoprefixer({
                    overrideBrowserslist: ['defaults'],
                }),
            ],
        },
    },
})
