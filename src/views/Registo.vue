<template>
<div class="base">
<div class="flex_container" style="align:center">

   <v-container class="altura">
    <v-layout row class="text-xs-center" style="align:center; padding-left:25%">
      <v-flex xs8>
        <v-container >
          <v-card flat>
            <v-card-title primary-title>
              <h4>Registo</h4>
            </v-card-title>
            <v-form style="padding-left:15px">
            <v-text-field name="Email" label="Email" v-model="email"></v-text-field>
            <v-text-field name="Password" label="Password" type="password" v-model="password"></v-text-field>
            <v-card-actions>
              <v-btn primary large block @click="registo()">Registo</v-btn>
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
import firebase from 'firebase'

export default ({
    data() {
        return {
            password: '',
            email: '',
        }
    },
    methods: {
        registo(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then((userCredential) => {
                    // Signed in 
                    var user = userCredential.user;
                    console.log("deu " + user);
                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log("nao deu " + errorCode + errorMessage);
                    // ..
                });
        }
    }
})
</script>
<style s>
.base{
  background-color: black;
}
</style>
