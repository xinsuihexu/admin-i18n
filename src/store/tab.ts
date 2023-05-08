import { defineStore } from 'pinia'
import Tree from '@/utils/tree'

export interface ITab {
    index: string
    title: string
    to: string
    visible: boolean
}

const treeUtil = new Tree()

export const useTabStore = defineStore({
    id: 'tab-store',

    state: () => {
        return {
            currentTabIndex: '',
            tabs: [] as ITab[],
            initTab: null as unknown as ITab,
        }
    },

    getters: {
        currentTab: state => state.tabs.find(tab => tab.index === state.currentTabIndex),

        currentTabPos: state => state.tabs.findIndex(tab => tab.index === state.currentTabIndex),

        tabIndexList: state => state.tabs.map(tab => tab.index),

        getterTabs: state => state.tabs,
    },

    actions: {
        // 解决tabs缓存后，国际化能正常使用
        renderTabs(tabs: ITab[]) {
            treeUtil.traversal(tabs, (tab: any) => {
                const currentTab = this.tabs.find(({ index }) => index === tab.index)

                if (currentTab)
                    currentTab.title = tab.title
            })

            tabs.forEach((tab) => {
                const currentTab = this.tabs.find(({ index }) => index === tab.index)

                if (currentTab)
                    currentTab.title = tab.title
            })
        },

        changeTab(index?: string) {
            if (!index) {
                index = this.tabs[
                    this.currentTabPos === 0
                        ? this.tabs.length - 1
                        : this.currentTabPos - 1
                ].index
            }

            this.currentTabIndex = index as string

            (this as any).$router.push(this.currentTab!.to)
        },

        addTab(tab: ITab) {
            if (!this.initTab)
                this.initTab = tab

            if (this.tabIndexList.includes(tab.index)) {
                // if (tab.index === this.initTab.index)
                //     return

                this.currentTabIndex = tab.index

                this.changeTab(tab.index)
                return
            }

            this.tabs.push(tab)
            this.changeTab(tab.index)
        },

        removeTab(index?: string) {
            if (!index)
                index = this.currentTabIndex

            if (this.tabs.length === 1) {
                this.tabs = []

                this.addTab(this.initTab)
            }
            else {
                const removeIndex = this.tabs.findIndex(tab => tab.index === index)

                if (this.currentTabIndex === index) {
                    this.currentTabIndex = this.tabs[removeIndex > 0 ? removeIndex - 1 : removeIndex + 1].index;

                    (this as any).$router.push(this.currentTab!.to)
                }

                this.tabs.splice(removeIndex, 1)
            }
        },

        removeRightTabs(index: string) {
            const removePreIndex = this.tabs.findIndex(tab => tab.index === index)
            this.tabs = this.tabs.slice(0, removePreIndex + 1)
        },

        removeLeftTabs(index: string) {
            const removePreIndex = this.tabs.findIndex(tab => tab.index === index)
            this.tabs = this.tabs.slice(removePreIndex)
        },

        removeOtherTabs(index: string) {
            this.removeRightTabs(index)
            this.removeLeftTabs(index)
        },

        removeAllTabs() {
            this.tabs = []
            this.addTab(this.initTab)
        },
    },

    persist: {
        paths: ['currentTabIndex', 'tabs'],
    },
})

export default useTabStore
