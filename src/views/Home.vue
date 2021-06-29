<template>
<div>
  <v-app>
  <v-carousel
    cycle
    height="100%"
    hide-delimiter-background
    show-arrows-on-hover
    class="carousel"
  >
  <h1 class="letras">Bem-vindos</h1>
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <img :src="slide.imagem ">
        </v-row>
    </v-carousel-item>
  </v-carousel>
  </v-app>
  </div>
</template>

<script>


import axios from "axios";

export default {
  data(){
    return{
       slides:[]
    }
  },
  components: {

  }, 
  mounted(){
    axios
     .get("https://blogjogos-86479-default-rtdb.firebaseio.com/.json")
     .then(response => (this.slides = response.data.data));

  
  },
  }

</script>


<style>
.letras{
  color: white;
  text-align: center;
}
.carousel{
  padding: 50px;
  background-color: black;
}

</style>