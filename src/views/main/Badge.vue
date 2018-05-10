<template>
    <button class="badge">
        <slot></slot>
        <span class="badge-num" :style="{color: color, backgroundColor: bgColor}" v-if="value > 0">
                {{value > max ? max + '+' : value}}
            </span>
    </button>
</template>

<script>
    export default {
        name: 'badge',
        props: {
            // 徽章的数值
            value: {
                type: Number,
                default: 0
            },

            // 徽章显示的最大值,超出部分会以${max}+的形式展示
            max: {
                type: Number,
                default: 10
            },

            // 徽章数值的颜色
            color: {
                type: String,
                default: '#fff'
            },

            // 徽章背景颜色
            bgColor: {
                type: String,
                default: '#e79d47'
            }
        },
        data () {
            return {};
        }
    };
</script>

<style lang="less" rel="stylesheet/less" scoped>
    @import "../../assets/css/modules/variables";
    @import "../../assets/css/modules/function";
    .badge {
        position: relative;
        background: none;
        border: none;

        .badge-num {
            position: absolute;
            top: -10px;
            right: -14px;
            min-width: 20px;
            height: 20px;
            padding: 0 5px;
            line-height: 20px;
            text-align: center;
            font-size: 12px;
            .radius(50%);
        }
    }
</style>
