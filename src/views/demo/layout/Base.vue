<template>
    <div class="c-main">
        <p>tabIndex == {{tabIndex}}</p>
        <ul class="c-tab">
            <!--<li :class="{'c-tab-item active': index === tabIndex, 'c-tab-item': index != tabIndex}" v-for="(item, index) in tabList" :key="index">-->
            <li :class="{true: 'c-tab-item active', false: 'c-tab-item'}[index === tabIndex]"
                v-for="(item, index) in tabList" :key="index" @click="tabIndex = index">
                <h3 class="c-tab-title" v-text="item"></h3>
            </li>
        </ul>

        <div v-show="tabIndex === 0">
            <h3 class="p-bottom-10">常用的类(class)如下：</h3>
            <!--<table class="c-table c-hover c-stripe c-border">-->
            <table class="c-table c-stripe c-border">
                <thead>
                    <tr>
                        <th>class</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>clearfix</td>
                        <td>清除浮动</td>
                    </tr>
                    <tr>
                        <td>center / x-center / y-center</td>
                        <td>居中对齐 / 水平居中 / 垂直居中</td>
                    </tr>
                    <tr>
                        <td>inner / x-inner / y-inner</td>
                        <td>百分百 / 宽度百分百 / 高度百分百</td>
                    </tr>
                    <tr>
                        <td>need / need-before / need-after</td>
                        <td>必填项 / *必填项 / 必填项*</td>
                    </tr>
                    <tr>
                        <td>fl / fr</td>
                        <td>左浮动 / 右浮动</td>
                    </tr>
                    <tr>
                        <td>t-center / t-left / t-right </td>
                        <td>居中对齐 / 左对齐 / 右对齐</td>
                    </tr>
                    <tr>
                        <td>m-10 / m-20</td>
                        <td>边距（四边）10px / 20px</td>
                    </tr>
                    <tr>
                        <td>m-top-10 / m-right-10 / m-bottom-10 / m-left-10</td>
                        <td>上边距10px / 右边距10px / 下边距10px / 左边距10px</td>
                    </tr>
                    <tr>
                        <td>m-top-20 / m-right-20 / m-bottom-20 / m-left-20</td>
                        <td>上边距20px / 右边距20px / 下边距20px / 左边距20px</td>
                    </tr>
                    <tr>
                        <td>p-10 / p-20</td>
                        <td>填充（四边）10px / 20px</td>
                    </tr>
                    <tr>
                        <td>p-top-10 / p-right-10 / p-bottom-10 / p-left-10</td>
                        <td>上填充10px / 右填充10px / 下填充10px / 左填充10px</td>
                    </tr>
                    <tr>
                        <td>p-top-20 / p-right-20 / p-bottom-20 / p-left-20</td>
                        <td>上填充20px / 右填充20px / 下填充20px / 左填充20px</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
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
                tabList: ['公共类', '基础表单'],
                tabIndex: 0
            };
        },
        computed: {},
        components: {},
        methods: {},
        created () {
        }
    };
</script>
