import {initializeApp} from 'firebase/app'

import { getFirestore } from 'firebase/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyAIQYaAcZ96mUvU33sG9_t7AVTaxWvkOoE",
    authDomain: "olxproject-7bd6d.firebaseapp.com",
    projectId: "olxproject-7bd6d",
    storageBucket: "olxproject-7bd6d.appspot.com",
    messagingSenderId: "997040365629",
    appId: "1:997040365629:web:602dc6a3664562707c0a54",
    measurementId: "G-GDRFM66EX0"
  };
  initializeApp(firebaseConfig)
 const Firebase=getFirestore();
   export default Firebase;
  