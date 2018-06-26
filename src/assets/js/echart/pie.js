/**
 * Created by Administrator on 2018/6/20.
 */
import { colorData } from '../common';
// 引入 ECharts 主模块
const echarts = require('echarts/lib/echarts');

// 引入饼形图
require('echarts/lib/chart/pie');

// 引入提示框
require('echarts/lib/component/tooltip');

// 引入标题组件
require('echarts/lib/component/title');

// 引入工具箱组件
require('echarts/lib/component/toolbox');

// 引入图例组件
require('echarts/lib/component/legendScroll');

const pie = function (id, params) {
    // 初始化配置
    if (!params.legend) {
        params.legend = {};
    }

    if (!params.toolbox) {
        params.toolbox = {};
    }

    let config = {
        title: params.title || '', // 图表标题
        xData: params.xData || [], // x轴数据
        yData: params.yData || [], // y轴数据
        colorData: params.colorData || colorData, // 颜色列表，依次循环
        radius: params.radius || ['50%', '80%'], // 第一项是内半径，第二项是外半径 [0, '75%']
        position: params.position || ['50%', '50%'], // 相对于坐标轴位置
        labelLine: (params.labelLine === undefined ? true : params.labelLine), // 是否外围标签

        // legend 图例配置
        legend: {
            show: (params.legend.show === undefined ? true : params.legend.show), // 是否显示图例
            formatter: params.legend.formatter || '', // 格式化图例
            padding: params.legend.padding || [10, 100], // 图例的内填充，[上下, 左右]
            orient: params.legend.orient || 'horizontal', // 图例的排列方向：水平或者垂直'vertical'
            left: params.legend.left || 'center', // 整体图例的左边距
            top: params.legend.top || '' // 整体图例的上边距
        },

        // toolbox 工具箱配置
        toolbox: {
            show: (params.toolbox.show === undefined ? true : params.toolbox.show), // 是否显示工具箱
            // 自定义的工具, 参考地址 http://echarts.baidu.com/option.html#toolbox.feature
            myToolboxs: params.toolbox.myToolboxs, // 自定义工具
            right: params.toolbox.right || '3%', // 工具箱的右边距
            top: params.toolbox.top || 'auto' // 工具箱的上边距
        }
    };

    // 处理legend和series
    let legendData = [];
    let seriesData = [];
    config.yData.forEach(function (item, index) {
        let serie = {};
        serie.name = item.name;
        serie.data = item.value;
        serie.type = 'pie'; // 柱状图
        serie.center = item.center || config.position;

        item.value.forEach(function (data) {
            legendData.push(data.name);
        });

        // 第一个取全局配置
        if (index === 0) {
            serie.radius = item.radius || config.radius;
            if (config.yData.length > 1) {
                serie.radius = item.radius || [0, '30%'];
                config.labelLine = false;
            }
        } else {
            serie.radius = item.radius || ['40%', '55%'];
            if (config.yData.length > 1) {
                config.labelLine = true;
            }
        }

        serie.label = {
            normal: {
                show: true,
                position: config.labelLine ? '' : 'inside',
                formatter: (config.labelLine ? '{b} : {c} ({d}%)' : '{a}')
                /*
                 * a：series name
                 * b: item name
                 * c： value
                 * d: percent
                 * */
            }
        };
        serie.labelLine = {
            normal: {
                show: config.labelLine
            }
        };

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
            trigger: 'item',

            // 饼图、仪表盘、漏斗图: {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
            formatter: '{a} <br/>{b} : {c} ({d}%)'
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
                        let table = '<table class="c-table c-stripe c-border c-hover">';

                        // 处理表头
                        seriesData.forEach(function (item) {
                            // 设置系列标题
                            table += '<tr><th colspan="' + (item.data.length + 1) + '">' + item.name + '</th></tr>';

                            // 设置系列内容
                            let name = '<tr><th>名称</th>'; // 名称
                            let value = '<tr><th>数据</th>'; // 值
                            item.data.forEach(function (data) {
                                name += '<td>' + data.name + '</td>';
                                value += '<td>' + data.value + '</td>';
                            });
                            name += '</tr>';
                            value += '</tr>';
                            table += name + value;
                        });

                        table += '</table>';
                        return table;
                    }
                },

                // 还原数据
                restore: {
                    show: false
                },

                // 下载图片
                saveAsImage: {}
            }
        },

        // 颜色列表
        color: config.colorData,

        // 设置系列
        series: seriesData
    };

    // 如果设置显示工具箱并且有自定义工具
    if (config.toolbox.show && config.toolbox.myToolboxs) {
        config.toolbox.myToolboxs.forEach(function (item, index) {
            option.toolbox.feature['myTool' + index] = item;
        });
    }

    let pieChart = echarts.init(document.getElementById(id));

    // 返回echarts实例，用于别的操作，如getDataURL导出图片
    return pieChart.setOption(option);
};

export default pie;
