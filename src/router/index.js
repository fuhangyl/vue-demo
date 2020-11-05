import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/picture-in-picture',
    name: 'pictureInPicture',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/picture-in-picture')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
