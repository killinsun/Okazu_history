import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const mutations = {
  /*
    * Create a new recipie
    * @state {Object} this Store's state
    * @name {String} Recipie's name
    */
  CREATE_NEW_RECIPIE (state, { name, imageSrc }) {
    state.recipies.push(
      {
        id: state.nextRecipieId,
        name: name,
        count: 0,
        lastDate: null,
        deleted: false,
        favorited: false,
        imageSrc: imageSrc
      }
    )
    state.nextRecipieId++
  },

  /*
    * Update recipie state
    * @state {Object} this Store's state
    * @recipie{Object} Recipie object which has updated states.
  */
  UPDATE_RECIPIE_STATE (state, { recipie }) {
    const filtered = state.recipies.filter(r => {
      return r.id === recipie.id
    })

    filtered.forEach(r => {
      if (recipie.name) r.name = recipie.name
      if (recipie.count) r.count = recipie.count
      if (recipie.lastDate) r.lastDate = recipie.lastDate
      if (recipie.deleted) r.deleted = recipie.deleted
      if (recipie.favorited) r.favorited = recipie.favorited
      if (recipie.imageSrc) r.imageSrc = recipie.imageSrc
    })
  },

  /*
    * Toggle searchbar inputting state
    * @state {Object} this Store's state
  */
  TOGGLE_SEARCHBAR_INPUT_STATE (state) {
    state.inputtingSearchBar = !state.inputtingSearchBar
  },

  /*
    * Toggle state of favorite
    * @state {Object} this Store's state
    * @id Recipie's ID
  */
  TOGGLE_FAV_RECIPIE (state, { id }) {
    const filtered = state.recipies.filter(r => {
      return r.id === id
    })

    filtered.forEach(r => {
      r.favorited = !r.favorited
    })
  },
  /*
    * Increment coocked counter
    * @state {Object} this Store's state
    * @id Recipie's ID
  */
  INCREMENT_COOCKED_COUNTER (state, { id }) {
    const filtered = state.recipies.filter(r => {
      return r.id === id
    })

    filtered.forEach(r => {
      r.count++
    })
  }
}

export default new Vuex.Store({
  state: {
    recipies: [
      {
        id: 0,
        name: '無限キャベツ',
        count: 0,
        lastDate: '2020/01/01',
        deleted: false,
        favorited: true,
        imageSrc: '/noimage.jpg'
      }
    ],
    nextRecipieId: 1
  },
  mutations,
  actions: {
  },
  modules: {
  }
})
