import * as firebase from 'firebase'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import store from './store'

const config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDERID,
  appId: process.env.VUE_APP_FB_APP_ID
}

export default {
  init () {
    firebase.initializeApp(config)
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  },
  login () {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
  },
  logout () {
    firebase.auth().signOut()
  },
  onAuth () {
    firebase.auth().onAuthStateChanged(user => {
      user = user || {}
      store.commit('ON_AUTH_STATE_CHANGED', user)
      store.commit('ON_AUTH_STATUS_CHANGED', !!user.uid)
    })
  },
  storeNewRecipie (collection, recipie) {
    try {
      const docRef = firebase.firestore().collection(collection).add(recipie)
      return docRef
    } catch (e) {
      console.error(e)
    }
  },
  fetchAllDoc (collection) {
    try {
      return firebase.firestore().collection(collection).get()
    } catch (e) {
      console.error(e)
    }
  },
  updateDoc (collection, docId, updatedItems) {
    try {
      return firebase.firestore().collection(collection).doc(docId).update(updatedItems)
    } catch (e) {
      console.error(e)
    }
  }
}
