import firebase from "@firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAwbMtw-jK5Jt0tCLbAyFRP2mfQHfKFq54",
    authDomain: "sharemytip.firebaseapp.com",
    projectId: "sharemytip",
    storageBucket: "sharemytip.appspot.com",
    messagingSenderId: "605455432354",
    appId: "1:605455432354:web:ff72230ef0ac5ee1eab5fb",
    measurementId: "G-YKGC9E11ZB"
  };
firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export default firebase;