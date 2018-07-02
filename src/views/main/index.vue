<template>
    <div class="app-container">
        <!-- 头部信息 Start -->
        <app-header></app-header>
        <!-- 头部信息 End -->

        <div class="app-content">
            <!-- 侧边菜单 Start -->
            <app-nav></app-nav>
            <!-- 侧边菜单 End -->

            <div class="app-right">
                <!-- 框架tab页面 Start -->
                <app-tab></app-tab>
                <!-- 框架tab页面 End -->
                <!-- 页面内容 Start -->
                <div class="app-right-content">
                    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
                        <!-- 缓存组件的状态，避免重复渲染-->
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
                    </transition>
                </div>
                <!-- 页面内容 End -->
            </div>
        </div>
    </div>
</template>
<script>
    import AppHeader from './AppHeader.vue'; // 头部
    import AppNav from './AppNav.vue'; // 左边导航菜单
    import AppTab from './AppTab.vue'; // 框架选项卡
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'main-content',
        data () {
            return {};
        },
        computed: {
            ...mapState({
                menuList: state => state.main.menuList,
                tabList: state => state.main.tabList,
                vm: state => state.main.vm
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
        components: {
            AppHeader,
            AppNav,
            AppTab
        },
        methods: {
            ...mapActions([
                'addTabMenu'
            ])
        },
        created () {
            this.$toast('这是一个测试');
        },
        mounted () {
            // 判断地址栏有没有路由信息，如果则打开相关的页面
            if (!(this.$route.fullPath === '/')) {
                // 添加tab
                console.log('refresh...');
                // 如果没有设置在本页面内打开
                if (this.$route.meta.isTab === undefined || this.$route.meta.isTab === false) {
                    this.$store.commit('addTabMenu', {
                        title: this.$route.meta.title,
                        name: this.$route.name,
                        path: this.$route.path
                    });
                    this.$store.commit('setActiveTab', this.$route.path);
                }
            } else {
                console.log('default page...');
            }
        },
        beforeRouteUpdate (to, from, next) {
            if (to.meta.title) {
                document.title = to.meta.title;
            }

            if (this.tabList.find(tab => {
                return tab.title === to.meta.title;
            })) {
                console.log('existed...');
                // this.$store.commit('setActiveTab', to.path);
            } else {
                // 如果设置了在当前页面中打开（非标签）
                if (to.meta.isTab === undefined || to.meta.isTab === false) {
                    this.$store.commit('addTabMenu', {title: to.meta.title, name: to.name, path: to.path});
                    this.$store.commit('setActiveTab', to.path);
                    console.log('first open...');
                }
            }
            next();
        }
    };
</script>
<style lang="less" rel="stylesheet/less" scoped>
    @import "../../assets/css/modules/variables";
    @import "../../assets/css/modules/function";

    @app-tabs-height: 41px;

    .app-container {
        display: flex;
        align-items: stretch;
        flex-direction: column;
        height: 100%;

        // 左侧导航和右侧内容的父级
        .app-content {
            display: flex;
            flex-flow: row nowrap;
            flex: 1 1 auto;
            height: 100%;
            overflow: auto;
        }

        // 右侧包含Tab选项卡的父级
        .app-right {
            flex-grow: 1;
            overflow: hidden;
        }

        .app-tabs {
            height: @app-tabs-height;
        }

        // 右侧内容区域
        .app-right-content {
            height: calc(~"100% - @{app-tabs-height}");
            padding: 20px;
            background: #f5f7fa;
            overflow: auto;
        }
    }
</style>
