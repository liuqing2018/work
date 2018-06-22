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
        <p>checkFile、fileToBase64和upload，因为用的频率比较少，就没有挂到Vue.prototype.$xxx上面</p>

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
    import checkFile from './CheckFile.vue';
    export default {
        name: '',
        data () {
            return {
                tabList: [
                    {
                        id: 0,
                        key: 'checkFile',
                        value: '上传前检测'
                    },
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
            uploadFile,
            checkFile
        },
        methods: {},
        created () {
        }
    };
</script>
