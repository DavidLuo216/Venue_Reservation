<template>
  <div>
    <el-image :src="logoImg" style="width: 50px; height: 50px;" fit="contain" alt="Logo.png"></el-image>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  data() {
    let img1 = require('../../assets/logo.png')
    return {
      logoImg: img1
    }
  }
}
</script>

<style>
</style>