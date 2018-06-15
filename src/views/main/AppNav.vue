<template>
    <div :class="{'app-left active': vm.isMenuVisible, 'app-left': !vm.isMenuVisible}">
        <h3 class="menu-title">
            <span v-show="!vm.isMenuVisible">
                <i class="el-icon-m-home"></i>工作台
            </span>
            <i class="el-icon-m-expand" @click="handleMenuToggle();"></i>
        </h3>
        <div class="app-menu">
            <el-menu class="app-menu-box" :default-active="activeMenu" :collapse="vm.isMenuVisible" :unique-opened="true"  @open="handleOpen" @close="handleClose">
                <!--<el-menu class="main-menu-box" :default-active="activeMenu" :collapse="vm.isMenuVisible" :unique-opened="true" text-color="#6c7993" active-text-color="#555e71" @open="handleOpen" @close="handleClose">-->
                <sub-menu :menuList="menuList"></sub-menu>
            </el-menu>
        </div>
    </div>
</template>
<script>
    import SubMenu from './SubMenu.vue';
    import { mapState, mapActions } from 'vuex';
    export default {
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
            SubMenu
        },
        methods: {
            ...mapActions([
                'getMenu',
                'addTabMenu'
            ]),

            handleOpen (index, keyPath) {
            },

            handleClose (key, keyPath) {
                console.log(key);
                console.log(keyPath);
            },

            handleMenuToggle () { // 展开收起菜单
                // this.vm.isMenuVisible = !this.vm.isMenuVisible;
                this.$store.commit('MenuToggle');
            }

        },
        created () {
            this.getMenu();
        }
    };
</script>
<style lang="less" rel="stylesheet/less">
    @import "../../assets/css/modules/variables.less";
    .app-left {
        position: relative;
        flex-basis: 260px;
        flex-shrink: 0;
        background: @color-fff;
        transition: all ease .2s;
        overflow-y: auto;

        &.active {
            flex-basis: 54px;
            overflow: hidden;
        }
    }

    .menu-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 48px;
        padding: 0 20px;
        line-height: 48px;
        font-size: 14px;
        font-weight: normal;
        color: @color-000;

        & > span {
            & > i {
                margin-right: 10px;
                margin-left: 2px;
            }
        }

        i {
            font-size: 20px;
            color: @color-ccc;
            cursor: pointer;
        }
    }
</style>
