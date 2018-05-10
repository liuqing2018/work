<template>
    <div>
        <h3>待办事项</h3>
        <button class="c-btn c-primary" @click="handleClick">我是按钮</button>
        <div>===={{num}}</div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                num: 0
            };
        },
        components: {
        },
        methods: {
            handleClick () {
                console.log(this.num);
                this.num = this.num + 1;
            }
        }
    };
</script>
<style>

</style>
