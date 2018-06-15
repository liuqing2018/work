<template>
    <div class="c-main">
        <h3 class="c-headline m-bottom-10"> 数组去重复 （unique）</h3>
        <p class="c-headline c-prefix c-no-border">作用：数组去重，支持类型检查</p>
        <div v-highlight>
            <pre>
                <code class="javascript">
                    let arr = ['1', '2', '3', 1, 2, 3, 4, 5, 'abc', 'ab', 'abc', '99', 9, '12'];

                    let arr2 = this.$unique(arr);
                    console.log(arr2);
                    // ["1", "2", "3", 4, 5, "abc", "ab", "99", 9, "12"]

                    let arr3 = this.$unique(arr, true); // 启用严格模式
                    console.log(arr3);
                    // ["1", "2", "3", 1, 2, 3, 4, 5, "abc", "ab", "99", 9, "12"]
                </code>
            </pre>

            <p class="p-10">{{arr2}}</p>
            <div class="p--bottom-10">
                <button class="c-btn c-primary" @click="handleUnique()">不检查类型</button>
            </div>

            <p class="p-10">{{arr3}}</p>
            <div class="p--bottom-10">
                <button class="c-btn c-primary" @click="handleUnique(true)">检查类型</button>
            </div>

        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
</style>

<script>
    export default {
        name: '',
        data () {
            return {
                arr: ['1', '2', '3', 1, 2, 3, 4, 5, 'abc', 'ab', 'abc', '99', 9, '12'],
                arr2: [],
                arr3: []
            };
        },
        computed: {},
        components: {},
        methods: {
            handleUnique (flag) {
                if (flag) {
                    this.arr3 = this.$unique(this.arr, flag);
                } else {
                    this.arr2 = this.$unique(this.arr);
                }
            }
        },
        created () {

        }
    };
</script>
