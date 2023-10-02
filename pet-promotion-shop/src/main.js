// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import './registerServiceWorker'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2yvgZra1qLxVSvCXYWyXw33OHdDXtBCY",
  authDomain: "petshop-vue.firebaseapp.com",
  projectId: "petshop-vue",
  storageBucket: "petshop-vue.appspot.com",
  messagingSenderId: "609961053255",
  appId: "1:609961053255:web:dcbfa4704cfc2c467bf562",
  measurementId: "G-1Y2ZFPTSCS"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = createApp(App)

app.use(router)

app.mount('#app')
