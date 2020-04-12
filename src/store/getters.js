export default {
  user (state) {
    return state.user
  },
  userStatus (state) {
    return state.status
  },
  getRecipieById: (state) => (id) => {
    return state.recipies.filter(recipie => {
      return recipie.id === id
    })[0]
  }
}
