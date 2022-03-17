<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="100%" :src="infCard.Poster"></v-img>

    <v-card-title> {{ infCard.Title }} </v-card-title>

    <v-card-text>
      <!-- FAZER MÉDIA DE AVALIAÇÕES -->
      <v-row align="center" class="mx-0">
        <v-rating
          :value="rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">{{ rating }}</div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        {{ infCard.Year }} • {{ infCard.Rated }} • {{ infCard.Runtime }}
      </div>

      <div>
        {{ infCard.Plot }}
      </div>
      <br />
      <div class="elencoDirecao">
        Atores: {{ infCard.Actors }}<br />
        Direção: {{ infCard.Director }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-subtitle>Genre</v-card-subtitle>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip v-for="genero of infCard.Genre.split(',')" :key="genero">
          {{ genero }}
        </v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve">
        Favoritar
        <!-- depois colocar o icon do coração -->
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "SearchedMovie",

  props: {
    infCard: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    loading: false,
    selection: 1,
    rating: 0,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },

    changeRatingScale(value) {
      this.rating = (value * 5) / 10;
    },
  },

  updated() {
    this.changeRatingScale(this.infCard.imdbRating);
  },
};
</script>
<style scoped>
.elencoDirecao {
  font-size: 80%;
  line-height: 90%;
}
</style>
