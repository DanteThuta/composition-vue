import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB2xCa1yq4GaHkmD-c9YsW4S75fJaLn0lc",
    authDomain: "vue-blog-system-1630b.firebaseapp.com",
    projectId: "vue-blog-system-1630b",
    storageBucket: "vue-blog-system-1630b.appspot.com",
    messagingSenderId: "904378292949",
    appId: "1:904378292949:web:90f86e6ea458483427a05c"
  };

  //initing Firebase
  firebase.initializeApp(firebaseConfig);

  //setting up Database
  let db = firebase.firestore();
  //to use timestamp FORMAT from Firebase
  let timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {db,timestamp};