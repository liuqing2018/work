<template>
    <div class="c-main">
        <h3 class="c-headline m-bottom-10"> 弹条提示 （toast）</h3>
        <p class="c-headline c-prefix c-no-border">作用：有些操作结束需要给客户一个提示信息，过N秒后信息自动消失，不需要客户手动点击关闭</p>

        <div v-highlight>
            <p class="m-10">直接调用，默认3m消失</p>
            <div class="p--bottom-10">
                <button class="c-btn c-primary" @click="handleClick">弹条测试,显示时间为1s</button>
            </div>
            <pre>
                <code class="javascript">
                    this.$toast('我是要显示的信息！');
                </code>
            </pre>

            <p class="m-10">自定义消失时间(单位毫秒)：</p>
            <div class="p--bottom-10">
                <button class="c-btn c-primary" @click="handleClick(5000)">弹条测试,显示时间为5s</button>
            </div>
            <pre>
                <code class="javascript">
                     this.$toast('我是要显示的信息！', 5000);
                </code>
            </pre>
        </div>
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
        methods: {
            handleClick (time = 1000) {
                this.$toast('我是要显示的信息', time);
            }
        },
        created () {
        }
    };
</script>
