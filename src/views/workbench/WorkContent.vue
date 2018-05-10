<template>
  <el-container direction="vertical">
      <el-main>
        <el-row :gutter="20">
            <el-col :span="12">
                <div>
                    <!--begin 任务信息-->
                      <Box v-bind:LittleTitle="'任务信息'">
                          <template>
                            <TaskList v-bind:listc="[
                            { message:'123', title:'待办事项', bg:'bg-red' },
                            { message:'456', title:'已办事项', bg:'bg-green' },
                            { message:'789', title:'委托事项', bg:'bg-brown' },
                            { message:'101', title:'延时事项', bg:'bg-blue' }
                            ]">
                            </TaskList>
                          </template>
                      </Box>
                    <!--end 任务信息-->
                    <!--begin 公司新闻-->
                      <Box v-bind:LittleTitle="'公司新闻'" v-bind:iconMenu="true">
                          <slot>
                            <ShowList v-bind:listCon="[
                              { txtCon: '这是一个有味道的新闻', hef: '123', dateTime: '2018-5-7' },
                              { txtCon: '红玫瑰白玫瑰', hef: '456', dateTime: '2018-5-7' },
                              { txtCon: '数据调用成功！！！', hef: '789', dateTime: '2018-5-7' }
                          ]">
                            </ShowList>
                          </slot>
                      </Box>
                    <!--end 公司新闻-->
                    <!--begin 公司文件-->
                      <Box v-bind:LittleTitle="'公司文件'" v-bind:iconMenu="true">
                        <slot>
                          <ShowList v-bind:listCon="[
                              { txtCon: '关于合同评审的公告', hef: '123', dateTime: '2016-9-6' },
                              { txtCon: '马云与扎克伯格谈人工智能：机器不会比人更明智', hef: '456', dateTime: '2016-9-6' },
                              { txtCon: '马云与扎克伯格谈人工智能：机器不会比。。。', hef: '789', dateTime: '2016-9-6' }
                          ]">
                          </ShowList>
                        </slot>
                      </Box>
                    <!--end 公司文件-->
                    <!--begin 内部公告-->
                      <Box v-bind:LittleTitle="'内部公告'" v-bind:iconMenu="true">
                        <slot>
                          <ShowList v-bind:listCon="[
                              { txtCon: '公告', hef: '123', dateTime: '2016-9-6' },
                              { txtCon: '这是一个关于红玫瑰的公告', hef: '456', dateTime: '2016-9-6' },
                              { txtCon: '小花花', hef: '789', dateTime: '2016-9-6' }
                          ]">
                          </ShowList>
                        </slot>
                      </Box>
                    <!--end 内部公告-->
                </div>
            </el-col>
            <el-col :span="12">
                <div>
                  <!--begin 任务信息-->
                  <Box v-bind:LittleTitle="'任务信息'">
                    <template>
                      <PictureCyc></PictureCyc>
                    </template>
                  </Box>
                  <!--end 任务信息-->

                  <!--begin 待办任务-->
                  <Box v-bind:LittleTitle="'待办任务'">
                    <template slot="option">
                      <article>
                        <span>|</span>
                        <button>执行任务</button>
                        <button>流程跟踪</button>
                      </article>
                    </template>
                    <template>
                      <ShowTable></ShowTable>
                    </template>
                  </Box>
                  <!--end 待办任务-->
                </div>
            </el-col>
        </el-row>
      </el-main>
      <Footer></Footer>
  </el-container>

</template>

<script>
    import Footer from './Footer';
    import Box from './Box';
    import ShowList from './ShowList';
    import PictureCyc from './PictureCyc';
    import ShowTable from './ShowTable';
    import TaskList from './TaskList';
    export default {
        name: 'WorkContent',
        components: { Footer, Box, ShowList, PictureCyc, ShowTable, TaskList },
        data () {
            return {

            };
        }
    };
</script>

<style lang="less" scoped>

</style>
