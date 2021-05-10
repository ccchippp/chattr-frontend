import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAsLxT3QjIqWDtJneJ5XzWG9NgKL1bGekc",
    authDomain: "chattr-f3efb.firebaseapp.com",
    projectId: "chattr-f3efb",
    storageBucket: "chattr-f3efb.appspot.com",
    messagingSenderId: "556919089399",
    appId: "1:556919089399:web:6909aac891cf7492eb0bf2"
  }

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider

export { auth, provider }
export default db