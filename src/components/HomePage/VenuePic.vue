<template>
  <div>
    <el-carousel height="800px">
      <el-carousel-item v-for="i in imgs.length"
                        :key="i">
        <el-image :src="imgs[i-1]"
                  fit="contain"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'VenuePic',
  data() {
    let img1 = require('../../assets/castle.jpg')
    //let img2 = require('../../assets/hpc26.png')
    let img3 = require('../../assets/river.jpg')
    let img4 = require('../../assets/valley.jpg')
    return {
      imgs: [img1, img3, img4]
    }
  }
}
</script>

<style></style>
