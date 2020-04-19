import firebase from '@/firebase'
import utils from '@/utils'

export default {
  fetch_user ({ commit }, user) {
    this.commit('ON_AUTH_STATE_CHANGED', user)
    this.commit('ON_AUTH_STATUS_CHANGED', !!user.uid)
  },
  async store_new_recipie ({ commit }, payload) {
    const recipie = {
      name: payload.newRecipieItem.name,
      gId: payload.gId,
      count: 0,
      lastDate: new Date(),
      deleted: false,
      favorited: false,
      imageSrc: '/noimage.jpg'
    }

    const docRef = await firebase.storeNewRecipie('recipies', recipie)
    if (payload.file != null) {
      recipie.imageSrc = await firebase.uploadImage(payload.uid, docRef.id, payload.file)
    }
    this.commit('CREATE_NEW_RECIPIE', { id: docRef.id, recipie: recipie })
  },

  async update_recipie ({ commit }, payload) {
    if (payload.file != null) {
      payload.updatedItems.imageSrc = await firebase.uploadImage(payload.uid, payload.updatedItems.recipieId, payload.file)
    }
    await firebase.updateDoc('recipies', payload.updatedItems.recipieId, payload.updatedItems)

    this.commit('UPDATE_RECIPIE_STATE', payload.updatedItems)
  },

  async fetch_recipies ({ commit }, payload) {
    const fetchedRecipies = await firebase.fetchAllRecipies('recipies', payload.gId)
    const recipies = utils.transformRecipieObject(fetchedRecipies)
    if (recipies != null) { this.commit('STORE_RECIPIES', { recipies: recipies }) }
  },

  async toggle_fav_status ({ commit }, payload) {
    const afterFavStatus = !payload.favorited

    await firebase.updateDoc('recipies', payload.id, {
      favorited: afterFavStatus
    })
    this.commit('TOGGLE_FAV_RECIPIE', { id: payload.id })
  },

  async increment_cooked_counter ({ commit }, payload) {
    await firebase.incrementDocField('recipies', payload.id, 'count')
    this.commit('INCREMENT_COOKED_COUNTER', { id: payload.id })
  }
}
