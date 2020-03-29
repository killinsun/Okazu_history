<template>
  <div class="home">
    <RecipieList />
  </div>
</template>

<script>
import RecipieList from '@/Components/Templates/RecipieList.vue'

export default {
  name: 'Home',
  components: {
    RecipieList
  }
}
</script>

<style scoped>
.home {
  margin-top: 3em;
  height: 100%;
}
</style>
