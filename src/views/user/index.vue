<template>
    <div>
        <h3>用户信息</h3>
        <ul>
            <li v-for="(item, index) in userList" :key="index">{{item}}</li>
            <li>sss</li>
        </ul>
        <button type="button">我是按钮</button>
        <router-link to="/test">test</router-link>
        <!--<el-table :data="tableData" style="width: 100%">-->
            <!--<el-table-column prop="date" label="日期" width="180">-->
            <!--</el-table-column>-->
            <!--<el-table-column prop="name" label="姓名" width="180">-->
            <!--</el-table-column>-->
            <!--<el-table-column prop="address" label="地址">-->
            <!--</el-table-column>-->
        <!--</el-table>-->

        <!--<div class="block">-->
            <!--<span class="demonstration">页数较少时的效果</span>-->
            <!--<el-pagination-->
                    <!--layout="prev, pager, next"-->
                    <!--:total="50">-->
            <!--</el-pagination>-->
        <!--</div>-->
        <!--<div class="block">-->
            <!--<span class="demonstration">大于 7 页时的效果</span>-->
            <!--<el-pagination-->
                    <!--layout="prev, pager, next"-->
                    <!--:total="1000">-->
            <!--</el-pagination>-->
        <!--</div>-->
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        created () {
            this.$message({
                message: '居中的文字',
                center: true
            });
            this.$toast('我是提示信息！');
            this.getUsers();
        },
        data () {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            };
        },
        computed: {
            ...mapState({
                vm: state => state.user.vm,
                userList: state => state.user.userList
            })
        },
        methods: {
            ...mapActions([
                'getUsers'
            ])
        },
        mounted () {
            console.log(this.userList);
        }
    };
</script>
