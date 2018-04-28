/**
 * Created by Administrator on 2018/04/23.
 */
let echarts = require('echarts');
let colorList = ['#4fc3ba', '#5bb5d8', '#f47564', '#f39c11', '#c1e5e1', '#c5e0eb', '#f4cdc8', '#f2dbaf', '#91d6d1', '#99cde3', '#f4a79d', '#f3bf6c'];
export const barCharts = function (params) {
    let option = {
        title: {
            text: params.title || '',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '1%',
            right: '4%',
            top: '10%',
            bottom: '6%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: params.xAxisData,
                axisTick: {
                    alignWithLabel: true,
                    show: false
                },
                splitLine: {
                    show: true,
                    interval: 0
                },
                axisLabel: {
                    textStyle: {
                        color: '#919599'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: '#919599'
                    }
                },
                splitNumber: 3
            }
        ],
        series: [
            {
                name: params.seriesName,
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: function (params) {
                            // build a color map as your need.
                            return colorList[params.dataIndex % colorList.length];
                        },
                        // 以下为是否显示，显示位置和显示格式的设置了
                        label: {
                            show: true,
                            position: 'top',
                            //                             formatter: '{c}'
                            formatter: '{c}'
                        }
                    }
                },
                barWidth: '60%',
                data: params.seriesData
            }
        ]
    };

    let barChart = echarts.init(document.getElementById(params.elem));
    barChart.setOption(option);
};

export const barHorizontalCharts = function (params) {
    let option = {
        title: {
            text: params.title || '',
            subtext: params.subTitle || ''
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            // position: ['50%', '50%']
            show: false
        },
        legend: {
            data: params.legendData || [],
            show: params.legendVisiable || false,
            position: params.legendPosition
        },
        grid: {
            top: params.gridTop || '3%',
            left: params.gridLeft || '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: params.yAxisData || ''
        },
        series: []
    };

    let colors = params.colorList || colorList;
    for (let i = 0, j = params.seriesData.length; i < j; i++) {
        option.series[i] = {};
        option.series[i].name = params.seriesData[i][0];
        option.series[i].data = params.seriesData[i][1];
        option.series[i].type = 'bar';
        option.series[i].itemStyle = {
            color: colors[i]
        };
    }
    let barChart = echarts.init(document.getElementById(params.elem));
    barChart.setOption(option);
};

export const barMultipleCharts = function (params) {
    let option = {
        title: {
            text: params.title || '',
            left: 'center',
            top: 0
        },
        color: ['#00bdff', '#f67124'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: params.legend || [],
            textStyle: {
                color: '#919599'
            },
            top: 40
        },
        grid: {
            left: '1%',
            right: '4%',
            top: '20%',
            bottom: '6%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: params.xAxis,
            axisTick: {
                alignWithLabel: true
            },
            splitLine: {
                show: true,
                interval: 0
            },
            axisLabel: {
                textStyle: {
                    color: '#919599'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#919599'
                }
            },
            splitNumber: 4
        },
        series: [
            {
                name: params.series[0].name,
                type: 'bar',
                data: params.series[0].data,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            // build a color map as your need.
                            return colorList[params.dataIndex % colorList.length];
                        },
                        // 以下为是否显示，显示位置和显示格式的设置了
                        label: {
                            show: true,
                            position: 'top',
                            //                             formatter: '{c}'
                            formatter: '{c}'
                        }
                    }
                }
            },
            {
                name: params.series[1].name,
                type: 'bar',
                data: params.series[1].data
            },
            {
                name: params.series[2].name,
                type: 'bar',
                data: params.series[2].data
            }
        ]
    };

    let barChart = echarts.init(document.getElementById(params.elem));
    barChart.setOption(option);
};

export const lineChart = function (params) {
    let option = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '1%',
            right: '4%',
            top: '10%',
            bottom: '6%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: params.xAxis,
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#60abd3'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#919599'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#60abd3'
                }
            },
            splitNumber: 3,
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#919599'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#60abd3'
                }
            }
        },
        series: [
            {
                name: params.name,
                type: 'line',
                data: params.data
            }
        ]
    };
    let checkPersonNumChart = echarts.init(document.getElementById(params.elem));
    checkPersonNumChart.setOption(option);
};

export const pieChart = function chartsPie (params) {
    let option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: params.orient || 'horizontal',
            left: params.left || 'center',
            top: params.top || '',
            data: params.legend
        },
        color: params.colorList || colorList,
        series: [
            {
                name: params.seriesName,
                type: 'pie',
                radius: params.radius || ['50%', '80%'],
                center: params.center || ['50%', '60%'],
                data: params.seriesData,
                label: {
                    normal: {
                        show: true,
                        position: params.labelLine ? '' : 'inside',
                        formatter: '{b} : {c} ({d}%)'
                        // formatter: '{c}'

                        /*
                         * a：series name
                         * b: item name
                         * c： value
                         * d: percent
                         * */
                    }
                },
                labelLine: {
                    normal: {
                        show: params.labelLine || false
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    let alarmDistributionChart = echarts.init(document.getElementById(params.elem));
    alarmDistributionChart.setOption(option);
};

export const pieNestingCharts = function (params) {
    let option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)',
            show: false
        },
        legend: {
            orient: 'horizontal',
            x: 'center',
            data: params.legendData || []
        },

        color: params.colorList || colorList,
        series: [
            {
                name: params.seriesName,
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '50%'],
                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: params.seriesData[0]
            },
            {
                name: params.seriesName,
                type: 'pie',
                // radius: ['40%', '55%'],
                radius: ['70%', '80%'],
                data: params.seriesData[1]
            }
        ]
    };
    let alarmDistributionChart = echarts.init(document.getElementById(params.elem));
    alarmDistributionChart.setOption(option);
};
