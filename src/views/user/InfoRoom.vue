<template>
  <div class="inforoom">
    <el-row type="flex">
      <el-col :span="11">
        <div v-on:keyup.enter="onSubmit">
          <el-form ref="infoForm" :model="infoForm" :rules="updateInfoRules">
            <el-form-item label="邮箱" prop="email">
              <el-input
                v-model="infoForm.email"
                placeholder="E-mail"
                prefix-icon="el-icon-paperclip"
              ></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="mobilephone">
              <el-input
                v-model="infoForm.mobilephone"
                placeholder="Mobile Phone"
                prefix-icon="el-icon-mobile-phone"
              ></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="username">
              <el-input
                v-model="infoForm.username"
                placeholder="Username"
                prefix-icon="el-icon-user"
                :disabled="true"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                v-model="infoForm.password"
                placeholder="Password"
                type="password"
                prefix-icon="el-icon-lock"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit" icon="el-icon-check" round>修改</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="11">
        <el-avatar :size="200" fit="scale-down" shape="square">
          <el-image v-if="user.avatar" :src="user.avatar"></el-image>
          <i class="el-icon-plus" v-else></i>
        </el-avatar>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import InputRule from '../../utils/inputrule.js'
import UserFactory from '../../utils/userfactory.js'
let inputrule=new InputRule()
let uf=new UserFactory()
export default {
  name: 'InfoRoom',
  data() {
    let user=uf.getCurrentUser()
    if(!user) {
      console.log('no user logged in...')
    }
    return {
      user:user,
      infoForm: {
        username: user.username,
        password: user.password,
        email: user.email,
        mobilephone: user.mobilephone,
      },
      updateInfoRules: {
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
  methods: {
    onSubmit() {
      this.$refs['infoForm'].validate(valid => {
        if (valid) {
          let result=this.updateInfo(this.infoForm)
          if (result.status) {
            this.$message({
              message: '修改成功！',
              type: 'success'
            })
            return true
          } else {
            this.$message({
              message: `修改失败！ 原因:${result.info}`,
              type: 'error'
            })
            return false
          }
        } else {
          return false
        }
      })
    },
    updateInfo(form) {
      let username = form.username
      let password = form.password
      let email = form.email
      let result = { status: false }
      if (username && password && email) {
        let user={
          username:username,
          email:email,
          mobilephone:form.mobilephone,
          avatar:this.user.avatar,
        }
        uf.updateCurrentUser(user)
        result.status=true
      } else {
        result.info='请求超时'
      }
      return result
    }
  }
}
</script>

<style scoped>
.inforoom {
  padding: 5% 5%;
}
</style>
