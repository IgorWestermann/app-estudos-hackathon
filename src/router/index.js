import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchPage from "../views/SearchPage"

Vue.use(VueRouter)

const routes = [
  //{
  // path: '/',
  // name: 'home',
  // component: HomePage
  //},
  {
  path: '/search',
  name: 'search-page',
  component: SearchPage
  }
]

const router = new VueRouter({
  routes
})

export default router
