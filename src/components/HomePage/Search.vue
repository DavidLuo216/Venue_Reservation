<template>
  <div class="home-search"
       :style="'height:'+height">
    <div id="sbox"
         @keydown.enter="onSearch">
      <el-input v-model="input"
                prefix-icon="el-icon-search"
                placeholder="请输入内容"></el-input>
      <div @click="onSearch">
        <i class="el-icon-search">
        </i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: ['height'],
  data() {
    return {
      input: ''
    }
  },
  methods: {
    onSearch() {
      //console.log('"' + this.input + '" searched!')
      this.$router.push({
        path: '/search',
        query: {
          q: this.input
        }
      })
    }
  },
  watch: {
    // eslint-disable-next-line
    $route(to, from) {
      if (to.name === 'search') {
        this.input = to.query.q
      }
    }
  }
}
</script>

<style>
#sbox {
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
}
</style>
