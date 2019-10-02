<template>
  <el-submenu index="/User/InfoRoom">
    <template slot="title">
      <SmallAvatar :user="user" style="margin: 10px"></SmallAvatar>
      <span>{{greet}}</span>
    </template>
    <el-menu-item-group>
      <template slot="title">场馆预约</template>
      <el-menu-item index="/User/OrderRoom">
        <i class="el-icon-document-copy"></i>
        <span>订单一览</span>
      </el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group>
      <template slot="title">个人中心</template>
      <el-menu-item index="/User/CommentRoom">
        <i class="el-icon-chat-line-square"></i>
        <span>评论管理</span>
      </el-menu-item>
      <el-menu-item index="/User/InfoRoom">
        <i class="el-icon-edit-outline"></i>
        <span>个人信息维护</span>
      </el-menu-item>
      <el-menu-item @click="logout">
        <i class="el-icon-switch-button"></i>
        <span style="color: #ff2200">退出登录</span>
      </el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</template>

<script>
import SmallAvatar from '@/components/User/SmallAvatar.vue'

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    logout() {
      console.log('logging out...')
      this.$emit('logout', true)
    }
  },
  components: {
    SmallAvatar
  },
  computed: {
    greet: function() {
      return `你好，${this.user.username}`
    }
  }
}
</script>

<style scoped>
</style>