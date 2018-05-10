<template>
      <ul>
          <li v-for="list in listCon" :key="list.listCon">
              <a v-bind:href="[ list.hef ]"> {{ list.txtCon }} </a>
              <span>{{ list.dateTime }}</span>
          </li>
      </ul>
</template>

<script>
    export default {
        name: 'ShowList',
        props: {
            listCon: {
                type: Array
            }
        },
        data () {
            return {
                // lists: [
                //     { txtCon: '关于合同评审的公告', hef: '123', dateTime: '2016-9-6' },
                //     { txtCon: '马云与扎克伯格谈人工智能：机器不会比人更明智', hef: '456', dateTime: '2016-9-6' },
                //     { txtCon: '马云与扎克伯格谈人工智能：机器不会比。。。', hef: '789', dateTime: '2016-9-6' }
                // ]
            };
        }
    };
</script>

<style lang="less" scoped>
    @import "../../assets/css/modules/variables";
    ul{
        margin-top: 15px;
        li{
            border-top: 1px solid @border-color;
            line-height: 34px;
            a,span{
                color: @text-color;
            }
            a{
              padding-left: 10px;
            }
            span{
              float: right;
              padding-right: 10px;
            }
        }
        li:hover{
          a,span{
            color: @link-color;
          }
        }
        li:last-child{
            border-bottom: 1px solid @border-color;
        }
    }

</style>
