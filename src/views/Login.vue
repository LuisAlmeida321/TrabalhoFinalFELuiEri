<template>
<div class="base">
<div class="flex_container" style="align:center">
  
   <v-container class="altura">
    <v-layout row class="text-xs-center" style="align:center; padding-left:25%">
      <v-flex xs8>
        <v-container >
          <v-card flat>
            <v-card-title primary-title>
              <h4>Login</h4>
            </v-card-title>
            <v-form style="padding-left:15px">
            <v-text-field name="Email" label="Email" v-model="email"></v-text-field>
            <v-text-field name="Password" label="Password" type="password" v-model="password"></v-text-field>
            <v-card-actions>
              <v-btn primary large block @click="login()">Login</v-btn>
            </v-card-actions>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>

</div>
</div>
</template>

<script>
import firebase from 'firebase';
export default ({
    data() {
      return {
        email: '',
        password: '',
      }  
    },
    methods: {
        login(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user);
                this.$router.push('/');
                // ...
            })
            .catch((error) => {
                alert("Erro de autenticaçao");
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode + errorMessage);
  });
        }
    }
})

</script>
<style> 
  .flex_container{
    display: grid;
    padding-top:5%;
    padding-bottom: 5%;
    align-content: center;
  }
.base{
  background-color: black;
}
 </style>

