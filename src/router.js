import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UserFacotry from './utils/userfactory.js'
let uf = new UserFacotry()

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
      path: '/venues',
      name: 'venues',
      component: function() {
        return import('./views/Venues.vue')
      }
    },
    {
      path: '/news',
      name: 'news',
      component: function() {
        return import('./views/News.vue')
      }
    },
    {
      path: '/search',
      name: 'search',
      component: function() {
        return import('./views/Search.vue')
      }
    },
    {
      path: '/comments',
      name: 'comments',
      component: function() {
        return import('./views/Comments.vue')
      }
    },
    {
      path: '/user',
      name: 'user',
      component: function() {
        return import('./views/user/Base.vue')
      },
      children: [
        {
          path: 'info-room',
          name: 'user-info',
          component: function() {
            return import('./views/user/InfoRoom.vue')
          }
        },
        {
          path: 'order-room',
          name: 'user-order',
          component: function() {
            return import('./views/user/OrderRoom.vue')
          }
        },
        {
          path: 'comment-room',
          name: 'user-comment',
          component: function() {
            return import('./views/user/CommentRoom.vue')
          }
        }
      ]
    },
    {
      path: '/testpage',
      name: 'testpage',
      component: function() {
        return import('./components/Test/Base.vue')
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(`jumpto ${to.toString()} from ${from.toString()}`)
  if (to.path === '/') {
    next()
  } else if (to.path.startsWith('/User')) {
    if (!uf.getCurrentUser()) {
      alert('请先登录！')
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
