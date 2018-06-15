<template>
    <div class="c-main">
        <!-- 选项卡 Start -->
        <ul class="c-tab">
            <li :class="{true: 'c-tab-item active', false: 'c-tab-item'}[index === tabIndex]"
                v-for="(item, index) in tabList" :key="index" @click="tabIndex = index">
                <h3 class="c-tab-title" v-text="item.value"></h3>
            </li>
        </ul>
        <!-- 选项卡 End -->

        <!-- 加载组件 Start -->
        <keep-alive>
            <component :is="tabList[tabIndex].key"></component>
        </keep-alive>
        <!-- 加载组件 End -->
    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
</style>
<script>
    import baseLayout from './Base.vue'; // 基础
    import example from './Example.vue'; // 实例
    export default {
        name: 'base11',
        data () {
            return {
                tabList: [
                    {
                        id: 1,
                        key: 'baseLayout',
                        value: '基础'
                    },
                    {
                        id: 1,
                        key: 'example',
                        value: '实例'
                    }
                ],
                tabIndex: 0
            };
        },
        computed: {},
        components: {
            baseLayout,
            example
        },
        methods: {},
        created () {}
    };
</script>
