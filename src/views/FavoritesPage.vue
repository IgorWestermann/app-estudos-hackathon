<template>
  <v-card class="mx-auto" max-width="500">
    <v-container fluid>
      <h2>Favoritos</h2>
      <v-row dense>
        <v-col v-for="(data, index) in postList" :key="data.id">
          <v-card >
            <v-img
              :src="posts[index].Poster"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="280px"
              aspect-ratio="1.7"
              contain
            >
              <v-card-title v-text="posts[index].Title"></v-card-title>
            </v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="teal accent-4" @click="reveal = true">
                Ver mais
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <v-card
                v-if="reveal"
                class="transition-fast-in-fast-out v-card--reveal "
              >
                <v-card-text class="pb-0">
                  <p class="text-h4 text--primary">Origin</p>
                  <p>
                    late 16th century (as a noun denoting a place where alms
                    were distributed): from medieval Latin eleemosynarius, from
                    late Latin eleemosyna ‘alms’
                  </p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn text color="teal accent-4" @click="reveal = false">
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "FavoritesPage",
  data: () => ({
    posts: [{}],
    reveal: false,
  }),
  computed: {
    postList() {
      const postsInfo = this.posts;
      return postsInfo;
    },
  },
  created() {
    fetch("http://localhost:3000/filmes")
      .then((res) => res.json())
      .then((json) => {
        this.posts = json;
      })
      .then(console.log(this.posts));
  },
};
</script>
<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>