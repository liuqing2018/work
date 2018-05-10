<template>
    <div>
        <el-submenu :index="item.url" :key="item.id" v-for="(item) in menuList" v-if="item.second && item.second.length > 0">
            <template slot="title">
                <i :class="item.icon"></i>
                <!--<i :class="{ 'el-icon-m-double-arrow-bottom': item.checked, 'el-icon-m-double-arrow-top': !item.checked}"></i>-->
                <span slot="title">{{item.name}}</span>
            </template>
            <!-- 递归调用子菜单 Start -->
            <sub-menu :menuList="item.second"></sub-menu>
            <!-- 递归调用子菜单 End -->
        </el-submenu>
        <el-menu-item @click="handleTo(item)" :key="item.id" :index="item.url" v-else>
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
        </el-menu-item>
    </div>
</template>
<script>
    export default {
        name: 'sub-menu',
        props: {
            menuList: {
                type: Array,
                default () {
                    return [];
                }
            }
        },
        data () {
            return {};
        },
        methods: {
            handleTo (item) {
                this.$router.push({
                    path: item.url,
                    title: item.name
                });
            }
        }
    };
</script>
<style lang="less" rel="stylesheet/less">

</style>
