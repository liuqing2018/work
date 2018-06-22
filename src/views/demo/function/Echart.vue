<template>
    <div class="c-main">
        <h3 class="c-headline m-bottom-10"> Echarts图表</h3>
        <p class="c-headline c-prefix c-no-border">基于Echart封装的数据可视化图表方法，折线图、柱状图、饼状图</p>
        <div id="bar2" style="width: 100%; height: 400px;"></div>
        <div id="bar" style="width: 100%; height: 400px;"></div>
        <div id="line" style="width: 100%; height: 400px;"></div>
        <div v-highlight>
            <pre>
                <code class="javascript">

                </code>
            </pre>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
    .test {
        color: #4fc3ba;
        color: #5bb5d8;
        color: #f47564;
        color: #f39c11;
        color: #c1e5e1;
        color: #c5e0eb;
        color: #f4cdc8;
        color: #f2dbaf;
        color: #91d6d1;
        color: #99cde3;
        color: #f4a79d;
        color: #f3bf6c;
    }
</style>

<script>
    import { line, bar } from '../../../assets/js/echart/index';
    export default {
        name: '',
        data () {
            return {};
        },
        computed: {},
        components: {},
        methods: {
            line () {
                line('line', {
                    title: '折线图',
                    xData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    yData: [
                        {
                            name: '登录人数',
                            value: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '在线人数',
                            value: [820, 932, 901, 934, 1290, 1330, 1320]
                        },
                        {
                            name: '访问率',
                            value: [150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name: '成交量',
                            value: [320, 332, 301, 334, 390, 330, 320]
                        }
                    ]
                });
            },

            bar () {
                bar('bar', {
                    title: '柱状图',
                    xData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    // orient: true,
                    yData: [
                        {
                            name: '登录人数',
                            value: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '在线人数',
                            value: [820, 932, 901, 934, 1290, 1330, 1320]
                        },
                        {
                            name: '访问率',
                            value: [150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name: '成交量',
                            value: [320, 332, 301, 334, 390, 330, 320]
                        }
                    ]
                });
            },

            bar2 () {
                bar('bar2', {
                    title: '柱状图',
                    xData: ['巴西', '印尼', '中国', '世界人口(万)'],
                    orient: true,
                    yData: [
                        {
                            name: '2011年',
                            value: [18203, 23489, 229034, 630230]
                        },
                        {
                            name: '2012年',
                            value: [19325, 23438, 321000, 681807]
                        },
                        {
                            name: '2013年',
                            value: [29325, 13438, 112000, 281807]
                        }
                    ]
                });
            }
        },
        created () {
        },
        mounted () {
            this.line();
            this.bar();
            this.bar2();
        }
    };
</script>
