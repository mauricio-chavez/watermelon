import Vue from 'vue';
import Vuesax from 'vuesax';
import * as firebase from 'firebase/app';
import router from './router';
import store from './store';
import App from './components/App.vue';

import 'firebase/auth';
import 'firebase/firestore';
import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';

Vue.config.productionTip = false;

Vue.use(Vuesax);

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    const firebaseConfig = {
      apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
      authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
      projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
      appID: process.env.VUE_APP_FIREBASE_APP_ID,
    };
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(user => {
      this.$store.dispatch('changeAuthState', user);
    });
  },
}).$mount('#app');
