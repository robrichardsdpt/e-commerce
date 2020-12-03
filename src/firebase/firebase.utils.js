import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA6zVX0IhW8CCqOzZk-PDD7yI3DcHuoKRo",
    authDomain: "crwn-db-4dda0.firebaseapp.com",
    projectId: "crwn-db-4dda0",
    storageBucket: "crwn-db-4dda0.appspot.com",
    messagingSenderId: "11891246788",
    appId: "1:11891246788:web:91314b4d7fd8f75cdfeb91",
    measurementId: "G-NZ2VC3F5EC"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters( { prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase