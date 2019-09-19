<template>
  <div>
    <el-carousel interval="5000" type="card" height="300px">
      <el-carousel-item v-for="i in imgs.length" :key="i">
        <el-image :src="imgs[i-1]" fit="contain"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'VenuePic',
  data() {
    let img1= require('../../assets/logo.png')
    let img2= require('../../assets/hpc26.png')
    return {
      imgs: [img1, img2, img1, img2]
    }
  }
}
</script>

<style></style>
