export default {
  transformRecipieObject (recipiesFromApi) {
    if (recipiesFromApi === undefined || recipiesFromApi.length === 0) return null
    const transformedRecipies = []
    recipiesFromApi.forEach((recipie) => {
      transformedRecipies.push({
        id: recipie.id,
        name: recipie.data().name,
        count: recipie.data().count,
        lastDate: recipie.data().lastDate.toDate(),
        deleted: recipie.data().deleted,
        favorited: recipie.data().favorited,
        imageSrc: recipie.data().imageSrc
      })
    })
    return transformedRecipies
  }
}
