<template>
<div>
    <form @submit.prevent="submeterFormulario" action="form" style="padding:40px">
      
    <div class="input-control">
      <label>Nome do Jogo</label>
      <input type="text" v-model="novoProduto.nome_jogo">
    </div>
    <div class="input-control">
      <label>Link da imagem</label>
      <input type="text" v-model="novoProduto.imagem">
    </div>
    <div class="input-control">
      <label>Data de lançamento</label>
      <input type="text" v-model="novoProduto.data_de_lançamento">
    </div>
    <div class="input-control">
      <label>Score do jogo</label>
      <input type="text" v-model="novoProduto.score">
    </div>
    

  <br>
  <button type="submit" class="button" >Enviar</button>
  </form>

  <div v-if="mostraAviso">
    Tem de inserir os dados.
  </div>


<v-row>
    <v-col
      v-for="(item,id) in info"
      :key="id"
      class="d-flex child-flex"
      cols="4"
    >
   <!--  <p>{{item.nomegenero}} </p> -->
      <v-img
        :src="item.imagem"
        aspect-ratio="1"
        class="grey lighten-2"
      >
       <p style="background-color: white;">{{item.nome_jogo}} </p>
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>

 

</div>
</template>
<script>
import axios from 'axios';
export default {
  data () {
    return {
      novoProduto:{
        nome_jogo:"",
        imagem:"",
        data_de_lançamento:"",
        score:""
      },
      mostraAviso: false,
      info: []
    }
  },
   mounted() {
    axios
     .get("https://blogjogos-86479-default-rtdb.firebaseio.com/.json")
     .then(response => (this.info = response.data.data));
  },
  methods:{
    submeterFormulario() {
      
      if(this.novoProduto.imagem != '' && this.novoProduto.nome_jogo != '' && this.novoProduto.score != '' && this.novoProduto.data_de_lançamento != ''){
        this.mostraAviso= false;
        return axios.post('https://blogjogos-86479-default-rtdb.firebaseio.com/data.json', this.novoProduto);
      } else {
        alert("campos vazios");
        this.mostraAviso= true;    
        }
  },

  
}
}
</script>
<style scoped>

.image{
  display: flex;
  justify-content: center;
}

.form{
  max-width: 550px;
  box-sizing: border-box;
  margin: 30px;
  margin-top: 60px;
  padding: 30px;
  text-align: justify;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
  width: 100%;
}

.button{
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #FFA500;
  background-color: white;
  color: #FFA500;
  text-decoration: none;
  padding: 10px 30px;
}
.button:hover,
.button:active {
  color: #fff;
  background-color: #FFA500;
}

.input-control {
  margin: 10px 0;
}
.input-control label {
  display: block;
  font-weight: bold;
  color: #FFA500;
}
.input-control input{
  display: block;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px; 
}
.input-control input:focus{
  background-color: #eee;
  outline: none;
}

</style>
