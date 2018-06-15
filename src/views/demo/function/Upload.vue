<template>
    <div class="c-main">
        <!-- 选项卡 Start -->
        <ul class="c-tab">
            <li :class="{true: 'c-tab-item active', false: 'c-tab-item'}[index === tabIndex]"
                v-for="(item, index) in tabList" :key="index" @click="tabIndex = index">
                <h3 class="c-tab-title" v-text="item.value"></h3>
            </li>
        </ul>
        <!-- 选项卡 End -->

        <div class="m-bottom-20" v-highlight>
            <p class="c-headline c-prefix c-no-border">checkFile.js文件，作用是在进行转换或者上传操作之前进行过滤（非必须）</p>
            <pre>
                <code class="javascript">
                    function  checkFile (e, fileType, fileSize) { }
                    function  checkFile (e, options) { }
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
                </tbody>
            </table>
        </div>
        <!-- 加载组件 Start -->
        <keep-alive>
            <component :is="tabList[tabIndex].key"></component>
        </keep-alive>
        <!-- 加载组件 End -->
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
    import fileToBase64 from './FileToBase64.vue';
    import uploadFile from './UploadFile.vue';
    export default {
        name: '',
        data () {
            return {
                tabList: [
                    {
                        id: 1,
                        key: 'fileToBase64',
                        value: '文件转base64'
                    },
                    {
                        id: 1,
                        key: 'uploadFile',
                        value: '文件上传'
                    }
                ],
                tabIndex: 0
            };
        },
        computed: {},
        components: {
            fileToBase64,
            uploadFile
        },
        methods: {},
        created () {
        }
    };
</script>
