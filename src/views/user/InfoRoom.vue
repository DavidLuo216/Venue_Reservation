<template>
  <div class="inforoom">
    <el-row type="flex">
      <el-col span="11">
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
      <el-col span="11">
        <el-avatar :size="200" fit="scale-down" shape="square">
          <el-image v-if="user.avatar" :src="user.avatar"></el-image>
          <i class="el-icon-plus" v-else></i>
        </el-avatar>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'InfoRoom',
  data() {
    let cookie = localStorage.getItem('usercookie')
    if (cookie === null) {
      console.log('No user logged in.')
    }
    let user=JSON.parse(cookie)
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
            if (value === '') {
              callback('请输入用户名')
            } else {
              callback()
            }
          },
          trigger: 'blur'
        },
        password: {
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback('请输入密码')
            } else if (value.length < 6) {
              callback('密码长度必须大于6位')
            } else {
              callback()
            }
          },
          trigger: 'blur'
        },
        email: {
          required: true,
          validator: (rule, value, callback) => {
            if (this._has_email_tel) {
              callback()
            } else if (value === '') {
              this._has_email = false
              callback('请输入邮箱')
            } else {
              let rex = new RegExp('^\\w+@(\\w)+(\\.(\\w)+)+$')
              if (!rex.test(value)) {
                this._has_email = false
                callback('邮箱格式不正确')
              } else {
                callback()
                this._has_email = true
              }
            }
          },
          trigger: 'blur'
        },
        mobilephone: {
          required: true,
          validator: (rule, value, callback) => {
            if (this._has_email_tel) {
              callback()
            } else if (value === '') {
              this._has_phone = false
              callback('请输入手机号')
            } else {
              let rex=new RegExp('(^\\d{11}$)|(^\\d{3,4}\\-\\d{8}$)')
              if (!rex.test(value)){
                this._has_phone = false
                callback('手机号格式不正确')
              }
              else 
              {
                this._has_phone = true
                callback()
              }
            }
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
      this.$refs['infoForm'].validate(valid => {
        if (valid) {
          if (this.updateInfo(this.infoForm)) {
            this.$message({
              message: '修改成功！',
              type: 'success'
            })
            return true
          } else {
            this.$message({
              message: '修改失败！',
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
      if (username && password && email) {
        let user={
          username:username,
          email:email,
          mobilephone:form.mobilephone,
          avatar:null,
        }
        localStorage.setItem('usercookie',JSON.stringify(user))
        return true
      }
    }
  }
}
</script>

<style scoped>
.inforoom {
  padding: 5% 5%;
}
</style>
