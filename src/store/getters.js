export default {
  user (state) {
    return state.user
  },
  userStatus (state) {
    return state.status
  },
  getRecipies (state) {
    return state.recipies.sort(function (a, b) {
      if (a.lastDate < b.lastDate) {
        return -1
      } else {
        return 1
      }
    })
  },
  getRecipieById: (state) => (id) => {
    return state.recipies.filter(recipie => {
      return recipie.id === id
    })[0]
  }
}
