<template>
  <div class="home">
    <el-container>
      <!--<el-header style="padding: 0"
                 :height="searchHeight"
                 v-scroll="handleScroll">
        <Search id="home-search"
                :height="searchHeight"></Search>
      </el-header> -->
      <el-main style="padding: 0">
        <el-row class="vp-row">
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
            <Comment v-bind:comments="latestComments"></Comment>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
//import Search from '@/components/HomePage/Search.vue'
import VenuePic from '@/components/HomePage/VenuePic.vue'
import News from '@/components/HomePage/News.vue'
import Comment from '@/components/HomePage/Comment.vue'

//import { TweenMax } from 'gsap'

export default {
  name: 'home',
  data() {
    return {
      //searchHeight: '400px',
      latestComments: [
        '良心网站！',
        'Meet Here真好用！',
        '图书馆研讨室的空调和座位都很舒服！电子设备也很赞！可惜太抢手，才刚能预约一会儿就被预约完了！'
      ]
    }
  },
  components: {
    //Search,
    VenuePic,
    News,
    Comment
  }
  // methods: {
  //   // eslint-disable-next-line
  //   handleScroll: function(evt, el) {
  //     //console.log('scrolled' + window.scrollY)
  //     let tmp = 400 - window.scrollY
  //     if (tmp <= 100) tmp = 100
  //     this.searchHeight = tmp.toString() + 'px'
  //   }
  // }
}
</script>

<style scoped>
</style>