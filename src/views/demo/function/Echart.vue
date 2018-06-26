<template>
    <div class="c-main">
        <h3 class="c-headline m-bottom-10"> Echarts图表</h3>
        <p class="c-headline c-prefix c-no-border">基于Echart封装的数据可视化图表方法，折线图、柱状图、饼状图</p>
        <div id="pie3" style="width: 100%; height: 400px;"></div>
        <div id="pie2" style="width: 100%; height: 400px;"></div>
        <div id="pie" style="width: 100%; height: 400px;"></div>
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
</style>

<script>
    import { line, bar, pie } from '../../../assets/js/echart/index';
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
            },

            pie () {
                pie('pie', {
                    title: '我是圆环图',
                    radius: ['50%', '80%'],
                    yData: [
                        {
                            name: '历年数据',
                            value: [
                                {
                                    name: '直接访问',
                                    value: 18203
                                },
                                {
                                    name: '邮件营销',
                                    value: 23438
                                },
                                {
                                    name: '联盟广告',
                                    value: 13438
                                }
                            ]
                        }
                    ]
                });
            },

            pie2 () {
                pie('pie2', {
                    title: '我是饼图',
                    radius: [0, '80%'],
                    yData: [
                        {
                            name: '历年数据',
                            value: [
                                {
                                    name: '直接访问',
                                    value: 18203
                                },
                                {
                                    name: '邮件营销',
                                    value: 23438
                                },
                                {
                                    name: '联盟广告',
                                    value: 13438
                                }
                            ]
                        }
                    ]
                });
            },

            pie3 () {
                pie('pie3', {
                    title: '我是饼图 - 嵌套',
                    yData: [
                        {
                            name: '访问来源',
                            value: [
                                {
                                    name: '直达',
                                    value: 18203
                                },
                                {
                                    name: '营销广告',
                                    value: 23438
                                },
                                {
                                    name: '搜索引擎',
                                    value: 13438
                                }
                            ]
                        },
                        {
                            name: '访问来源',
                            value: [
                                {
                                    name: '直达',
                                    value: 12345
                                },
                                {
                                    name: '邮件营销',
                                    value: 23456
                                },
                                {
                                    name: '视频广告',
                                    value: 13245
                                }
                            ]
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
            this.bar2();
            this.pie();
            this.pie2();
            this.pie3();
        }
    };
</script>
