import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyC1IUcGskcS2lKcqb6OKesk3Lup1zBvDRQ",
  authDomain: "messenger-mern-2f30e.firebaseapp.com",
  databaseURL: "https://messenger-mern-2f30e.firebaseio.com",
  projectId: "messenger-mern-2f30e",
  storageBucket: "messenger-mern-2f30e.appspot.com",
  messagingSenderId: "138853656437",
  appId: "1:138853656437:web:8932d11695513722a4553c"
})

const db = firebaseApp.firestore()

export default db