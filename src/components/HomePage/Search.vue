<template>
  <div class="home-search">
    <div id="sbox">
      <el-input v-model="input"
                prefix-icon="el-icon-search"
                placeholder="请输入内容"></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style>
#sbox {
  position: absolute;
  bottom: 20%;
  left: 30%;
}
.home-search {
  background-color: #24292e;
  height: 100%;
  color: #fff;
}
</style>
