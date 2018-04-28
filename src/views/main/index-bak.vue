<template>
    <div class="c-container">
        <div :class="{'main-left active': vm.isMenuVisible, 'main-left': !vm.isMenuVisible}">
            <div class="logo">
                <div class="logo-img"></div>
                <h3 v-show="!vm.isMenuVisible">铁路标注开发平台</h3>
            </div>
            <div class="main-menu">
                <el-menu :default-active="vm.activeIndex" class="main-menu-box" :collapse="vm.isMenuVisible"
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

            <div class="user-options">
                <div class="option-item">
                    <el-tooltip class="item" effect="dark" :disabled="vm.isSubMenuVisible" content="超级管理员"
                                placement="top" @mouseenter.native="handleShowSubMenu"
                                @mouseleave.native="handleHideSubMenu">
                        <button type="button">
                            <i class="el-icon-m-yonghu1"></i>
                        </button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="修改密码" placement="top">
                        <button type="button" v-show="!vm.isMenuVisible" @click="handleShowDialog">
                            <i class="el-icon-m-mima"></i>
                        </button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="退出系统" placement="top">
                        <button type="button" v-show="!vm.isMenuVisible" @click="handleQuit">
                            <i class="el-icon-m-quit"></i>
                        </button>
                    </el-tooltip>
                </div>

                <ul class="option-item-extends" v-show="vm.isSubMenuVisible" @mouseenter="handleShowSubMenu"
                    @mouseleave="handleHideSubMenu">
                    <li>超级管理员</li>
                    <li @click="handleShowDialog">修改密码</li>
                    <li @click="handleQuit">退出</li>
                </ul>
            </div>
        </div>

        <div class="main-right">
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
    export default {
        name: 'main-content',
        data () {
            return {
                vm: {
                    isMenuVisible: false,
                    isSubMenuVisible: false,
                    // activeIndex: window.sessionStorage.activeIndex || '11',
                    activeIndex: '11'
                },
                timer: null,
                menuList: [
                    {
                        id: '1',
                        name: '个人桌面',
                        icon: 'el-icon-m-shangbaoxinxi',
                        url: '/main',
                        second: [
                            {
                                id: '11',
                                name: '代办事项',
                                icon: 'el-icon-m-yuan',
                                url: '/index'
                            },
                            {
                                id: '12',
                                name: '已办事项',
                                icon: 'el-icon-m-yuan',
                                url: '/index'
                            }
                        ]
                    },
                    {
                        id: '2',
                        name: '系统管理',
                        icon: 'el-icon-m-ziyuan',
                        url: '/main/auth',
                        second: [
                            {
                                id: '21',
                                name: '用户管理',
                                url: '/auth/user'
                            }
                        ]
                    }
                ],
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
        methods: {
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
                window.sessionStorage.activeIndex = item.id;
                this.$router.push({
                    path: item.url
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
            },

            // 显示子菜单
            handleShowSubMenu () {
                if (this.vm.isMenuVisible) { // 已经收缩了
                    clearTimeout(this.timer);
                    this.vm.isSubMenuVisible = true;
                } else {
                    this.vm.isSubMenuVisible = false;
                }
            },

            // 鼠标离开后2s内关闭
            handleHideSubMenu () {
                if (this.vm.isMenuVisible) {
                    var _this = this;
                    this.timer = setTimeout(function () {
                        _this.vm.isSubMenuVisible = false;
                    }, 500);
                }
            }
        },
        created () {
        }
    };
</script>
