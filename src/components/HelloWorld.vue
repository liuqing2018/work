<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <ul>
            <li>我是列表：</li>
            <li v-for="(item, index) in userList" :key="index" @click="handleClick(item)">{{item}}</li>
        </ul>

    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'Welcome',
                data: [
                    {
                        name: 'Leo',
                        pwd: '123',
                        flag: false
                    },
                    {
                        name: 'Linker',
                        pwd: '456',
                        flag: false
                    },
                    {
                        name: 'jobs',
                        pwd: '789',
                        flag: true
                    }
                ]
            };
        },
        methods: {
            handleClick (item) {
                console.log(item);
            }
        },
        computed: {
            ...mapState({
                vm: state => state.user.vm,
                userList: state => state.user.userList
            })
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    li {
        padding: 10px;
    }

    li.active {
        border-bottom: 1px solid red;
    }
</style>
