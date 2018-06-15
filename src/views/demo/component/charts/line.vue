<template>
    <div class="c-main">
        {{chartColors}}
        <hr>
        <h3 class="c-headline">折线图</h3>
        <div class="p-10">
            <ve-line :data="chartData" :colors="chartColors"></ve-line>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VeLine from 'v-charts/lib/line';
    Vue.component(VeLine.name, VeLine);
    export default {
        data: function () {
            this.chartSettings = {};
            this.chartColors = ['#f00', '#0f0', '#f00'];
            return {
                chartData: {}
            };
        },
        created () {
            let _this = this;
            setTimeout(function () {
                console.log('数据获取成功！');
                _this.chartData = {
                    columns: ['日期', '访问用户', '下单用户', '下单率', '访问用户2', '下单用户2', '下单率2'],
                    rows: [
                        {'日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32, '访问用户2': 2393, '下单用户2': 13, '下单率2': 0.44},
                        {'日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26, '访问用户2': 1493, '下单用户2': 193, '下单率2': 0.92},
                        {'日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76, '访问用户2': 1193, '下单用户2': 93, '下单率2': 0.72},
                        {'日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49, '访问用户2': 1893, '下单用户2': 109, '下单率2': 0.62},
                        {'日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.33, '访问用户2': 1383, '下单用户2': 19, '下单率2': 0.52},
                        {'日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78, '访问用户2': 1593, '下单用户2': 13, '下单率2': 0.12}
                    ]
                };
            }, 3000);
        }
    };
</script>
