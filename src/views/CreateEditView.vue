<template>
  <div class="createEditView">
    <CreateEdit :create=true />
  </div>
</template>

<script>
import CreateEdit from '@/Components/Templates/CreateEdit.vue'

export default {
  name: 'CreateEditView',
  components: {
    CreateEdit
  }
}
</script>

<style scoped>
.createEditView {
  margin-top: 3em;
  height: 100%;
}
</style>
