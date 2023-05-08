<script lang="ts" setup>
import { t } from '@/languages'

interface IProps {
    content: string
    expandText?: string
    shrinkText?: string
    shrinkHeight?: string
    maxWidth?: string
}

const { expandText, shrinkText, shrinkHeight, maxWidth } = withDefaults($defineProps<IProps>(), {
    expandText: t('展开'),
    shrinkText: t('收起'),
    shrinkHeight: '4.5em',
    maxWidth: '100%',
})
</script>

<template>
    <div>
        <div class="wrapper">
            <input
                id="exp"
                class="exp"
                type="checkbox"
            >
            <div class="text">
                <label
                    class="btn"
                    for="exp"
                    :data-expand-text="expandText"
                    :data-shrink-text="shrinkText"
                />
                <slot>
                    {{ t('你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好') }}
                    {{ t('你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好') }}
                    {{ t('你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好') }}
                    {{ t('你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好') }}
                    {{ t('你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好') }}
                    {{ t('你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好') }}
                    {{ t('你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好') }}
                    {{ t('你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好') }}
                </slot>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.wrapper {
    display: flex;
    overflow: hidden;

    width: v-bind(maxWidth);
    margin: 50px auto;
    padding: 15px;
    // resize: horizontal;

    border-radius: 8px;
    box-shadow: 20px 20px 60px #bebebe,
    -20px -20px 60px #ffffff;
}
.text {
    // display: flex;
    /*   display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical; */
    position: relative;

    overflow: hidden;

    max-height: v-bind(shrinkHeight);

    transition: .3s max-height;
    text-align: justify;
    text-overflow: ellipsis;

    font-size: 20px;
    line-height: 1.5;
}
.text::before {
    float: right;

    height: calc(100% - 26px);

    content: '';
}
.text::after {
    position: absolute;

    width: 999vw;
    height: 999vw;
    margin-left: -100px;

    content: '';

    box-shadow: inset calc(100px - 999vw) calc(30px - 999vw) 0 0 var(--el-bg-color);
}
.btn{
    position: relative;

    float: right;
    clear: both;

    margin-left: 20px;
    padding: 0 8px;

    cursor: pointer;

    color:  #fff;
    border-radius: 4px;
    background-color: #3F51B5;

    font-size: 16px;
    line-height: 24px;
    /* margin-top: -30px; */
}
.btn::after{
    content: attr(data-expand-text);
}
.exp{
    display: none;
}
.exp:checked+.text{
    max-height: none;
}
.exp:checked+.text::after{
    visibility: hidden;
}
.exp:checked+.text .btn::before{
    visibility: hidden;
}
.exp:checked+.text .btn::after{
    content: attr(data-shrink-text);
}
.btn::before{
    position: absolute;
    left: -5px;

    content: '...';
    transform: translateX(-100%);

    color: var(--el-text-color-primary);
}
</style>
