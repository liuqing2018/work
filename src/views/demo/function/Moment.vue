<template>
    <div class="c-main">
        <h3 class="c-headline m-bottom-10"> 日期格式化 moment</h3>
        <p class="c-headline c-prefix c-no-border">{{t}}</p>
        <p class="c-headline c-prefix c-no-border">{{t2}}</p>

        <div v-highlight>
            <pre>
                <code class="javascript">

                </code>
            </pre>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
</style>

<script>
    let moment = require('moment');
    export default {
        name: '',
        data () {
            return {
                t: '',
                t2: ''
            };
        },
        computed: {},
        components: {},
        methods: {
        },
        created () {
        },
        mounted () {
            // console.log(moment('1995-12-25'));
            // console.log(moment('', 'MM-DD-YYYY'));
            console.log(moment('12-25-1995').format('YYYY-MM-DD HH:mm:ss'));
            console.log(moment(1529978482841).format('YYYY-MM-DD HH:mm:ss'));
            // console.log(moment().fromNow());
            console.log(moment(new Date(1529978482841)).fromNow());
            this.t = moment(new Date(1318874398806)).fromNow();
            this.t2 = moment(1529978482841).format('YYYY-MM-DD HH:mm:ss');
        }
    };
</script>
