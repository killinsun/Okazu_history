import firebase from '@/firebase'
import utils from '@/utils'

export default {
  async store_new_recipie ({ commit }, payload) {
    const recipie = {
      name: payload.name,
      count: 0,
      lastDate: new Date(),
      deleted: false,
      favorited: false,
      imageSrc: '/noimage.jpg'
    }

    const docRef = await firebase.storeNewRecipie('recipies', recipie)
    this.commit('CREATE_NEW_RECIPIE', docRef.id, recipie)
  },

  async update_recipie ({ commit }, payload) {
    const updatedRecipie = {
      id: payload.id,
      name: payload.name,
      imageSrc: payload.imageSrc
    }

    await firebase.updateDoc('recipies', payload.id, updatedRecipie)
    this.commit('UPDATE_RECIPIE_STATE', updatedRecipie)
  },

  async fetch_recipies ({ commit }) {
    const fetchedRecipies = await firebase.fetchAllDoc('recipies')
    const recipies = utils.transformRecipieObject(fetchedRecipies)
    if (recipies != null) { this.commit('STORE_RECIPIES', { recipies: recipies }) }
  },

  async toggle_fav_status ({ commit }, payload) {
    const afterFavStatus = !payload.favorited

    await firebase.updateDoc('recipies', payload.id, {
      favorited: afterFavStatus
    })
    this.commit('TOGGLE_FAV_RECIPIE', { id: payload.id })
  }
}
