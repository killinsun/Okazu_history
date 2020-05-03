export default {
  user (state) {
    return state.user
  },
  userStatus (state) {
    return state.status
  },
  getRecipies (state) {
    let data = state.recipies

    const filterWord = state.searchWord && state.searchWord.toLowerCase()
    if (filterWord) {
      data = data.filter(function (row) {
        return Object.keys(row).some(function (key) {
          return String(row[key]).toLowerCase().indexOf(filterWord) > -1
        })
      })
    }
    data.sort(function (a, b) {
      if (a.lastDate < b.lastDate) {
        return -1
      } else {
        return 1
      }
    })

    return data
  },
  getRecipieById: (state) => (id) => {
    return state.recipies.filter(recipie => {
      return recipie.id === id
    })[0]
  }
}
