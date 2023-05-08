<script setup lang="ts">
import { t } from '@/languages'

const activeKey = ref('1')
</script>

<template>
    <ElPopover
        :teleported="true"
        trigger="click"
        width="200px"
    >
        <ElTabs
            v-model="activeKey"
            class="h-360px"
        >
            <ElTabPane
                :label="t('未读')"
                name="1"
            >
                {{ t('我是未读消息') }}
            </ElTabPane>
            <ElTabPane
                :label="t('已读')"
                name="2"
            >
                {{ t('已读消息') }}
            </ElTabPane>
        </ElTabs>

        <template #reference>
            <ElBadge
                :value="200"
                :max="9"
                class="flex align-middle"
            >
                <button class="i-carbon-notification-filled text-xl" />
            </ElBadge>
        </template>
    </ElPopover>
</template>

<style lang="scss" scoped>
.news {
    width: 200px;
    height: 360px;
}

</style>
