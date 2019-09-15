<template>
  <el-form ref="loginForm"
           :model="loginForm"
           :rules="loginRules">
    <el-form-item label="用户名"
                  prop="username">
      <el-input v-model="loginForm.username"
                placeholder="Username"></el-input>
    </el-form-item>
    <el-form-item label="密码"
                  prop="password">
      <el-input v-model="loginForm.password"
                placeholder="Password"
                type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"
                 @click="onSubmit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'Login',
  data() {
    // var checkUsername = (rule, value, callback) => {
    //   console.log(`checking ${value} ${Boolean(!value)}`)
    //   if (!value) {
    //     callback(new Error('请输入用户名'))
    //   } else {
    //     callback()
    //   }
    // }
    // var checkPassword = (rule, value, callback) => {
    //   console.log(`checking ${value} ${Boolean(!value)}`)
    //   if (!value) {
    //     callback('请输入密码')
    //   } else {
    //     callback()
    //   }
    // }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        // username: [{ validator: checkUsername, trigger: 'blur' }],
        // password: [{ validator: checkPassword, trigger: 'blur' }]
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs['loginForm'].validate(valid => {
        if (valid) {
          var loginstat = this.validatePassword(this.loginForm)
          if (loginstat) {
            this.$message({
              message: '登录成功！',
              type: 'success'
            })
            this.$emit('login-result', loginstat)
            return true
          } else {
            this.$message({
              message: '用户名或密码错误！',
              type: 'error'
            })
            return false
          }
        } else {
          return false
        }
      })
    },
    validatePassword(form) {
      let username = form.username
      let password = form.password
      if (password.length < 6 || Number.isInteger(username)) {
        return false
      }
      return true
    }
  }
}
</script>

<style></style>
