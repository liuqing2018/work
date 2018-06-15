<template>
    <div>
        <!-- 检索项 Start -->
        <div class="m-bottom-10">
            <form class="clearfix">
                <ul class="form-list col-md-10">
                    <li class="col-md-3">
                        <label>用户名：</label>
                        <div>
                            <input type="text" placeholder="请输入...">
                        </div>
                    </li>
                    <li class="col-md-3">
                        <label>部门：</label>
                        <div>
                            <input type="text" placeholder="请输入...">
                        </div>
                    </li>
                    <li class="col-md-3">
                        <label>邮箱：</label>
                        <div>
                            <input type="text" placeholder="请输入...">
                        </div>
                    </li>
                    <li class="col-md-3">
                        <label>手机：</label>
                        <div>
                            <input type="text" placeholder="请输入...">
                        </div>
                    </li>
                    <li class="col-md-3">
                        <label>岗位名称：</label>
                        <div>
                            <input type="text" placeholder="请输入...">
                        </div>
                    </li>
                    <li class="col-md-3">
                        <label>业余爱好：</label>
                        <div>
                            <input type="text" placeholder="请输入...">
                        </div>
                    </li>
                </ul>
                <ul class="form-list col-md-2">
                    <li>
                        <button class="c-btn c-primary" type="button">查询</button>
                    </li>
                    <li>
                        <button class="c-btn c-warning" type="button">重置</button>
                    </li>
                </ul>
            </form>
        </div>
        <!-- 检索项 End -->

        <!-- 检索结果 Start -->
        <div>
            <h3 class="c-headline m-bottom-10">用户列表 <button class="c-btn c-primary fr" type="button" @click="handleAction(1)"><i class="el-icon-m-plus"></i>添加</button></h3>
            <div class="p-10">
                <table class="c-table c-stripe c-border c-hover c-state">
                    <thead>
                    <tr>
                        <th>编号</th>
                        <th>用户名</th>
                        <th>真实姓名</th>
                        <th>所属部门</th>
                        <th>岗位名称</th>
                        <th>邮箱</th>
                        <th>性别</th>
                        <th>业余爱好</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in mockUsers" :key="item.id">
                        <td v-text="index + 1"></td>
                        <td v-text="item.username"></td>
                        <td v-text="item.cname"></td>
                        <td v-text="item.dept"></td>
                        <td v-text="item.title"></td>
                        <td v-text="item.mail"></td>
                        <td v-text="item.sex"></td>
                        <td v-text="item.hobby"></td>
                        <td>
                            <button class="c-btn c-info" type="button" @click="handleAction(3)" title="查看">
                                <i class="el-icon-m-eye-open"></i>
                            </button>
                            <button class="c-btn c-warning" type="button" @click="handleAction(2)" title="编辑">
                                <i class="el-icon-m-edit"></i>
                            </button>
                            <button class="c-btn c-danger" type="button" @click="handleDelete" title="删除">
                                <i class="el-icon-m-delete"></i>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- 检索结果 End -->

        <!-- 弹出层 Start -->
        <div class="popup-main" v-show="popup.visible" v-cloak>
            <div class="popup-bg"></div>
            <div class="popup-box" id="popup-box" :style="{width: popup.width}">
                <div class="popup-header" v-drag="{moveElId:'popup-box'}">
                    {{popup.title}} <i @click="popup.visible = false" class="el-icon-m-close"></i>
                </div>
                <div class="popup-content">
                    <!-- 添加 Start -->
                    <div v-show="popup.flag === 1">
                        <ul class="form-list">
                            <li>
                                <label>用户名：</label>
                                <div>
                                    <input type="text" placeholder="请输入..." :disabled="popup.editable" :readonly="popup.editable">
                                </div>
                            </li>
                            <li>
                                <label>真实姓名：</label>
                                <div>
                                    <input type="text" placeholder="请输入..." :disabled="popup.editable" :readonly="popup.editable">
                                </div>
                            </li>
                            <li>
                                <label>所属部门：</label>
                                <div>
                                    <select :disabled="popup.editable" :readonly="popup.editable">
                                        <option value="0">研发部</option>
                                        <option value="1">人事部</option>
                                        <option value="2">市场部</option>
                                        <option value="3">项目部</option>
                                    </select>
                                </div>
                            </li>
                            <li>
                                <label>岗位名称：</label>
                                <div>
                                    <input type="text" placeholder="请输入..." :disabled="popup.editable" :readonly="popup.editable">
                                </div>
                            </li>
                            <li>
                                <label>性别：</label>
                                <div>
                                    <input type="radio" value="1" name="sex" :disabled="popup.editable" :readonly="popup.editable">男
                                    <input type="radio" value="2" name="sex" :disabled="popup.editable" :readonly="popup.editable"> 女
                                </div>
                            </li>
                            <li>
                                <label>业务爱好：</label>
                                <div>
                                    <input type="checkbox" value="1" name="hobby" :disabled="popup.editable" :readonly="popup.editable">旅行
                                    <input type="checkbox" value="2" name="hobby" :disabled="popup.editable" :readonly="popup.editable">慢跑
                                    <input type="checkbox" value="3" name="hobby" :disabled="popup.editable" :readonly="popup.editable">台钓
                                    <input type="checkbox" value="4" name="hobby" :disabled="popup.editable" :readonly="popup.editable">发呆
                                    <input type="checkbox" value="5" name="hobby" :disabled="popup.editable" :readonly="popup.editable">击剑
                                </div>
                            </li>
                            <li>
                                <label>备注：</label>
                                <div>
                                    <textarea :disabled="popup.editable" :readonly="popup.editable"></textarea>
                                </div>
                            </li>
                        </ul>
                        <div class="popup-footer">
                            <button class="c-btn c-default" type="button" @click="popup.visible = false">取消</button>
                            <button class="c-btn c-primary" type="button" @click="popup.visible = false">确定</button>
                        </div>
                    </div>
                    <!-- 添加 End -->

                    <!-- 删除 Start -->
                    <div v-show="popup.flag === 2">
                        <h3 class="p-10">
                            确定要删除么？
                        </h3>
                        <div class="popup-footer">
                            <button class="c-btn c-default" type="button" @click="popup.visible = false">取消</button>
                            <button class="c-btn c-primary" type="button" @click="popup.visible = false">确定</button>
                        </div>
                    </div>
                    <!-- 删除 End -->
                </div>
            </div>
        </div>
        <!-- 弹出层 End -->
    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>

</style>
<script>
    let Mock = require('mockjs'); // 测试数据
    export default {
        name: 'example',
        data () {
            return {
                popup: {
                    visible: false,
                    title: '我是弹出层',
                    width: '350px', // 弹出层的宽度 默认是350px
                    flag: 2 // 控制显示添加或者删除区域
                },
                coord: {}
            };
        },
        computed: {
            mockUsers () {
                let data = {
                    'list|3-10': [
                        {
                            'id': '@guid',
                            'username': '@name',
                            'cname': '@cname',
                            'dept': '@cword(3)',
                            'title': '@cword(3)',
                            'mail': '@email("its.com")',
                            'sex|0-1': 1,
                            'hobby': '@cword(3)',
                            'description': '@cparagraph(3)'
                        }
                    ]
                };

                let result = Mock.mock(data);
                return result.list;
            }
        },
        components: {
        },
        methods: {
            handleAction (flag) {
                // flag === 1 ? '添加' : '删除'
                this.popup.visible = true;
                this.popup.width = '550px';
                this.popup.flag = 1;
                if (flag === 3) {
                    this.popup.title = '查看';
                    this.popup.editable = true;
                } else {
                    this.popup.title = flag === 1 ? '添加' : '修改';
                    this.popup.editable = false;
                }
            },

            handleDelete () {
                this.popup.visible = true;
                this.popup.title = '删除';
                this.popup.width = '350px';
                this.popup.flag = 2;
            },

            myDrag (val) {
                this.coord = val;
            }
        },
        created () {
        }
    };
</script>
