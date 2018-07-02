<template>
    <div class="app-tabs">
        <el-tabs v-model="activeMenu" type="card" @tab-remove="handleRemoveTab" @tab-click="handleClickTab">
            <el-tab-pane
                v-for="(item, index) in tabList"
                :key="index"
                :label="item.title"
                :name="item.path"
                :closable="item.path !== '/'"
            >
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    export default {
        name: 'app-tab',
        data () {
            return {};
        },
        computed: {
            ...mapState({
                tabList: state => state.main.tabList
            }),
            activeMenu: {
                get () {
                    return this.$store.state.main.activeMenu;
                },
                set (val) {
                    this.$store.commit('setActiveTab', val);
                }
            }
        },
        components: {},
        methods: {
            // 激活选项卡
            handleClickTab (tab, event) {
                this.$router.push({path: tab.name});
            },

            // 移除选项卡
            handleRemoveTab (tabName) {
                if (tabName === '/') {
                    return;
                }

                // 关闭了一个选项卡后，需要手动让一个选项卡获取焦点：通过tabName找到目标的位置，然后判断左右是否有选项卡，如果有则进行切换
                this.tabList.forEach((tab, index) => {
                    if (tab.path === tabName) {
                        let nextTab = this.tabList[index + 1] || this.tabList[index - 1];
                        if (nextTab && nextTab.path !== '/') {
                            this.$router.push({path: nextTab.path});
                            // this.$store.commit('setActiveTab', nextTab.path);
                        } else {
                            // this.$store.commit('setActiveTab', '/');
                            this.$router.push({path: '/'});
                        }
                    }
                });
                this.$store.commit('removeTabMenu', tabName);
            }
        },
        created () {
        }
    };
</script>
<style lang="less" rel="stylesheet/less">
</style>
