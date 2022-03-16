import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import FavoritesPage from '../views/FavoritesPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/',
    name: 'Favorites',
    component: FavoritesPage
  },
]

const router = new VueRouter({
  routes
})

export default router
