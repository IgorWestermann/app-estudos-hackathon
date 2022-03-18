<template>
  <div class="app-navbar">
    <v-app-bar color="deep-purple" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>NetflIteris</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/search">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-magnify</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Search</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-movie-open-play</v-icon>
              </v-list-item-icon>
              <v-list-item-title>What to see</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/favorites">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-cards-heart</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Favorites</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-information-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>About us</v-list-item-title>
            </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "AppNavbar",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>