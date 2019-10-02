<template>
  <div class="header">
    <el-menu
      mode="horizontal"
      background-color="#24292e"
      text-color="#ffffff"
      active-text-color="#ffffff"
      :router="true"
    >
      <el-menu-item index="/">
        <Logo></Logo>
      </el-menu-item>
      <el-menu-item index="/">
        <span style="font-size:25px">MeetHere</span>
      </el-menu-item>
      <el-menu-item index="/">主页</el-menu-item>
      <el-menu-item index="/about">关于</el-menu-item>
      <el-menu-item v-show="!loginstatus">
        <b-button v-b-modal.login-modal variant="outline-light">登录</b-button>
        <b-modal id="login-modal" title="登录" hide-footer>
          <Login v-on:login-success="onLoginSuccess"></Login>
        </b-modal>
      </el-menu-item>
      <el-menu-item v-show="!loginstatus">
        <b-button v-b-modal.register-modal variant="outline-light">注册</b-button>
        <b-modal id="register-modal" title="注册" hide-footer>
          <Register v-on:register-result="onRegisterSuccess"></Register>
        </b-modal>
      </el-menu-item>
      <ELUserMenu v-show="loginstatus" :user="user" v-on:logout="onLogout"></ELUserMenu>
    </el-menu>
  </div>
</template>

<script>
import Logo from '@/components/Common/Logo.vue'
import Login from '@/components/User/Login.vue'
import Register from '@/components/User/Register.vue'
import ELUserMenu from '@/components/User/ELUserMenu.vue'

export default {
  name: 'ELHeader',
  components: {
    Logo,
    Login,
    Register,
    ELUserMenu
  },
  data() {
    let token = localStorage.getItem('usercookie')
    let loginstatus = false
    if (!(token === null)) {
      loginstatus = true
    }
    let user = JSON.parse(token)
    console.log(JSON.stringify(token))
    return {
      user: user,
      loginstatus: loginstatus
    }
  },
  computed: {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    onLoginSuccess(result) {
      if (result) {
        this.$bvModal.hide('login-modal')
        this.user = this.getUserProfile(result.username)
        this.loginstatus = true
        localStorage.setItem('usercookie', JSON.stringify(this.user))
      }
    },
    onRegisterSuccess(result) {
      if (result) {
        this.$bvModal.hide('register-modal')
      }
      this.loginstatus = true
      this.user = result
    },
    onLogout(result) {
      if (result) {
        this.loginstatus = false
        this.$message({
          message: '退出登录成功！',
          type: 'warning'
        })
        localStorage.removeItem('usercookie')
        this.$router.push('/')
      }
    },
    getUserProfile(username) {
      let user = {
        username: username,
        email: 'someone@example.com',
        mobilephone: '10086100861',
        avatar: null
      }
      return user
    }
  }
}
</script>

<style scped>
.header {
  position: fixed;
  top: 0%;
  width: 100%;
  z-index: 100;
}
</style>