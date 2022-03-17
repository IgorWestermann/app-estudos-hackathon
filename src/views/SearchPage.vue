<template>
  <v-container>
    <br>
    <h2>Pesquisar informações sobre filme:</h2>
    <br />
    <div class="conjuntoPesquisa">
      <v-text-field
        class="pesquisa"
        type="text"
        placeholder="Nome do filme"
        v-model="filme"
      >
      </v-text-field>
      <button @click="searchMovie(filme)">
        <v-icon>mdi-magnify</v-icon>
      </button>
    </div>
    <p>{{ filmePesquisado }}</p>  <!--apenas para teste de funcionamento -->
  </v-container>
</template>
<script>
export default {
  name: "SearchPage",

  data() {
    return {
      filme: "",
      filmePesquisado: "",
    };
  },

  methods: {
    searchMovie(movie) {
      this.filmePesquisado = movie;
      this.filme = "";
    },
  },
};
</script>
<style scoped>
.pesquisa {
  width: 80%;
}
.conjuntoPesquisa{
    display:flex;
}
button{
    width: 20%;
}
</style>