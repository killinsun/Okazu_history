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
  height: auto;
  padding-top: 2em;
  max-height:550px;
  overflow: hidden;
}
</style>
