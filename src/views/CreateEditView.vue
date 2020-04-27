<template>
  <div class="createEditView">
    <CreateEdit :id='this.id' />
  </div>
</template>

<script>
import CreateEdit from '@/Components/Templates/CreateEdit.vue'

export default {
  name: 'CreateEditView',
  props: {
    id: {
      type: String
    }
  },
  components: {
    CreateEdit
  }
}
</script>

<style scoped>
.createEditView {
  padding-top: 2em;
  height: auto;
}
</style>
