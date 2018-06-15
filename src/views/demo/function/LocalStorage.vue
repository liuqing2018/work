<template>
    <div class="c-main">
        <h3 class="c-headline m-bottom-10"> 本地存储 （getItem/setItem）</h3>
        <p class="c-headline c-prefix c-no-border">作用：简化通过window.localStorage.setItem和window.localStorage.getItem操作，并序列化和反序列化</p>

        <div v-highlight>
            <p class="m-top-10">通过setItem存储到本地：</p>
            <pre>
                <code class="javascript">
                   let user = {
                        name: 'liuqing',
                        age: 18
                    };

                    this.$setItem('user', user);

                    console.log(window.localStorage.user);

                    // {"name":"liuqing","age":18}
                </code>
            </pre>
            <p class="m-top-10">通过getItem获取存储信息：</p>
            <pre>
                <code class="javascript">
                    let user = this.$getItem('user');

                    console.log(user);

                    // {"name":"liuqing","age":18}
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
        methods: {},
        created () {
        }
    };
</script>
