<template>
<div v-on:keyup.enter="onSubmit">
  <el-form ref="registerForm"
           :model="registerForm"
           :rules="registerRules">
    <el-form-item label="邮箱"
                  prop="email">
      <el-input v-model="registerForm.email"
                placeholder="E-mail"></el-input>
    </el-form-item>
    <el-form-item label="用户名"
                  prop="username">
      <el-input v-model="registerForm.username"
                placeholder="Username"></el-input>
    </el-form-item>
    <el-form-item label="密码"
                  prop="password">
      <el-input v-model="registerForm.password"
                placeholder="Password"
                type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"
                 @click="onSubmit">注册</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      registerForm: {
        username: '',
        password: '',
        email: ''
      },
      registerRules: {
        username: { required: true, message: '请输入用户名', trigger: 'blur' },
        password: { required: true, message: '请输入密码', trigger: 'blur' },
        email: { required: true, message: '请输入邮箱', trigger: 'blur' }
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs['registerForm'].validate(valid => {
        if (valid) {
          if (this.register(this.registerForm)) {
            this.$message({
              message: '注册成功！',
              type: 'success'
            })
            this.$emit('register-result', true)
            return true
          } else {
            this.$message({
              message: '注册失败！',
              type: 'error'
            })
            return false
          }
        } else {
          return false
        }
      })
    },
    register(form) {
      let username = form.username
      let password = form.password
      let email = form.email
      if (username && password && email) {
        return true
      }
    }
  }
}
</script>

<style></style>
