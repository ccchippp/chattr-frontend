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


if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
    // Additional state parameters can also be passed via URL.
    // This can be used to continue the user's intended action before triggering
    // the sign-in operation.
    // Get the email if available. This should be available if the user completes
    // the flow on the same device where they started it.
    var email = window.localStorage.getItem('emailForSignIn');
    if (!email) {
      email = window.prompt('Please provide your email for confirmation');
    }
    // The client SDK will parse the code from the link for you.
    firebase.auth().signInWithEmailLink(email, window.location.href)
      .then((result) => {
        // Clear email from storage.
        window.localStorage.removeItem('emailForSignIn');
        // You can access the new user via result.user
        // Additional user info profile not available via:
        // result.additionalUserInfo.profile == null
        // You can check if the user is new or existing:
        // result.additionalUserInfo.isNewUser
      })
      .catch((error) => {
      });
  }
export { auth }
export default db