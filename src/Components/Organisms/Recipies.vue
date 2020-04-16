<template>
  <div class='recipies'>
    <Recipie v-for='recipie in recipies' :key='recipie.name' :recipie='recipie' />
  </div>
</template>

<script>
import Recipie from '@/Components/Molecules/Recipie.vue'

export default {
  name: 'Recipies',
  components: {
    Recipie
  },
  mounted: function () {
    this.load()
  },
  computed: {
    user: function () {
      console.log('---computed----')
      return this.$store.getters.user
    },
    recipies: function () {
      return this.$store.state.recipies
    }
  },
  methods: {
    load: function () {
      this.$store.dispatch('fetch_recipies', { gId: this.user.gId })
      console.log('dispatched')
    }
  }
}
</script>
