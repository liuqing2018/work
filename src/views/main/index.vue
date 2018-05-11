<template>
    <div class="app-container">
        <!-- 头部信息 Start -->
        <app-header></app-header>
        <!-- 头部信息 End -->

        <div class="app-content">
            <!-- 侧边菜单 Start -->
            <app-nav></app-nav>
            <!-- 侧边菜单 End -->

            <div class="main-right">
                <!-- 框架tab页面 Start -->
                <app-tab></app-tab>
                <!-- 框架tab页面 End -->

                <!-- 页面内容 Start -->
                <div class="main-content">
                    <router-view></router-view>
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
                'getMenu',
                'addTabMenu'
            ]),

            handleOpen (key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose (key, keyPath) {
                console.log(key, keyPath);
            },

            // 展开收起菜单
            handleMenuToggle () {
                this.vm.isMenuVisible = !this.vm.isMenuVisible;
            },

            // 跳转菜单
            handleTo (item) {
                this.$router.push({
                    path: item.url,
                    title: item.name
                });
            }
        },
        created () {
        },
        mounted () {
            // 判断地址栏有没有路由信息，如果则打开相关的页面
            if (!(this.$route.fullPath === '/' || this.$route.fullPath === '/main/' || this.$route.fullPath === '/main')) {
                // 添加tab
                console.log('refresh...');
                this.$store.commit('addTabMenu', {
                    title: this.$route.meta.title,
                    name: this.$route.name,
                    path: this.$route.path
                });
                this.$store.commit('setActiveTab', this.$route.path);
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
            } else {
                this.$store.commit('addTabMenu', {title: to.meta.title, name: to.name, path: to.path});
                console.log('first open...');
            }
            this.$store.commit('setActiveTab', to.path);
            next();
        }
    };
</script>
<style lang="less" rel="stylesheet/less" scoped>
    @import "../../assets/css/modules/variables";
    @import "../../assets/css/modules/function";

    .app-container {
        display: flex;
        align-items: stretch;
        flex-direction: column;
        min-height: 100%;

        .app-content {
            display: flex;
            flex-flow: row nowrap;
            flex: 1 1 auto;
        }

        .main-right {
            flex-grow: 1;
            overflow: hidden;
        }

        .main-content {
            height: 100%;
            padding: 20px;
            background: #f5f7fa;
        }
    }
</style>
