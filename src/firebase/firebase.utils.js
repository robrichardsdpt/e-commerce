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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return
      const userRef = firestore.doc(`users/${userAuth.uid}`)
      const snapShot = await userRef.get()
      if(!snapShot.exists) {
          const { displayName, email } = userAuth
          const createdAt = new Date()

          try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
          } catch(error){
              console.log('error creating user', error.message)
          }
      }
      return userRef
  }


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })
  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters( { prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase