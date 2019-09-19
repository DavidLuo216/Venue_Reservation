import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
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
      path: '/User',
      name: 'user',
      component: function() {
        return import('./views/user/InfoRoom.vue')
      }
    },
    {
      path: '/User/InfoRoom',
      name: 'userinfo',
      component: function() {
        return import('./views/user/InfoRoom.vue')
      }
    },
    {
      path: '/User/OrderRoom',
      name: 'userorder',
      component: function() {
        return import('./views/user/OrderRoom.vue')
      }
    },
    {
      path: '/User/CommentRoom',
      name: 'usercomment',
      component: function() {
        return import('./views/user/CommentRoom.vue')
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(`jumpto ${to.toString()} from ${from.toString()}`)
  if (to.path === '/') {
    next()
  } else if (to.path.startsWith('/User')) {
    let token = localStorage.getItem('usercookie')
    if (token === 'null' || token === '' || !token) {
      alert('请先登录！')
      next('/')
    } else {
      next()
    }
  }
})

export default router
