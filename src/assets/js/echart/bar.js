/**
 * Created by Administrator on 2018/6/20.
 */
import { colorData } from '../common';
// 引入 ECharts 主模块
const echarts = require('echarts/lib/echarts');

// 引入柱状图
require('echarts/lib/chart/line');
require('echarts/lib/chart/bar');

// 引入提示框
require('echarts/lib/component/tooltip');

// 引入标题组件
require('echarts/lib/component/title');

// 引入工具箱组件
require('echarts/lib/component/toolbox');

// 引入图例组件
require('echarts/lib/component/legendScroll');

const bar = function (id, params) {
    // 初始化配置
    if (!params.legend) {
        params.legend = {};
    }

    if (!params.toolbox) {
        params.toolbox = {};
    }

    if (!params.grid) {
        params.grid = {};
    }

    if (!params.xAxis) {
        params.xAxis = {};
    }

    if (!params.yAxis) {
        params.yAxis = {};
    }

    let config = {
        title: params.title || '', // 图表标题
        xData: params.xData || [], // x轴数据
        yData: params.yData || [], // y轴数据
        colorData: params.colorData || colorData, // 颜色列表，依次循环
        smooth: (params.smooth === undefined ? true : params.smooth), // 平滑曲线显示
        orient: params.orient || false, // 排列方式： true 水平，false 垂直
        stack: params.stack || false, // 堆叠区域图

        // legend 图例配置
        legend: {
            show: (params.legend.show === undefined ? true : params.legend.show), // 是否显示图例
            padding: params.legend.padding || [10, 100], // 图例的内填充，[上下, 左右]
            orient: params.legend.orient || 'horizontal', // 图例的排列方向：水平或者垂直'vertical'
            left: params.legend.left || 'center', // 整体图例的左边距
            top: params.legend.top || '' // 整体图例的上边距
        },

        // toolbox 工具箱配置
        toolbox: {
            show: (params.toolbox.show === undefined ? true : params.toolbox.show), // 是否显示工具箱

            // 自定义的工具, 名字，只能以 my 开头, myToolboxs的格式如下
            // [
            //     {
            //         show: true,
            //         title: '工具的名称',
            //         icon: '工具的图标，可以是path | base64',
            //         onclick: function () {
            //             alert('自定义方法');
            //         }
            //     }
            // ]
            myToolboxs: params.toolbox.myToolboxs, // 自定义工具
            right: params.toolbox.right || '3%', // 工具箱的右边距
            top: params.toolbox.top || 'auto' // 工具箱的上边距
        },

        // grid 网格 可绘制的图形为：折线图，柱状图，散点图（气泡图）
        grid: {
            top: params.grid.top || '10%',
            right: params.grid.top || '4%',
            bottom: params.grid.top || '6%',
            left: params.grid.top || '1%'
        },

        //  x 轴
        xAxis: {
            interval: params.xAxis.interval || 0, // 坐标轴刻度标签的显示间隔
            rotate: params.xAxis.rotate || 0 // 刻度标签旋转的角度
        },

        // Y 轴
        yAxis: {
            title: params.yAxis.title || '', // y轴标题
            splitNumber: params.yAxis.splitNumber || 3, // 坐标轴的分割段数
            suffix: params.yAxis.suffix || '' // 刻度标签的内容格式
        }
    };

    // 处理legend和series
    let legendData = [];
    let seriesData = [];
    config.yData.forEach(function (item) {
        legendData.push(item.name);

        let serie = {};
        serie.name = item.name;
        serie.data = item.value;
        serie.type = 'bar'; // 柱状图
        serie.smooth = config.smooth; // 平滑曲线显示

        // 启用堆叠区域图
        if (config.stack) {
            serie.stack = '总量';
            serie.areaStyle = {normal: {}};
        }

        seriesData.push(serie);
    });

    let option = {
        title: {
            text: config.title,
            textStyle: {
                color: '#999'
            }
        },
        tooltip: {
            // 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
            trigger: 'axis',

            // 折线（区域）图、柱状（条形）图、K线图 : {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）
            // 饼图、仪表盘、漏斗图: {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
            formatter: '',

            // 坐标轴指示器，坐标轴触发有效
            axisPointer: {
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            type: 'scroll',
            show: config.legend.show,
            formatter: config.legend.formatter,
            padding: config.legend.padding,
            orient: config.legend.orient,
            left: config.legend.left,
            top: config.legend.top,
            data: legendData
        },
        toolbox: {
            show: config.toolbox.show,
            top: config.toolbox.top,
            right: config.toolbox.right,
            feature: {
                // 数据区域缩放
                dataZoom: {
                    show: false
                },

                // 数据视图
                dataView: {
                    readOnly: true,
                    title: '切换为表格视图',
                    icon: 'path//M880.64 40.96H155.306667c-47.786667 0-85.333333 37.546667-85.333334 85.333333v713.386667c0 47.786667 37.546667 85.333333 85.333334 85.333333h725.333333c47.786667 0 85.333333-37.546667 85.333333-85.333333V126.293333c0-47.786667-37.546667-85.333333-85.333333-85.333333zM390.826667 682.666667V508.586667h252.586666V682.666667H390.826667z m254.293333 34.133333v174.08H390.826667V716.8h254.293333z m0-416.426667v174.08H390.826667V300.373333h254.293333z m286.72 0v174.08H679.253333V300.373333h252.586667zM356.693333 474.453333H104.106667V300.373333h252.586666v174.08z m-252.586666 34.133334h252.586666V682.666667H104.106667V508.586667z m575.146666 0h252.586667V682.666667H679.253333V508.586667zM155.306667 75.093333h725.333333c29.013333 0 51.2 22.186667 51.2 51.2v139.946667H104.106667V126.293333c0-29.013333 22.186667-51.2 51.2-51.2z m-51.2 764.586667V716.8h252.586666v174.08H155.306667c-29.013333 0-51.2-23.893333-51.2-51.2z m776.533333 51.2H679.253333V716.8h252.586667v122.88c0 27.306667-22.186667 51.2-51.2 51.2z',
                    lang: ['表格视图', '关闭', '刷新'],
                    textColor: '#666',
                    // buttonColor: '#0094da',
                    buttonColor: '#e79d47',
                    buttonTextColor: '#fff',
                    optionToContent: function () {
                        let axisData = config.xData;
                        let series = seriesData;
                        let table = '<table class="c-table c-stripe c-border c-hover"><thead><tr><th></th>';
                        let seriesLen = series.length;

                        // 处理表头
                        for (let i = 0; i < seriesLen; i++) {
                            table += '<th>' + series[i].name + '</th>';
                        }

                        table += '</tr></thead><tbody>';

                        // 处理内容
                        for (let i = 0, len = axisData.length; i < len; i++) {
                            table += '<tr><td>' + axisData[i] + '</td>';

                            for (let j = 0; j < seriesLen; j++) {
                                table += '<td>' + series[j].data[i] + '</td>';
                            }

                            table += '</tr>';
                        }

                        table += '</tbody></table>';

                        return table;
                    }
                },

                // 动态类型切换
                magicType: {
                    // type: ['line', 'bar', 'stack', 'tiled'], //折线图、柱状图、堆叠图、平铺图
                    type: ['bar', 'line'],

                    // 设置工具栏切换图表类型对应的文字
                    title: {
                        line: '切换为折线图',
                        bar: '切换为柱状图',
                        stack: '切换为堆叠',
                        tiled: '切换为平铺'
                    },

                    // 动态类型对应的图标: 可以通过 'image://url' 设置为图片，其中 URL 为图片的链接，或者 dataURI或者path设置
                    icon: {},

                    // 动态类型切换icon样式设置: 颜色、边框、阴影、模糊、透明度、文本设置
                    iconStyle: {},

                    // 鼠标移入到工具栏样式 同iconStyle
                    emphasis: {
                        iconStyle: {}
                    },

                    // 各个类型的专有配置
                    option: {}
                },

                // 还原数据
                restore: {
                    show: false
                },

                // 下载图片
                saveAsImage: {}
            }
        },
        grid: {
            top: config.grid.top,
            right: config.grid.right,
            bottom: config.grid.bottom,
            left: config.grid.left,
            containLabel: true // 区域是否包含坐标轴的刻度标签
        },

        // 颜色列表
        color: config.colorData,
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: config.xData,

            // 坐标轴轴线相关设置
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#60abd3'
                }
            },

            // 坐标轴刻度相关设置
            axisTick: {
                show: false
            },

            // 坐标轴刻度标签的相关设置
            axisLabel: {
                interval: config.xAxis.interval, // 坐标轴刻度标签的显示间隔
                rotate: config.xAxis.rotate, // 文字的倾斜角度-90-90之间
                textStyle: {
                    color: '#919599'
                }
            }
        },
        yAxis: {
            type: 'value',

            // y轴标题
            name: config.yAxis.title,

            scale: true,

            // 坐标轴的分割段数
            splitNumber: config.yAxis.splitNumber,

            // 坐标轴轴线相关设置
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#60abd3'
                }
            },

            // 坐标轴刻度相关设置
            axisTick: {
                show: false
            },

            // 坐标轴刻度标签的相关设置
            axisLabel: {
                formatter: '{value} ' + config.yAxis.suffix,
                textStyle: {
                    color: '#919599'
                }
            },

            // 坐标轴在 grid 区域中的分隔线
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#60abd3'
                }
            }
        },

        // 设置系列
        series: seriesData
    };

    // 如果设置显示工具箱并且有自定义工具
    if (config.toolbox.show && config.toolbox.myToolboxs) {
        config.toolbox.myToolboxs.forEach(function (item, index) {
            option.toolbox.feature['myTool' + index] = item;
        });
    }

    // 处理水平排列
    if (config.orient) {
        let temp = option.xAxis;
        option.xAxis = option.yAxis;
        option.yAxis = temp;

        // 处理工具箱，不显示line了，因为数据没法看
        if (config.toolbox.show) {
            // option.toolbox.feature.magicType.type = ['bar'];
        }
    }

    // 返回echarts实例，用于别的操作，如getDataURL导出图片
    // return echarts.init(document.getElementById(id)).setOption(option);

    let barChart = echarts.init(document.getElementById(id));
    barChart.setOption(option);

    barChart.on('magictypechanged', function (option) {
        console.log(option);
    });

    return barChart;
};

export default bar;
