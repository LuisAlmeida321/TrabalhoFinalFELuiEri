<template>
<div class="base">
  <v-card
    class="mx-auto"
    max-width="1500"
  >
  <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              width="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <p v-text="card.data"></p>
              <v-spacer></v-spacer>
              <p v-text="card.text"></p>
              <v-spacer></v-spacer>
              <v-btn>
              <v-icon>mdi-heart</v-icon></v-btn>
            </v-card-actions>
            

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  </div>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Counter-Strike: Global Offensive', src: 'https://th.bing.com/th/id/R13aa5bc8728a72a8f73b9d6eb18e8e8d?rik=JYTnoobnIU6u3Q&pid=ImgRaw', text: 'Score: Extremamente positivo', data: 'Data de lançamento: 21/08/2012' , flex: 6 },
        { title: 'DOOM', src: 'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Doom_image1600w.jpg',  text: 'Score: Extremamente positivo', data: 'Data de lançamento: 13/05/2016' , flex: 6 },
        { title: 'Assassins Creed', src: 'https://images2.alphacoders.com/602/602604.jpg', text: 'Score: Positivo', data: 'Data de lançamento: 19/12/2000' , flex: 6 },
        { title: 'Sea Of Thieves', src: 'https://as.com/meristation/imagenes/2019/11/26/noticias/1574749817_053077_1574749898_noticia_normal.jpg', text: 'Score: Positivo', data: 'Data de lançamento: 20/03/2018' , flex: 6 },
      ],
    }),
  }
</script>

<style scoped>
.base{
  background-color: black;
}
</style>