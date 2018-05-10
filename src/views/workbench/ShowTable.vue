<template>
    <div>
        <el-table
            :data="tableData"
            mini
            stripe
            style="width: 100%">
            <el-table-column
                prop="taskName"
                label="任务名称">
            </el-table-column>
            <el-table-column
                prop="date"
                label="创建时间"
                width="180">
            </el-table-column>
            <el-table-column
                prop="person"
                label="执行人"
                width="180">
            </el-table-column>
        </el-table>
      <el-pagination
        background
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
</template>

<script>
    export default {
        name: 'ShowTable',
        data () {
            return {
                currentPage1: 1,
                currentPage2: 2,
                currentPage3: 3,
                currentPage4: 4,
                tableData: [{
                    taskName: '单据审批处理单据审批处理',
                    date: '2016/02/17 11:10:11',
                    person: '张三'
                }, {
                    taskName: '单据审批处理单据审',
                    date: '2016/02/17 11:10:11',
                    person: '张三'
                }, {
                    taskName: '单据审批处理单据审批处理',
                    date: '2016/02/17 11:10:11',
                    person: '张三'
                }, {
                    taskName: '单据审批处理单据审批处理',
                    date: '2016/02/17 11:10:11',
                    person: '张三'
                }, {
                    taskName: '单据审批处理单据审',
                    date: '2016/02/17 11:10:11',
                    person: '张三'
                }, {
                    taskName: '单据审批处理单据审批处理',
                    date: '2016/02/17 11:10:11',
                    person: '张三'
                }, {
                    taskName: '单据审批处理单据审批处理',
                    date: '2016/02/17 11:10:11',
                    person: '张三'
                }]
            };
        }
    };
</script>

<style lang="less" scoped>
  @import "../../assets/css/modules/variables";
  .el-pagination{
    padding-top: 15px;
    text-align: center;
  }
</style>
