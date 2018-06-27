<template>
    <div class="">
        <div class="m-bottom-20" v-highlight>
            <p class="c-headline c-prefix c-no-border">基于Echart封装的折线图（line.js）方法</p>

            <!-- 实例 Start -->
            <!-- 实例 End -->
            <pre>
                <code class="javascript">
                    function  checkFile (e, fileType, fileSize) { return result; }
                    function  checkFile (e, options) { return result; }
                </code>
            </pre>
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
                    <td>e</td>
                    <td>Event</td>
                    <td>input的file的原生事件e</td>
                    <td>Y</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>fileType</td>
                    <td>Array | String</td>
                    <td>限制上传文件的类型</td>
                    <td>N</td>
                    <td>null（不限制）</td>
                </tr>
                <tr>
                    <td>fileSize</td>
                    <td>Number</td>
                    <td>限制上传文件的大小（单位Kb）</td>
                    <td>N</td>
                    <td>2048kb</td>
                </tr>
                <tr>
                    <td>options</td>
                    <td>Object</td>
                    <td>如果只传递2个参数，第二个参数必需是一个对象（可以是{}），里面包括type和size，用来填写类型和大小</td>
                    <td>Y</td>
                    <td>{type: null, size: 2048}</td>
                </tr>
                <tr>
                    <td>result</td>
                    <td>Object</td>
                    <td>如果只传递2个参数，第二个参数必需是一个对象（可以是{}），里面包括type和size，用来填写类型和大小</td>
                    <td>Y</td>
                    <td>{type: null, size: 2048}</td>
                </tr>
                </tbody>
            </table>
            <p class="p-10"> @result </p>
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
                    <td>status</td>
                    <td>Number</td>
                    <td>0：验证通过；大于0：有不符合要求的文件</td>
                    <td>Y</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>data</td>
                    <td>Array</td>
                    <td>status等于0时，data里是符合要求的文件列表，否则是不符合文件的错误提示列表</td>
                    <td>Y</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped></style>

<script>
    export default {
        name: '',
        data () {
            return {
                dataList: []
            };
        },
        computed: {},
        components: {},
        methods: {},
        created () {
        }
    };
</script>
