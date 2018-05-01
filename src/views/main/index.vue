<template>
    <div class="c-container">
        <div :class="{'main-left active': vm.isMenuVisible, 'main-left': !vm.isMenuVisible}">
            <div class="logo">
                <!--<div class="logo-img"></div>-->
                <h3 v-show="!vm.isMenuVisible">平台Demo</h3>
            </div>
            <div class="main-menu">
                <!--<el-menu :default-active="activeMenu" class="main-menu-box" :collapse="vm.isMenuVisible"-->
                <el-menu :default-active="$route.path" class="main-menu-box" :collapse="vm.isMenuVisible"
                         :unique-opened="true" text-color="#6c7993" active-text-color="#555e71">
                    <el-submenu :index="item.id" :key="item.id" v-for="(item) in menuList"
                                v-if="item.second && item.second.length > 0">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{item.name}}</span>
                        </template>
                        <el-menu-item @click="handleTo(second);" :key="second.id" :index="second.id"
                                      v-for="second in item.second">
                            <!--<a href="javascript:;"><i :class="second.icon"></i>{{second.name}}</a>-->
                            <i :class="second.icon"></i>{{second.name}}
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item @click="handleTo(item)" :key="item.id" :index="item.id" v-else>
                        <i :class="item.icon"></i>
                        <span slot="title">
                            <!--<a href="javascript:;">{{item.name}}</a>-->
                            {{item.name}}
                        </span>
                    </el-menu-item>
                </el-menu>
            </div>

            <!-- 展开 || 收缩-->
            <div class="expand" @click="handleMenuToggle();">
                <i :class="{'el-icon-m-sanjiao-copy': vm.isMenuVisible, 'el-icon-m-sanjiao': !vm.isMenuVisible}"></i>
            </div>
        </div>

        <div class="main-right">
            <div>
                <el-tabs v-model="activeMenu" type="card" closable @tab-remove="removeTab" @tab-click="tabClick">
                    <el-tab-pane
                        v-for="(item) in tabList"
                        :key="item.name"
                        :label="item.title"
                        :name="item.path"
                    >
                        {{item.path}}==
                    </el-tab-pane>
                </el-tabs>
            </div>
            <div>
                <ul>
                    <li v-for="(item, index) in tabList" :key="index">{{item}}</li>
                </ul>
            </div>
            <router-view></router-view>
        </div>

        <!-- 修改弹框 Start -->
        <el-dialog :title="dialog.title" :visible.sync="dialog.visible" width="30%">
            <el-form :model="form" label-width="100px">
                <el-form-item label="原密码：" required>
                    <el-input v-model="form.value1" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="新密码：" required>
                    <el-input type="password" v-model="form.value2" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码：" required>
                    <el-input type="password" v-model="form.value2" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="t-center">
                <button class="c-btn c-primary m-right-20" type="button" @click="dialog.visible=false">确认</button>
                <button class="c-btn primary-color" type="button" @click="dialog.visible=false">取消</button>
            </div>
        </el-dialog>
        <!-- 修改弹框 End -->
    </div>
</template>
<style lang="less" scoped>
    @import "./index.less";
</style>
<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        name: 'main-content',
        data () {
            return {
                tabIndex: 2,
                activeMenu1: '',

                vm: {
                    isMenuVisible: false
                },
                timer: null,
                dialog: {
                    visible: false,
                    title: ''
                },
                form: {
                    value1: '',
                    value2: ''
                }
            };
        },
        computed: {
            ...mapState({
                menuList: state => state.main.menuList,
                // activeMenu: state => state.main.activeMenu,
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
        methods: {
            ...mapActions([
                'getMenu',
                'addTabMenu'
            ]),

            tabClick (item, value) {
                console.log(item);
                console.log(value);
            },

            removeTab (tabName) {
                this.$store.commit('removeTabMenu', tabName);
            },

            handleOpen (key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose (key, keyPath) {
                console.log(key, keyPath);
            },

            handleMenuToggle () { // 展开收起菜单
                this.vm.isMenuVisible = !this.vm.isMenuVisible;
            },
            handleTo (item) {
                this.$router.push({
                    path: item.url,
                    title: item.name
                });
            },

            // 修改密码弹框
            handleShowDialog () {
                this.dialog.visible = true;
                this.dialog.title = '修改密码';
            },

            // 退出
            handleQuit () {
                this.$confirm('此操作将退出系统, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        showClose: true,
                        message: '恭喜您，退出成功！'
                    });
                    this.$router.push('/');
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消退出'
                    });
                });
            }
        },
        created () {
            this.getMenu();
        },
        mounted () {
            if (!(this.$route.fullPath === '/' || this.$route.fullPath === '/main')) {
                // 添加tab
                // this.$store.commit('addTabMenu', this.$route);
            } else {
                console.log('默认页面');
            }
        },
        beforeRouteUpdate (to, from, next) {
            if (to.meta.title) {
                document.title = to.meta.title;
            }
            if (this.tabList.find(tab => {
                return tab.title === to.meta.title;
            })) {
                console.log('已经存在了....');
            } else {
                this.$store.commit('addTabMenu', {title: to.meta.title, name: to.name, path: to.path});
                console.log('第一次打开过');
            }
            this.$store.commit('setActiveTab', to.path);
            next();
        }
    };
</script>
