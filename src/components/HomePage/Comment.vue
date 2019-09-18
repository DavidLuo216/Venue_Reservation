<template>
  <div
    @mouseenter="touch = true"
    @mouseleave="touch = false"
    :style="commentmode.textcontainterclass"
  >

    <transition :style="commentmode.class" name="slide" mode="out-in">
      <p style="margin-bottom:20px " :key="text.id">{{text.val}}</p>
    </transition>
    <transition :style="commentmode.class" name="slide" mode="out-in">
      <p style="margin-bottom:20px" :key="text.id">{{text.val1}}</p>
    </transition>
    <transition :style="commentmode.class" name="slide" mode="out-in">
      <p style="margin-bottom:20px" :key="text.id">{{text.val2}}</p>
    </transition>
  </div>
</template>
<!--
text-container {
    width: 500px;
    height: 30px;
    line-height: 30px;
    margin: 10px auto;
    border: 1px solid cornflowerblue;
    overflow: hidden;
  }
-->
<script>
export default {
  name: 'Comment',
  data() {
    return {
      show: true,
      index: 0,
      touch: false,
      totaltime: 0
    }
  },
  props: {
    comments: {},
    commentmode: {
      default: function() {
        return {
          textcontainterclass: {
            width: '500px',
            height: '100px',
            'line-height': '20px',
            margin: '10px auto',
            border: '1px solid cornflowerblue',
            overflow: 'hidden'
          },
          class: {margin: '0px'},
          translate: '20px'
        }
      }
    }
  },
  methods: {
    startMove() {
      setTimeout(() => {
        if (this.index === this.comments.length - 1) {
          this.index = 0
        } else {
          this.index++
        }
        this.startMove()
      }, 2000)
    }
  },
  created() {
    this.startMove()
    document.documentElement.style.setProperty(
      '--translatey',
      this.commentmode.translate
    )
  },
  computed: {
    text() {
      return {
        id: this.index,
        val: this.comments[this.index],
        val1: this.comments[(this.index + 1) % this.comments.length],
        val2: this.comments[(this.index + 2) % this.comments.length]
      }
    }
  }
}
</script>

<style>

:root {
  --translatey: 20px;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s linear;
}
.slide-leave-to {
  transform: translateY(-20px);
}
.slide-enter {
  transform: translateY(20px);
}
</style>
