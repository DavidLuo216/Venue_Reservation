<template>
  <div v-on:keyup.enter="onSubmit">
    <el-form ref="registerForm" :model="registerForm" :rules="registerRules">
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="registerForm.email" placeholder="E-mail" prefix-icon="el-icon-paperclip"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="mobilephone">
        <el-input
          v-model="registerForm.mobilephone"
          placeholder="Mobile Phone"
          prefix-icon="el-icon-mobile-phone"
        ></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="registerForm.username" placeholder="Username" prefix-icon="el-icon-user"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="registerForm.password"
          placeholder="Password"
          type="password"
          prefix-icon="el-icon-lock"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" icon="el-icon-check" round>注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import InputRule from '@/utils/inputrule.js'
import UserFactory from '../../utils/userfactory'
let userfactory=new UserFactory()
let inputrule=new InputRule()
export default {
  name: 'Register',
  data() {
    return {
      registerForm: {
        username: '',
        password: '',
        email: '',
        mobilephone: '',
        _has_email: false,
        _has_phone: false,
      },
      registerRules: {
        username: {
          required: true,
          validator: (rule, value, callback) => {
              inputrule.elFormValidator(value,inputrule.usernameValidator,callback)
          },
          trigger: 'blur'
        },
        password: {
          required: true,
          validator: (rule, value, callback) => {
              inputrule.elFormValidator(value,inputrule.passwordValidator,callback)            
          },
          trigger: 'blur'
        },
        email: {
          required: true,
          validator: (rule, value, callback) => {
              inputrule.elFormValidator(value,inputrule.emailValidator,callback)
          },
          trigger: 'blur'
        },
        mobilephone: {
          required: true,
          validator: (rule, value, callback) => {
              inputrule.elFormValidator(value,inputrule.mobilephoneValidator,callback)     
            
          },
          trigger: 'blur'
        }
      }
    }
  },
  computed:{
    _has_email_tel() {
      return this._has_email||this._has_phone
    }
  },
  methods: {
    onSubmit() {
      this.$refs['registerForm'].validate(valid => {
        if (valid) {
          let result=this.register(this.registerForm)
          if (result) {
            this.$message({
              message: '注册成功！',
              type: 'success'
            })
            this.$emit('register-result', result)
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
        let user={
          username:username,
          email:email,
          mobilephone:form.mobilephone,
          avatar:null,
        }
        userfactory.setUserCache(user)
        return user
      } else {
        return false
      }
    }
  }
}
</script>

<style></style>
