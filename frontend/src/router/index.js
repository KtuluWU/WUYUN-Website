import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/pages/Hello'
import Home from '../components/pages/Home'
import Work from '../components/pages/Work'
import Blog from '../components/pages/Blog'
import Life from '../components/pages/Life'
import Contact from '../components/pages/Contact'
import Vuejs from '../components/pages/Vuejs'
import Laravel from '../components/pages/Laravel'
import Environment from '../components/pages/Environment'
import Wechat from '../components/pages/Wechat'
import NotFound from '../components/pages/NotFound'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/life',
      name: 'Life',
      component: Life
    },
    {
      path: '/vuejs',
      name: 'Vuejs',
      component: Vuejs
    },
    {
      path: '/laravel',
      name: 'Laravel',
      component: Laravel
    },
    {
      path: '/environment',
      name: 'Environment',
      component: Environment
    },
    {
      path: '/wechat',
      name: 'Wechat',
      component: Wechat
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
