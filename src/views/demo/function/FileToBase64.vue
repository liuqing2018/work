<template>
    <div class="">
        <p class="c-headline c-prefix c-no-border">文件转base64 （fileToBase64）作用：将文件或者图片转为base64后上传，支持单个或者多个上传</p>
        <div v-highlight>
            <p class="m-10">参数说明：</p>
            <div class="p--bottom-10">
            </div>
            <pre>
                <code class="javascript">
                    function fileToBase64 (file | files) { }
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
                        <td>file或者files</td>
                        <td>Array</td>
                        <td>通过input的file选择的文件（可选多个）</td>
                        <td>Y</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
            <pre>
                <p class="m-10">html代码：</p>
                <code class="html">
                    &lt;input type="file" @change="handleChange" multiple&gt;
                </code>
                <p class="m-10">javascript代码：</p>
                <code class="javascript">
                    data () {
                        return {
                            dataList: []
                        };
                    },
                    methods: {
                        handleChange (e) {
                            let result = checkFile(e, ['image/png', 'image/gif', 'image/jpg', 'image/jpeg']);

                            // 符合要求
                            if (result.status === 0) {

                                // 这里进行转换操作
                                fileToBase64(result.data).then(data => {
                                    this.dataList = data;
                                }, error => {
                                    console.log(error);
                                });

                            } else {
                                this.$toast(result.data);
                            }
                        }
                    }
                </code>
            </pre>

            <p class="c-headline c-prefix c-no-border">实例：</p>
            <div class="demo-img-box">
                <img :src="item" alt="测试图片" v-for="(item, index) in dataList" :key="index">
            </div>
            <input type="file" @change="handleChange" multiple>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
.demo-img-box {
    img {
        width: 100px;
        height: 100px;
    }
}
</style>

<script>
    import checkFile from '../../../assets/js/checkFile.js';
    import fileToBase64 from '../../../assets/js/fileToBase64.js';
    export default {
        name: '',
        data () {
            return {
                dataList: []
            };
        },
        computed: {},
        components: {},
        methods: {
            handleChange (e) {
                let result = checkFile(e, ['image/png', 'image/gif', 'image/jpg', 'image/jpeg']);
                console.log(result);
                // 符合要求
                if (result.status === 0) {
                    fileToBase64(result.data).then(data => {
                        this.dataList = data;
                        this.$toast('转换成功！');
                    }, error => {
                        console.log(error);
                    });
                } else {
                    this.$toast(result.data);
                }
            }
        },
        created () {
        }
    };
</script>
