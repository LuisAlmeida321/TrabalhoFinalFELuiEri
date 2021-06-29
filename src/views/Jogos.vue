//https://codepen.io/vanderyz/pen/aXXrLB

<template>
<div class="base">
  <v-app class="base">
  <v-card
    class="mx-auto"
    max-width="1000"
  >
  <v-container fluid>
      <v-row dense>
        <v-col
          v-for="(info, i) in info"
          :key="i"
          :cols="info.flex"
        >
          <v-card>
            <v-img
              :src="info.imagem"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="info.nome_jogo"></v-card-title>
            </v-img>

            <v-card-actions>
              <p v-text="info.data_de_lançamento"></p>
              <v-spacer></v-spacer>
              <p v-text="info.score"></p>
              <v-spacer></v-spacer>
              <v-btn>
              <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-card-actions>
            

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  </v-app>
  </div>
</template>

<script>
  import axios from "axios";

export default {
  data(){
    return{
       novoProduto:{
        nome_jogo:"",
        imagem:"",
        data_de_lançamento:"",
        descrição:"",
        score:""
      },
       info:[]
    }
  },
  components: {

  }, 
  mounted(){
    axios
     .get("https://blogjogos-86479-default-rtdb.firebaseio.com/.json")
     .then(response => (this.info = response.data.data));

  
  },
  }
</script>

<style scoped>
.base{
  flex: 6;
  background-color: black;
}
</style>