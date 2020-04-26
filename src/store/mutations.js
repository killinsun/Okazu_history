import { format } from 'date-fns'

export default {
  /*
    * Store recipies from firebase
    * @state {Object} this Store's state
    * @{ recipies } {Object} recipies which are fetched by action
  */
  STORE_RECIPIES (state, { recipies }) {
    state.recipies = recipies
  },

  /*
    * Create a new recipie
    * @state {Object} this Store's state
    * @name {String} Recipie's name
    * TODO: なおす
  */
  CREATE_NEW_RECIPIE (state, { id, recipie }) {
    recipie.id = id
    state.recipies.push(
      recipie
    )
    state.loading = false
  },

  /*
    * Update recipie state
    * @state {Object} this Store's state
    * @recipie{Object} Recipie object which has updated states.
  */
  UPDATE_RECIPIE_STATE (state, recipie) {
    const filtered = state.recipies.filter(r => {
      return r.id === recipie.recipieId
    })

    filtered.forEach(r => {
      if (recipie.name) r.name = recipie.name
      if (recipie.lastDate) r.lastDate = recipie.lastDate
      if (recipie.deleted) r.deleted = recipie.deleted
      if (recipie.favorited) r.favorited = recipie.favorited
      if (recipie.imageSrc) r.imageSrc = recipie.imageSrc
    })

    state.loading = false
  },

  /*
    * Delete Recipie from store
    * @state {Object} this Store's state
    * @recipieId {String} recipie's id which you want to delete
  */
  DELETE_RECIPIE (state, recipieId) {
    const filtered = state.recipies.filter(r => {
      return r.id !== recipieId
    })

    state.recipies = filtered
    state.loading = false
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
    * Increment cooked counter
    * @state {Object} this Store's state
    * @id Recipie's ID
  */
  INCREMENT_COOKED_COUNTER (state, { id }) {
    const filtered = state.recipies.filter(r => {
      return r.id === id
    })

    filtered.forEach(r => {
      r.count++
      r.lastDate = format(new Date(), 'yyyy/MM/dd')
    })
  },
  /*
    * onAuthStateChanged
    * @state {Object} this Store's state
    * @user logged in user object
  */
  ON_AUTH_STATE_CHANGED (state, user) {
    state.user = user
  },
  /*
    * onAuthStatusChanged
    * @state {Object} this Store's state
    * @status {Boolean} true is loggedin, false is not loggedin.
  */
  ON_AUTH_STATUS_CHANGED (state, status) {
    state.status = status
  },

  ON_LOADING_STATUS_CHANGED (state, loading) {
    state.loading = loading
  }
}
