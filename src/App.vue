<template>
    <div>
    <v-app-bar 
      color="grey darken-3"
      dark
      dense
      shrink-on-scroll
      scroll-target="#scrolling-techniques" class="base">
          <v-list-item>
            <v-button>
              <router-link to="/">
                 <v-btn depressed elevation="24" large outlined plain raised rounded x-large>Home</v-btn>
              </router-link>
            </v-button>
            </v-list-item>
          <v-list-item>
            <v-button>
              <router-link to="/Jogos">
                 <v-btn depressed elevation="24" large outlined plain raised rounded x-large>Jogo</v-btn>
              </router-link>
            </v-button>
          </v-list-item> 
            <v-list-item>
            <v-button>
              <router-link to="/About" >
                <v-btn depressed elevation="24" large outlined plain raised rounded x-large>About</v-btn>
              </router-link>
            </v-button>
            </v-list-item>

          
          <v-list-item>
            <v-button>
              <router-link to="/Admin" >
                <v-btn depressed elevation="24" large outlined plain raised rounded x-large>Admin</v-btn>
              </router-link>
            </v-button>
          </v-list-item>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon>
        <router-link to="/Login"> 
        <span class="material-icons">
              <v-icon x-large dark>mdi-account</v-icon>
              </span>
        </router-link>  
      </v-app-bar-nav-icon>
      <v-app-bar-nav-icon>
        <router-link to="/Registo">
          <span class="material-icons">
            <v-icon x-large dark>mdi-account-cog</v-icon>          
          </span>
        </router-link>  
      </v-app-bar-nav-icon> 
    </v-app-bar>


    <router-view></router-view>
    <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="footer" >
        
        <img width="4%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"><h5>Vue</h5>
        <img width="5%" src="https://cdn.hackernoon.com/hn-images/1*lAR9Uh_gJ7dp23e0vhy5Hg.png"><h5>Api</h5>
        <img width="7%" src="https://cours.ebsi.umontreal.ca/sci6306/images/bootstrap-solid.png"><h5>Bootstrap</h5>
        <img width="5%" src="https://blog.leonhassan.co.uk/content/images/2019/09/css3.svg"><h5>CSS</h5>
        <img width="6%" src="https://pbs.twimg.com/media/Ei5n6vBWoAEy5gp.png"><h5>Vuetify</h5>
        <v-spacer></v-spacer>
        <strong class="subheading">As nossas redes sociais</strong>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon id="">
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
 
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} --- <strong>Projeto de Front-end, UMA</strong>
      </v-card-text>
    </v-card>
  </v-footer>   
  </div> 
  
  

</template>
<style scoped>
.base{
  padding: 25px;
}
.img1{
  height: 10px;
}
.material-icons{
 
  color: white;
}
.footer{
  nav-down: auto;
  background-color: grey;
}
</style>
<script>
import axios from "axios";

export default {
  name: "App",
  data: () => ({
    drawer: false,
    group: null,
    icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
  }),
 
  watch: {
    group() {
      this.drawer = false;
    },
  },

methods: {
    carregaPesquisa(pesquisa) {

      if(pesquisa == '') {
        axios
        .get("https://www.vagalume.com.br/news/index.js")
        .then(response => (this.info = response.data.news));

      }
      axios
        .get("https://www.vagalume.com.br/" + pesquisa +"/index.js")
        .then(response => (this.listaartista = response.data.artist.genre));
      this.url = "https://www.vagalume.com.br/" + pesquisa;
      this.url_imagem = this.url + "/images/" + pesquisa + ".jpg";
      this.artista = pesquisa;
    }
}};
</script>

