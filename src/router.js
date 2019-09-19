import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function() {
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path:'/User',
      name:'user',
      component: function() {
        return import('./views/user/InfoRoom.vue')
      }
    },
    {
      path:'/User/InfoRoom',
      name:'userinfo',
      component: function() {
        return import('./views/user/InfoRoom.vue')
      }
    },
    {
      path:'/User/OrderRoom',
      name:'userorder',
      component: function() {
        return import('./views/user/OrderRoom.vue')
      }
    },
    {
      path:'/User/CommentRoom',
      name:'usercomment',
      component: function() {
        return import('./views/user/CommentRoom.vue')
      }
    }
  ]
})
