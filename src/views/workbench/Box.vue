<template>
  <div class="listCon">
    <h3>
      <span>{{ LittleTitle }}</span>
      <small>
        <i class="el-icon-refresh"></i>
        <a><i class="el-icon-menu" v-show="iconMenu"></i></a>
        <slot name="option"></slot>
      </small>
    </h3>
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: 'TaskInformation',
        props: {
            LittleTitle: {
                type: String,
                default: '默认标题'
            },
            iconMenu: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
            };
        }
    };
</script>

<style lang="less" scoped>
  @import "title.less";
</style>
