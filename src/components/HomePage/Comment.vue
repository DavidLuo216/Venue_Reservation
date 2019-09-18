<template>
  <div @mouseenter="touch = true" @mouseleave="touch = false" class = "commentmode.textcontainterclass">    
    <transition class = "commentmode.class" name = "slide" mode="out-in">
    <p >
      {{text.val}}
    </p>
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
    return{
    show : true,
    index: 0,
    touch: false,
    totaltime: 0
    }
  },
  props:['comments','commentmode'],
  methods: {
    startMove(){
      setTimeout(()=>{
        if(this.index === this.comments.length-1)
        {
          this.index  = 0
        }
        else{
          this.index++
        }
        this.startMove()
      },this.commentmode.totaltime)
    }
  },
  created(){
    this.startMove()
    document.documentElement.style.setProperty('--translatey',this.commentmode.translate)
  },
  computed:{
    text(){
      return{
        val: this.comments[this.index]
      }
    }
  }
}
</script>

<style>
:root{
  --translatey:20px
}
.slide-enter-active, .slide-leave-active {
  transition: all 0.5s linear;
}
.slide-leave-to {
  transform: translateY(-var(--translatey));
}
.slide-enter {
  transform: translateY(var(--translatey));
}
</style>
