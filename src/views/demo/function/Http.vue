<template>
    <div class="c-main">
        <h3 class="c-headline m-bottom-10">数据交互（http）</h3>
        <p class="c-headline c-prefix c-no-border">基于axios库的二次封装，添加了一些统一处理，保留了原生axios的接口</p>
        <div v-highlight>
            <pre>
                <code class="javascript">
                    // 使用http.get获取数据
                    export default {
                        name: 'function-index',
                        data () {
                            return {
                                dataList: [ ]
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
                </code>
            </pre>
        </div>
        <p class="c-headline c-prefix c-no-border m-10">相关方法:</p>
        <table class="c-table c-stripe c-border c-hover c-state">
            <tbody>
            <tr>
                <td>http.get(url, data, params)</td>
            </tr>
            <tr>
                <td>http.post(url, data, params)</td>
            </tr>
            <tr>
                <td>http.put(url, data, params)</td>
            </tr>
            <tr>
                <td>http.delete(url, data, params)</td>
            </tr>
            <tr>
                <td>http.native(params)</td>
            </tr>
            </tbody>
        </table>

        <p class="c-headline c-prefix c-no-border m-10">相关参数:</p>
        <table class="c-table c-stripe c-border c-hover c-state">
            <thead>
            <tr>
                <th>名称</th>
                <th>类型</th>
                <th>说明</th>
                <th>必填参数</th>
                <th>默认值</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>url</td>
                <td>String</td>
                <td>接口地址</td>
                <td>Y</td>
                <td>-</td>
            </tr>
            <tr>
                <td>data</td>
                <td>Object</td>
                <td>传递的参数</td>
                <td>N</td>
                <td>{}</td>
            </tr>
            <tr>
                <td>params</td>
                <td>Object</td>
                <td>其他配置，如headers</td>
                <td>N</td>
                <td>-</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>

</style>
<script>
    export default {
        name: '',
        data () {
            return {};
        },
        computed: {},
        components: {},
        methods: {},
        created () {
        }
    };
</script>
