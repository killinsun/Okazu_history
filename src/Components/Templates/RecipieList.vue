<template>
  <main>
    <Recipies />
    <CreateButton />
  </main>
</template>

<script>
import Recipies from '@/Components/Organisms/Recipies.vue'
import CreateButton from '@/Components/Atoms/CreateButton.vue'

export default {
  name: 'RecipieList',
  components: {
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
