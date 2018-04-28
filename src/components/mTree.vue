<template>
    <ul class="tree">
        <li>
            <span v-html="data.title" @click="nodeClick(data.title)"></span>
            <m-tree v-for="(item , idx) in data.children" :data="item" :key="idx" @nodeClick="outClick"></m-tree>
        </li>
    </ul>
</template>
<style>
    .tree {
        padding-left: 20px;
    }

    li {
        /*border: 1px solid red;*/
    }
</style>

<script>
    export default {
        name: 'mTree',
        props: {
            data: {
                type: Object,
                default () {
                    return {};
                }
            }
        },
        methods: {
            nodeClick (title) {
                this.$emit('nodeClick', title);
            },
            outClick (title) {
                this.$emit('nodeClick', title);
            }
        }
    };
</script>
