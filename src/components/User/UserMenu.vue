<template>
  <b-nav-item-dropdown :text="title">
    <b-dropdown-header>个人中心</b-dropdown-header>
    <b-dropdown-item to="/User/InfoRoom">个人信息维护</b-dropdown-item>
    <b-dropdown-item to="/User/OrderRoom">订单一览</b-dropdown-item>
    <b-dropdown-item to="/User/CommentRoom">评论管理</b-dropdown-item>
    <b-button variant="outline-danger" @click="logout">退出登录</b-button>
  </b-nav-item-dropdown>
</template>

<script>
export default {
  name: 'UserMenu',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods:{
      logout(){
          console.log('logging out...')
          this.$emit('logout',true)
      }
  }
}
</script>

<style></style>
