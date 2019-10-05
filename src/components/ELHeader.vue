<template>
  <div class="header">
    <el-menu mode="horizontal"
             background-color="#24292e"
             text-color="#ffffff"
             active-text-color="#ffffff"
             :router="true">
      <el-menu-item index="/"
                    style="width: 140px">
        <Logo></Logo>
      </el-menu-item>
      <el-menu-item index="/"
                    style="width: 160px">
        <span style="font-size:25px">MeetHere</span>
      </el-menu-item>
      <el-menu-item style="width: 100px"
                    index="/">主页</el-menu-item>
      <el-menu-item style="width: 100px"
                    :index="{name:'venues'}">场馆</el-menu-item>
      <el-menu-item style="width: 100px"
                    :index="{name:'news'}">新闻</el-menu-item>
      <el-menu-item style="width: 100px"
                    :index="{name:'comments'}">评论</el-menu-item>
      <el-menu-item style="width: 400px">
        <Search></Search>
      </el-menu-item>
      <el-menu-item style="width: 200px;"
                    v-if="!loginstatus"
                    class="login-register">
        <span class="login-button">
          <b-button v-b-modal.login-modal
                    variant="outline-light">登录</b-button>
          <b-modal id="login-modal"
                   title="登录"
                   hide-footer>
            <Login v-on:login-success="onLoginSuccess"></Login>
          </b-modal>
        </span>
        <span class="register-button">
          <b-button v-b-modal.register-modal
                    variant="outline-light">注册</b-button>
          <b-modal id="register-modal"
                   title="注册"
                   hide-footer>
            <Register v-on:register-result="onRegisterSuccess"></Register>
          </b-modal>
        </span>
      </el-menu-item>
      <ELUserMenu style="width: 200px"
                  v-else
                  :user="user"
                  v-on:logout="onLogout"></ELUserMenu>
    </el-menu>
  </div>
</template>

<script>
import Search from '@/components/HomePage/Search.vue'
import Logo from '@/components/Common/Logo.vue'
import Login from '@/components/User/Login.vue'
import Register from '@/components/User/Register.vue'
import ELUserMenu from '@/components/User/ELUserMenu.vue'

import User from '../model/user.js'
import UserFactory from '../utils/userfactory.js'

let uf = new UserFactory()

export default {
  name: 'ELHeader',
  components: {
    Search,
    Logo,
    Login,
    Register,
    ELUserMenu
  },
  data() {
    let user = uf.getCurrentUser()
    let loginstatus = false
    if (user) {
      loginstatus = true
    }
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
        uf.clearUserCache()
        this.$router.push('/')
      }
    },
    getUserProfile(username) {
      let img = require('@/assets/logo.png')
      let user = new User({ username: username })
      user.getProfile()
      if (user.username === 'vue') {
        user.avatar = img
      }
      uf.setUserCache(user)
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

.login-register {
  float: right;
}

.login-button {
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
}

.register-button {
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
}
</style>