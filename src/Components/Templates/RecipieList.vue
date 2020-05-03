<template>
  <main>
    <FilterControls />
    <Recipies />
    <CreateButton />
  </main>
</template>

<script>
import FilterControls from '@/Components/Organisms/FilterControls.vue'
import Recipies from '@/Components/Organisms/Recipies.vue'
import CreateButton from '@/Components/Atoms/CreateButton.vue'

export default {
  name: 'RecipieList',
  components: {
    FilterControls,
    Recipies,
    CreateButton
  }
}
</script>

<style>
main {
  margin: auto;
  height: 100%;
  position: relative;
}
</style>
