import firebase from 'firebase/app'
import 'firebase/firestore'

var fireConfig = {apiKey: "AIzaSyBdthsMmWwpkUEYO-bDeOOQ3zrpRTHLtxo",
authDomain: "nuke-store.firebaseapp.com",
projectId: "nuke-store",
storageBucket: "nuke-store.appspot.com",
messagingSenderId: "412213783143",
appId: "1:412213783143:web:fcc3e43b69e1fbb6ee02c2"};

const fb = firebase.initializeApp(fireConfig)

export const dataBase = fb.firestore();

<script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js"></script>

