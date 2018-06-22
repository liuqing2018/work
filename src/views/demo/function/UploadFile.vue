<template>
    <div class="">
        <p class="c-headline c-prefix c-no-border">文件上传 （upload）作用：通过formdata将文件传递给后台，支持单个或者多个上传</p>
        <div v-highlight>
            <p class="m-10">参数说明：</p>
            <div class="p--bottom-10">
            </div>
            <pre>
                <code class="javascript">
                    function upload (files, url, callback) { }
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
                        <td>files</td>
                        <td>Array</td>
                        <td>通过input的file选择的文件（可选多个）</td>
                        <td>Y</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>url</td>
                        <td>String</td>
                        <td>上传文件的接口地址</td>
                        <td>Y</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>callback(data)</td>
                        <td>Function</td>
                        <td>上传过程中的回调，可用来处理上传进度</td>
                        <td>N</td>
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
                                upload(result.data, '/api/uploads').then(data => {
                                    if (data[0].status === 0) {
                                        this.dataList = data[0].result;
                                    }
                                }, error => {
                                    console.log(error);
                                });
                            } else {
                                this.$toast(result.data);
                            }
                        }
                    },
                </code>
            </pre>
        </div>

        <p class="c-headline c-prefix c-no-border">实例：需要启动相关服务，本地是用ndoe作为服务器，运行server/index.js</p>
        <div class="demo-img-box">
            <img :src="item.path" alt="测试图片" v-for="(item, index) in dataList" :key="index">
            <p v-for="(item, index) in dataList" :key="index"> {{item}}</p>
        </div>
        <input type="file" @change="handleChange" multiple>

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
    import upload from '../../../assets/js/upload.js';
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

                // 符合要求
                if (result.status === 0) {
                    upload(result.data, '/api/uploads').then(data => {
                        if (data[0].status === 0) {
                            this.dataList = data[0].result;
                            this.$toast('上传成功！');
                        }
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
