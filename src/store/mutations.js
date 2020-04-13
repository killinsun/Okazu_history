export default {
  /*
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
  },

  /*
    * Update recipie state
    * @state {Object} this Store's state
    * @recipie{Object} Recipie object which has updated states.
  */
  UPDATE_RECIPIE_STATE (state, recipie) {
    const filtered = state.recipies.filter(r => {
      return r.id === recipie.id
    })

    filtered.forEach(r => {
      if (recipie.name) r.name = recipie.name
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
  }
}
