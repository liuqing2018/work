<!-- 角色管理 -->
<template>
    <div class="c-main auth">
        <!-- 头部信息 Start -->
        <div class="c-header">
            <button class="c-btn c-primary" @click="handleShowDialog(1)">添加角色</button>
        </div>
        <!-- 头部信息 End -->
        <!-- 列表 Start -->
        <div class="c-table-list auth-list">
            <el-table :data="tableData" stripe>
                <el-table-column label="序号" width="100" align="center" type="index"></el-table-column>
                <el-table-column label="角色名称" align="center" prop="value1"></el-table-column>
                <el-table-column label="角色描述" align="center" prop="value2"></el-table-column>
                <el-table-column label="操作管理" align="center">
                    <template slot-scope="scope">
                        <div>
                            <a class="show-underline" href="#" @click="handleShowSetDialog">设置</a>
                            <a class="show-underline" href="#" @click="handleShowDialog">修改</a>
                            <a class="show-underline" href="#" @click="handleDelete">删除</a>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 列表 End -->

        <!-- 分页 Start -->
        <div class="t-center">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
        <!-- 分页 End -->

        <!-- 添加、修改弹框 Start -->
        <el-dialog :title="dialog.title" :visible.sync="dialog.visible" width="40%">
            <el-form :model="form" label-width="100px">
                <el-form-item label="角色名称：">
                    <el-input v-model="form.value1" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="角色描述：">
                    <el-input v-model="form.value2" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="t-center">
                <button class="c-btn c-primary m-right-20" type="button" @click="dialog.visible=false">确认</button>
                <button class="c-btn primary-color" type="button" @click="dialog.visible=false">取消</button>
            </div>
        </el-dialog>
        <!-- 添加、修改弹框 End -->

        <el-dialog class="auth-set" :show-close="false" :visible.sync="setDialog.visible" width="40%">
            <div slot="title">
                <ul class="tabs">
                    <li :class="{'active': setDialog.flag === 1}" @click="setDialog.flag = 1">菜单</li>
                    <li :class="{'active': setDialog.flag === 2}" @click="setDialog.flag = 2">页面资源</li>
                </ul>
            </div>
            <!-- 菜单 Start -->
            <div v-show="setDialog.flag === 1">
                <ul class="auth-set-list">
                    <li>
                        <el-checkbox v-model="setDialog.form">查验录入</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">历史信息查询</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">报表统计</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">重点旅客管理</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">物品信息管理</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">法律法规管理</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">专家库管理</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">航班信息管理</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">前屏展示</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">前屏配置</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">权限管理</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">设备管理</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">系统配置</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">系统日志</el-checkbox>
                    </li>
                </ul>
                <div slot="footer" class="t-center">
                    <button class="c-btn c-primary m-right-20" type="button" @click="setDialog.visible=false">确认
                    </button>
                    <button class="c-btn primary-color" type="button" @click="setDialog.visible=false">取消</button>
                </div>
            </div>
            <!-- 菜单 End -->

            <!-- 页面资源 Start -->
            <div v-show="setDialog.flag === 2">
                <ul class="auth-set-list">
                    <li>
                        <el-checkbox v-model="setDialog.form">信息导入</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">信息上传</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">报表统计</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">物品添加</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">物品删除</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">物品修改</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">专家添加</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">专家修改</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">专家删除</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">法律法规添加</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">法律法规修改</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">法律法规删除</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">航班添加</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">航班修改</el-checkbox>
                    </li>
                </ul>
                <div slot="footer" class="t-center">
                    <button class="c-btn c-primary m-right-20" type="button" @click="setDialog.visible=false">确认
                    </button>
                    <button class="c-btn primary-color" type="button" @click="setDialog.visible=false">取消</button>
                </div>
            </div>
            <!-- 页面资源 End -->
        </el-dialog>

    </div>
</template>

<style lang="less" scoped>
    @import "index.less";
</style>

<script>
    export default {
        data () {
            return {
                tableData: [
                    {
                        value1: '管理员',
                        value2: '管理员最大权限'
                    },
                    {
                        value1: '管理员',
                        value2: '管理员最大权限'
                    },
                    {
                        value1: '管理员',
                        value2: '管理员最大权限'
                    },
                    {
                        value1: '管理员',
                        value2: '管理员最大权限'
                    },
                    {
                        value1: '管理员',
                        value2: '管理员最大权限'
                    },
                    {
                        value1: '管理员',
                        value2: '管理员最大权限'
                    },
                    {
                        value1: '管理员',
                        value2: '管理员最大权限'
                    },
                    {
                        value1: '管理员',
                        value2: '管理员最大权限'
                    }
                ],
                dialog: {
                    visible: false,
                    title: ''
                },
                setDialog: {
                    visible: false,
                    flag: 1,
                    form: ''
                },
                form: {
                    value1: '',
                    value2: ''
                }
            };
        },
        methods: {
            // 添加或则修改
            handleShowDialog (flag) {
                this.dialog.visible = true;
                this.dialog.title = flag === 1 ? '添加角色' : '修改角色';
            },

            // 设置
            handleShowSetDialog () {
                this.setDialog.visible = true;
            },

            // 删除确认
            handleDelete () {
                this.$confirm('删除后数据将无法恢复, 是否继续?', '删除', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        showClose: true,
                        message: '恭喜您，删除成功！'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
            }
        },
        creatd () {
            this.$toast('我是提示信息！');
            alert('test');
        }
    };
</script>
