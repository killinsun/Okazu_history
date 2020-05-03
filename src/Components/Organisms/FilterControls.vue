<template>
  <div class='filter-controls'>
    <SearchBar />
  </div>
</template>

<script>
import SearchBar from '@/Components/Molecules/SearchBar.vue'

export default {
  name: 'FilterControls',
  components: {
    SearchBar
  }

}
</script>

<style scoped>
div.filter-controls {
  margin-top: 0.5em;

}
</style>
