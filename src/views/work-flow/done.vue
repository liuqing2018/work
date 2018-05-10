<template>
    <section class="el-container is-vertical">
        <header class="el-header">
            <div class="source">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="中文名">
                        <el-input v-model="formInline.user"></el-input>
                    </el-form-item>
                    <el-form-item label="登录名">
                        <el-input v-model="formInline.user"></el-input>
                    </el-form-item>
                    <el-form-item label="状态:">
                        <el-radio-group v-model="radio">
                            <el-radio :label="1">启用</el-radio>
                            <el-radio :label="2">禁用</el-radio>
                            <el-radio :label="3">注销</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item class="fr">
                        <a class="a-click m-right-20" href="#">更多查询条件∨</a>
                        <button @click="onSubmit" class="c-btn c-primary" type="button">查询</button>
                    </el-form-item>
                  </el-form>
            </div>
        </header>
        <p class="tit-c-main">
            <span>人员基本信息存储表</span>
            <a @click="onSubmit" class="fr m-right-20" href="#">＆导出</a>
            <a @click="onSubmit" class="fr m-right-20" href="#">＆新增</a>
        </p>
        <main class="el-main c-main auth">
              <!-- 列表 Start -->
              <div class="c-table-list auth-list m-bottom-20">
                  <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" :default-sort="{prop:'value4',order:'descending'}" stripe>
                      <el-table-column label="序号" width="100" align="left" type="index"></el-table-column>
                      <el-table-column label="中文名称" align="left" prop="value1"></el-table-column>
                      <el-table-column label="登录名" align="left" prop="value2"></el-table-column>
                      <el-table-column label="状态" align="left" prop="value3"></el-table-column>
                      <el-table-column label="注册时间" align="left" prop="value4" sortable></el-table-column>
                      <el-table-column label="性别" align="left" prop="value5"></el-table-column>
                      <el-table-column label="部门" align="left" prop="value6"></el-table-column>
                      <el-table-column label="岗位" align="left" prop="value7"></el-table-column>
                      <el-table-column label="操作" align="left">
                          <template slot-scope="scope">
                              <div>
                                  <a @click="onSubmit" class="show-underline a-click" href="#">查看</a>
                                  <a @click="onSubmit" class="show-underline a-click" href="#">编辑</a>
                                  <a @click="onSubmit" class="show-underline a-click" href="#">删除</a>
                              </div>
                          </template>
                      </el-table-column>
                  </el-table>
              </div>
              <!-- 列表 End -->
              <!-- 分页 Start -->
              <div class="t-right">
                  <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="currentPage"
                      :page-sizes="[5, 10, 20, 30, 40]"
                      :page-size="5"
                      layout="total, sizes, prev, pager, next, jumper"
                      prev-text="上一页"
                      next-text="下一页"
                      :total="tableData.length">
                  </el-pagination>
              </div>
              <!-- 分页 End -->
        </main>
    </section>
</template>
<script>
    export default {
        data () {
            return {
                currentPage: 1,
                pagesize: 5,
                formInline: {
                    user: '',
                    region: ''
                },
                radio: 1,
                tableData: [
                    {
                        value1: '光电缆政治工区域',
                        value2: 'wertyukjhg',
                        value3: '启用',
                        value4: '2018-05-03 09:30:15',
                        value5: '男',
                        value6: '黄石通信车间',
                        value7: '主任'
                    },
                    {
                        value1: '赵永铭',
                        value2: 'wertyukjhg',
                        value3: '启用',
                        value4: '2018-05-03 09:30:16',
                        value5: '女',
                        value6: '汉口动车组无线检修工区',
                        value7: '副主任'
                    },
                    {
                        value1: '汉口动车组无线检修工区',
                        value2: 'wertyukjhg',
                        value3: '启用',
                        value4: '2018-05-03 09:30:17',
                        value5: '男',
                        value6: '汉口动车组无线检修工区',
                        value7: '车间主任'
                    },
                    {
                        value1: '光电缆政治工区域',
                        value2: 'wertyukjhg',
                        value3: '启用',
                        value4: '2018-05-03 09:30:18',
                        value5: '男',
                        value6: '黄石通信车间',
                        value7: '主任'
                    },
                    {
                        value1: '赵永铭',
                        value2: 'wertyukjhg',
                        value3: '启用',
                        value4: '2018-05-03 09:30:19',
                        value5: '女',
                        value6: '汉口动车组无线检修工区',
                        value7: '副主任'
                    },
                    {
                        value1: '汉口动车组无线检修工区',
                        value2: 'wertyukjhg',
                        value3: '启用',
                        value4: '2018-05-03 09:30:26',
                        value5: '男',
                        value6: '汉口动车组无线检修工区',
                        value7: '车间主任'
                    },
                    {
                        value1: '光电缆政治工区域',
                        value2: 'wertyukjhg',
                        value3: '启用',
                        value4: '2018-05-03 09:30:36',
                        value5: '男',
                        value6: '黄石通信车间',
                        value7: '主任'
                    },
                    {
                        value1: '赵永铭',
                        value2: 'wertyukjhg',
                        value3: '启用',
                        value4: '2018-05-03 09:30:46',
                        value5: '女',
                        value6: '汉口动车组无线检修工区',
                        value7: '副主任'
                    },
                    {
                        value1: '汉口动车组无线检修工区',
                        value2: 'wertyukjhg',
                        value3: '启用',
                        value4: '2018-05-03 09:30:66',
                        value5: '男',
                        value6: '汉口动车组无线检修工区',
                        value7: '车间主任'
                    },
                    {
                        value1: '汉口动车组无线检修工区',
                        value2: 'wertyukjhg',
                        value3: '启用',
                        value4: '2018-05-03 09:31:16',
                        value5: '男',
                        value6: '汉口动车组无线检修工区',
                        value7: '车间主任'
                    },
                    {
                        value1: '汉口动车组无线检修工区',
                        value2: 'wertyukjhg',
                        value3: '启用',
                        value4: '2018-05-03 09:31:16',
                        value5: '男',
                        value6: '汉口动车组无线检修工区',
                        value7: '车间主任'
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
                    value5: '',
                    value6: '',
                    value7: ''
                }
            };
        },
        methods: {
            onSubmit () {
                alert('Have not been done!');
            },
            handleSizeChange: function (size) {
                this.pagesize = size;
            },
            handleCurrentChange: function (currentPage) {
                this.currentPage = currentPage;
            }
        }
    };
</script>
<style lang="less">
    @import "../../assets/css/override-element-ui-lzl.less";
</style>
