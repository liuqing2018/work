<template>
    <el-footer class="footer-bg">
      版权所有：中国智能交通&nbsp;北京智讯天成技术有限公司V1.0版&nbsp;|&nbsp;服务电话：010&nbsp;8888&nbsp;8888
    </el-footer>
</template>
<script>
    export default {
        name: 'Footer',
        data () {
            return {

            };
        }
    };
</script>
<style lang="less" scoped>
    @import "../../assets/css/modules/variables";
    @lineHeight-word:34px;
    .footer-bg{
        border-top: 1px solid @border-color;
        line-height: @lineHeight-word;
        /*position: absolute;*/
        /*right: 0;*/
        bottom: 0;
    }

</style>
