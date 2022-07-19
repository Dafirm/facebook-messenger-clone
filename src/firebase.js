import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp( {
    
        apiKey: "AIzaSyB440K6Uuz2hItfeDI0QIyzArKWEsgTSnI",
        authDomain: "facebook-messenger-clone-4266d.firebaseapp.com",
        projectId: "facebook-messenger-clone-4266d",
        storageBucket: "facebook-messenger-clone-4266d.appspot.com",
        messagingSenderId: "318195206961",
        appId: "1:318195206961:web:bc90c2a3ad0f3e632dfe10"
      
})

const db = firebaseApp.firestore();
export default db;
