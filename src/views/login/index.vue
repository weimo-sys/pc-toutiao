<template>
  <div class="container-login">
      <!-- Login -->
      <el-card class="my-card">
          <!-- 插入logo -->
          <img src="../../assets/logo_index.png" alt="">
          <!-- // 创建表单 -->
          <el-form :model="loginForm">
            <!-- 创建表单项 -->
            <el-form-item>
              <!-- 输入框 -->
              <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item>
              <!-- 输入框 -->
              <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:238px; margin-right:10px"></el-input>
               <!-- 按钮 -->
              <el-button>发送验证码</el-button>
            </el-form-item>
            <el-form-item>
              <el-checkbox :value="true" >我已经阅读和同意用户协议和隐私条款</el-checkbox>
            </el-form-item>
            <el-button type="primary" style="width:100%">登录</el-button>
          </el-form>
      </el-card>
  </div>
</template>

<script>
export default {

  data () {
    return {
      loginForm: {
        mobile: '',
        code: ''
      }

    }
  }
}
</script>

<style lang="less" scoped>
.container-login {
  width: 100%;
  height: 100%;
  position:absolute;
  top:0;
  left:0;
  background: url(../../assets/login_bg.jpg) no-repeat center / cover;
  .my-card {
    width: 400px;
    height: 330px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      display: block;
      width: 200px;
      margin: 0 auto 20px;
    }
  }
}
</style>
