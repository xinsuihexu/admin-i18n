<script lang="ts" setup>
import SearchPage from './main.vue'
import SearchInput from './components/input.vue'

const state = reactive({
    formQuery: {},
    searchList: [
        {
            component: SearchInput,
            field: 'username',
            props: {
                title: '城市',
                value: '',
                placeholder: '请输入',
                /** 新增 默认为1 */
                column: 1,
            },
        },

        {
            component: SearchInput,
            field: 'username',
            props: {
                title: '城市',
                value: '',
                placeholder: '请输入',
                /** 新增 默认为1 */
                column: 1,
            },
        },

        {
            component: SearchInput,
            field: 'username',
            props: {
                title: '城市',
                value: '',
                placeholder: '请输入',
                /** 新增 默认为1 */
                column: 1,
            },
        },

        {
            component: SearchInput,
            field: 'username',
            props: {
                title: '城市',
                value: '',
                placeholder: '请输入',
                /** 新增 默认为1 */
                column: 1,
            },
        },

        {
            component: SearchInput,
            field: 'username',
            props: {
                title: '城市',
                value: '',
                placeholder: '请输入',
                /** 新增 默认为1 */
                column: 1,
            },
        },

        {
            component: SearchInput,
            field: 'username',
            props: {
                title: '城市',
                value: '',
                placeholder: '请输入',
                /** 新增 默认为1 */
                column: 1,
            },
        },

        {
            component: SearchInput,
            field: 'username',
            props: {
                title: '城市',
                value: '',
                placeholder: '请输入',
                /** 新增 默认为1 */
                column: 1,
            },
        },

        {
            component: SearchInput,
            field: 'username',
            props: {
                title: '城市',
                value: '',
                placeholder: '请输入',
                /** 新增 默认为1 */
                column: 1,
            },
        },

        {
            component: SearchInput,
            field: 'username',
            props: {
                title: '城市',
                value: '',
                placeholder: '请输入',
                /** 新增 默认为1 */
                column: 1,
            },
        },

        {
            component: SearchInput,
            field: 'username',
            props: {
                title: '城市',
                value: '',
                placeholder: '请输入',
                /** 新增 默认为1 */
                column: 1,
            },
        },

        {
            component: SearchInput,
            field: 'username',
            props: {
                title: '城市',
                value: '',
                placeholder: '请输入',
                /** 新增 默认为1 */
                column: 1,
            },
        },

        {
            component: SearchInput,
            field: 'username',
            props: {
                title: '城市',
                value: '',
                placeholder: '请输入',
                /** 新增 默认为1 */
                column: 1,
            },
        },

        {
            component: SearchInput,
            field: 'username',
            props: {
                title: '城市',
                value: '',
                placeholder: '请输入',
                /** 新增 默认为1 */
                column: 1,
            },
        },

        {
            component: SearchInput,
            field: 'username',
            props: {
                title: '城市',
                value: '',
                placeholder: '请输入',
                /** 新增 默认为1 */
                column: 1,
            },
        },

        {
            component: SearchInput,
            field: 'username',
            props: {
                title: '城市',
                value: '',
                placeholder: '请输入',
                /** 新增 默认为1 */
                column: 2,
            },
        },
        // {
        //     componentName: 'SearchSelect',
        //     field: 'city',
        //     props: {
        //         title: '城市',
        //         value: '',
        //         options: [],
        //         placeholder: '请选择',
        //         /** 新增 */
        //         column: 1,
        //     },
        // },
        // {
        //     componentName: 'SearchDatePicker',
        //     field: ['startDate', 'endDate'],
        //     props: {
        //         type: 'dateRange',
        //         title: '到货日期',
        //         value: [],
        //         /** 新增 */
        //         column: 2,
        //     },
        // },
        // {
        //     componentName: 'SearchDatePicker',
        //     field: ['startDateTime', 'endDateTime'],
        //     props: {
        //         type: 'datetimeRange',
        //         title: '创建时间',
        //         value: [],
        //         /** 新增 */
        //         column: 2,
        //     },
        // },
    ],
},
)

const onSearch = () => {
    console.log('search')
}

const onReset = () => {
    console.log('reset')
}
</script>

<template>
    <div class="page">
        <SearchPage
            v-model:value="state.formQuery"
            :list="state.searchList"
            @search="onSearch"
            @reset="onReset"
        />
    </div>
</template>
