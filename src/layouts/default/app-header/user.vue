<script setup lang="ts">
import { t } from '@/languages'
</script>

<template>
    <div class="user">
        <div
            class="user-avatar"
            tabindex="0"
        >
            <ElAvatar
                :size="30"
                src="https://img1.ttxsapp.com/users/avatars/2021-01-19/1611059298-6eb75-9713c3.jpg"
            />
            <span>{{ t('五老星') }}</span>
            <i class="i-carbon-chevron-down" />
        </div>
        <ul class="user-card">
            <li
                class="user-card__item"
                @click="$router.push('/user/index?tab=permission')"
            >
                <i class="i-carbon-user" />
                <span>{{ t('个人中心') }}</span>
            </li>
            <li class="user-card__item">
                <i class="i-carbon-logout" />
                <span>{{ t('退出登陆') }}</span>
            </li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
.user {
    position: relative;

    cursor: pointer;

    &::before {
        position: absolute;
        top: 100%;
        right: 0;

        width: 140%;
        height: 20px;

        content: "";
    }
}

.user-avatar {
    display: flex;
    align-items: center;

    column-gap: 4px;
}

.user-card {
    position: absolute;
    z-index: 999999;
    top: 140%;
    right: 0;

    padding: 10px 0;

    border-radius: 4px;
    background-color: var(--el-bg-color);
    box-shadow: 0 0 2px rgba(0, 0, 0, .08),
    0 4px 16px rgba(0, 0, 0, .08),
    0 8px 32px rgba(0, 0, 0, .04);

    .user:not(:hover) & {
        display: none;
    }
}

.user-card__item {
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: max-content;
    height: 40px;
    padding: 0 24px;

    cursor: pointer;

    line-height: 40px;

    column-gap: 5px;
}

.user-card__item:hover {
    color: var(--el-text-color-primary);
    background-color: var(--el-color-primary-light-9);
}

</style>
