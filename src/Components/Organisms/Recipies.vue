<template>
  <div class='recipies'>
    <Recipie v-for='recipie in filteredRecipies' :key='recipie.id' :recipie='recipie' />
  </div>
</template>

<script>
import Recipie from '@/Components/Molecules/Recipie.vue'

export default {
  name: 'Recipies',
  data: function () {
    return {
      searchWord: ''
    }
  },
  components: {
    Recipie
  },
  created: function () {
    if (this.recipies.length > 0 ||
          this.$store.state.loading === true) return
    this.load()
  },
  computed: {
    user: function () {
      return this.$store.getters.user
    },
    recipies: function () {
      return this.$store.state.recipies
    },
    filteredRecipies: function () {
      let data = this.recipies

      const filterWord = this.searchWord && this.searchWord.toLowerCase()
      if (filterWord) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterWord) > -1
          })
        })
      }
      return data
    }
  },
  methods: {
    load: function () {
      this.$store.dispatch('fetch_recipies', { gId: this.user.gId })
    }
  }
}
</script>
