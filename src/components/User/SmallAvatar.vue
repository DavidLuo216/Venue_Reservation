<template>
  <el-avatar :size="40"
             fit="scale-down"
             :style="bg">
    <el-image v-if="user&&user.avatar"
              :src="user.avatar"></el-image>
    <span v-else
          :style="fg">{{(user&&user.username||'')[0]}}</span>
  </el-avatar>
</template>

<script>
export default {
  name: 'SmallAvatar',
  props: {
    user: {
      required: true
    }
  },
  data() {
    return {
      preColors: [
        '#0066ff',
        '#9933cc',
        '#ffaa00',
        '#cccccc',
        '#ff4400',
        '#00ff66'
      ]
    }
  },
  computed: {
    bg() {
      let color = 0
      let i = 0
      let username = (this.user && this.user.username) || ''
      for (; i < username.length; i++) {
        color += username.charCodeAt(i)
      }
      console.log(`username hash ${color}`)
      color %= this.preColors.length
      return {
        backgroundColor: this.preColors[color]
      }
    },
    fg() {
      return {
        color: '#ffffff'
      }
    }
  }
}
</script>

<style>
</style>