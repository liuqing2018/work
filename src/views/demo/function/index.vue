<template>
    <div class="c-main">
        <!-- 常用方法使用说明 Start -->
        <h3 class="c-headline m-bottom-10">常用方法（function）使用说明：</h3>
        <p class="c-headline c-prefix c-no-border">说明：如果是绑定插件，相关的方法已经绑定在Vue.prototype.$xxx上，用Vue.$xxx()或者this.$xxx()（此处的this指向Vue）</p>
        <table class="c-table c-stripe c-border c-hover c-state">
            <thead>
                <tr>
                    <th>方法名称</th>
                    <th>方法说明</th>
                    <th>使用场景</th>
                    <th>是否绑定插件</th>
                    <th>实例</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in dataList" :key="item.id">
                    <td v-text="item.fname"></td>
                    <td v-text="item.cname"></td>
                    <td v-text="item.description"></td>
                    <td v-text="item.bind"></td>
                    <td><a :href="item.url">查看实例</a></td>
                </tr>
            </tbody>
        </table>
        <!-- 公共类 End -->
    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>

</style>
<script>
    export default {
        name: 'function-index',
        data () {
            return {
                dataList: []
            };
        },
        computed: {},
        components: {},
        methods: {
            getData () {
                this.$http.get('static/data/function-data.json').then(data => {
                    if (data.status === 0) {
                        this.dataList = data.result;
                    }
                }, error => {
                    console.log(error);
                });
            }
        },
        created () {
            this.getData(); // 获取数据
        }
    };
</script>
