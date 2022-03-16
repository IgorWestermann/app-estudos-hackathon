<template>
  <v-app id="inspire">
    <v-app>
      <drawer-top />
      <v-main>
        <router-view />
      </v-main>
    </v-app>
    

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
import DrawerTop from "./components/shared/DrawerTop.vue";

export default {
  components: { DrawerTop },
};
</script>
