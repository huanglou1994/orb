<template>
  <div id="app" class="login" >
    <el-form :model="loginForm" ref="loginForm" :rules="rules" label-width="51px" class="demo-ruleForm container" >
      <div class="avatar">
        <img src="../assets/avatar.jpg" alt="">
      </div>
      <el-form-item label="帐号" prop="username"  @keydown.native.enter="loginSubmitForm('loginForm')">
        <el-input v-model="loginForm.username" placeholder="请输入帐号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password"  @keydown.native.enter="loginSubmitForm('loginForm')">
        <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item >
        <el-button type="primary" class="login-btn" @click="loginSubmitForm('loginForm')" >登入</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import { checkUser } from '../api/api'

export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入帐号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 这里是表单验证
    abc () {
      console.log(11111)
    },
    loginSubmitForm (loginForm) {
      this.$refs[loginForm].validate(valid => {
        if (valid) {
          // 如果验证成功
          checkUser(this.loginForm).then(res => {
            if (res.meta.status === 200) {
              // 如果登入成功，则跳转到主页面
              console.log(res)
              // 登入成功后绑定一恶搞token
              localStorage.setItem('mytoken', res.data.token)
              this.$message({
                showClose: true,
                message: res.meta.msg,
                type: 'success'
              })
              this.$router.push({name: 'home'})
            } else {
              this.$message({
                showClose: true,
                message: res.meta.msg,
                type: 'error'
              })
            }
          })
        } else {
          this.$message({
            showClose: true,
            message: '请输入帐号和密码',
            type: 'error'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;
  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
      margin-bottom: 15px;
    }
    .login-btn {
      width: 100%;
      margin-bottom: 15px;
    }
  }
}
</style>
