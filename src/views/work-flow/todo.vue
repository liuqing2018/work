<template>
    <div>
        <h3>待办事项</h3>
        <button class="c-btn c-primary" @click="handleClick">我是按钮</button>
        <div>===={{num}}</div>
        <span class="need-before">测试3</span>
        <label class="need-before">测试1</label>
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
