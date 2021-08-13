import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD_J9OAUp2RTpLuYkxLQh7doCbmPcCRheM",
  authDomain: "clone-50a7a.firebaseapp.com",
  projectId: "clone-50a7a",
  storageBucket: "clone-50a7a.appspot.com",
  messagingSenderId: "975753339451",
  appId: "1:975753339451:web:de1648b72790e84e90321e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth}; 