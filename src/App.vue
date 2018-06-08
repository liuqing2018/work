<template>
    <div class="inner" id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import 'animate.css/animate.min.css';
    import './assets/iconfont/iconfont.css';
    export default {
        name: 'App',
        created () {
        }
    };
</script>

<style lang="scss">
    @import "./assets/css/element-variables.scss";
</style>

<style lang="less">
    @import "./assets/css/style.less";
</style>
