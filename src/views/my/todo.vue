<template>
    <div>
        <h3>my- todo</h3>
        <m-tree :data="data"></m-tree>
    </div>
</template>
<script>
    import mTree from '../../components/mTree.vue';
    export default {
        data () {
            return {
                data: {
                    title: '我是菜单1',
                    children: [
                        {
                            title: '子菜单1',
                            children: [
                                {
                                    title: '子菜单11',
                                    children: [
                                        {
                                            title: '子菜单111',
                                            children: [
                                                {
                                                    title: '子菜单1111'
                                                },
                                                {
                                                    title: '子菜单1112'
                                                },
                                                {
                                                    title: '子菜单1113'
                                                }
                                            ]
                                        },
                                        {
                                            title: '子菜单112'
                                        },
                                        {
                                            title: '子菜单113'
                                        }
                                    ]
                                },
                                {
                                    title: '子菜单12'
                                },
                                {
                                    title: '子菜单13'
                                }
                            ]
                        },
                        {
                            title: '子菜单2'
                        },
                        {
                            title: '子菜单3'
                        }
                    ]
                }
            };
        },
        components: {
            mTree
        }
    };
</script>
<style>

</style>
