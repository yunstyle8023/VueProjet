import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
import mov from '../components/mov.vue'
import book from '../components/book.vue'
import radio from '../components/radio.vue'
import group from '../components/group.vue'
// import sousuo from '../components/sousuo.vue'
import index from '../components/index.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/mov',
      name: 'mov',
      component: mov
    },
    {
      path: '/book',
      name: 'book',
      component: book
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
    {
      path: '/radio',
      name: 'radio',
      component: radio
    },

  ]
})
