<template>
  <div class="header">
    <b-navbar toggleable="lg"
              type="dark"
              style="padding: 0px 10px;">
      <b-navbar-brand to="/">MeetHere</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse"
                  is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">主页</b-nav-item>
          <b-nav-item to="/about">关于我们</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item right>
            <b-button v-if="!loginstatus"
                      v-b-modal.login-modal
                      variant="outline-light">登录</b-button>
            <UserMenu v-on:logout="onLogout"
                      v-else
                      :title="greet"></UserMenu>
            <b-modal id="login-modal"
                     title="登录"
                     hide-footer>
              <Login v-on:login-success="onLoginSuccess"></Login>
            </b-modal>
          </b-nav-item>
          <b-nav-item right>
            <b-button v-show="!loginstatus"
                      v-b-modal.register-modal
                      variant="outline-light">注册</b-button>
            <b-modal id="register-modal"
                     title="注册"
                     hide-footer>
              <Register v-on:register-result="onRegisterSuccess"></Register>
            </b-modal>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Login from '@/components/User/Login.vue'
import Register from '@/components/User/Register.vue'
import UserMenu from '@/components/User/UserMenu.vue'

export default {
  name: 'Header',
  components: {
    Login,
    Register,
    UserMenu
  },
  data() {
    let token = localStorage.getItem('usercookie')
    let loginstatus = false
    if (!(token === null)) {
      loginstatus = true
    }
    return {
      username: token,
      loginstatus: loginstatus
    }
  },
  computed: {
    greet: function() {
      return `你好，${this.username}`
    }
  },
  methods: {
    onLoginSuccess(result) {
      if (result) {
        this.$bvModal.hide('login-modal')
        this.username = result.username
        this.loginstatus = true
        localStorage.setItem('usercookie', this.username)
      }
    },
    onRegisterSuccess(result) {
      if (result) {
        this.$bvModal.hide('register-modal')
      }
    },
    onLogout(result) {
      if (result) {
        this.loginstatus = false
        this.$message({
          message: '退出登录成功！',
          type: 'warning'
        })
        localStorage.removeItem('usercookie')
      }
    }
  }
}
</script>

<style scope>
.header {
  position: fixed;
  width: 100%;
  padding: 10px 60px;
}
.navbar {
  background-color: #24292e;
}
</style>
