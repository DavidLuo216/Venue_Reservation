<template>
  <div class="home">
    <el-container>
      <el-header style="padding: 0"
                 :height="searchHeight">
        <Search></Search>
      </el-header>
      <el-main style="padding: 0">
        <el-row>
          <el-col>
            <VenuePic></VenuePic>
            <!-- pictures -->
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <News></News>
          </el-col>
          <el-col :span="12">
            <Comment></Comment>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/HomePage/Search.vue'
import VenuePic from '@/components/HomePage/VenuePic.vue'
import News from '@/components/HomePage/News.vue'
import Comment from '@/components/HomePage/Comment.vue'

export default {
  name: 'home',
  data() {
    return {
      searchHeight: '200px'
    }
  },
  components: {
    Search,
    VenuePic,
    News,
    Comment
  }
}
</script>
