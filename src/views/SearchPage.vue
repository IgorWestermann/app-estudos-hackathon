<template>
  <v-container>
    <br>
    <h2>Pesquisar informações sobre filme:</h2>
    <br />
    <div class="conjuntoPesquisa">
      <v-text-field
        class="pesquisa"
        type="text"
        label="Nome do filme"
        solo
        v-model="filme"
      >
      </v-text-field>
      <button @click="searchMovie(filme)">
        <v-icon>mdi-magnify</v-icon>
      </button>
    </div>
    <p>API: {{ infFilme.Title }}</p>
    <p> Filme: {{ filme }}</p>
    <p> key: {{ keyAPI }}</p>


  </v-container>
</template>
<script>
export default {
  name: "SearchPage",

  data() {
    return {
      filme: "",
      infFilme: [],
      keyAPI:""
    }
  },

  methods: {
    searchMovie(movie) {
        this.convertName(movie)
        fetch("https://www.omdbapi.com/?t=" + this.filme + "&apikey=" + process.env.VUE_APP_API_KEY)
        .then(resposta => resposta.json())
        .then(json => {
            this.infFilme = json
      })
        this.filme = ""
    },
    convertName(movie) {
        this.filme = movie.replace(" ","+")
    }
  }

};
</script>
<style scoped>
.pesquisa {
  width: 80%;
}
.conjuntoPesquisa{
    display:flex;
    justify-content: center;
    align-items: baseline;
}
button{
    width: 20%;
}
</style>