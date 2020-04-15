<template>
  <div class='signin'>
    <Authentication />
  </div>
</template>

<script>
import Authentication from '@/Components/Molecules/Authentication.vue'

export default {
  name: 'Signin',
  components: {
    Authentication
  }
}
</script>

<style scoped>
.signin{
  margin-top: 3em;
  height: 100%;
}

</style>
