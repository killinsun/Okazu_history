import { format } from 'date-fns'

export default {
  transformRecipieObject (recipiesFromApi) {
    if (recipiesFromApi === undefined || recipiesFromApi.length === 0) return null
    const transformedRecipies = []
    recipiesFromApi.forEach((recipie) => {
      const formattedLastDate = format(recipie.data().lastDate.toDate(), 'yyyy/MM/dd')
      transformedRecipies.push({
        id: recipie.id,
        name: recipie.data().name,
        count: recipie.data().count,
        lastDate: formattedLastDate,
        deleted: recipie.data().deleted,
        favorited: recipie.data().favorited,
        imageSrc: recipie.data().imageSrc
      })
    })
    return transformedRecipies
  },

  returnFormattedDate (date) {
    const formattedLastDate = format(date, ' yyyy/MM/dd')
    return formattedLastDate
  }
}
