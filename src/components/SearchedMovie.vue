<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height=100%
      :src="infCard.Poster"
    ></v-img>

    <v-card-title> {{infCard.Title}} </v-card-title>

    <v-card-text>

        <!-- FAZER MÉDIA DE AVALIAÇÕES -->
      <v-row align="center" class="mx-0">
        <v-rating
          :value="changeRatingScale(infCard.imdbRating)"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4"> {{changeRatingScale(infCard.imdbRating)}} </div>
      </v-row>

      <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

      <div>
        Small plates, salads & sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve">
        Reserve
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
          required: true
      }
  },

  data: () => ({
    loading: false,
    selection: 1,
    result: 0
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },

    changeRatingScale(value){
        return this.result = (value*5)/10
    }
  },
};
</script>
<style scoped>
