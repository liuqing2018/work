<template>
    <div>
    <!-- 基础 Start -->
        <!-- 标题 Start -->
        <div class="p-bottom-20">
            <h3 class="c-headline m-bottom-10">标题 headline</h3>
            <div class="p-20">
                <h3 class="c-headline">我是标题一</h3>
                <h3 class="c-headline c-prefix">我是标题二</h3>
                <h3 class="c-headline c-prefix c-no-border">我是标题三</h3>
                <h3 class="c-headline c-prefix c-bg c-no-border">我是标题四</h3>
            </div>
        </div>
        <!-- 标题 End -->

        <!-- 按钮 Start -->
        <div class="p-bottom-20">
            <h3 class="c-headline m-bottom-10">按钮 button</h3>
            <ul class="btn-list p-20 clearfix">
                <li class="p-10">
                    <button class="c-btn c-primary" type="button"> c-primary</button>
                </li>
                <li class="p-10">
                    <button class="c-btn c-warning" type="button"> c-warning</button>
                </li>
                <li class="p-10">
                    <button class="c-btn c-success" type="button"> c-success</button>
                </li>
                <li class="p-10">
                    <button class="c-btn c-danger" type="button"> c-danger</button>
                </li>
                <li class="p-10">
                    <button class="c-btn c-info" type="button"> c-info</button>
                </li>
                <li class="p-10">
                    <button class="c-btn c-ghost" type="button"> c-ghost</button>
                </li>
                <li class="p-10">
                    <button class="c-btn c-default" type="button"> c-default</button>
                </li>
            </ul>
        </div>
        <!-- 按钮 End -->

        <!-- 选项卡 Start -->
        <div class="p-bottom-20">
            <h3 class="c-headline m-bottom-10">选项卡 tab</h3>
            <div class="p-20">
                <ul class="c-tab p-bottom-20">
                    <li class="active">
                        <h3>选项一</h3>
                    </li>
                    <li>
                        <h3>选项二</h3>
                    </li>
                    <li>
                        <h3>选项三</h3>
                    </li>
                </ul>

                <!-- 可以自定义元素 -->
                <div class="c-tab">
                    <div class="c-tab-item">
                        <span class="c-tab-title">自定义一</span>
                    </div>
                    <div class="c-tab-item">
                        <span class="c-tab-title">自定义二</span>
                    </div>
                    <div class="c-tab-item">
                        <span class="c-tab-title">自定义三</span>
                    </div>
                </div>

            </div>
        </div>
        <!-- 选项卡 End -->

        <!-- 弹出层 Start -->
        <div class="p-bottom-20">
            <h3 class="c-headline m-bottom-10">弹出层 popup</h3>
            <div class="p-20">
                <button class="c-btn c-primary m-right-10" type="button" @click="handleAdd">添加</button>
                <button class="c-btn c-danger" type="button" @click="handleDelete">删除</button>
            </div>
        </div>
        <!-- 弹出层 End -->

        <!-- 表单 Start -->
        <div class="p-bottom-20">
            <h3 class="c-headline m-bottom-10">表单</h3>
            <div class="p-20">
                <ul class="form-list">
                    <li>
                        <label>用户名：</label>
                        <div>
                            <input type="text" placeholder="请输入...">
                        </div>
                    </li>
                    <li>
                        <label>真实姓名：</label>
                        <div>
                            <input type="text" placeholder="请输入...">
                        </div>
                    </li>
                    <li>
                        <label>所属部门：</label>
                        <div>
                            <select name="" id="">
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
                            <input type="text" placeholder="请输入...">
                        </div>
                    </li>
                    <li>
                        <label>性别：</label>
                        <div>
                            <input type="radio" value="1" name="sex">男
                            <input type="radio" value="2" name="sex"> 女
                        </div>
                    </li>
                    <li>
                        <label>业务爱好：</label>
                        <div>
                            <input type="checkbox" value="1" name="hobby">旅行
                            <input type="checkbox" value="2" name="hobby">慢跑
                            <input type="checkbox" value="3" name="hobby">台钓
                            <input type="checkbox" value="4" name="hobby">发呆
                            <input type="checkbox" value="5" name="hobby">击剑
                        </div>
                    </li>
                    <li>
                        <label>备注：</label>
                        <div>
                            <textarea></textarea>
                        </div>
                    </li>
                </ul>
                <div class="t-center">
                    <button class="c-btn c-primary m-right-10" type="button" @click="handleSave">保存</button>
                    <button class="c-btn c-default" type="button">返回</button>
                </div>
            </div>
        </div>
        <!-- 表单 End -->

        <!-- 表格 Start -->
        <div class="p-bottom-20">
            <h3 class="c-headline m-bottom-10">表格 table</h3>
            <div class="p-20">
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
                        <th>备注</th>
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
                        <td v-text="item.description"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- 表格 End -->

        <!--  栅格布局 Start -->
        <div class="p-bottom-20">
            <h3 class="c-headline m-bottom-10">栅格布局 grid</h3>
            <div class="p-20">
                <div class=" grid-list">
                    <div class="col-md-12">
                        <h3>col-md-12</h3>
                    </div>
                    <div class="col-md-6">
                        <h3>col-md-6</h3>
                    </div>
                    <div class="col-md-6">
                        <h3>col-md-6</h3>
                    </div>
                    <div class="col-md-4">
                        <h3>col-md-4</h3>
                    </div>
                    <div class="col-md-4">
                        <h3>col-md-4</h3>
                    </div>
                    <div class="col-md-4">
                        <h3>col-md-4</h3>
                    </div>
                    <div class="col-md-3">
                        <h3>col-md-3</h3>
                    </div>
                    <div class="col-md-3">
                        <h3>col-md-3</h3>
                    </div>
                    <div class="col-md-3">
                        <h3>col-md-3</h3>
                    </div>
                    <div class="col-md-3">
                        <h3>col-md-3</h3>
                    </div>
                    <div class="col-md-4">
                        <h3>col-md-4</h3>
                    </div>
                    <div class="col-md-8">
                        <h3>col-md-8</h3>
                    </div>
                    <div class="col-md-8">
                        <h3>col-md-8</h3>
                    </div>
                    <div class="col-md-4">
                        <h3>col-md-4</h3>
                    </div>
                </div>
            </div>
        </div>
        <!-- 栅格布局 End -->
    <!-- 基础 End -->

        <!-- 弹出层 Start -->
        <div class="popup-main" v-show="popup.visible" v-cloak>
            <div class="popup-bg"></div>
            <div class="popup-box" :style="{width: popup.width}">
                <div class="popup-header">
                    {{popup.title}} <i @click="popup.visible = false" class="el-icon-m-close"></i>
                </div>
                <div class="popup-content">
                    <!-- 添加 Start -->
                    <div v-show="popup.flag === 1">
                        <ul class="form-list">
                            <li>
                                <label>用户名：</label>
                                <div>
                                    <input type="text" placeholder="请输入...">
                                </div>
                            </li>
                            <li>
                                <label>真实姓名：</label>
                                <div>
                                    <input type="text" placeholder="请输入...">
                                </div>
                            </li>
                            <li>
                                <label>所属部门：</label>
                                <div>
                                    <select>
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
                                    <input type="text" placeholder="请输入...">
                                </div>
                            </li>
                            <li>
                                <label>性别：</label>
                                <div>
                                    <input type="radio" value="1" name="sex">男
                                    <input type="radio" value="2" name="sex"> 女
                                </div>
                            </li>
                            <li>
                                <label>业务爱好：</label>
                                <div>
                                    <input type="checkbox" value="1" name="hobby">旅行
                                    <input type="checkbox" value="2" name="hobby">慢跑
                                    <input type="checkbox" value="3" name="hobby">台钓
                                    <input type="checkbox" value="4" name="hobby">发呆
                                    <input type="checkbox" value="5" name="hobby">击剑
                                </div>
                            </li>
                            <li>
                                <label>备注：</label>
                                <div>
                                    <textarea></textarea>
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
    .btn-list {
        & > li {
            float: left;
        }
    }
    .grid-list {
        div {
            height: 40px;
            padding: 0 10px;
            margin: 10px 0;
            line-height: 40px;

            & > h3 {
                text-align: center;
                background: #f8f8f8;
            }
        }
    }
</style>
<script>
    let Mock = require('mockjs'); // 测试数据
    export default {
        name: 'base2',
        data () {
            return {
                tabList: ['基础', '实例'],
                tabIndex: 0,
                popup: {
                    visible: false,
                    title: '我是弹出层',
                    width: '350px', // 弹出层的宽度 默认是350px
                    flag: 2 // 控制显示添加或者删除区域
                }
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
        components: {},
        methods: {
            // 表单保存操作
            handleSave () {
                this.$toast('操作成功！');
            },

            // 弹出层 - 添加按钮
            handleAdd () {
                this.popup.visible = true;
                this.popup.title = '添加';
                this.popup.width = '550px';
                this.popup.flag = 1;
            },

            // 弹出层 - 删除按钮
            handleDelete () {
                this.popup.visible = true;
                this.popup.title = '删除';
                this.popup.width = '350px';
                this.popup.flag = 2;
            }
        },
        created () {
        }
    };
</script>
