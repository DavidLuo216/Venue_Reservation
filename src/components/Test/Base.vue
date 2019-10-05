<template>
  <div>
    <el-row>
      <el-col :span="12" v-for="(o,i) in 4" :key="o" :offset="1">
        <CommentCard :comment="comment" :style="{zoom:1/i}"></CommentCard>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CommentCard from '../../components/User/CommentCard'
import Comment from '../../model/comment'
import UserFactory from '../../utils/userfactory'

let uf = new UserFactory()

export default {
  name: 'UserBase',
  components: {
    CommentCard
  },
  data() {
    let comment = new Comment(uf.getCurrentUser())
    return {
      comment
    }
  }
}
</script>

<style>
</style>