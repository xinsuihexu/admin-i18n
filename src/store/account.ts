import { defineStore } from 'pinia'

export const useAccountStore = defineStore({
    id: 'store-account',

    state: () => {
        return {
            token: '' as any,
            account: {} as any,
        }
    },

    getters: {
        getToken(state) {
            return state.token
        },

        getUserInfo(state) {
            return state.account
        },
    },

    actions: {
        updateUserInfo({ token, account }: any) {
            this.token = token
            this.account = account
        },

        deleteUserInfo() {
            this.token = ''
            this.account = {}
        },
    },

    persist: {
        paths: ['token', 'account'],
    },
})
