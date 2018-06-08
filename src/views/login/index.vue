<template>
  <div class="bg">
    <div class="allCont">
      <header><h2><b>CIC智讯</b>铁路标准开发平台</h2></header>
      <div class="conBg">
        <h3>人员管理系统</h3>
            <el-input
              placeholder="请输入用户名"
              v-model.trim="inputUser"
              size="medium"
              clearable>
              <i slot="prefix" class="el-input__icon el-icon-edit-outline">|&nbsp;</i>
            </el-input>
            <el-input
              type="password"
              placeholder="请输入密码"
              v-model.trim="inputPass"
              size="medium"
              clearable>
              <i slot="prefix" class="el-input__icon el-icon-edit-outline">|&nbsp;</i>
            </el-input>
            <el-checkbox v-model="checked" class="checkStyle">记住用户名</el-checkbox>

            <el-button type="primary" @click="submitForm()">登录</el-button>
      </div>
    </div>
    <footer class="copyRight">版权所有：中国智能交通&nbsp;北京智讯天成技术有限公司{{ cont }}版&nbsp;|&nbsp;服务电话：010&nbsp;8888&nbsp;8888</footer>

  </div>
</template>

<script>
    export default {
        name: 'login',
        data () {
            return {
                inputUser: '',
                inputPass: '',
                cont: 'V1.0', // 设置版本号
                checked: false
            };
        },
        methods: {
            submitForm () {
                var users = this.inputUser.replace(/\s/g, '');
                var pasds = this.inputPass.replace(/\s/g, '');
                if (users === '' || users == null) {
                    this.$message.error('用户名不能为空喔！');
                } else if (pasds === '' || pasds == null) {
                    this.$message.error('密码不能为空喔！');
                } else {
                    this.$router.push({
                        path: '/'
                    });
                    console.log(users + '---------------' + pasds);
                }
            }
        }
    };
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../assets/css/modules/variables.less";

  .bg {
    background: #5bc0de;
    width: 100%;
    height: 100%;
  }

  .allCont {
    width: 420px;
    height: 360px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -230px;
    margin-left: -210px;
  }

  .copyRight {
    position: absolute;
    height: 40px;
    bottom: 0;
    left: 0;
    right: 0;
    background: @body-bg;
    text-align: center;
    line-height: 40px;
    color: @color-fff;
  }

  .conBg {
    border-radius: 5px;
    border: 15px solid @brand-primary;
    background: @body-bg;
    padding: 25px 30px 45px 30px;

    h3, .checkStyle {
      color: @color-fff;
      text-align: center;
      margin-bottom: 15px;
    }
    i {
      font-size: 20px;
    }
  }

  h2 {
    color: @color-fff;
    text-align: center;
    margin-bottom: 15px;
    font-size: 28px;
    font-weight: normal;
  }

</style>
