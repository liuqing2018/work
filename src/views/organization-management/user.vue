<!-- 用户管理 -->
<template>
    <div class="c-main auth">
        <!-- 头部信息 Start -->
        <div class="c-header">
            <!--<button class="c-btn c-primary" @click="handleShowDialog(1)">添加操作员1</button>-->
            <button class="c-btn c-ghost" @click="handleShowDialog(1)">添加操作员1</button>
        </div>
        <!-- 头部信息 End -->
        <!-- 列表 Start -->
        <div class="c-table-list auth-list">
            <el-table :data="tableData" stripe>
                <el-table-column label="序号" width="100" align="center" type="index"></el-table-column>
                <el-table-column label="登录名" align="center" prop="value1"></el-table-column>
                <el-table-column label="所属角色" align="center" prop="value2"></el-table-column>
                <el-table-column label="最后登录时间" align="center" prop="value3"></el-table-column>
                <el-table-column label="E-mail" align="center" prop="value4"></el-table-column>
                <el-table-column label="真实姓名" align="center" prop="value5"></el-table-column>
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
                <el-form-item label="登录名：">
                    <el-input v-model="form.value1" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="真实姓名：">
                    <el-input v-model="form.value2" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="E-mail：">
                    <el-input v-model="form.value3" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码：">
                    <el-input type="password" v-model="form.value4" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码：">
                    <el-input type="password" v-model="form.value5" auto-complete="off"></el-input>
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
                    <li :class="{'active': setDialog.flag === 1}" @click="setDialog.flag = 1">角色设置</li>
                    <li></li>
                </ul>
            </div>
            <!-- 角色设置 Start -->
            <div v-show="setDialog.flag === 1">
                <ul class="auth-set-list">
                    <li>
                        <el-checkbox v-model="setDialog.form">角色1</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">角色2</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">角色3</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">角色4</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">角色5</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">角色6</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">角色7</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">角色8</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="setDialog.form">角色9</el-checkbox>
                    </li>

                </ul>
                <div slot="footer" class="t-center">
                    <button class="c-btn c-primary m-right-20" type="button" @click="setDialog.visible=false">确认
                    </button>
                    <button class="c-btn primary-color" type="button" @click="setDialog.visible=false">取消</button>
                </div>
            </div>
            <!-- 角色设置 End -->
        </el-dialog>

    </div>
</template>

<style lang="less" scoped>
    @import "../auth-management/index.less";
</style>

<script>
    export default {
        data () {
            return {
                tableData: [
                    {
                        value1: 'admin',
                        value2: '管理员',
                        value3: '2018-03-15 09:30:16',
                        value4: '18588888888@163.com',
                        value5: '赵丹丹'
                    },
                    {
                        value1: 'admin',
                        value2: '管理员',
                        value3: '2018-03-15 09:30:16',
                        value4: '18588888888@163.com',
                        value5: '赵丹丹'
                    },
                    {
                        value1: 'admin',
                        value2: '管理员',
                        value3: '2018-03-15 09:30:16',
                        value4: '18588888888@163.com',
                        value5: '赵丹丹'
                    },
                    {
                        value1: 'admin',
                        value2: '管理员',
                        value3: '2018-03-15 09:30:16',
                        value4: '18588888888@163.com',
                        value5: '赵丹丹'
                    },
                    {
                        value1: 'admin',
                        value2: '管理员',
                        value3: '2018-03-15 09:30:16',
                        value4: '18588888888@163.com',
                        value5: '赵丹丹'
                    },
                    {
                        value1: 'admin',
                        value2: '管理员',
                        value3: '2018-03-15 09:30:16',
                        value4: '18588888888@163.com',
                        value5: '赵丹丹'
                    },
                    {
                        value1: 'admin',
                        value2: '管理员',
                        value3: '2018-03-15 09:30:16',
                        value4: '18588888888@163.com',
                        value5: '赵丹丹'
                    },
                    {
                        value1: 'admin',
                        value2: '管理员',
                        value3: '2018-03-15 09:30:16',
                        value4: '18588888888@163.com',
                        value5: '赵丹丹'
                    },
                    {
                        value1: 'admin',
                        value2: '管理员',
                        value3: '2018-03-15 09:30:16',
                        value4: '18588888888@163.com',
                        value5: '赵丹丹'
                    },
                    {
                        value1: 'admin',
                        value2: '管理员',
                        value3: '2018-03-15 09:30:16',
                        value4: '18588888888@163.com',
                        value5: '赵丹丹'
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
                    value2: '',
                    value3: '',
                    value4: '',
                    value5: ''
                }
            };
        },
        methods: {
            // 添加或则修改
            handleShowDialog (flag) {
                this.dialog.visible = true;
                this.dialog.title = flag === 1 ? '添加操作员' : '修改操作员';
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
        }
    };
</script>
