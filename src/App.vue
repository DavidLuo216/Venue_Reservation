<template>
  <div id="app">
    <el-container>
      <el-header style="padding: 0"
                 height="54px">
        <Header></Header>
      </el-header>
      <el-main style="padding: 0">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
.el-header {
  background-color: #24292e;
  color: #333;
  text-align: center;
}

.el-main {
  color: #333;
  text-align: center;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>
