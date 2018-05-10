<template>
    <div class="app-header">
        <div class="app-title">
            <img class="app-logo" src="../../assets/img/logo.png" alt="CIC智讯铁路标准开发平台">
            <h3><strong>CIC智讯</strong>铁路标准开发平台</h3>
        </div>
        <div class="app-header-option">
            <div class="app-header-search">
                <el-autocomplete
                        v-model="search"
                        placeholder="请输入查询内容">
                    <div slot="append">
                        <button class="btn-search" type="button">
                            <i class="el-icon-m-search"></i>
                        </button>
                    </div>
                </el-autocomplete>
            </div>
            <ul class="app-header-info">
                <li>
                    <badge :value="12">
                        <i class="el-icon-m-bell" @click="handleBadgeClick"></i>
                    </badge>
                </li>
                <li>
                    <badge :value="12">
                        <i class="el-icon-m-avatar" @click="handleBadgeClick"></i>
                    </badge>
                </li>
                <li class="app-header-user" @mouseenter="handleShowSubMenu"
                    @mouseleave="handleHideSubMenu">
                    <div class="avatar-wrap">
                        <img src="../../assets/img/avatar.jpg" alt="">
                    </div>
                    陈子龙
                    <i class="el-icon-m-more"></i>
                    <ul class="app-header-popup" v-show="isUserPopupVisble">
                        <li>
                            <i class="el-icon-m-lock"></i>
                            修改密码
                        </li>
                        <li>
                            <i class="el-icon-m-cog"></i>
                            我的设置
                        </li>
                        <li @click="handleQuit">
                            <i class="el-icon-m-exit"></i>
                            退出系统
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Badge from './Badge.vue';
    export default {
        data () {
            return {
                search: '',
                isUserPopupVisble: false,
                timer: null
            };
        },
        components: {
            Badge
        },
        methods: {
            handleBadgeClick () {
                this.$toast('测试');
            },

            // 显示子菜单
            handleShowSubMenu () {
                clearTimeout(this.timer);
                this.isUserPopupVisble = true;
            },

            // 鼠标离开后.5s内关闭
            handleHideSubMenu () {
                let _this = this;
                this.timer = setTimeout(function () {
                    _this.isUserPopupVisble = false;
                }, 300);
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
        }
    };
</script>
<style lang="less" rel="stylesheet/less">
    @import "../../assets/css/modules/variables.less";
    @import "../../assets/css/modules/function.less";

    .app-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-basis: 60px;
        line-height: 60px;
        background: @brand-primary;
    }

    .app-title {
        display: flex;
        align-items: center;
        padding-left: 18px;
        line-height: 0;

        & > h3 {
            font-weight: normal;
            font-size: 22px;
            color: #e7f8ff;

            & > strong {
                margin: 0 8px;
                font-weight: bold;
                color: @color-fff;
            }
        }
    }

    .app-header-option {
        display: flex;
    }

    .app-header-search {
        padding-right: 20px;
        &:after {
            content: "";
            position: relative;
            left: 20px;
            border: 1px dashed #a2e4fe;
        }

        .btn-search {
            padding-right: 15px;
            color: #0094da;
            background: none;
            border: none;
            cursor: pointer;
        }
    }

    .app-header-info {
        display: flex;
        align-items: center;

        & > li {
            margin: 0 5px;
        }

        .badge {
            i {
                font-size: 24px;
                color: @color-fff;
                cursor: pointer;

                &:hover {
                    color: #a2e4fe;
                }
            }
        }
    }

    .app-header-user {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #a2e4fe;
        cursor: pointer;
        &:hover {
            color: @color-fff;
        }

        .avatar-wrap {
            width: 30px;
            height: 30px;
            margin: 0 5px;
            border: 1px solid transparent;
            .radius(50%);
            overflow: hidden;

            img {
                display: block;
                width: 100%;
            }
        }

        i {
            font-size: 24px;
        }
    }

    .app-header-popup {
        z-index: 3;
        position: absolute;
        top: 60px;
        right: 10px;
        padding: 10px 0;
        background-color: @color-fff;
        border: 1px solid #dbdbdb;

        & > li {
            height: 30px;
            padding: 0 10px;
            line-height: 30px;
            color: @color-000;

            i {
                font-size: 14px;
            }

            &:hover {
                background: #e9e9e9;
            }
        }
    }
</style>
