<template>
  <div class="comment-card">
    <el-card shadow="hover">
      <table>
        <thead>
          <tr>
            <th>
              <SmallAvatar :user="comment.user"></SmallAvatar>
            </th>
            <th>
              <table>
                <tr>
                  <td class="comment-username">
                    {{comment.user.username}}
                  </td>
                </tr>
                <tr>
                  <time :datetime="comment.time"
                        :pubdate="comment.time">{{comment.time}}</time>
                </tr>
              </table>
            </th>
            <th>else</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>none</td>
            <td colspan="2"
                class="comment-content">
              <blockquote>{{comment.content}}</blockquote>
            </td>
          </tr>
        </tbody>
        <tfoot>likes</tfoot>
      </table>
    </el-card>

    <!-- <el-container direction="vertical">
      <el-header height="100px">
        <el-container direction="horizontal">
          <el-aside width="100px">
            <SmallAvatar :user="comment.user"></SmallAvatar>
          </el-aside>
          <el-main height="100px">
            <el-container direction="horizontal">
              <el-aside width="200px">
                <el-container direction="vertical">
                  <el-header height="50px">username</el-header>
                  <el-main height="50px">time</el-main>
                </el-container>
              </el-aside>
              <el-main height="100px">else in head</el-main>
            </el-container>
          </el-main>
        </el-container>
      </el-header>
      <el-main height="300px">
        <en-container direction="horizontal">
          <el-aside width="100px">none</el-aside>
          <el-main height="300px">comment
          </el-main>
        </en-container>
      </el-main>
      <el-footer height="100px">
          likes
      </el-footer>
    </el-container>-->

    <!-- <el-card shadow="hover">
      <template slot="header">
        <el-row type="flex">
          <el-col :span="2">
            <SmallAvatar :user="comment.user" style="zoom: 0.8"></SmallAvatar>
          </el-col>
          <el-col :span="8" style="text-align: left; font-size: 24px;">{{comment.user.username}}</el-col>
          <el-col :span="14">{{"----"+comment.target}}</el-col>
        </el-row>
      </template>
      <el-row>
        <blockquote>{{comment.content}}</blockquote>
      </el-row>
      <el-row>
        <el-col :span="8">
          <p></p>
        </el-col>
        <el-col :span="16">{{comment.time}}</el-col>
      </el-row>
    </el-card>-->
  </div>
</template>

<script>
import Comment from '../../model/comment'
import SmallAvatar from './SmallAvatar'

export default {
  name: 'CommentCard',
  props: {
    comment: {
      type: Comment,
      required: true
    }
  },
  data() {
    return {}
  },
  components: {
    SmallAvatar
  }
}
</script>

<style scoped>
blockquote {
  text-emphasis: e;
  text-align: left;
  margin: 2%;
  padding: 0;
  font-family: georgia, serif;
  font-style: italic;
}
blockquote:before {
  content: '\201C';
  font-size: 40px;
  margin-left: -10px;
  font-family: georgia, serif;
  color: #666666;
}
blockquote p {
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
  margin-bottom: 0;
  font-style: italic;
}

.comment-card {
  text-align: left;
}

.comment-content {
  text-align: left;
  width: 600px;
}

.comment-username {
  text-align: left;
  color: #ff6600;
  font-weight: bold;
}

.el-card {
  width: 700px;
}
</style>