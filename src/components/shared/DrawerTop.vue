<template>
  <div class="drawer">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> NetflIteris </v-list-item-title>
          <v-list-item-subtitle> What's best 4 U </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    
    

  </div>
</template>

<script>
export default {
  name: "DrawerTop",
  data: () => ({
    drawer: null,
    items: [
      { title: "Welcome", icon: "mdi-home" },
      { title: "Search", icon: "mdi-magnify", path: "/search" },
      { title: "What to see", icon: "mdi-movie-open-play" },
      { title: "Favorites", icon: "mdi-cards-heart" },
      { title: "About us", icon: "mdi-information-outline" },
    ],
  }),
};
</script>

<style>
</style>