<template>
  <div class='recipies'>
    <Recipie v-for='recipie in recipies' :key='recipie.name' :recipie='recipie' />
  </div>
</template>

<script>
import Recipie from '@/Components/Molecules/Recipie.vue'

export default {
  name: 'Recipies',
  created: function () {
    this.$store.dispatch('fetch_recipies')
  },
  components: {
    Recipie
  },
  computed: {
    recipies: function () {
      return this.$store.state.recipies
    }
  }
}
</script>
