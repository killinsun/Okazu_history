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
    return new Promise(function (resolve, reject) {
      firebase.auth().onAuthStateChanged(async user => {
        console.log('authenticating')
        user = user || {}
        if (Object.keys(user).length) {
          const userRef = firebase.firestore().collection('users').doc(user.uid)
          const userDoc = await userRef.get()
          user.gId = userDoc.data().gId
        }

        store.dispatch('fetch_user', user)
        resolve(user)
      })
    })
  },
  storeNewGroup () {
    try {
      return firebase.firestore().collection('groups').add({ name: 'test' })
    } catch (e) {
      console.error(e)
    }
  },
  async storeNewUser () {
    const user = firebase.auth().currentUser
    if (!user) return null

    try {
      const userRef = firebase.firestore().collection('users').doc(user.uid)
      const userDoc = await userRef.get()
      if (userDoc.exists) return null

      const groupRef = await this.storeNewGroup()

      firebase.firestore().collection('users').doc(user.uid).set({
        userId: user.uid,
        displayName: user.displayName,
        email: user.email,
        gId: groupRef.id
      })
    } catch (e) {
      console.error(e)
    }
  },
  storeNewRecipie (collection, recipie) {
    try {
      const docRef = firebase.firestore().collection(collection).add(recipie)
      return docRef
    } catch (e) {
      console.error(e)
    }
  },
  fetchAllRecipies (collection, gId) {
    try {
      return firebase.firestore().collection(collection).where('gId', '==', gId).get()
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
  },
  incrementDocField (collection, docId, incrementItem) {
    try {
      return firebase.firestore().collection(collection).doc(docId)
        .update({
          [incrementItem]: firebase.firestore.FieldValue.increment(1),
          lastDate: new Date()
        })
    } catch (e) {
      console.error(e)
    }
  }
}
