<template>
  <v-container>
      <div class="conjuntoPesquisa">
      <v-text-field
        class="pesquisa"
        type="text"
        :label="label"
        solo
        v-model="inputResult"
        :hide-details="true"
      >
      </v-text-field>
      <button @click="parentMethod(inputResult)">
        <v-icon>mdi-magnify</v-icon>
      </button>
    </div>
     </v-container>
</template>
<script>
export default {
  name: "BarraPesquisa",

   props: {
      parentMethod: function (inputResult){
        return inputResult
      },
      label: String
   },

   // DESSA MANEIRA ELE PRÓPRIO IDENTIFICA O TYPE

//  props: [
 //     "parentMethod",
 //     "label"
 // ],

  data() {
      return {
          inputResult: ""
      }
  }
};
</script>
<style scoped>
.pesquisa {
  width: 80%;
}
.conjuntoPesquisa {
  display: flex;
  justify-content: center;
  align-items: baseline;
}
button {
  width: 20%;
}
</style>