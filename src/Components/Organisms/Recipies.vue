<template>
  <div class='recipies'>
    <Recipie v-for='recipie in recipies' :key='recipie.id' :recipie='recipie' />
  </div>
</template>

<script>
import Recipie from '@/Components/Molecules/Recipie.vue'

export default {
  name: 'Recipies',
  components: {
    Recipie
  },
  created: function () {
    if (this.recipies.length > 0 &&
          this.$store.state.loading === true) return
    this.load()
  },
  computed: {
    user: function () {
      return this.$store.getters.user
    },
    recipies: function () {
      return this.$store.state.recipies
    }
  },
  methods: {
    load: function () {
      this.$store.dispatch('fetch_recipies', { gId: this.user.gId })
    }
  }
}
</script>
