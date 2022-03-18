<template>
  <v-container>
    <br />
    <h2>Pesquisar informações sobre filme:</h2>
    <br />
    <BarraPesquisa :parent-method="searchMovie" label="Nome do filme" />
    <div v-if="foiPesquisado">
      <SearchedMovie :infCard="infFilme" />
    </div>
  </v-container>
</template>
<script>
import SearchedMovie from "@/components/SearchedMovie.vue";
import BarraPesquisa from '@/components/shared/BarraPesquisa.vue';
export default {
  components: { SearchedMovie, BarraPesquisa },
  name: "SearchPage",

  data() {
    return {
      filme: "",
      infFilme: [],
      foiPesquisado: false,
    };
  },

  methods: {
    searchMovie(movie) {
      this.convertName(movie);
      fetch("https://www.omdbapi.com/?t=" + this.filme + "&apikey=" + process.env.VUE_APP_API_KEY)
        .then((resposta) => resposta.json())
        .then((json) => {
          this.infFilme = json;
        });
      this.filme = "";
      this.foiPesquisado = true;
    },

    convertName(movie) {
      this.filme = movie.replace(" ", "+");
    },
  },
};
</script>
<style scoped>

</style>