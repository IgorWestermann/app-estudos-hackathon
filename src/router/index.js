import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import FavoritesPage from '../views/FavoritesPage.vue'
import SearchPage from "../views/SearchPage"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: FavoritesPage
  },
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
