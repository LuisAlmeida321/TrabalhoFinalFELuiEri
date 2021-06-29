import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueHorizontalTimeline from "vue-horizontal-timeline";
import firebase from 'firebase';

Vue.use(VueHorizontalTimeline);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app') 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9ph2fmSOwKm-Qhc62Q4OJVCsiBqJzYnI",
    authDomain: "blogjogos-86479.firebaseapp.com",
    databaseURL: "https://blogjogos-86479-default-rtdb.firebaseio.com",
    projectId: "blogjogos-86479",
    storageBucket: "blogjogos-86479.appspot.com",
    messagingSenderId: "649218195950",
    appId: "1:649218195950:web:1c6815818d58ab82444eff"
};
firebase.initializeApp(firebaseConfig);


