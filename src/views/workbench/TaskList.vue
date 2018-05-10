<template>
  <el-row :gutter="20">
    <el-col :span="6" v-for="list in listc" v-bind:key="list.bg">
      <div class="grid-content" v-bind:class="list.bg">
        <i class="el-icon-tickets"></i>
        <h2>{{ list.message }}</h2>
        <small>{{ list.title }}</small>
      </div>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: 'TaskList',
        props: {
            listc: {
                type: Array
            }
        },
        data () {
            return {
            };
        }
    };
</script>

<style lang="less" scoped>
  @import "../../assets/css/modules/variables";
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 5px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 72px;
    margin-top: 15px;
    cursor: pointer;
    i{
      float: left;
      font-size: 60px;
      color: @color-fff;
      opacity: 0.15;
      margin-top: 18%;
    }
    h2,small{
      /*float: right;*/
      width: 50%;
      margin-left: 50%;
      color: @color-fff;
    }
    h2{
      padding-top: 5%;
      font-size: 30px;
      font-weight: normal;
    }
    small{
      display: block;
      font-size: @font-size;
      padding-bottom: 5%;
    }
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .bg-red{
    background: #ca5858;
  }
  .bg-red:hover{
    background-color:#af3b3b;
  }
  .bg-green{
    background: #84a470;
  }
  .bg-green:hover{
    background-color:#62824f;
  }
  .bg-brown{
    background: #c79f58;
  }
  .bg-brown:hover{
    background-color:#99763a;
  }
  .bg-blue{
    background: #71a7b9;
  }
  .bg-blue:hover{
    background-color:#4b899d;
  }
</style>
