<template>
    <div class="error-page">
        <div class="error-code">4<span>0</span>4</div>
        <div class="error-desc">OMG~ 您要的页面去火星了~~~</div>
        <div class="error-handle">
            <router-link to="/">
                <el-button type="primary" size="large">返回首页</el-button>
            </router-link>
            <el-button class="error-btn" type="primary" size="large" @click="goBack">返回上一页</el-button>

            <button class="c-btn c-primary" type="button">返回首页</button>
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
        color: @brand-info;
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
