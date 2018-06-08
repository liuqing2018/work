<template>
    <div class="error-page">
        <div class="error-code">4<span>0</span>3</div>
        <div class="error-desc">您一定是穿越过来的~~~</div>
        <div class="error-handle">
            <router-link to="/">
                <el-button type="primary" size="large">返回首页</el-button>
            </router-link>
            <el-button class="error-btn" type="primary" size="large" @click="goBack">返回上一页</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            goBack () {
                this.$router.go(-1);
            }
        }
    };
</script>

<style lang="less" rel="stylesheet/less" scoped>
    @import "../../assets/css/modules/variables.less";
    .error-page {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background: @input-bg;
        box-sizing: border-box;
    }

    .error-code {
        line-height: 1;
        font-size: 250px;
        font-weight: bolder;
        color: @brand-warning;
    }

    .error-code span {
        color: @brand-warning;
    }

    .error-desc {
        font-size: 30px;
        color: @color-666;
    }

    .error-handle {
        margin-top: 30px;
        padding-bottom: 200px;
    }

    .error-btn {
        margin-left: 100px;
    }
</style>
