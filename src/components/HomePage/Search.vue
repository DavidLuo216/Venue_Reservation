<template>
  <div class="home-search">
    <div id="sbox"
         @keydown.enter="onSearch">
      <el-input v-model="input"
                prefix-icon="el-icon-search"
                placeholder="请输入内容"></el-input>
      <el-button type="primary"
                 icon="el-icon-search"
                 @click="onSearch"></el-button>
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
  },
  methods: {
    onSearch() {
      console.log('"' + this.input + '"searched!')
    }
  }
}
</script>

<style>
#sbox {
  padding: 1% 20%;
  display: flex;
}
#sbox .el-input {
  margin-right: 1%;
}
.home-search {
  background-color: #24292e;
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column-reverse;
}
</style>
